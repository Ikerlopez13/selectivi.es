"use client";

import { useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Profile = {
  email: string;
  isPremium: boolean;
};

const fetchPremiumFlag = async (accessToken: string): Promise<boolean> => {
  console.log("🔍 Verificando premium con API");
  
  try {
    console.log("📡 Llamando a /api/check-premium");

    const response = await fetch('/api/check-premium', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log("📥 Respuesta recibida:", response.status);

    if (!response.ok) {
      console.error("❌ API error:", response.status, response.statusText);
      return false;
    }

    const data = await response.json();
    console.log("📊 Datos:", data);

    if (data.error) {
      console.error("❌ Error en respuesta:", data.error);
      return false;
    }

    const isPremium = Boolean(data.isPremium);
    console.log("✅ Premium:", isPremium);
    return isPremium;

  } catch (error: any) {
    console.error("💥 Error llamando a API:", error.message || error);
    return false;
  }
};

const processHashIfPresent = async () => {
  if (typeof window === "undefined") return;

  const { hash, pathname, search } = window.location;
  if (!hash || !hash.includes("access_token=")) return;

  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  
  if (!accessToken || !refreshToken) return;

  try {
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    
    if (error) {
      console.error("Error estableciendo sesión:", error);
      return;
    }

    // Guardar comunidad en cookie
    const isMadrid = pathname.includes("/madrid");
    const isAndalucia = pathname.includes("/andalucia");
    const community = isMadrid ? "madrid" : isAndalucia ? "andalucia" : "general";

    document.cookie = `community=${community}; path=/; max-age=2592000; SameSite=Lax`;

    // Limpiar hash de la URL
    window.history.replaceState(null, "", `${pathname}${search}`);
  } catch (error) {
    console.error("Error procesando OAuth:", error);
  }
};

const waitForSession = async (maxAttempts = 30): Promise<Session | null> => {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user?.email) {
      return session;
    }
    
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  
  return null;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkingPremium, setCheckingPremium] = useState(false);
  const isLoadingRef = useRef(false);
  const isMountedRef = useRef(true);
  const lastEmailRef = useRef<string | null>(null);

  useEffect(() => {
    isMountedRef.current = true;

    const loadProfile = async (session?: Session | null) => {
      // Evitar cargas duplicadas
      if (isLoadingRef.current) {
        console.log("⏭️ Ya hay una carga en progreso, saltando...");
        return;
      }

      try {
        // Obtener sesión
        const currentSession = session || await waitForSession();

        if (!isMountedRef.current) return;

        // Si no hay sesión, redirigir a login
        if (!currentSession?.user?.email) {
          setProfile(null);
          setLoading(false);
          window.location.href = "/login";
          return;
        }

        const email = currentSession.user.email;

        // Si ya cargamos este email, no volver a cargar
        if (lastEmailRef.current === email && profile?.email === email) {
          console.log("✅ Perfil ya cargado para:", email);
          setLoading(false);
          return;
        }

        isLoadingRef.current = true;
        lastEmailRef.current = email;
        
        console.log("👤 Email del usuario:", email);

        // Mostrar dashboard inmediatamente con estado "verificando"
        setProfile({ email, isPremium: false });
        setLoading(false);
        setCheckingPremium(true);

        // Verificar premium en segundo plano usando el token de la sesión
        const accessToken = currentSession.access_token;
        const isPremium = await fetchPremiumFlag(accessToken);
        console.log("🎯 Estado premium final:", isPremium);

        if (!isMountedRef.current) return;

        const newProfile: Profile = { email, isPremium };
        setProfile(newProfile);
        setCheckingPremium(false);
        
        console.log("✨ Perfil cargado:", newProfile);
      } catch (error) {
        console.error("Error cargando perfil:", error);
        
        if (isMountedRef.current) {
          setProfile(null);
          setLoading(false);
        }
      } finally {
        isLoadingRef.current = false;
      }
    };

    const init = async () => {
      // Procesar hash de OAuth si existe
      await processHashIfPresent();
      
      // Cargar perfil
      await loadProfile();
    };

    init();

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("🔔 Auth event:", event);
        
        if (!isMountedRef.current) return;

        // Ignorar eventos duplicados de SIGNED_IN
        if (event === "SIGNED_IN" && lastEmailRef.current === session?.user?.email) {
          console.log("⏭️ Evento SIGNED_IN duplicado ignorado");
          return;
        }

        if (event === "SIGNED_OUT") {
          lastEmailRef.current = null;
          setProfile(null);
          setLoading(false);
          window.location.href = "/login";
          return;
        }

        if (session?.user?.email) {
          await loadProfile(session);
        } else {
          lastEmailRef.current = null;
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      isMountedRef.current = false;
      lastEmailRef.current = null;
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error("Error cerrando sesión:", error);
        throw error;
      }

      // Limpiar estado
      setProfile(null);
      
      // Redirigir
      window.location.href = "/login";
    } catch (error) {
      console.error("Error en logout:", error);
      setLoading(false);
      
      // Intentar redirigir igualmente
      window.location.href = "/login";
    }
  };

  // Loading state
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

  // Non-premium user
  if (!profile || !profile.isPremium) {
    const email = profile?.email ?? "Usuario";
    
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Plan estándar</div>
                  <div className="text-gray-600">{email}</div>
                </div>
                {checkingPremium && (
                  <div className="text-sm text-gray-400 flex items-center gap-2">
                    <div className="animate-spin">⚡</div>
                    Verificando...
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#FFF7E1] rounded-2xl shadow p-8 text-center border border-[#FFE199]">
              <h2 className="text-2xl font-bold mb-2">Sube a Premium</h2>
              <p className="mb-6">
                Accede a todas las preguntas y funcionalidades exclusivas en
                SeleTest.
              </p>
              <div className="flex flex-col gap-3 items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium border hover:bg-gray-50"
                >
                  Ir al mapa de comunidades
                </Link>
                <Link
                  href="/"
                  className="inline-block bg-[#FFB800] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#ffc835]"
                >
                  Ver planes Premium →
                </Link>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleLogout}
                className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Premium user
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">⭐️</span>
              </div>
              <div>
                <div className="font-medium">Premium</div>
                <div className="text-gray-600">{profile.email}</div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFB800] rounded-2xl shadow p-8 text-center">
            <div className="text-4xl mb-4">⭐️</div>
            <h2 className="text-2xl font-bold mb-2">Tu acceso Premium</h2>
            <p className="mb-6">
              Disfruta de acceso ilimitado a todas las preguntas y
              funcionalidades exclusivas.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Ir al mapa de comunidades →
            </Link>
          </div>

          <div className="text-center">
            <button
              onClick={handleLogout}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}