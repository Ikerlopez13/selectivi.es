import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Calculadora Nota de Corte 2026 | SelectiviES",
  description:
    "Calcula tu nota de admisión (sobre 14) para Selectividad / PAU 2026 en cualquier comunidad. Introduce tus notas y obtén el resultado al instante.",
  alternates: { canonical: "/calculadora" },
  openGraph: {
    title: "Calculadora Nota de Corte 2026 — SelectiviES",
    description:
      "Simula tu nota de corte para toda España con la fórmula oficial (0,6·NMB + 0,4·fase general + específicas ponderadas).",
    type: "article",
  },
};

export default function CalculadoraPage() {
  return <CalculatorClient />;
}
