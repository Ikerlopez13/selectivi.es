'use client'

import React, { useState, useEffect } from 'react'
import { allSubjects } from '@/lib/seletest/allSubjects'
import { Subject, QuestionWithSubject } from '@/lib/seletest/types'
import TiktokQuizFeed from '@/components/TiktokQuizFeed'
import { BookOpen, ArrowLeft, Loader2 } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import Image from 'next/image'

export default function RepasoRapidoPage() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [questions, setQuestions] = useState<QuestionWithSubject[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { hasSession, loading } = useAuth()

  useEffect(() => {
    if (!loading && !hasSession) {
      window.location.href = '/login?next=/fast'
    }
  }, [hasSession, loading])

  const handleSelectSubject = async (subject: Subject) => {
    setSelectedSubject(subject)
    setIsLoading(true)
    try {
      const res = await fetch(`/api/fast-questions?subject=${encodeURIComponent(subject.name)}`)
      const data = await res.json()
      if (data.questions) {
        setQuestions(data.questions)
      } else {
        setQuestions([])
      }
    } catch (error) {
      console.error("Error fetching questions:", error)
      setQuestions([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExit = () => {
    setSelectedSubject(null)
    setQuestions([])
  }

  if (selectedSubject) {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
          <Loader2 className="w-12 h-12 text-[#FFB800] animate-spin mb-4" />
          <h2 className="text-xl font-extrabold text-center">Preparando ronda intensiva de {selectedSubject.name}...</h2>
          <p className="text-gray-500 text-center mt-2">Buscando en la base de datos global.</p>
        </div>
      )
    }
    return <TiktokQuizFeed subjectName={selectedSubject.name} questions={questions} onExit={handleExit} />
  }

  if (loading || (!hasSession)) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
        <Loader2 className="w-12 h-12 text-[#FFB800] animate-spin mb-4" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      {/* Header */}
      <header className="pt-12 pb-10 px-6 bg-[#FFB800] text-black mb-8 border-b-4 border-black/5">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="bg-white/20 hover:bg-white/40 p-2.5 rounded-full transition-colors backdrop-blur-sm">
              <ArrowLeft className="w-5 h-5 text-black" />
            </Link>
            <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-sm">
              ✨ BETA
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white rounded-2xl p-2.5 shadow-sm">
              <Image src="/images/logoo.svg" alt="SelectiviES Logo" width={42} height={42} className="w-[42px] h-[42px]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Selectivi <span className="text-black/80 font-extrabold italic">FAST</span>
            </h1>
          </div>
          <p className="text-black/70 font-semibold text-lg max-w-xl">
            Repaso inteligente y al instante. Desliza, aprende y revienta la EvAU 2025.
          </p>
        </div>
      </header>

      {/* Main Content: Subject Selection */}
      <main className="flex-1 px-6 pb-16 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-[#FFB800] rounded-full"></div>
          <h2 className="text-2xl font-extrabold text-gray-900">¿Qué asignatura quieres practicar?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allSubjects.map((subject) => {
            // No longer displaying total local questions, since we are fetching globally
            return (
              <button
                key={subject.id}
                onClick={() => handleSelectSubject(subject)}
                className="group bg-white hover:bg-[#FFF8E6] transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-[#FFB800] shadow-sm hover:shadow-md text-left overflow-hidden active:scale-95 rounded-2xl flex flex-col justify-between h-[130px] p-5 relative"
              >
                <div className="absolute -right-6 -top-6 bg-[#FFF3C4] w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-[#FFF3C4] w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <h3 className="font-extrabold text-[16px] leading-tight text-gray-900">{subject.name}</h3>
                </div>
                <div className="relative z-10 text-xs font-bold text-gray-500 uppercase tracking-wide mt-2">
                  BANCO GLOBAL
                </div>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}

