import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { data: asignaturas } = await supabase.from('asignaturas').select('id, nombre, comunidad');
  console.log("Total asignaturas:", asignaturas?.length);
  
  const { data: preguntas, count } = await supabase.from('preguntas').select('id, tema_id', { count: 'exact' });
  console.log("Total preguntas:", count);
  
  if (preguntas && preguntas.length > 0) {
      // Let's get unique tema_ids
      const temas = [...new Set(preguntas.map(p => p.tema_id))];
      console.log("Unique temas with questions:", temas.length);
  }
}

check();
