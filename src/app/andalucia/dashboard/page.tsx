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

export default function DashboardAndaluciaPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          window.location.href = "/dashboard";
          return;
        }

        const baseProfile: Profile = {
          email: session.user.email || "",
          isPremium: false,
        };

        setProfile(baseProfile);

        try {
          const metadata = session.user.user_metadata as Record<
            string,
            unknown
          >;
          const nombre =
            (typeof metadata?.full_name === "string" && metadata.full_name) ||
            (typeof metadata?.name === "string" && metadata.name) ||
            baseProfile.email.split("@")[0] ||
            "";
          const comunidadAuto =
            typeof window !== "undefined" &&
            window.location.pathname.startsWith("/andalucia")
              ? "andalucia"
              : "general";
          const avatarUrl =
            typeof metadata?.avatar_url === "string"
              ? metadata.avatar_url
              : typeof metadata?.picture === "string"
                ? metadata.picture
                : null;

          const { error: upsertError } = await supabase
            .from("usuarios")
            .upsert(
              {
                user_id: session.user.id,
                correo_electronico: baseProfile.email,
                nombre,
                comunidad_autonoma: comunidadAuto,
                avatar_url: avatarUrl,
              },
              { onConflict: "user_id" },
            )
            .select("user_id")
            .single();

          if (upsertError) {
            console.error("Error al crear/actualizar usuario:", upsertError);
          }
        } catch (syncError) {
          console.error(
            "No se pudo sincronizar el usuario en la tabla usuarios:",
            syncError,
          );
        }

        if (baseProfile.email) {
          const { data: premiumData, error: premiumError } = await supabase.rpc(
            "check_premium_status",
            {
              p_email: baseProfile.email,
            },
          );

          if (premiumError) {
            console.error("Error al verificar estado premium:", premiumError);
          } else if (premiumData === true) {
            setProfile({ ...baseProfile, isPremium: true });
          }
        }
      } catch (error: unknown) {
        console.error("Error:", error);
        if (error instanceof Error && error.message.includes("auth")) {
          window.location.href = "/dashboard";
        }
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

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

  if (!profile || !profile.isPremium) {
    const email = profile?.email ?? "";
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium">Plan estándar</div>
                  <div className="text-gray-600">{email}</div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF4D8] rounded-2xl shadow p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Sube a Premium</h2>
              <p className="mb-6">
                Accede a todas las preguntas, simulacros y estadísticas
                específicas para Andalucía.
              </p>
              <div className="flex flex-col gap-3 items-center">
                <Link
                  href="/andalucia/seletest"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium border hover:bg-gray-50"
                >
                  Ir a SeleTest Andalucía
                </Link>
                <Link
                  href="/andalucia/premium"
                  className="inline-block bg-[#FFB800] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#ffc835]"
                >
                  Ver planes Premium →
                </Link>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.href = "/dashboard";
                }}
                className="text-gray-400 text-sm hover:text-gray-600"
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

  const email = profile.email;
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
                <div className="text-gray-600">{email}</div>
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
              href="/andalucia/seletest"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-50"
            >
              Acceder a SeleTest Premium →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/andalucia/seletest"
              className="bg-white rounded-2xl shadow p-6 border border-[#FFE4B5] hover:shadow-lg transition"
            >
              <div className="text-sm font-semibold text-[#FF6B00]">
                Practicar
              </div>
              <div className="mt-2 text-xl font-bold">SeleTest Andalucía</div>
              <p className="mt-2 text-sm text-gray-600">
                Preguntas por asignaturas, simulacros y modo repaso adaptado a
                la PAU andaluza.
              </p>
            </Link>

            <Link
              href="/andalucia/premium"
              className="bg-[#1F1300] text-white rounded-2xl shadow p-6 hover:bg-black transition"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Beneficios
              </div>
              <div className="mt-2 text-xl font-bold">Tu acceso Premium</div>
              <p className="mt-2 text-sm text-white/80">
                Accede a todos los simulacros, estadísticas avanzadas y
                actualizaciones por comunidad.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
