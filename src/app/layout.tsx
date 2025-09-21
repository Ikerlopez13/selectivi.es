import type { Metadata } from 'next'
import './globals.css'
import 'katex/dist/katex.min.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'SelectiviES',
  description: 'Prepárate para la EvAU con SelectiviES',
  icons: {
    icon: '/images/logoo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}