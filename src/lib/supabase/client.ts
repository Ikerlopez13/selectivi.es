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

const storage = typeof window !== 'undefined' ? window.localStorage : undefined
const flowType = 'pkce'

console.log('🔧 Verificando entorno:', {
  hasWindow: typeof window !== 'undefined',
  hasLocalStorage: !!storage,
  flowType
})

const clientOptions = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType,
    debug: true,
    storage,
    storageKey: 'supabase.auth.token',
    // Configuración específica para auth
    retryAttempts: 3,
    retryInterval: 2000,
    // Usar el callback por defecto de Supabase
    redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/madrid/dashboard` : undefined
  },
}

console.log('🛠 Opciones de cliente:', clientOptions)

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  clientOptions
)
