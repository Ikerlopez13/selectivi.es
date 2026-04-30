import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function probeUsuarios() {
  const { data, error } = await supabase.from('usuarios').select('*').limit(1);
  if (error) {
    console.error(error);
  } else {
    console.log("Usuarios columns:", Object.keys(data[0] || {}));
  }
}

probeUsuarios();
