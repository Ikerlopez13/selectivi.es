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
          <a
            href="/madrid/seletest"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <span className="inline-block -ml-1 h-5 w-5 rotate-180 select-none">➜</span>
            Volver a SeleTest
          </a>
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


