import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "calcular nota acceso universidad",
  "nota de corte españa 2026",
  "calculadora nota selectividad",
  "nota admisión universidad",
  "ponderaciones selectividad",
  "calcular nota selectividad 2026",
];

export const metadata: Metadata = {
  title:
    "Cómo Calcular tu Nota de Acceso a la Universidad 2026 | Guía Completa España",
  description:
    "Guía definitiva para calcular tu nota de acceso a la universidad en España 2026. Fórmulas, ponderaciones, ejemplos reales y calculadora gratuita. Descubre qué nota necesitas realmente.",
  keywords,
  alternates: {
    canonical: "/blog/calcular-nota-acceso-universidad-espana-2026",
  },
  openGraph: {
    title: "Cómo Calcular tu Nota de Acceso Universidad 2026 | España",
    description:
      "Fórmulas, ponderaciones y ejemplos paso a paso. Calcula tu nota real de acceso y descubre qué necesitas para entrar a tu universidad soñada.",
    type: "article",
  },
};

const phases = [
  {
    phase: "Fase de Acceso",
    maxScore: "10 puntos",
    components: [
      "40% nota media Bachillerato",
      "60% nota media Selectividad (mínimo 4)",
    ],
    example: "Bachillerato 8.5 + Selectividad 7.5 = (8.5×0.4) + (7.5×0.6) = 7.9",
  },
  {
    phase: "Fase de Admisión",
    maxScore: "+4 puntos",
    components: [
      "Hasta 4 asignaturas de la fase voluntaria",
      "Solo cuentan las 2 mejores ponderadas",
      "Ponderación 0.1 o 0.2 según universidad y grado",
    ],
    example: "Matemáticas 9 (×0.2) + Física 8.5 (×0.2) = 1.8 + 1.7 = 3.5 extra",
  },
];

const formula = {
  simple: "NFA = (Bachillerato × 0.4) + (Selectividad × 0.6)",
  complete: "Nota Final = NFA + (M1×a) + (M2×b)",
  where: [
    "NFA = Nota Fase Acceso (sobre 10)",
    "M1, M2 = Tus 2 mejores notas de fase voluntaria",
    "a, b = Ponderaciones de esas materias (0.1 o 0.2)",
  ],
};

const commonMistakes = [
  {
    mistake: "❌ Confundir nota de corte con nota mínima",
    reality: "La nota de corte es la del ÚLTIMO que entró. Tú necesitas SUPERARLA.",
    impact: "Quedarte fuera pensando que 'llegabas justo'",
  },
  {
    mistake: "❌ No elegir bien las materias a ponderar",
    reality: "Elegir materias que ponderan 0.1 en lugar de 0.2 te cuesta hasta 2 puntos",
    impact: "Perder ventaja competitiva por no investigar",
  },
  {
    mistake: "❌ Solo mirar la nota de corte del año pasado",
    reality: "Las notas de corte CAMBIAN cada año según demanda y plazas",
    impact: "Sorpresas desagradables en septiembre",
  },
  {
    mistake: "❌ No tener plan B ni C",
    reality: "Incluso con buena nota, hay que tener alternativas",
    impact: "Quedarte sin plaza por no haber preinscrito otras opciones",
  },
];

const examples = [
  {
    title: "Caso 1: Entrada ajustada a Medicina Madrid",
    bachillerato: 9.2,
    selectividadAcceso: 8.5,
    voluntary: [
      { subject: "Biología", grade: 9.5, weight: 0.2 },
      { subject: "Química", grade: 9.0, weight: 0.2 },
    ],
    calculation: [
      "NFA = (9.2 × 0.4) + (8.5 × 0.6) = 3.68 + 5.1 = 8.78",
      "Fase admisión = (9.5 × 0.2) + (9.0 × 0.2) = 1.9 + 1.8 = 3.7",
      "NOTA FINAL = 8.78 + 3.7 = 12.48",
    ],
    notaCorte: "12.956 (Complutense 2024)",
    result: "❌ NO entra (le falta 0.476)",
    lesson: "Necesitaría mejorar 0.5 puntos en las voluntarias o Bachillerato",
  },
  {
    title: "Caso 2: Entrada segura a Ingeniería Informática",
    bachillerato: 7.8,
    selectividadAcceso: 7.2,
    voluntary: [
      { subject: "Matemáticas II", grade: 9.0, weight: 0.2 },
      { subject: "Física", grade: 8.5, weight: 0.2 },
    ],
    calculation: [
      "NFA = (7.8 × 0.4) + (7.2 × 0.6) = 3.12 + 4.32 = 7.44",
      "Fase admisión = (9.0 × 0.2) + (8.5 × 0.2) = 1.8 + 1.7 = 3.5",
      "NOTA FINAL = 7.44 + 3.5 = 10.94",
    ],
    notaCorte: "10.520 (Politécnica Madrid 2024)",
    result: "✅ ENTRA con margen de 0.42",
    lesson: "Margen cómodo. Puede relajarse un poco o apuntar a otra universidad mejor",
  },
  {
    title: "Caso 3: Error en selección de materias",
    bachillerato: 8.5,
    selectividadAcceso: 8.0,
    voluntary: [
      { subject: "Dibujo Técnico", grade: 9.5, weight: 0.1 },
      { subject: "Economía", grade: 9.0, weight: 0.1 },
    ],
    calculation: [
      "NFA = (8.5 × 0.4) + (8.0 × 0.6) = 3.4 + 4.8 = 8.2",
      "Fase admisión = (9.5 × 0.1) + (9.0 × 0.1) = 0.95 + 0.9 = 1.85",
      "NOTA FINAL = 8.2 + 1.85 = 10.05",
    ],
    alternative: "Si hubiera elegido materias con 0.2: 8.2 + 3.7 = 11.9",
    result: "❌ Perdió 1.85 puntos por mala elección",
    lesson: "SIEMPRE verifica qué materias ponderan 0.2 en tu grado objetivo",
  },
];

