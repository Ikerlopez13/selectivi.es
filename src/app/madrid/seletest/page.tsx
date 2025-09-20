"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { historyES } from '@/lib/seletest/history'
import { philosophyES } from '@/lib/seletest/philosophy'
import { businessES } from '@/lib/seletest/business'
import { geographyES } from '@/lib/seletest/geography'
import { languageES } from '@/lib/seletest/language'
import { englishES } from '@/lib/seletest/english'

const ALL_SUBJECTS = {
  'historia-espana': historyES,
  'filosofia': philosophyES,
  'economia-empresa': businessES,
  'geografia': geographyES,
  'lengua': languageES,
  'ingles': englishES,
} as const

const DISPLAY_SUBJECTS: Array<{ label: string; id?: keyof typeof ALL_SUBJECTS }> = [
  { label: 'Matemáticas' },
  { label: 'Física' },
  { label: 'Filosofía', id: 'filosofia' },
  { label: 'Química' },
  { label: 'Biología' },
  { label: 'Matemáticas CCSS' },
  { label: 'Geografía', id: 'geografia' },
  { label: 'Economía de la empresa', id: 'economia-empresa' },
  { label: 'Historia', id: 'historia-espana' },
  { label: 'Lengua', id: 'lengua' },
  { label: 'Inglés', id: 'ingles' },
]

