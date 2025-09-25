"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  const [status, setStatus] = useState('Procesando inicio de sesión…')

  useEffect(() => {
    (async () => {
      try {
        const url = new URL(window.location.href)
        const next = url.searchParams.get('next') || '/madrid/dashboard'

        // 1) Intenta hash tokens (magic link)
        const hash = url.hash.replace(/^#/, '')
        const hp = new URLSearchParams(hash)
        const access_token = hp.get('access_token')
        const refresh_token = hp.get('refresh_token')
        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({ access_token, refresh_token })
          if (error) throw error
          history.replaceState(null, '', `${url.pathname}${url.search}`)
        }

        // 2) Si no hay hash, intenta code (Google)
        if (!access_token || !refresh_token) {
          const code = url.searchParams.get('code')
          if (code) {
            const { error } = await supabase.auth.exchangeCodeForSession(code)
            if (error) throw error
          }
        }

        // 3) Upsert usuario + cookie y redirige
        try { document.cookie = 'logged_in=1; path=/; max-age=31536000' } catch {}
        const { data } = await supabase.auth.getSession()
        const user = data.session?.user
        if (user) {
          const meta = (user.user_metadata || {}) as any
          await supabase
            .from('usuarios')
            .upsert({
              user_id: user.id,
              nombre: meta.full_name || meta.name || user.email?.split('@')[0] || 'Usuario',
              correo_electronico: user.email,
              comunidad_autonoma: 'madrid',
            }, { onConflict: 'user_id', ignoreDuplicates: false })
        }

        setStatus('Redirigiendo…')
        window.location.replace(next)
      } catch (e: any) {
        setStatus(e?.message || 'No se pudo completar el inicio de sesión.')
      }
    })()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center text-gray-700">{status}</div>
    </main>
  )
}


