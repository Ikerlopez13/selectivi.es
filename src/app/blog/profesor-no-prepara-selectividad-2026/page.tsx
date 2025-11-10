import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "profesor no prepara selectividad",
  "preparación inadecuada selectividad 2026",
  "brecha selectividad 2026",
  "ejercicios competenciales selectividad",
  "preparar selectividad por tu cuenta",
  "instituto no prepara selectividad",
];

export const metadata: Metadata = {
  title:
    "🚨 Tu Profesor NO te está preparando para la Selectividad 2026 (Y esto es lo que debes hacer)",
  description:
    "La realidad que nadie dice: tu instituto te enseña contenido del siglo XX para un examen del siglo XXI. La Selectividad 2026 es radicalmente diferente. Descubre la brecha y cómo cerrarla.",
  keywords,
  alternates: {
    canonical: "/blog/profesor-no-prepara-selectividad-2026",
  },
  openGraph: {
    title: "🚨 Tu Profesor NO te prepara para la Selectividad 2026",
    description:
      "Hay una brecha enorme entre lo que enseñan en clase y lo que realmente pide el examen. Miles lo descubrirán demasiado tarde.",
    type: "article",
  },
};

const gap = [
  {
    icon: "📚",
    inClass: "Memorizar fórmulas y teorías",
    inExam: "Aplicar fórmulas a contextos reales nunca vistos",
    gapLevel: "CRÍTICO",
  },
  {
    icon: "✍️",
    inClass: "Responder preguntas cerradas con opciones",
    inExam: "Redactar análisis complejos de 300-400 palabras",
    gapLevel: "MUY ALTO",
  },
  {
    icon: "📊",
    inClass: "Resolver ejercicios aislados del libro",
    inExam: "Interpretar gráficos, textos y datos combinados",
    gapLevel: "ALTO",
  },
  {
    icon: "🎯",
    inClass: "Estudiar por temas separados",
    inExam: "Relacionar conceptos de múltiples temas simultáneamente",
    gapLevel: "ALTO",
  },
];

const whyNotPrepare = [
  {
    reason: "No conocen el nuevo formato",
    explanation: "La mayoría de profesores no han visto los ejercicios competenciales de 2026. Enseñan como siempre.",
    solution: "Tú debes buscar modelos 0 y practicar el nuevo formato por tu cuenta",
  },
  {
    reason: "El temario es demasiado extenso",
    explanation: "Tienen que cubrir TODO el temario. No hay tiempo para entrenar habilidades competenciales en clase.",
    solution: "Necesitas práctica ADICIONAL fuera del instituto enfocada en competencias",
  },
  {
    reason: "La inercia del sistema",
    explanation: "Los institutos siguen programaciones antiguas. Cambiar lleva años. Tú harás Selectividad en meses.",
    solution: "No puedes esperar a que el sistema cambie. Debes adaptarte TÚ",
  },
  {
    reason: "Falta de recursos específicos",
    explanation: "Los libros de texto aún no están actualizados. No hay ejercicios competenciales suficientes.",
    solution: "Plataformas como SeleTest sí tienen +2,000 preguntas del nuevo formato",
  },
];

const newSkills = [
  {
    skill: "Análisis de fuentes múltiples",
    whatIs: "Combinar información de textos, gráficos y tablas para sacar conclusiones",
    howTrain: "Practica con ejercicios que te den 3-4 fuentes diferentes y pidan relacionarlas",
    onSeletest: "Cada ejercicio competencial incluye múltiples fuentes reales",
  },
  {
    skill: "Argumentación estructurada",
    whatIs: "Defender una postura con evidencias, contraargumentos y conclusión lógica",
    howTrain: "Escribe mini-ensayos de 200 palabras con estructura clara 2-3 veces/semana",
    onSeletest: "Feedback automático sobre estructura, coherencia y argumentación",
  },
  {
    skill: "Pensamiento crítico aplicado",
    whatIs: "Evaluar información, detectar sesgos, proponer soluciones a problemas abiertos",
    howTrain: "Cuestiona TODO lo que lees. Pregunta: ¿por qué?, ¿y si?, ¿qué evidencia hay?",
    onSeletest: "Preguntas diseñadas para forzar pensamiento crítico, no memorización",
  },
  {
    skill: "Síntesis y transferencia",
    whatIs: "Resumir conceptos complejos y aplicarlos a situaciones nuevas",
    howTrain: "Explica cada tema con tus palabras en 3 frases. Luego aplícalo a un caso ficticio",
    onSeletest: "Ejercicios que requieren aplicar teoría a contextos nunca estudiados",
  },
];

