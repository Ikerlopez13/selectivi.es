'use client'

import SpainMap from '@/components/SpainMap'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col items-center text-center py-12 px-4">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-6xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></h1>
            <img src="/images/logoo.svg" alt="logo" className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium">
            Entra en la <span className="underline decoration-[#FFB800]">universidad que sueñas</span>, con la{' '}
            <span className="underline decoration-[#FFB800]">preparación que mereces</span>.
          </h2>
        </div>

        <p className="text-gray-600 text-lg md:text-xl mb-6 px-4 text-center">
          En que comunidad autónoma vas a hacer la EvAU?
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
      </section>

      <Footer />
    </main>
  )
}