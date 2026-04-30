'use client'

import React, { useState } from 'react'
import { QuestionOption, QuestionWithSubject } from '@/lib/seletest/types'
import MathText from './MathText'
import { ArrowUp } from 'lucide-react'

interface TiktokQuizCardProps {
  question: QuestionWithSubject
}

export default function TiktokQuizCard({ question }: TiktokQuizCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)

  const handleOptionClick = (option: QuestionOption) => {
    if (selectedOptionId) return // Already answered
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

