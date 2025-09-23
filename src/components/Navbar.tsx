'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function Navbar() {
  const pathname = usePathname()
  const isMadridBrand = pathname?.startsWith('/madrid')
  const isHome = pathname === '/'
  const isMadridSection = pathname?.startsWith('/madrid')
  const isMadridDashboard = pathname?.startsWith('/madrid/dashboard')
  const [hasSession, setHasSession] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return
      setHasSession(!!data.session)
      // Persist simple cookie about logged state
      try {
        if (data.session) {
          document.cookie = 'logged_in=1; path=/; max-age=31536000'
        } else {
          document.cookie = 'logged_in=; Max-Age=0; path=/'
        }
      } catch {}
      const userId = data.session?.user?.id
      if (userId) {
        // Asegura que exista fila en public.usuarios para este usuario (provisioning tras OAuth)
        try {
          const { data: existing, error: selErr } = await supabase
            .from('usuarios')
            .select('id, comunidad_autonoma, es_premium')
            .eq('user_id', userId)
            .maybeSingle()
          if (!existing && !selErr) {
            const email = data.session?.user?.email || ''
            const name = (data.session?.user?.user_metadata as any)?.full_name || email.split('@')[0] || 'Usuario'
            const inferredCommunity = location.pathname.startsWith('/madrid') ? 'madrid' : 'desconocida'
            await supabase.from('usuarios').insert({
              user_id: userId,
              nombre: name,
              correo_electronico: email,
              comunidad_autonoma: inferredCommunity,
            })
          }
        } catch {}
        const { data: row } = await supabase
          .from('usuarios')
          .select('es_premium')
          .eq('user_id', userId)
          .maybeSingle()
        if (mounted) setIsPremium(!!row?.es_premium)
        try { localStorage.setItem('es_premium', row?.es_premium ? '1' : '0') } catch {}
      } else {
        if (mounted) setIsPremium(false)
      }
    })
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, session) => {
      setHasSession(!!session)
      try {
        if (session) document.cookie = 'logged_in=1; path=/; max-age=31536000'
        else document.cookie = 'logged_in=; Max-Age=0; path=/'
      } catch {}
      const userId = session?.user?.id
      if (userId) {
        // Provisioning en cambios de sesión
        try {
          const { data: existing, error: selErr } = await supabase
            .from('usuarios')
            .select('id, es_premium')
            .eq('user_id', userId)
            .maybeSingle()
          if (!existing && !selErr) {
            const email = session?.user?.email || ''
            const name = (session?.user?.user_metadata as any)?.full_name || email.split('@')[0] || 'Usuario'
            const inferredCommunity = location.pathname.startsWith('/madrid') ? 'madrid' : 'desconocida'
            await supabase.from('usuarios').insert({
              user_id: userId,
              nombre: name,
              correo_electronico: email,
              comunidad_autonoma: inferredCommunity,
            })
          }
        } catch {}
        const { data: row } = await supabase
          .from('usuarios')
          .select('es_premium')
          .eq('user_id', userId)
          .maybeSingle()
        setIsPremium(!!row?.es_premium)
        try { localStorage.setItem('es_premium', row?.es_premium ? '1' : '0') } catch {}
      } else {
        setIsPremium(false)
      }
    })
    return () => sub.subscription.unsubscribe()
  }, [])
  // Simplificamos el header según petición: logo + Blog + Madrid + Cataluña

  return (
    <nav className="border-b bg-white mb-8 shadow-md z-20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logoo.svg" alt="SelectiviES" width={40} height={40} />
          <span className="text-2xl font-bold">
            selectivi<span className="text-[#FFB800]">{isMadridBrand ? 'MAD' : 'ES'}</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          {isMadridSection ? (
            <>
              {!isPremium && (
                <Link href="/madrid/premium" className="bg-gray-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">Hazte Premium ⭐️</Link>
              )}
              {hasSession && (
                isMadridDashboard ? (
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut()
                      window.location.href = '/madrid'
                    }}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Cerrar sesión
                  </button>
                ) : (
                  <Link href="/madrid/dashboard" className="text-gray-700 hover:text-gray-900">Mi perfil</Link>
                )
              )}
              <button
                onClick={() => {
                  if (!hasSession) {
                    window.location.href = '/madrid/login?next=/madrid/seletest'
                  } else {
                    window.location.href = '/madrid/seletest'
                  }
                }}
                className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
              >
                {hasSession ? 'Accede a SeleTest' : 'Entrar'}
              </button>
            </>
          ) : (
            <>
              <Link href="/madrid" className="text-gray-700 hover:text-gray-900">Madrid</Link>
              <a href="https://selectivi.cat" className="text-gray-700 hover:text-gray-900">Cataluña</a>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button aria-label="Abrir menú" className="md:hidden p-2 rounded-lg border bg-white" onClick={() => setMobileOpen(true)}>☰</button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/40" onClick={() => setMobileOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-4 flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Menú</span>
              <button aria-label="Cerrar" className="p-2" onClick={() => setMobileOpen(false)}>✕</button>
            </div>
            <Link href="/blog" className="py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
            {isMadridSection ? (
              <>
                {!isPremium && (
                  <Link href="/madrid/premium" className="py-2" onClick={() => setMobileOpen(false)}>Hazte Premium ⭐️</Link>
                )}
                {hasSession ? (
                  <>
                    <Link href="/madrid/dashboard" className="py-2" onClick={() => setMobileOpen(false)}>Mi perfil</Link>
                    <button className="text-left py-2" onClick={async () => { await supabase.auth.signOut(); window.location.href = '/madrid' }}>Cerrar sesión</button>
                  </>
                ) : null}
                <button
                  onClick={() => {
                    if (!hasSession) window.location.href = '/madrid/login?next=/madrid/seletest'; else window.location.href = '/madrid/seletest'
                  }}
                  className="mt-2 bg-[#FFB800] text-black px-4 py-2 rounded-lg font-semibold"
                >
                  {hasSession ? 'Accede a SeleTest' : 'Entrar'}
                </button>
              </>
            ) : (
              <>
                <Link href="/madrid" className="py-2" onClick={() => setMobileOpen(false)}>Madrid</Link>
                <a href="https://selectivi.cat" className="py-2" onClick={() => setMobileOpen(false)}>Cataluña</a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}