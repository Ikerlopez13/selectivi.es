"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import MathText from '@/components/MathText'
import { supabase } from '@/lib/supabase/client'
// Importar preguntas adaptadas al currículo andaluz
import { historyAND } from '@/lib/seletest/prompts/andalucia/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyES } from '@/lib/seletest/geography'
import { languageES } from '@/lib/seletest/language'
import { englishES } from '@/lib/seletest/english'
import { mathematicsAND } from '@/lib/seletest/prompts/andalucia/mathematics'
import { physicsAND } from '@/lib/seletest/prompts/andalucia/physics'
import { biologyAND } from '@/lib/seletest/prompts/andalucia/biology'
import { chemistryAND } from '@/lib/seletest/prompts/andalucia/chemistry'
import { mathematicsCCSS } from '@/lib/seletest/mathematics-ccss'
import type { Question, QuestionWithSubject, Topic } from '@/lib/seletest/types'

const ALL_SUBJECTS = {
  'historia-espana': historyAND,
  'filosofia': philosophyES,
  'economia-empresa': businessES,
  'geografia': geographyES,
  'lengua': languageES,
  'ingles': englishES,
  'matematicas': mathematicsAND,
  'fisica': physicsAND,
  'biologia': biologyAND,
  'quimica': chemistryAND,
  'matematicas-ccss': mathematicsCCSS,
} as const

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5) }

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuestionWithSubject[]>([])
  const [subjectMap, setSubjectMap] = useState<Record<string, string>>({})
  const [idx, setIdx] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [planLoaded, setPlanLoaded] = useState(false)
  const [showGate, setShowGate] = useState(false)

  useEffect(() => {
    // Construir pool inmediatamente desde localStorage
    try {
      const raw = localStorage.getItem('seletestPlan')
      if (!raw) {
        setPlanLoaded(true)
        return
      }
      const { subjects = [], numQuestions, mixSubjects } = JSON.parse(raw)
      const subjectDisplay: Record<string, string> = {}
      let pool: QuestionWithSubject[] = []
      subjects.forEach((s: { id: keyof typeof ALL_SUBJECTS; topics: string[] }) => {
        const subj = ALL_SUBJECTS[s.id]
        if (!subj) return
        subjectDisplay[subj.id] = subj.name
        subj.topics.forEach((t: Topic) => {
          if (!s.topics.includes(t.id)) return
          pool = pool.concat(t.questions.map((q) => ({ ...q, subjectId: subj.id, subjectName: subj.name })))
        })
      })
      // Fallback: si por cualquier motivo el filtrado por topic dejó vacío, usa todos los topics de los sujetos elegidos
      if (pool.length === 0) {
        subjects.forEach((s: { id: keyof typeof ALL_SUBJECTS; topics: string[] }) => {
          const subj = ALL_SUBJECTS[s.id]
          if (!subj) return
          subjectDisplay[subj.id] = subj.name
          subj.topics.forEach((t: Topic) => { pool = pool.concat(t.questions.map((q) => ({ ...q, subjectId: subj.id, subjectName: subj.name }))) })
        })
      }
      // Usar hint de premium de localStorage para carga instantánea
      const isPremiumHint = localStorage.getItem('es_premium') === '1'
      setIsPremium(isPremiumHint)
      setShowGate(!isPremiumHint)

      // Respetar exactamente las preguntas solicitadas (ya limitadas en la pantalla previa)
      const desiredCount = typeof numQuestions === 'number' ? numQuestions : 1
      const cappedCount = Math.max(1, Math.min(desiredCount, pool.length))

      const perSubject = new Map<string, QuestionWithSubject[]>()
      subjects.forEach((s: { id: keyof typeof ALL_SUBJECTS; topics: string[] }) => {
        const subj = ALL_SUBJECTS[s.id]
        if (!subj) return
        const subjectQuestions: QuestionWithSubject[] = []
        subj.topics.forEach((t: Topic) => {
          if (!s.topics.includes(t.id)) return
          subjectQuestions.push(...t.questions.map((q) => ({ ...q, subjectId: subj.id, subjectName: subj.name })))
        })
        if (subjectQuestions.length === 0) {
          subjectQuestions.push(...subj.topics.flatMap((t: Topic) => t.questions.map((q) => ({ ...q, subjectId: subj.id, subjectName: subj.name }))))
        }
        if (subjectQuestions.length > 0) perSubject.set(subj.id, subjectQuestions)
      })

      const selection: QuestionWithSubject[] = []
      if (mixSubjects) {
        const subjectIds = Array.from(perSubject.keys())
        const decks = subjectIds.map((sid) => shuffle(perSubject.get(sid) || []))
        while (selection.length < cappedCount) {
          const nextRound = decks
            .map((deck, index) => ({ deck, index }))
            .filter(({ deck }) => deck.length > 0)
            .map(({ deck }) => deck.shift()!)
          if (nextRound.length === 0) break
          for (const item of nextRound) {
            if (selection.length >= cappedCount) break
            selection.push(item)
          }
        }
      } else {
        const subjectIds = Array.from(perSubject.keys())
        if (subjectIds.length > 0) {
          const target = shuffle(perSubject.get(subjectIds[0]) || [])
          selection.push(...target.slice(0, cappedCount))
        }
      }

      setQuestions(selection.slice(0, cappedCount))
      setSubjectMap(subjectDisplay)
      setPlanLoaded(true)
    } catch {}

    // Verificar premium en background con reintentos
    ;(async () => {
      let retryCount = 0;
      const maxRetries = 3;
      const retryDelay = 1000 // 1 segundo entre reintentos

      const checkPremiumStatus = async () => {
        const { data: auth } = await supabase.auth.getUser()
        const userId = auth.user?.id
        let premium = false
        
        if (userId && auth.user?.email) {
          const { data } = await supabase.rpc('check_premium_status', { p_email: auth.user.email })
          premium = !!data
          
          if (!premium && retryCount < maxRetries) {
            retryCount++
            console.log(`Reintento ${retryCount} de verificación premium...`)
            await new Promise(resolve => setTimeout(resolve, retryDelay))
            return checkPremiumStatus()
          }
        }
        
        setIsPremium(premium)
        if (!premium) setShowGate(true)
        try { localStorage.setItem('es_premium', premium ? '1' : '0') } catch {}
      }

      await checkPremiumStatus()
    })()
  }, [])

  const q = questions[idx] ?? null
  const total = questions.length
  const showEmptyState = planLoaded && total === 0

  const next = () => {
    if (!q) return
    if (chosen) {
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
            {!planLoaded ? (
              <div className="text-center py-20 text-gray-500">Cargando SeleTest…</div>
            ) : showGate && !isPremium ? (
              <div className="text-center py-20 space-y-4">
                <h1 className="text-2xl font-bold">Hazte Premium para seguir</h1>
                <p className="text-gray-600">Las preguntas premium están bloqueadas para el plan estándar.</p>
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="/andalucia/premium"
                    className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-5 py-3"
                  >
                    Ver planes premium
                  </a>
                  <button
                    onClick={() => setShowGate(false)}
                    className="inline-flex items-center justify-center px-5 py-3 border rounded-xl text-gray-700 hover:bg-gray-50"
                  >
                    Seguir con Standard
                  </button>
                </div>
              </div>
            ) : showEmptyState ? (
              <div className="text-center py-20 space-y-4">
                <h1 className="text-2xl font-bold">Configura un plan para empezar</h1>
                <p className="text-gray-600">No encontramos preguntas configuradas. Vuelve a SeleTest y selecciona tus asignaturas.</p>
                <button
                  className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-5 py-3"
                  onClick={() => { window.location.href = '/andalucia/seletest' }}
                >
                  Volver a SeleTest
                </button>
              </div>
            ) : finished ? (
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
                      'https://wa.me/?text=' +
                      encodeURIComponent(
                        `Acabo de hacer un test en SeleTest y mi nota simulada es ${(total ? (correctCount / total) * 14 : 0).toFixed(2)} / 14 — https://selectivi.es/andalucia/seletest`
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compartir por WhatsApp
                  </a>
                  <button onClick={restart} className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Volver a empezar</button>
                  <a
                    href="/andalucia/seletest"
                    className="inline-flex items-center justify-center border rounded-xl py-3 font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Configurar nuevo test
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h1 className="text-2xl font-extrabold"><MathText text={q.prompt} /></h1>
                  <span className="inline-flex items-center gap-2 bg-[#FFF3C4] text-black/80 rounded-full px-3 py-1 text-xs font-medium border border-[#FFE08A]">
                    <span aria-hidden>📚</span>
                    {subjectMap[q.subjectId] || q.subjectName || 'SeleTest'}
                  </span>
                </div>
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
                    <p><MathText text={q.explanation} /></p>
                  </div>
                )}
                {/* Botón desktop */}
                <div className="pt-4 hidden md:flex gap-3">
                  <button onClick={next} className="flex-1 bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">
                    {idx + 1 < total ? 'Siguiente pregunta' : 'Finalizar test'}
                  </button>
                  <a
                    href="/andalucia/seletest"
                    className="inline-flex items-center justify-center px-4 py-3 font-semibold rounded-xl border bg-white text-gray-700 hover:bg-gray-50"
                  >
                    Ver SeleTest
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Barra fija móvil */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur border-t p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="max-w-[1100px] mx-auto px-2 flex gap-2">
          {!finished ? (
            <button onClick={next} className="flex-1 bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">
              {idx + 1 < total ? 'Siguiente' : 'Finalizar'}
            </button>
          ) : (
            <button onClick={restart} className="flex-1 bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">
              Volver a empezar
            </button>
          )}
          <a
            href="/andalucia/seletest"
            className="inline-flex items-center justify-center px-4 py-3 font-semibold rounded-xl border bg-white text-gray-700 hover:bg-gray-50"
          >
            SeleTest
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}