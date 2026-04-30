import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function investigateDiscrepancy() {
  const { data: { users: authUsers } } = await supabase.auth.admin.listUsers();
  const { data: usuariosData } = await supabase.from('usuarios').select('correo_electronico');

  const authEmails = (authUsers || []).map(u => u.email?.toLowerCase()).filter(Boolean);
  const usuariosEmails = new Set((usuariosData || []).map(d => d.correo_electronico?.toLowerCase()).filter(Boolean));

  const onlyInAuth = authEmails.filter(e => !usuariosEmails.has(e));

  console.log("Emails only in auth.users (not in public.usuarios):", onlyInAuth);
  console.log("Count:", onlyInAuth.length);
}

investigateDiscrepancy();
