'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'

type Slide =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'content'; id: string }

const slides: Slide[] = [
  { kind: 'image', src: '/images/slide1.png', alt: 'Slide 1 - Aquí es donde estás ahora' },
  { kind: 'image', src: '/images/slide2.png', alt: 'Slide 2 - Aquí es donde puedes llegar' },
  { kind: 'content', id: 'duolingo' },
  { kind: 'content', id: 'claro' },
  { kind: 'content', id: 'precio' },
]

export default function Onboarding() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const auto = useRef<NodeJS.Timeout | null>(null)

  const restartAuto = useCallback(() => {
    if (auto.current) clearInterval(auto.current)
    auto.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 5000)
  }, [])

  const goTo = useCallback((i: number) => {
    if (animating) return
    setAnimating(true)
    const nextIndex = (i + slides.length) % slides.length
    setIndex(nextIndex)
    setTimeout(() => setAnimating(false), 320)
    restartAuto()
  }, [animating, restartAuto])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    restartAuto()
    return () => {
      if (auto.current) clearInterval(auto.current)
      auto.current = null
    }
  }, [restartAuto])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  // Tarjeta consistente estilo “teléfono”
  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-[380px] min-w-[380px] max-w-[380px] shrink-0">
      <div className="relative flex flex-col items-center">
        {/* Badge icono arriba */}
        <div className="absolute -top-7 z-10 bg-white rounded-2xl shadow p-2 border">
          <Image src="/images/logoo.svg" alt="selectiviES" width={32} height={32} className="w-8 h-8" />
        </div>
        {/* Cuerpo */}
        <div className="pt-10 rounded-2xl bg-white border border-black/5 shadow-xl overflow-hidden h-[640px] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )

  return (
    <section id="onboarding" className="relative h-full min-h-full flex items-center">
      <div className="relative max-w-[1100px] mx-auto px-6 w-full">
        <h2 className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-4 py-2 text-sm md:text-base font-semibold text-black/80 shadow-sm ring-1 ring-black/5">
            Descubre cómo funciona en <span className="font-extrabold text-black">60 segundos</span>
          </span>
        </h2>
        <div
          className="relative overflow-hidden rounded-3xl"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slides wrapper */}
          <div
            className="whitespace-nowrap transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => {
              return (
                <div
                  key={i}
                  className={`inline-block align-top w-full px-6 py-10 md:px-12 transition-transform duration-300 ${
                    index === i ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-90'
                  }`}
                  aria-hidden={index !== i}
                >
                  {s.kind === 'image' ? (
                    <Card>
                      <div className="px-6 pb-8 flex flex-col h-full">
                        <div className={`flex items-center justify-center mt-2 mb-4 ${i === 1 ? 'h-[280px]' : 'h-[340px]'}`}>
                          <Image src={s.src} alt={s.alt} width={400} height={200} className={i === 1 ? 'max-h-[200px] w-auto' : 'max-h-full w-auto'} />
                        </div>
                        {i === 0 ? (
                          <>
                            <div className="mx-auto mb-4 w-fit text-[12px] bg-[#FFF3C4] rounded-full px-3 py-1 text-black/70">
                              ✨ + de 1000 estudiantes ya son premium
                            </div>
                            <h3 className="text-[22px] font-extrabold text-center mb-3 underline decoration-2 underline-offset-4">Aquí es donde estás ahora</h3>
                            <p className="text-center text-gray-500 font-extrabold mb-3 text-[22px] leading-7">
                              {"¿Aún dudas de si conseguirás"}<br />
                              {"la uni que sueñas?"}
                            </p>
                            <p className="text-gray-700 text-center whitespace-pre-line text-[17px] leading-6">
                              {"Sabemos lo que sientes. Segundas vueltas,\napuntes infinitos, el miedo a no \nrecordar todo el temario…"}
                            </p>
                            <div className="text-center mt-auto pt-6">
                              <a href="/madrid/premium" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                                Descubre cómo llegar más lejos
                              </a>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mx-auto mb-3 w-fit text-[12px] font-medium bg-[#FFF3C4] rounded-full px-3 py-1 text-orange-600">
                              ✨ el 87% de la promoción anterior entró en su primera opción
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 underline decoration-2 underline-offset-4 text-gray-900">Aquí es donde puedes llegar</h3>
                            <div className="w-full mb-3 text-center">
                              <p className="max-w-[280px] mx-auto text-center text-gray-900 font-semibold text-[17px] leading-tight">
                                Con Seletest, podrás convertirte en
                                <br />
                                <span className="font-bold bg-[#FFF3C4]/80 rounded px-1">ese estudiante</span> que entra a la
                                <br />
                                <span className="font-bold underline decoration-[3px] underline-offset-4">universidad que quiere.</span>
                              </p>
                            </div>
                            <p className="text-gray-600 text-center text-[12px] leading-relaxed mb-4">
                              Solo 10-20 minutos al día… test simples,<br />
                              memorizables y acompañamiento hasta el final.
                            </p>
                            <div className="flex flex-col items-center gap-2 mb-4">
                              <span className="w-full max-w-[280px] mx-auto inline-flex items-center justify-center gap-2 bg-[#F4F5F7] rounded-full px-4 py-2 text-[12px] text-gray-800 shadow-sm">
                                <span className="text-green-600">✓</span> Miles de preguntas reales de EvAU.
                              </span>
                              <span className="w-full max-w-[280px] mx-auto inline-flex items-center justify-center gap-2 bg-[#F4F5F7] rounded-full px-4 py-2 text-[12px] text-gray-800 shadow-sm">
                                <span className="text-green-600">✓</span> Bachillerato, no solo la Selectividad.
                              </span>
                              <span className="w-full max-w-[280px] mx-auto inline-flex items-center justify-center gap-2 bg-[#F4F5F7] rounded-full px-4 py-2 text-[12px] text-gray-800 shadow-sm">
                                <span className="text-green-600">✓</span> Resultados visibles en pocos días.
                              </span>
                            </div>
                            
                          </>
                        )}
                      </div>
                    </Card>
                  ) : s.id === 'duolingo' ? (
                    <Card>
                      <div className="px-6 pb-8 text-center flex flex-col h-full">
                        <div className="relative mx-auto bg-gradient-to-r from-[#FFD775] to-[#FFE79A] text-black rounded-3xl px-6 py-6 md:px-8 md:py-8 font-semibold italic mb-5 shadow-xl ring-1 ring-[#DFAA00]/30">
                          <p className="text-[18px] md:text-[20px] leading-snug">
                            “Es el Duolingo de la EvAU…<br className="hidden md:block" /> pero para Bachillerato y Selectividad.”
                          </p>
                        </div>
                        <div className="mx-auto mb-4 w-fit text-[12px] bg-[#FFF3C4] rounded-full px-3 py-1 text-black/70">
                          ✨ el 87% de la promoción anterior entró en su primera opción
                        </div>
                        <div className="mx-auto max-w-[320px]">
                          <h3 className="text-[22px] font-extrabold mb-3 leading-7">
                            {"Cada test es un paso hacia"}<br />{"tu plaza universitaria."}
                          </h3>
                          <p className="text-gray-700">Sin complicaciones, sin agobios.</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <a href="/madrid/premium" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                            Descubre cómo llegar más lejos
                          </a>
                        </div>
                      </div>
                    </Card>
                  ) : s.id === 'claro' ? (
                    <Card>
                      <div className=" px-6 pb-8 flex flex-col h-full">
                        <ul className="space-y-2 text-[18px] mx-auto max-w-[320px] mt-40 text-left">
                          <li>El sueño está claro; <strong>tu universidad</strong>.</li>
                          <li>La probabilidad, <strong>muy alta con seleTest</strong>.</li>
                          <li>El tiempo: <strong>solo minutos al día</strong>.</li>
                          <li>El esfuerzo: mínimo, <a className="underline" href="#">nosotros te guiamos</a>.</li>
                        </ul>
                        <div className="mt-auto pt-6 text-center">
                          <a href="/madrid/premium" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                            Descubre cómo llegar más lejos
                          </a>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    <Card>
                      <div className="px-6 pb-8 text-center flex flex-col h-full">
                        <div className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">2,99<span className="text-2xl">/mes</span></div>
                        <p className="italic text-gray-700 mb-6">Este es un <span className="italic">recurso de pago</span></p>
                        <div className="mx-auto max-w-[320px] text-left">
                          <p className="text-gray-800 font-semibold mb-2">Pero aquí está la razón:</p>
                          <p className="text-gray-700 mb-3">te damos <u>todo lo que necesitas</u> para <br className="hidden md:block" />estudiar <u>sin perder tiempo ni energía</u>.</p>
                          <p className="text-gray-800 font-semibold mb-2">Y por qué es justo:</p>
                          <p className="text-gray-700 mb-6">menos que <u>un café a la semana</u>,<br className="hidden md:block" /> por un futuro que vale <u>miles</u>.</p>
                        </div>
                        <h4 className="text-2xl font-extrabold mt-32 mb-2">¿Te parece justo?</h4>
                        <div className="mt-auto pt-6">
                          <a href="/madrid/premium" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                            Hazte premium y empieza ahora
                          </a>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              )
            })}
          </div>

          {/* Controls */}
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  index === i ? 'bg-[#FFB800] w-6' : 'bg-black/20 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


