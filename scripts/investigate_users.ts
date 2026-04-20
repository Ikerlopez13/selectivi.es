import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { data: userData, error } = await supabase
    .from('usuarios')
    .select('*')
    .limit(1);

  if (error) {
    console.error("Error fetching usuarios:", error);
  } else if (userData && userData.length > 0) {
    console.log("Columns in 'usuarios':", Object.keys(userData[0]));
    console.log("Sample usuarios data:", userData[0]);
  } else {
    console.log("No users found.");
  }
}

check();
