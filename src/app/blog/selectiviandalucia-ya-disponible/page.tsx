import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keywords = [
  "selectiviANDALUCIA",
  "PEvAU Andalucía",
  "PAU Andalucía",
  "selectividad Andalucía",
  "preparar PEvAU",
  "SeleTest Andalucía",
  "exámenes Andalucía",
  "PEvAU 2026",
];

export const metadata: Metadata = {
  title:
    "SelectiviANDALUCIA ya está disponible — Practica la PEvAU con SeleTest",
  description:
    "¡Buenas noticias! Ya puedes preparar la PEvAU/PAU de Andalucía con SelectiviANDALUCIA. Accede a SeleTest, bancos de preguntas adaptadas y simulacros para tu preparación.",
  keywords,
  alternates: {
    canonical: "/blog/selectiviandalucia-ya-disponible",
  },
  openGraph: {
    title: "SelectiviANDALUCIA ya disponible — SelectiviES",
    description:
      "La plataforma de preparación para la PEvAU de Andalucía ya está aquí. Practica con SeleTest, simulacros y seguimiento personalizado.",
    type: "article",
  },
};

const highlights = [
  {
    title: "SeleTest completo",
    copy: "Bancos de preguntas adaptadas al sistema educativo andaluz y al formato PEvAU 2026.",
  },
  {
    title: "Seguimiento personalizado",
    copy: "Analytics y feedback inmediato para mejorar en cada materia que necesites reforzar.",
  },
  {
    title: "100% actualizado",
    copy: "Todo el contenido está adaptado a la reforma 2026 y al currículo oficial de Andalucía.",
  },
];

const features = [
  {
    icon: "📚",
    title: "Materias completas",
    description:
      "Matemáticas, Física, Química, Biología, Historia, Filosofía, Lengua Castellana, Inglés y todas las materias específicas de tu modalidad.",
  },
  {
    icon: "🎯",
    title: "Práctica enfocada",
    description:
      "Ejercicios tipo PEvAU con diferentes niveles de dificultad para que practiques a tu ritmo y refuerces tus puntos débiles.",
  },
  {
    icon: "📊",
    title: "Analytics en tiempo real",
    description:
      "Visualiza tu progreso, identifica áreas de mejora y recibe recomendaciones personalizadas según tus resultados.",
  },
  {
    icon: "⏱️",
    title: "Simulacros cronometrados",
    description:
      "Prepárate con exámenes completos en condiciones reales: tiempo limitado, estructura oficial y corrección automática.",
  },
];

