import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
// Using gemini-2.5-flash to avoid 404/quota issues of older models
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function generateAndInsert(topicId: string, topicTitle: string, subjectName: string, count: number) {
  console.log(`Generating ${count} questions for Andalucia: ${subjectName} - ${topicTitle}...`);
  
  const prompt = `
    Eres un experto en Selectividad (PEvAU) en la comunidad de Andalucía, España.
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
    4. Asegúrate de que las preguntas sean del nivel de dificultad real de la PEvAU de Andalucía.

    Responde ÚNICAMENTE con el JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const questions = JSON.parse(jsonStr);

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

    if (error) {
      console.error(`Error inserting into DB:`, error);
      return false;
    }
    console.log(`Successfully inserted ${questions.length} questions for ${topicTitle}`);
    return true;
  } catch (err: any) {
    console.error(`Error for ${topicTitle}:`, err.message);
    return false;
  }
}

async function main() {
  console.log("Starting bulk injection for Andalucía...");

  // 1. Get all topics for Andalucía
  const { data: topics, error: topicsError } = await supabase
    .from('temas')
    .select('id, titulo, asignaturas!inner(nombre, comunidad)')
    .eq('asignaturas.comunidad', 'Andalucía');

  if (topicsError || !topics) {
    console.error("Error fetching topics:", topicsError);
    return;
  }

  // 2. Count current questions per topic
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

  let totalAndalucia = 0;
  topics.forEach(t => {
      totalAndalucia += topicCount[t.id] || 0;
  });
  console.log(`Current Andalucía total: ${totalAndalucia}`);

  const targetTotal = 1200; // Starting with a modest goal to avoid hitting all quotas at once
  const needed = Math.max(0, targetTotal - totalAndalucia);
  console.log(`Need ~${needed} more questions for this batch.`);

  // 3. Prioritize topics with few questions
  topics.sort((a, b) => (topicCount[a.id] || 0) - (topicCount[b.id] || 0));

  for (const topic of topics) {
      if (totalAndalucia >= targetTotal) break;
      const current = topicCount[topic.id] || 0;
      if (current < 15) {
          const toAdd = 10;
          const success = await generateAndInsert(topic.id, topic.titulo, (topic.asignaturas as any).nombre, toAdd);
          if (success) {
              totalAndalucia += toAdd;
          }
          console.log(`Andalucía Progress: ${totalAndalucia} / ${targetTotal}`);
          // Brief pause between requests
          await new Promise(r => setTimeout(r, 2000));
      }
  }

  console.log("Finished injection for Andalucía. Final Count:", totalAndalucia);
}

main();