const actionSteps = [
  {
    step: "1",
    title: "Usa la calculadora para saber tu nota actual",
    description: "Introduce tus notas reales o estimadas para ver dónde estás",
    cta: "Ir a la Calculadora",
    link: "/calculadora",
  },
  {
    step: "2",
    title: "Consulta las notas de corte de tu grado",
    description: "Busca en todas las universidades que te interesan",
    cta: "Ver Notas de Corte",
    link: "/notas-de-corte",
  },
  {
    step: "3",
    title: "Identifica la BRECHA entre tu nota y la de corte",
    description: "Si te falta 1+ puntos, necesitas un plan de acción YA",
    cta: null,
    link: null,
  },
  {
    step: "4",
    title: "ENTRENA para subir tu nota de Selectividad",
    description: "Cada 0.5 puntos en Selectividad = 0.3 en tu nota final",
    cta: "Entrenar con SeleTest",
    link: "/madrid/seletest",
  },
];

const realityCheck = {
  title: "⚠️ La verdad que nadie te cuenta sobre las notas de corte",
  truths: [
    {
      myth: "Si saco la nota de corte exacta, entro",
      reality: "NO. La nota de corte es la del último que entró el año pasado. Puede subir.",
      recommendation: "Apunta a +0.5 puntos por encima de la nota de corte",
    },
    {
      myth: "La nota de Bachillerato ya está cerrada, no puedo hacer nada",
      reality: "FALSO. La nota de Selectividad vale el 60%. Ahí puedes subir mucho.",
      recommendation: "Enfócate en sacar 8.5-9 en Selectividad con práctica constante",
    },
    {
      myth: "Con un 5 en Selectividad apruebo y ya está",
      reality: "Aprobar ≠ Entrar. Con 5 tu nota final será baja para grados demandados.",
      recommendation: "No te conformes con aprobar. Apunta a 7.5+ para tener opciones reales",
    },
  ],
};

