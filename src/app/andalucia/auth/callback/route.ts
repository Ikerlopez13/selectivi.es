import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  console.log('🔄 [CALLBACK] Code recibido:', code ? 'SÍ' : 'NO')

  if (code) {
    // Simplemente redirigir al dashboard con el código en el hash
    // El dashboard procesará el código
    const redirectUrl = new URL('/dashboard', requestUrl.origin)
    redirectUrl.hash = `access_token=${code}`
    
    console.log('✅ [CALLBACK] Redirigiendo a dashboard')
    return NextResponse.redirect(redirectUrl)
  }

  // Si no hay código, volver al login
  return NextResponse.redirect(new URL('/login', requestUrl.origin))
}