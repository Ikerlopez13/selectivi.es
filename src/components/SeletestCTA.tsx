'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function SeletestCTA({ className = '' }: { className?: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [hasSession, setHasSession] = useState(false)

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setHasSession(!!data.session)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setHasSession(!!session)
    })
    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const onClick = () => {
    if (!hasSession) {
      router.push('/madrid/login?next=/madrid/seletest')
      return
    }
    router.push('/madrid/seletest')
  }

  return (
    <button onClick={onClick} disabled={loading} className={`inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors shadow-sm ${className}`}>
      <span className="text-xl" aria-hidden="true">★</span>
      {hasSession ? 'Accede a SeleTest' : 'Regístrate'}
      <span className="text-sm bg-white px-2 py-0.5 rounded">Nuevo!</span>
    </button>
  )
}
