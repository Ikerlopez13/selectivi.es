import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "cómo será la selectividad 2026",
  "como sera la pau 2026",
  "exámenes modelo 0 2026",
  "examenes selectividad modelo 0 2026",
  "selectividad 2026 cambios",
  "PAU 2026 estructura",
];

export const metadata: Metadata = {
  title:
    "Cómo será la Selectividad 2026 (PAU): estructura, cambios y modelos 0",
  description:
    "Descubre cómo será la Selectividad 2026 (PAU): estructura renovada, ejercicios competenciales, criterios de corrección y enlaces a los exámenes modelo 0 oficiales.",
  keywords,
  alternates: {
    canonical: "/blog/como-sera-la-selectividad-2026",
  },
  openGraph: {
    title: "Cómo será la Selectividad 2026 (PAU) — SelectiviES",
    description:
      "Guía completa de la PAU 2026 con cambios, cronograma competencial y modelos 0 oficiales para prepararte con ventaja.",
    type: "article",
  },
};

const highlights = [
  {
    title: "Dos secciones bien diferenciadas",
    copy: "Fase de acceso obligatoria sobre 10 puntos y fase voluntaria de admisión que aporta hasta 4 puntos extra.",
  },
  {
    title: "Ejercicio competencial en cada materia",
    copy: "Desde 2025 ya incluye un bloque competencial. En 2026 gana peso y en 2028 se integrará totalmente.",
  },
  {
    title: "Correcciones unificadas",
    copy: "Ortografía, cohesión y claridad valdrán al menos el 20% de la nota en todas las comunidades.",
  },
];

const competencies = [
  {
    title: "Competencia STEM",
    description:
      "Resolver problemas aplicados, interpretar datos y argumentar con rigor matemático y científico.",
  },
  {
    title: "Competencia comunicativa",
    description:
      "Analizar y producir textos coherentes, precisos y adaptados al contexto académico.",
  },
  {
    title: "Competencia digital",
    description:
      "Buscar, contrastar y procesar información fiable, además de justificar decisiones basadas en datos.",
  },
  {
    title: "Competencias sociales y cívicas",
    description:
      "Exponer conclusiones con respeto, evaluar distintas perspectivas y justificar posiciones éticas.",
  },
  {
    title: "Competencia emprendedora",
    description:
      "Planificar, tomar decisiones informadas y proponer soluciones creativas ante retos abiertos.",
  },
];

const faqs = [
  {
    question: "¿Cómo será la Selectividad 2026 respecto a 2025?",
    answer:
      "El modelo mantiene las dos fases (acceso + admisión) pero añade más peso a los ejercicios competenciales y refuerza los criterios comunes de corrección.",
  },
  {
    question: "¿Cómo será la PAU 2026 en cuanto a asignaturas?",
    answer:
      "La fase de acceso incluye Lengua Castellana y Literatura II, Lengua Extranjera II, Historia de España o Historia de la Filosofía y la troncal de modalidad. En comunidades con lengua cooficial se suma una quinta prueba.",
  },
  {
    question: "¿Los exámenes modelo 0 2026 son obligatorios?",
    answer:
      "No. Son ejemplos oficiales para que practiques. Replican estructura, tiempos y tipos de preguntas, pero el contenido variará en la convocatoria real.",
  },
  {
    question: "¿Cómo aprovecho la fase voluntaria de admisión?",
    answer:
      "Elige hasta cuatro materias afines a tu grado objetivo. Prioriza aquellas que ponderen 0,2 en las universidades de destino para maximizar tu nota sobre 14.",
  },
];

