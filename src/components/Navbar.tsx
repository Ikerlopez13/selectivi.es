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
  const [hasSession, setHasSession] = useState(false)

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setHasSession(!!data.session)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setHasSession(!!session)
    })
    return () => sub.subscription.unsubscribe()
  }, [])
  // Simplificamos el header según petición: logo + Blog + Madrid + Cataluña

  return (
    <nav className="border-b bg-white mb-8 shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logoo.svg" alt="SelectiviES" width={40} height={40} />
          <span className="text-2xl font-bold">
            selectivi<span className="text-[#FFB800]">{isMadridBrand ? 'MAD' : 'ES'}</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          {isMadridSection ? (
            <>
              <Link href="/madrid/premium" className="bg-gray-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">Hazte Premium ⭐️</Link>
              <button
                onClick={async () => {
                  if (!hasSession) {
                    await supabase.auth.signInWithOAuth({
                      provider: 'google',
                      options: { redirectTo: `${window.location.origin}/madrid/seletest?autoCommunity=madrid` },
                    })
                  } else {
                    window.location.href = '/madrid/seletest'
                  }
                }}
                className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
              >
                {hasSession ? 'Accede a SeleTest' : 'Regístrate'}
              </button>
            </>
          ) : (
            <>
              <Link href="/madrid" className="text-gray-700 hover:text-gray-900">Madrid</Link>
              <a href="https://selectivi.cat" className="text-gray-700 hover:text-gray-900">Cataluña</a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}