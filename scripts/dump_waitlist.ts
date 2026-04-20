import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function dumpWaitlist() {
  const { data, error } = await supabase.from('waitlist').select('*').limit(100);
  if (error) {
    console.error("Error fetching waitlist:", error);
    return;
  }
  console.log(JSON.stringify(data, null, 2));
}

dumpWaitlist();
