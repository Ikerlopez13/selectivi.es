import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { data: asignaturas } = await supabase.from('asignaturas').select('*');
  console.log("Asignaturas:", asignaturas);
  
  const { data: temas } = await supabase.from('temas').select('*, asignaturas(nombre, comunidad)');
  
  const counts: Record<string, number> = {};
  temas?.forEach(t => {
      const com = (t.asignaturas as any)?.comunidad || 'Unknown';
      counts[com] = (counts[com] || 0) + 1;
  });
  console.log("Topics per Comunidad:", counts);
}

check();
