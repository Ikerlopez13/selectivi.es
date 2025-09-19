import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { historyES } from '@/lib/seletest/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import Seletest from '@/components/Seletest'
import { cookies } from 'next/headers'

const SUBJECTS = {
  'historia-espana': historyES,
  'filosofia': philosophyES,
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


