"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SideAdBanner from "@/components/SideAdBanner";

type Profile = {
  email: string;
  isPremium: boolean;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    const initDashboard = async () => {
      // Dar tiempo para que Supabase procese el hash de OAuth automáticamente
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Cargar perfil
      await loadProfile();
    };
    
    initDashboard();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session?.user?.email) {
        window.location.href = "/login";
        return;
      }

      const email = session.user.email;
      setProfile({ email, isPremium: false });
      setLoading(false);
      setChecking(true);

      const response = await fetch('/api/check-premium', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setChecking(false);
        return;
      }

      const data = await response.json();
      const isPremium = Boolean(data.isPremium);
      setProfile({ email, isPremium });
      setChecking(false);

    } catch (error) {
      console.error("💥 [DASHBOARD] Error:", error);
      setLoading(false);
      setChecking(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      window.location.href = "/login";
    } catch (error) {
      window.location.href = "/login";
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin text-4xl mb-4">⚡️</div>
            <div className="text-gray-600">Cargando...</div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const renderAILabCard = () => (
    <div className="bg-[#FFB800] rounded-3xl p-8 text-black relative overflow-hidden group shadow-[10px_10px_0px_#000] hover:shadow-[15px_15px_0px_#000] border-4 border-black transition-all duration-500">
      <div className="absolute -right-4 bottom-[-20px] h-48 opacity-100 pointer-events-none group-hover:scale-110 transition-transform duration-700 select-none">
        <img 
          src="/images/gato.svg" 
          alt="Mascota" 
          className="h-full w-auto drop-shadow-xl" 
        />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 bg-black text-[#FFB800] w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic">
          <span>¡NUEVO!</span>
        </div>
        <h2 className="text-4xl font-black mb-3 italic uppercase tracking-tighter">AI Study <span className="text-white drop-shadow-[2px_2px_0px_#000]">Lab</span></h2>
        <p className="mb-8 text-black/70 max-w-sm font-bold text-sm leading-tight italic">
          Pega tus apuntes y deja que nuestra IA cree un examen personalizado estilo EBAU solo para ti.
        </p>
        <Link
          href="/dashboard/ai-lab"
          className="inline-flex items-center gap-2 bg-black text-[#FFB800] px-8 py-4 rounded-2xl font-black uppercase italic text-sm hover:scale-105 transition-all shadow-[5px_5px_0px_#FFF] active:shadow-none"
        >
          Probar AI Lab ⚡️
        </Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 flex justify-center items-start gap-8 p-6 py-12 max-w-[1600px] mx-auto w-full relative">
        {/* Banner Izquierdo */}
        <div className="hidden xl:block sticky top-24">
          <SideAdBanner />
        </div>

        <div className="flex-1 max-w-4xl space-y-8">
          
          {/* Perfil */}
          <div className="bg-white rounded-3xl border-4 border-black p-6 shadow-[8px_8px_0px_#000]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-2xl text-2xl">
                {profile?.isPremium ? '⭐️' : '👤'}
              </div>
              <div className="flex-1">
                <div className="font-black italic uppercase text-xs tracking-widest text-[#FFB800] bg-black w-fit px-3 py-1 rounded-full mb-1">
                  {profile?.isPremium ? 'PREMIUM USER' : 'STANDARD USER'}
                </div>
                <div className="text-xl font-bold text-slate-800">{profile?.email}</div>
              </div>
              {checking && (
                <div className="animate-spin text-xl">⚙️</div>
              )}
            </div>
          </div>

          {/* AI Lab Card */}
          {renderAILabCard()}


          {/* CTA Premium / Map */}
          {!profile?.isPremium ? (
            <div className="bg-[#FFF7E1] rounded-3xl p-10 text-center border-4 border-dashed border-[#FFE199]">
              <h2 className="text-3xl font-black mb-2 italic">¿Quieres más?</h2>
              <p className="mb-8 text-slate-600 font-medium">
                Accede a todas las preguntas y funcionalidades exclusivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Mapa de comunidades
                </Link>
                <Link
                  href="/madrid/premium"
                  className="w-full sm:w-auto inline-block bg-[#FFB800] text-black px-8 py-4 rounded-2xl font-black italic uppercase border-2 border-black hover:bg-[#ffc835] shadow-[5px_5px_0px_#000] active:shadow-none"
                >
                  Ver planes Premium →
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#FFB800] rounded-3xl p-10 text-center border-4 border-black shadow-[10px_10px_0px_#000]">
              <div className="text-5xl mb-6">⭐️</div>
              <h2 className="text-3xl font-black mb-4 italic uppercase">Acceso Ilimitado</h2>
              <p className="mb-8 font-bold text-black/60 italic leading-tight max-w-md mx-auto">
                Disfrutas de todas las preguntas y funcionalidades exclusivas de SeleTest.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-black italic uppercase border-2 border-black hover:scale-105 transition-all shadow-[5px_5px_0px_#000]"
              >
                Ir al mapa de comunidades →
              </Link>
            </div>
          )}


          {/* Logout */}
          <div className="text-center pt-8">
            <button
              onClick={handleLogout}
              className="font-black italic uppercase text-[10px] tracking-widest text-slate-300 hover:text-red-500 transition-colors"
            >
              Cerrar sesión segura 🔐
            </button>
          </div>
          </div>


        {/* Banner Derecho */}
        <div className="hidden xl:block sticky top-24">
          <SideAdBanner />
        </div>
      </div>
      <Footer />
    </main>
  );
}
