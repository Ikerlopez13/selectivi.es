import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Cliente de Supabase con Service Role para saltarse RLS y poder actualizar
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`❌ [WEBHOOK] Error de firma: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Manejar el evento checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email || session.metadata?.email;
    
    console.log(`🔔 [WEBHOOK] Pago completado para: ${email}`);

    if (email) {
      try {
        // ACTUALIZAR USUARIO A PREMIUM EN SUPABASE
        const { error } = await supabaseAdmin
          .from('usuarios')
          .update({ es_premium: true })
          .eq('email', email);

        if (error) {
          console.error(`❌ [WEBHOOK] Error actualizando Supabase para ${email}:`, error);
          throw error;
        }

        console.log(`✅ [WEBHOOK] Usuario ${email} ahora es PREMIUM.`);
      } catch (error) {
        console.error('💥 [WEBHOOK] Error critico actualizando base de datos:', error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
