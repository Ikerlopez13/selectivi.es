import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  // Join preguntas with temas and asignaturas to count by comunidad
  const { data, error } = await supabase
    .from('preguntas')
    .select(`
      tema_id,
      temas!inner (
        asignaturas!inner (
          comunidad
        )
      )
    `);

  if (error) {
    console.error("Error:", error);
    return;
  }

  const counts: Record<string, number> = {};
  data.forEach((row: any) => {
    const comunidad = row.temas?.asignaturas?.comunidad || 'Unknown';
    counts[comunidad] = (counts[comunidad] || 0) + 1;
  });

  console.log("Questions per Comunidad:", counts);
}

check();
