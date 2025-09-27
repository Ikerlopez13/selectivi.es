"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  // Si ya hay sesión, redirigir al dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }}) => {
      if (session) window.location.href = '/madrid/dashboard'
    })
  }, [])

  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/madrid/dashboard`
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Error:', error)
      alert('Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Accede a tu cuenta</h1>
            <button
              onClick={loginWithGoogle}
              disabled={loading}
              className="w-full bg-black text-white rounded-xl py-3 font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Iniciando sesión...' : 'Continuar con Google'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}