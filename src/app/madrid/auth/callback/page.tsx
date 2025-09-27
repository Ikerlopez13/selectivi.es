"use client"

import { useEffect } from 'react'

export default function AuthCallback() {
  useEffect(() => {
    // Simplemente redirigir al dashboard con los parámetros de la URL
    window.location.replace('/madrid/dashboard' + window.location.search)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-gray-700 text-lg">Procesando inicio de sesión…</div>
    </main>
  )
}