'use client'

import React from 'react'
import Image from 'next/image'

interface SideAdBannerProps {
  className?: string
  isMas?: boolean
}

export default function SideAdBanner({ className = "", isMas = false }: SideAdBannerProps) {
  const phoneNumber = "34675977794"
  const message = encodeURIComponent(
    isMas 
      ? "Hola! Estoy interesado en el viaje a Mallorca de MAS" 
      : "hola estoy interesado en adquirir un espacio publicitario lateral en selectivi.es"
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  const targetUrl = isMas ? "/mallorca" : whatsappUrl

  return (
    <div className={`w-[200px] h-[600px] sticky top-24 ${className}`}>
      <div 
        className={`h-full w-full relative overflow-hidden rounded-[40px] border-4 border-dashed p-6 text-center shadow-xl transition-all duration-500 group flex flex-col justify-between ${
          isMas 
            ? 'border-emerald-400 bg-white hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]' 
            : 'border-[#FFB800] bg-[#FFF9E6] hover:shadow-[0_0_40px_rgba(255,184,0,0.1)]'
        }`}
      >
        <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${isMas ? 'bg-emerald-400/10' : 'bg-[#FFB800]/10'}`} />
        <div className={`absolute -left-10 -bottom-10 h-32 w-32 rounded-full blur-2xl ${isMas ? 'bg-emerald-400/10' : 'bg-[#FFB800]/10'}`} />

        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          {isMas ? (
            <>
              <div className="w-24 h-24 relative mb-6 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/images/mas_logo.jpg" 
                  alt="MAS Logo" 
                  fill 
                  className="object-contain rounded-2xl"
                />
              </div>
              <p className="text-emerald-500 font-black uppercase text-[10px] tracking-widest mb-2">PROMOCIÓN EXCLUSIVA</p>
              <h3 className="mb-2 text-xl font-black italic uppercase tracking-tighter text-slate-800 leading-tight">
                GANA UN VIAJE<br />
                <span className="text-emerald-500 underline decoration-2 underline-offset-4">A MALLORCA</span>
              </h3>
              <p className="mb-4 text-[10px] font-black italic uppercase text-emerald-600 tracking-widest leading-tight">
                (gratis con TODO incluido)
              </p>
            </>
          ) : (
            <>
              <p className="text-[#FFB800] font-black uppercase text-[10px] tracking-widest mb-4">ESPACIO DISPONIBLE</p>
              <h3 className="mb-8 text-xl font-black italic uppercase tracking-tighter text-slate-800 leading-tight">
                ¿Tu marca<br />
                <span className="text-[#FFB800]">aquí?</span>
              </h3>
            </>
          )}
          
          <a 
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center rounded-xl px-4 py-4 text-sm font-black uppercase italic tracking-wider text-black transition-all hover:scale-105 active:translate-y-1 ${
              isMas 
                ? 'bg-emerald-400 hover:bg-emerald-500 shadow-[0_6px_0_#059669] active:shadow-none' 
                : 'bg-[#FFB800] hover:bg-[#ffc835] shadow-[0_6px_0_#b38100] active:shadow-none'
            }`}
          >
            {isMas ? 'VER VIAJE' : 'ADQUIRIR'}
          </a>
          
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">
            Selectivi.es
          </p>
        </div>
      </div>
    </div>
  )
}
