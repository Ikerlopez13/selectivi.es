'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import MathText from '@/components/MathText'
import type { QuestionWithSubject, Subject } from '@/lib/seletest/types'

type SeletestProps = {
  subject: Subject
  isPremium: boolean
  showSubjectBadge?: boolean
}

export default function Seletest({ subject, isPremium, showSubjectBadge = false }: SeletestProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)
  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [showGate, setShowGate] = useState<boolean>(() => !isPremium)

  const topic = useMemo(() => subject.topics.find(t => t.id === selectedTopicId) ?? null, [subject, selectedTopicId])
  const questions = useMemo(() => {
    if (!topic) return []
    return topic.questions
      .filter(q => isPremium || q.tier === 'standard')
      .map((question) => ({ ...question, subjectId: subject.id, subjectName: subject.name } as QuestionWithSubject))
  }, [topic, isPremium, subject.id, subject.name])
  const question = questions[qIndex]

  const selectTopic = (id: string) => {
    setSelectedTopicId(id)
    setQIndex(0)
    setChosen(null)
  }

  const onSelectOption = (id: string) => setChosen(id)
  const next = () => {
    const nextIdx = qIndex + 1
    if (nextIdx < questions.length) {
      setQIndex(nextIdx)
      setChosen(null)
      return
    }
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-10 grid md:grid-cols-[360px,1fr] gap-6">
      <div className="h-[560px] overflow-y-auto pr-1">
        <div className="inline-flex items-center gap-2 bg-[#FFF3C4] rounded-full px-3 py-1 text-sm text-black/70 mb-3">✨ Prueba SeleTest</div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">¿Qué tema de {subject.name} quieres estudiar hoy?</h1>
        <div className="space-y-3">
          {subject.topics.map((t) => (
            <button
              key={t.id}
              onClick={() => selectTopic(t.id)}
              className={`w-full text-left rounded-2xl px-4 py-3 transition ${selectedTopicId === t.id ? 'bg-[#FFE8A6]' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="h-[560px] rounded-2xl border bg-white p-6 flex flex-col">
          {!topic || !question ? (
            <div className="m-auto text-gray-500">Selecciona un tema para empezar</div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm">{qIndex + 1} / {questions.length}</div>
                {showSubjectBadge && (
                  <span className="inline-flex items-center gap-2 bg-[#FFF3C4] text-black/80 rounded-full px-3 py-1 text-xs font-medium border border-[#FFE08A]">
                    <span aria-hidden>📚</span>
                    {subject.name}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold mb-4"><MathText text={question.prompt} /></h2>
              <div className="space-y-3">
                {question.options.map(opt => {
                  const isSelected = chosen === opt.id
                  const correct = chosen && opt.isCorrect
                  const incorrect = isSelected && !opt.isCorrect
                  let cls = 'w-full text-left border rounded-xl px-4 py-3 hover:bg-gray-50'
                  if (correct) cls = 'w-full text-left border rounded-xl px-4 py-3 bg-green-50 border-green-300'
                  if (incorrect) cls = 'w-full text-left border rounded-xl px-4 py-3 bg-red-50 border-red-300'
                  return (
                    <button key={opt.id} onClick={() => onSelectOption(opt.id)} className={cls}>
                      <MathText text={opt.label} />
                    </button>
                  )
                })}
              </div>
              {chosen && (
                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-semibold mb-1">Explicación</p>
                  <p><MathText text={question.explanation} /></p>
                </div>
              )}
              <div className="mt-auto pt-6">
                <button onClick={next} className="w-full bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Siguiente</button>
              </div>
            </>
          )}
        </div>
        {!isPremium && (
          <p className="text-sm text-gray-500 mt-3">Algunas preguntas son premium. Activa premium para verlas todas.</p>
        )}
      </div>

      {showGate && !isPremium && (
        <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 bg-black/40">
          <div className="w-full max-w-[480px] bg-white border border-black/5 shadow-2xl rounded-2xl overflow-hidden">
            <div className="p-4 sm:p-5">
              <div className="flex justify-center mb-3">
                <div className="bg-white rounded-full border shadow-sm p-1.5">
                  <Image src="/images/logoo.svg" alt="SelectiviES" width={32} height={32} />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-4">
                <video src="/images/IMG_0109.mp4" autoPlay muted loop playsInline className="w-full h-40 sm:h-44 md:h-48 object-cover" />
              </div>
              <div className="flex justify-center">
                <div className="inline-flex items-center justify-center bg-[#FFF3C4] text-black/80 rounded-full px-3 py-1 text-xs sm:text-sm mb-3">
                  + de 1000 estudiantes ya son premium
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-2">Desbloquea todo tu potencial</h2>
              <p className="text-center text-gray-600 mb-4">Accede a la experiencia completa de SeleTest y prepárate para bordar la EvAU 2025.</p>

              <ul className="space-y-2.5 mb-4 max-w-[460px] mx-auto text-left">
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Sin anuncios</p><p className="text-sm text-gray-600">Concéntrate en practicar, sin distracciones.</p></div></li>
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Preguntas ilimitadas</p><p className="text-sm text-gray-600">Acceso a todas las preguntas, sin límites.</p></div></li>
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Filtra por subtemas</p><p className="text-sm text-gray-600">Personaliza tu práctica según tus necesidades.</p></div></li>
              </ul>

              <div className="space-y-3 max-w-[460px] mx-auto">
                <a href="/madrid/premium" className="w-full inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-2">Hazte Premium ahora</a>
                <p className="text-center text-sm text-gray-600">Desde 2,99 €/mes o pago único.</p>
                <button onClick={() => setShowGate(false)} className="w-full inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-black rounded-xl py-2">Seguir con el plan estándar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