const faqs = [
  {
    question: "¿Qué es SelectiviANDALUCIA?",
    answer:
      "Es la plataforma de preparación específica para estudiantes de Andalucía que se presentan a la PEvAU/PAU. Incluye SeleTest con preguntas adaptadas, simulacros y seguimiento personalizado.",
  },
  {
    question: "¿Está adaptado al sistema educativo andaluz?",
    answer:
      "Sí. Todo el contenido está diseñado siguiendo el currículo oficial de Andalucía y el formato de la PEvAU 2026 con el nuevo bloque competencial.",
  },
  {
    question: "¿Cómo puedo empezar a usar SelectiviANDALUCIA?",
    answer:
      "Solo necesitas registrarte con tu cuenta de Google. Es gratis para empezar y puedes acceder a SeleTest inmediatamente para practicar tus primeras preguntas.",
  },
  {
    question: "¿Qué incluye la versión Premium?",
    answer:
      "La versión Premium incluye acceso ilimitado a todos los bancos de preguntas, simulacros completos, analytics avanzados, feedback personalizado y seguimiento de tu progreso a largo plazo.",
  },
  {
    question: "¿Incluye el nuevo formato de la PEvAU 2026?",
    answer:
      "Sí. Todos nuestros contenidos están completamente actualizados con la reforma 2026, incluyendo el bloque competencial y las nuevas rúbricas de corrección.",
  },
];

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFF]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-[#FFF4D8] via-[#FFFBF0] to-[#FFE8B5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,184,0,0.2),_transparent_50%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF9800] text-white text-xs font-semibold tracking-wide px-4 py-1.5 uppercase shadow-lg">
            🎉 Nuevo lanzamiento
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            SelectiviANDALUCIA ya está disponible
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
            ¡Buenas noticias! Ya puedes preparar la{" "}
            <strong>PEvAU de Andalucía</strong> con nuestra plataforma.
            Accede a <strong>SeleTest Andalucía</strong>, practica con bancos
            de preguntas adaptadas y haz simulacros para llegar preparado
            a tus exámenes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/andalucia/seletest"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF9800] px-6 py-3 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <span aria-hidden="true">🚀</span> Empezar SeleTest Andalucía gratis
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-900 px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
              <span aria-hidden="true">🔐</span> Acceder a mi cuenta
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {keywords.slice(0, 4).map((tag) => (
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
                Lo que necesitas saber
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Los 3 puntos clave sobre SelectiviANDALUCIA:
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-gradient-to-br from-[#FFF8EC] to-[#FFF4E0] border border-[#FFE2A9] p-4"
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
              id="que-es"
              className="prose prose-lg prose-neutral max-w-none"
            >
              <h2>¿Qué es SelectiviANDALUCIA?</h2>
              <p>
                <strong>SelectiviANDALUCIA</strong> es nuestra plataforma
                específica para estudiantes andaluces que se
                preparan para la <strong>PEvAU/PAU</strong>. Tras el éxito de
                SelectiviES en España, hemos expandido nuestra oferta para
                incluir contenidos 100% adaptados al sistema educativo
                andaluz y a la reforma 2026.
              </p>
              <p>
                La plataforma incluye <strong>SeleTest Andalucía</strong>, nuestra
                herramienta de práctica con miles de preguntas tipo examen,
                simulacros cronometrados, corrección instantánea y analytics
                para que sepas exactamente en qué debes mejorar.
              </p>

              <div className="mt-8 rounded-2xl border-2 border-[#FFB800] bg-gradient-to-br from-[#FFF9E6] to-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  Especialmente diseñado para Andalucía
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Sabemos que la PEvAU de Andalucía tiene sus propias
                  particularidades: un currículo específico, el nuevo bloque
                  competencial de la reforma 2026 y criterios de corrección
                  propios. Por eso hemos creado contenidos que respetan
                  estas características y te preparan específicamente para
                  la convocatoria andaluza.
                </p>
              </div>
            </section>

            <section
              id="funcionalidades"
              className="prose prose-lg prose-neutral max-w-none mt-16"
            >
              <h2>Qué incluye SelectiviANDALUCIA</h2>
              <p>
                Desde hoy, todos los estudiantes andaluces tienen acceso a
                una plataforma completa para preparar la PEvAU con confianza:
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-none" aria-hidden="true">
                        {feature.icon}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#FFE2A9] bg-[#FFF8EC] p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Tip SelectiviANDALUCIA
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  Te recomendamos hacer al menos 3 simulacros completos antes
                  de la PEvAU: uno en febrero para familiarizarte, otro en abril
                  para medir tu progreso y un tercero en mayo como ensayo
                  general. Así llegarás con confianza el día del examen.
                </p>
              </div>
            </section>

            <section
              id="como-empezar"
              className="prose prose-lg prose-neutral max-w-none mt-16"
            >
              <h2>Cómo empezar con SelectiviANDALUCIA</h2>
              <p>
                Acceder a la plataforma es muy sencillo. Solo necesitas
                seguir estos pasos:
              </p>

              <div className="grid gap-4 mt-6">
                <div className="flex gap-4 items-start p-5 rounded-2xl border border-black/10 bg-gradient-to-br from-white to-[#FFF9F0]">
                  <div className="flex-none w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF9800] text-white font-bold flex items-center justify-center text-lg shadow-md">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Regístrate con Google
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Usa tu cuenta de Google para crear tu perfil en menos de
                      10 segundos. No necesitas rellenar formularios largos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl border border-black/10 bg-gradient-to-br from-white to-[#FFF9F0]">
                  <div className="flex-none w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF9800] text-white font-bold flex items-center justify-center text-lg shadow-md">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Accede a SeleTest Andalucía
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Selecciona tus materias y empieza a practicar
                      inmediatamente con nuestro banco de preguntas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl border border-black/10 bg-gradient-to-br from-white to-[#FFF9F0]">
                  <div className="flex-none w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF9800] text-white font-bold flex items-center justify-center text-lg shadow-md">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Practica y mejora
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Recibe feedback instantáneo, analiza tus resultados y
                      enfoca tu estudio en lo que más necesitas reforzar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/andalucia/seletest"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF9800] px-6 py-3 font-bold text-white hover:shadow-lg transition no-underline"
                >
                  Empezar ahora gratis →
                </Link>
              </div>
            </section>

            <section id="faq" className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">
                Preguntas frecuentes
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
                🌞 Para estudiantes de Andalucía
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                SelectiviANDALUCIA está diseñado específicamente para ti, con
                contenidos adaptados al sistema educativo andaluz y a la
                PEvAU 2026.
              </p>
              <Link
                href="/andalucia/seletest"
                className="mt-5 inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF9800] px-4 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition"
              >
                Acceder a SeleTest →
              </Link>
            </div>

            <div className="rounded-3xl border-2 border-[#FFE2A9] bg-[#FFF8EC] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                ✨ Lanzamiento especial
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Como celebración del lanzamiento, todos los estudiantes
                andaluces tienen acceso gratuito a las funciones básicas de
                SeleTest durante el primer mes.
              </p>
            </div>

            <div className="rounded-3xl border border-[#FFE8B5] bg-gradient-to-br from-[#FFFBF0] to-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                📚 Materias disponibles
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>✓ Matemáticas</li>
                <li>✓ Física</li>
                <li>✓ Química</li>
                <li>✓ Biología</li>
                <li>✓ Historia de España</li>
                <li>✓ Filosofía</li>
                <li>✓ Lengua Castellana</li>
                <li>✓ Inglés y más</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="bg-gradient-to-br from-[#FF9800] to-[#FFB800] text-white">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Empieza tu preparación para la PEvAU hoy mismo
            </h2>
            <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto">
              Únete a los estudiantes andaluces que ya están usando{" "}
              <strong>SelectiviANDALUCIA</strong> para preparar la PEvAU con
              confianza. Practica, analiza tu progreso y llega preparado el
              día del examen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/andalucia/seletest"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#FF9800] font-bold px-6 py-3 hover:bg-gray-100 transition shadow-lg"
              >
                <span aria-hidden="true">🚀</span>
                Empezar gratis ahora
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
