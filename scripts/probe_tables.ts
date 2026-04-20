import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function listAllTables() {
  const { data, error } = await supabase.rpc('get_table_names'); // maybe some RPC exists
  if (error) {
    // try direct query to pg_catalog if possible? usually not allowed via supabase-js
    // let's just try some common names
    const tables = ['waitlist', 'usuarios', 'registros', 'madrid', 'andalucia', 'wait'];
    for (const t of tables) {
      const { error: e } = await supabase.from(t).select('count').limit(1);
      if (!e) console.log(`Table exists: ${t}`);
      else console.log(`Table ${t} error: ${e.message}`);
    }
  } else {
    console.log("Tables:", data);
  }
}

listAllTables();
