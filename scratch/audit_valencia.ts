
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const { data: subjects, error: sError } = await supabase
    .from('asignaturas')
    .select('id, nombre')
    .eq('comunidad', 'Valencia');

  if (sError) {
    console.error(sError);
    return;
  }

  console.log(`Found ${subjects.length} subjects for Valencia.`);

  for (const s of subjects) {
    const { data: temas, error: tError } = await supabase
      .from('temas')
      .select('id, titulo')
      .eq('asignatura_id', s.id);

    if (tError) continue;

    console.log(`\nSubject: ${s.nombre} (${s.id})`);
    for (const t of temas) {
        const { count, error: qError } = await supabase
            .from('preguntas')
            .select('*', { count: 'exact', head: true })
            .eq('tema_id', t.id);
        console.log(`  - ${t.titulo} (${t.id}): ${count || 0} questions`);
    }
  }
}

main();
