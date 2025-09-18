'use client'

import { useMemo, useState } from 'react'
import type { Subject } from '@/lib/seletest/types'

export default function Seletest({ subject, isPremium }: { subject: Subject; isPremium: boolean }) {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)
  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)

  const topic = useMemo(() => subject.topics.find(t => t.id === selectedTopicId) ?? null, [subject, selectedTopicId])
  const questions = useMemo(() => {
    if (!topic) return []
    return topic.questions.filter(q => isPremium || q.tier === 'standard')
  }, [topic, isPremium])
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
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm">{qIndex + 1} / {questions.length}</div>
              </div>
              <h2 className="text-xl font-bold mb-4">{question.prompt}</h2>
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
                      {opt.label}
                    </button>
                  )
                })}
              </div>
              {chosen && (
                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-semibold mb-1">Explicación</p>
                  <p>{question.explanation}</p>
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
    </div>
  )
}


