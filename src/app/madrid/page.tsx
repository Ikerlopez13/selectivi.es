import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Test from '@/components/Test'

export default function MadridPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="bg-[#FFB800] py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Logo */}
          <div className="bg-white rounded-2xl p-4 inline-flex items-center gap-2 mb-20">
            <Image src="/images/logoo.svg" alt="SelectiviMAD" width={40} height={40} />
            <span className="text-2xl font-bold">selectivi<span className="text-[#FFB800]">MAD</span></span>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-x-32">
            {/* Título */}
            <h1 className="text-[90px] font-bold whitespace-nowrap">
              La sele <span className="text-white">fácil.</span>
            </h1>

            {/* Iconos con flechas */}
            <div className="flex items-start gap-6">
              <div className="text-center -mt-16">
                <Image 
                  src="/images/📉.png" 
                  alt="Gráfico bajando" 
                  width={100} 
                  height={100}
                  className="mb-4"
                />
                <p className="text-lg max-w-[160px]">
                  Notas bajas,<br />
                  nervios y<br />
                  desesperación
                </p>
              </div>

              <div className="mt-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="2"/>
                </svg>
              </div>

              <div className="text-center -mt-16">
                <Image 
                  src="/images/📚 (1).png" 
                  alt="Libros" 
                  width={100} 
                  height={100}
                  className="mb-4"
                />
                <p className="text-lg max-w-[160px]">
                  Estudias con<br />
                  nuestra web y<br />
                  lo das todo
                </p>
              </div>

              <div className="mt-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="2"/>
                </svg>
              </div>

              <div className="text-center -mt-16">
                <Image 
                  src="/images/🎓.png" 
                  alt="Graduación" 
                  width={100} 
                  height={100}
                  className="mb-4"
                />
                <p className="text-lg max-w-[160px]">
                  Entras en la uni<br />
                  de tus sueños!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resto del contenido igual... */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">
            Prueba SeleTest y permitete ser el<br />
            dueño de tu destino
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Olvídate de los dolores de cabeza con el acceso a la universidad.
          </p>

          <div className="space-y-8">
            <a href="#" className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors">
              <span className="text-xl">★</span>
              Accede a SeleTest
              <span className="text-sm bg-white px-2 py-0.5 rounded">Nuevo!</span>
            </a>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800]">✓</span>
                Preguntas ilimitadas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800]">✓</span>
                Seguimiento de tu progreso
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FFB800]">✓</span>
                Atención Premium 24/7
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors">
                <span className="text-xl">📊</span>
                Consulta las notas de corte
              </a>
              <a href="#" className="flex items-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <span className="text-xl">🧮</span>
                Calcula tu nota
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-32 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/images/gato.svg" 
            alt="Mascota" 
            width={200} 
            height={300}
            className="transform scale-x-100"
          />
        </div>
      </div>

      <Test />
    </main>
  )
}