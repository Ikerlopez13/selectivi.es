"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

const DASHBOARD_CACHE_KEY = "dashboard_profile";

const writeProfileCache = (
  profile: { email: string; isPremium: boolean } | null,
) => {
  try {
    if (profile) {
      localStorage.setItem(DASHBOARD_CACHE_KEY, JSON.stringify(profile));
      localStorage.setItem("es_premium", profile.isPremium ? "1" : "0");
      localStorage.setItem("logged_in", "1");
    } else {
      localStorage.removeItem(DASHBOARD_CACHE_KEY);
      localStorage.removeItem("es_premium");
      localStorage.removeItem("logged_in");
    }
  } catch (error) {
    console.warn("No se pudo actualizar la caché del login nacional", error);
  }
};

const loadPremiumStatus = async (email: string) => {
  try {
    const { data, error } = await supabase.rpc("check_premium_status", {
      p_email: email,
    });
    if (!error && (data === true || data === 1 || data === "true")) {
      return true;
    }
    if (error) {
      console.warn(
        "No se pudo verificar premium via RPC en login nacional:",
        error,
      );
    }
  } catch (rpcError) {
    console.warn("Fallo RPC premium en login nacional:", rpcError);
  }

  try {
    const { data: row, error } = await supabase
      .from("usuarios")
      .select("es_premium")
      .eq("correo_electronico", email)
      .maybeSingle();
    if (!error && row?.es_premium === true) {
      return true;
    }
    if (error) {
      console.warn("Fallback usuarios premium en login nacional:", error);
    }
  } catch (tableError) {
    console.warn(
      "No se pudo consultar usuarios premium en login nacional:",
      tableError,
    );
  }

  return false;
};

const syncSessionProfile = async (session: Session | null) => {
  if (!session?.user?.email) {
    writeProfileCache(null);
    return;
  }

  const email = session.user.email;
  const isPremium = await loadPremiumStatus(email);
  writeProfileCache({ email, isPremium });
};

export default function NationalLogin() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!isMounted) return;
      setSession(session ?? null);
      await syncSessionProfile(session ?? null);
    };

    loadSession();
    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (_event, nextSession) => {
        if (!isMounted) return;
        setSession(nextSession ?? null);
        await syncSessionProfile(nextSession ?? null);
      },
    );

    return () => {
      isMounted = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const base =
        typeof window !== "undefined" &&
        window.location.hostname === "localhost"
          ? "http://localhost:3000"
          : window.location.origin;
      const redirectTo = `${base}/dashboard`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error al iniciar sesión nacional:", error);
      alert("No se pudo iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    writeProfileCache(null);
  }, []);

  const email = session?.user?.email ?? "";

  return (
    <section className="w-full px-4 mb-20">
      <div className="max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-[28px] border-2 border-[#FFE199] bg-white shadow-[0_20px_70px_rgba(255,184,0,0.25)]">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6] via-white to-[#FFF5D6]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800] opacity-[0.03] rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB800] opacity-[0.05] rounded-full blur-2xl transform -translate-x-12 translate-y-12" />
          
          <div className="relative p-8 sm:p-12 flex flex-col gap-8 text-center">
            {/* Badge */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-center rounded-full bg-gradient-to-r from-[#FFF2C2] to-[#FFE8A6] px-4 py-2 shadow-sm">
                <span className="text-lg">🇪🇸</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F1300]">
                  Acceso nacional
                </span>
              </div>
              
              {/* Título */}
              <h1 className="text-3xl sm:text-4xl font-black text-[#1F1300] leading-tight">
                Tu cuenta <span className="text-[#FFB800]">SelectiviES</span> España
              </h1>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm mx-auto">
                Inicia sesión con Google para continuar tu progreso en cualquier
                comunidad (excepto Cataluña, que va en <span className="font-semibold">selectivi.cat</span>).
              </p>
            </div>

            {session ? (
              <div className="flex flex-col gap-6">
                {/* Usuario logueado */}
                <div className="rounded-2xl border-2 border-[#FFE8B0] bg-gradient-to-br from-[#FFF7E1] to-[#FFF9E6] px-6 py-5 shadow-sm">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex-none w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF9800] flex items-center justify-center text-white font-bold shadow-md">
                      {email[0]?.toUpperCase() || '?'}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-semibold text-[#FFB800] uppercase tracking-wide">Sesión activa</p>
                      <p className="text-sm font-medium text-[#1F1300] truncate">{email}</p>
                    </div>
                  </div>
                </div>
                
                {/* Botones de acción */}
                <div className="flex flex-col gap-3">
                  <Link
                    href="/dashboard"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-black to-gray-900 px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    <span className="text-xl">📚</span>
                    <span>Ir donde me quedé</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FFA500] px-6 py-4 text-base font-bold text-black shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    <span className="text-xl">🗺️</span>
                    <span>Ir al mapa</span>
                  </Link>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="self-center text-sm font-medium text-gray-500 hover:text-gray-700 underline decoration-dotted transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Botón de Google */}
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="group relative inline-flex items-center justify-center gap-3 self-stretch rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FFA500] px-8 py-5 text-lg font-bold text-black shadow-[0_8px_24px_rgba(255,184,0,0.35)] transition-all hover:shadow-[0_12px_32px_rgba(255,184,0,0.45)] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Conectando…</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span>Entrar con Google</span>
                    </>
                  )}
                </button>
                
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Te llevaremos a Google para iniciar sesión y volverás
                  automáticamente a SelectiviES.
                </p>
              </div>
            )}

            {/* Banner de Cataluña */}
            <div className="rounded-2xl border-2 border-dashed border-[#FFE8B0] bg-gradient-to-br from-[#FFF9EE] to-[#FFFBF5] px-5 py-4">
              <p className="text-[13px] text-gray-600 leading-relaxed">
                ¿Eres de Cataluña? Entra desde{' '}
                <a
                  href="https://selectivi.cat"
                  className="font-bold text-[#1F1300] underline decoration-2 decoration-[#FFB800] hover:decoration-[#FF9800] transition-colors"
                >
                  selectivi.cat
                </a>
                , donde tienes tu acceso propio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
