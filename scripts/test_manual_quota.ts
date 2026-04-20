import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function generateAndInsert(topicId: string, topicTitle: string, subjectName: string, count: number) {
  const key = process.env.GOOGLE_AI_API_KEY;
  const prompt = `
    Eres un experto en Selectividad (PEvAU) en la comunidad de Andalucía, España.
    Genera ${count} preguntas tipo test del tema "${topicTitle}" de la asignatura "${subjectName}".
    Formato JSON: [{pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta: 'a'|'b'|'c'|'d', explicacion, tier: 'standard'|'premium'}]
    Usa LaTeX. Responde SOLO JSON.
  `;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { response_mime_type: "application/json" }
  };

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    if (data.error) throw new Error(JSON.stringify(data.error));
    
    const text = data.candidates[0].content.parts[0].text;
    const questions = JSON.parse(text);

    const { error } = await supabase
      .from('preguntas')
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
      );

    if (error) throw error;
    console.log(`Inserted ${questions.length} questions for ${topicTitle}`);
    return true;
  } catch (err: any) {
    console.error(`Error:`, err.message);
    return false;
  }
}

async function main() {
    // Try only one to test quota
    const { data: topics } = await supabase.from('temas').select('id, titulo, asignaturas!inner(nombre)').eq('asignaturas.comunidad', 'Andalucía').limit(1);
    if (topics) {
        await generateAndInsert(topics[0].id, topics[0].titulo, (topics[0].asignaturas as any).nombre, 1);
    }
}

main();
