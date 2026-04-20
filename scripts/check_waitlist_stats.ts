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
  } else {
    const uniqueComunidades = [...new Set(data.map(item => item.comunidad))];
    console.log("Unique comunidades:", uniqueComunidades);
    
    const madridCount = data.filter(item => item.comunidad === 'Madrid' || item.comunidad === 'Comunidad de Madrid').length;
    const andaluciaCount = data.filter(item => item.comunidad === 'Andalucía' || item.comunidad === 'Andalucia').length;
    
    console.log("Madrid count:", madridCount);
    console.log("Andalucia count:", andaluciaCount);
  }
}

checkComunidades();
