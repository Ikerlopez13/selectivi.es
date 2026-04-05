import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topicId, content, count = 5 } = await req.json();

    if (!topicId || !content) {
      return NextResponse.json({ error: "Missing topicId or content" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GOOGLE_AI_API_KEY not configured" }, { status: 500 });
    }

    // Initialize Supabase correctly for admin tasks
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Get region info for better AI context
    const { data: topicData } = await supabase
      .from('temas')
      .select('titulo, asignaturas(nombre, comunidad)')
      .eq('id', topicId)
      .single();

    const subjectName = (topicData?.asignaturas as any)?.nombre || 'General';
    const comunidad = (topicData?.asignaturas as any)?.comunidad || 'España';
    const topicTitle = topicData?.titulo || '';

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Eres un experto en Selectividad (EBAU) en la comunidad de ${comunidad}, España.
      Tu tarea es generar ${count} preguntas tipo test del tema "${topicTitle}" de la asignatura "${subjectName}".
      
      BASATE EN EL SIGUIENTE CONTENIDO:
      "${content}"

      REGLAS CRÍTICAS:
      1. El formato de salida DEBE SER UN ARRAY JSON VÁLIDO.
      2. Cada objeto debe tener:
         - pregunta (string): El enunciado.
         - opcion_a (string): Opción A.
         - opcion_b (string): Opción B.
         - opcion_c (string): Opción C.
         - opcion_d (string): Opción D.
         - correcta (string): Letra minúscula ('a', 'b', 'c' o 'd').
         - explicacion (string): Una breve explicación de por qué es la correcta.
         - tier (string): Siempre "standard" o "premium". Mézclalas.
      3. Usa LaTeX para fórmulas matemáticas si es necesario (ej: $x^2$).
      4. Asegúrate de que las preguntas sean del nivel de dificultad real de la EBAU.

      Responde ÚNICAMENTE con el JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean JSON from potential markdown wrappers
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const questions = JSON.parse(jsonStr);

    // 2. Clear old questions if any? (Optional)
    // 3. Save New Questions
    const { data, error } = await supabase
      .from("preguntas")
      .insert(
        questions.map((q: any) => ({
          tema_id: topicId,
          pregunta: q.pregunta,
          opcion_a: q.opcion_a,
          opcion_b: q.opcion_b,
          opcion_c: q.opcion_c,
          opcion_d: q.opcion_d,
          correcta: q.correcta,
          explicacion: q.explicacion,
          tier: q.tier || "standard"
        }))
      )
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, count: data.length, questions: data });
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
