import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/madrid/dashboard'

  console.log('🔄 [MADRID AUTH CALLBACK] Procesando callback OAuth...')
  console.log('📍 [MADRID AUTH CALLBACK] Code:', code ? '✓' : '✗')
  console.log('📍 [MADRID AUTH CALLBACK] Next:', next)

  if (code) {
    try {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
      
      console.log('🔑 [MADRID AUTH CALLBACK] Intercambiando código por sesión...')
      
      // Intercambiar el código por una sesión
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('❌ [MADRID AUTH CALLBACK] Error exchangeCodeForSession:', error)
        return NextResponse.redirect(new URL('/login?error=auth_failed', requestUrl.origin))
      }

      if (data?.session) {
        console.log('✅ [MADRID AUTH CALLBACK] Sesión establecida para:', data.session.user.email)
        console.log('ℹ️ [MADRID AUTH CALLBACK] El trigger de Supabase creará el usuario automáticamente')
        
        // Redireccionar al dashboard de Madrid
        console.log('🚀 [MADRID AUTH CALLBACK] Redirigiendo a:', next)
        return NextResponse.redirect(new URL(next, requestUrl.origin))
      }
    } catch (error) {
      console.error('💥 [MADRID AUTH CALLBACK] Error inesperado:', error)
      return NextResponse.redirect(new URL('/login?error=unexpected', requestUrl.origin))
    }
  }

  console.log('⚠️ [MADRID AUTH CALLBACK] No hay código, redirigiendo a login')
  return NextResponse.redirect(new URL('/login?error=no_code', requestUrl.origin))
}

