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

  const authEmails = new Set((authUsers || []).map(u => u.email?.toLowerCase()).filter(Boolean));
  const usuariosEmails = (usuariosData || []).map(d => d.correo_electronico?.toLowerCase()).filter(Boolean);

  const onlyInUsuarios = usuariosEmails.filter(e => !authEmails.has(e));

  console.log("Emails only in public.usuarios (not in auth.users):", onlyInUsuarios);
  console.log("Count:", onlyInUsuarios.length);
}

investigateDiscrepancy();
