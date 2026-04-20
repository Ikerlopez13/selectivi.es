import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkColumns() {
  const { data, error } = await supabase
    .from('information_schema.columns')
    .select('column_name')
    .eq('table_name', 'usuarios')
    .eq('table_schema', 'public');
  
  if (error) {
    console.error("Error fetching columns:", error);
    return;
  }
  console.log("Columns of 'usuarios' table:", data.map(c => c.column_name));
}

checkColumns();
