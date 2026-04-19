"use client"
import { useMemo, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { supabase } from '@/lib/supabase/client'

type Plan = 'monthly' | 'lifetime'

type Props = {
  plan?: Plan | 'both'
}

export function StripeButtons({ plan = 'both' }: Props) {
  const [loading, setLoading] = useState<Plan | null>(null)
  const [error, setError] = useState<string | null>(null)

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string | undefined
  const stripePromise = useMemo(() => {
    if (typeof window === 'undefined') return null
    if (!publishableKey) return null
    return loadStripe(publishableKey)
  }, [publishableKey])

  const handleClick = async (plan: Plan) => {
    try {
      setLoading(plan)
      setError(null)

      const { data: { user }, error: sessionError } = await supabase.auth.getUser()
      if (sessionError) throw sessionError
      
      if (!user) {
        // Redirige a login si no hay sesión
        window.location.href = "/login"
        return
      }

      const email = user.email
      if (!email) throw new Error('No email on user')

      // Obtener el Price ID correcto según el plan
      const priceId = plan === 'monthly' 
        ? "price_1S9NsaKD8uYiuyZB55EP2NOM" // Estos son tus IDs reales del .env
        : "price_1S9NteKD8uYiuyZB4r6KSRJY"

      console.log(`💳 [STRIPE] Iniciando pago para ${plan}: ${priceId}`);

      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, email, name: user.user_metadata?.full_name || '' }),
      })

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error en el servidor: ${errorText}`);
      }

      const { url } = await res.json()
      if (!url) throw new Error('No se recibió URL de checkout')

      // Redirigir directamente a la página de Stripe
      window.location.href = url;
      
    } catch (e) {
      console.error('❌ [STRIPE] Error:', e);
      const msg = e instanceof Error ? e.message : 'Error inesperado al conectar con Stripe'
      setError(msg)
    } finally {
      setLoading(null)
    }
  }

  if (plan === 'lifetime' || plan === 'both') {
    return (
      <>
        <button onClick={() => handleClick('lifetime')} disabled={loading !== null} className="w-full bg-black hover:bg-gray-800 text-white font-semibold rounded-xl py-4 disabled:opacity-60 transition-all">
          {loading === 'lifetime' ? 'Redirigiendo…' : 'Comprar Acceso Premium (14,99€)'}
        </button>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </>
    )
  }

  return null;
}


