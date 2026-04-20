import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkComunidades() {
  const { data, error } = await supabase.from('waitlist').select('comunidad');
  if (error) {
    console.error("Error fetching comunidades:", error);
    return;
  }
  const counts: Record<string, number> = {};
  data.forEach(u => {
    const c = u.comunidad || 'N/A';
    counts[c] = (counts[c] || 0) + 1;
  });
  console.log("Comunidades and their counts:", counts);
}

checkComunidades();
