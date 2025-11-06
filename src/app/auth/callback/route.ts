import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
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
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
      
      console.log('🔑 [AUTH CALLBACK] Intercambiando código por sesión...')
      
      // Intercambiar el código por una sesión
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('❌ [AUTH CALLBACK] Error exchangeCodeForSession:', error)
        return NextResponse.redirect(new URL('/login?error=auth_failed', requestUrl.origin))
      }

      if (data?.session) {
        console.log('✅ [AUTH CALLBACK] Sesión establecida para:', data.session.user.email)
        
        // Verificar/crear usuario en tabla usuarios
        const email = data.session.user.email
        if (email) {
          try {
            // Primero verificar si existe
            const { data: existingUser } = await supabase
              .from('usuarios')
              .select('id')
              .eq('correo_electronico', email)
              .single()
            
            if (!existingUser) {
              console.log('📝 [AUTH CALLBACK] Creando usuario en tabla usuarios...')
              // Si no existe, crear el usuario
              const { error: insertError } = await supabase
                .from('usuarios')
                .insert({
                  correo_electronico: email,
                  es_premium: false,
                  fecha_registro: new Date().toISOString()
                })
              
              if (insertError) {
                console.error('⚠️ [AUTH CALLBACK] Error al crear usuario en tabla:', insertError)
              } else {
                console.log('✅ [AUTH CALLBACK] Usuario creado en tabla usuarios')
              }
            } else {
              console.log('ℹ️ [AUTH CALLBACK] Usuario ya existe en tabla usuarios')
            }
          } catch (userError) {
            console.error('⚠️ [AUTH CALLBACK] Error al verificar/crear usuario:', userError)
          }
        }
        
        // Redireccionar al dashboard
        console.log('🚀 [AUTH CALLBACK] Redirigiendo a:', next)
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

