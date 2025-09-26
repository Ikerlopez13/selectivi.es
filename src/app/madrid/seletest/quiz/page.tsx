"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import Image from 'next/image'
import { historyES } from '@/lib/seletest/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyES } from '@/lib/seletest/geography'
import { languageES } from '@/lib/seletest/language'
import { englishES } from '@/lib/seletest/english'
import { mathematicsES } from '@/lib/seletest/mathematics'
import { physicsES } from '@/lib/seletest/physics'
import { biologyES } from '@/lib/seletest/biology'
import { chemistryES } from '@/lib/seletest/chemistry'
import { mathematicsCCSS } from '@/lib/seletest/mathematics-ccss'
import type { Question } from '@/lib/seletest/types'
import MathText from '@/components/MathText'

const ALL_SUBJECTS = {
  'historia-espana': historyES,
  'filosofia': philosophyES,
  'economia-empresa': businessES,
  'geografia': geographyES,
  'lengua': languageES,
  'ingles': englishES,
  'matematicas': mathematicsES,
  'fisica': physicsES,
  'biologia': biologyES,
  'quimica': chemistryES,
  'matematicas-ccss': mathematicsCCSS,
} as const

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5) }

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    // Construir pool inmediatamente desde localStorage
    try {
      const raw = localStorage.getItem('seletestPlan')
      if (!raw) return
      const { subjects, numQuestions, mixSubjects } = JSON.parse(raw)
      let pool: Question[] = []
      subjects.forEach((s: { id: keyof typeof ALL_SUBJECTS; topics: string[] }) => {
        const subj = ALL_SUBJECTS[s.id]
        if (!subj) return
        subj.topics.forEach((t) => {
          if (!s.topics.includes(t.id)) return
          pool = pool.concat(t.questions)
        })
      })
      // Fallback: si por cualquier motivo el filtrado por topic dejó vacío, usa todos los topics de los sujetos elegidos
      if (pool.length === 0) {
        subjects.forEach((s: { id: keyof typeof ALL_SUBJECTS; topics: string[] }) => {
          const subj = ALL_SUBJECTS[s.id]
          if (!subj) return
          subj.topics.forEach((t) => { pool = pool.concat(t.questions) })
        })
      }
      // Usar hint de premium de localStorage para carga instantánea
      const isPremiumHint = localStorage.getItem('es_premium') === '1'
      setIsPremium(isPremiumHint)
      // Aplicar límite Standard: 1/4 del total si no es premium
      const maxAllowed = isPremiumHint ? numQuestions : Math.max(1, Math.floor(Math.min(numQuestions, pool.length) / 4))
      if (!mixSubjects) {
        const limited = pool.slice(0, maxAllowed)
        setQuestions(limited)
      } else {
        const mixed = shuffle(pool).slice(0, maxAllowed)
        setQuestions(mixed)
      }
    } catch {}

    // Verificar premium en background con reintentos
    ;(async () => {
      let retryCount = 0;
      const maxRetries = 3;
      const retryDelay = 1000; // 1 segundo entre reintentos

      const checkPremiumStatus = async () => {
        const { data: auth } = await supabase.auth.getUser()
        const userId = auth.user?.id
        let premium = false
        
        if (userId && auth.user?.email) {
          const { data } = await supabase.rpc('check_premium_status', { p_email: auth.user.email })
          premium = !!data
          
          if (!premium && retryCount < maxRetries) {
            retryCount++;
            console.log(`Reintento ${retryCount} de verificación premium...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            return checkPremiumStatus();
          }
        }
        
        setIsPremium(premium)
        try { localStorage.setItem('es_premium', premium ? '1' : '0') } catch {}
      }

      await checkPremiumStatus()
    })()
  }, [])

  const q = questions[idx]
  const total = questions.length

  const next = () => {
    if (q && chosen) {
      const selected = q.options.find(o => o.id === chosen)
      if (selected?.isCorrect) setCorrectCount(c => c + 1)
    }
    if (idx + 1 < total) {
      setIdx((v) => v + 1)
      setChosen(null)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setIdx(0)
    setChosen(null)
    setCorrectCount(0)
    setFinished(false)
  }

  return (
    <main className="min-h-screen flex flex-col pb-24 md:pb-0">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white/80 backdrop-blur z-10 py-2">
            <div className="text-sm text-gray-600">Pregunta {Math.min(idx + 1, total)} de {total}</div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            {finished ? (
              <div className="text-center max-w-[700px] mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF3C4] flex items-center justify-center text-2xl">✨</div>
                <h1 className="text-3xl font-extrabold mb-2">¡Test completado!</h1>
                <p className="text-gray-700">Tu puntuación: {correctCount} de {total}</p>
                <p className="text-gray-600 mb-4">Aciertos: {correctCount} • Fallos: {Math.max(total - correctCount, 0)}</p>
                <div className="inline-block rounded-xl border-2 border-[#FFE08A] bg-[#FFF9E6] px-6 py-4 mb-4">
                  <p className="text-sm text-gray-700 font-semibold mb-1">Nota simulada sobre 14:</p>
                  <p className="text-3xl font-extrabold">{(total ? (correctCount / total) * 14 : 0).toFixed(2)} / 14</p>
                </div>
                <p className="text-gray-600 mb-6">¡Sigue practicando! Con más práctica lo conseguirás 💪</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[720px] mx-auto">
                  <a
                    className="inline-flex items-center justify-center bg-[#25D366] text-white rounded-xl py-3"
                    href={
                      `https://wa.me/?text=` + encodeURIComponent(
                        `Acabo de hacer un test en SeleTest y mi nota simulada es ${(total ? (correctCount/total)*14 : 0).toFixed(2)} / 14 — https://selectivi.es/madrid/seletest`
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compartir por WhatsApp
                  </a>
                  <button onClick={restart} className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Volver a empezar</button>
                  <a href="/madrid/seletest" className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-black rounded-xl py-3">Volver a SeleTest</a>
                </div>
                <div className="mt-8 pt-6 border-t flex items-center justify-center gap-3">
                  <Image src="/images/WhatsApp Image 2025-09-20 at 13.46.52.jpeg" alt="Foto de perfil de Iker" width={56} height={56} className="rounded-full object-cover" />
                  <p className="text-sm text-gray-600">Hecho por <a href="https://instagram.com/ikerlopezttp" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] font-semibold">@ikerlopezttp</a>. Sígueme ❤️</p>
                </div>
              </div>
            ) : !q ? (
              <div className="space-y-5 animate-pulse">
                <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="space-y-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-full h-16 bg-gray-200 rounded-xl"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <h1 className="text-2xl font-extrabold"><MathText text={q.prompt} /></h1>
                <div className="space-y-3">
                  {q.options.map((opt) => {
                    const isSelected = chosen === opt.id
                    const correct = chosen && opt.isCorrect
                    const incorrect = isSelected && !opt.isCorrect
                    let cls = 'w-full text-left border rounded-xl px-4 py-4 hover:bg-gray-50'
                    if (correct) cls = 'w-full text-left border rounded-xl px-4 py-4 bg-green-50 border-green-300'
                    if (incorrect) cls = 'w-full text-left border rounded-xl px-4 py-4 bg-red-50 border-red-300'
                    return (
                      <button key={opt.id} onClick={() => setChosen(opt.id)} className={cls}>
                        <MathText text={opt.label} />
                      </button>
                    )
                  })}
                </div>
                {chosen && (
                  <div className="mt-2 text-sm text-gray-700">
                    <p className="font-semibold mb-1">Explicación</p>
                    <p>{q.explanation}</p>
                  </div>
                )}
                {/* Botón desktop */}
                <div className="pt-4 hidden md:block">
                  <button onClick={next} className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Siguiente pregunta</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Barra fija móvil */}
      {!finished && (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur border-t p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
          <div className="max-w-[1100px] mx-auto px-2">
            <button onClick={next} className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Siguiente</button>
          </div>
        </div>
      )}
      <Footer />
    </main>
  )
}


