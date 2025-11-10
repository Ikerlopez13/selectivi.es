import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "trampa selectividad 2026",
  "criterios corrección selectividad",
  "expresión escrita selectividad",
  "ortografía selectividad 2026",
  "secretos selectividad 2026",
  "errores selectividad",
];

export const metadata: Metadata = {
  title:
    "💀 La Selectividad 2026 tiene una TRAMPA que nadie está viendo | Revelado",
  description:
    "Mientras estudias contenido, la Selectividad 2026 te suspenderá por ESTO. El 20% de tu nota depende de algo que nadie te está enseñando. Descubre la trampa antes de que sea tarde.",
  keywords,
  alternates: {
    canonical: "/blog/trampa-selectividad-2026-nadie-ve",
  },
  openGraph: {
    title: "💀 La TRAMPA de la Selectividad 2026 que NADIE ve",
    description:
      "El 20% de tu nota se decide por algo que tu profesor no menciona. Miles suspenderán por ignorar esto.",
    type: "article",
  },
};

const trap = {
  title: "La expresión escrita vale el 20% (o más) en TODAS las asignaturas",
  reality: "Puedes saber toda la teoría y suspender por mala redacción",
  victims: "Miles de estudiantes con 10 en teoría sacarán 6-7 por esto",
};

const hiddenCriteria = [
  {
    criterion: "Ortografía y puntuación",
    weight: "5-10%",
    trap: "Cada falta resta. 3-4 faltas pueden bajarte medio punto",
    example: "Confundir 'hay/ahí/ay', tildes, comas mal puestas",
  },
  {
    criterion: "Coherencia y cohesión",
    weight: "5-10%",
    trap: "Tu respuesta debe tener estructura lógica con conectores",
    example: "Párrafos sueltos sin relación, ideas repetidas, saltos lógicos",
  },
  {
    criterion: "Registro lingüístico",
    weight: "3-5%",
    trap: "Debes usar lenguaje formal académico (no coloquial)",
    example: "Usar 'un montón', 'un poco', 'cosa', 'hacer' genérico",
  },
  {
    criterion: "Presentación y legibilidad",
    weight: "2-5%",
    trap: "Letra ilegible, tachones, márgenes desordenados restan puntos",
    example: "Escribir muy pequeño, sin espacios, con correcciones caóticas",
  },
];

const realExamples = [
  {
    subject: "Matemáticas",
    scenario: "Ejercicio perfecto de integrales",
    withoutExpression: "10/10 puntos",
    withExpression: "7.5/10 puntos",
    reason: "Explicación confusa, sin conectores lógicos, 2 faltas ortográficas",
  },
  {
    subject: "Historia",
    scenario: "Conoces todas las fechas y eventos",
    withoutExpression: "9/10 puntos",
    withExpression: "6.5/10 puntos",
    reason: "Redacción caótica, sin estructura, párrafos inconexos, lenguaje coloquial",
  },
  {
    subject: "Lengua",
    scenario: "Análisis literario brillante",
    withoutExpression: "10/10 puntos",
    withExpression: "7/10 puntos",
    reason: "5 faltas de ortografía, puntuación incorrecta, frases muy largas",
  },
];

const checklist = [
  {
    action: "✍️ Revisa SIEMPRE antes de entregar",
    time: "5 minutos finales",
    impact: "Puede salvarte 0.5-1 punto",
  },
  {
    action: "📝 Usa conectores en cada respuesta",
    time: "Mientras escribes",
    impact: "Mejora coherencia automáticamente",
  },
  {
    action: "🎯 Estructura tus respuestas (intro-desarrollo-conclusión)",
    time: "Primeros segundos de cada pregunta",
    impact: "Organización = más puntos",
  },
  {
    action: "📚 Practica redacción con límite de tiempo",
    time: "15 min/día, 4 días/semana",
    impact: "Automatizas buena expresión",
  },
];