const faqs = [
  {
    question: "¿Qué pasa si mi nota está 0.2 puntos por debajo de la nota de corte?",
    answer:
      "Tienes dos opciones: 1) Esperar a la segunda convocatoria (julio) donde la nota suele bajar un poco, o 2) Elegir otra universidad/ciudad donde la nota de corte sea más baja para ese mismo grado. Por 0.2 puntos vale la pena intentarlo en julio antes de tirar la toalla.",
  },
  {
    question: "¿Cómo sé qué materias ponderan 0.2 en mi grado objetivo?",
    answer:
      "Cada universidad publica las ponderaciones en su web de admisión. Busca 'parámetros de ponderación [nombre de la universidad]' o consulta nuestra sección de Notas de Corte donde indicamos las materias que ponderan. Generalmente, para carreras de ciencias ponderan Matemáticas, Física, Química y Biología.",
  },
  {
    question: "Si saco muy buena nota en Bachillerato, ¿puedo relajarme en Selectividad?",
    answer:
      "¡NO! La Selectividad vale el 60% de tu nota de acceso, vs el 40% de Bachillerato. Además, necesitas mínimo un 4 en Selectividad para que cuente. Aunque tengas un 10 en Bachillerato, si suspendes Selectividad, NO ENTRAS. La Selectividad es igual o más importante que Bachillerato.",
  },
  {
    question: "¿Vale la pena hacer la fase voluntaria si ya tengo buena nota?",
    answer:
      "SÍ, SIEMPRE. Incluso si tu nota de acceso es buena, la fase voluntaria puede darte hasta 4 puntos extra. Eso significa pasar de un 9 a un 13, lo cual te abre puertas a grados super competitivos o te da margen de seguridad. Además, si te va mal en alguna prueba de acceso, la voluntaria puede compensarlo.",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-700 text-white text-xs font-bold tracking-wide px-4 py-1.5 uppercase">
            📊 GUÍA COMPLETA 2026
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
            Cómo calcular tu<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
              Nota de Acceso
            </span><br />
            a la Universidad 2026
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
            La guía definitiva con <strong>fórmulas, ponderaciones, ejemplos reales</strong> y 
            calculadora gratuita. Descubre qué nota necesitas realmente y cómo conseguirla.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculadora"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              🧮 Usar Calculadora Gratis
            </Link>
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Entrenar para subir nota
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {keywords.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-sm bg-white/90 border border-green-200 text-green-900 rounded-full px-4 py-1.5 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="flex-1">
        {/* Las 2 fases */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            🎯 Las 2 fases que determinan tu acceso
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Tu nota final se calcula combinando estas dos fases
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-green-200 bg-white p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {phase.phase}
                  </h3>
                  <span className="rounded-full bg-green-100 px-4 py-2 text-xl font-black text-green-700">
                    {phase.maxScore}
                  </span>
                </div>

                <div className="rounded-2xl bg-green-50 border border-green-200 p-6 mb-6">
                  <p className="text-sm font-bold text-green-900 mb-3">Componentes:</p>
                  <ul className="space-y-2">
                    {phase.components.map((comp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-800">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-bold text-gray-900 mb-2">Ejemplo:</p>
                  <p className="text-gray-700 font-mono text-sm">{phase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fórmula */}
        <section className="bg-gradient-to-b from-green-50 to-white py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
              🧮 La fórmula completa explicada
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="rounded-3xl border-2 border-green-300 bg-white p-10 text-center">
                <p className="text-sm font-bold text-green-900 mb-4">FÓRMULA BÁSICA (Fase Acceso)</p>
                <p className="text-2xl md:text-3xl font-black text-gray-900 font-mono mb-4">
                  {formula.simple}
                </p>
                <p className="text-gray-600">Esta te da la nota sobre 10</p>
              </div>

              <div className="rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-green-50 p-10 text-center">
                <p className="text-sm font-bold text-emerald-900 mb-4">FÓRMULA COMPLETA (Acceso + Admisión)</p>
                <p className="text-2xl md:text-3xl font-black text-gray-900 font-mono mb-6">
                  {formula.complete}
                </p>
                <div className="text-left space-y-2 bg-white rounded-2xl p-6 border border-emerald-200">
                  <p className="text-sm font-bold text-gray-900 mb-2">Donde:</p>
                  {formula.where.map((item, i) => (
                    <p key={i} className="text-gray-700 text-sm font-mono">• {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                <strong>¿Quieres verlo en acción con tus notas?</strong><br />
                Usa nuestra calculadora y luego entrena para mejorar tu resultado
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculadora"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white font-bold px-8 py-4 text-lg hover:bg-green-700 transition"
                >
                  🧮 Calcular mi nota
                </Link>
                <Link
                  href="/madrid/seletest"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-8 py-4 text-lg hover:shadow-lg transition"
                >
                  🎯 Subir mi nota con SeleTest
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Errores comunes */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            ⚠️ 4 errores que TODOS cometen al calcular
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Evita estos errores y no te quedes fuera por desinformación
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-red-200 bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-red-700 mb-4">
                  {mistake.mistake}
                </h3>
                <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4 mb-4">
                  <p className="text-sm font-bold text-blue-900 mb-2">✅ La realidad:</p>
                  <p className="text-gray-800">{mistake.reality}</p>
                </div>
                <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
                  <p className="text-sm font-bold text-red-900 mb-2">💀 Impacto:</p>
                  <p className="text-gray-800">{mistake.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              💡 Calcular tu nota es el primer paso.<br />
              SUBIRLA es lo que importa.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Si tu nota calculada está por debajo de tu objetivo, no te preocupes.<br />
              <strong>Cada 0.5 puntos que subas en Selectividad = 0.3 en tu nota final.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-white text-green-600 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition shadow-2xl"
              >
                🚀 Entrenar con SeleTest
              </Link>
              <Link
                href="/calculadora"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white font-bold px-10 py-5 text-xl hover:bg-white/10 transition"
              >
                Calcular primero
              </Link>
            </div>
          </div>
        </section>

        {/* Ejemplos reales */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            📐 3 Ejemplos reales paso a paso
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Aprende de estos casos reales y evita sus errores
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {examples.map((ex, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-gray-200 bg-white p-8 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{ex.title}</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
                      <p className="text-sm font-bold text-blue-900 mb-1">📚 Bachillerato:</p>
                      <p className="text-2xl font-black text-gray-900">{ex.bachillerato}</p>
                    </div>
                    <div className="rounded-2xl bg-purple-50 border border-purple-200 p-4">
                      <p className="text-sm font-bold text-purple-900 mb-1">📝 Selectividad:</p>
                      <p className="text-2xl font-black text-gray-900">{ex.selectividadAcceso}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
                    <p className="text-sm font-bold text-green-900 mb-2">Voluntarias:</p>
                    {ex.voluntary.map((vol, i) => (
                      <div key={i} className="flex justify-between mb-2">
                        <span className="text-gray-800">{vol.subject}:</span>
                        <span className="font-bold text-gray-900">{vol.grade} (×{vol.weight})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6 mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3">📊 Cálculo paso a paso:</p>
                  <div className="space-y-2 font-mono text-sm">
                    {ex.calculation.map((calc, i) => (
                      <p key={i} className="text-gray-800">{calc}</p>
                    ))}
                  </div>
                </div>

                {ex.alternative && (
                  <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-4 mb-4">
                    <p className="text-sm font-bold text-yellow-900 mb-2">💡 Alternativa:</p>
                    <p className="text-gray-800 font-mono text-sm">{ex.alternative}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className={`flex-1 rounded-2xl p-4 border-2 ${
                    ex.result.startsWith('✅') 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-red-50 border-red-300'
                  }`}>
                    <p className="text-sm font-bold mb-1">Nota de corte:</p>
                    <p className="text-lg font-black text-gray-900">{ex.notaCorte}</p>
                  </div>
                  <div className={`flex-1 rounded-2xl p-4 border-2 ${
                    ex.result.startsWith('✅') 
                      ? 'bg-green-100 border-green-400' 
                      : 'bg-red-100 border-red-400'
                  }`}>
                    <p className="text-lg font-black">{ex.result}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-4">
                  <p className="text-sm font-bold text-indigo-900 mb-2">🎓 Lección:</p>
                  <p className="text-gray-900 font-medium">{ex.lesson}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              <strong>¿Viste cómo pequeñas diferencias cambian todo?</strong><br />
              Usa la calculadora y luego entrena para estar en el lado correcto.
            </p>
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-10 py-4 text-lg hover:shadow-lg transition"
            >
              Mejorar mi nota con SeleTest →
            </Link>
          </div>
        </section>

        {/* Reality check */}
        <section className="bg-gradient-to-b from-white to-red-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
              {realityCheck.title}
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {realityCheck.truths.map((truth, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-red-200 bg-white p-8"
                >
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                    <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                      <p className="text-sm font-bold text-gray-600 mb-2">❌ Mito:</p>
                      <p className="text-gray-900 font-bold">{truth.myth}</p>
                    </div>
                    <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
                      <p className="text-sm font-bold text-red-900 mb-2">💥 Realidad:</p>
                      <p className="text-gray-900 font-medium">{truth.reality}</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-green-50 border border-green-200 p-4">
                    <p className="text-sm font-bold text-green-900 mb-2">✅ Qué hacer:</p>
                    <p className="text-gray-900 font-medium">{truth.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan de acción */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            📋 Tu plan de acción en 4 pasos
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Sigue este orden para maximizar tu nota de acceso
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {actionSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border-2 border-green-200 bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-black text-xl">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">{step.description}</p>
                {step.cta && step.link && (
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white font-bold px-6 py-3 hover:bg-green-700 transition"
                  >
                    {step.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
            ❓ Preguntas frecuentes sobre notas
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-start justify-between cursor-pointer font-bold text-lg text-gray-900">
                  <span className="flex-1">{faq.question}</span>
                  <span className="ml-4 text-green-600 group-open:rotate-45 transition-transform text-2xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ya sabes calcular tu nota.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Ahora es momento de MEJORARLA.
              </span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Cada punto que subas en Selectividad multiplica tus opciones de universidad.<br />
              <strong className="text-white">No dejes tu futuro al azar.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-4xl font-black text-green-400 mb-2">+2,000</div>
                <p className="text-white/80">Preguntas para practicar</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-4xl font-black text-green-400 mb-2">24/7</div>
                <p className="text-white/80">Acceso ilimitado</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                <p className="text-white/80">Adaptado a 2026</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-10 py-5 text-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Entrenar con SeleTest
              </Link>
              <Link
                href="/calculadora"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition"
              >
                🧮 Usar calculadora
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              ✓ Gratis para empezar  ✓ Corrección instantánea  ✓ Progreso medible
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

