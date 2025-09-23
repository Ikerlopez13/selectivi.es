import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Test from '@/components/Test'
import HistoryQuiz from '@/components/HistoryQuiz'
import Footer from '@/components/Footer'
import OnboardingGate from '@/components/OnboardingGate'
import SeletestCTA from '@/components/SeletestCTA'

// Tarjeta de beneficio hecha 100% con código (sin SVG)
type BenefitProps = {
  icon: string
  title: string
  description: string
  rotation?: string
}

function BenefitCard({ icon, title, description, rotation }: BenefitProps) {
  return (
    <div className={`bg-white rounded-[24px] shadow-[0_10px_32px_rgba(0,0,0,0.10)] border border-black/5 p-5 pr-7 ${rotation ?? ''}`}>
      <div className="flex items-start gap-4">
        <div className="flex-none flex items-center justify-center w-11 h-11 aspect-square rounded-lg bg-[#FFB800]">
          <span className="text-xl" aria-hidden="true">{icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1.5">{title}</h3>
          <p className="text-gray-500 leading-snug text-[15px]">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function MadridPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="bg-[#FFB800] relative overflow-hidden -mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 relative">
          {/* Logo */}
          <div className="bg-white rounded-2xl p-4 inline-flex items-center gap-2 mb-14 shadow-sm">
            <Image src="/images/logoo.svg" alt="SelectiviMAD" width={40} height={40} />
            <span className="text-2xl font-bold">selectivi<span className="text-[#FFB800]">MAD</span></span>
          </div>

          {/* Título */}
          <h1 className="text-5xl sm:text-7xl md:text-[96px] leading-[0.95] font-bold relative z-10">
            La sele <span className="text-white">fácil.</span>
          </h1>

          {/* Imagen de fondo recortada por el banner */}
          <div className="absolute right-0 inset-y-[-40px] md:inset-y-[-80px] w-[65%] md:w-[58%] pointer-events-none">
            <Image 
              src="/images/madrid.svg" 
              alt="Madrid" 
              fill 
              className="object-contain"
              priority
              sizes="(min-width: 1280px) 58vw, 90vw"
            />
          </div>
        </div>
      </div>

      {/* Resto del contenido igual... */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_420px_300px] gap-x-8 md:gap-x-12 gap-y-12 items-start">
          {/* Columna izquierda: texto + CTAs */}
          <div className="max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prueba SeleTest y permitete ser el dueño de tu destino
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Olvídate de los dolores de cabeza con el acceso a la universidad.
            </p>

            <div className="space-y-8">
                <SeletestCTA />

                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span>
                    Preguntas ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span>
                    Seguimiento de tu progreso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB800] text-lg" aria-hidden="true">✓</span>
                    Atención Premium 24/7
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 bg-[#FFB800] text-black px-5 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors shadow-sm">
                    <span className="text-lg" aria-hidden="true">📊</span>
                    Consulta las notas de corte
                  </a>
                  <a href="/madrid/calculadora" className="flex items-center gap-2 bg-gray-100 text-black px-5 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-sm">
                    <span className="text-lg" aria-hidden="true">🧮</span>
                    Calcula tu nota
                  </a>
                </div>
              </div>
            </div>
          {/* end left column */}

          {/* Columna central: tarjetitas (100% código) */}
          <div className="w-full lg:w-[420px] justify-self-end lg:translate-x-8 xl:translate-x-12 z-10 space-y-4 md:space-y-5 mt-6 lg:mt-0">
            <BenefitCard
              icon="✅"
              title="Sin suspensos"
              description="Ningún usuario Premium de Selectivicat suspendió el año pasado."
              rotation="-rotate-1"
            />
            <BenefitCard
              icon="⌚️"
              title="Ahorro de tiempo"
              description="Con SelectiviES, los estudiantes redujeron su tiempo de estudio en un 30 % sin perder efectividad."
              rotation="rotate-1"
            />
            <BenefitCard
              icon="😁"
              title="Sin estrés, con éxito"
              description="Sin horas extras ni desvelos: nuestros usuarios aprueban y suben notas con métodos eficientes."
              rotation="-rotate-2"
            />
          </div>

          {/* Columna derecha: gato (oculto en móvil, visible en escritorio) */}
          <div className="hidden lg:block">
            <Image 
              src="/images/gato.svg" 
              alt="Mascota" 
              width={220} 
              height={320}
              className="transform scale-x-100"
              priority
            />
          </div>
        </div>
      </section>

      <HistoryQuiz />
      <OnboardingGate />
      <Footer />
    </main>
  )
}