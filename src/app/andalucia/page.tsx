import Image from "next/image";
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import HistoryQuiz from "@/components/HistoryQuiz";
import Footer from "@/components/Footer";
import OnboardingGate from "@/components/OnboardingGate";
import SeletestCTA from "@/components/SeletestCTA";
import NationalLogin from "@/components/NationalLogin";

type BenefitProps = {
  icon: string;
  title: string;
  description: string;
  rotation?: string;
};

function BenefitCard({ icon, title, description, rotation }: BenefitProps) {
  return (
    <div
      className={`bg-white rounded-[24px] shadow-[0_10px_32px_rgba(0,0,0,0.10)] border border-black/5 p-5 pr-7 ${rotation ?? ""}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-none flex items-center justify-center w-11 h-11 rounded-lg bg-[#FFB800]/90">
          <span className="text-xl" aria-hidden="true">
            {icon}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1.5">{title}</h3>
          <p className="text-gray-500 leading-snug text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AndaluciaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative -mt-8 overflow-hidden bg-gradient-to-br from-[#FFB800] via-[#FFD45F] to-[#FFB800] text-white">
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-[#1F1300] shadow-sm mb-12">
            <Image
              src="/images/logoo.svg"
              alt="SelectiviES"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold">
              selectivi<span className="text-[#FFB800]">AND</span>
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-[88px] font-black leading-[0.95]">
                La sele andaluza,
                <br /> sin agobios.
              </h1>
              <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
                Practica la PEvAU/PAU de Andalucía con SeleTest, simulacros
                reales y seguimiento de tu progreso. Todo actualizado con la
                reforma 2026.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/andalucia/seletest"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1F1300] transition hover:bg-white/90"
                >
                  <span aria-hidden="true">🚀</span> Empezar gratis SeleTest
                  Andalucía
                </a>
                <a
                  href="/andalucia/login"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span aria-hidden="true">⭐️</span> Accede con tu cuenta
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-[30px] bg-white/15 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                  SeleTest Andalucía
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Todo lo que necesitas para la PEvAU 2026
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true">✓</span> Preguntas por materias y
                    niveles adaptados a Andalucía.
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true">✓</span> Simulacros con tiempos
                    reales y correcciones basadas en las rúbricas oficiales.
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true">✓</span> Seguimiento de tus
                    objetivos de nota y recomendaciones personalizadas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:gap-x-12 lg:grid-cols-[minmax(0,2fr)_420px_300px] items-start">
          <div className="max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F1300]">
                PEvAU Andalucía: estudia por objetivos, no por agotamiento
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                SeleTest te guía con calendarios, preguntas tipo PAU y analytics
                para que llegues a junio con seguridad.
              </p>
            </div>

            <SeletestCTA />

            <ul className="space-y-4 text-[#1F1300]">
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800] text-lg" aria-hidden="true">
                  ✓
                </span>
                Bancos de preguntas de las materias comunes y optativas
                andaluzas.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800] text-lg" aria-hidden="true">
                  ✓
                </span>
                Calculadora de nota y planificador para las ponderaciones 0,1 /
                0,2.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800] text-lg" aria-hidden="true">
                  ✓
                </span>
                Feedback inmediato para mejorar redacciones y ejercicios
                competenciales.
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="/calculadora"
                className="flex items-center gap-2 rounded-lg bg-[#FFB800] px-5 py-3 font-medium text-white shadow-sm transition hover:bg-[#ffc835]"
              >
                <span className="text-lg" aria-hidden="true">
                  🧮
                </span>
                Calcula tu nota de acceso
              </a>
              <a
                href="/andalucia/login"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-3 font-medium text-[#1F1300] transition hover:bg-gray-200"
              >
                <span className="text-lg" aria-hidden="true">
                  🔐
                </span>
                Entrar a mi cuenta andaluza
              </a>
            </div>
          </div>

          <div className="mt-6 w-full space-y-4 md:space-y-5 lg:mt-0 lg:w-[420px] lg:translate-x-8 xl:translate-x-12">
            <BenefitCard
              icon="📚"
              title="Temario oficial"
              description="PEvAU 2026: comunes, modalidad y específicas organizadas por bloques y niveles."
              rotation="-rotate-1"
            />
            <BenefitCard
              icon="🧠"
              title="Competenciales"
              description="Casos prácticos y preguntas abiertas para el nuevo bloque competencial."
              rotation="rotate-1"
            />
            <BenefitCard
              icon="🌞"
              title="Sin estrés"
              description="Calendario semanal adaptado al curso andaluz. Reparte estudio y simulacros sin agobios."
              rotation="-rotate-2"
            />
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/gato.svg"
              alt="Mascota SelectiviES"
              width={220}
              height={320}
              className="transform scale-x-100"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7E1] py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-3xl font-bold text-[#1F1300] mb-6">
            Qué incluye SeleTest Andalucía Premium
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Simulacros PEvAU
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Exámenes completos con tiempos reales y corrección guiada.
                Preparamos tanto convocatoria ordinaria como extraordinaria.
              </p>
            </div>
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Analytics y feedback
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Detecta puntos débiles por materia, controla tu nota objetivo y
                recibe avisos cuando subas o bajes de nivel.
              </p>
            </div>
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Acompañamiento
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Tutoría online, newsletters con cambios en la PAU 2026 y
                comunidad privada de estudiantes andaluces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#1F1300] mb-6">
          Reserva tu plaza
        </h2>
        <Test />
      </section>

      <HistoryQuiz />
      <OnboardingGate />
      <Footer />
    </main>
  );
}
