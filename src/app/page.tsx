import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            selectivi<span className="text-[#FFB800]">ES</span>
          </h1>
          <p className="text-xl">
            Entra en la <span className="underline decoration-[#FFB800] decoration-4">universidad que sueñas</span>, con la<br />
            preparación <span className="underline decoration-[#FFB800] decoration-4">que mereces</span>.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl text-center text-gray-600">
            En que comunidad autónoma vas a hacer la EvAU?
          </h2>

          <div className="max-w-2xl mx-auto">
            <Image src="/images/Group 27.svg" alt="Mapa de España" width={837} height={670} />
          </div>
        </div>

        <div className="relative bg-gray-50 rounded-3xl p-8 shadow-lg">
          <div className="max-w-xl">
            <h2 className="text-[32px] font-bold leading-tight">
              Tu comunidad aún<br />
              no está disponible?
            </h2>
            <p className="text-gray-600 text-lg mt-4 mb-8">
              Dejanos tu correo y comunidad y<br />
              te avisaremos lo antes posible
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                required
              />
              <input
                type="text"
                placeholder="Tu comunidad autónoma"
                className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                required
              />
              <button type="submit" className="w-full bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors">
                Enviar
              </button>
            </form>
          </div>

          <div className="absolute -right-4 top-0 bottom-0 pointer-events-none">
            <Image 
              src="/images/Group 31.svg" 
              alt="Mascota SelectiviES" 
              width={300} 
              height={600} 
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2">
            <Image src="/images/logoo.svg" alt="SelectiviES" width={32} height={32} />
            <span className="text-xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></span>
          </div>
        </div>
      </footer>
    </main>
  )
}