"use client"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// Verificar configuración
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error en configuración de Supabase:', {
    tieneUrl: !!supabaseUrl,
    tieneKey: !!supabaseAnonKey,
    url: supabaseUrl || 'no definida',
  })
} else {
  console.log('🔧 Configuración Supabase:', {
    url: supabaseUrl,
    hasKey: true,
    keyLength: supabaseAnonKey.length
  })
}

const clientOptions = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    debug: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    storageKey: 'supabase.auth.token',
  },
}

console.log('🛠 Opciones de cliente:', clientOptions)

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  clientOptions
)
