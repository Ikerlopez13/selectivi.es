import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthHashRedirect from '@/components/AuthHashRedirect'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SelectiviES | Preparación Selectividad 2026',
  description:
    'Prepara Selectividad / EvAU 2026 por comunidades con SelectiviES. Accede a SeleTest, calculadora de nota de corte y recursos actualizados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const community = cookieStore.get('community')?.value || 'general'

  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthHashRedirect />
        <div data-community={community}>{children}</div>
      </body>
    </html>
  )
}