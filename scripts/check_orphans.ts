import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { count, error } = await supabase
    .from('preguntas')
    .select('*', { count: 'exact', head: true });
  
  const { data: topics } = await supabase.from('temas').select('id');
  const topicIds = new Set(topics?.map(t => t.id) || []);

  const { data: qTopics } = await supabase.from('preguntas').select('tema_id');
  let orphans = 0;
  qTopics?.forEach(q => {
      if (q.tema_id && !topicIds.has(q.tema_id)) orphans++;
      if (!q.tema_id) orphans++;
  });

  console.log(`Total rows in preguntas: ${count}`);
  console.log(`Orphan questions: ${orphans}`);
}

check();
