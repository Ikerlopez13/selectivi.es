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
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let mounted = true

    async function loadProfile() {
      try {
        // 1. Verificar sesión
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        console.log('📱 Sesión:', {
          existe: !!session,
          email: session?.user?.email,
          error: sessionError?.message
        })

        if (sessionError) throw sessionError
        if (!session?.user) {
          window.location.href = '/madrid/login'
          return
        }

        // 2. Cargar perfil básico aunque falle premium
        const user = session.user
        const meta = user.user_metadata || {}
        
        if (mounted) {
          setProfile({
            name: meta.full_name || meta.name || user.email?.split('@')[0],
            email: user.email,
            avatar_url: meta.avatar_url || meta.picture
          })
        }

        // 3. Intentar verificar premium
        try {
          console.log('⭐ Verificando estado premium...')
          const { data: isPremium, error: premiumError } = await supabase
            .rpc('check_premium_status', { p_email: user.email })

          console.log('💫 Estado premium:', { isPremium, error: premiumError?.message })
          
          if (premiumError) {
            console.error('Error al verificar premium:', premiumError)
            // No redirigimos si falla premium, solo lo marcamos como false
            if (mounted) setIsPremium(false)
          } else {
            if (mounted) setIsPremium(!!isPremium)
          }
        } catch (e) {
          console.error('Error inesperado al verificar premium:', e)
          if (mounted) setIsPremium(false)
        }
      } catch (e) {
        console.error('Error al cargar perfil:', e)
        if (mounted) {
          setProfile(null)
          setIsPremium(false)
        }
      } finally {
        if (mounted) setIsLoading(false)
      }
    }

    loadProfile()
    return () => { mounted = false }
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-block animate-spin text-4xl">⚡️</div>
            <div className="text-gray-600">Cargando tu perfil...</div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Tu panel de SeleTest</h1>
          
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              localStorage.clear()
              window.location.href = '/madrid/login'
            }}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            Cerrar sesión
          </button>

          {!profile ? (
            <div className="bg-white rounded-2xl border shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-700">Error al cargar el perfil. Por favor, inicia sesión de nuevo.</p>
              <Link href="/madrid/login" className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-6 py-3">
                Iniciar sesión
              </Link>
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
                    <Link href="/madrid/seletest" className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-black font-semibold rounded-xl px-6 py-3">
                      Acceder a SeleTest Premium ➜
                    </Link>
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
                    <Link href="/madrid/premium" className="block w-full text-center bg-white/90 hover:bg-white text-black font-semibold rounded-xl py-3">
                      Obtener Premium
                    </Link>
                  </div>

                  <div className="bg-white rounded-2xl shadow p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Plan Standard</h2>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li>✓ Acceso a preguntas básicas</li>
                      <li>✓ Práctica limitada</li>
                      <li>✓ Soporte básico</li>
                    </ul>
                    <Link href="/madrid/seletest" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-xl py-3">
                      Continuar con Standard
                    </Link>
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