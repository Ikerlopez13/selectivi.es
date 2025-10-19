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
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#FFE199] bg-white shadow-[0_24px_60px_rgba(255,184,0,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,223,128,0.4),_rgba(255,184,0,0.05))]" />
          <div className="relative p-8 sm:p-10 flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-2">
              <span className="self-center rounded-full bg-[#FFF2C2] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#1F1300]">
                Acceso nacional
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1300]">
                Tu cuenta SelectiviES España
              </h2>
              <p className="text-gray-600">
                Inicia sesión con Google para continuar tu progreso en cualquier
                comunidad (excepto Cataluña, que va en selectivi.cat).
              </p>
            </div>

            {session ? (
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl border border-[#FFE8B0] bg-[#FFF7E1] px-5 py-4 text-sm text-[#3D2A00]">
                  <span className="font-semibold">Sesión activa</span>
                  <span className="ml-2 text-gray-600">{email}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Ir donde me quedé
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 py-3 text-sm font-semibold text-black hover:bg-[#ffc835]"
                  >
                    Ir al mapa
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="self-center text-sm text-gray-500 hover:text-gray-700"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 self-center rounded-xl bg-[#FFB800] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#ffc835] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Conectando…" : "Entrar con Google"}
                </button>
                <p className="text-xs text-gray-500">
                  Te llevaremos a Google para iniciar sesión y volverás
                  automáticamente a SelectiviES.
                </p>
              </div>
            )}

            <div className="rounded-2xl border border-dashed border-[#FFE8B0] bg-[#FFF9EE] px-5 py-4 text-xs text-gray-600">
              ¿Eres de Cataluña? Entra desde
              <a
                href="https://selectivi.cat"
                className="ml-1 font-semibold underline text-[#1F1300]"
              >
                selectivi.cat
              </a>
              , donde tienes tu acceso propio.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
