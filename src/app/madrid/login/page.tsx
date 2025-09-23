"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase/client'
import { useEffect, useMemo, useState } from 'react'

export default function LoginPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

  const onGoogle = async () => {
    setLoading(true)
    setMessage(null)
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' })
    } catch (e: any) {
      setMessage(e?.message || 'Error iniciando sesión con Google')
    } finally {
      setLoading(false)
    }
  }

  const emailRedirectTo = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    const origin = window.location.origin
    return `${origin}/madrid/api/auth/return?next=${encodeURIComponent(nextUrl)}`
  }, [nextUrl])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      if (mode === 'signin') {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        if (data.session) {
          try { document.cookie = 'logged_in=1; path=/; max-age=31536000' } catch {}
          // Provisioning en background, sin bloquear redirección
          ;(async () => {
            try {
              const user = data.session?.user
              if (!user) return
              const meta = (user.user_metadata || {}) as any
              const { data: existing } = await supabase
                .from('usuarios')
                .select('id')
                .eq('user_id', user.id)
                .maybeSingle()
              if (!existing) {
                await supabase.from('usuarios').insert({
                  user_id: user.id,
                  nombre: meta.full_name || meta.name || user.email?.split('@')[0] || 'Usuario',
                  correo_electronico: user.email,
                  comunidad_autonoma: 'madrid',
                })
              }
            } catch {}
          })()
          window.location.replace(nextUrl)
          return
        }
        setMessage('Inicia sesión correcta, redirigiendo…')
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo } })
        if (error) throw error
        if (!data.session) {
          setMessage('Registro iniciado. Revisa tu email (y SPAM) para confirmar la cuenta. Puedes reenviar el email más abajo.')
        } else {
          window.location.replace(nextUrl)
        }
      }
    } catch (e: any) {
      if (e?.message?.toLowerCase().includes('email not confirmed')) {
        setMessage('Tu email no está confirmado. Revisa tu bandeja o reenvía el correo de verificación.')
      } else {
        setMessage(e?.message || 'Ha ocurrido un error')
      }
    } finally {
      setLoading(false)
    }
  }

  const resendConfirmation = async () => {
    if (!email) { setMessage('Escribe tu email para reenviar el correo de verificación.'); return }
    setLoading(true)
    setMessage(null)
    try {
      const { error } = await supabase.auth.resend({ type: 'signup', email, options: { emailRedirectTo } })
      if (error) throw error
      setMessage('Correo de verificación reenviado. Revisa tu email y SPAM.')
    } catch (e: any) {
      setMessage(e?.message || 'No se pudo reenviar el correo')
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

            <div className="flex items-center gap-2 mb-4">
              <button onClick={() => setMode('signin')} className={`px-3 py-1 rounded-lg border text-sm ${mode==='signin'?'bg-[#FFF3C4] border-[#FFE08A]':'bg-white'}`}>Iniciar sesión</button>
              <button onClick={() => setMode('signup')} className={`px-3 py-1 rounded-lg border text-sm ${mode==='signup'?'bg-[#FFF3C4] border-[#FFE08A]':'bg-white'}`}>Crear cuenta</button>
            </div>

            <button disabled={loading} onClick={onGoogle} className="w-full bg-black text-white rounded-xl py-3 font-semibold mb-4 disabled:opacity-60">Continuar con Google</button>

            <form onSubmit={onSubmit} className="space-y-3">
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Correo electrónico" className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFB800]" required />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Contraseña" className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFB800]" required />
              <button disabled={loading} type="submit" className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black rounded-xl py-3 font-semibold disabled:opacity-60">
                {mode==='signin' ? 'Entrar' : 'Registrarme'}
              </button>
            </form>
            <div className="mt-4 space-y-2">
              <button onClick={resendConfirmation} disabled={loading} className="w-full text-sm bg-gray-100 hover:bg-gray-200 text-black rounded-lg py-2">Reenviar correo de verificación</button>
              <button onClick={sendMagicLink} disabled={loading} className="w-full text-sm bg-gray-100 hover:bg-gray-200 text-black rounded-lg py-2">Enviarme enlace mágico</button>
              {message && <p className="text-sm text-center text-gray-700">{message}</p>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


