"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

type Profile = {
  email: string
  isPremium: boolean
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        // 1. Obtener sesión
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user) {
          window.location.href = '/madrid/login'
          return
        }

        const baseProfile: Profile = {
          email: session.user.email || '',
          isPremium: false
        }

        setProfile(baseProfile)

        // 2. Consultar directamente la tabla usuarios usando el user_id
        if (baseProfile.email) {
          const { data: premiumData, error: premiumError } = await supabase
            .rpc('check_premium_status', { p_email: baseProfile.email })

          if (premiumError) {
            console.error('Error al verificar estado premium:', premiumError)
          } else if (premiumData === true) {
            setProfile({ ...baseProfile, isPremium: true })
          }
        }
      } catch (error: unknown) {
        console.error('Error:', error)
        // Solo redirigimos si es un error de autenticación
        if (error instanceof Error && error.message.includes('auth')) {
          window.location.href = '/madrid/login'
        }
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin text-4xl mb-4">⚡️</div>
            <div className="text-gray-600">Cargando...</div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Si no es premium, mostrar versión básica
  if (!profile || !profile.isPremium) {
    const email = profile?.email ?? ''
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Card de perfil */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium">Plan estándar</div>
                    <div className="text-gray-600">{email}</div>
                </div>
              </div>
            </div>

            {/* Card Upgrade */}
            <div className="bg-gray-100 rounded-2xl shadow p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Sube a Premium</h2>
              <p className="mb-6">Accede a todas las preguntas y funcionalidades exclusivas</p>
              <Link 
                href="/madrid/premium"
                className="inline-block bg-[#FFB800] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#ffc835]"
              >
                Ver planes Premium →
              </Link>
            </div>

            {/* Botón de cerrar sesión */}
            <div className="text-center">
              <button
                onClick={async () => {
                  await supabase.auth.signOut()
                  window.location.href = '/madrid/login'
                }}
                className="text-gray-400 text-sm hover:text-gray-600"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Versión Premium
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Card de perfil */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">⭐️</span>
              </div>
              <div>
                <div className="font-medium">Premium</div>
                <div className="text-gray-600">{profile.email}</div>
              </div>
            </div>
          </div>

          {/* Card Premium */}
          <div className="bg-[#FFB800] rounded-2xl shadow p-8 text-center">
            <div className="text-4xl mb-4">⭐️</div>
            <h2 className="text-2xl font-bold mb-2">Tu acceso Premium</h2>
            <p className="mb-6">Disfruta de acceso ilimitado a todas las preguntas y funcionalidades exclusivas</p>
            <Link 
              href="/madrid/seletest"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-50"
            >
              Acceder a SeleTest Premium →
            </Link>
          </div>

          {/* Botón de cerrar sesión */}
          <div className="text-center">
            <button
              onClick={async () => {
                await supabase.auth.signOut()
                window.location.href = '/madrid/login'
              }}
              className="text-gray-400 text-sm hover:text-gray-600"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}