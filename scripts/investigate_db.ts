import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { data, error } = await supabase.rpc('get_tables'); // sometimes there is a helper
  // or just query the catalog
  const { data: tables, error: tablesError } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public');
  
  if (tablesError) {
      console.log("Error fetching tables:", tablesError);
      // fallback
      const { data: rows } = await supabase.from('preguntas').select('*').limit(1);
      console.log("preguntas row:", rows?.[0]);
  } else {
      console.log("Tables:", tables.map(t => t.table_name));
  }
}

check();
