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
    let retryCount = 0
    const maxRetries = 3
    const retryDelay = 2000 // 2 segundos entre reintentos

    async function checkPremiumStatus(email: string): Promise<boolean> {
      console.log(`🔍 Intento ${retryCount + 1}/${maxRetries} de verificación premium para:`, email)
      
      try {
        const { data: isPremium, error: premiumError } = await supabase
          .rpc('check_premium_status', { p_email: email })
        
        if (premiumError) {
          console.error('❌ Error al verificar premium:', premiumError)
          return false
        }

        console.log('📊 Estado premium:', isPremium)
        return !!isPremium
      } catch (e) {
        console.error('❌ Error inesperado al verificar premium:', e)
        return false
      }
    }

    async function loadProfile() {
      console.log('🔍 Cargando perfil...')
      
      try {
        // Intentar obtener sesión
        console.log('🔐 Intentando obtener sesión...')
        const { data, error } = await supabase.auth.getSession()
        console.log('📱 Resultado getSession:', {
          success: !error,
          hasSession: !!data?.session,
          userId: data?.session?.user?.id,
          email: data?.session?.user?.email,
          error: error?.message || 'ninguno'
        })

        const session = data?.session

        // Log del estado final
        console.log('🔑 Estado final:', {
          tieneSession: !!session,
          userId: session?.user?.id,
          email: session?.user?.email,
          error: error?.message || 'ninguno'
        })

        if (error) throw error
        if (!session?.user) {
          if (mounted) {
            setIsLoading(false)
            window.location.href = '/madrid/login?next=/madrid/dashboard'
          }
          return
        }

        // 2. Cargar perfil inmediatamente
        const user = session.user
        const meta = (user.user_metadata || {}) as any
        if (mounted) {
          setProfile({
            name: meta.full_name || meta.name || user.email?.split('@')[0],
            email: user.email || undefined,
            avatar_url: meta.avatar_url || meta.picture || undefined,
          })
        }

        // 3. Verificar premium con reintentos
        if (user.email) {
          let premium = false
          
          while (retryCount < maxRetries) {
            premium = await checkPremiumStatus(user.email)
            
            if (premium || !mounted) break
            
            retryCount++
            if (retryCount < maxRetries) {
              console.log(`⏳ Esperando ${retryDelay}ms antes del siguiente intento...`)
              await new Promise(resolve => setTimeout(resolve, retryDelay))
            }
          }

          if (mounted) {
            setIsPremium(premium)
            try { localStorage.setItem('es_premium', premium ? '1' : '0') } catch {}

            // Asegurar que existe fila en public.usuarios si es premium
            if (premium) {
              const { error: upsertError } = await supabase.rpc('ensure_usuario_exists', {
                p_user_id: user.id,
                p_email: user.email,
                p_name: meta.full_name || meta.name || user.email?.split('@')[0] || 'Usuario',
                p_community: location.pathname.startsWith('/madrid') ? 'madrid' : 'desconocida'
              })
              if (upsertError) console.error('❌ Error al asegurar usuario:', upsertError)
            }
          }
        }

        if (mounted) setIsLoading(false)
      } catch (e) {
        console.error('Error loading profile:', e)
        if (mounted) {
          // Si falla, al menos muestra el perfil básico
          setIsLoading(false)
          setIsPremium(false)
        }
      }
    }

    loadProfile()

    return () => {
      mounted = false
    }
  }, [])

  const onLogin = async () => {
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : ''
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${origin}/madrid/auth/callback` }
      })
    } catch (e) {
      console.error('Error initiating login:', e)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Tu panel de SeleTest</h1>

          {isLoading ? (
            // Skeleton instantáneo mientras comprobamos sesión
            <div className="space-y-6">
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
              <div className="text-center text-gray-500">
                <div className="inline-block animate-spin mr-2">⚡️</div>
                Cargando tu perfil...
                <button 
                  onClick={async () => {
                    try {
                      const { data: { session } } = await supabase.auth.getSession();
                      if (!session?.user?.email) {
                        console.log('❌ No hay email en la sesión');
                        return;
                      }
                      console.log('📧 Email:', session.user.email);
                      const { data, error } = await supabase.rpc('check_premium_status', { 
                        p_email: session.user.email 
                      });
                      console.log('📊 Resultado:', { data, error });
                    } catch (e) {
                      console.error('❌ Error:', e);
                    }
                  }}
                  className="block mx-auto mt-4 px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Probar Premium Status
                </button>
              </div>
            </div>
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