const modelLinks = [
  {
    community: "Andalucía",
  },
  {
    community: "Cataluña",
  },
  {
    community: "Comunidad de Madrid",
  },
  {
    community: "Comunitat Valenciana",
  },
  {
    community: "Galicia",
  },
  {
    community: "País Vasco",
  },
  {
    community: "Canarias",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-[#FFF4D8] via-white to-[#F3F4FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,184,0,0.15),_transparent_45%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs font-semibold tracking-wide px-4 py-1 uppercase">
            SelectiviES Insights
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            Cómo será la Selectividad 2026 (PAU): guía definitiva con modelos 0
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
            Te contamos <strong>cómo será la selectividad 2026</strong>, qué
            cambios marca la LOMLOE, cómo será la PAU 2026 en estructura y
            corrección, y dónde descargar los
            <strong> exámenes modelo 0 2026</strong> oficiales para cada
            comunidad autónoma.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {keywords.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-sm bg-white/80 border border-black/10 text-gray-700 rounded-full px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="flex-1">
        <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
          <div>
            <div className="not-prose mb-10 rounded-2xl bg-white border border-black/5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Resumen express
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Apunta los 3 titulares antes de seguir leyendo:
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#FFF8EC] border border-[#FFE2A9] p-4"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-5 text-gray-700">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <section
              id="estructura"
              className="prose prose-lg prose-neutral max-w-none"
            >
              <h2>1. Estructura renovada de la PAU 2026</h2>
              <p>
                La <strong>Selectividad 2026</strong> consolida la estructura
                implantada en 2025, pero afina tiempos, ponderaciones y nivel de
                exigencia competencial. La reforma afecta a todas las
                comunidades, manteniendo particularidades de lenguas
                cooficiales.
              </p>
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fase de acceso (obligatoria)
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <strong>Lengua Castellana y Literatura II</strong>
                    </li>
                    <li>
                      <strong>Lengua Extranjera II</strong> (inglés, francés,
                      alemán, italiano o portugués)
                    </li>
                    <li>
                      <strong>Troncal de modalidad</strong> según tu itinerario
                    </li>
                    <li>
                      <strong>
                        Historia de España o Historia de la Filosofía
                      </strong>{" "}
                      (a elegir)
                    </li>
                    <li className="text-sm text-gray-600">
                      + Lengua cooficial en comunidades bilingües
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Calificación sobre 10. Necesitas aprobado en cada prueba
                    para superar la fase.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fase de admisión (voluntaria)
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      Hasta <strong>4 asignaturas</strong> adicionales
                    </li>
                    <li>
                      Se suman <strong>hasta 4 puntos extra</strong>
                    </li>
                    <li>
                      Recomendado elegir materias que ponderen 0,2 en tu grado
                      objetivo
                    </li>
                    <li>
                      Perfecto para subir nota de corte en titulaciones con alta
                      demanda
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Las mejores dos calificaciones ponderadas se añaden a tu
                    nota final sobre 14.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="competencial"
              className="prose prose-lg prose-neutral max-w-none mt-16"
            >
              <h2>2. El nuevo componente competencial</h2>
              <p>
                La LOMLOE ha transformado los exámenes en un formato mixto: un{" "}
                <strong>bloque competencial</strong> que contextualiza problemas
                reales y tres ejercicios más clásicos con preguntas cerradas,
                semiabiertas y abiertas. Así es{" "}
                <strong>cómo será la PAU 2026</strong> en cada prueba:
              </p>
              <ul>
                <li>
                  Duración: <strong>90 minutos</strong> por examen (descanso
                  mínimo de 30 minutos entre pruebas).
                </li>
                <li>
                  Bloque competencial: 1 ejercicio guiado con materiales,
                  gráficos o casos prácticos.
                </li>
                <li>
                  Bloques tradicionales: 3 ejercicios con opciones internas para
                  adaptarse al temario cursado.
                </li>
                <li>
                  Evaluación lingüística: ortografía, gramática y presentación
                  pesan al menos el <strong>20% de la nota</strong>.
                </li>
              </ul>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {competencies.map((competency) => (
                  <div
                    key={competency.title}
                    className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-[#F8F7FF] p-6 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-900">
                      {competency.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">
                      {competency.description}
                    </p>
                  </div>
                ))}
              </div>

              <details className="group mt-8 rounded-2xl border border-[#FFE2A9] bg-[#FFF8EC] p-5">
                <summary className="cursor-pointer text-base font-semibold text-gray-900 flex items-center justify-between">
                  Cronograma competencial 2025-2028
                  <span className="text-[#FFB800] group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>2025:</strong> se incorpora un ejercicio
                    competencial por materia.
                  </p>
                  <p>
                    <strong>2026:</strong> crece el peso de ese bloque y se
                    armonizan plantillas de corrección.
                  </p>
                  <p>
                    <strong>2027:</strong> se ajustan las rúbricas según
                    resultados y feedback de universidades.
                  </p>
                  <p>
                    <strong>2028:</strong> modelo plenamente competencial con
                    integración total en todas las asignaturas.
                  </p>
                </div>
              </details>
            </section>

            <section
              id="estrategias"
              className="prose prose-lg prose-neutral max-w-none mt-16"
            >
              <h2>3. Estrategias para dominar la Selectividad 2026</h2>
              <p>
                Organiza tu preparación con un plan flexible que combine
                contenidos, práctica aplicada y autoevaluación honesta.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. Planifica con tiempo
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Divide el temario por semanas, alterna teoría y práctica y
                    reserva huecos para simulacros con modelos 0.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Domina los criterios
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Revisa las rúbricas oficiales: estructura, coherencia y
                    corrección lingüística puntúan tanto como el contenido.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Practica en contexto
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Trabaja casos reales, documentos y gráficos. En la PAU 2026
                    cada ejercicio nace de un contexto auténtico.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Tip SeleTest: crea una carpeta con tus{" "}
                <strong>exámenes modelo 0 2026</strong> resueltos y pide
                revisión a un profesor o compañero para pulir la redacción.
              </p>
            </section>

            <section id="faq" className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Preguntas frecuentes sobre la Selectividad 2026
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                      {faq.question}
                      <span className="text-[#FFB800] group-open:rotate-45 transition-transform text-xl">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <h3 className="text-lg font-semibold text-gray-900">
                Checklist rápida
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  Repasa los <strong>criterios de corrección</strong> oficiales.
                </li>
                <li>Haz un cronograma con simulacros mensuales.</li>
                <li>
                  Practica con <strong>modelos 0 selectividad 2026</strong> y
                  corrige en voz alta.
                </li>
                <li>
                  Cuida ortografía y presentación: mínimo{" "}
                  <strong>20% de la nota</strong>.
                </li>
              </ul>
              <Link
                href="/madrid/seletest"
                className="mt-5 inline-flex items-center justify-center w-full rounded-xl bg-[#FFB800] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#FFC42E] transition"
              >
                Practicar con SeleTest →
              </Link>
            </div>

            <div className="rounded-3xl border border-[#C8D0FF] bg-[#F6F7FF] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Calendario competencial 2026
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Reserva al menos un simulacro completo en febrero, otro en abril
                y un tercero en mayo para medir tu progreso con las nuevas
                rúbricas.
              </p>
            </div>
          </aside>
        </section>

        <section id="modelos" className="bg-white border-t border-black/5">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-900">
              5. Enlaces a exámenes modelo 0 2026
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Los <strong>exámenes modelo 0 2026</strong> todavía no están
              disponibles. Esta sección se actualizará en cuanto las comunidades
              publiquen los descargables oficiales.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {modelLinks.map((item) => (
                <div
                  key={item.community}
                  className="rounded-2xl border border-dashed border-black/10 bg-gradient-to-br from-white to-[#FBFBFF] p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {item.community}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Modelo 0 2026 disponible próximamente
                      </p>
                    </div>
                    <span className="text-gray-400 text-xl">⏳</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#C8D0FF] bg-[#F6F7FF] p-6 shadow-sm text-sm text-gray-700">
              <p>
                <strong>¿Y mientras tanto?</strong> Puedes entrenar cada semana
                con SeleTest para tu comunidad y simular el bloque competencial,
                los ejercicios abiertos y la corrección unificada.
              </p>
              <Link
                href="/"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-4 py-2 font-semibold text-black hover:bg-[#ffc42e] transition"
              >
                Practicar con SeleTest de mi comunidad →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A] text-white">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Tu preparación para la Selectividad 2026 empieza hoy
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Entender <strong>cómo será la Selectividad 2026</strong> es el
              primer paso. El segundo es practicar cada semana y medir tu
              progreso con herramientas que te den feedback inmediato.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/madrid/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-5 py-3 hover:bg-[#FFB800] transition"
              >
                Ir a SeleTest →
              </Link>
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-white hover:bg-white/10 transition"
              >
                Conocer la plataforma
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
