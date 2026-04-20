import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkWaitTable() {
  const { data, error } = await supabase.from('waitlist').select('*').limit(1);
  if (error) {
    console.error("Error fetching wait table:", error);
  } else {
    console.log("Wait table structure:", data?.[0]);
  }
}

checkWaitTable();
