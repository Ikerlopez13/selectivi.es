import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  return new Stripe(key, { apiVersion: '2025-08-27.basil' })
}

function getOriginFromRequest(req: Request) {
  try {
    const url = new URL(req.url)
    return `${url.protocol}//${url.host}`
  } catch {
    return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  }
}

export async function POST(request: Request) {
  try {
    const { plan, email, userId } = await request.json()

    if (!plan) {
      return new NextResponse('Missing plan', { status: 400 })
    }
    if (!email) {
      return new NextResponse('Missing email', { status: 400 })
    }

    const origin = getOriginFromRequest(request)

    const priceMap: Record<string, { price: string; mode: 'subscription' | 'payment' }> = {
      monthly: { price: process.env.STRIPE_PRICE_PREMIUM_MONTHLY ?? '', mode: 'subscription' },
      lifetime: { price: process.env.STRIPE_PRICE_PREMIUM_LIFETIME ?? '', mode: 'payment' },
    }

    const selected = priceMap[plan]
    if (!selected || !selected.price) {
      return new NextResponse('Invalid plan or price not configured', { status: 400 })
    }

    const stripe = getStripe()
    if (!stripe) {
      return new NextResponse('Stripe no está configurado', { status: 500 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: selected.mode,
      line_items: [
        {
          price: selected.price,
          quantity: 1,
        },
      ],
      success_url: `${origin}/madrid/dashboard?checkout=success`,
      cancel_url: `${origin}/madrid/premium?cancelled=1`,
      customer_email: email,
      allow_promotion_codes: false,
      metadata: {
        supabase_user_id: userId ?? '',
        community: 'madrid',
        plan,
      },
    })

    return NextResponse.json({ id: session.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new NextResponse(`Error creating session: ${message}`, { status: 500 })
  }
}


