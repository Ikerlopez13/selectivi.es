import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  let totalCount = 0;
  let madridCount = 0;
  let andaluciaCount = 0;
  
  // Get all topics for Madrid and Andalucía IDs
  const { data: topics } = await supabase.from('temas').select('id, asignaturas(comunidad)');
  const topicComMap: Record<string, string> = {};
  topics?.forEach(t => {
      topicComMap[t.id] = (t.asignaturas as any)?.comunidad || 'Unknown';
  });

  // Fetch all questions in batches of 1000
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
      totalCount++;
      const com = topicComMap[p.tema_id];
      if (com === 'Madrid') madridCount++;
      else if (com === 'Andalucía') andaluciaCount++;
    });

    if (preguntas.length < size) hasMore = false;
    from += size;
  }

  console.log(`Total rows in DB: ${totalCount}`);
  console.log(`Madrid: ${madridCount}`);
  console.log(`Andalucía: ${andaluciaCount}`);
}

check();
