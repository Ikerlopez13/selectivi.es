import { createClient } from '@supabase/supabase-js'

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  // Service role: no exponer en el cliente. Solo usar en server.
  process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  {
    auth: { persistSession: false },
  }
)