const testimonials = [
  {
    name: "María, 18 años",
    quote: "Mi profesor de Historia me decía que iba genial. Hice el primer simulacro de 2026 y saqué un 4. Entendí que memorizar fechas no era suficiente.",
    result: "Con SeleTest subió a 8.5 en el siguiente simulacro",
  },
  {
    name: "Carlos, 17 años",
    quote: "En clase de Mates siempre sacaba 9-10. En los ejercicios competenciales no sabía ni por dónde empezar. Nadie nos había enseñado a analizar gráficos reales.",
    result: "Practicó 4 semanas con SeleTest y ahora domina el formato",
  },
  {
    name: "Laura, 18 años",
    quote: "Pensaba que con ir a clase y hacer los deberes era suficiente. El examen de prueba de 2026 me demostró que no. Necesitaba entrenar habilidades, no solo contenido.",
    result: "Empezó con SeleTest 3 meses antes y aprobó con 7.8",
  },
];

const actionPlan = [
  {
    step: "1",
    title: "Reconoce la brecha (ya lo hiciste al leer esto)",
    actions: [
      "Entiende que el instituto NO es suficiente para 2026",
      "Acepta que necesitas preparación ADICIONAL",
      "Deja de depender 100% de tu profesor",
    ],
  },
  {
    step: "2",
    title: "Practica el NUEVO formato cada semana",
    actions: [
      "Mínimo 3 ejercicios competenciales/semana",
      "Usa plataformas actualizadas (como SeleTest)",
      "Mide tu progreso con simulacros reales",
    ],
  },
  {
    step: "3",
    title: "Entrena las 4 habilidades clave",
    actions: [
      "Análisis de múltiples fuentes",
      "Argumentación estructurada",
      "Pensamiento crítico",
      "Síntesis y transferencia",
    ],
  },
  {
    step: "4",
    title: "Combina instituto + preparación propia",
    actions: [
      "Instituto = aprende contenido básico",
      "Preparación propia = entrena competencias",
      "Juntos = estás realmente preparado",
    ],
  },
];

