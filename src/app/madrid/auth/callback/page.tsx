"use client"

export default function AuthCallback() {
  // Redirigir inmediatamente sin esperar nada
  if (typeof window !== 'undefined') {
    window.location.href = '/madrid/dashboard'
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="inline-block animate-spin text-4xl">⚡️</div>
        <div className="text-gray-600">Redirigiendo...</div>
      </div>
    </main>
  )
}