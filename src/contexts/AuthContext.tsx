"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase/client";

type AuthContextType = {
  hasSession: boolean;
  isPremium: boolean;
  userEmail: string | null;
  loading: boolean;
  refreshPremium: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  hasSession: false,
  isPremium: false,
  userEmail: null,
  loading: true,
  refreshPremium: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hasSession, setHasSession] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkPremiumStatus = async (accessToken: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/check-premium', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) return false;

      const data = await response.json();
      return Boolean(data.isPremium);
    } catch (error) {
      console.error("Error checking premium:", error);
      return false;
    }
  };

  const refreshPremium = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.access_token) {
        const premium = await checkPremiumStatus(session.access_token);
        setIsPremium(premium);
        
        // Guardar en localStorage para persistencia
        localStorage.setItem("es_premium", premium ? "1" : "0");
      }
    } catch (error) {
      console.error("Error refreshing premium:", error);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Cargar estado inicial desde localStorage
    const cachedPremium = localStorage.getItem("es_premium") === "1";
    setIsPremium(cachedPremium);

    // Verificar sesión actual
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!mounted) return;

        if (session?.user) {
          setHasSession(true);
          setUserEmail(session.user.email || null);

          // Verificar premium
          if (session.access_token) {
            const premium = await checkPremiumStatus(session.access_token);
            setIsPremium(premium);
            localStorage.setItem("es_premium", premium ? "1" : "0");
          }
        } else {
          setHasSession(false);
          setUserEmail(null);
          setIsPremium(false);
          localStorage.removeItem("es_premium");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    initAuth();

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        console.log("Auth event:", event);

        if (session?.user) {
          setHasSession(true);
          setUserEmail(session.user.email || null);

          // Verificar premium
          if (session.access_token) {
            const premium = await checkPremiumStatus(session.access_token);
            setIsPremium(premium);
            localStorage.setItem("es_premium", premium ? "1" : "0");
          }
        } else {
          setHasSession(false);
          setUserEmail(null);
          setIsPremium(false);
          localStorage.removeItem("es_premium");
        }

        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        hasSession,
        isPremium,
        userEmail,
        loading,
        refreshPremium,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}