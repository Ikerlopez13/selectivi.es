import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "selectividad 2026 más difícil",
  "selectividad 2026 complicada",
  "pau 2026 dificultad",
  "ebau 2026 difícil",
  "nueva selectividad 2026",
  "reforma selectividad 2026",
  "preparar selectividad 2026",
];

export const metadata: Metadata = {
  title:
    "¿Será la Selectividad 2026 la MÁS COMPLICADA de la historia? | La Verdad",
  description:
    "Descubre por qué la Selectividad 2026 podría ser la más complicada de la historia. Nuevos ejercicios competenciales, criterios más exigentes y cambios radicales. ¿Estás preparado?",
  keywords,
  alternates: {
    canonical: "/blog/selectividad-2026-mas-complicada-historia",
  },
  openGraph: {
    title: "🚨 ¿Será la Selectividad 2026 la MÁS DIFÍCIL de la historia?",
    description:
      "La reforma LOMLOE trae cambios radicales que podrían hacer de 2026 la selectividad más exigente jamás vista. Te contamos la verdad.",
    type: "article",
  },
};

const warnings = [
  {
    emoji: "⚠️",
    title: "Ejercicios competenciales desconocidos",
    impact: "ALTO",
    copy: "Por primera vez, un 30-40% del examen será competencial. Nadie ha hecho esto antes.",
  },
  {
    emoji: "📊",
    title: "Criterios de corrección más duros",
    impact: "MUY ALTO",
    copy: "La ortografía y expresión pesan mínimo un 20%. Cada falta puede costarte décimas críticas.",
  },
  {
    emoji: "🎯",
    title: "Menos opcionalidad, más presión",
    impact: "ALTO",
    copy: "Menos preguntas a elegir, más contenido obligatorio. No podrás 'saltarte' temas incómodos.",
  },
];

const comparisons = [
  {
    year: "Selectividad Pre-2025",
    difficulty: "⭐⭐⭐",
    description: "Formato clásico memorístico. Podías aprobar con solo repasar.",
  },
  {
    year: "Selectividad 2025",
    difficulty: "⭐⭐⭐⭐",
    description: "Primeros ejercicios competenciales. Transición suave.",
  },
  {
    year: "Selectividad 2026",
    difficulty: "⭐⭐⭐⭐⭐",
    description: "Competencial completo + criterios unificados. Nivel máximo.",
  },
];

const reality = [
  {
    myth: "❌ \"Es imposible aprobar\"",
    truth: "✅ Es más exigente, pero CON PREPARACIÓN ADECUADA es totalmente aprobable",
  },
  {
    myth: "❌ \"No hay recursos para prepararse\"",
    truth: "✅ Existen plataformas específicas (como SeleTest) que entrenan estas competencias",
  },
  {
    myth: "❌ \"Solo los genios aprobarán\"",
    truth: "✅ La clave es la PRÁCTICA CONSTANTE, no el talento natural",
  },
];

const actionPlan = [
  {
    step: "1",
    title: "Empieza YA (no esperes a último momento)",
    actions: [
      "Registrate en una plataforma de práctica adaptativa",
      "Haz un diagnóstico de tu nivel actual",
      "Identifica tus puntos débiles en competencias",
    ],
  },
  {
    step: "2",
    title: "Practica ejercicios competenciales REALES",
    actions: [
      "Al menos 3 ejercicios competenciales por semana",
      "Practica con contextos reales (gráficos, casos, artículos)",
      "Corrige con rúbricas oficiales",
    ],
  },
  {
    step: "3",
    title: "Cuida tu expresión y presentación",
    actions: [
      "Revisa cada texto antes de entregar",
      "Practica redacciones con límite de tiempo",
      "Usa correctores ortográficos en tus estudios",
    ],
  },
  {
    step: "4",
    title: "Haz simulacros completos mensuales",
    actions: [
      "Simula condiciones reales de examen",
      "Cronometra cada prueba",
      "Analiza tus errores y mejora",
    ],
  },
];

