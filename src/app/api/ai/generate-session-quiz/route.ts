import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = (process.env.GOOGLE_AI_API_KEY || "").trim();
    if (!apiKey) return NextResponse.json({ error: "Falta API Key" }, { status: 500 });
    
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
