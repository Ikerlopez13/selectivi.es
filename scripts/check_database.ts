import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "EXISTS" : "MISSING");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  const { count, data, error } = await supabase
    .from("preguntas")
    .select("*", { count: "exact" })
    .limit(1);

  if (data && data.length > 0) {
    console.log("Columns found in 'preguntas':", Object.keys(data[0]));
  } else {
    console.log("No data found in 'preguntas'");
  }
}

check();
