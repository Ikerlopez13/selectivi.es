'use client'

import React from 'react'

interface AdBannerProps {
  className?: string
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  // Nota: Cambia este número por tu WhatsApp real
  const phoneNumber = "34675977794"
  const message = encodeURIComponent("hola estoy interesado en adquirir un espacio publicitario en selectivi.es")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${className}`}>
      <div 
        className="relative overflow-hidden rounded-[48px] border-4 border-dashed border-[#FFB800] bg-[#1A1A1A] p-10 md:p-16 text-center shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,184,0,0.2)] group"
      >
        {/* Decoración de fondo */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFB800]/5 blur-3xl transition-all duration-700 group-hover:bg-[#FFB800]/10" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#FFB800]/5 blur-3xl transition-all duration-700 group-hover:bg-[#FFB800]/10" />

        <div className="relative z-10 flex flex-col items-center">
          <h3 className="mb-6 text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-tight">
            ¿Te gustaría conseguir<br />
            <span className="text-[#FFB800]">este espacio publicitario</span><br />
            para tu negocio?
          </h3>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#FFB800] px-10 py-5 text-xl font-black uppercase italic tracking-wider text-black transition-all hover:scale-110 hover:bg-[#ffc835] shadow-[0_10px_0_#b38100] active:shadow-none active:translate-y-1"
          >
            adquirir banner
          </a>
          
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 italic">
            Publicidad exclusiva • Selectivi.es
          </p>
        </div>
      </div>
    </div>
  )
}
