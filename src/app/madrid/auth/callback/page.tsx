"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function AuthCallback() {
  const [status, setStatus] = useState('Procesando inicio de sesión…')
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [debugEnabled, setDebugEnabled] = useState(false)

  const addDebug = (msg: string) => {
    if (!debugEnabled) return
    console.log('AuthCallback:', msg)
    setDebugInfo(prev => [...prev, msg])
  }

  useEffect(() => {
    (async () => {
      try {
        const url = new URL(window.location.href)
        setDebugEnabled(url.searchParams.get('debug') === '1')
        // A partir de ahora, ignoramos cualquier next y vamos SIEMPRE al dashboard
        let next = '/madrid/dashboard'
        addDebug(`URL actual: ${url.href}`)
        addDebug(`Destino: ${next}`)

        let sessionSet = false

        // 1) Intenta hash tokens (magic link)
        const hash = url.hash.replace(/^#/, '')
        if (hash) {
          addDebug(`Hash encontrado: ${hash.substring(0, 50)}...`)
          const hp = new URLSearchParams(hash)
          const access_token = hp.get('access_token')
          const refresh_token = hp.get('refresh_token')
          
          if (access_token && refresh_token) {
            addDebug('Tokens en hash encontrados, configurando sesión...')
            const { error } = await supabase.auth.setSession({ access_token, refresh_token })
            if (error) {
              addDebug(`Error setSession: ${error.message}`)
              throw error
            }
            sessionSet = true
            addDebug('Sesión configurada desde hash')
            
            // Limpiar URL
            if (window.history?.replaceState) {
              window.history.replaceState(null, '', `${url.pathname}${url.search}`)
              addDebug('URL limpiada')
            }
          }
        }

        // 2) Si no hay hash, intenta code (Google)
        if (!sessionSet) {
          const code = url.searchParams.get('code')
          if (code) {
            addDebug(`Code encontrado: ${code.substring(0, 10)}...`)
            const { error } = await supabase.auth.exchangeCodeForSession(code)
            if (error) {
              addDebug(`Error exchangeCode: ${error.message}`)
              throw error
            }
            sessionSet = true
            addDebug('Sesión configurada desde code')
            // limpia parámetro code
            try { url.searchParams.delete('code'); history.replaceState(null,'',url.toString()) } catch {}
          }
        }

        if (!sessionSet) {
          addDebug('No se encontraron tokens ni code')
          throw new Error('No se encontraron credenciales de autenticación')
        }

        // 3) Verificar sesión
        addDebug('Verificando sesión...')
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
        if (sessionError) {
          addDebug(`Error getSession: ${sessionError.message}`)
          throw sessionError
        }

        const user = sessionData.session?.user
        if (!user) {
          addDebug('No hay usuario en la sesión')
          throw new Error('No se pudo obtener la información del usuario')
        }

        addDebug(`Usuario autenticado: ${user.email}`)

        // 4) Cookie
        try {
          document.cookie = 'logged_in=1; path=/; max-age=31536000'
          addDebug('Cookie configurada')
        } catch (cookieError) {
          addDebug(`Error configurando cookie: ${cookieError}`)
        }

        // 5) Upsert usuario
        addDebug('Guardando usuario en BD...')
        const meta = (user.user_metadata || {}) as any
        const { error: upsertError } = await supabase
          .from('usuarios')
          .upsert({
            user_id: user.id,
            nombre: meta.full_name || meta.name || user.email?.split('@')[0] || 'Usuario',
            correo_electronico: user.email,
            comunidad_autonoma: 'madrid',
          }, { onConflict: 'user_id', ignoreDuplicates: false })

        if (upsertError) {
          addDebug(`Error upsert: ${upsertError.message}`)
          // No lanzar error, continuar con la redirección
          console.error('Error al guardar usuario:', upsertError)
        } else {
          addDebug('Usuario guardado correctamente')
        }

        // 6) Redirigir siempre al dashboard (evita bucles y asegura sesión)
        setStatus('Redirigiendo…')
        addDebug(`Redirigiendo a: ${next}`)
        window.location.replace(next)

      } catch (e: any) {
        const errorMsg = e?.message || 'No se pudo completar el inicio de sesión.'
        addDebug(`Error final: ${errorMsg}`)
        setStatus(errorMsg)
      }
    })()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-700 text-lg mb-4">{status}</div>
        {debugEnabled && (
          <div className="max-w-md mx-auto text-xs text-gray-500 bg-gray-50 p-4 rounded">
            <div className="font-bold mb-2">Debug:</div>
            {debugInfo.map((info, i) => (
              <div key={i} className="mb-1">{i + 1}. {info}</div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}