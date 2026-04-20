import SpainMap from '@/components/SpainMap'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col items-center text-center py-12 px-4">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logoo.svg" alt="logo" width={48} height={48} className="w-12 h-12" />
            <h1 className="text-6xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium">
            Entra en la <span className="underline decoration-[#FFB800]">universidad que sueñas</span>, con la{' '}
            <span className="underline decoration-[#FFB800]">preparación que mereces</span>.
          </h2>
        </div>

        <div className="w-full px-4 mb-2">
          <div className="max-w-2xl mx-auto">
            <Link 
              href="/ai-lab" 
              className="group flex items-center justify-between p-4 px-6 rounded-[32px] border-2 border-[#FFE199] bg-gradient-to-r from-white via-[#FFF9EA] to-white shadow-[0_15px_45px_rgba(255,184,0,0.15)] hover:shadow-[0_20px_55px_rgba(255,184,0,0.25)] hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFB800] to-[#FF9000] text-3xl shadow-md group-hover:rotate-12 transition-transform">
                  🤖
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-widest text-[#FFB800] px-2 py-0.5 rounded-full bg-[#FFF2CC]">
                      NUEVO
                    </span>
                    <h3 className="text-lg font-bold text-slate-800">AI STUDY LAB</h3>
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

        <p className="text-gray-600 text-lg md:text-xl mb-6 px-4 text-center">
          ¿En qué comunidad autónoma vas a hacer la EvAU?
        </p>

        <div className="w-full px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <SpainMap />
          </div>
        </div>

        <div className="w-full px-4 mb-24">
          <div className="max-w-4xl mx-auto">
            <Description />
          </div>
        </div>

        {/* Banner Publicitario */}
        <AdBanner className="mb-24" />
      </section>

      <Footer />
    </main>
  )
}