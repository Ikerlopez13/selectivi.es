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

async function generateAndInsert(topicId: string, topicTitle: string, subjectName: string, comunidad: string, promptContent: string, count: number) {
  console.log(`Generating ${count} questions for ${subjectName} - ${topicTitle}...`);
  
  const prompt = `
    Eres un experto en Selectividad (EBAU) en la comunidad de ${comunidad}, España.
    Tu tarea es generar ${count} preguntas tipo test del tema "${topicTitle}" de la asignatura "${subjectName}".
    
    ESTRUCTURA Y CONTENIDO RECOMENDADO:
    ${promptContent}

    REGLAS CRÍTICAS:
    1. El formato de salida DEBE SER UN ARRAY JSON VÁLIDO.
    2. Cada objeto debe tener:
       - pregunta: enunciado con LaTeX si es necesario.
       - opcion_a, opcion_b, opcion_c, opcion_d.
       - correcta (letra minúscula: a, b, c, o d).
       - explicacion.
       - tier (standard o premium).
    3. No repitas preguntas obvias.
    4. Responde ÚNICAMENTE con el JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    let questions;
    try {
        questions = JSON.parse(jsonStr);
    } catch (e) {
        // Simple recovery if JSON is slightly broken
        const start = jsonStr.indexOf('[');
        const end = jsonStr.lastIndexOf(']') + 1;
        questions = JSON.parse(jsonStr.substring(start, end));
    }

    const { data, error } = await supabase
      .from("preguntas")
      .insert(
        questions.map((q: any) => ({
          tema_id: topicId,
          pregunta: q.pregunta || q.prompt,
          opcion_a: q.opcion_a || (q.options ? q.options[0]?.label : ""),
          opcion_b: q.opcion_b || (q.options ? q.options[1]?.label : ""),
          opcion_c: q.opcion_c || (q.options ? q.options[2]?.label : ""),
          opcion_d: q.opcion_d || (q.options ? q.options[3]?.label : ""),
          correcta: q.correcta || (q.options ? q.options.find((o: any) => o.isCorrect)?.id : "a"),
          explicacion: q.explicacion || q.explanation || "",
          tier: q.tier || "standard"
        }))
      )
      .select();

    if (error) throw error;
    console.log(`Inserted ${data.length} for ${topicTitle}`);
    return data.length;
  } catch (err) {
    console.error(`Error for ${topicTitle}:`, err);
    return 0;
  }
}

async function main() {
  const temas = JSON.parse(fs.readFileSync("temas_con_conteos.json", "utf8"));
  const promptDir = "src/lib/seletest/prompts";
  
  const promptMap: Record<string, string> = {
    "historia-espana": "historiaPrompt.txt",
    "filosofia": "filoPrompt.txt",
    "economia-empresa": "ecoPrompt.txt",
    "geografia": "geoPrompt.txt",
    "lengua": "castePrompt.txt",
    "ingles": "inglesPrompt.txt",
    "matematicas": "matesPrompt.txt",
    "fisica": "fisiscaPrompt.txt",
    "biologia": "bioPrompt.txt",
    "quimica": "quimica.txt",
    "matematicas-ccss": "matesccssPrompt.txt"
  };

  const subjectNames: Record<string, string> = {
    "historia-espana": "Historia de España",
    "filosofia": "Filosofía",
    "economia-empresa": "Economía de la empresa",
    "geografia": "Geografía",
    "lengua": "Lengua Castellana y Literatura",
    "ingles": "Inglés",
    "matematicas": "Matemáticas",
    "fisica": "Física",
    "biologia": "Biología",
    "quimica": "Química",
    "matematicas-ccss": "Matemáticas CCSS"
  };

  let currentTotal = 1137;
  const targetTotal = 2050;

  // Shuffle sorted temas with low counts to get variety
  const madridTemas = temas
    .filter((t: any) => promptMap[t.asignatura_id]);

  for (const tema of madridTemas) {
    if (currentTotal >= targetTotal) break;

    const count = tema.preguntas[0]?.count || 0;
    if (count < 20) { // If topic has very few questions
      const promptFile = `${promptDir}/${promptMap[tema.asignatura_id]}`;
      if (!fs.existsSync(promptFile)) continue;
      
      const promptContent = fs.readFileSync(promptFile, "utf8");
      const added = await generateAndInsert(tema.id, tema.titulo, subjectNames[tema.asignatura_id], "Madrid", promptContent, 10);
      currentTotal += added;
      console.log(`Total Progress: ${currentTotal}/${targetTotal}`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // If still not reached, add more to all subjects
  if (currentTotal < targetTotal) {
      console.log("Boosting subjects to reach target...");
      for (const tema of madridTemas) {
        if (currentTotal >= targetTotal) break;
        const promptContent = fs.readFileSync(`${promptDir}/${promptMap[tema.asignatura_id]}`, "utf8");
        const added = await generateAndInsert(tema.id, tema.titulo, subjectNames[tema.asignatura_id], "Madrid", promptContent, 10);
        currentTotal += added;
        console.log(`Total Progress: ${currentTotal}/${targetTotal}`);
        await new Promise(r => setTimeout(r, 1000));
      }
  }

  console.log(`Done. Current Total: ${currentTotal}`);
}

main();
