import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Obtener el token del header Authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No authorization token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.replace('Bearer ', '');

    // Crear cliente Supabase con el token del usuario
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      }
    );

    // Verificar que el token sea válido
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Consultar el estado premium y usos
    const { data, error } = await supabase
      .from('usuarios')
      .select('es_premium, ai_lab_uses, premium_ai_uses, last_ai_use_at')
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching premium status:', error);
      return NextResponse.json(
        { isPremium: false, error: error.message },
        { status: 200 }
      );
    }

    return NextResponse.json({
      isPremium: Boolean(data?.es_premium),
      aiLabUses: data?.ai_lab_uses || 0,
      premiumAiUses: data?.premium_ai_uses || 0,
      lastAiUseAt: data?.last_ai_use_at,
      userId: user.id,
      email: user.email
    });

  } catch (error: any) {
    console.error('Unexpected error in check-premium API:', error);
    return NextResponse.json(
      { error: 'Internal server error', isPremium: false },
      { status: 500 }
    );
  }
}

// Opción con POST si prefieres enviar el token en el body
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('es_premium, ai_lab_uses, premium_ai_uses, last_ai_use_at')
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching premium status:', error);
      return NextResponse.json(
        { isPremium: false, error: error.message },
        { status: 200 }
      );
    }

    return NextResponse.json({
      isPremium: Boolean(data?.es_premium),
      aiLabUses: data?.ai_lab_uses || 0,
      premiumAiUses: data?.premium_ai_uses || 0,
      lastAiUseAt: data?.last_ai_use_at,
      userId: user.id,
      email: user.email
    });

  } catch (error: any) {
    console.error('Unexpected error in check-premium API:', error);
    return NextResponse.json(
      { error: 'Internal server error', isPremium: false },
      { status: 500 }
    );
  }
}