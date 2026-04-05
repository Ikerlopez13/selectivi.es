import { createClient as createBrowserClient } from "@/utils/supabase/client";

// Exportamos el mismo cliente que usa el nuevo sistema de SSR
// para que el Dashboard y el resto de componentes antiguos 
// compartan la misma sesión basada en cookies.
export const supabase = createBrowserClient();