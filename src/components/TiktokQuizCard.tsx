'use client'

import React, { useState } from 'react'
import { QuestionOption, QuestionWithSubject } from '@/lib/seletest/types'
import MathText from './MathText'
import { ArrowUp } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { incrementQuestionsCount, hasReachedLimit, shouldPromptPremium } from '@/utils/limits'
import Image from 'next/image'

interface TiktokQuizCardProps {
  question: QuestionWithSubject
}

export default function TiktokQuizCard({ question }: TiktokQuizCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [showGate, setShowGate] = useState(false)
  const { isPremium } = useAuth()

  const handleOptionClick = (option: QuestionOption) => {
    if (selectedOptionId) return // Already answered
    
    if (!isPremium) {
      if (hasReachedLimit()) {
        setShowGate(true)
        return
      }
      
      incrementQuestionsCount()
      
      if (shouldPromptPremium()) {
        setShowGate(true)
      }
    }
    
    setSelectedOptionId(option.id)
  }

  const isAnswered = selectedOptionId !== null

  return (
    <div className="w-full h-[100dvh] snap-start flex flex-col items-center justify-center p-4 relative bg-gray-50">
      
      <div className="w-full max-w-md bg-white border rounded-2xl p-6 flex flex-col relative">
        
        {/* Subject Tag */}
        <div className="flex justify-between mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF3C4] text-black/80 rounded-full px-3 py-1 text-xs font-medium border border-[#FFE08A]">
            <span aria-hidden>📚</span>
            {question.subjectName}
          </span>
        </div>

        {/* Question Prompt */}
        <h2 className="text-xl font-bold mb-4">
          <MathText text={question.prompt} />
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id
            const showCorrect = isAnswered && option.isCorrect
            const showIncorrect = isSelected && !option.isCorrect

            let buttonClass = "w-full text-left border rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors"
            
            if (showCorrect) {
              buttonClass = "w-full text-left border rounded-xl px-4 py-3 bg-green-50 border-green-300"
            } else if (showIncorrect) {
              buttonClass = "w-full text-left border rounded-xl px-4 py-3 bg-red-50 border-red-300"
            } else if (isAnswered) {
              buttonClass += " opacity-60"
            }

            return (
              <button
                key={option.id}
                className={buttonClass}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
              >
                <MathText text={option.label} />
              </button>
            )
          })}
        </div>

        {/* Explanation (Revealed after answering) */}
        {isAnswered && (
          <div className="mt-4 text-sm text-gray-700 animate-[fadeIn_0.5s_ease-out]">
            <p className="font-semibold mb-1">Explicación</p>
            <p><MathText text={question.explanation} /></p>
          </div>
        )}
      </div>

      {/* Swipe Up Hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 transition-opacity duration-1000 ${isAnswered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ArrowUp className="w-5 h-5 animate-bounce" />
        <span className="text-xs font-medium uppercase tracking-wider">Desliza hacia arriba</span>
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
              <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-2 text-black">
                {hasReachedLimit() ? "Has alcanzado el límite diario" : "Desbloquea todo tu potencial"}
              </h2>
              <p className="text-center text-gray-600 mb-4">
                {hasReachedLimit() 
                  ? "Has respondido 30 preguntas hoy. Hazte premium para seguir practicando sin límites." 
                  : "Accede a la experiencia completa de SeleTest y prepárate para bordar la EvAU 2025."}
              </p>

              <ul className="space-y-2.5 mb-4 max-w-[460px] mx-auto text-left text-black">
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Sin anuncios</p><p className="text-sm text-gray-600">Concéntrate en practicar, sin distracciones.</p></div></li>
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Preguntas ilimitadas</p><p className="text-sm text-gray-600">Acceso a todas las preguntas, sin límites.</p></div></li>
                <li className="flex items-start gap-3"><span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span><div><p className="font-medium">Filtra por subtemas</p><p className="text-sm text-gray-600">Personaliza tu práctica según tus necesidades.</p></div></li>
              </ul>

              <div className="space-y-3 max-w-[460px] mx-auto">
                <a href="/madrid/premium" className="w-full inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-2">Hazte Premium ahora</a>
                <p className="text-center text-sm text-gray-600">Pago único, sin suscripciones.</p>
                {!hasReachedLimit() ? (
                  <button onClick={() => setShowGate(false)} className="w-full inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-black rounded-xl py-2">Seguir con el plan estándar</button>
                ) : (
                  <p className="text-center text-red-500 font-semibold text-sm">Vuelve mañana o hazte premium para continuar.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

