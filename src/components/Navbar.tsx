"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type CachedProfile = {
  email: string;
  isPremium: boolean;
};

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

const updateCachedPremium = (isPremiumUser: boolean) => {
  try {
    localStorage.setItem("es_premium", isPremiumUser ? "1" : "0");
    const cachedProfileRaw = localStorage.getItem("dashboard_profile");
    if (cachedProfileRaw) {
      const parsed = JSON.parse(cachedProfileRaw) as CachedProfile;
      localStorage.setItem(
        "dashboard_profile",
        JSON.stringify({ ...parsed, isPremium: isPremiumUser }),
      );
    }
  } catch {}
};

const seedStateFromCache = () => {
  if (typeof window === "undefined")
    return { hasSession: false, isPremium: false };
  try {
    const cachedProfileRaw = localStorage.getItem("dashboard_profile");
    const cachedProfile = cachedProfileRaw
      ? (JSON.parse(cachedProfileRaw) as CachedProfile)
      : null;
    const cachedPremium = localStorage.getItem("es_premium") === "1";
    const loggedFlag = localStorage.getItem("logged_in") === "1";
    return {
      hasSession: Boolean(loggedFlag || cachedProfile?.email),
      isPremium: cachedPremium || Boolean(cachedProfile?.isPremium),
    };
  } catch {
    return { hasSession: false, isPremium: false };
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const isMadridBrand = pathname?.startsWith("/madrid");
  const isAndaluciaBrand = pathname?.startsWith("/andalucia");
  const isGeneralBrand = !isMadridBrand && !isAndaluciaBrand;
  const isHome = pathname === "/";
  const isMadridSection = pathname?.startsWith("/madrid");
  const isMadridDashboard = pathname?.startsWith("/madrid/dashboard");
  const isAndaluciaSection = pathname?.startsWith("/andalucia");
  const isAndaluciaDashboard = pathname?.startsWith("/andalucia/dashboard");
  const isGeneralDashboard = pathname?.startsWith("/dashboard");
  const [hasSession, setHasSession] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nationalLoginLoading, setNationalLoginLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const { hasSession: cachedSession, isPremium: cachedPremium } =
      seedStateFromCache();
    setHasSession(cachedSession);
    setIsPremium(cachedPremium);

    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return;
      const sessionFound = Boolean(data.session);
      setHasSession(sessionFound);
      try {
        if (sessionFound) {
          document.cookie = "logged_in=1; path=/; max-age=31536000";
          document.cookie = `recent_login=${encodeURIComponent(Date.now().toString())}; path=/; max-age=600`;
          localStorage.setItem("logged_in", "1");
        } else {
          clearCachedSession();
        }
      } catch {}
      const userId = data.session?.user?.id;
      if (userId) {
        try {
          const { data: existing, error: selErr } = await supabase
            .from("usuarios")
            .select("id, comunidad_autonoma, es_premium")
            .eq("user_id", userId)
            .maybeSingle();
          if (!existing && !selErr) {
            const email = data.session?.user?.email || "";
            const name =
              (data.session?.user?.user_metadata as any)?.full_name ||
              email.split("@")[0] ||
              "Usuario";
            let inferredCommunity = "general";
            if (location.pathname.startsWith("/madrid"))
              inferredCommunity = "madrid";
            else if (location.pathname.startsWith("/andalucia"))
              inferredCommunity = "andalucia";
            await supabase.from("usuarios").insert({
              user_id: userId,
              nombre: name,
              correo_electronico: email,
              comunidad_autonoma: inferredCommunity,
            });
          }
        } catch {}
        const email = data.session?.user?.email;
        if (email) {
          const { data: premiumResult } = await supabase.rpc(
            "check_premium_status",
            { p_email: email },
          );
          const isPremiumUser = Boolean(premiumResult);
          if (mounted) setIsPremium(isPremiumUser);
          updateCachedPremium(isPremiumUser);
        }
      } else {
        if (mounted) setIsPremium(false);
      }
    });

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (_e, session) => {
        const sessionActive = Boolean(session);
        setHasSession(sessionActive);
        try {
          if (sessionActive) {
            document.cookie = "logged_in=1; path=/; max-age=31536000";
            document.cookie = `recent_login=${encodeURIComponent(Date.now().toString())}; path=/; max-age=600`;
            localStorage.setItem("logged_in", "1");
          } else {
            clearCachedSession();
          }
        } catch {}
        const userId = session?.user?.id;
        if (userId) {
          try {
            const { data: existing, error: selErr } = await supabase
              .from("usuarios")
              .select("id, es_premium")
              .eq("user_id", userId)
              .maybeSingle();
            if (!existing && !selErr) {
              const email = session?.user?.email || "";
              const name =
                (session?.user?.user_metadata as any)?.full_name ||
                email.split("@")[0] ||
                "Usuario";
              let inferredCommunity = "general";
              if (location.pathname.startsWith("/madrid"))
                inferredCommunity = "madrid";
              else if (location.pathname.startsWith("/andalucia"))
                inferredCommunity = "andalucia";
              await supabase.from("usuarios").insert({
                user_id: userId,
                nombre: name,
                correo_electronico: email,
                comunidad_autonoma: inferredCommunity,
              });
            }
          } catch {}
          const email = session?.user?.email;
          if (email) {
            const { data: premiumResult } = await supabase.rpc(
              "check_premium_status",
              { p_email: email },
            );
            const isPremiumUser = Boolean(premiumResult);
            setIsPremium(isPremiumUser);
            updateCachedPremium(isPremiumUser);
          }
        } else {
          setIsPremium(false);
        }
      },
    );
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const triggerLogin = async (
    community: "general" | "madrid" | "andalucia",
  ) => {
    const isNational = community === "general";
    if (isNational && nationalLoginLoading) return;

    try {
      if (isNational) setNationalLoginLoading(true);

      const base =
        typeof window !== "undefined" &&
        window.location.hostname === "localhost"
          ? "http://localhost:3000"
          : window.location.origin;

      const redirectPath =
        community === "general" ? "/dashboard" : `/${community}/dashboard`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${base}${redirectPath}`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      alert("No se pudo iniciar sesión. Inténtalo de nuevo.");
      if (isNational) setNationalLoginLoading(false);
    }
  };

  const triggerLogout = async (redirectTo = "/") => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      clearCachedSession();
      setHasSession(false);
      setIsPremium(false);
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
      <button
        onClick={() => triggerLogin("andalucia")}
        className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors"
      >
        {hasSession ? "Accede a SeleTest" : "Entrar"}
      </button>
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
