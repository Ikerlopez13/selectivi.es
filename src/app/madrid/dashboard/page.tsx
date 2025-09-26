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
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isPremium, setIsPremium] = useState<boolean>(false)
  const [hasSessionChecked, setHasSessionChecked] = useState<boolean>(false)

  useEffect(() => {
    let mounted = true

    // 1. Completa sesión si hay código o hash
    ;(async () => {
      try {
        if (typeof window !== 'undefined') {
          // Magic Link: tokens en el hash
          const hash = window.location.hash?.replace(/^#/, '') || ''
          if (hash) {
            const hp = new URLSearchParams(hash)
            const access_token = hp.get('access_token')
            const refresh_token = hp.get('refresh_token')
            if (access_token && refresh_token) {
              await supabase.auth.setSession({ access_token, refresh_token })
              window.history.replaceState(null, '', window.location.pathname)
            }          }          // OAuth: código en query
          const url = new URL(window.location.href)
          const code = url.searchParams.get('code')
          if (code) {
            await supabase.auth.exchangeCodeForSession(code)
            url.searchParams.delete('code')
            window.history.replaceState(null, '', url.toString())
          }        }      } catch (e) {
        console.warn('Error setting session:', e)
      }    })()

    // 2. Lee sesión actual
    ;(async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        if (!session?.user) {
          if (mounted) {
            setHasSessionChecked(true)
            window.location.href = '/madrid/login?next=/madrid/dashboard'
          }          return
        }
        const user = session.user
        const meta = (user.user_metadata || {}) as any

        // Pinta perfil
        if (mounted) {
          setProfile({
            name: meta.full_name || meta.name || user.email?.split('@')[0],
            email: user.email || undefined,
            avatar_url: meta.avatar_url || meta.picture || undefined,
          })
        }
        // Upsert usuario y lee premium
        await supabase.rpc('ensure_usuario_exists', {
          p_user_id: user.id,
          p_email: user.email!,
          p_nombre: meta.full_name || meta.name || user.email?.split('@')[0] || 'Usuario',
          p_comunidad: 'madrid',
        })

        const { data: row } = await supabase
          .from('usuarios')
          .select('es_premium')
          .eq('user_id', user.id)
          .maybeSingle()

        if (mounted) {
          const premium = !!row?.es_premium
          setIsPremium(premium)
          try { window.localStorage.setItem('es_premium', premium ? '1' : '0') } catch {}          setHasSessionChecked(true)
        }      } catch (e) {
        console.warn('Error loading profile:', e)
        if (mounted) setHasSessionChecked(true)
      }    })()

    // Fallback: no skeleton infinito
    const slow = setTimeout(() => {
      if (mounted) setHasSessionChecked(true)
    }, 2000)

    return () => {
      mounted = false
      clearTimeout(slow)
    }  }, [])

  const onLogin = async () => {
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : ''
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${origin}/madrid/auth/callback` }      })
    } catch (e) {
      console.warn('Error initiating login:', e)
    }  }
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Tu panel de SeleTest</h1>

          {!profile && !hasSessionChecked ? (
            // Skeleton instantáneo mientras comprobamos sesión
            <div className="bg-white rounded-2xl border shadow p-6 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-40 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-64" />
                </div>
                <div className="h-6 bg-gray-200 rounded w-28" />
              </div>
            </div>
          ) : !profile && hasSessionChecked ? (
            <div className="bg-white rounded-2xl border shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-700">Para ver tu panel, inicia sesión.</p>
              <button onClick={onLogin} className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-6 py-3">Iniciar sesión con Google</button>
            </div>
          ) : (
            <>
              {/* Perfil */}              <div className="bg-white rounded-2xl border shadow p-6 flex items-center justify-between gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#FFE08A] overflow-hidden flex items-center justify-center">
                  {profile!.avatar_url ? (
                    <Image src={profile!.avatar_url} alt={profile!.name || 'Avatar'} width={64} height={64} className="object-cover w-16 h-16" />
                  ) : (
                    <span className="text-xl font-bold">{(profile!.name || 'U')[0]}</span>
                  )}                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{profile!.name}</div>
                  <div className="text-gray-600 text-sm">{profile!.email}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${isPremium ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                  {isPremium ? 'Premium activo' : 'Standard'}                </span>
              </div>

              {/* Planes */}              {isPremium ? (
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
              )}            </>
          )}        </div>
      </section>
      <Footer />
    </main>
  )
}}

