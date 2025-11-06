"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

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

  const isPremiumPage = pathname?.startsWith("/madrid/premium");
  const isMadridBrand = pathname?.startsWith("/madrid") && !isPremiumPage;
  const isAndaluciaBrand = pathname?.startsWith("/andalucia");
  const isMadridSection = pathname?.startsWith("/madrid");
  const isMadridDashboard = pathname?.startsWith("/madrid/dashboard");
  const isAndaluciaSection = pathname?.startsWith("/andalucia");
  const isAndaluciaDashboard = pathname?.startsWith("/andalucia/dashboard");

  const triggerLogin = async (
    community: "general" | "madrid" | "andalucia",
  ) => {
    console.log("🔑 [NAVBAR] Iniciando login para:", community);
    
    if (nationalLoginLoading) return;

    try {
      setNationalLoginLoading(true);

      // Redirigir directamente al dashboard (sin callback intermedio)
      let redirectTo: string;
      if (community === "madrid") {
        redirectTo = `${window.location.origin}/madrid/dashboard`;
      } else if (community === "andalucia") {
        redirectTo = `${window.location.origin}/andalucia/dashboard`;
      } else {
        redirectTo = `${window.location.origin}/dashboard`;
      }
      
      console.log("🔗 [NAVBAR] Redirect URL:", redirectTo);

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

  return (
    <nav className="border-b bg-white mb-8 shadow-md z-20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logoo.svg"
            alt="SelectiviES"
            width={40}
            height={40}
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
            ) : (
              <>
                selectivi<span className="text-[#FFB800]">ES</span>
              </>
            )}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
          <Link
            href="/calculadora"
                    className="text-gray-700 hover:text-gray-900"
                  >
            Calculadora
          </Link>
          {isMadridSection
            ? renderMadridControls()
            : isAndaluciaSection
              ? renderAndaluciaControls()
              : renderNationalLogged()}
          <span className="text-xs text-gray-500">
            ¿Cataluña? Accede desde
            <a
              href="https://selectivi.cat"
              className="underline ml-1 text-gray-700"
            >
              selectivi.cat
            </a>
            , inicia sesión allí.
          </span>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-lg border bg-white"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
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
            <Link
              href="/calculadora"
              className="py-2"
              onClick={() => setMobileOpen(false)}
            >
              Calculadora
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
  );
}