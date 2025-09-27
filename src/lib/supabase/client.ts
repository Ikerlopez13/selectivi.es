"use client"
import { createClient } from '@supabase/supabase-js'
import type { AuthFlowType } from '@supabase/supabase-js'

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
const flowType: AuthFlowType = 'pkce'

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
    retryAttempts: 3,
    retryInterval: 2000,
    redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/madrid/dashboard` : undefined
  },
} as const

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  clientOptions
)