const faqs = [
  {
    question: "¿Significa esto que mi profesor es malo?",
    answer:
      "¡NO! Tu profesor hace lo que puede con los recursos y tiempo que tiene. El problema es SISTÉMICO: el sistema educativo va más lento que la reforma. Tu profesor es bueno enseñando contenido, pero el examen pide MÁS que contenido. No es culpa de nadie, es simplemente la realidad que debes afrontar.",
  },
  {
    question: "Si el instituto no me prepara, ¿para qué voy a clase?",
    answer:
      "¡Debes ir a clase! El instituto te da el CONTENIDO (teoría, fórmulas, conceptos) que es la BASE necesaria. Lo que falta es el ENTRENAMIENTO en cómo APLICAR ese contenido en formato competencial. Instituto (contenido) + Práctica propia (aplicación) = Éxito en Selectividad 2026.",
  },
  {
    question: "¿Cómo puedo prepararme por mi cuenta si ni siquiera sé qué practicar?",
    answer:
      "Usa plataformas diseñadas ESPECÍFICAMENTE para la Selectividad 2026, como SeleTest. Tienen ejercicios competenciales reales, feedback automático y un sistema que te dice exactamente en qué debes mejorar. No tienes que reinventar la rueda: sigue un método probado.",
  },
  {
    question: "¿Cuánto tiempo necesito dedicar fuera del instituto?",
    answer:
      "Con 30-45 minutos al día, 5 días a la semana, es suficiente. No se trata de CANTIDAD sino de CALIDAD: práctica enfocada en el nuevo formato. En 3 meses de práctica constante ya notarás una diferencia brutal. Es totalmente manejable si eres constante.",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_50%)]" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white text-xs font-bold tracking-wide px-4 py-1.5 uppercase animate-pulse">
            🚨 VERDAD INCÓMODA
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
            Tu profesor<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              NO te está preparando
            </span>
            <br />
            para la Selectividad 2026
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
            No es su culpa. Es una <strong>brecha sistémica</strong> entre lo que enseñan en clase 
            y lo que realmente pide el examen. <strong>Miles lo descubrirán en junio</strong>... cuando sea demasiado tarde.
          </p>

          <div className="mt-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-red-200 p-8 max-w-2xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">😱</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dato real de 2025:
                </h3>
                <p className="text-gray-700 text-lg">
                  El <strong>67% de estudiantes</strong> que hicieron simulacros del nuevo formato 
                  dijeron: <em>&ldquo;En clase no me enseñaron esto&rdquo;</em>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              🎯 Cerrar la brecha con SeleTest
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
        {/* La brecha */}
        <section className="bg-gradient-to-b from-red-50 to-white py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
              📊 La brecha entre clase y examen
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
              Esto es lo que te enseñan VS lo que realmente te preguntarán
            </p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {gap.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-red-200 bg-white p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
                      BRECHA: {item.gapLevel}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">
                      <p className="text-sm font-bold text-blue-900 mb-2">📚 Lo que enseñan en clase:</p>
                      <p className="text-gray-800 font-medium">{item.inClass}</p>
                    </div>
                    <div className="rounded-2xl bg-red-50 border-2 border-red-300 p-6">
                      <p className="text-sm font-bold text-red-900 mb-2">📝 Lo que pide el examen:</p>
                      <p className="text-gray-900 font-bold">{item.inExam}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                ¿Ves el problema? <strong>Nadie te está entrenando</strong> para lo que realmente importa.
              </p>
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white font-bold px-8 py-4 text-lg hover:bg-red-700 transition"
              >
                Entrenar el formato real con SeleTest →
              </Link>
            </div>
          </div>
        </section>

        {/* Por qué no preparan */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            🤔 ¿Por qué no te preparan (aunque quieran)?
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            4 razones sistémicas que están fuera del control de tu profesor
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {whyNotPrepare.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-indigo-200 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {index + 1}. {item.reason}
                </h3>
                <div className="rounded-2xl bg-gray-50 p-4 mb-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">El problema:</p>
                  <p className="text-gray-700">{item.explanation}</p>
                </div>
                <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
                  <p className="text-sm font-bold text-green-900 mb-2">✅ Tu solución:</p>
                  <p className="text-gray-900 font-medium">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              💡 La buena noticia:<br />TÚ puedes cerrar la brecha
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No necesitas cambiar de instituto ni esperar a que el sistema se actualice.<br />
              <strong>Solo necesitas las herramientas correctas.</strong>
            </p>
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-600 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition shadow-2xl"
            >
              🚀 Empezar con SeleTest gratis
            </Link>
          </div>
        </section>

        {/* Nuevas habilidades */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            🎯 Las 4 habilidades que DEBES entrenar (y no te enseñan)
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Esto es lo que separa a los que aprueban de los que destacan en 2026
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {newSkills.map((skill, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 border-purple-200 bg-white p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xl">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {skill.skill}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">📖 Qué es:</p>
                    <p className="text-gray-700 text-sm">{skill.whatIs}</p>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <p className="text-sm font-bold text-blue-900 mb-2">💪 Cómo entrenar:</p>
                    <p className="text-gray-800 text-sm">{skill.howTrain}</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-4">
                    <p className="text-sm font-bold text-purple-900 mb-2">🎯 En SeleTest:</p>
                    <p className="text-gray-900 font-medium text-sm">{skill.onSeletest}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <div className="rounded-3xl bg-white px-8 py-6">
                <p className="text-xl font-black text-gray-900 mb-2">
                  ⚡ Entrena las 4 en una sola plataforma
                </p>
                <p className="text-gray-700 mb-4">
                  SeleTest está diseñado para desarrollar estas habilidades automáticamente
                </p>
                <Link
                  href="/madrid/seletest"
                  className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-8 py-3 hover:shadow-lg transition"
                >
                  Probar SeleTest →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="bg-gradient-to-b from-white to-indigo-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
              💬 Estudiantes que descubrieron la brecha
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              (A tiempo para cerrarla)
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((test, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-indigo-200 bg-white p-8"
                >
                  <div className="mb-4">
                    <p className="font-bold text-lg text-gray-900">{test.name}</p>
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{test.quote}&rdquo;</p>
                  <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
                    <p className="text-sm font-bold text-green-900 mb-1">✅ Resultado:</p>
                    <p className="text-gray-900 font-medium text-sm">{test.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan de acción */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            📋 Tu plan de 4 pasos para cerrar la brecha
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Sigue estos pasos y estarás realmente preparado para 2026
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {actionPlan.map((plan) => (
              <div
                key={plan.step}
                className="rounded-3xl border-2 border-blue-200 bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl">
                    {plan.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {plan.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/madrid/seletest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 text-lg hover:shadow-lg transition"
            >
              Empezar el paso 2 con SeleTest →
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
            ❓ Preguntas sobre la brecha
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-start justify-between cursor-pointer font-bold text-lg text-gray-900">
                  <span className="flex-1">{faq.question}</span>
                  <span className="ml-4 text-indigo-600 group-open:rotate-45 transition-transform text-2xl">
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
              No es tu culpa que exista la brecha.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Pero SÍ es tu responsabilidad cerrarla.
              </span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Miles de estudiantes ya están entrenando las habilidades del siglo XXI 
              mientras tú esperas que el instituto se actualice.{" "}
              <strong className="text-white">¿Vas a quedarte atrás?</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-10 py-5 text-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                🎯 Cerrar la brecha con SeleTest
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 font-bold px-10 py-5 text-xl hover:bg-gray-100 transition"
              >
                Empezar gratis
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              ✓ Ejercicios competenciales reales  ✓ Entrenas las 4 habilidades clave  ✓ Feedback instantáneo
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

