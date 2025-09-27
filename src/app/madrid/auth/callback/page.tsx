"use client"

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('🔄 Callback iniciado')
        console.log('📍 URL actual:', window.location.href)
        
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get('code')
        console.log('🎫 Código recibido:', code ? '✅' : '❌')
        
        if (code) {
          console.log('🔑 Intentando intercambiar código por sesión...')
          try {
            const { data, error } = await supabase.auth.exchangeCodeForSession(code)
            console.log('📦 Resultado del intercambio:', {
              success: !!data && !error,
              hasSession: !!data?.session,
              error: error?.message || 'ninguno'
            })
            
            if (error) throw error
            
            // Si el intercambio fue exitoso, redirigir al dashboard sin el código
            const nextUrl = '/madrid/dashboard'
            console.log('🎯 Redirigiendo a:', nextUrl)
            window.location.replace(nextUrl)
            return
          } catch (e) {
            console.error('❌ Error en intercambio:', e)
          }
        }
        
        // Si llegamos aquí, algo falló
        console.log('⚠️ Redirigiendo a login...')
        window.location.replace('/madrid/login')
      } catch (error) {
        console.error('❌ Error en callback:', error)
        window.location.replace('/madrid/login')
      }
    }

    handleCallback()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-gray-700 text-lg">Procesando inicio de sesión…</div>
    </main>
  )
}