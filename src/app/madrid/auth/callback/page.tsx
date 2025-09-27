"use client"

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      console.log('🔄 Callback iniciado')
      
      try {
        // 1. Verificar URL y código
        const currentUrl = window.location.href
        console.log('📍 URL actual:', currentUrl)
        
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get('code')
        console.log('🎫 Código recibido:', code ? '✅' : '❌')
        
        if (!code) {
          console.error('❌ No hay código en la URL')
          window.location.replace('/madrid/login')
          return
        }

        // 2. Verificar sesión actual
        console.log('🔍 Verificando sesión actual...')
        const { data: { session: currentSession } } = await supabase.auth.getSession()
        console.log('📱 Sesión actual:', currentSession ? 'Activa' : 'No hay sesión')

        // 3. Intentar intercambiar código
        console.log('🔑 Intentando intercambiar código por sesión...')
        
        try {
          const result = await supabase.auth.exchangeCodeForSession(code)
          console.log('📦 Resultado completo:', result)
          
          if (result.error) {
            throw result.error
          }

          if (!result.data?.session) {
            throw new Error('No se recibió sesión después del intercambio')
          }

          // 4. Verificar que obtuvimos una sesión
          console.log('✅ Intercambio exitoso, verificando sesión final...')
          const { data: { session: finalSession } } = await supabase.auth.getSession()
          
          if (finalSession) {
            console.log('🎉 Sesión establecida correctamente')
            window.location.replace('/madrid/dashboard')
          } else {
            throw new Error('No se pudo establecer la sesión después del intercambio')
          }
        } catch (e) {
          console.error('❌ Error durante el intercambio:', e)
          window.location.replace('/madrid/login')
        }
      } catch (error) {
        console.error('❌ Error general en callback:', error)
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