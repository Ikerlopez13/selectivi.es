'use client'

import { useEffect, useRef, useState } from 'react'

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

  const goTo = (i: number) => {
    if (animating) return
    setAnimating(true)
    const next = (i + slides.length) % slides.length
    setIndex(next)
    setTimeout(() => setAnimating(false), 320)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  useEffect(() => {
    auto.current && clearInterval(auto.current)
    auto.current = setInterval(() => {
      next()
    }, 5000)
    return () => {
      auto.current && clearInterval(auto.current)
    }
  }, [index])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    auto.current && clearInterval(auto.current)
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
    <div className="mx-auto w-full max-w-[380px]">
      <div className="relative flex flex-col items-center">
        {/* Badge icono arriba */}
        <div className="absolute -top-7 z-10 bg-white rounded-2xl shadow p-2 border">
          <img src="/images/logoo.svg" alt="selectiviES" className="w-8 h-8" />
        </div>
        {/* Cuerpo */}
        <div className="pt-10 rounded-2xl bg-white border border-black/5 shadow-xl overflow-hidden h-[640px] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )

  return (
    <section id="onboarding" className="relative min-h-[calc(100vh-140px)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7D1] via-white to-[#FFF1B2]" />
      <div className="relative max-w-[1100px] mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Descubre cómo funciona en 60 segundos
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
                <div key={i} className="inline-block align-top w-full px-6 py-10 md:px-12" aria-hidden={index !== i}>
                  {s.kind === 'image' ? (
                    <Card>
                      <div className="px-5 pb-6 flex flex-col h-full">
                        <div className="h-[220px] flex items-center justify-center mt-2 mb-4">
                          <img src={s.src} alt={s.alt} className="max-h-full w-auto" />
                        </div>
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
                          <a href="#" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                            Descubre cómo llegar más lejos
                          </a>
                        </div>
                      </div>
                    </Card>
                  ) : s.id === 'duolingo' ? (
                    <Card>
                      <div className="px-6 pb-8 text-center flex flex-col h-full">
                        <div className="bg-[#FFDB76] text-black/90 rounded-2xl px-4 py-4 font-medium mb-4">
                          “Es el Duolingo de la EvAU…<br className="hidden md:block" /> pero para Bachillerato y Selectividad.”
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
                          <a href="#" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
                            Descubre cómo llegar más lejos
                          </a>
                        </div>
                      </div>
                    </Card>
                  ) : s.id === 'claro' ? (
                    <Card>
                      <div className=" px-6 pb-8 flex flex-col h-full">
                        <ul className="space-y-2 text-[18px] mx-auto max-w-[320px] text-left">
                          <li>El sueño está claro; <strong>tu universidad</strong>.</li>
                          <li>La probabilidad, <strong>muy alta con seleTest</strong>.</li>
                          <li>El tiempo: <strong>solo minutos al día</strong>.</li>
                          <li>El esfuerzo: mínimo, <a className="underline" href="#">nosotros te guiamos</a>.</li>
                        </ul>
                        <div className="mt-auto pt-6 text-center">
                          <a href="#" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
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
                        <div className="mt-auto pt-6">
                          <a href="#" className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#ffc835] text-black font-medium rounded-xl px-5 py-3">
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


