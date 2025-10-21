"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Profile = {
  email: string;
  isPremium: boolean;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    initDashboard();
  }, []);

  const initDashboard = async () => {
    // Procesar hash OAuth si existe
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      if (hash.includes("access_token=")) {
        console.log("🔑 [DASHBOARD] Hash OAuth detectado, procesando...");
        
        const params = new URLSearchParams(hash.replace(/^#/, ""));
        const accessToken = params.get("access_token");
        const refreshToken = params.get("refresh_token");
        
        if (accessToken && refreshToken) {
          try {
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            
            if (error) {
              console.error("❌ [DASHBOARD] Error setSession:", error);
            } else {
              console.log("✅ [DASHBOARD] Sesión establecida desde hash");
            }
            
            // Limpiar hash de la URL
            window.history.replaceState(null, "", window.location.pathname);
          } catch (error) {
            console.error("💥 [DASHBOARD] Error procesando hash:", error);
          }
        }
      }
    }
    
    // Cargar perfil
    await loadProfile();
  };

  const loadProfile = async () => {
    try {
      console.log("🚀 [DASHBOARD] Cargando perfil...");

      // 1. Obtener sesión
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error("❌ [DASHBOARD] Error obteniendo sesión:", sessionError);
        window.location.href = "/login";
        return;
      }

      if (!session?.user?.email) {
        console.log("⚠️ [DASHBOARD] No hay sesión, redirigiendo...");
        window.location.href = "/login";
        return;
      }

      const email = session.user.email;
      console.log("✅ [DASHBOARD] Sesión encontrada:", email);

      // 2. Mostrar dashboard inmediatamente
      setProfile({ email, isPremium: false });
      setLoading(false);
      setChecking(true);

      // 3. Verificar premium en segundo plano
      console.log("🔍 [DASHBOARD] Verificando premium...");
      const response = await fetch('/api/check-premium', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error("❌ [DASHBOARD] Error en API:", response.status);
        setChecking(false);
        return;
      }

      const data = await response.json();
      console.log("📊 [DASHBOARD] Respuesta API:", data);

      const isPremium = Boolean(data.isPremium);
      console.log("🎯 [DASHBOARD] Estado premium:", isPremium);

      // 4. Actualizar estado
      setProfile({ email, isPremium });
      setChecking(false);

    } catch (error) {
      console.error("💥 [DASHBOARD] Error:", error);
      setLoading(false);
      setChecking(false);
    }
  };

  const handleLogout = async () => {
    console.log("🚪 [DASHBOARD] Cerrando sesión...");
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log("✅ [DASHBOARD] Sesión cerrada");
      window.location.href = "/login";
    } catch (error) {
      console.error("❌ [DASHBOARD] Error logout:", error);
      window.location.href = "/login";
    }
  };

  // Loading inicial
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

  // No premium
  if (profile && !profile.isPremium) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Perfil */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Plan estándar</div>
                  <div className="text-gray-600">{profile.email}</div>
                </div>
                {checking && (
                  <div className="text-sm text-gray-400 flex items-center gap-2">
                    <div className="animate-spin">⚡</div>
                    Verificando...
                  </div>
                )}
              </div>
            </div>

            {/* CTA Premium */}
            <div className="bg-[#FFF7E1] rounded-2xl shadow p-8 text-center border border-[#FFE199]">
              <h2 className="text-2xl font-bold mb-2">Sube a Premium</h2>
              <p className="mb-6">
                Accede a todas las preguntas y funcionalidades exclusivas en SeleTest.
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

            {/* Logout */}
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

  // Premium
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Perfil Premium */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">⭐️</span>
              </div>
              <div>
                <div className="font-medium">Premium</div>
                <div className="text-gray-600">{profile?.email}</div>
              </div>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-[#FFB800] rounded-2xl shadow p-8 text-center">
            <div className="text-4xl mb-4">⭐️</div>
            <h2 className="text-2xl font-bold mb-2">Tu acceso Premium</h2>
            <p className="mb-6">
              Disfruta de acceso ilimitado a todas las preguntas y funcionalidades exclusivas.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Ir al mapa de comunidades →
            </Link>
          </div>

          {/* Logout */}
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
