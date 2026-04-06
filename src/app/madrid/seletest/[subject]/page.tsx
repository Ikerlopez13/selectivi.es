import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { historyES } from '@/lib/seletest/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyES } from '@/lib/seletest/geography'
import { languageES } from '@/lib/seletest/language'
import { englishES } from '@/lib/seletest/english'
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
}

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const name = SUBJECT_NAMES[params.subject] || 'Asignatura'
  return {
    title: `Preguntas ${name} Selectividad Madrid 2025 | Exámenes Resueltos`,
    description: `Practica con miles de preguntas de ${name} para la Selectividad (EBAU) de Madrid. Exámenes corregidos, temario actualizado y resolución paso a paso.`,
    keywords: [`selectividad madrid ${params.subject}`, `preguntas ${name} madrid`, `ebau madrid ${name}`, `examenes resueltos ${name} madrid`]
  }
}

const SUBJECTS = {
  'historia-espana': historyES,
  'filosofia': philosophyES,
  'economia-empresa': businessES,
  'geografia': geographyES,
  'lengua': languageES,
  'ingles': englishES,
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
        <div className="max-w-[1100px] mx-auto px-6 mb-2">
           <h1 className="text-3xl font-black text-gray-900 mb-2">
             Preguntas de {SUBJECT_NAMES[params.subject] || 'Asignatura'} - Selectividad Madrid
           </h1>
           <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">
             Prepara tu examen de 2025 con nuestro simulador de {SUBJECT_NAMES[params.subject] || 'esta asignatura'}. 
             Todas las preguntas han sido redactadas por expertos bajo el currículo de la Comunidad de Madrid.
           </p>
        </div>
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


