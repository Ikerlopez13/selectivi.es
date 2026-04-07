import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "katex/dist/katex.min.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SelectiviES - Prepara tu Selectividad 2026",
    template: "%s | SelectiviES"
  },
  description: "La mejor plataforma para preparar la Selectividad (PAU) 2026 en España. Exámenes resueltos, simulador de tests y notas de corte actualizadas.",
  keywords: ["selectividad 2026", "pau 2026", "evau 2026", "exámenes resueltos", "notas de corte", "preparar selectividad"],
  authors: [{ name: "SelectiviES" }],
  creator: "SelectiviES",
  publisher: "SelectiviES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://selectivi.es"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SelectiviES - Prepara tu Selectividad 2026",
    description: "La plataforma definitiva para aprobar la Selectividad con exámenes resueltos y simuladores por temas.",
    url: "https://selectivi.es",
    siteName: "SelectiviES",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SelectiviES - Prepara tu Selectividad 2026",
    description: "Exámenes resueltos y simuladores por temas para la PAU 2026.",
    creator: "@selectivies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}