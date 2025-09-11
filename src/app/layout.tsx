import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}