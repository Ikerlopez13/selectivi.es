"use client"

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('🔄 Callback iniciado')
        
        // 1. Obtener el código de la URL
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        console.log('🎫 Código:', code ? '✅ Presente' : '❌ No encontrado')

        if (!code) {
          console.error('❌ No hay código en la URL')
          window.location.href = '/madrid/login'
          return
        }

        // 2. Intercambiar el código por una sesión
        console.log('🔄 Intercambiando código por sesión...')
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)
        
        if (error) {
          console.error('❌ Error al intercambiar código:', error)
          window.location.href = '/madrid/login'
          return
        }

        if (!data.session) {
          console.error('❌ No se recibió sesión')
          window.location.href = '/madrid/login'
          return
        }

        console.log('✅ Sesión establecida:', {
          email: data.session.user.email,
          id: data.session.user.id
        })

        // 3. Redirigir al dashboard
        console.log('🎯 Redirigiendo al dashboard...')
        window.location.href = '/madrid/dashboard'
      } catch (error) {
        console.error('❌ Error en callback:', error)
        window.location.href = '/madrid/login'
      }
    }

    handleCallback()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="inline-block animate-spin text-4xl">⚡️</div>
        <div className="text-gray-600">Procesando inicio de sesión...</div>
        <div className="text-sm text-gray-400">Por favor, espera...</div>
      </div>
    </main>
  )
}