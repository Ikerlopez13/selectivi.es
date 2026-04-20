import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function generateAndInsert(topicId: string, topicTitle: string, subjectName: string, count: number) {
  console.log(`Generating ${count} questions for ${subjectName} - ${topicTitle}...`);
  
  const prompt = `
    Eres un experto en Selectividad (EBAU) en la comunidad de Madrid, España.
    Tu tarea es generar ${count} preguntas tipo test del tema "${topicTitle}" de la asignatura "${subjectName}".
    
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

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const questions = JSON.parse(jsonStr);

    console.log(`Successfully generated ${questions.length} questions for ${topicTitle}`);

    const { data: inserted, error } = await supabase
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
      )
      .select();

    if (error) {
      console.error(`Error inserting into DB:`, error);
      return false;
    }
    return true;
  } catch (err: any) {
    console.error(`Error for ${topicTitle}:`, err);
    return false;
  }
}

async function main() {
  console.log("Starting bulk injection v3...");

  // 1. Get all topics for Madrid
  const { data: topics, error: topicsError } = await supabase
    .from('temas')
    .select('id, titulo, asignaturas!inner(nombre, comunidad)')
    .eq('asignaturas.comunidad', 'Madrid');

  if (topicsError || !topics) {
    console.error("Error fetching topics:", topicsError);
    return;
  }

  // 2. Count current questions per topic for Madrid
  // Use pagination to get ALL questions
  const topicCount: Record<string, number> = {};
  let from = 0;
  const size = 1000;
  let hasMore = true;

  while (hasMore) {
    const { data: preguntas, error } = await supabase
      .from('preguntas')
      .select('tema_id')
      .range(from, from + size - 1);
    
    if (error || !preguntas || preguntas.length === 0) {
      hasMore = false;
      break;
    }

    preguntas.forEach(p => {
      topicCount[p.tema_id] = (topicCount[p.tema_id] || 0) + 1;
    });

    if (preguntas.length < size) hasMore = false;
    from += size;
  }

  let totalMadrid = 0;
  topics.forEach(t => {
      totalMadrid += topicCount[t.id] || 0;
  });
  console.log(`Current Madrid total: ${totalMadrid}`);

  const targetTotal = 2050; // Goal is 2000, 2050 to be safe.
  const needed = Math.max(0, targetTotal - totalMadrid);
  console.log(`Need ~${needed} more questions.`);

  if (needed <= 0) {
      console.log("Goal already reached!");
      return;
  }

  // 3. Find topics with least number of questions and fill them
  // We want to fill mostly the ones that have fewer than 10-15 questions.
  topics.sort((a, b) => (topicCount[a.id] || 0) - (topicCount[b.id] || 0));

  let injectedCount = 0;
  for (const topic of topics) {
      const current = topicCount[topic.id] || 0;
      if (current < 15) { // Any topic with less than 15 questions gets a boost
          const toAdd = 10; 
          const success = await generateAndInsert(topic.id, topic.titulo, (topic.asignaturas as any).nombre, toAdd);
          if (success) {
              injectedCount += toAdd;
              totalMadrid += toAdd;
          }
          console.log(`Overall progress: ${totalMadrid} / ${targetTotal}`);
          if (totalMadrid >= targetTotal) break;
          // Sleep a bit to avoid rate limits
          await new Promise(r => setTimeout(r, 1000));
      }
  }

  console.log("Done. Final Count:", totalMadrid);
}

main();
