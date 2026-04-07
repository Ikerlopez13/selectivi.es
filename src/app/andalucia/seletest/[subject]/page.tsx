import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// Importar preguntas adaptadas al currículo andaluz
import { historyAND } from '@/lib/seletest/andalucia/history'
import { philosophyAND } from '@/lib/seletest/andalucia/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyAND } from '@/lib/seletest/andalucia/geography'
import { languageAND } from '@/lib/seletest/andalucia/language'
import { englishAND } from '@/lib/seletest/andalucia/english'
import { biologyAND } from '@/lib/seletest/andalucia/biology'
import { chemistryAND } from '@/lib/seletest/andalucia/chemistry'
import { physicsAND } from '@/lib/seletest/andalucia/physics'
import { mathematicsAND } from '@/lib/seletest/andalucia/mathematics'
import Seletest from '@/components/Seletest'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'

const SUBJECT_NAMES: Record<string, string> = {
  'historia-espana': 'Historia de España',
  'filosofia': 'Filosofía',
  'economia-empresa': 'Economía de la Empresa',
  'geografia': 'Geografía',
  'lengua': 'Lengua Castellana y Literatura',
  'ingles': 'Inglés',
  'biology': 'Biología',
  'chemistry': 'Química',
  'physics': 'Física',
  'mathematics': 'Matemáticas II',
}

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const name = SUBJECT_NAMES[params.subject] || 'Asignatura'
  return {
    title: `Exámenes Resueltos ${name} Selectividad Andalucía 2026 | DUA`,
    description: `Prepara la Selectividad (PAU) 2026 en Andalucía con exámenes resueltos de ${name}. Practica con el simulador oficial del Distrito Único Andaluz (DUA) con corrección al instante.`,
    keywords: [
      `selectividad andalucia 2026 ${params.subject}`,
      `pau andalucia 2026 ${name}`,
      `exámenes resueltos ${name} andalucia`,
      `distrito unico andaluz ${name}`,
      `modelos de examen andalucia 2026`
    ],
    openGraph: {
      title: `Exámenes Resueltos ${name} Selectividad Andalucía 2026`,
      description: `Aprueba la PAU 2026 con nuestro simulador de ${name} para Andalucía.`,
      type: 'website',
    },
    alternates: {
      canonical: `/andalucia/seletest/${params.subject}`,
    }
  }
}

const SUBJECTS = {
  'historia-espana': historyAND,
  'filosofia': philosophyAND,
  'economia-empresa': businessES,
  'geografia': geographyAND,
  'lengua': languageAND,
  'ingles': englishAND,
  'biology': biologyAND,
  'chemistry': chemistryAND,
  'physics': physicsAND,
  'mathematics': mathematicsAND,
}

export default function SubjectPage({ params, searchParams }: { params: { subject: string }, searchParams: { premium?: string } }) {
  const subject = SUBJECTS[params.subject as keyof typeof SUBJECTS]
  const isPremium = searchParams.premium === '1'
  // Si viene autoCommunity=andalucia, persistimos cookie comunitaria (para futuras vistas)
  if (typeof searchParams !== 'undefined' && (searchParams as any).autoCommunity === 'andalucia') {
    try {
      cookies().set('community', 'andalucia', { path: '/', httpOnly: false })
    } catch {}
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <nav className="text-xs mb-4 text-gray-500" aria-label="Breadcrumb">
             <a href="/" className="hover:underline">Inicio</a> / <a href="/andalucia" className="hover:underline">Andalucía</a> / <a href="/andalucia/seletest" className="hover:underline">SeleTest</a> / <span className="font-semibold">{SUBJECT_NAMES[params.subject] || 'Asignatura'}</span>
          </nav>
          <a
            href="/andalucia/seletest"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <span className="inline-block -ml-1 h-5 w-5 rotate-180 select-none">➜</span>
            Volver a SeleTest
          </a>
        </div>
        <div className="max-w-[1100px] mx-auto px-6 mb-8">
           <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
             Exámenes Resueltos de {SUBJECT_NAMES[params.subject] || 'Asignatura'} - Selectividad Andalucía 2026
           </h1>
           <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
             Prepara tu examen de la PAU 2026 con nuestro simulador de {SUBJECT_NAMES[params.subject] || 'esta asignatura'} basado en el Distrito Único Andaluz (DUA). 
             Preguntas actualizadas y corregidas siguiendo los criterios oficiales de corrección de Andalucía.
           </p>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": `Preparación PAU 2026: ${SUBJECT_NAMES[params.subject] || 'Asignatura'} Andalucía`,
              "description": `Simulador interactivo con exámenes resueltos de ${SUBJECT_NAMES[params.subject] || 'la asignatura'} para la Selectividad de Andalucía.`,
              "provider": {
                "@type": "Organization",
                "name": "SelectiviES",
                "sameAs": "https://selectivi.es"
              }
            })
          }}
        />
        {subject ? (
          <Seletest subject={subject} isPremium={!!isPremium} />
        ) : (
          <div className="max-w-[1100px] mx-auto px-6 py-10">Asignatura no encontrada.</div>
        )}
      </section>
      <Footer />
    </main>
  )
}


