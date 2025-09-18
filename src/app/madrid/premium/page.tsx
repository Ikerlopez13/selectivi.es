import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'

export default function PremiumPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFF3E0]">
      <Navbar />
      <section className="flex-1 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Desbloquea todo el potencial de SelectiviMAD</h1>
          <p className="text-gray-700 mb-10">Accede a todas las preguntas y recursos para triunfar en la EvAU</p>

          <div id="planes" className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Plan Standard */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h2 className="text-2xl font-bold mb-2">Plan Standard</h2>
              <p className="text-gray-600 mb-6">Perfecto para empezar a practicar</p>
              <div className="text-5xl font-extrabold">0€<span className="text-base font-normal">/para siempre</span></div>
              <ul className="text-left mt-6 space-y-3">
                <li>✓ 10 preguntas aleatorias al día</li>
                <li>✓ Acceso a la calculadora de notas</li>
                <li>✓ Consulta de notas de corte</li>
                <li className="text-gray-400">✗ Acceso ilimitado a preguntas</li>
                <li className="text-gray-400">✗ Estadísticas detalladas</li>
                <li className="text-gray-400">✗ Práctica por temas</li>
              </ul>
              <button disabled className="w-full mt-8 bg-gray-100 text-gray-500 rounded-xl py-3">Plan actual</button>
            </div>

            {/* Plan Premium (Mensual) */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFE08A] text-[#4B3A00] text-xs px-3 py-1 rounded-full shadow">Recomendado</div>
              <h2 className="text-2xl font-bold mb-2">Premium Mensual</h2>
              <p className="text-gray-600 mb-4">Todo lo que necesitas para SelectiviMAD</p>
              <div className="mb-1 text-gray-400 line-through">4,99 €/mes</div>
              <div className="text-5xl font-extrabold mb-6">2,99 €<span className="text-base font-normal">/mes</span></div>
              <ul className="text-left mt-2 space-y-3">
                <li>✓ Acceso ilimitado a todas las preguntas</li>
                <li>✓ Filtra y practica por subtemas</li>
                <li>✓ Sin anuncios, experiencia limpia</li>
                <li>✓ Estadísticas y progreso</li>
                <li>✓ Soporte prioritario</li>
              </ul>
              <button className="w-full mt-8 bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-3">Suscríbete 2,99€/mes</button>
            </div>

            {/* Plan Premium (Pago único) */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h2 className="text-2xl font-bold mb-2">Premium Pago Único</h2>
              <p className="text-gray-600 mb-4">Acceso permanente sin suscripción</p>
              <div className="text-5xl font-extrabold mb-6">14,99 €</div>
              <ul className="text-left mt-2 space-y-3">
                <li>✓ Acceso ilimitado a todas las preguntas</li>
                <li>✓ Filtra y practica por subtemas</li>
                <li>✓ Sin anuncios, experiencia limpia</li>
                <li>✓ Estadísticas y progreso</li>
                <li>✓ Soporte prioritario</li>
              </ul>
              <button className="w-full mt-8 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl py-3">Comprar 14,99€</button>
              <p className="text-xs text-gray-500 mt-3">Pago único • Acceso de por vida.</p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">¿Por qué hacerte Premium?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 text-left border">
                <div className="w-10 h-10 rounded-lg bg-[#FFE08A] flex items-center justify-center mb-3">➕</div>
                <h3 className="text-lg font-bold mb-1">Preguntas ilimitadas</h3>
                <p className="text-gray-600">Practica sin límites: acceso a todas las preguntas premium y simuladores.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-left border">
                <div className="w-10 h-10 rounded-lg bg-[#FFE08A] flex items-center justify-center mb-3">📊</div>
                <h3 className="text-lg font-bold mb-1">Filtra por subtemas</h3>
                <p className="text-gray-600">Elige exactamente qué subtemas quieres practicar y personaliza tu estudio.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-left border">
                <div className="w-10 h-10 rounded-lg bg-[#FFE08A] flex items-center justify-center mb-3">🧼</div>
                <h3 className="text-lg font-bold mb-1">Sin anuncios</h3>
                <p className="text-gray-600">Disfruta de una experiencia limpia y sin distracciones, solo para Premium.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Preguntas frecuentes</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow p-5 text-left border">
                <h3 className="font-bold mb-2">¿Qué incluye el plan Premium?</h3>
                <p className="text-gray-700">Acceso ilimitado a todas las preguntas, práctica por temas y subtemas, estadísticas detalladas, calculadora avanzada y soporte prioritario.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-5 text-left border">
                <h3 className="font-bold mb-2">¿Durante cuánto tiempo tengo acceso?</h3>
                <p className="text-gray-700">Si eliges suscripción, 2,99€ al mes. Si eliges pago único, <span className="font-semibold">14,99€</span> y el acceso es tuyo para siempre (sin renovaciones).</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="mt-16 md:mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">¿Preparado para empezar?</h2>
            <p className="text-lg md:text-xl text-gray-700">Únete a miles de estudiantes que ya confían en SelectiviES Premium.</p>
            <p className="text-lg md:text-xl text-gray-700 mb-8">Un solo pago o suscripción. Acceso permanente. Sin sorpresas.</p>
            <a href="#planes" className="block w-full md:w-auto mx-auto bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl py-4 px-8 shadow-lg">
              Hazte Premium ahora
            </a>
          </div>

          {/* Waitlist (por si acceden desde otra comunidad) */}
          <div className="mt-16">
            <WaitlistForm source="madrid-premium" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
