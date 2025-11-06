import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Callback simple que redirige al dashboard de Madrid
// El cliente manejará el intercambio del código por sesión
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const next = requestUrl.searchParams.get('next') || '/madrid/dashboard'
  
  console.log('🔄 [MADRID AUTH CALLBACK] Redirigiendo a:', next)
  
  // Redirigir al dashboard - el cliente de Supabase manejará el código automáticamente
  return NextResponse.redirect(new URL(next, requestUrl.origin))
}

