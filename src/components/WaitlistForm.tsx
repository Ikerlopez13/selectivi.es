'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

const comunidades = [
  'Andalucía','Aragón','Asturias','Baleares','Canarias','Cantabria','Castilla-La Mancha','Castilla y León','Cataluña','Comunidad Valenciana','Extremadura','Galicia','La Rioja','Comunidad de Madrid','Murcia','Navarra','País Vasco','Ceuta','Melilla'
]

export default function WaitlistForm({ source = 'madrid-premium' }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [comunidad, setComunidad] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault?.()
    setMessage(null)
    setError(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Introduce un correo válido.')
      return
    }
    if (!comunidad) {
      setError('Selecciona tu comunidad autónoma.')
      return
    }
    setLoading(true)
    const { error: insertError } = await supabase.from('waitlist').insert({ email, comunidad, source })
    setLoading(false)
    if (insertError) {
      if ((insertError as any).code === '23505') {
        setError('Este correo ya está en la lista de espera. ¡Te avisaremos!')
      } else {
        setError(insertError.message)
      }
      return
    }
    setMessage('¡Gracias! Te avisaremos en cuanto esté disponible.')
    setEmail('')
    setComunidad('')
  }

  return (
    <div className="bg-white/70 backdrop-blur rounded-3xl p-6 md:p-8 border shadow-md grid md:grid-cols-2 gap-8 items-center">
      <form className="order-2 md:order-1">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Tu comunidad aún no está disponible</h3>
        <p className="text-gray-700 mb-6">Déjanos tu correo y comunidad y te avisaremos lo antes posible</p>
        <div className="space-y-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full border rounded-xl px-4 py-3"
          />
          <select
            value={comunidad}
            onChange={(e) => setComunidad(e.target.value)}
            required
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="" disabled>Tu comunidad autónoma</option>
            {comunidades.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
          {message && <p className="text-sm text-green-700" role="status">{message}</p>}
          <button type="button" onClick={() => onSubmit()} disabled={loading} className="w-full bg-[#FFB800] hover:bg-[#ffc835] disabled:opacity-60 text-black font-semibold rounded-xl py-3">
            {loading ? 'Enviando…' : message ? 'Enviado' : 'Enviar'}
          </button>
        </div>
      </form>
      <div className="order-1 md:order-2 hidden md:flex justify-end pointer-events-none select-none">
        <img src="/images/gato.svg" alt="Mascota" className="w-[260px] h-auto pointer-events-none select-none" />
      </div>
    </div>
  )
}
