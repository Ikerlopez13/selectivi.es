import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { data: preguntas } = await supabase.from('preguntas').select('tema_id');
  const topicCounts: Record<string, number> = {};
  preguntas?.forEach(p => {
    topicCounts[p.tema_id] = (topicCounts[p.tema_id] || 0) + 1;
  });

  const { data: temas } = await supabase.from('temas').select('id, titulo, asignatura_id');
  const temaMap: Record<string, any> = {};
  temas?.forEach(t => temaMap[t.id] = t);

  const total = preguntas?.length || 0;
  let linked = 0;
  let missingTopic = 0;
  
  Object.keys(topicCounts).forEach(tid => {
      if (temaMap[tid]) {
          linked += topicCounts[tid];
      } else {
          missingTopic += topicCounts[tid];
          console.log(`Missing topic ID: ${tid} (count: ${topicCounts[tid]})`);
      }
  });

  console.log(`Total: ${total}, Linked: ${linked}, Missing: ${missingTopic}`);
}

check();
