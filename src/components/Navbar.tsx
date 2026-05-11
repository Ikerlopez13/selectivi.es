"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import PromoBanner from "./PromoBanner";

const clearCachedSession = () => {
  try {
    localStorage.removeItem("dashboard_profile");
    localStorage.removeItem("es_premium");
    localStorage.removeItem("logged_in");
  } catch {}
  try {
    document.cookie = "logged_in=; Max-Age=0; path=/";
    document.cookie = "recent_login=; Max-Age=0; path=/";
    document.cookie = "community=; Max-Age=0; path=/";
  } catch {}
};

export default function Navbar() {
  const pathname = usePathname();
  const { hasSession, isPremium } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nationalLoginLoading, setNationalLoginLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isPremium) return;

    const interval = setInterval(() => {
      setShowPopup(true);
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, [isPremium]);

  const isPremiumPage = pathname?.startsWith("/madrid/premium") || pathname?.startsWith("/andalucia/premium") || pathname?.startsWith("/valencia/premium");
  const isMadridBrand = pathname?.startsWith("/madrid") && !isPremiumPage;
  const isAndaluciaBrand = pathname?.startsWith("/andalucia") && !isPremiumPage;
  const isValenciaBrand = pathname?.startsWith("/valencia") && !isPremiumPage;

  const isValenciaSection = pathname?.startsWith("/valencia");
  const isValenciaDashboard = pathname?.startsWith("/valencia/dashboard");
  const isMadridSection = pathname?.startsWith("/madrid");
  const isMadridDashboard = pathname?.startsWith("/madrid/dashboard");
  const isAndaluciaSection = pathname?.startsWith("/andalucia");
  const isAndaluciaDashboard = pathname?.startsWith("/andalucia/dashboard");

  const triggerLogin = async (
    community: "general" | "madrid" | "andalucia" | "valencia",
  ) => {
    console.log("🔑 [NAVBAR] Iniciando login para:", community);
    
    if (nationalLoginLoading) return;

    try {
      setNationalLoginLoading(true);

      // Redirigir siempre a través del callback de autenticación para asegurar el intercambio de tokens en servidor
      const redirectTo = `${window.location.origin}/auth/callback`;
      
      console.log("🔗 [NAVBAR] Redirect URL (Secure Callback):", redirectTo);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          skipBrowserRedirect: false,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error("❌ [NAVBAR] Error en signInWithOAuth:", error);
        throw error;
      }
      
      console.log("✅ [NAVBAR] OAuth iniciado correctamente");
    } catch (error) {
      console.error("💥 [NAVBAR] Error al iniciar sesión:", error);
      alert("No se pudo iniciar sesión. Inténtalo de nuevo.");
      setNationalLoginLoading(false);
    }
  };

  const triggerLogout = async (redirectTo = "/") => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      clearCachedSession();
      window.location.href = redirectTo;
    }
  };

  const renderNationalLogged = () => (
    <>
      {hasSession ? (
        <>
          <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
            Mi perfil
          </Link>
          <button
            onClick={() => triggerLogout("/")}
            className="text-gray-700 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
          <Link
            href="/"
            className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
          >
            {hasSession ? "Ir al mapa" : "Entrar"}
          </Link>
        </>
      ) : (
        <button
          onClick={() => triggerLogin("general")}
          disabled={nationalLoginLoading}
          className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {nationalLoginLoading ? "Conectando…" : "Entrar"}
        </button>
      )}
    </>
  );

  const renderMadridControls = () => (
    <>
      {hasSession && !isPremium && (
        <Link
          href="/madrid/premium"
          className="bg-gray-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Hazte Premium ⭐️
        </Link>
      )}
      {hasSession ? (
        isMadridDashboard ? (
          <button
            onClick={() => triggerLogout("/madrid")}
            className="text-gray-700 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/madrid/dashboard"
            className="text-gray-700 hover:text-gray-900"
          >
            Mi perfil
          </Link>
        )
      ) : null}
      <button
        onClick={() => triggerLogin("madrid")}
        className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
      >
        {hasSession ? "Accede a SeleTest" : "Entrar"}
      </button>
    </>
  );
  const renderAndaluciaControls = () => (
    <>
      {hasSession && !isPremium && (
        <Link
          href="/andalucia/premium"
          className="bg-[#FFF2C2] text-[#1F1300] px-4 py-2 rounded-lg font-medium border border-[#FFB800]/40 hover:bg-[#FFE8A3] transition-colors"
        >
          Hazte Premium ⭐️
        </Link>
      )}
      {hasSession ? (
        isAndaluciaDashboard ? (
          <button
            onClick={() => triggerLogout("/andalucia")}
            className="text-gray-700 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/andalucia/dashboard"
            className="text-gray-700 hover:text-gray-900"
          >
            Mi perfil
          </Link>
        )
      ) : null}
      {hasSession ? (
        <Link
          href="/andalucia/seletest"
          className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
        >
          Accede a SeleTest
        </Link>
      ) : (
        <button
          onClick={() => triggerLogin("andalucia")}
          className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
        >
          Entrar
        </button>
      )}
    </>
  );


  const renderValenciaControls = () => (
    <>
      {hasSession && !isPremium && (
        <Link
          href="/valencia/premium"
          className="bg-[#FFF2C2] text-[#1F1300] px-4 py-2 rounded-lg font-medium border border-[#FF9500]/40 hover:bg-[#FFE8A3] transition-colors"
        >
          Hazte Premium ⭐️
        </Link>
      )}
      {hasSession ? (
        isValenciaDashboard ? (
          <button
            onClick={() => triggerLogout("/valencia")}
            className="text-gray-700 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/valencia/dashboard"
            className="text-gray-700 hover:text-gray-900"
          >
            Mi perfil
          </Link>
        )
      ) : null}
      {hasSession ? (
        <Link
          href="/valencia/seletest"
          className="bg-[#FF9500] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#ffae33] transition-colors"
        >
          Accede a SeleTest
        </Link>
      ) : (
        <button
          onClick={() => triggerLogin("valencia")}
          className="bg-[#FF9500] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#ffae33] transition-colors"
        >
          Entrar
        </button>
      )}
    </>
  );

  return (
    <>
      {!isPremium && <PromoBanner />}
      <nav className="border-b bg-white mb-8 shadow-md z-20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logoo.svg"
              alt="SelectiviES"
              width={48}
              height={48}
            />
            <span className="text-2xl font-bold">
              {isMadridBrand ? (
                <>
                  selectivi<span className="text-[#FFB800]">MAD</span>
                </>
              ) : isAndaluciaBrand ? (
                <>
                  selectivi<span className="text-[#FFB800]">AND</span>
                </>
              ) : isValenciaBrand ? (
                <>
                  selectivi<span className="text-[#FF9500]">VAL</span>
                </>
              ) : (
                <>
                  selectivi<span className="text-[#FFB800]">ES</span>
                </>
              )}
            </span>
          </Link>
        </div>

        {/* Center: Core Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link 
            href="/calculadora" 
            className={`text-[15px] font-semibold transition-all hover:scale-105 ${pathname === '/calculadora' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Calculadora
          </Link>
          <Link 
            href="/ai-lab" 
            className={`text-[15px] font-semibold transition-all hover:scale-105 flex items-center gap-1.5 ${pathname === '/ai-lab' ? 'text-[#FFB800]' : 'text-gray-500 hover:text-[#FFB800]'}`}
          >
            ✨ AI Lab
          </Link>
          <Link 
            href="/fast" 
            className={`text-[15px] font-semibold transition-all hover:scale-105 flex items-center gap-1.5 ${pathname === '/fast' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            🚀 FAST
          </Link>
          <Link 
            href="/notas-de-corte" 
            className={`text-[15px] font-semibold transition-all hover:scale-105 ${pathname === '/notas-de-corte' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Notas de Corte
          </Link>
          <Link 
            href="/blog" 
            className={`text-[15px] font-semibold transition-all hover:scale-105 ${pathname === '/blog' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Blog
          </Link>
        </div>

        {/* Right: Controls & Profile */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {isMadridSection
              ? renderMadridControls()
              : isAndaluciaSection
                ? renderAndaluciaControls()
                : isValenciaSection
                  ? renderValenciaControls()
                  : renderNationalLogged()}
          </div>

          <button
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-lg border bg-white shadow-sm"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md-hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-4 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Menú</span>
              <button
                aria-label="Cerrar"
                className="p-2"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>
            <Link
              href="/blog"
              className="py-2"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            {hasSession ? (
              <Link
                href="/dashboard/ai-lab"
                className="py-2 text-[#FFB800] font-bold"
                onClick={() => setMobileOpen(false)}
              >
                ✨ AI Lab
              </Link>
            ) : (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  triggerLogin("general");
                }}
                className="py-2 text-[#FFB800] font-bold text-left"
              >
                ✨ AI Lab
              </button>
            )}
            <Link
              href="/fast"
              className="py-2 font-bold"
              onClick={() => setMobileOpen(false)}
            >
              🚀 FAST
            </Link>
            <Link
              href="/calculadora"
              className="py-2"
              onClick={() => setMobileOpen(false)}
            >
              Calculadora
            </Link>
            <Link
              href="/notas-de-corte"
              className="py-2 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Notas de Corte
            </Link>
            {isMadridSection ? (
              <>
                {hasSession && !isPremium && (
                  <Link
                    href="/madrid/premium"
                    className="py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hazte Premium ⭐️
                  </Link>
                )}
                {hasSession ? (
                  <>
                    <Link
                      href="/madrid/dashboard"
                      className="py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mi perfil
                    </Link>
                    <button
                      className="text-left py-2"
                      onClick={() => triggerLogout("/madrid")}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : null}
                <button
                  onClick={() => triggerLogin("madrid")}
                  className="mt-2 bg-[#FFB800] text-black px-4 py-2 rounded-lg font-semibold"
                >
                  {hasSession ? "Accede a SeleTest" : "Entrar"}
                </button>
              </>
            ) : isAndaluciaSection ? (
              <>
                {hasSession && !isPremium && (
                  <Link
                    href="/andalucia/premium"
                    className="py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hazte Premium ⭐️
                  </Link>
                )}
                {hasSession ? (
                  <>
                    <Link
                      href="/andalucia/dashboard"
                      className="py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mi perfil
                    </Link>
                    <button
                      className="text-left py-2"
                      onClick={() => triggerLogout("/andalucia")}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : null}
                <button
                  onClick={() => triggerLogin("andalucia")}
                  className="mt-2 bg-[#FFB800] text-black px-4 py-2 rounded-lg font-semibold"
                >
                  {hasSession ? "Accede a SeleTest" : "Entrar"}
                </button>
              </>
            ) : isValenciaSection ? (
              <>
                {hasSession && !isPremium && (
                  <Link
                    href="/valencia/premium"
                    className="py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hazte Premium ⭐️
                  </Link>
                )}
                {hasSession ? (
                  <>
                    <Link
                      href="/valencia/dashboard"
                      className="py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mi perfil
                    </Link>
                    <button
                      className="text-left py-2"
                      onClick={() => triggerLogout("/valencia")}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : null}
                <button
                  onClick={() => triggerLogin("valencia")}
                  className="mt-2 bg-[#FF9500] text-white px-4 py-2 rounded-lg font-semibold"
                >
                  {hasSession ? "Accede a SeleTest" : "Entrar"}
                </button>
              </>
            ) : (
              <>
                {hasSession ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mi perfil
                    </Link>
                    <button
                      className="text-left py-2"
                      onClick={() => triggerLogout("/")}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => triggerLogin("general")}
                    disabled={nationalLoginLoading}
                    className="mt-2 bg-[#FFB800] text-black px-4 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {nationalLoginLoading ? "Conectando…" : "Entrar"}
                  </button>
                )}
                <span className="text-xs text-gray-500">
                  ¿Cataluña? entra en
                  <a
                    href="https://selectivi.cat"
                    className="underline ml-1 text-gray-700"
                  >
                    selectivi.cat
                  </a>
                  .
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
    
    {showPopup && !isPremium && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#FFD0D0]">
          <div className="bg-[#FFE8E8] p-6 text-center relative">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-[#C0392B] hover:scale-110 transition-transform font-bold text-xl"
            >
              ✕
            </button>
            <div className="inline-flex items-center justify-center bg-white/80 rounded-full px-4 py-1 text-xs font-black text-[#C0392B] mb-3 uppercase tracking-wider border border-[#FFD0D0]">
              Oportunidad única
            </div>
            <h2 className="text-2xl font-black text-[#C0392B] mb-1">🚨 ¡OFERTA FLASH! 🚨</h2>
            <p className="text-[#C0392B] text-sm font-bold opacity-90">No dejes pasar esta oportunidad</p>
          </div>
          
          <div className="p-6 text-center">
            <p className="text-gray-600 mb-4 font-medium">
              Accede a todo el contenido premium, preguntas ilimitadas y IA Lab a mitad de precio.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-xs text-gray-400 font-bold uppercase">Antes</p>
                <p className="text-2xl text-gray-400 line-through font-bold">29,99€</p>
              </div>
              <div className="text-4xl font-black text-[#C0392B]">➔</div>
              <div className="text-center">
                <p className="text-xs text-[#E74C3C] font-bold uppercase">Ahora</p>
                <p className="text-4xl text-[#E74C3C] font-black">14,99€</p>
              </div>
            </div>
            
            <a 
              href="/madrid/premium" 
              className="w-full inline-flex items-center justify-center bg-[#E74C3C] hover:bg-[#C0392B] text-white font-black text-lg rounded-xl py-3.5 transition-colors shadow-[0_4px_0_#962D22] hover:translate-y-0.5 active:translate-y-1 active:shadow-none"
            >
              ¡APROVECHAR OFERTA!
            </a>
            
            <button 
              onClick={() => setShowPopup(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 text-sm font-medium underline"
            >
              Quizás más tarde
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}