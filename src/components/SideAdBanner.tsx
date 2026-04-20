'use client'

import React from 'react'

interface SideAdBannerProps {
  className?: string
}

export default function SideAdBanner({ className = "" }: SideAdBannerProps) {
  const phoneNumber = "34675977794"
  const message = encodeURIComponent("hola estoy interesado en adquirir un espacio publicitario lateral en selectivi.es")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className={`w-[200px] h-[600px] sticky top-24 ${className}`}>
      <div 
        className="h-full w-full relative overflow-hidden rounded-[40px] border-4 border-dashed border-[#FFB800] bg-[#FFF9E6] p-6 text-center shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,184,0,0.1)] group flex flex-col justify-between"
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FFB800]/10 blur-2xl" />
        <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[#FFB800]/10 blur-2xl" />

        <div className="relative z-10 flex flex-col h-full items-center justify-center">
            <p className="text-[#FFB800] font-black uppercase text-[10px] tracking-widest mb-4">ESPACIO DISPONIBLE</p>
          <h3 className="mb-8 text-xl font-black italic uppercase tracking-tighter text-slate-800 leading-tight">
            ¿Tu marca<br />
            <span className="text-[#FFB800]">aquí?</span>
          </h3>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-[#FFB800] px-4 py-4 text-sm font-black uppercase italic tracking-wider text-black transition-all hover:scale-105 hover:bg-[#ffc835] shadow-[0_6px_0_#b38100] active:shadow-none active:translate-y-1"
          >
            adquirir
          </a>
          
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">
            Selectivi.es
          </p>
        </div>
      </div>
    </div>
  )
}