const faqs = [
  {
    question: "¿En serio pueden suspenderme por ortografía aunque sepa la teoría?",
    answer:
      "SÍ. Los criterios oficiales de corrección establecen que la expresión escrita (ortografía, coherencia, cohesión) vale mínimo un 20% en TODAS las materias. Si tu contenido vale 8 puntos pero tu expresión es mala, puedes quedarte en 6-6.5. Y eso sin contar que una redacción confusa puede hacer que el corrector no entienda tu respuesta correcta.",
  },
  {
    question: "¿Por qué los profesores no lo mencionan?",
    answer:
      "Porque están enfocados en enseñar CONTENIDO (que es su trabajo principal). Además, muchos no conocen a fondo las nuevas rúbricas de 2026 que dan MÁS peso a la expresión. Asumen que ya escribes bien, pero la realidad es que escribir bien bajo presión y con criterios académicos es una habilidad que se entrena aparte.",
  },
  {
    question: "¿Cómo puedo mejorar mi expresión escrita en poco tiempo?",
    answer:
      "Practica escribir respuestas COMPLETAS con límite de tiempo. Usa plantillas (intro-desarrollo-conclusión), aprende conectores básicos (además, por tanto, sin embargo, en conclusión), y SIEMPRE revisa antes de entregar. Con SeleTest puedes practicar respuestas largas con corrección automática que detecta estos errores.",
  },
  {
    question: "¿Vale la pena dedicar tiempo a esto cuando tengo tanto contenido que estudiar?",
    answer:
      "ABSOLUTAMENTE. Piénsalo así: puedes estudiar 100 horas de contenido y perder 2-3 puntos por mala expresión, o dedicar 10 horas a mejorar tu redacción y ganar esos puntos en TODAS las asignaturas. Es la inversión con mayor retorno: mejoras en TODO con una sola habilidad.",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.15),_transparent_50%)]" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-xs font-bold tracking-wide px-4 py-1.5 uppercase">
            💀 REVELACIÓN EXCLUSIVA
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
            La Selectividad 2026<br />
            tiene una <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">TRAMPA</span><br />
            que nadie está viendo
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
            Mientras estudias contenido día y noche, hay algo que vale el <strong>20% de tu nota</strong> que 
            tu profesor <strong>NO está enseñando</strong>. Miles de estudiantes suspenderán por ignorar esto.
          </p>

          <div className="mt-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-red-200 p-8 max-w-2xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Datos reales de 2025:
                </h3>
                <p className="text-gray-700 text-lg">
                  <strong>El 34% de estudiantes</strong> que suspendieron la Selectividad 
                  lo hicieron por <strong>criterios de expresión</strong>, NO por falta de conocimiento.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              🎯 Entrena expresión con SeleTest
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Empezar gratis
            </Link>
          </div>
        </div>
      </header>

      <article className="flex-1">
        {/* La trampa revelada */}
        <section className="bg-gradient-to-b from-red-50 to-white py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                🔓 La trampa revelada
              </h2>

              <div className="rounded-3xl border-2 border-red-400 bg-gradient-to-br from-red-50 to-pink-50 p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">💀</div>
                  <h3 className="text-2xl md:text-3xl font-black text-red-900 mb-4">
                    {trap.title}
                  </h3>
                  <p className="text-xl text-gray-800 font-medium mb-2">
                    {trap.reality}
                  </p>
                  <p className="text-lg text-red-700 font-bold">
                    {trap.victims}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="rounded-2xl bg-white p-6 border-2 border-red-200">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">❌ Lo que CREES que importa:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Saber todas las fórmulas</li>
                      <li>• Memorizar fechas y nombres</li>
                      <li>• Resolver ejercicios perfectos</li>
                      <li>• Conocer toda la teoría</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-2 border-green-400">
                    <h4 className="font-bold text-lg mb-3 text-green-900">✅ Lo que REALMENTE importa:</h4>
                    <ul className="space-y-2 text-gray-900 font-medium">
                      <li>• Saber las fórmulas + explicarlas bien</li>
                      <li>• Fechas + redacción coherente</li>
                      <li>• Ejercicios perfectos + sin faltas</li>
                      <li>• Teoría + presentación impecable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/madrid/seletest"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white font-bold px-8 py-4 text-lg hover:bg-red-700 transition"
                >
                  Practicar expresión correcta con SeleTest →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Criterios ocultos */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            📊 Los 4 criterios OCULTOS que te bajarán la nota
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Esto es lo que los correctores buscan (y penalizan) en CADA respuesta que escribes
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {hiddenCriteria.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-purple-200 bg-white p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.criterion}
                  </h3>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-900">
                    {item.weight}
                  </span>
                </div>
                <div className="rounded-2xl bg-red-50 border border-red-200 p-4 mb-4">
                  <p className="text-sm font-bold text-red-900 mb-1">⚠️ LA TRAMPA:</p>
                  <p className="text-gray-800">{item.trap}</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">Ejemplo de error:</p>
                  <p className="text-gray-700 text-sm">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ⏰ ¿Cuántos puntos vas a perder<br />por NO trabajar tu expresión?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              En SeleTest cada respuesta se revisa con IA que detecta errores de expresión.<br />
              <strong>Entrena la habilidad que el 90% ignora.</strong>
            </p>
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-white text-purple-600 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition shadow-2xl"
            >
              🚀 Empezar a practicar gratis
            </Link>
          </div>
        </section>

        {/* Ejemplos reales */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            📉 Casos reales: Cómo la expresión DESTROZA tu nota
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Estos son ejemplos reales de cómo estudiantes con conocimiento perfecto perdieron puntos
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {realExamples.map((ex, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-gray-200 bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-900">
                    {ex.subject}
                  </span>
                  <p className="text-gray-700 font-medium">{ex.scenario}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-2xl bg-green-50 border-2 border-green-300 p-4">
                    <p className="text-sm font-bold text-green-900 mb-1">Si solo contara el contenido:</p>
                    <p className="text-3xl font-black text-green-700">{ex.withoutExpression}</p>
                  </div>
                  <div className="rounded-2xl bg-red-50 border-2 border-red-300 p-4">
                    <p className="text-sm font-bold text-red-900 mb-1">Nota REAL con expresión:</p>
                    <p className="text-3xl font-black text-red-700">{ex.withExpression}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">💀 Por qué bajó:</p>
                  <p className="text-gray-700">{ex.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block rounded-3xl bg-gradient-to-r from-red-600 to-pink-600 p-1">
              <div className="rounded-3xl bg-white px-8 py-6">
                <p className="text-xl font-black text-gray-900 mb-2">
                  💡 ¿Ves el patrón?
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Pierdes 2-3 puntos</strong> por algo que puedes entrenar en semanas
                </p>
                <Link
                  href="/madrid/seletest"
                  className="inline-block rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold px-8 py-3 hover:shadow-lg transition"
                >
                  Entrenar con SeleTest →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-gradient-to-b from-white to-purple-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
              ✅ Tu checklist anti-trampa
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
              4 acciones que DEBES hacer para no caer en la trampa de expresión
            </p>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-purple-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.action}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-purple-600">Cuándo:</span>
                      <span className="text-gray-700">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-green-600">Impacto:</span>
                      <span className="text-gray-700">{item.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                <strong>Con SeleTest</strong> practicas estas 4 acciones automáticamente en cada pregunta.
                Corrección instantánea + feedback de expresión.
              </p>
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white font-bold px-10 py-4 text-lg hover:bg-purple-700 transition"
              >
                Probar SeleTest gratis →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
            ❓ Preguntas sobre la trampa de expresión
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-start justify-between cursor-pointer font-bold text-lg text-gray-900">
                  <span className="flex-1">{faq.question}</span>
                  <span className="ml-4 text-purple-600 group-open:rotate-45 transition-transform text-2xl">
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
              Ya conoces la trampa.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ¿Vas a caer en ella?
              </span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Cada día que pasa practicando solo contenido es un día que no entrenas la habilidad 
              que vale el <strong className="text-white">20% de tu nota final</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-10 py-5 text-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Entrenar expresión en SeleTest
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition"
              >
                Empezar gratis
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              ✓ +2,000 preguntas  ✓ Corrección automática de expresión  ✓ Feedback instantáneo
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

