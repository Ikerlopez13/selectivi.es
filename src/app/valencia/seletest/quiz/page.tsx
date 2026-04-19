"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import MathText from '@/components/MathText'
import { supabase } from '@/lib/supabase/client'

interface Question {
  id: number;
  tema_id: number;
  pregunta: string;
  opcion_a: string;
  opcion_b: string;
  opcion_c: string;
  opcion_d: string;
  correcta: string;
  explicacion: string;
  tier: string;
  subject_name?: string;
  subject_id?: string;
}

export default function ValenciaQuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [planLoaded, setPlanLoaded] = useState(false)
  const [showGate, setShowGate] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      // 1. Initial status check
      const isPremiumHint = localStorage.getItem('es_premium') === '1'
      setIsPremium(isPremiumHint)
      setShowGate(!isPremiumHint)

      const raw = localStorage.getItem('seletestPlan')
      if (!raw) {
        setPlanLoaded(true)
        setLoading(false)
        return
      }

      const { subjects = [], numQuestions } = JSON.parse(raw)
      
      // 2. Real-time premium check
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user?.email) {
        const { data: isPremiumRes } = await supabase.rpc('check_premium_status', { p_email: session.user.email })
        if (mounted) {
          const premium = !!isPremiumRes
          setIsPremium(premium)
          setShowGate(!premium)
        }
      }

      // 3. Fetch Questions from DB
      let allFetchedQuestions: Question[] = []

      for (const s of subjects) {
        const { data: qData } = await supabase
          .from('preguntas')
          .select(`
            *,
            temas!inner (
              titulo,
              slug,
              asignaturas (
                id,
                nombre
              )
            )
          `)
          .in('temas.slug', s.topics)
          .eq('temas.asignatura_id', s.id)
        
        if (qData) {
          const mapped = qData.map((q: any) => ({
            ...q,
            subject_name: q.temas.asignaturas.nombre,
            subject_id: q.temas.asignaturas.id
          }))
          allFetchedQuestions = [...allFetchedQuestions, ...mapped]
        }
      }

      // Filter by tier if not premium
      if (!isPremiumHint) {
        allFetchedQuestions = allFetchedQuestions.filter(q => q.tier === 'standard')
      }

      // Shuffle and Limit
      allFetchedQuestions.sort(() => Math.random() - 0.5)
      const finalSelection = allFetchedQuestions.slice(0, numQuestions)

      if (mounted) {
        setQuestions(finalSelection)
        setPlanLoaded(true)
        setLoading(false)
      }
    })()
    
    return () => { mounted = false }
  }, [])

  const q = questions[idx] ?? null
  const total = questions.length
  const showEmptyState = planLoaded && total === 0

  const next = () => {
    if (!q) return
    if (chosen) {
      if (chosen === q.correcta) setCorrectCount(c => c + 1)
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center animate-pulse">
          <h1 className="text-4xl font-extrabold mb-4">Sele<span className="text-[#FF9500]">Test</span></h1>
          <p className="text-gray-500">Cargando preguntas valencianas...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen flex flex-col pb-24 md:pb-0">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white/80 backdrop-blur z-10 py-2">
            <div className="text-sm text-gray-600">Pregunta {Math.min(idx + 1, total)} de {total} (PAU València)</div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-xl">
            {showGate && !isPremium ? (
              <div className="text-center py-20 space-y-4">
                <h1 className="text-2xl font-bold text-black">Hazte Premium para seguir</h1>
                <p className="text-gray-600">Las preguntas premium están bloqueadas para el plan estándar.</p>
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="/valencia/premium"
                    className="inline-flex items-center justify-center bg-[#FF9500] hover:bg-[#ffae33] text-white font-semibold rounded-xl px-5 py-3 shadow-lg"
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
              <div className="text-center py-20 space-y-4 text-black">
                <h1 className="text-2xl font-bold">Configura un plan para empezar</h1>
                <p className="text-gray-600">No encontramos preguntas configuradas para Valencia. Vuelve a SeleTest y selecciona tus asignaturas.</p>
                <button
                  className="inline-flex items-center justify-center bg-[#FF9500] hover:bg-[#ffae33] text-white font-semibold rounded-xl px-5 py-3"
                  onClick={() => { window.location.href = '/valencia/seletest' }}
                >
                  Volver a SeleTest València
                </button>
              </div>
            ) : finished ? (
              <div className="text-center max-w-[700px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 text-black">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFF3C4] flex items-center justify-center text-4xl shadow-inner">🍊</div>
                <h1 className="text-3xl font-extrabold mb-2">¡Desafío Valencià completado!</h1>
                <p className="text-gray-700 text-lg">Tu puntuación: <span className="font-bold text-[#FF9500]">{correctCount}</span> de {total}</p>
                <div className="flex gap-4 justify-center my-6">
                   <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-100 font-bold">Aciertos: {correctCount}</div>
                   <div className="bg-red-50 text-red-700 px-4 py-2 rounded-xl border border-red-100 font-bold">Fallos: {total - correctCount}</div>
                </div>
                <div className="inline-block rounded-2xl border-2 border-[#FFE08A] bg-[#FFF9E6] px-10 py-6 mb-8 shadow-sm">
                  <p className="text-sm text-gray-700 font-semibold mb-1 uppercase tracking-wider">Nota simulada</p>
                  <p className="text-5xl font-black text-black">{(total ? (correctCount / total) * 14 : 0).toFixed(2)} <span className="text-2xl opacity-40">/ 14</span></p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[600px] mx-auto">
                  <button onClick={restart} className="bg-[#FF9500] hover:bg-[#ffae33] text-white font-extrabold rounded-2xl py-4 shadow-lg transition-transform active:scale-95">Repetir Test</button>
                  <a
                    href="/valencia/seletest"
                    className="inline-flex items-center justify-center border-2 border-gray-100 rounded-2xl py-4 font-bold text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Nueva Configuración
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-50 pb-4">
                  <div className="flex-1">
                    <span className="text-[#FF9500] font-black tracking-tighter text-xl mb-1 block">PREGUNTA</span>
                    <h1 className="text-2xl font-bold leading-tight text-gray-900"><MathText text={q.pregunta} /></h1>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-[#FFF9E6] text-[#8B5E00] rounded-xl px-4 py-2 text-sm font-bold border border-[#FF9500]/20 self-start sm:self-center shrink-0">
                    {q.subject_name || 'SeleTest València'}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {['a', 'b', 'c', 'd'].map((key) => {
                    const label = (q as any)[`opcion_${key}`]
                    if (!label) return null
                    
                    const isSelected = chosen === key
                    const isCorrect = q.correcta === key && chosen
                    const isWrong = isSelected && q.correcta !== key
                    
                    let baseCls = "w-full text-left border-2 rounded-2xl p-5 font-medium transition-all duration-200 flex items-center justify-between group "
                    if (!chosen) baseCls += "border-gray-100 hover:border-[#FF9500] hover:bg-[#FFFDF5] cursor-pointer text-black"
                    else if (isCorrect) baseCls += "border-green-500 bg-green-50 text-green-900"
                    else if (isWrong) baseCls += "border-red-500 bg-red-50 text-red-900"
                    else if (q.correcta === key && chosen) baseCls += "border-green-200 bg-green-50/50 text-green-700"
                    else baseCls += "border-gray-50 opacity-40 grayscale text-black"

                    return (
                      <button 
                        key={key} 
                        disabled={!!chosen}
                        onClick={() => setChosen(key)} 
                        className={baseCls}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold uppercase transition-colors ${isSelected ? 'bg-current text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#FF9500]/20 group-hover:text-[#8B5E00]'}`}>
                            {key}
                          </span>
                          <MathText text={label} />
                        </div>
                        {isCorrect && <span className="text-xl">✅</span>}
                        {isWrong && <span className="text-xl">❌</span>}
                      </button>
                    )
                  })}
                </div>

                {chosen && (
                  <div className="mt-8 bg-orange-50/50 border border-orange-100 rounded-2xl p-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 text-[#8B5E00] font-bold mb-2">
                       <span className="text-xl">💡</span> EXPLICACIÓN
                    </div>
                    <div className="text-gray-800 leading-relaxed text-lg">
                       <MathText text={q.explicacion} />
                    </div>
                  </div>
                )}
                
                <div className="pt-6 hidden md:flex gap-4">
                  <button 
                    onClick={next} 
                    disabled={!chosen}
                    className={`flex-1 rounded-2xl py-4 font-black tracking-wide shadow-xl transition-all active:scale-[0.98] ${!chosen ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FF9500] hover:bg-[#ffae33] text-white shadow-[#FF9500]/20'}`}
                  >
                    {idx + 1 < total ? 'SIGUIENTE PREGUNTA' : 'VER RESULTADOS'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="md:hidden fixed inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur-md border-t p-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="max-w-[1100px] mx-auto flex gap-3">
          {!finished ? (
            <button 
              onClick={next} 
              disabled={!chosen && questions.length > 0}
              className={`flex-1 rounded-2xl py-4 font-extrabold shadow-lg transition-all active:scale-[0.95] ${!chosen && questions.length > 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#FF9500] hover:bg-[#ffae33] text-white shadow-[#FF9500]/20'}`}
            >
              {idx + 1 < total ? 'Siguiente' : 'Finalizar'}
            </button>
          ) : (
            <button onClick={restart} className="flex-1 bg-[#FF9500] hover:bg-[#ffae33] text-white font-extrabold rounded-2xl py-4">
              Repetir Test
            </button>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
