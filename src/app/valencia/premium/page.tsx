import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StripeButtons } from '@/components/StripeButtons'

export default function ValenciaPremiumPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFF9F0]">
      <Navbar />
      <section className="flex-1 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-black">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Pasa la PAU de València con éxito</h1>
          <p className="text-gray-700 mb-10">Desbloquea todas las preguntas y recursos exclusivos para la Comunitat.</p>

          <div id="planes" className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Plan Standard */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border text-black">
              <h2 className="text-2xl font-bold mb-2">Plan Standard</h2>
              <p className="text-gray-600 mb-6">Perfecto para empezar a practicar</p>
              <div className="text-5xl font-extrabold">0€<span className="text-base font-normal">/para siempre</span></div>
              <ul className="text-left mt-6 space-y-3">
                <li>✓ 2 exámenes con IA gratis (de por vida)</li>
                <li>✓ Acceso a la calculadora de notas</li>
                <li>✓ Consulta de notas de corte</li>
                <li className="text-gray-400 font-medium">✗ Generación de exámenes IA ilimitada</li>
                <li className="text-gray-400 font-medium">✗ Acceso ilimitado a preguntas</li>
                <li className="text-gray-400 font-medium">✗ Práctica por subtemas</li>
              </ul>
              <button disabled className="w-full mt-8 bg-gray-100 text-gray-500 rounded-xl py-3 font-semibold">Tu plan actual</button>
            </div>



            {/* Plan Premium (Pago único) */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border text-black">
              <h2 className="text-2xl font-bold mb-2">Premium Pago Único</h2>
              <p className="text-gray-600 mb-4">Acceso permanente para todo el curso</p>
              <div className="text-5xl font-extrabold mb-6">14,99 €</div>
              <ul className="text-left mt-2 space-y-3 font-medium">
                <li className="font-bold text-orange-600">✓ Tokens IA ILIMITADOS en exámenes</li>
                <li>✓ Acceso 100% a preguntas de Valencia</li>
                <li>✓ Filtra y practica por subtemas</li>
                <li>✓ Sin anuncios, experiencia limpia</li>
                <li>✓ Estadísticas y progreso real</li>
              </ul>
              <div className="mt-8"><StripeButtons plan="lifetime" /></div>
              <p className="text-xs text-gray-500 mt-3 italic">Pago único • Acceso de por vida.</p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">¿Por qué elegir Premium en la Comunitat?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 text-left border text-black">
                <div className="w-10 h-10 rounded-lg bg-[#FF9500]/10 flex items-center justify-center mb-3">🥘</div>
                <h3 className="text-lg font-bold mb-1">Específico de Valencia</h3>
                <p className="text-gray-600">Contenidos que incluyen Valenciano y temas adaptados a las universidades de la Comunitat.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-left border text-black">
                <div className="w-10 h-10 rounded-lg bg-[#FF9500]/10 flex items-center justify-center mb-3">🤖</div>
                <h3 className="text-lg font-bold mb-1">IA Generativa ilimitada</h3>
                <p className="text-gray-600">Crea exámenes a partir de tus propios apuntes en segundos.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-left border text-black">
                <div className="w-10 h-10 rounded-lg bg-[#FF9500]/10 flex items-center justify-center mb-3">🧼</div>
                <h3 className="text-lg font-bold mb-1">Foco absoluto</h3>
                <p className="text-gray-600">Sin distracciones ni publicidad. Solo tú y tu preparación para la PAU.</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="mt-16 md:mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">¿Preparado para asegurar tu nota?</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">Únete a cientos de estudiantes valencianos que ya usan SeleTest.</p>
            <a href="#planes" className="inline-block bg-[#FF9500] hover:bg-[#ffae33] text-white font-bold rounded-xl py-4 px-10 shadow-lg transition-transform hover:scale-105">
              Quiero mi acceso Premium
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
