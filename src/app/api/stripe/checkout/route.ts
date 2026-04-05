import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

// Llave de Stripe (Se configurará en .env)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: Request) {
  try {
    const { priceId, email, name } = await req.json();

    if (!priceId || !email) {
      return NextResponse.json({ error: 'Faltan datos (priceId o email)' }, { status: 400 });
    }

    console.log(`🚀 [STRIPE] Creando checkout para: ${email}, Plan: ${priceId}`);

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL;

    const mode = (priceId === process.env.STRIPE_PRICE_PREMIUM_MONTHLY) ? 'subscription' : 'payment';

    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode as Stripe.Checkout.SessionCreateParams.Mode,
      success_url: `${origin}/dashboard?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${origin}/madrid/premium?canceled=true`,
      metadata: {
        email: email,
        name: name || '',
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error('❌ [STRIPE] Error al crear checkout:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
