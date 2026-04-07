"use client"
import { useMemo, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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

const cutoffsValencia: Record<DegreeKey, number> = {
  Medicina: 13.4,
  'Ingeniería Informática': 11.5,
  ADE: 10.2,
  Derecho: 10.8,
  Psicología: 11.9,
}

type SpecificEntry = { subject: string; grade: number; weight?: number }

export default function CalculadoraValenciaPage() {
  const [nmb, setNmb] = useState<number>(0)
  const [castellano, setCastellano] = useState<number>(0)
  const [valenciano, setValenciano] = useState<number>(0)
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
    const vals = [castellano, valenciano, historia, ingles, optativaNota].map((v) => clamp(v))
    const avg = vals.reduce((a, b) => a + b, 0) / 5
    return round2(avg)
  }, [castellano, valenciano, historia, ingles, optativaNota])

  const weights = degreeWeights[degree]
  const modalityLabelMap = {
    'Ciencias': 'Matemáticas II',
    'Ciencias Sociales': 'Matemáticas aplicadas a las CCSS II',
    'Humanidades': 'Latín II',
    'Artes': 'Fundamentos del Arte II',
  } as const
  const generalLabel = modalityLabelMap[modality]

  const boosters = useMemo(() => {
    const entries = specific
      .filter((e) => e.grade >= 5)
      .map((e) => {
        const w = e.weight ?? (weights[e.subject] ?? 0.1)
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

  const cutoff = cutoffsValencia[degree]
  const passes = finalScore >= cutoff

  const updateSpecific = (index: number, patch: Partial<SpecificEntry>) => {
    setSpecific((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)))
  }
  const removeSpecific = (index: number) => {
    setSpecific((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <header className="bg-[#FF9500] py-16 px-4 md:px-8 pt-24 text-white">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="/valencia" className="hover:underline">València</a></li>
              <li><span className="mx-2">›</span></li>
              <li><span className="font-semibold">Calculadora PAU</span></li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Nota PAU València</h1>
              <p className="text-lg md:text-xl mb-4">Calcula tu nota de admisión sobre 14 puntos siguiendo la normativa de la Comunitat Valenciana.</p>
              <p className="mb-8 text-white/80">Recuerda que en la Comunitat la fase obligatoria consta de 5 asignaturas (incluyendo Valenciano).</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 md:px-8 bg-gray-50" id="calculadora">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 border text-black">
              <h2 className="text-xl font-bold mb-1">Introduce tus notas</h2>
              <p className="text-sm text-gray-600 mb-6">Usa valores del 0 al 10. No olvides la nota de Bachillerato.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nota Media de Bachillerato (NMB)</label>
                  <input 
                    type="number" 
                    step="0.01" 
                    min={0} 
                    max={10} 
                    value={nmb} 
                    onChange={(e) => setNmb(Number(e.target.value))} 
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#FF9500] bg-white text-black" 
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Fase Obligatoria (5 materias)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Castellano: Lengua y Lit. II</label>
                      <input type="number" step="0.01" value={castellano} onChange={(e) => setCastellano(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Valenciano: Lengua y Lit. II</label>
                      <input type="number" step="0.01" value={valenciano} onChange={(e) => setValenciano(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Historia / Filosofía</label>
                      <input type="number" step="0.01" value={historia} onChange={(e) => setHistoria(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Inglés II</label>
                      <input type="number" step="0.01" value={ingles} onChange={(e) => setIngles(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Asignatura de Modalidad</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select value={modality} onChange={(e) => setModality(e.target.value as any)} className="rounded-xl border border-gray-200 px-4 py-3 bg-white text-black text-sm">
                        <option value="Ciencias">Matemáticas II</option>
                        <option value="Ciencias Sociales">Matemáticas CCSS II</option>
                        <option value="Humanidades">Latín II</option>
                        <option value="Artes">Fundamentos del Arte II</option>
                      </select>
                      <input type="number" step="0.01" value={optativaNota} onChange={(e) => setOptativaNota(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Fase Voluntaria (Específicas)</h3>
                  {specific.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-6">
                        <input
                          placeholder="Asignatura específica"
                          value={row.subject}
                          onChange={(e) => updateSpecific(idx, { subject: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <select
                          value={(row.weight ?? 0.1).toFixed(1)}
                          onChange={(e) => updateSpecific(idx, { weight: Number(e.target.value) })}
                          className="w-full rounded-xl border border-gray-200 px-2 py-3 bg-white text-black text-sm"
                        >
                          <option value="0.1">0.1</option>
                          <option value="0.2">0.2</option>
                        </select>
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          step="0.01"
                          value={row.grade}
                          onChange={(e) => updateSpecific(idx, { grade: Number(e.target.value) })}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-black"
                        />
                      </div>
                      <div className="col-span-1 text-right">
                        <button onClick={() => removeSpecific(idx)} className="text-red-500 font-bold">×</button>
                      </div>
                    </div>
                  ))}
                  <button 
                    type="button" 
                    onClick={() => setSpecific([...specific, { subject: '', grade: 0 }])}
                    className="text-sm font-bold text-[#FF9500] hover:underline"
                  >
                    + Añadir asignatura específica
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 border text-center text-black">
              <h2 className="text-xl font-bold mb-4">Tu puntuación estimada</h2>
              <div className="inline-block bg-[#FF9500]/10 rounded-3xl px-10 py-6 border border-[#FF9500]/20 mb-6">
                <div className="text-5xl font-black text-[#FF9500]">{finalScore.toFixed(3)}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">sobre 14 puntos</div>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <div className="flex justify-between text-sm border-b pb-2">
                  <span className="text-gray-600">Nota Media Bachillerato (60%)</span>
                  <span className="font-bold">{(0.6 * nmbClamped).toFixed(3)}</span>
                </div>
                <div className="flex justify-between text-sm border-b pb-2">
                  <span className="text-gray-600">Fase Obligatoria (40%)</span>
                  <span className="font-bold">{(0.4 * cfg).toFixed(3)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Puntos Fase Específicas</span>
                  <span className="font-bold text-green-600">+{boosters.total.toFixed(3)}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <p className="text-xs text-gray-400">
                  Fórmula: (0.6 * NMB) + (0.4 * CFG) + (a * M1) + (b * M2)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
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
