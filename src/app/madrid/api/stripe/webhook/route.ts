import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase/admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-08-27.basil',
})

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get('stripe-signature')

  if (!webhookSecret || !signature) {
    return new NextResponse('Missing webhook secret or signature', { status: 400 })
  }

  let event: Stripe.Event
  const rawBody = await request.text()

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = (session.metadata?.supabase_user_id as string) || ''
        const email = session.customer_email || ''
        if (!userId && !email) break
        // Marca premium
        if (userId) {
          await supabaseAdmin
            .from('usuarios')
            .update({ es_premium: true })
            .eq('user_id', userId)
        } else if (email) {
          await supabaseAdmin
            .from('usuarios')
            .update({ es_premium: true })
            .eq('correo_electronico', email)
        }
        break
      }
      case 'invoice.paid':
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        // Sincroniza estado según status
        const sub = event.data.object as Stripe.Subscription
        const userId = (sub.metadata?.supabase_user_id as string) || ''
        const isActive = sub.status === 'active' || sub.status === 'trialing' || sub.status === 'past_due'
        if (userId) {
          await supabaseAdmin
            .from('usuarios')
            .update({ es_premium: isActive })
            .eq('user_id', userId)
        }
        break
      }
      default:
        // No-op
        break
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new NextResponse(`Handler Error: ${message}`, { status: 500 })
  }

  return NextResponse.json({ received: true })
}


