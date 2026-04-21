"use client"

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase/client'
import SideAdBanner from '@/components/SideAdBanner'
import MathText from '@/components/MathText'
import 'katex/dist/katex.min.css'
import Script from 'next/script'

interface Question {
  pregunta: string;
  opcion_a: string;
  opcion_b: string;
  opcion_c: string;
  opcion_d: string;
  correcta: string;
  explicacion: string;
  selectedOption?: string | null;
}

export default function AILabPage() {
  const [inputText, setInputText] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isReadingPDF, setIsReadingPDF] = useState(false)
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [activeTab, setActiveTab] = useState<'text' | 'youtube' | 'pdf'>('text')
  const [isEngineReady, setIsEngineReady] = useState(false)
  const [loadedFile, setLoadedFile] = useState<{ name: string, content: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const feedRef = useRef<HTMLDivElement>(null)

  const [aiLabUses, setAiLabUses] = useState(0)
  const [isPremium, setIsPremium] = useState(false)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) {
        window.location.href = '/dashboard'
        return
      }
      setSession(session)

      try {
        const res = await fetch('/api/check-premium', {
          headers: { 'Authorization': `Bearer ${session.access_token}` }
        })
        const data = await res.json()
        setIsPremium(data.isPremium)
        setAiLabUses(data.aiLabUses || 0)
      } catch (err) {
        console.error("Error al verificar perfil:", err)
      }
    })
  }, [])

  const handleEngineLoad = () => {
    const lib = (window as any).pdfjsLib;
    if (lib) {
      lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      setIsEngineReady(true);
    }
  };

  const processFile = async (file: File) => {
    const lib = (window as any).pdfjsLib;
    if (!lib || !isEngineReady) return;

    setIsReadingPDF(true)
    setIsDraggingOver(false)
    try {
      const data = await file.arrayBuffer();
      const pdf = await lib.getDocument({ data }).promise;
      
      const pagePromises = Array.from({ length: pdf.numPages }, (_, i) => 
        pdf.getPage(i + 1).then(async (page: any) => {
          const content = await page.getTextContent();
          return content.items.map((it: any) => it.str).join(" ");
        })
      );

      const pageTexts = await Promise.all(pagePromises);
      const fullContent = pageTexts.join("\n");
      const trimmedContent = fullContent.slice(0, 30000);

      if (trimmedContent.trim().length > 10) {
        setLoadedFile({ name: file.name, content: trimmedContent });
      } else {
        alert("El PDF parece estar vacío o ser ilegible.")
      }
    } catch (err) {
      console.error(err)
      alert("Error leyendo el archivo.");
    } finally {
      setIsReadingPDF(false)
    }
  }

  const handleGenerate = async (content?: string) => {
    const raw = content || (activeTab === 'text' ? inputText : (activeTab === 'pdf' ? loadedFile?.content : youtubeUrl));
    
    if (!raw || raw.trim().length < 10) {
      alert("Por favor, introduce más material para analizar.");
      return;
    }

    setIsGenerating(true)
    setCurrentIdx(0)
    
    try {
      const res = await fetch('/api/ai/generate-session-quiz', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`
        },
        body: JSON.stringify({ content: raw, count: 5 })
      })

      const data = await res.json()
      
      if (!res.ok) {
        if (res.status === 403) {
          alert("Has alcanzado tu límite de 2 tests gratuitos. ¡Sigue aprendiendo con la versión Premium!")
          window.location.href = '/madrid/premium'
          return
        }
        throw new Error(data.error || "Fallo en el Laboratorio");
      }

      if (data.questions) {
        setQuestions(data.questions)
        // Actualizar contador localmente para que cambie el UI sin refrescar
        if (!isPremium) setAiLabUses(u => u + 1)
        
        setTimeout(() => {
          feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else {
        const detail = JSON.stringify(data).slice(0, 100);
        throw new Error(`La IA respondió pero el formato es incorrecto. Detalle: ${detail}`);
      }
    } catch (e: any) {
      console.error(e)
      alert(`⚠️ ERROR EN EL LAB: ${e.message}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const currentQuestion = questions[currentIdx]

  return (
    <main className="min-h-screen bg-white">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js" onLoad={handleEngineLoad} />
      <Navbar />
      
      {/* HERO - ESTILO LA SELE FÁCIL CON MASCOTA ORIGINAL */}
      <div className="bg-[#FFB800] py-16 md:py-24 px-6 relative overflow-hidden">

        {/* Mascota asomando */}
        <div className="absolute right-0 bottom-0 h-4/5 md:h-[110%] opacity-100 pointer-events-none translate-x-12 md:translate-x-0 translate-y-10 md:translate-y-4 z-0">
          <img 
            src="/images/gato.svg" 
            alt="Mascota SelectiviMAD" 
            className="h-full w-auto drop-shadow-2xl brightness-105 transition-all duration-700" 
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Badge Style Subhead */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm mb-10 border border-black/5 hover:scale-105 transition-transform cursor-default group mx-auto">
            <div className="bg-[#FFB800] p-1.5 rounded-lg text-white font-bold leading-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <span className="text-black font-bold text-sm tracking-tight">AI study<span className="text-[#FFB800] ml-1">LAB</span></span>
          </div>

          <h1 className="text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-4 text-black">
            AI study <span className="text-white">LAB.</span>
          </h1>
          <p className="text-black/60 font-medium text-xl md:text-2xl tracking-tight max-w-2xl mx-auto">
            Genera test de selectividad con <span className="font-black">Inteligencia Artificial 2.0</span>.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-start gap-8 px-6 -mt-8 md:-mt-16 mb-16 max-w-[1600px] mx-auto relative z-10 w-full">
        {/* Banner Izquierdo */}
        <div className="hidden 2xl:block sticky top-24">
          <SideAdBanner />
        </div>

        <div className="flex-1 grid lg:grid-cols-12 gap-16">
        
        {/* PANEL DE CONTROL (STICKY EN DESKTOP, CENTRADO EN MÓVIL) */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-white border-[8px] border-black rounded-[48px] p-8 md:p-10 shadow-[20px_20px_0px_0px_#000] lg:sticky lg:top-8">
             <div className="flex gap-2 mb-8 bg-slate-50 p-2 rounded-3xl border border-black/5 font-bold italic">
                {['text', 'youtube', 'pdf'].map((t) => (
                  <button key={t} onClick={() => setActiveTab(t as any)} className={`flex-1 py-3 rounded-2xl text-[10px] uppercase tracking-widest transition-all ${activeTab === t ? 'bg-black text-[#FFB800]' : 'text-slate-300'}`}>
                    {t}
                  </button>
                ))}
             </div>

             <div className="h-64 mb-8">
               {activeTab === 'text' && ( <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="PEGA AQUÍ TUS APUNTES..." className="w-full h-full bg-slate-50 p-6 rounded-[32px] border-none outline-none font-bold text-xl italic placeholder:text-slate-200 resize-none" /> )}
               {activeTab === 'youtube' && (
                 <div className="h-full flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-[32px] p-8">
                   <div className="text-7xl animate-pulse">📺</div>
                   <input type="text" value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="PEGA EL LINK DEL VÍDEO" className="w-full p-4 bg-white border-2 border-black rounded-2xl font-bold text-center text-sm italic" />
                 </div>
               )}
               {activeTab === 'pdf' && (
                 <div 
                   onDragOver={e => { e.preventDefault(); setIsDraggingOver(true); }}
                   onDragEnter={e => { e.preventDefault(); setIsDraggingOver(true); }}
                   onDragLeave={() => setIsDraggingOver(false)}
                   onDrop={e => { e.preventDefault(); e.dataTransfer.files[0] && processFile(e.dataTransfer.files[0])}}
                   onClick={() => !isReadingPDF && fileInputRef.current?.click()}
                   className={`h-full border-[6px] border-dashed rounded-[44px] flex flex-col items-center justify-center cursor-pointer transition-all ${isDraggingOver ? 'bg-[#FFB800] border-black' : isReadingPDF || isGenerating ? 'bg-black text-[#FFB800]' : (loadedFile ? 'bg-black text-[#FFB800]' : 'bg-slate-50 border-black/10')}`}
                 >
                   <input type="file" className="hidden" ref={fileInputRef} accept="application/pdf" onChange={e => { e.target.files?.[0] && processFile(e.target.files[0]); e.target.value = '' }} />
                   <div className="text-6xl mb-2">{isReadingPDF || isGenerating ? '🧠' : (loadedFile ? '📄' : '📁')}</div>
                   <span className="font-black italic uppercase text-[10px] tracking-widest text-center px-4 leading-none">
                       {isReadingPDF || isGenerating ? 'ANALIZANDO...' : (loadedFile ? loadedFile.name : 'ARRASTRA TU PDF AQUÍ')}
                   </span>
                 </div>
               )}
             </div>

             {/* INDICADOR DE TOKENS (ESTILO ARCADE) */}
             <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em] leading-none mb-1">Tu Salto AI</span>
                  <span className={`text-[11px] font-black italic ${isPremium ? 'text-emerald-500' : 'text-black'}`}>
                    {isPremium ? 'PLAN PREMIUM' : 'CUENTA GRATUITA'}
                  </span>
                </div>
                <div className={`px-4 py-2 rounded-2xl border-[3px] border-black font-black italic shadow-[4px_4px_0px_#000] text-xs transition-all ${isPremium ? 'bg-emerald-400 text-emerald-950 border-emerald-900' : 'bg-white text-black'}`}>
                    {isPremium ? 'TOKENS: ∞' : `TOKENS: ${Math.max(0, 2 - aiLabUses)} / 2`}
                </div>
             </div>

             {!isPremium && aiLabUses >= 2 ? (
                <a 
                  href="/madrid/premium"
                  className="block w-full py-6 rounded-[32px] font-black text-2xl italic uppercase border-4 border-black bg-gradient-to-br from-[#FFB800] to-[#FF9000] text-black hover:scale-105 transition-all shadow-[12px_12px_0px_#000] text-center"
                >
                   🚀 HAZTE PREMIUM
                </a>
             ) : (
                <button 
                  onClick={() => handleGenerate()} 
                  disabled={isGenerating || isReadingPDF} 
                  className={`w-full py-6 rounded-[32px] font-black text-2xl italic uppercase border-4 border-black ${isGenerating || isReadingPDF ? 'bg-slate-100 text-slate-300' : 'bg-black text-[#FFB800] hover:bg-[#FFB800] hover:text-black shadow-[12px_12px_0px_#000] active:shadow-none translate-y-0 active:translate-y-2'}`}
                >
                  {isGenerating || isReadingPDF ? 'Wait...' : '¡GENERAR EXAMEN!'}
                </button>
             )}
          </div>
        </div>

        {/* FEED DE PREGUNTAS (UNO A UNO) */}
        <div className="lg:col-span-8 flex flex-col w-full" ref={feedRef}>
          {isGenerating ? (
            <div className="bg-white border-4 border-black rounded-[48px] p-24 text-center shadow-[15px_15px_0px_#FFB800] animate-pulse">
               <div className="text-9xl mb-8 animate-bounce">🧪</div>
               <h2 className="text-4xl font-black italic uppercase tracking-tighter">Preparando<br/><span className="text-[#FFB800]">tus tarjetas...</span></h2>
            </div>
          ) : questions.length > 0 ? (
            <div className="animate-in slide-in-from-right-12 duration-500">
               <div className="mb-6 flex items-center gap-4 text-slate-400 font-bold italic text-sm px-4">
                  <span>Pregunta {currentIdx + 1} de {questions.length}</span>
                  <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB800] transition-all duration-500" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
                  </div>
               </div>

               <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#FFB800] font-black italic uppercase text-sm tracking-widest">PREGUNTA</span>
                      <div className="w-12 h-1 bg-black rounded-full" />
                    </div>
                    <span className="bg-[#FFF9EA] text-[#DAA520] px-4 py-2 rounded-xl font-bold text-xs">Selectividad</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-[1.1] mb-12">
                    <MathText text={currentQuestion.pregunta} />
                  </h2>

                  <div className="grid grid-cols-1 gap-4 mb-12">
                    {['a', 'b', 'c', 'd'].map(l => (
                      <button 
                        key={l}
                        onClick={() => {
                          if (currentQuestion.selectedOption) return
                          const n = [...questions]; n[currentIdx].selectedOption = l; setQuestions(n);
                        }}
                        className={`w-full p-6 rounded-2xl text-left transition-all flex items-center gap-6 border-2 font-bold text-lg
                          ${!currentQuestion.selectedOption 
                            ? 'bg-white border-slate-50 hover:border-slate-300 hover:bg-slate-50' 
                            : (currentQuestion.correcta === l 
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900' 
                                : (currentQuestion.selectedOption === l ? 'bg-red-50 border-red-400 text-red-900' : 'bg-slate-50 border-transparent opacity-40'))}
                        `}
                      >
                         <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black border-2 ${!currentQuestion.selectedOption ? 'bg-slate-100 border-slate-200 text-slate-400' : 'bg-white border-inherit'}`}>
                          {l.toUpperCase()}
                         </span>
                         <MathText text={(currentQuestion as any)[`opcion_${l}`]} />
                      </button>
                    ))}
                  </div>

                  {currentQuestion.selectedOption ? (
                    <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-500">
                      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                        <span className="font-black text-xs uppercase tracking-widest text-[#FFB800] block mb-2">Explicación</span>
                        <p className="text-slate-600 font-medium italic leading-relaxed">
                          <MathText text={currentQuestion.explicacion} />
                        </p>
                      </div>

                      <button 
                        onClick={() => currentIdx < questions.length - 1 ? setCurrentIdx(i => i + 1) : setQuestions([])}
                        className="w-full py-6 bg-slate-100 hover:bg-black hover:text-[#FFB800] text-slate-400 rounded-[28px] font-black italic uppercase tracking-widest transition-all text-xl"
                      >
                        {currentIdx < questions.length - 1 ? 'SIGUIENTE PREGUNTA' : 'FINALIZAR TEST'}
                      </button>
                    </div>
                  ) : (
                    <div className="h-20 flex items-center justify-center border-t border-slate-100 italic text-slate-300 font-bold uppercase text-xs tracking-widest">
                       Elige una opción...
                    </div>
                  )}
               </div>
            </div>
          ) : (
            <div className="h-full min-h-[600px] border-8 border-dashed border-slate-100 rounded-[80px] flex flex-col items-center justify-center p-20 opacity-20 grayscale">
               <div className="text-[12rem] mb-8">🎯</div>
               <h2 className="text-6xl font-black italic uppercase tracking-tighter text-center">QUIZ<br/>READY</h2>
            </div>
          )}
        </div>
      </div>

      {/* Banner Derecho */}
      <div className="hidden 2xl:block sticky top-24">
          <SideAdBanner />
        </div>
      </div>


      <Footer />
    </main>
  )
}
