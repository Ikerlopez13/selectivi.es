"use client"
import { useMemo, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'


type DegreeKey = 'Medicina' | 'Ingeniería Informática' | 'ADE' | 'Derecho' | 'Psicología'

type WeightTable = Record<string, number>

const degreeWeights: Record<DegreeKey, WeightTable> = {
  Medicina: {
    'Biología': 0.2,
    'Química': 0.2,
    'Matemáticas II': 0.2,
    'Física': 0.2,
  },
  'Ingeniería Informática': {
    'Matemáticas II': 0.2,
    'Física': 0.2,
    'Dibujo Técnico II': 0.2,
    'Química': 0.1,
  },
  ADE: {
    'Matemáticas CCSS II': 0.2,
    'Economía de la Empresa': 0.2,
    'Geografía': 0.1,
    'Historia del Arte': 0.1,
  },
  Derecho: {
    'Latín II': 0.2,
    'Griego II': 0.2,
    'Historia del Arte': 0.1,
    'Geografía': 0.1,
    'Economía de la Empresa': 0.1,
  },
  Psicología: {
    'Biología': 0.2,
    'Matemáticas II': 0.2,
    'Química': 0.1,
  },
}

const cutoffsMadrid: Record<DegreeKey, number> = {
  Medicina: 13.5,
  'Ingeniería Informática': 12.0,
  ADE: 10.5,
  Derecho: 11.0,
  Psicología: 12.5,
}

const specificSubjects = [
  'Matemáticas II',
  'Matemáticas CCSS II',
  'Física',
  'Química',
  'Biología',
  'Dibujo Técnico II',
  'Economía de la Empresa',
  'Geografía',
  'Historia del Arte',
  'Latín II',
  'Griego II',
]

type SpecificEntry = { subject: string; grade: number; weight?: number }

export default function CalculadoraPage() {
  const [nmb, setNmb] = useState<number>(0)
  const [lengua, setLengua] = useState<number>(0)
  const [historia, setHistoria] = useState<number>(0)
  const [ingles, setIngles] = useState<number>(0)
  const [modality, setModality] = useState<'Ciencias' | 'Ciencias Sociales' | 'Humanidades' | 'Artes'>('Ciencias')
  const [optativaNota, setOptativaNota] = useState<number>(0)
  const [degree, setDegree] = useState<DegreeKey>('Ingeniería Informática')

  const [specific, setSpecific] = useState<SpecificEntry[]>([
    { subject: 'Matemáticas II', grade: 0 },
    { subject: 'Física', grade: 0 },
  ])

  const cfg = useMemo(() => {
    const vals = [lengua, historia, ingles, optativaNota].map((v) => clamp(v))
    const avg = vals.reduce((a, b) => a + b, 0) / 4
    return round2(avg)
  }, [lengua, historia, ingles, optativaNota])

  const weights = degreeWeights[degree]
  const modalityLabelMap = {
    'Ciencias': 'Matemáticas II',
    'Ciencias Sociales': 'Matemáticas aplicadas a las CCSS II',
    'Humanidades': 'Latín II',
    'Artes': 'Fundamentos del Arte II',
  } as const
  const generalLabel = modalityLabelMap[modality]

  const boosters = useMemo(() => {
    // Filtra específicas aprobadas (>=5) y calcula ponderación a*Mi
    const entries = specific
      .filter((e) => e.grade >= 5)
      .map((e) => {
        const w = e.weight ?? (weights[e.subject] ?? 0)
        return { ...e, weight: w, contribution: round3(w * e.grade) }
      })
      .sort((a, b) => b.contribution - a.contribution)
    const top2 = entries.slice(0, 2)
    const total = round3(top2.reduce((s, e) => s + e.contribution, 0))
    return { top2, total }
  }, [specific, weights])

  const nmbClamped = useMemo(() => round2(clamp(nmb)), [nmb])

  const finalScore = useMemo(() => {
    const base = 0.6 * nmbClamped + 0.4 * cfg
    const total = round3(base + boosters.total)
    return total
  }, [nmbClamped, cfg, boosters.total])

  const cutoff = cutoffsMadrid[degree]
  const passes = finalScore >= cutoff

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Calculadora Nota de Corte Madrid',
            description: 'Calculadora para determinar tu nota de admisión a la universidad en Madrid y compararla con notas de corte recientes.',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
          }),
        }}
      />

      {/* Hero */}
      <header className="bg-[#FEB800] py-16 px-4 md:px-8 pt-24">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><span className="mx-2">›</span></li>
              <li><span className="font-semibold">Calculadora de Nota de Corte</span></li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Nota de Corte 2024 · Madrid</h1>
              <p className="text-lg md:text-xl mb-4">Calcula tu nota de admisión (sobre 14) y comprueba si alcanzas la nota de corte.</p>
              <p className="mb-8 text-gray-700">Introduce tus calificaciones (0–10) y el grado. La calculadora aplica la fórmula oficial y ponderaciones de Madrid.</p>
              <div className="flex justify-start">
                <Link href="/madrid/seletest" className="btn bg-white text-[#FFB800] hover:bg-white/90 border-2 border-[#FFB800] font-bold px-8 py-3 rounded-full transition-all shadow">
                  Practica con SeleTest
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
            </div>
          </div>
        </div>
      </header>

      {/* Calculadora */}
      <section className="py-12 px-4 md:px-8 bg-gray-50" id="calculadora">
        <div className="mx-auto max-w-4xl">
          <h2 className="sr-only">Calculadora de Nota de Corte</h2>

          <div className="space-y-6">
            {/* Formulario estilo tarjeta única */}
            <div className="bg-white rounded-2xl shadow p-6 border">
              <h2 className="text-xl font-bold mb-4">Nota de Bachillerato</h2>
              <div className="space-y-4">
                <div>
                  <label className="sr-only">Nota de Bachillerato (NMB)</label>
                  <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <input placeholder="Nota de Bachillerato" type="number" step="0.01" min={0} max={10} value={nmb} onChange={(e) => setNmb(Number(e.target.value))} className="w-full bg-transparent outline-none" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Entre 0 y 10. Se aplica 0,6×NMB.</p>
                </div>
                <h3 className="text-lg font-semibold mt-6">Fase General</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="sr-only">Lengua Castellana y Literatura II</label>
                    <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <input placeholder="Lengua Castellana y Literatura II" type="number" step="0.01" min={0} max={10} value={lengua} onChange={(e) => setLengua(Number(e.target.value))} className="w-full bg-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only">Historia de España</label>
                    <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <input placeholder="Historia de España" type="number" step="0.01" min={0} max={10} value={historia} onChange={(e) => setHistoria(Number(e.target.value))} className="w-full bg-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only">Primera Lengua Extranjera II (Inglés)</label>
                    <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <input placeholder="Primera Lengua Extranjera II (Inglés)" type="number" step="0.01" min={0} max={10} value={ingles} onChange={(e) => setIngles(Number(e.target.value))} className="w-full bg-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Troncal general de modalidad</label>
                    <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <div className="grid grid-cols-2 gap-2 items-center">
                        <select value={modality} onChange={(e) => setModality(e.target.value as any)} className="select select-bordered">
                          <option value="Ciencias">Ciencias · Matemáticas II</option>
                          <option value="Ciencias Sociales">Ciencias Sociales · Matemáticas aplicadas a las CCSS II</option>
                          <option value="Humanidades">Humanidades · Latín II</option>
                          <option value="Artes">Artes · Fundamentos del Arte II</option>
                        </select>
                        <input placeholder={generalLabel} type="number" step="0.01" min={0} max={10} value={optativaNota} onChange={(e) => setOptativaNota(Number(e.target.value))} className="w-full bg-transparent outline-none" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">La CFG es la media de Lengua, Historia, Inglés y esta troncal.</p>
                  </div>
                </div>

                {/* Avanzadas ocultas para parecerse al mockup */}
                <details className="mt-2">
                  <summary className="text-sm text-gray-600 cursor-pointer">Opcions avançades (ponderacions per grau)</summary>
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Grau</label>
                    <select value={degree} onChange={(e) => setDegree(e.target.value as DegreeKey)} className="select select-bordered w-full">
                      {(Object.keys(degreeWeights) as DegreeKey[]).map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.entries(weights).map(([s, w]) => (
                        <span key={s} className="px-2 py-1 text-xs rounded-full border bg-gray-50">{s}: <span className="font-semibold">{w.toFixed(1)}</span></span>
                      ))}
                    </div>
                  </div>
                </details>

                <div>
                  <label className="block text-sm font-medium mb-2">Fase específica</label>
                  <div className="space-y-2">
                    {specific.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-6">
                          <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                            <input
                              placeholder={idx === 0 ? 'Específica 1' : 'Específica 2'}
                              value={row.subject}
                              onChange={(e) => updateSpecific(idx, { subject: e.target.value })}
                              className="w-full bg-transparent outline-none"
                            />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <select
                            value={(row.weight ?? (weights[row.subject] ?? 0)).toFixed(1)}
                            onChange={(e) => updateSpecific(idx, { weight: Number(e.target.value) })}
                            className="select select-bordered w-full"
                          >
                            <option value="0.0">0.0</option>
                            <option value="0.1">0.1</option>
                            <option value="0.2">0.2</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
                            <input
                              placeholder={idx === 0 ? 'Específica 1' : 'Específica 2'}
                              type="number"
                              step="0.01"
                              min={0}
                              max={10}
                              value={row.grade}
                              onChange={(e) => updateSpecific(idx, { grade: Number(e.target.value) })}
                              className="w-full bg-transparent outline-none"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-xs text-gray-600 text-right">{round3((row.weight ?? (weights[row.subject] ?? 0)) * row.grade).toFixed(2)}</div>
                        <div className="col-span-1 text-right">
                          {specific.length > 1 && (
                            <button type="button" className="btn btn-ghost btn-xs" onClick={() => removeSpecific(idx)}>−</button>
                          )}
                        </div>
                      </div>
                    ))}
                    <div>
                      {specific.length < 4 && (
                        <button type="button" className="btn btn-outline btn-sm" onClick={() => setSpecific([...specific, { subject: 'Matemáticas II', grade: 0 }])}>
                          + Añadir asignatura
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <a href="#resultado" className="btn bg-[#FFB800] hover:bg-[#ffc835] border-none text-black">Calcular nota</a>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div id="resultado" className="bg-white rounded-2xl shadow p-6 border">
              <h2 className="text-xl font-bold mb-3">Resultado</h2>
              <div className="mb-4 flex items-center justify-between rounded-xl border p-3 bg-gray-50">
                <div>
                  <div className="text-xs text-gray-500">Nota final</div>
                  <div className="text-2xl font-extrabold">{finalScore.toFixed(3)} / 14</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${passes ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                  {passes ? 'Accedes' : 'No accedes'}
                </span>
              </div>

              <div className="space-y-4 text-sm">

                <div>
                  <div className="font-semibold">Paso 1: Fase general (CFG)</div>
                  <p>CFG = media(Lengua Castellana y Literatura II, Historia de España, Primera Lengua Extranjera II, {generalLabel}) = {cfg.toFixed(2)} / 10</p>
                </div>

                <div>
                  <div className="font-semibold">Paso 2: Base</div>
                  <p>
                    Base = 0,6×NMB + 0,4×CFG = 0,6×{nmbClamped.toFixed(2)} + 0,4×{cfg.toFixed(2)} ={' '}
                    {round3(0.6 * nmbClamped + 0.4 * cfg).toFixed(3)}
                  </p>
                </div>

                <div>
                  <div className="font-semibold">Paso 3: Ponderación específica ({degree})</div>
                  {boosters.top2.length === 0 ? (
                    <p>No hay materias ≥ 5 con ponderación válida.</p>
                  ) : (
                    <ul className="list-disc ml-6">
                      {boosters.top2.map((e, i) => (
                        <li key={i}>
                          {e.subject}: {e.grade.toFixed(2)} × ponderación {e.weight.toFixed(2)} = {e.contribution.toFixed(3)}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-1">Suma ponderada específica = {boosters.total.toFixed(3)}</p>
                </div>

                <div className="text-lg font-bold">
                  Nota final (sobre 14) = {finalScore.toFixed(3)}
                </div>

                <div className="mt-2">
                  <div className="font-semibold">Comparativa con nota de corte {degree} (último curso)</div>
                  <p>
                    Tu nota: <span className="font-semibold">{finalScore.toFixed(3)}</span> · Nota de corte: <span className="font-semibold">{cutoff.toFixed(2)}</span>
                  </p>
                  <p className={passes ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                    {passes ? '✓ Con esta nota, accedes (igualas o superas la nota de corte).' : '✗ No alcanza la nota de corte.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Secciones informativas */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">¿Cómo se calcula?</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="font-semibold text-lg mb-2">Nota de acceso = 0,6 × NMB + 0,4 × CFG</p>
              <p className="text-sm mt-2 font-medium">Donde:</p>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>NMB = Nota media de Bachillerato</li>
                <li>CFG = Media de Lengua, Historia, Inglés y Optativa</li>
              </ul>
            </div>
            <p>A esta nota se suman las específicas ponderadas: a×M1 + b×M2 (máx. +4 puntos).</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Fase específica</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Se consideran las dos mejores específicas ≥ 5</li>
              <li>Cada materia pondera 0,1 o 0,2 según el grado</li>
              <li>Elige estratégicamente según las ponderaciones</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )

  function updateSpecific(index: number, patch: Partial<SpecificEntry>) {
    setSpecific((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)))
  }
  function removeSpecific(index: number) {
    setSpecific((prev) => prev.filter((_, i) => i !== index))
  }
}

function clamp(n: number) {
  if (isNaN(n)) return 0
  return Math.max(0, Math.min(10, n))
}

function round2(n: number) {
  return Math.round(n * 100) / 100
}
function round3(n: number) {
  return Math.round(n * 1000) / 1000
}


