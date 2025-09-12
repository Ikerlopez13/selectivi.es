'use client'

import { useState } from 'react'

type Question = {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: 1,
    subject: 'Historia',
    question: '¿Cómo evolucionó la relación del régimen franquista con la Alemania nazi y la Italia fascista?',
    options: [
      'Pasó de la identificación ideológica y el apoyo militar al aislamiento internacional',
      'Mantuvo una relación neutral durante toda la Segunda Guerra Mundial',
      'Rompió relaciones desde el principio del régimen',
      'Aumentó la colaboración después de la Segunda Guerra Mundial'
    ],
    correctAnswer: 'Pasó de la identificación ideológica y el apoyo militar al aislamiento internacional',
    explanation: 'El régimen franquista se identificó ideológicamente con la Alemania nazi y la Italia fascista, dando apoyo militar a través de la División Azul, pero después de su derrota en la Segunda Guerra Mundial, España quedó aislada internacionalmente.'
  })

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowExplanation(true)
  }

  const handleNext = () => {
    // Aquí iría la lógica para cargar la siguiente pregunta
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Pregunta 1 de 3</h3>
            <span className="text-gray-600">Puntuación: 0 / 3</span>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              {currentQuestion.subject}
            </div>

            <h4 className="text-xl font-medium">
              {currentQuestion.question}
            </h4>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option
                const isCorrect = option === currentQuestion.correctAnswer
                let optionClass = "w-full p-4 rounded-lg border text-left hover:border-[#FFB800] transition-colors"
                
                if (showExplanation) {
                  if (isCorrect) {
                    optionClass += " border-green-500 bg-green-50"
                  } else if (isSelected && !isCorrect) {
                    optionClass += " border-red-500 bg-red-50"
                  }
                } else if (isSelected) {
                  optionClass += " border-[#FFB800]"
                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showExplanation}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                )
              })}
            </div>

            {showExplanation && (
              <div className="mt-8 space-y-4">
                <h5 className="font-medium">Explicación:</h5>
                <p className="text-gray-600">
                  {currentQuestion.explanation}
                </p>
                <button
                  onClick={handleNext}
                  className="w-full bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
                >
                  Siguiente pregunta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
