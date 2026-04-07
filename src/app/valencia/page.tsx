import Image from "next/image";
import Navbar from "@/components/Navbar";
import HistoryQuiz from "@/components/HistoryQuiz";
import Footer from "@/components/Footer";
import OnboardingGate from "@/components/OnboardingGate";
import SeletestCTA from "@/components/SeletestCTA";

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

export default function ValenciaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative -mt-8 overflow-hidden bg-gradient-to-br from-[#FF9500] via-[#FFB800] to-[#FF9500] text-white">
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-[#1F1300] shadow-sm mb-12">
            <Image
              src="/images/logoo.svg"
              alt="SelectiviES"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold">
              selectivi<span className="text-[#FF9500]">VAL</span>
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-[88px] font-black leading-[0.95]">
                La sele valenciana,
                <br /> al fin sencilla.
              </h1>
              <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
                Practica la PAU de la Comunitat Valenciana con SeleTest. Temario
                actualizado 2026, simulacros y la mejor preparación para junio.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/valencia/seletest"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1F1300] transition hover:bg-white/90"
                >
                  <span aria-hidden="true">🚀</span> Empezar gratis SeleTest
                  València
                </a>
                <a
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span aria-hidden="true">⭐️</span> Accede con tu cuenta
                </a>
              </div>
            </div>

            <div className="relative hidden md:block space-y-4">
              {/* Tarjeta 1 - Estudiantes */}
              <div className="group relative rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9500] to-[#FFB800] flex items-center justify-center text-2xl shadow-lg">
                    🍊
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#1F1300]">+3.000</p>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      estudiantes en la Comunitat practicando
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2 - Preguntas */}
              <div className="group relative rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 ml-6">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center text-2xl shadow-lg">
                    ✍️
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#1F1300]">100%</p>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      adaptado a la nueva PAU 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 3 - Actualizado */}
              <div className="group relative rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center text-2xl shadow-lg">
                    ✅
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#1F1300]">Fácil</p>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      La mejor forma de subir tu nota media
                    </p>
                  </div>
                </div>
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
                PAU València: tu éxito empieza con un buen entrenamiento
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                SeleTest te ofrece miles de preguntas de exámenes reales de
                convocatorias anteriores y simulacros adaptados a la reforma.
              </p>
            </div>

            <SeletestCTA />

            <ul className="space-y-4 text-[#1F1300]">
              <li className="flex items-center gap-2">
                <span className="text-[#FF9500] text-lg" aria-hidden="true">
                  ✓
                </span>
                Todas las materias: desde Valenciano hasta Física.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF9500] text-lg" aria-hidden="true">
                  ✓
                </span>
                Calculadora de nota con las ponderaciones 2026.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF9500] text-lg" aria-hidden="true">
                  ✓
                </span>
                Modo Competencial para las nuevas preguntas de desarrollo.
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="/valencia/calculadora"
                className="flex items-center gap-2 rounded-lg bg-[#FF9500] px-5 py-3 font-medium text-white shadow-sm transition hover:bg-[#ffae33]"
              >
                <span className="text-lg" aria-hidden="true">
                  🧮
                </span>
                Calcula tu nota de acceso
              </a>
              <a
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-3 font-medium text-[#1F1300] transition hover:bg-gray-200"
              >
                <span className="text-lg" aria-hidden="true">
                  🔐
                </span>
                Entrar a mi cuenta valenciana
              </a>
            </div>
          </div>

          <div className="mt-6 w-full space-y-4 md:space-y-5 lg:mt-0 lg:w-[420px] lg:translate-x-8 xl:translate-x-12">
            <BenefitCard
              icon="🥘"
              title="A medida"
              description="Contenidos revisados por profesores de la Comunitat Valenciana."
              rotation="-rotate-1"
            />
            <BenefitCard
              icon="⏰"
              title="Ahorra tiempo"
              description="Ve directo a lo que cae en el examen. Menos paja, más resultados."
              rotation="rotate-1"
            />
            <BenefitCard
              icon="📈"
              title="Sube tu nota"
              description="Nuestros usuarios aumentan su media de selectividad en hasta 1.5 puntos."
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

      <section className="bg-[#FFF9F0] py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-3xl font-bold text-[#1F1300] mb-6">
            Qué incluye SeleTest València Premium
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Exámenes Oficiales
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Acceso a la base de datos histórica de la PAU en la Comunitat.
              </p>
            </div>
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Analytics Pro
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Visualiza qué temas dominas y cuáles deberías repasar más.
              </p>
            </div>
            <div className="rounded-2xl border border-[#FFE4B5] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#1F1300]">
                Soporte 24/7
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Estamos aquí para resolver tus dudas sobre la plataforma o el acceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HistoryQuiz />
      <OnboardingGate />
      <Footer />
    </main>
  );
}
