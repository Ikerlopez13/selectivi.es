"use client"

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const nextUrl = useMemo(() => {
    if (typeof window === 'undefined') return '/madrid/dashboard'
    const p = new URLSearchParams(window.location.search)
    return p.get('next') || '/madrid/dashboard'
  }, [])

  const redirectTo = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    return `${window.location.origin}/madrid/auth/callback?next=${encodeURIComponent(nextUrl)}`
  }, [nextUrl])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(nextUrl)
    })
  }, [nextUrl])

  const onGoogle = async () => {
    setLoading(true); setMsg(null)
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })
    } catch (e: any) {
      setMsg(e?.message || 'No se pudo iniciar sesión con Google')
    } finally {
      setLoading(false)
    }
  }

  const sendMagicLink = async () => {
    setLoading(true); setMsg(null)
    try {
      const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } })
      if (error) throw error
      setMsg('Te enviamos un enlace de acceso. Revisa tu correo (y SPAM).')
    } catch (e: any) {
      setMsg(e?.message || 'No se pudo enviar el enlace')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 px-6 py-10">
        <div className="max-w-md mx-auto bg-white border rounded-2xl shadow p-6">
          <h1 className="text-2xl font-extrabold mb-1">Accede a tu cuenta</h1>
          <p className="text-gray-600 text-sm mb-6">Con Google o con enlace mágico</p>

          <button onClick={onGoogle} disabled={loading} className="w-full bg-black text-white rounded-xl py-3 font-semibold mb-4 disabled:opacity-60">Continuar con Google</button>

          <div className="space-y-3">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Tu correo electrónico" className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFB800]" />
            <button onClick={sendMagicLink} disabled={loading || !email} className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black rounded-xl py-3 font-semibold disabled:opacity-60">Enviarme enlace mágico</button>
          </div>
          {msg && <p className="text-sm text-gray-700 text-center mt-4">{msg}</p>}
        </div>
      </section>
      <Footer />
    </main>
  )
}

"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase/client'
import { useEffect, useMemo, useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const nextUrl = useMemo(() => {
    if (typeof window === 'undefined') return '/madrid/dashboard'
    const p = new URLSearchParams(window.location.search)
    return p.get('next') || '/madrid/dashboard'
  }, [])

  useEffect(() => {
    // Si ya hay sesión, redirige directamente
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        window.location.replace(nextUrl)
      }
    })
  }, [nextUrl])

  const emailRedirectTo = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    const origin = window.location.origin
    return `${origin}/madrid/auth/callback?next=${encodeURIComponent(nextUrl)}`
  }, [nextUrl])
  const onGoogle = async () => {
    setLoading(true)
    setMessage(null)
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: emailRedirectTo }
      })
    } catch (e: any) {
      setMessage(e?.message || 'Error iniciando sesión con Google')
    } finally {
      setLoading(false)
    }
  }

  const sendMagicLink = async () => {
    if (!email) { setMessage('Escribe tu email para enviarte el enlace mágico.'); return }
    setLoading(true)
    setMessage(null)
    try {
      const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo } })
      if (error) throw error
      setMessage('Te enviamos un enlace de acceso. Revisa tu email (y SPAM).')
    } catch (e: any) {
      setMessage(e?.message || 'No se pudo enviar el enlace')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="flex-1 py-10 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border shadow p-6">
            <h1 className="text-2xl font-extrabold mb-2">Accede a tu cuenta</h1>
            <p className="text-gray-600 text-sm mb-5">Elige Google o email y contraseña</p>

            <button disabled={loading} onClick={onGoogle} className="w-full bg-black text-white rounded-xl py-3 font-semibold mb-4 disabled:opacity-60">Continuar con Google</button>
            <div className="space-y-3">
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Tu correo electrónico" className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFB800]" required />
              <button onClick={sendMagicLink} disabled={loading} className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black rounded-xl py-3 font-semibold disabled:opacity-60">Enviarme enlace mágico</button>
            </div>
            {message && <p className="text-sm text-center mt-4 text-gray-700">{message}</p>}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


