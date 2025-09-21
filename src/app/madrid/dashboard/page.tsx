"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Profile = {
  name?: string
  email?: string
  avatar_url?: string
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isPremium, setIsPremium] = useState<boolean>(false)

  useEffect(() => {
    let mounted = true
    supabase.auth.getUser().then(async ({ data }) => {
      if (!mounted) return
      const user = data.user
      if (!user) {
        setProfile(null)
        setLoading(false)
        return
      }
      const meta = (user.user_metadata || {}) as any
      setProfile({
        name: meta.full_name || meta.name || user.email?.split('@')[0],
        email: user.email || undefined,
        avatar_url: meta.avatar_url || meta.picture || undefined,
      })
      // Leer plan (premium) con user_id y, si no hay fila, por correo
      try {
        const { data: row } = await supabase
          .from('usuarios')
          .select('es_premium')
          .eq('user_id', user.id)
          .maybeSingle()
        if (row && typeof row.es_premium === 'boolean') {
          setIsPremium(row.es_premium)
        } else if (user.email) {
          const { data: byEmail } = await supabase
            .from('usuarios')
            .select('es_premium')
            .eq('correo_electronico', user.email)
            .maybeSingle()
          setIsPremium(!!byEmail?.es_premium)
        }
      } catch {
        setIsPremium(false)
      }
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  const onLogin = async () => {
    const origin = (typeof window !== 'undefined' && window.location.origin) || 'https://selectivi.es'
    const base = origin.includes('localhost') ? 'https://selectivi.es' : origin
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${base}/madrid/auth/return?next=${encodeURIComponent('/madrid/dashboard')}` },
    })
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Tu panel de SeleTest</h1>

          {loading ? (
            <div className="bg-white rounded-2xl border shadow p-6">Cargando…</div>
          ) : !profile ? (
            <div className="bg-white rounded-2xl border shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-700">Para ver tu panel, inicia sesión.</p>
              <button onClick={onLogin} className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-6 py-3">Iniciar sesión con Google</button>
            </div>
          ) : (
            <>
              {/* Perfil */}
              <div className="bg-white rounded-2xl border shadow p-6 flex items-center justify-between gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#FFE08A] overflow-hidden flex items-center justify-center">
                  {profile.avatar_url ? (
                    <Image src={profile.avatar_url} alt={profile.name || 'Avatar'} width={64} height={64} className="object-cover w-16 h-16" />
                  ) : (
                    <span className="text-xl font-bold">{(profile.name || 'U')[0]}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{profile.name}</div>
                  <div className="text-gray-600 text-sm">{profile.email}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${isPremium ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                  {isPremium ? 'Premium activo' : 'Standard'}
                </span>
              </div>

              {/* Planes */}
              {isPremium ? (
                <div className="w-full">
                  <div className="rounded-3xl shadow p-8 md:p-12 border bg-gradient-to-br from-[#FFD451] to-[#FFB800] text-black flex flex-col items-center text-center">
                    <div className="text-4xl mb-2">⭐️</div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Tu acceso Premium</h2>
                    <p className="text-base md:text-lg opacity-90 mb-6">Acceso ilimitado a todas las preguntas y funcionalidades exclusivas.</p>
                    <Link href="/madrid/seletest" className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-black font-semibold rounded-xl px-6 py-3">Acceder a SeleTest Premium ➜</Link>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#FFCF4A] to-[#FFB800] text-black rounded-2xl shadow p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Plan Premium</h2>
                    <ul className="space-y-2 mb-6">
                      <li>✓ Acceso ilimitado a todas las preguntas</li>
                      <li>✓ Preguntas premium exclusivas</li>
                      <li>✓ Soporte prioritario</li>
                    </ul>
                    <Link href="/madrid/premium" className="block w-full text-center bg-white/90 hover:bg-white text-black font-semibold rounded-xl py-3">Obtener Premium</Link>
                  </div>

                  <div className="bg-white rounded-2xl shadow p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Plan Standard</h2>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li>✓ Acceso a preguntas básicas</li>
                      <li>✓ Práctica limitada</li>
                      <li>✓ Soporte básico</li>
                    </ul>
                    <Link href="/madrid/seletest" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-xl py-3">Continuar con Standard</Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}


