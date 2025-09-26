"use client"

import { useEffect } from 'react'

export default function AuthCallback() {
  useEffect(() => {
    // Debug info
    console.log('🔄 Callback URL:', window.location.href)
    console.log('🎯 Redirecting to:', '/madrid/dashboard' + window.location.search + window.location.hash)
    
    // Redirige al dashboard preservando código/hash para que complete la sesión allí
    window.location.replace('/madrid/dashboard' + window.location.search + window.location.hash)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-gray-700 text-lg">Procesando inicio de sesión…</div>
    </main>
  )
}