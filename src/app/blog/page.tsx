import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

const posts: Post[] = [
  {
    slug: "selectividad-2026-mas-complicada-historia",
    title: "¿Será la Selectividad 2026 la MÁS COMPLICADA de la historia?",
    excerpt:
      "🚨 La reforma LOMLOE trae cambios radicales. Ejercicios competenciales, criterios más duros y menos opcionalidad. ¿Estás preparado para el mayor desafío educativo?",
    date: "11 de noviembre de 2025",
    category: "Selectividad 2026",
  },
  {
    slug: "selectiviandalucia-ya-disponible",
    title: "SelectiviANDALUCIA ya está disponible — Practica la PEvAU con SeleTest",
    excerpt:
      "¡Buenas noticias! Ya puedes preparar la PEvAU de Andalucía con SelectiviANDALUCIA. Accede a SeleTest, simulacros y seguimiento personalizado.",
    date: "6 de noviembre de 2025",
    category: "Novedades",
  },
  {
    slug: "como-sera-la-selectividad-2026",
    title: "Cómo será la Selectividad 2026: PAU, cambios y modelos 0 oficiales",
    excerpt:
      "Calendario, estructura renovada, ejercicios competenciales y enlaces a los exámenes modelo 0 2026 para cada comunidad.",
    date: "2 de octubre de 2025",
    category: "Selectividad 2026",
  },
  {
    slug: "como-calcular-nota-de-corte-madrid-evau",
    title: "Cómo calcular tu nota de corte (Madrid) paso a paso",
    excerpt:
      "Fórmula, ponderaciones y ejemplos con la calculadora de SelectiviMAD.",
    date: "14 de septiembre de 2025",
    category: "Notas de corte",
  },
  {
    slug: "herramienta-que-me-cambio-la-forma-de-estudiar",
    title:
      "No sabía si aprobaría la Selectividad… hasta que encontré la herramienta que me cambió la forma de estudiar.",
    excerpt:
      "Cómo cambiar tu preparación en pocas semanas: práctica por temas, feedback inmediato y enfoque en lo importante.",
    date: "12 de septiembre de 2025",
    category: "Selectividad",
  },
  {
    slug: "universidad-de-mis-suenos-imposible-hasta-este-metodo",
    title:
      "Creía que entrar a la universidad de mis sueños era imposible… hasta que descubrí este método.",
    excerpt:
      "Planifica tu estudio con claridad, mide tu progreso y evita errores típicos de 2º de Bachillerato con una estrategia real.",
    date: "10 de septiembre de 2025",
    category: "Universidad",
  },
  {
    slug: "de-perdido-a-seguro-para-la-evau-gracias-a-esto",
    title:
      "Pasé de estar perdido en segundo de bachiller a sentirme seguro para la EvAU gracias a esto.",
    excerpt:
      "De la confusión al foco: cómo estructurar tu estudio tema a tema y ganar confianza antes del examen.",
    date: "8 de septiembre de 2025",
    category: "Consejos de estudio",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Blog de selectivi<span className="text-[#FFB800]">ES</span>
          </h1>
          <div className="mt-5">
            <a
              href="/onboarding"
              className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#ffc835] text-black font-semibold rounded-xl px-5 py-3"
            >
              Saber cómo funciona en 60 seg
            </a>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-3xl">
            Estrategias, historias reales y recursos para preparar la EvAU con
            claridad y confianza.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
        {/* Lista de artículos */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden transition hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)]"
            >
              <div className="p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mb-4">
                  {post.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mt-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#FFB800] font-medium hover:opacity-80"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 p-6">
            <h3 className="font-bold mb-4">Categorías</h3>
            <div className="space-y-2">
              {["Novedades", "Selectividad", "Universidad", "Consejos de estudio"].map(
                (c) => (
                  <div key={c} className="px-4 py-2 bg-gray-50 rounded-lg">
                    {c}
                  </div>
                ),
              )}
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
