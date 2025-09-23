import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cómo calcular tu nota de corte EvAU (Madrid): guía completa',
  description: 'Aprende a calcular tu nota de admisión (sobre 14) en Madrid: NMB, CFG y ponderaciones específicas con ejemplos y calculadora.',
  alternates: { canonical: '/blog/como-calcular-nota-de-corte-madrid-evau' },
  openGraph: {
    title: 'Cómo calcular tu nota de corte EvAU (Madrid) — SelectiviES',
    description: 'Fórmula, ponderaciones y ejemplos con calculadora interactiva.',
    type: 'article',
  },
}

export default function Article() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Cómo calcular tu nota de corte EvAU (Madrid)</h1>
          <p className="text-gray-700 mt-3 max-w-3xl">Fórmula oficial, ponderaciones y ejemplo práctico con acceso directo a la calculadora.</p>
        </div>
      </section>
      <article className="prose prose-neutral max-w-3xl mx-auto px-6 py-10">
        {/* Tabla de contenidos */}
        <nav aria-label="Tabla de contenidos" className="not-prose mb-6 rounded-xl border bg-white p-4">
          <h2 className="text-sm font-semibold mb-2">Contenido</h2>
          <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1">
            <li><a href="#que-es" className="hover:underline">Qué es la nota de admisión</a></li>
            <li><a href="#formula" className="hover:underline">Fórmula oficial</a></li>
            <li><a href="#ejemplo" className="hover:underline">Ejemplo paso a paso</a></li>
            <li><a href="#calculadora" className="hover:underline">Calculadora online</a></li>
            <li><a href="#consejos" className="hover:underline">Consejos para subir nota</a></li>
            <li><a href="#faq" className="hover:underline">Preguntas frecuentes</a></li>
          </ol>
        </nav>

        <h2 id="que-es">Qué es la nota de admisión</h2>
        <p>
          En Madrid, tu <strong>nota de admisión</strong> (sobre 14) combina la media de Bachillerato (NMB), la
          <strong> Fase General (CFG)</strong> y hasta <strong>4 puntos</strong> por <em>específicas ponderadas</em>.
        </p>
        <h2 id="formula">Fórmula oficial</h2>
        <p><code>Nota de admisión = 0,6·NMB + 0,4·CFG + a·M1 + b·M2 (máx. +4)</code></p>
        <h3>Componentes</h3>
        <ul>
          <li>NMB: nota media de Bachillerato (0–10).</li>
          <li>CFG: media de Lengua, Historia, Inglés y troncal de modalidad (0–10).</li>
          <li>M1, M2: específicas ≥ 5 ponderadas (a, b en 0,1 o 0,2 según el grado).</li>
        </ul>
        <h3>Pasos rápidos</h3>
        <ol>
          <li><strong>Paso 1 — Calcula la CFG:</strong> promedia Lengua, Historia, Inglés y la troncal de modalidad.</li>
          <li><strong>Paso 2 — Saca la base:</strong> <code>0,6·NMB + 0,4·CFG</code>.</li>
          <li><strong>Paso 3 — Suma específicas:</strong> añade <code>a·M1</code> y <code>b·M2</code> (si ponderan para tu grado).</li>
        </ol>
        <p><strong>Tip:</strong> prioriza específicas con ponderación 0,2 para tu grado objetivo.</p>
        <h2 id="ejemplo">Ejemplo rápido</h2>
        <p>Si NMB=8,50, CFG=7,80 y específicas 9,0 (0,2) y 7,5 (0,1):</p>
        <p><code>0,6·8,50 + 0,4·7,80 + 0,2·9,0 + 0,1·7,5 = 10,77</code></p>
        <h2 id="calculadora">Calculadora</h2>
        <p>
          Usa la calculadora de SelectiviMAD para obtener tu nota al instante:{' '}
          <Link href="/madrid/calculadora" className="text-[#FFB800] font-semibold">abrir calculadora</Link>.
        </p>
        <h2 id="consejos">Consejos para subir tu nota</h2>
        <ul>
          <li>Elige <strong>específicas</strong> con ponderación 0,2 para tu grado.</li>
          <li>Maximiza la <strong>CFG</strong> cuidando la troncal de modalidad.</li>
          <li>
            Practica con <strong>preguntas reales</strong> por asignaturas:{' '}
            <Link href="/madrid/seletest" className="text-[#FFB800] font-semibold">SeleTest</Link>.
          </li>
        </ul>
        <p><strong>Errores comunes:</strong> olvidar que solo cuentan las específicas ≥ 5; no comprobar las ponderaciones por grado; redondear antes de tiempo.</p>
        <h2 id="faq">Preguntas frecuentes</h2>
        <h3>¿Qué específicas ponderan 0,2 en mi grado?</h3>
        <p>Depende de la universidad y del grado. Consulta la tabla de ponderaciones y prioriza materias con 0,2.</p>
        <h3>¿Cuánto pesa la CFG frente a Bachillerato?</h3>
        <p>La NMB aporta el 60% y la CFG el 40% de la nota base (sobre 10), a la que se suman las específicas.</p>
        <hr />
        <p className="text-sm">
          ¿Dudas? Escríbenos en Instagram{' '}
          <a href="https://instagram.com/ikerlopezttp" target="_blank" className="text-[#FFB800]">@ikerlopezttp</a>.
        </p>
      </article>
      <Footer />
    </main>
  )
}


