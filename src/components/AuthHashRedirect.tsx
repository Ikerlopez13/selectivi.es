'use client'

import { useEffect } from 'react'

export default function AuthHashRedirect() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const { hash, pathname, origin, search } = window.location
    // Si llegamos con tokens en el hash (/#access_token=...), redirige al return handler
    if (hash && hash.includes('access_token=') && !pathname.includes('/madrid/auth/return')) {
      const base = origin.includes('localhost') ? 'https://selectivi.es' : origin
      const params = new URLSearchParams(search)
      const next = params.get('next') || '/madrid/dashboard'
      // Da un pequeño margen para que supabase-js procese el hash y cree la sesión
      setTimeout(() => {
        try {
          window.location.replace(`${base}/madrid/auth/return?next=${encodeURIComponent(next)}`)
        } catch {
          window.location.href = `${base}/madrid/auth/return?next=${encodeURIComponent(next)}`
        }
      }, 150)
    }
  }, [])

  return null
}


