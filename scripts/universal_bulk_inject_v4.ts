import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

async function generateAndInsertWithRetry(topicId: string, topicTitle: string, subjectName: string, comunidad: string, needed: number, retryCount = 0) {
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
  const questionsToFetch = Math.min(15, needed);
  
  const prompt = `
    Eres un experto en Selectividad (PAU/EBAU) de España.
    Genera ${questionsToFetch} preguntas de examen tipo test para el tema "${topicTitle}" de la asignatura "${subjectName}" en la comunidad de "${comunidad}".
    
    IMPORTANTE: 
    - Las preguntas deben ser realistas, de nivel PAU oficial.
    - La comunidad es ${comunidad}, adapta el contenido si hay especificidades regionales.
    - Formato: JSON array de objetos.
    - Cada objeto debe tener:
       - pregunta: el enunciado.
       - opcion_a: primera opción.
       - opcion_b: segunda opción.
       - opcion_c: tercera opción.
       - opcion_d: cuarta opción.
       - correcta: una sola letra (a, b, c, o d).
       - explicacion: por qué es correcta la opción elegida, con rigor académico.
       - tier: "standard" o "premium" (haz un mix equilibrado).
    3. Responde ÚNICAMENTE con el bloque JSON.
    4. Usa LaTeX para cualquier fórmula o símbolo matemático si la asignatura lo requiere (ej: $x^2$).
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Robust JSON cleaning
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("No JSON array found in response");
    
    const questions = JSON.parse(jsonMatch[0]);

    console.log(`Generated ${questions.length} questions for ${topicTitle} (${comunidad})`);

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
    console.log(`✅ Inserted ${inserted.length} questions.`);
    return inserted.length;
  } catch (err: any) {
    // 429 = Too Many Requests
    if ((err.status === 429 || err.message?.includes("429")) && retryCount < 5) {
      const waitTime = Math.pow(2, retryCount) * 10000 + 5000; // Exponential backoff starting at 15s
      console.warn(`⚠️ Rate limited for ${topicTitle}. Waiting ${waitTime/1000}s...`);
      await new Promise(r => setTimeout(r, waitTime));
      return generateAndInsertWithRetry(topicId, topicTitle, subjectName, comunidad, needed, retryCount + 1);
    }
    console.error(`❌ Error for ${topicTitle}:`, err.message || err);
    return 0;
  }
}

async function main() {
  console.log('--- Universal Injection v4 (Automated) ---')
  
  // 1. Fetch all subjects
  const { data: subjects, error: sError } = await supabase
    .from('asignaturas')
    .select('id, nombre, comunidad');
  
  if (sError || !subjects) {
    console.error('Error fetching subjects', sError);
    return;
  }

  // Define community priority (as requested)
  const priorityOrder = ['Valencia', 'Madrid', 'Andalucía'];
  subjects.sort((a, b) => priorityOrder.indexOf(a.comunidad) - priorityOrder.indexOf(b.comunidad));

  for (const s of subjects) {
    console.log(`\nProcessing Subject: ${s.nombre} (${s.comunidad})`);
    
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
        // Check current count
        const { count, error: cErr } = await supabase
          .from('preguntas')
          .select('*', { count: 'exact', head: true })
          .eq('tema_id', t.id);

        if (cErr) throw cErr;

        const current = count || 0;
        if (current >= 25) {
          console.log(`- Skipping ${t.titulo} (already has ${current} questions)`);
          continue;
        }

        console.log(`- Topic: ${t.titulo} (currently ${current}/25)`);
        const needed = 25 - current;
        
        let addedInTopic = 0;
        // Fetch in batches of 15 until reached 25
        while (addedInTopic + current < 25) {
            const batchNeeded = 25 - (current + addedInTopic);
            const added = await generateAndInsertWithRetry(t.id, t.titulo, s.nombre, s.comunidad, batchNeeded);
            if (added === 0) break; // Stop if persistent error
            addedInTopic += added;
            // Respect base rate limit
            await new Promise(r => setTimeout(r, 4000));
        }

      } catch (e: any) {
        console.error(`Error in topic ${t.titulo}:`, e.message);
      }
    }
  }
  
  console.log('\n--- Universal Injection Complete ---');
}

main();
