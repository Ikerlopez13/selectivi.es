import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = (process.env.GOOGLE_AI_API_KEY || "").trim();
    if (!apiKey) return NextResponse.json({ error: "Falta API Key" }, { status: 500 });
    
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    const { createClient } = await import('@supabase/supabase-js');
    
    // Crear cliente Supabase con el token del usuario para validar identidad
    const supabaseUser = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${token}` } } }
    );

    const { data: { user }, error: authError } = await supabaseUser.auth.getUser();
    if (authError || !user) return NextResponse.json({ error: 'Sesión inválida' }, { status: 401 });

    // Cliente administrativo para leer/escribir en la tabla usuarios (donde no llega RLS de Auth)
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Verificar estado Premium y Usos
    const { data: userData, error: userError } = await supabaseAdmin
      .from('usuarios')
      .select('es_premium, ai_lab_uses, premium_ai_uses, last_ai_use_at')
      .eq('user_id', user.id)
      .single();

    if (userError) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });

    const isPremium = Boolean(userData.es_premium);
    const uses = userData.ai_lab_uses || 0;
    const premiumUses = userData.premium_ai_uses || 0;
    const lastUseAt = userData.last_ai_use_at ? new Date(userData.last_ai_use_at) : null;

    // 2. Aplicar el Candado
    if (!isPremium) {
      // Free: 2 usos máximo para siempre
      if (uses >= 2) {
        return NextResponse.json({ 
          error: 'LIMIT_REACHED', 
          message: 'Has agotado tus 2 créditos gratuitos de por vida. ¡Hazte Premium para tener acceso ilimitado!' 
        }, { status: 403 });
      }
    } else {
      // Premium: Límite diario de 70 (para evitar abusos/costos excesivos)
      const now = new Date();
      const isSameDay = lastUseAt && 
        lastUseAt.getUTCFullYear() === now.getUTCFullYear() &&
        lastUseAt.getUTCMonth() === now.getUTCMonth() &&
        lastUseAt.getUTCDate() === now.getUTCDate();

      const currentDailyUses = isSameDay ? premiumUses : 0;

      if (currentDailyUses >= 70) {
        return NextResponse.json({ 
          error: 'DAILY_LIMIT_REACHED', 
          message: 'Has alcanzado el límite diario de 70 exámenes con IA. ¡Mañana tendrás más créditos!' 
        }, { status: 403 });
      }
    }

    const body = await req.json();
    const { content, count = 5 } = body;
    const cleanContent = content.slice(0, 30000);

    const quizPrompt = `
      Genera un JSON con ${count} preguntas tipo test nivel EBAU/Selectividad sobre este texto:
      {"questions": [{"pregunta": "...", "opcion_a": "...", "opcion_b": "...", "opcion_c": "...", "opcion_d": "...", "correcta": "a", "explicacion": "..."}]}
      TEXTO:
      ${cleanContent}
    `;

    // USAMOS LOS MODELOS QUE TU LLAVE HA CONFIRMADO EN EL ESCANEO
    // Obligatorio v1beta para estos modelos de nueva generación
    const modelsToTry = ["gemini-2.0-flash", "gemini-2.0-flash-lite", "gemini-2.5-flash"];
    let lastErr = null;

    for (const m of modelsToTry) {
        // En el REST API de Google, a veces hay que usar v1beta para modelos nuevos
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`;
        
        try {
            const googleRes = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: quizPrompt }] }],
                    generationConfig: {
                        response_mime_type: "application/json"
                    }
                })
            });

            const data = await googleRes.json();

            if (googleRes.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                let t = data.candidates[0].content.parts[0].text;
                t = t.replace(/```json/g, "").replace(/```/g, "").trim();
                const quiz = JSON.parse(t);
                
                // 3. Incrementar contador
                if (!isPremium) {
                  await supabaseAdmin.from('usuarios')
                    .update({ ai_lab_uses: uses + 1 })
                    .eq('user_id', user.id);
                } else {
                  // Incrementar diario premium
                  const now = new Date();
                  const isSameDay = lastUseAt && 
                    lastUseAt.getUTCFullYear() === now.getUTCFullYear() &&
                    lastUseAt.getUTCMonth() === now.getUTCMonth() &&
                    lastUseAt.getUTCDate() === now.getUTCDate();
                  
                  await supabaseAdmin.from('usuarios')
                    .update({ 
                      premium_ai_uses: isSameDay ? premiumUses + 1 : 1,
                      last_ai_use_at: now.toISOString()
                    })
                    .eq('user_id', user.id);
                }

                return NextResponse.json(quiz);
            } else {
                lastErr = data.error?.message || "Fallo en el modelo";
                console.warn(`Intento ${m} fallido: ${lastErr}`);
            }
        } catch (err) {
            console.error(`Error crítico en ${m}:`, err);
        }
    }

    return NextResponse.json({ 
      error: `La tecnología 2.0/2.5 de tu llave todavía está en fase restringida: ${lastErr}.`
    }, { status: 500 });

  } catch (error: any) {
    return NextResponse.json({ error: `Fallo Crítico: ${error.message}` }, { status: 500 });
  }
}
