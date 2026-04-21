
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function generateAndInsert(topicId: number, topicTitle: string, subjectName: string) {
  console.log(`Generating 15 questions for ${subjectName} - ${topicTitle}...`);
  
  const prompt = `
    Eres un experto en la prueba PAU (Selectividad) de la Comunidad Valenciana, España.
    Tu tarea es generar 15 preguntas tipo test de nivel alto del tema "${topicTitle}" de la asignatura "${subjectName}".
    
    REGLAS CRÍTICAS:
    1. El formato de salida DEBE SER UN ARRAY JSON VÁLIDO.
    2. Cada objeto debe tener:
       - pregunta: enunciado claro y preciso.
       - opcion_a, opcion_b, opcion_c, opcion_d.
       - correcta (letra minúscula: a, b, c, o d).
       - explicacion: por qué es correcta la opción elegida, con rigor académico.
       - tier: "standard" o "premium" (haz un mix equilibrado).
    3. Responde ÚNICAMENTE con el bloque JSON.
    4. Usa LaTeX para cualquier fórmula o símbolo matemático si la asignatura lo requiere.
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    let questions;
    try {
        questions = JSON.parse(jsonStr);
    } catch (e) {
        const start = jsonStr.indexOf('[');
        const end = jsonStr.lastIndexOf(']') + 1;
        questions = JSON.parse(jsonStr.substring(start, end));
    }

    console.log(`Successfully generated ${questions.length} questions for ${topicTitle}`);

    const { data: inserted, error } = await supabase
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
    console.log(`✅ Inserted ${inserted.length} questions for ${topicTitle}`);
    return inserted.length;
  } catch (err) {
    console.error(`❌ Error for ${topicTitle}:`, err);
    return 0;
  }
}

async function main() {
  console.log('--- Injecting Questions for Valencia (Bulk mode) ---')
  
  const { data: subjects, error: sError } = await supabase
    .from('asignaturas')
    .select('id, nombre')
    .eq('comunidad', 'Valencia');
  
  if (sError || !subjects) {
    console.error('Error fetching subjects', sError);
    return;
  }

  for (const s of subjects) {
    const { data: topics, error: tError } = await supabase
      .from('temas')
      .select('id, titulo')
      .eq('asignatura_id', s.id);
    
    if (tError || !topics) {
      console.error(`Error fetching topics for ${s.nombre}`, tError);
      continue;
    }

    for (const t of topics) {
      try {
        const { count } = await supabase
          .from('preguntas')
          .select('*', { count: 'exact', head: true })
          .eq('tema_id', t.id);
        
        if (count && count >= 25) { 
          console.log(`Skipping ${t.titulo} (already has ${count} questions)`);
          continue;
        }

        const added = await generateAndInsert(t.id, t.titulo, s.nombre);
        if (added > 0) {
            // Wait slightly between topics to manage rate limits and ensure stability
            await new Promise(r => setTimeout(r, 3000));
        }
      } catch (e) {
        console.error(`Error processing topic ${t.titulo}:`, e);
      }
    }
  }
  
  console.log('--- Bulk Injection Complete ---');
}

main();
