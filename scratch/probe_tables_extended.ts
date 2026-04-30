import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function listTables() {
  const { data, error } = await supabase.rpc('get_tables'); // Check if RPC exists
  if (error) {
    console.log("RPC get_tables failed, trying manual probe.");
    const commonTables = ['usuarios', 'waitlist', 'users', 'emails', 'subscribers', 'contactos', 'contacts'];
    for (const table of commonTables) {
      const { data, error } = await supabase.from(table).select('count').limit(1);
      if (!error) {
        console.log(`Table exists: ${table}`);
      }
    }
  } else {
    console.log("Tables:", data);
  }
}

listTables();
