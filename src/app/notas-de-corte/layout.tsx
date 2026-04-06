
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notas de Corte 2025/2026: Madrid, Cataluña y Andalucía | SelectiviES",
  description: "Consulta todas las notas de corte de acceso a la universidad en Madrid, Cataluña y Andalucía para el curso 2025/2026. Buscador actualizado de grados y universidades para preparar tu selectividad.",
  keywords: ["notas de corte 2025", "notas de corte madrid", "notas de corte cataluña", "notas de corte andalucía", "acceso universidad", "selectividad 2025"],
  openGraph: {
    title: "Notas de Corte 2025/2026: España",
    description: "Buscador de todas las notas de corte para Madrid, Cataluña y Andalucía.",
    url: "https://selectivi.es/notas-de-corte",
    type: "website",
    images: [{ url: "/icon.svg" }]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