export default function SeletestPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<Record<string, boolean>>({})
  const [openSubject, setOpenSubject] = useState<string | null>(null)
  const [selectedTopics, setSelectedTopics] = useState<Record<string, Record<string, boolean>>>({})
  const [numQuestions, setNumQuestions] = useState(10)
  const [mixSubjects, setMixSubjects] = useState(true)
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const { data: auth } = await supabase.auth.getUser()
      const userId = auth.user?.id
      if (!userId) { if (mounted) setIsPremium(false); return }
      const { data } = await supabase
        .from('usuarios')
        .select('es_premium')
        .eq('user_id', userId)
        .maybeSingle()
      if (mounted) setIsPremium(!!data?.es_premium)
    })()
    return () => { mounted = false }
  }, [])

  const availableCount = useMemo(() => Object.values(selectedSubjects).filter(Boolean).length, [selectedSubjects])

  const maxQuestions = useMemo(() => {
    let total = 0
    Object.keys(selectedSubjects).forEach((sid) => {
      if (!selectedSubjects[sid]) return
      const subj: any = (ALL_SUBJECTS as any)[sid]
      if (!subj) return
      // Los usuarios estándar no filtran por subtemas: cuentan todos los subtemas
      // Los premium pueden filtrar; si el menú NO está abierto para esta asignatura, contamos todos
      if (!isPremium || openSubject !== sid) {
        subj.topics.forEach((t: any) => { total += t.questions.length })
        return
      }
      // Si está abierto, sólo los marcados
      const topicFlags = selectedTopics[sid] || {}
      subj.topics.forEach((t: any) => {
        if (topicFlags[t.id]) total += t.questions.length
      })
    })
    const allowed = isPremium ? total : Math.max(1, Math.floor(total / 4))
    return allowed
  }, [selectedSubjects, selectedTopics, openSubject, isPremium])

  useEffect(() => {
    if (maxQuestions > 0 && numQuestions > maxQuestions) {
      setNumQuestions(maxQuestions)
    }
  }, [maxQuestions])

  const toggleSubject = (id: string) => {
    setSelectedSubjects(prev => {
      const newActive = !prev[id]
      const subj = (ALL_SUBJECTS as any)[id]
      if (newActive) {
        if (subj && !selectedTopics[id]) {
          // Inicialmente no marcar ningún subtema; el usuario elige manualmente
          setSelectedTopics(prevTopics => ({ ...prevTopics, [id]: {} }))
        }
      } else {
        setOpenSubject(curr => (curr === id ? null : curr))
      }
      return { ...prev, [id]: newActive }
    })
  }

  const toggleTopic = (subjectId: string, topicId: string) => {
    setSelectedSubjects(prev => ({ ...prev, [subjectId]: true }))
    setSelectedTopics(prev => ({
      ...prev,
      [subjectId]: { ...(prev[subjectId] || {}), [topicId]: !(prev[subjectId]?.[topicId]) }
    }))
  }

  const startQuiz = () => {
    const subjects: Array<{ id: string; topics: string[] }> = []
    Object.keys(selectedSubjects).forEach((sid) => {
      if (!selectedSubjects[sid]) return
      const subj: any = (ALL_SUBJECTS as any)[sid]
      if (!subj) return
      let topics: string[] = []
      if (openSubject !== sid) {
        // Si no está abierto el desplegable, interpretamos todos los subtemas
        topics = subj.topics.map((t: any) => t.id)
      } else {
        const topicFlags = selectedTopics[sid] || {}
        topics = Object.keys(topicFlags).filter((tid) => topicFlags[tid])
      }
      if (topics.length > 0) subjects.push({ id: sid, topics })
    })
    if (subjects.length === 0) return
    const plan = { subjects, numQuestions, mixSubjects }
    try { localStorage.setItem('seletestPlan', JSON.stringify(plan)) } catch {}
    window.location.href = '/madrid/seletest/quiz'
  }

  return (
    <main className="min-h-screen flex flex-col pb-24 md:pb-0">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-10">
          <div className="bg-white border border-black/5 rounded-2xl shadow-xl p-6 md:p-10">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold">Sele<span className="text-[#FFB800]">Test</span></h1>
              <p className="text-gray-700 mt-3">Configura tu práctica multiasignatura</p>
              <p className="text-gray-500 text-sm">Elige asignaturas, subtemas y cuántas preguntas quieres responder</p>
              <div className="mt-3">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${isPremium ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}>
                  {isPremium ? 'Plan: Premium' : 'Plan: Standard'}
                </span>
              </div>
            </div>

            <h2 className="font-bold mt-6 mb-3">Selecciona las asignaturas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {DISPLAY_SUBJECTS.map(({ label, id }) => {
                const available = !!id
                if (!available) {
                  return (
                    <div key={label} className="px-6 py-4 bg-gray-100 border rounded-2xl text-center text-gray-400 cursor-not-allowed">
                      {label}
                      <div className="text-xs text-gray-500 mt-1">Próximamente</div>
                    </div>
                  )
                }
                const subj = ALL_SUBJECTS[id]
                const active = !!selectedSubjects[id]
                const open = openSubject === id
                return (
                  <div key={label}>
                    <button onClick={() => toggleSubject(id)} className={`w-full px-6 py-4 rounded-2xl border text-center font-medium ${active ? 'bg-[#FFB800] text-black' : 'bg-white hover:bg-gray-50'}`}>{label}</button>
                    {active && isPremium && (
                      <button
                        onClick={() => {
                          const newOpen = open ? null : id
                          setOpenSubject(newOpen)
                          if (newOpen) {
                            // al abrir, deseleccionamos todos por defecto y el usuario marca
                            setSelectedTopics(prev => ({ ...prev, [id]: {} }))
                          }
                        }}
                        className="w-full mt-2 px-4 py-2 rounded-xl border bg-[#FFF9E6] text-[#8B5E00] text-sm"
                      >
                        {open ? '▾' : '▸'} Selecciona subtemas
                      </button>
                    )}
                    {active && isPremium && open && (
                      <div className="mt-3 space-y-2">
                        {subj.topics.map((t) => {
                          const checked = !!selectedTopics[id]?.[t.id]
                          return (
                            <label key={t.id} className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="accent-[#FFB800]" checked={checked} onChange={() => toggleTopic(id, t.id)} />
                              <span>{t.title}</span>
                            </label>
                          )
                        })}
                      </div>
                    )}
                    {active && !isPremium && (
                      <p className="mt-2 text-xs text-gray-500">Con Standard no puedes filtrar por subtemas. <a href="/madrid/premium" className="text-[#FFB800] font-medium">Hazte Premium</a></p>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-medium">Número de preguntas</label>
                <span className="text-sm text-gray-600">{Math.min(numQuestions, Math.max(maxQuestions, 0))} / {Math.max(maxQuestions, 0)}</span>
              </div>
              <input
                type="range"
                min={1}
                max={Math.max(maxQuestions, 1)}
                step={1}
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                disabled={maxQuestions === 0}
                className="w-full accent-[#FFB800] disabled:opacity-50"
              />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-[#FFB800]" checked={mixSubjects} onChange={(e) => setMixSubjects(e.target.checked)} />
                Mezclar preguntas de todas las asignaturas
              </label>
            </div>

            <div className="mt-6 hidden md:block">
              <button onClick={startQuiz} disabled={maxQuestions === 0} className={`w-full rounded-xl py-3 font-semibold ${maxQuestions === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FFB800] hover:bg-[#ffc835] text-black'}`}>Comenzar</button>
              {maxQuestions === 0 && (
                <p className="text-center text-red-500 text-sm mt-3">Selecciona asignaturas y subtemas para continuar</p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA fijo móvil */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur border-t p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="max-w-[900px] mx-auto px-2">
          <button onClick={startQuiz} disabled={maxQuestions === 0} className={`w-full rounded-xl py-3 font-semibold ${maxQuestions === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FFB800] hover:bg-[#ffc835] text-black'}`}>Comenzar</button>
        </div>
      </div>
      <Footer />
    </main>
  )
}


