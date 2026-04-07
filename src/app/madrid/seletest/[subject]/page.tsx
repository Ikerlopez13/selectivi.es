import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { historyES } from '@/lib/seletest/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyES } from '@/lib/seletest/geography'
import { languageES } from '@/lib/seletest/language'
import { englishES } from '@/lib/seletest/english'
import { biologyES } from '@/lib/seletest/biology'
import { chemistryES } from '@/lib/seletest/chemistry'
import { physicsES } from '@/lib/seletest/physics'
import { mathematicsES } from '@/lib/seletest/mathematics'
import { mathematicsCCSSES } from '@/lib/seletest/mathematics-ccss'
import { economyES } from '@/lib/seletest/economy'
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
  'mathematics-ccss': 'Matemáticas Aplicadas a las CCSS',
  'economy': 'Economía',
}

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const name = SUBJECT_NAMES[params.subject] || 'Asignatura'
  return {
    title: `Exámenes Resueltos ${name} Selectividad Madrid 2026 | SeleTest`,
    description: `Practica con exámenes resueltos de ${name} para la Selectividad (PAU) 2026 en Madrid. Simulador interactivo con preguntas oficiales corregidas y explicadas paso a paso.`,
    keywords: [
      `selectividad madrid 2026 ${params.subject}`,
      `pau madrid 2026 ${name}`,
      `exámenes resueltos ${name} madrid`,
      `preguntas corregidas ${name} selectividad`,
      `modelo cero ${name} madrid 2026`
    ],
    openGraph: {
      title: `Exámenes Resueltos ${name} Selectividad Madrid 2026`,
      description: `Prepárate para la PAU 2026 con nuestro simulador de ${name} en Madrid.`,
      type: 'website',
    },
    alternates: {
      canonical: `/madrid/seletest/${params.subject}`,
    }
  }
}

const SUBJECTS = {
  'historia-espana': historyES,
  'filosofia': philosophyES,
  'economia-empresa': businessES,
  'geografia': geographyES,
  'lengua': languageES,
  'ingles': englishES,
  'biology': biologyES,
  'chemistry': chemistryES,
  'physics': physicsES,
  'mathematics': mathematicsES,
  'mathematics-ccss': mathematicsCCSSES,
  'economy': economyES,
}

export default function SubjectPage({ params, searchParams }: { params: { subject: string }, searchParams: { premium?: string } }) {
  const subject = SUBJECTS[params.subject as keyof typeof SUBJECTS]
  const isPremium = searchParams.premium === '1'
  // Si viene autoCommunity=madrid, persistimos cookie comunitaria (para futuras vistas)
  if (typeof searchParams !== 'undefined' && (searchParams as any).autoCommunity === 'madrid') {
    try {
      cookies().set('community', 'madrid', { path: '/', httpOnly: false })
    } catch {}
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <nav className="text-xs mb-4 text-gray-500" aria-label="Breadcrumb">
             <a href="/" className="hover:underline">Inicio</a> / <a href="/madrid" className="hover:underline">Madrid</a> / <a href="/madrid/seletest" className="hover:underline">SeleTest</a> / <span className="font-semibold">{SUBJECT_NAMES[params.subject] || 'Asignatura'}</span>
          </nav>
          <a
            href="/madrid/seletest"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <span className="inline-block -ml-1 h-5 w-5 rotate-180 select-none">➜</span>
            Volver a SeleTest
          </a>
        </div>
        <div className="max-w-[1100px] mx-auto px-6 mb-8">
           <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
             Exámenes Resueltos de {SUBJECT_NAMES[params.subject] || 'Asignatura'} - Selectividad Madrid 2026
           </h1>
           <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
             Practica para la PAU 2026 con nuestro simulador de {SUBJECT_NAMES[params.subject] || 'esta asignatura'}. 
             Todas las preguntas están actualizadas al nuevo modelo competencial de la Comunidad de Madrid y cuentan con corrección detallada.
           </p>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": `Preparación Selectividad 2026: ${SUBJECT_NAMES[params.subject] || 'Asignatura'} Madrid`,
              "description": `Simulador interactivo con exámenes resueltos de ${SUBJECT_NAMES[params.subject] || 'la asignatura'} para la PAU de Madrid.`,
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


