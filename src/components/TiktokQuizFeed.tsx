'use client'

import React, { useState, useEffect } from 'react'
import { QuestionWithSubject } from '@/lib/seletest/types'
import TiktokQuizCard from './TiktokQuizCard'
import { X, Plane, ArrowUp } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

interface TiktokQuizFeedProps {
  subjectName: string
  questions: QuestionWithSubject[]
  onExit: () => void
}

function MasAdCard() {
  return (
    <div className="w-full h-[100dvh] snap-start flex flex-col items-center justify-center p-4 relative bg-black text-white">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10"></div>
        <img src="/images/mas_logo.jpg" alt="Fondo Mallorca" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="z-10 w-full max-w-md p-6 flex flex-col items-center text-center">
        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-6">
          Patrocinado
        </div>

        <div className="bg-white p-4 rounded-full mb-6">
          <Image src="/images/mas_logo.jpg" alt="Viajes MAS Logo" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
        </div>

        <h2 className="text-4xl font-black mb-4 leading-tight">
          ¿ESTRÉS POR LA <span className="text-yellow-400">EVAU</span>?
        </h2>
        
        <p className="text-lg text-gray-300 font-medium mb-8">
          Te mereces el mejor viaje de fin de curso. Mallorca te espera con Viajes MAS. 🌴🏖️
        </p>

        <a 
          href="/mallorca" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xl w-full py-4 rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <Plane className="w-6 h-6" />
          ¡QUIERO IR A MALLORCA!
        </a>
      </div>

      {/* Swipe Up Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10">
        <ArrowUp className="w-5 h-5 animate-bounce" />
        <span className="text-xs font-medium uppercase tracking-wider">Seguir estudiando</span>
      </div>
    </div>
  )
}

function OfferAdCard() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = new Date("2026-05-16T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full h-[100dvh] snap-start flex flex-col items-center justify-center p-4 relative bg-[#FFE8E8] text-[#C0392B]">
      <div className="z-10 w-full max-w-md p-6 flex flex-col items-center text-center">
        <div className="bg-[#E74C3C] text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-6 animate-pulse">
          ¡OFERTA FLASH!
        </div>

        <h2 className="text-4xl font-black mb-4 leading-tight">
          🚨 ¡ÚLTIMA OPORTUNIDAD! 🚨
        </h2>
        
        <p className="text-lg font-bold mb-8">
          Accede a todo el contenido premium a mitad de precio antes de que se acabe el tiempo.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase">Antes</p>
            <p className="text-2xl text-gray-500 line-through font-bold">29,99€</p>
          </div>
          <div className="text-4xl font-black">➔</div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase">Ahora</p>
            <p className="text-5xl text-[#E74C3C] font-black">14,99€</p>
          </div>
        </div>

        <div className="bg-white/80 px-4 py-2 rounded-full text-sm font-black flex items-center gap-2 border border-[#FFD0D0] mb-8">
          <span>⏳ Termina en:</span>
          <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
        </div>

        <a 
          href="/madrid/premium" 
          className="bg-[#E74C3C] hover:bg-[#C0392B] text-white font-black text-xl w-full py-4 rounded-2xl shadow-[0_10px_0_#962D22] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
        >
          ¡APROVECHAR OFERTA!
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C0392B] z-10">
        <ArrowUp className="w-5 h-5 animate-bounce" />
        <span className="text-xs font-medium uppercase tracking-wider">Seguir estudiando</span>
      </div>
    </div>
  )
}

export default function TiktokQuizFeed({ subjectName, questions, onExit }: TiktokQuizFeedProps) {
  const { isPremium } = useAuth()

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[100dvh] bg-gray-50 p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">No hay preguntas</h2>
        <p className="text-gray-500 mb-8">No hemos encontrado preguntas para esta asignatura en nuestra base de datos global aún.</p>
        <button className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3 px-6 transition-colors" onClick={onExit}>Volver</button>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[100dvh] bg-gray-50">
      {/* Top Navigation / Exit Button */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={onExit}
          className="p-2 bg-white/80 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors border border-gray-200"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="w-full h-full overflow-y-auto snap-y snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {questions.map((q, index) => (
          <React.Fragment key={q.id}>
            <TiktokQuizCard question={q} />
            {/* Inject Offer Ad every 7 questions if not premium */}
            {!isPremium && (index + 1) % 7 === 0 && (
              <OfferAdCard key={`offer-${index}`} />
            )}
            {/* Inject MAS Ad every 15 questions if not premium */}
            {!isPremium && (index + 1) % 15 === 0 && (
              <MasAdCard key={`ad-${index}`} />
            )}
          </React.Fragment>
        ))}

        {/* End of Feed Card */}
        <div className="w-full h-[100dvh] snap-start flex flex-col items-center justify-center p-6 bg-gray-50">
          <h2 className="text-3xl font-extrabold mb-4 text-center">¡Has terminado!</h2>
          <p className="text-center text-gray-500 mb-8 max-w-sm">Has completado esta ronda intensiva de {subjectName}.</p>
          <button className="bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-4 px-8 text-lg transition-colors shadow-sm" onClick={onExit}>
            Elegir otra asignatura
          </button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}


