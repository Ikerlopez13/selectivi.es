"use client"

import { useEffect } from 'react'

export default function AuthCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('🔄 Callback iniciado')
        console.log('📍 URL actual:', window.location.href)
        
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get('code')
        console.log('🎫 Código recibido:', code ? '✅' : '❌')
        
        const nextUrl = '/madrid/dashboard' + window.location.search + window.location.hash
        console.log('🎯 Redirigiendo a:', nextUrl)
        
        window.location.replace(nextUrl)
      } catch (error) {
        console.error('❌ Error en callback:', error)
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