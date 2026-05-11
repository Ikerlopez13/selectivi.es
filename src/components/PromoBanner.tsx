'use client'

import React, { useState, useEffect } from 'react'

interface PromoBannerProps {
  className?: string
}

export default function PromoBanner({ className = "" }: PromoBannerProps) {
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
    <div className={`bg-[#FFE8E8] text-[#C0392B] text-center py-2.5 px-4 text-sm md:text-base font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-b border-[#FFD0D0] ${className}`}>
      <span className="flex items-center gap-1">
        <span className="animate-pulse">🚨</span> ¡OFERTA ÚNICA E INCREÍBLE! ¡EL DESCUENTO SE ACABA!
      </span>
      <div className="flex items-center gap-2">
        <span className="line-through text-gray-400">29,99€</span>
        <span className="text-lg font-black text-[#E74C3C]">14,99€</span>
      </div>
      <div className="bg-white/60 px-3 py-1 rounded-full text-xs md:text-sm font-black flex items-center gap-1 border border-[#FFD0D0] text-[#C0392B]">
        <span>⏳ Termina en:</span>
        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
      </div>
    </div>
  )
}
