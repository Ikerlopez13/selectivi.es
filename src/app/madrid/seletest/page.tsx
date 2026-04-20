"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import SideAdBanner from '@/components/SideAdBanner'

interface DBSubject {
  id: string;
  nombre: string;
  comunidad: string;
}

interface DBTopic {
  id: number;
  asignatura_id: string;
  slug: string;
  titulo: string;
  _count_questions?: number;
}

export default function SeletestPage() {
  const [subjects, setSubjects] = useState<DBSubject[]>([])
  const [topics, setTopics] = useState<Record<string, DBTopic[]>>({})
  const [selectedSubjects, setSelectedSubjects] = useState<Record<string, boolean>>({})
  const [openSubject, setOpenSubject] = useState<string | null>(null)
  const [selectedTopics, setSelectedTopics] = useState<Record<string, Record<string, boolean>>>({})
  const [numQuestions, setNumQuestions] = useState(10)
  const [mixSubjects, setMixSubjects] = useState(true)
  const [isPremium, setIsPremium] = useState(false)
  const [showGate, setShowGate] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error || !session?.user) {
        window.location.href = '/madrid/login?next=/madrid/seletest'
        return
      }

      // Check premium status
      const email = session.user.email
      if (email) {
        const { data: isPremiumRes } = await supabase.rpc('check_premium_status', { p_email: email })
        if (mounted) {
          const premium = !!isPremiumRes
          setIsPremium(premium)
          setShowGate(!premium)
          try { localStorage.setItem('es_premium', premium ? '1' : '0') } catch {}
        }
      }

      // Fetch dynamic content from DB
      const { data: subjData } = await supabase.from('asignaturas').select('*').eq('comunidad', 'Madrid').order('nombre')
      if (mounted && subjData) {
        setSubjects(subjData)
        
        // Fetch all topics and their question counts
        const { data: topicsData } = await supabase.from('temas').select(`
          *,
          preguntas (count)
        `)
        
        if (topicsData) {
          const grouped: Record<string, DBTopic[]> = {}
          topicsData.forEach((t: any) => {
            if (!grouped[t.asignatura_id]) grouped[t.asignatura_id] = []
            grouped[t.asignatura_id].push({
              ...t,
              _count_questions: t.preguntas?.[0]?.count || 0
            })
          })
          setTopics(grouped)
        }
      }
      if (mounted) setLoading(false)
    })()
    return () => { mounted = false }
  }, [])

  const maxQuestions = useMemo(() => {
    let total = 0
    Object.keys(selectedSubjects).forEach((sid) => {
      if (!selectedSubjects[sid]) return
      const subjTopics = topics[sid] || []
      
      if (!isPremium || openSubject !== sid) {
        subjTopics.forEach(t => { total += t._count_questions || 0 })
        return
      }
      
      const topicFlags = selectedTopics[sid] || {}
      subjTopics.forEach(t => {
        if (topicFlags[t.slug]) total += t._count_questions || 0
      })
    })
    
    const allowed = isPremium ? total : (total > 0 ? Math.max(1, Math.floor(total / 4)) : 0)
    return allowed
  }, [selectedSubjects, selectedTopics, openSubject, isPremium, topics])

  useEffect(() => {
    if (maxQuestions > 0 && numQuestions > maxQuestions) {
      setNumQuestions(maxQuestions)
    }
  }, [maxQuestions, numQuestions])

  const toggleSubject = (id: string) => {
    setSelectedSubjects(prev => {
      const newActive = !prev[id]
      if (newActive && !selectedTopics[id]) {
        setSelectedTopics(prevTopics => ({ ...prevTopics, [id]: {} }))
      } else if (!newActive) {
        setOpenSubject(curr => (curr === id ? null : curr))
      }
      return { ...prev, [id]: newActive }
    })
  }

  const toggleTopic = (subjectId: string, topicSlug: string) => {
    setSelectedSubjects(prev => ({ ...prev, [subjectId]: true }))
    setSelectedTopics(prev => ({
      ...prev,
      [subjectId]: { ...(prev[subjectId] || {}), [topicSlug]: !(prev[subjectId]?.[topicSlug]) }
    }))
  }

  const startQuiz = () => {
    const quizSubjects: Array<{ id: string; topics: string[] }> = []
    Object.keys(selectedSubjects).forEach((sid) => {
      if (!selectedSubjects[sid]) return
      const subjTopics = topics[sid] || []
      let selectedTopicSlugs: string[] = []
      
      if (!isPremium || openSubject !== sid) {
        selectedTopicSlugs = subjTopics.map(t => t.slug)
      } else {
        const topicFlags = selectedTopics[sid] || {}
        selectedTopicSlugs = Object.keys(topicFlags).filter(slug => topicFlags[slug])
      }
      
      if (selectedTopicSlugs.length > 0) {
        quizSubjects.push({ id: sid, topics: selectedTopicSlugs })
      }
    })
    
    if (quizSubjects.length === 0) {
      alert('Selecciona al menos una asignatura con temas disponibles')
      return
    }
    
    const plan = { subjects: quizSubjects, numQuestions, mixSubjects }
    try { localStorage.setItem('seletestPlan', JSON.stringify(plan)) } catch {}
    window.location.href = '/madrid/seletest/quiz'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center animate-pulse">
          <h1 className="text-4xl font-extrabold mb-4">Sele<span className="text-[#FFB800]">Test</span></h1>
          <p className="text-gray-500">Cargando contenidos...</p>
        </div>
      </div>
    )
  }

  return (
    <main className={`min-h-screen flex flex-col pb-24 md:pb-0 transition-colors duration-500 ${!isPremium && !loading ? 'bg-[#FFF9E6]' : 'bg-white'}`}>
      <Navbar />
      <section className="flex-1">
        <div className="flex justify-center items-start gap-12 px-2 md:px-6 py-10 max-w-[1400px] mx-auto relative">
          {!isPremium && <SideAdBanner className="hidden xl:block mt-10" />}
          
          <div className="w-full max-w-[900px] bg-white border border-black/5 rounded-3xl shadow-2xl p-6 md:p-10 relative z-10">
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
              {subjects.map((subj) => {
                const id = subj.id
                const active = !!selectedSubjects[id]
                const open = openSubject === id
                const subjTopics = topics[id] || []
                
                return (
                  <div key={id}>
                    <button 
                      onClick={() => toggleSubject(id)} 
                      className={`w-full px-6 py-4 rounded-2xl border text-center font-medium transition-all ${active ? 'bg-[#FFB800] border-[#FFB800] text-black shadow-lg scale-[1.02]' : 'bg-white hover:bg-gray-50 border-gray-200'}`}
                    >
                      {subj.nombre}
                    </button>
                    
                    {active && isPremium && (
                      <button
                        onClick={() => setOpenSubject(open ? null : id)}
                        className="w-full mt-2 px-4 py-2 rounded-xl border bg-[#FFF9E6] text-[#8B5E00] text-sm hover:bg-[#FFF3C4] transition-colors"
                      >
                        {open ? '▾ Ocultar subtemas' : '▸ Filtrar por subtemas'}
                      </button>
                    )}
                    
                    {active && isPremium && open && (
                      <div className="mt-3 space-y-2 p-3 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        {subjTopics.map((t) => {
                          const checked = !!selectedTopics[id]?.[t.slug]
                          return (
                            <label key={t.slug} className="flex items-center gap-2 text-sm cursor-pointer hover:text-black transition-colors">
                              <input 
                                type="checkbox" 
                                className="w-4 h-4 accent-[#FFB800] rounded" 
                                checked={checked} 
                                onChange={() => toggleTopic(id, t.slug)} 
                              />
                              <span className={checked ? 'font-medium' : 'text-gray-600'}>
                                {t.titulo} <span className="text-[10px] opacity-60">({t._count_questions})</span>
                              </span>
                            </label>
                          )
                        })}
                        {subjTopics.length === 0 && <p className="text-xs text-gray-400 italic">Cargando temas...</p>}
                      </div>
                    )}
                    
                    {active && !isPremium && (
                      <p className="mt-2 text-xs text-gray-500">Con Standard no puedes filtrar. <a href="/madrid/premium" className="text-[#FFB800] font-medium hover:underline">Hazte Premium</a></p>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-medium">Número de preguntas</label>
                <div className="bg-[#FFF9E6] px-3 py-1 rounded-full text-sm font-bold border border-[#FFB800]/20">
                  {Math.min(numQuestions, Math.max(maxQuestions, 0))} / {Math.max(maxQuestions, 0)}
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={Math.max(maxQuestions, 1)}
                step={1}
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                disabled={maxQuestions === 0}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FFB800] disabled:opacity-30"
              />
              <label className="flex items-center gap-3 text-sm cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-[#FFB800] rounded" 
                  checked={mixSubjects} 
                  onChange={(e) => setMixSubjects(e.target.checked)} 
                />
                <span>Mezclar preguntas de todas las asignaturas</span>
              </label>
            </div>

            <div className="mt-8 hidden md:block">
              <button 
                onClick={startQuiz} 
                disabled={maxQuestions === 0} 
                className={`w-full rounded-2xl py-4 font-bold text-lg shadow-xl shadow-[#FFB800]/10 transition-all active:scale-[0.98] ${maxQuestions === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FFB800] hover:bg-[#ffc835] text-black'}`}
              >
                Comenzar Práctica
              </button>
              {maxQuestions === 0 && (
                <p className="text-center text-gray-400 text-sm mt-4 animate-bounce">Selecciona una asignatura para empezar 👆</p>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA fijo móvil */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur-md border-t p-4 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[900px] mx-auto px-2">
          <button 
            onClick={startQuiz} 
            disabled={maxQuestions === 0} 
            className={`w-full rounded-2xl py-4 font-bold text-lg transition-all active:scale-[0.95] ${maxQuestions === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FFB800] hover:bg-[#ffc835] text-black shadow-lg'}`}
          >
            Comenzar
          </button>
        </div>
      </div>
      
      <Footer />
      
      {showGate && !isPremium && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-[500px] bg-white rounded-3xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#FFB800]/10 rounded-2xl flex items-center justify-center">
                  <Image src="/images/logoo.svg" alt="SelectiviES" width={42} height={42} />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">Pásate a Premium 🚀</h2>
              <p className="text-center text-gray-500 mb-8 px-4">Desbloquea el 100% de las preguntas y los filtros expertos.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-[#FFB800] rounded-xl flex items-center justify-center text-white shrink-0">✨</div>
                  <div>
                    <p className="font-bold">Preguntas Ilimitadas</p>
                    <p className="text-sm text-gray-500">Acceso total a nuestra base de datos Pro.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shrink-0">🎯</div>
                  <div>
                    <p className="font-bold">Filtro por Subtemas</p>
                    <p className="text-sm text-gray-500">Practica específicamente lo que te cuesta.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="/madrid/premium" className="w-full flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-bold rounded-2xl py-4 shadow-xl shadow-[#FFB800]/20 transition-all active:scale-[0.98]">
                  Desbloquear con Premium
                </a>
                <button onClick={() => setShowGate(false)} className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-2xl py-4 transition-all">
                  Continuar con Standard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}


