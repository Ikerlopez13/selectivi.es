import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function countEmails() {
  // Fetch waitlist emails
  const { data: waitlistData, error: waitlistError } = await supabase
    .from('waitlist')
    .select('email');

  if (waitlistError) {
    console.error("Error fetching waitlist emails:", waitlistError);
  }

  // Fetch registered users from public.usuarios
  const { data: usuariosData, error: usuariosError } = await supabase
    .from('usuarios')
    .select('correo_electronico');

  if (usuariosError) {
    console.error("Error fetching usuarios emails:", usuariosError);
  }

  // Fetch from auth.users via admin API
  const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers();

  if (authError) {
    console.error("Error fetching auth users:", authError);
  }

  const waitlistEmails = (waitlistData || []).map(d => d.email?.toLowerCase()).filter(Boolean);
  const registeredEmails = (usuariosData || []).map(d => d.correo_electronico?.toLowerCase()).filter(Boolean);
  const authEmails = (authUsers || []).map(u => u.email?.toLowerCase()).filter(Boolean);

  const allEmails = new Set([...waitlistEmails, ...registeredEmails, ...authEmails]);

  console.log("--- Detailed Email Statistics ---");
  console.log(`Waitlist Table: ${waitlistEmails.length}`);
  console.log(`Public Usuarios Table: ${registeredEmails.length}`);
  console.log(`Auth Users: ${authEmails.length}`);
  console.log(`Total Unique Emails across all sources: ${allEmails.size}`);
  console.log("---------------------------------");
}

countEmails();
