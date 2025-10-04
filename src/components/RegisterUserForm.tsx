'use client'

import { useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase/client'

const comunidades = [
  'Andalucía','Aragón','Asturias','Baleares','Canarias','Cantabria','Castilla-La Mancha','Castilla y León','Cataluña','Comunidad Valenciana','Extremadura','Galicia','La Rioja','Comunidad de Madrid','Murcia','Navarra','País Vasco','Ceuta','Melilla'
]

export default function RegisterUserForm() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [comunidad, setComunidad] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)

    if (!nombre.trim() || !correo.trim()) {
      setError('Nombre y correo son obligatorios.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correo)) {
      setError('Correo inválido.')
      return
    }
    if (!comunidad) {
      setError('La comunidad autónoma es obligatoria.')
      return
    }

    setLoading(true)
    const { error: insertError } = await supabase.from('usuarios').insert({
      nombre,
      correo_electronico: correo,
      comunidad_autonoma: comunidad,
    })
    setLoading(false)

    if (insertError) {
      setError(insertError.message)
      return
    }
    try {
      document.cookie = `logged_in=1; path=/; max-age=31536000`
      document.cookie = `recent_login=${encodeURIComponent(Date.now().toString())}; path=/; max-age=600`
    } catch {}
    setMessage('Usuario registrado correctamente.')
    setNombre('')
    setCorreo('')
    setComunidad('')
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white border rounded-2xl p-6 space-y-4">
      <h1 className="text-xl font-bold">Registro de usuario</h1>
      <div>
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full border rounded-lg px-3 py-2" placeholder="Tu nombre" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Correo electrónico</label>
        <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="email" className="w-full border rounded-lg px-3 py-2" placeholder="tucorreo@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Comunidad autónoma</label>
        <select value={comunidad} onChange={(e) => setComunidad(e.target.value)} required className="w-full border rounded-lg px-3 py-2">
          <option value="" disabled>Selecciona tu comunidad</option>
          {comunidades.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {message && <p className="text-green-700 text-sm">{message}</p>}
      <button disabled={loading} className="w-full bg-[#FFB800] hover:bg-[#ffc835] disabled:opacity-60 text-black font-semibold rounded-xl py-3">
        {loading ? 'Registrando…' : 'Registrar'}
      </button>
    </form>
  )
}
