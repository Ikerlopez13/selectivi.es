'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MallorcaLandingPage() {
  const whatsappUrl = "https://wa.me/34675977794?text=Hola!%20Estoy%20interesado%20en%20el%20viaje%20a%20Mallorca%20de%20MAS"

  return (
    <main className="min-h-screen flex flex-col bg-[#F0FBFF]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Logo MAS */}
            <div className="w-32 h-32 relative mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Image 
                src="/images/mas_logo.jpg" 
                alt="MAS Logo" 
                fill 
                className="object-contain rounded-3xl shadow-lg border-4 border-white"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 italic uppercase leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Tu verano <span className="text-emerald-500 underline decoration-8 underline-offset-8">épico</span><br />
              empieza aquí 🌴
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-bold mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Gana un viaje inolvidable a Mallorca con MAS. Sol, playa, amigos y la mejor experiencia de tu vida te están esperando.
            </p>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-10 py-6 rounded-3xl font-black text-2xl italic uppercase tracking-wider transition-all hover:scale-105 shadow-[0_10px_0_#059669] hover:shadow-[0_12px_0_#059669] active:shadow-none active:translate-y-1 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500"
            >
              ¡QUIERO MI VIAJE! 🚀
            </a>
            <p className="mt-4 text-emerald-600 font-black italic uppercase tracking-widest text-sm animate-in fade-in duration-1000 delay-700">
              (gratis con TODO incluido)
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl bg-slate-900 group">
            {/* Placeholder for Video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-400/20 to-blue-500/20">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
              </div>
            </div>
            
            {/* Overlay if no video */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white font-black text-xs tracking-widest uppercase italic">Presentación MAS Mallorca</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Info Section */}
      <section className="bg-white py-32 rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-[#F0FBFF] rounded-[40px] border-2 border-emerald-100 hover:scale-105 transition-transform duration-500">
              <div className="text-5xl mb-6">🏨</div>
              <h3 className="text-2xl font-black italic uppercase mb-4 text-slate-800">Hoteles VIP</h3>
              <p className="text-slate-600 font-bold">Resort de lujo frente al mar con todo incluido para ti y tus amigos.</p>
            </div>
            <div className="p-10 bg-[#F0FBFF] rounded-[40px] border-2 border-emerald-100 hover:scale-105 transition-transform duration-500">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="text-2xl font-black italic uppercase mb-4 text-slate-800">Party Boat</h3>
              <p className="text-slate-600 font-bold">Fiestas exclusivas en catamarán por las mejores calas de la isla.</p>
            </div>
            <div className="p-10 bg-[#F0FBFF] rounded-[40px] border-2 border-emerald-100 hover:scale-105 transition-transform duration-500">
              <div className="text-5xl mb-6">🌊</div>
              <h3 className="text-2xl font-black italic uppercase mb-4 text-slate-800">Aguas Turquesas</h3>
              <p className="text-slate-600 font-bold">Descubre rincones secretos y calas que parecen sacadas de una postal.</p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-12 italic uppercase leading-tight">
              ¿Hablamos por <span className="text-emerald-500 uppercase underline decoration-4 underline-offset-4">WhatsApp</span>?
            </h2>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-white border-4 border-emerald-400 text-emerald-500 hover:bg-emerald-400 hover:text-white px-10 py-6 rounded-3xl font-black text-2xl italic uppercase tracking-wider transition-all hover:scale-105 shadow-xl"
            >
              SABER MÁS 💬
            </a>
            <p className="mt-6 text-emerald-600 font-black italic uppercase tracking-widest text-sm">
              (gratis con TODO incluido)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
