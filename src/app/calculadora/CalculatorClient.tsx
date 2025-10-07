"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type SpecificEntry = {
  id: string;
  subject: string;
  grade: number;
  weight: number;
};

const MAX_SPECIFICS = 4;
const weightOptions = [0, 0.1, 0.2];
let uid = 0;

export default function CalculatorClient() {
  const [nmb, setNmb] = useState(8);
  const [lengua, setLengua] = useState(7.5);
  const [historiaTipo, setHistoriaTipo] = useState<
    "Historia de España" | "Historia de la Filosofía"
  >("Historia de España");
  const [historia, setHistoria] = useState(7);
  const [extranjera, setExtranjera] = useState(8);
  const [modality, setModality] = useState<
    "Ciencias" | "Ciencias Sociales" | "Humanidades" | "Artes"
  >("Ciencias");
  const [modalityGrade, setModalityGrade] = useState(8);
  const [specific, setSpecific] = useState<SpecificEntry[]>([
    createEntry("Matemáticas II", 8, 0.2),
    createEntry("Biología", 7.5, 0.2),
  ]);

  const cfg = useMemo(() => {
    const values = [lengua, historia, extranjera, modalityGrade].map((v) =>
      clamp(v),
    );
    const average = values.reduce((acc, val) => acc + val, 0) / values.length;
    return round2(average);
  }, [extranjera, historia, lengua, modalityGrade]);

  const boosters = useMemo(() => {
    const contributions = specific
      .filter((item) => item.grade >= 5 && item.weight > 0)
      .map((item) => round3(item.grade * item.weight))
      .sort((a, b) => b - a);
    const total = round3(
      contributions.slice(0, 2).reduce((sum, value) => sum + value, 0),
    );
    return { contributions, total };
  }, [specific]);

  const finalScore = useMemo(() => {
    const base = 0.6 * clamp(nmb) + 0.4 * cfg;
    return round3(base + boosters.total);
  }, [boosters.total, cfg, nmb]);

  const bestContributions = boosters.contributions.slice(0, 2);
  const baseScore = round3(0.6 * clamp(nmb) + 0.4 * cfg);

  const modalityLabels: Record<typeof modality, string> = {
    Ciencias: "Matemáticas II",
    "Ciencias Sociales": "Matemáticas aplicadas a las CCSS II",
    Humanidades: "Latín II",
    Artes: "Fundamentos del Arte II",
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF6]">
      <Navbar />

      <header className="relative overflow-hidden bg-gradient-to-br from-[#FFE58A] via-[#FFF6CF] to-[#FDEBD2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(252,142,52,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-black/70">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>›</li>
              <li className="font-semibold">Calculadora Nota de Corte 2026</li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                Nueva · PAU 2026
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl font-black text-[#1F1300]">
                Calculadora de nota de corte general para toda España
              </h1>
              <p className="mt-4 text-lg md:text-xl text-[#372614]">
                Introduce tus calificaciones de Bachillerato y Selectividad
                (fase general + específicas) para obtener tu nota de admisión
                sobre 14. Compatible con cualquier comunidad autónoma.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    document
                      .querySelector("#calculadora")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1F1300]"
                >
                  Empezar ahora →
                </button>
                <Link
                  href="/madrid/calculadora"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/20 px-5 py-3 text-sm font-semibold text-[#1F1300] hover:bg-black/5"
                >
                  Ver versión Madrid
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#FFB800] via-[#FFDB4D] to-[#FF8A3D] blur-2xl opacity-60" />
              <div className="relative rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(17,24,39,0.15)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#FF7A00]">
                  Fórmula oficial
                </div>
                <div className="mt-3 text-3xl font-extrabold text-[#1F1300]">
                  Nota de corte = 0,6·NMB + 0,4·CFG + Σ (ponderación ×
                  específica)
                </div>
                <p className="mt-4 text-sm text-[#5F4B37]">
                  Se suman como máximo dos específicas aprobadas (nota ≥ 5) y
                  ponderadas hasta +4 puntos extra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="calculadora" className="relative bg-[#FFF7E1] py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,153,0,0.15),_transparent_45%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <form className="rounded-3xl border border-[#FFD27F] bg-white/90 backdrop-blur shadow-[0_15px_45px_rgba(255,136,0,0.15)] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F1300]">
                Introduce tus notas
              </h2>
              <p className="mt-1 text-sm text-[#5F4B37]">
                Todas las notas entre 0 y 10. Usa decimales con punto.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-[#1F1300]">
                    Nota media de Bachillerato (NMB)
                  </label>
                  <NumberInput
                    value={nmb}
                    onChange={setNmb}
                    placeholder="Ej. 8.35"
                  />
                </div>

                <fieldset className="space-y-4">
                  <legend className="text-sm font-semibold text-[#1F1300]">
                    Fase general (CFG)
                  </legend>
                  <div className="grid gap-3 md:grid-cols-2">
                    <NumberInput
                      label="Lengua Castellana y Literatura II"
                      value={lengua}
                      onChange={setLengua}
                    />
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#5F4B37]">
                        Historia troncal
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={historiaTipo}
                          onChange={(event) =>
                            setHistoriaTipo(
                              event.target.value as typeof historiaTipo,
                            )
                          }
                          className="select select-bordered w-1/2"
                        >
                          <option value="Historia de España">
                            Historia de España
                          </option>
                          <option value="Historia de la Filosofía">
                            Historia de la Filosofía
                          </option>
                        </select>
                        <NumberInput
                          value={historia}
                          onChange={setHistoria}
                          placeholder="Nota"
                          className="w-1/2"
                        />
                      </div>
                    </div>
                    <NumberInput
                      label="Primera Lengua Extranjera II"
                      value={extranjera}
                      onChange={setExtranjera}
                      placeholder="Ej. Inglés"
                    />
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#5F4B37]">
                        Troncal de modalidad
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={modality}
                          onChange={(event) =>
                            setModality(event.target.value as typeof modality)
                          }
                          className="select select-bordered w-1/2"
                        >
                          <option value="Ciencias">Ciencias</option>
                          <option value="Ciencias Sociales">
                            Ciencias Sociales
                          </option>
                          <option value="Humanidades">Humanidades</option>
                          <option value="Artes">Artes</option>
                        </select>
                        <NumberInput
                          value={modalityGrade}
                          onChange={setModalityGrade}
                          placeholder={modalityLabels[modality]}
                          className="w-1/2"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="space-y-3">
                  <legend className="text-sm font-semibold text-[#1F1300]">
                    Fase específica (ponderaciones)
                  </legend>
                  <p className="text-xs text-[#5F4B37]">
                    Añade hasta cuatro asignaturas. Solo cuentan las dos mejores
                    con ponderación diferente de 0.
                  </p>
                  <div className="space-y-3">
                    {specific.map((row, index) => (
                      <div
                        key={row.id}
                        className="grid items-center gap-2 rounded-2xl border border-[#FFE4B5] bg-[#FFF9ED] px-4 py-3 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.2fr)_minmax(0,0.15fr)_minmax(0,0.05fr)]"
                      >
                        <input
                          value={row.subject}
                          onChange={(event) =>
                            updateSpecific(index, {
                              subject: event.target.value,
                            })
                          }
                          placeholder={`Específica ${index + 1}`}
                          className="input input-ghost w-full text-sm"
                          maxLength={80}
                        />
                        <select
                          value={row.weight}
                          onChange={(event) =>
                            updateSpecific(index, {
                              weight: Number(event.target.value),
                            })
                          }
                          className="select select-bordered"
                        >
                          {weightOptions.map((option) => (
                            <option key={option} value={option}>
                              Pondera {option.toFixed(1)}
                            </option>
                          ))}
                        </select>
                        <NumberInput
                          value={row.grade}
                          onChange={(value) =>
                            updateSpecific(index, { grade: value })
                          }
                          placeholder="Nota"
                        />
                        <div className="flex justify-end">
                          {specific.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSpecific(index)}
                              className="btn btn-ghost btn-xs text-[#A0581B]"
                            >
                              −
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    {specific.length < MAX_SPECIFICS && (
                      <button
                        type="button"
                        onClick={() =>
                          setSpecific((prev) => [
                            ...prev,
                            createEntry("Asignatura específica", 0, 0),
                          ])
                        }
                        className="btn btn-outline btn-sm border-[#FFB800] text-[#A0581B] hover:bg-[#FFB800] hover:text-black"
                      >
                        + Añadir asignatura
                      </button>
                    )}
                  </div>
                </fieldset>
              </div>
            </form>

            <aside className="rounded-3xl border border-[#FFD27F] bg-white/95 p-6 md:p-8 shadow-[0_12px_42px_rgba(252,142,52,0.18)]">
              <h2 className="text-2xl font-bold text-[#1F1300]">Resultado</h2>
              <div className="mt-4 space-y-5">
                <div className="rounded-2xl border border-[#FFE4B5] bg-[#FFF4D8] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#FF7A00]">
                    Nota final
                  </p>
                  <div className="mt-2 text-4xl font-black text-[#1F1300]">
                    {finalScore.toFixed(3)}
                    <span className="text-lg font-semibold text-[#5F4B37]">
                      {" "}
                      / 14
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#5F4B37]">
                    Base (0,6·NMB + 0,4·CFG):{" "}
                    <strong>{baseScore.toFixed(3)}</strong>
                  </p>
                  <p className="text-sm text-[#5F4B37]">
                    Específicas (máx. +4):{" "}
                    <strong>
                      {bestContributions
                        .reduce((sum, value) => sum + value, 0)
                        .toFixed(3)}
                    </strong>
                  </p>
                </div>

                <div className="space-y-3">
                  <DetailRow
                    label="NMB"
                    value={clamp(nmb)}
                    helper="Se pondera al 60%"
                  />
                  <DetailRow
                    label="CFG"
                    value={cfg}
                    helper={`${historiaTipo}, Lengua, Extranjera, ${modalityLabels[modality]}`}
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#5F4B37]">
                      Específicas ponderadas
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-[#372614]">
                      {specific
                        .map((item) => ({
                          ...item,
                          contribution: round3(item.grade * item.weight),
                        }))
                        .filter((item) => item.weight > 0)
                        .sort((a, b) => b.contribution - a.contribution)
                        .slice(0, 2)
                        .map((item) => (
                          <li
                            key={item.id}
                            className="flex justify-between rounded-lg border border-[#FFE4B5] bg-[#FFF9ED] px-3 py-2"
                          >
                            <span>{item.subject}</span>
                            <span>
                              {item.grade.toFixed(2)} × {item.weight.toFixed(1)}{" "}
                              =
                              <strong className="ml-1">
                                {item.contribution.toFixed(2)}
                              </strong>
                            </span>
                          </li>
                        ))}
                      {specific.filter((item) => item.weight > 0).length ===
                        0 && (
                        <li className="rounded-lg border border-dashed border-[#FFE4B5] px-3 py-2 text-[#A0581B]">
                          Añade una específica ponderada ≥ 5 para sumar hasta +4
                          puntos.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-black text-white px-4 py-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold">Consejos rápidos</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                      <li>
                        Prioriza específicas ponderadas a 0,2 en tu grado
                        objetivo.
                      </li>
                      <li>Necesitas ≥ 5 para que la ponderación cuente.</li>
                      <li>
                        La nota máxima es 14: 10 de base + 4 por específicas.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Probar SeleTest
                    </h4>
                    <div className="mt-3 grid gap-2">
                      <Link
                        href="/madrid/seletest"
                        className="inline-flex items-center justify-center rounded-lg bg-[#FFB800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ffc835]"
                      >
                        Practicar SeleTest Madrid
                      </Link>
                      <a
                        href="https://selectivi.cat"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        Ir a Selectivi.cat (Cataluña)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#1F1300]">
            ¿Cómo se calcula la nota de corte?
          </h2>
          <div className="mt-4 rounded-3xl border border-[#FFE4B5] bg-[#FFF7E1] p-6 text-sm text-[#372614]">
            <p>
              <strong>
                Nota de admisión = 0,6 · NMB + 0,4 · CFG + Σ (ponderación ·
                específica)
              </strong>
              . Los exámenes de la fase general (Lengua, Historia o Filosofía,
              Primera Lengua Extranjera y la troncal de modalidad) forman la{" "}
              <em>CFG</em>. La fase específica permite sumar hasta 4 puntos
              extra con un máximo de dos asignaturas ponderadas.
            </p>
            <p className="mt-3">
              Cada comunidad autónoma publica las ponderaciones oficiales (0,1 o
              0,2) por grado y universidad. Revisa las ponderaciones en la web
              de tu comunidad para elegir las específicas adecuadas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );

  function updateSpecific(index: number, patch: Partial<SpecificEntry>) {
    setSpecific((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, ...patch } : item)),
    );
  }

  function removeSpecific(index: number) {
    setSpecific((prev) => prev.filter((_, idx) => idx !== index));
  }
}

function NumberInput({
  value,
  onChange,
  label,
  placeholder,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {label ? (
        <label className="text-xs font-medium text-[#5F4B37]">{label}</label>
      ) : null}
      <div className="mt-1 w-full rounded-xl border border-[#FFE4B5] bg-white px-4 py-3 shadow-inner shadow-[#FFEFD0]/40">
        <input
          type="number"
          step="0.01"
          min={0}
          max={10}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium text-[#1F1300] outline-none"
        />
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  helper,
}: {
  label: string;
  value: number;
  helper?: string;
}) {
  return (
    <div className="flex justify-between gap-4 rounded-xl border border-[#FFE4B5] bg-[#FFF9ED] px-4 py-3 text-sm text-[#372614]">
      <div>
        <div className="font-semibold text-[#1F1300]">{label}</div>
        {helper ? <div className="text-xs text-[#5F4B37]">{helper}</div> : null}
      </div>
      <div className="font-bold text-[#1F1300]">{value.toFixed(2)}</div>
    </div>
  );
}

function createEntry(
  subject: string,
  grade: number,
  weight: number,
): SpecificEntry {
  return { id: `specific-${uid++}`, subject, grade, weight };
}

function clamp(n: number) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(10, n));
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function round3(n: number) {
  return Math.round(n * 1000) / 1000;
}