const faqs = [
  {
    question: "¿Por qué dicen que la Selectividad 2026 será la más difícil?",
    answer:
      "Por tres razones principales: 1) Es el primer año con ejercicios competenciales con peso significativo (30-40%), 2) Los criterios de corrección son más estrictos y unificados en todas las comunidades, y 3) Hay menos opcionalidad en las preguntas, lo que significa que debes dominar TODO el temario.",
  },
  {
    question: "¿Qué son los ejercicios competenciales y por qué son tan difíciles?",
    answer:
      "Los ejercicios competenciales te piden resolver problemas reales usando información de múltiples fuentes (textos, gráficos, datos). No basta con memorizar: debes analizar, relacionar y argumentar. Son difíciles porque requieren habilidades que no se entrenan en el estudio tradicional.",
  },
  {
    question: "¿Cómo puedo prepararme si nadie ha hecho este tipo de examen antes?",
    answer:
      "Aunque es nuevo, YA existen modelos oficiales y plataformas especializadas. La clave es practicar con ejercicios tipo, familiarizarte con el formato, y entrenar las competencias específicas (análisis, síntesis, argumentación). SeleTest está diseñado específicamente para esto.",
  },
  {
    question: "¿Bajarán las notas de corte en 2026?",
    answer:
      "Es probable que SÍ bajen inicialmente, pero eso significa más competencia. Además, si todo el mundo saca notas más bajas, el que se prepare bien destacará mucho más. La clave no es depender de que bajen, sino prepararte para superar el nivel sea cual sea.",
  },
  {
    question: "¿Es demasiado tarde si empiezo ahora?",
    answer:
      "¡NO! Si estás leyendo esto, aún estás a tiempo. La mayoría de estudiantes empezarán a prepararse 2-3 meses antes. Si empiezas ahora, llevas MESES de ventaja. Con práctica constante y estratégica, puedes estar perfectamente preparado.",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      {/* Header alarmante y clickbait */}
      <header className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.15),_transparent_50%)]" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white text-xs font-bold tracking-wide px-4 py-1.5 uppercase animate-pulse">
            🚨 ALERTA EDUCATIVA
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
            ¿Será la Selectividad 2026<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
              la MÁS COMPLICADA
            </span>
            <br />
            de la historia?
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
            La reforma LOMLOE trae cambios radicales que podrían convertir 2026 en el año 
            más exigente para los estudiantes de Bachillerato. <strong>Esto es lo que NADIE te está contando.</strong>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              🎯 Prepárate AHORA con SeleTest
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Crear cuenta gratis
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {keywords.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-sm bg-white/90 border border-orange-200 text-orange-900 rounded-full px-4 py-1.5 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="flex-1">
        {/* Advertencias dramáticas */}
        <section className="bg-gradient-to-b from-red-50 to-white py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                ⚠️ 3 Cambios que lo cambian TODO
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Estos son los cambios que convierten la Selectividad 2026 en un desafío sin precedentes
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {warnings.map((warning) => (
                <div
                  key={warning.title}
                  className="relative rounded-3xl border-2 border-red-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
                      IMPACTO: {warning.impact}
                    </span>
                  </div>
                  <div className="text-5xl mb-4">{warning.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {warning.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {warning.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white font-bold px-8 py-4 text-lg hover:bg-red-700 transition"
              >
                No quiero quedarme atrás → Empezar a practicar
              </Link>
            </div>
          </div>
        </section>

        {/* Comparación de dificultad */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
            📊 Evolución de la dificultad
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Así ha evolucionado la exigencia de la Selectividad en los últimos años
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {comparisons.map((comp, index) => (
              <div
                key={comp.year}
                className={`rounded-3xl border-2 p-8 transition-all ${
                  index === 2
                    ? "border-red-600 bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-center">
                  {index === 2 && (
                    <span className="inline-block mb-4 text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-full">
                      NIVEL ACTUAL
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {comp.year}
                  </h3>
                  <div className="text-3xl mb-4">{comp.difficulty}</div>
                  <p className="text-gray-700 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio fuerte */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ⏰ Cada día que pasa sin prepararte<br />es una ventaja que pierdes
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Mientras tú lees esto, hay estudiantes que ya están practicando con SeleTest.<br />
              <strong>No dejes que te adelanten.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-white text-red-600 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition shadow-2xl"
              >
                🚀 Empezar ahora (es gratis)
              </Link>
              <Link
                href="/madrid/premium"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white font-bold px-10 py-5 text-xl hover:bg-white/10 transition"
              >
                ⭐ Ver plan Premium
              </Link>
            </div>
          </div>
        </section>

        {/* Mito vs Realidad */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            🔍 Mitos vs Realidad
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Separemos los miedos infundados de los desafíos reales
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {reality.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-orange-300 hover:shadow-xl transition-all"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{item.myth.split(" ")[0]}</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">MITO</p>
                      <p className="text-gray-700">{item.myth.replace("❌ ", "")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:border-l-2 md:border-green-200 md:pl-6">
                    <span className="text-3xl">{item.truth.split(" ")[0]}</span>
                    <div>
                      <p className="font-bold text-green-700 mb-2">REALIDAD</p>
                      <p className="text-gray-900 font-medium">{item.truth.replace("✅ ", "")}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plan de acción */}
        <section className="bg-gradient-to-b from-white to-orange-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                📋 Tu plan de acción para DOMINAR la Selectividad 2026
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Sigue estos 4 pasos y estarás por delante del 95% de estudiantes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {actionPlan.map((plan) => (
                <div
                  key={plan.step}
                  className="rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-xl">
                      {plan.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {plan.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {plan.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-orange-600 mt-1">✓</span>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block rounded-3xl bg-gradient-to-r from-orange-600 to-red-600 p-1">
                <Link
                  href="/login"
                  className="block rounded-3xl bg-white px-12 py-6"
                >
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                    ¿Listo para empezar?
                  </p>
                  <p className="text-gray-700 font-medium">
                    Regístrate gratis y accede a +2.000 preguntas tipo Selectividad 2026
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            💬 Preguntas que TODO el mundo está haciendo
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Las respuestas que necesitas antes de que sea demasiado tarde
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-start justify-between cursor-pointer font-bold text-lg text-gray-900">
                  <span className="flex-1">{faq.question}</span>
                  <span className="ml-4 text-orange-600 group-open:rotate-45 transition-transform text-2xl">
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

        {/* CTA final urgente */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              La pregunta NO es si será más difícil.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                La pregunta es: ¿estarás preparado?
              </span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Miles de estudiantes ya están usando SeleTest para entrenar las competencias 
              de la Selectividad 2026. <strong className="text-white">No te quedes atrás.</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex-1 max-w-xs">
                <div className="text-4xl font-black text-orange-400 mb-2">+5,000</div>
                <p className="text-white/80">Estudiantes preparándose</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex-1 max-w-xs">
                <div className="text-4xl font-black text-orange-400 mb-2">+2,000</div>
                <p className="text-white/80">Preguntas competenciales</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex-1 max-w-xs">
                <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
                <p className="text-white/80">Adaptado a reforma 2026</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-10 py-5 text-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Empezar a practicar GRATIS
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition"
              >
                Crear mi cuenta ahora
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              ✓ Sin tarjeta de crédito  ✓ Acceso inmediato  ✓ Cancela cuando quieras
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

