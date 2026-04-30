import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testFetchAllEmails() {
  console.log("Fetching emails from waitlist...");
  const { data: waitlist, error: wError } = await supabase.from('waitlist').select('email');
  if (wError) console.error(wError);

  console.log("Fetching emails from usuarios...");
  const { data: usuarios, error: uError } = await supabase.from('usuarios').select('correo_electronico');
  if (uError) console.error(uError);

  const allEmails = new Set<string>();
  
  waitlist?.forEach(u => u.email && allEmails.add(u.email.toLowerCase().trim()));
  usuarios?.forEach(u => u.correo_electronico && allEmails.add(u.correo_electronico.toLowerCase().trim()));
  
  // Add the extra email
  allEmails.add("pabtoib@gmail.com");

  console.log(`Total unique emails: ${allEmails.size}`);
  console.log("Sample of emails:", Array.from(allEmails).slice(0, 5));
}

testFetchAllEmails();
