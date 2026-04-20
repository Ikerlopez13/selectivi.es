import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkUsuarios() {
  const { data, error } = await supabase.from('usuarios').select('email, region').limit(10);
  if (error) {
    console.error("Error fetching usuarios:", error);
    return;
  }
  console.log("Usuarios sample:", data);
}

checkUsuarios();
