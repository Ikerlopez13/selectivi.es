import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default function SeletestPage() {
  // Inferencia de comunidad desde query en el primer acceso (SSR cookies)
  // Nota: con App Router, params/query en server componentes es limitado;
  // usamos cabecera Referer simple o dejamos que el cliente lo ajuste.
  // Aquí guardamos cookie si viene la marca autoCommunity en la URL (lo haremos en cliente si no).
  const subjects = [
    'Matemáticas',
    'Física',
    'Filosofía',
    'Química',
    'Biología',
    'Matemáticas CCSS',
    'Geografía',
    'Economía de la empresa',
    'Historia',
    'Catalán',
    'Castellano',
  ]
  const mapId: Record<string, string> = {
    'Historia': 'historia-espana',
    'Filosofía': 'filosofia',
  }
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-10">
          <div className="bg-white border border-black/5 rounded-2xl shadow-xl p-6 md:p-10">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Sele<span className="text-[#FFB800]">Test</span>
              </h1>
              <p className="text-gray-700 mt-3">Descubre cómo te puede ir en la EvAU con nuestra predicción personalizada</p>
              <p className="text-gray-500 text-sm">Selecciona las asignaturas que cursarás para obtener una predicción más precisa de tu nota</p>
            </div>

            <h2 className="font-bold mt-6 mb-3">Selecciona las asignaturas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {subjects.map((name) => (
                <Link
                  key={name}
                  href={`/madrid/seletest/${mapId[name] ?? 'historia-espana'}`}
                  className="px-6 py-4 bg-white border rounded-2xl text-center hover:bg-gray-50"
                >
                  {name}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <div className="opacity-60">
                <button disabled className="w-full bg-gray-100 text-gray-400 rounded-xl py-3">Comenzar</button>
              </div>
              <p className="text-center text-red-500 text-sm mt-3">Selecciona al menos una asignatura para continuar</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


