import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/dashboard'

  console.log('🔄 [AUTH CALLBACK] Procesando callback OAuth...')
  console.log('📍 [AUTH CALLBACK] Code:', code ? '✓' : '✗')
  console.log('📍 [AUTH CALLBACK] Next:', next)

  if (code) {
    try {
      const cookieStore = cookies()
      
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value
            },
            set(name: string, value: string, options: CookieOptions) {
              try {
                cookieStore.set({ name, value, ...options })
              } catch (error) {
                // Ignorar errores en set durante el response
              }
            },
            remove(name: string, options: CookieOptions) {
              try {
                cookieStore.set({ name, value: '', ...options })
              } catch (error) {
                // Ignorar errores en remove durante el response
              }
            },
          },
        }
      )
      
      console.log('🔑 [AUTH CALLBACK] Intercambiando código por sesión...')
      
      // Intercambiar el código por una sesión
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('❌ [AUTH CALLBACK] Error exchangeCodeForSession:', error)
        return NextResponse.redirect(new URL('/login?error=auth_failed', requestUrl.origin))
      }

      if (data?.session) {
        console.log('✅ [ANDALUCIA AUTH CALLBACK] Sesión establecida para:', data.session.user.email)
        console.log('ℹ️ [ANDALUCIA AUTH CALLBACK] El trigger de Supabase creará el usuario automáticamente')
        
        // Redireccionar al dashboard
        console.log('🚀 [ANDALUCIA AUTH CALLBACK] Redirigiendo a:', next)
        return NextResponse.redirect(new URL(next, requestUrl.origin))
      }
    } catch (error) {
      console.error('💥 [AUTH CALLBACK] Error inesperado:', error)
      return NextResponse.redirect(new URL('/login?error=unexpected', requestUrl.origin))
    }
  }

  console.log('⚠️ [AUTH CALLBACK] No hay código, redirigiendo a login')
  return NextResponse.redirect(new URL('/login?error=no_code', requestUrl.origin))
}