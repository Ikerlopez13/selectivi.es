import SpainMap from '@/components/SpainMap'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import SideAdBanner from '@/components/SideAdBanner'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 flex justify-center items-start gap-8 px-4 py-8 max-w-[1600px] mx-auto w-full relative">
        {/* Banner Izquierdo */}
        <div className="hidden xl:block sticky top-24">
          <SideAdBanner />
        </div>

        <section className="flex-1 max-w-4xl flex flex-col items-center">
          <div className="w-full flex flex-col items-center text-center py-12">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logoo.svg" alt="logo" width={48} height={48} className="w-12 h-12" />
              <h1 className="text-6xl font-bold text-slate-900">selectivi<span className="text-[#FFB800]">ES</span></h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 leading-tight">
              Entra en la <span className="underline decoration-[#FFB800] underline-offset-4">universidad que sueñas</span>, con la{' '}
              <span className="underline decoration-[#FFB800] underline-offset-4">preparación que mereces</span>.
            </h2>
          </div>

          <div className="w-full mb-12">
            <div className="max-w-2xl mx-auto">
              <Link 
                href="/ai-lab" 
                className="group flex items-center justify-between p-5 px-8 rounded-[32px] border-2 border-[#FFE199] bg-white shadow-[0_20px_50px_rgba(255,184,0,0.1)] hover:shadow-[0_25px_60px_rgba(255,184,0,0.2)] hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFB800] to-[#FF9000] text-3xl shadow-lg group-hover:rotate-12 transition-transform">
                    🤖
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFB800] px-2.5 py-1 rounded-full bg-[#FFF2CC]">
                        NUEVO
                      </span>
                      <h3 className="text-xl font-bold text-slate-800">AI STUDY LAB</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-500">Crea tus propios exámenes con IA en segundos ✨</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm font-black text-slate-800">
                  PROBAR GRATIS
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl mb-8 px-4 text-center font-bold italic uppercase tracking-tight">
            ¿En qué comunidad autónoma vas a hacer la EvAU?
          </p>

          <div className="w-full mb-20">
            <div className="max-w-3xl mx-auto bg-white/40 p-6 md:p-10 rounded-[60px] border border-white backdrop-blur-md">
              <SpainMap />
            </div>
          </div>

          <div className="w-full mb-24">
            <div className="max-w-4xl mx-auto">
              <Description />
            </div>
          </div>
        </section>

        {/* Banner Derecho */}
        <div className="hidden xl:block sticky top-24">
          <SideAdBanner />
        </div>
      </div>

      <Footer />
    </main>
  )
}