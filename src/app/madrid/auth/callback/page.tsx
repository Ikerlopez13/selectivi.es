"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  const [status, setStatus] = useState('Procesando inicio de sesión…')
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [debugEnabled, setDebugEnabled] = useState(false)

  const addDebug = (msg: string) => {
    if (!debugEnabled) return
    console.log('AuthCallback:', msg)
    setDebugInfo(prev => [...prev, msg])
  }

  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      const code = url.searchParams.get('code')
      let dest = '/madrid/dashboard'
      if (code) dest += `?code=${encodeURIComponent(code)}`
      dest += url.hash || ''
      window.location.replace(dest)
    } catch {
      window.location.replace('/madrid/dashboard')
    }
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-gray-700 text-lg">Procesando inicio de sesión…</div>
    </main>
  )
}