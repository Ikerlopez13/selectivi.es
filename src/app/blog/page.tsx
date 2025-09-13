import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

const posts: Post[] = [
  {
    slug: 'herramienta-que-me-cambio-la-forma-de-estudiar',
    title: 'No sabía si aprobaría la Selectividad… hasta que encontré la herramienta que me cambió la forma de estudiar.',
    excerpt:
      'Cómo cambiar tu preparación en pocas semanas: práctica por temas, feedback inmediato y enfoque en lo importante.',
    date: '12 de septiembre de 2025',
    category: 'Selectividad',
  },
  {
    slug: 'universidad-de-mis-suenos-imposible-hasta-este-metodo',
    title:
      'Creía que entrar a la universidad de mis sueños era imposible… hasta que descubrí este método.',
    excerpt:
      'Planifica tu estudio con claridad, mide tu progreso y evita errores típicos de 2º de Bachillerato con una estrategia real.',
    date: '10 de septiembre de 2025',
    category: 'Universidad',
  },
  {
    slug: 'de-perdido-a-seguro-para-la-evau-gracias-a-esto',
    title:
      'Pasé de estar perdido en segundo de bachiller a sentirme seguro para la EvAU gracias a esto.',
    excerpt:
      'De la confusión al foco: cómo estructurar tu estudio tema a tema y ganar confianza antes del examen.',
    date: '8 de septiembre de 2025',
    category: 'Consejos de estudio',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Blog de selectivi<span className="text-[#FFB800]">ES</span></h1>
          <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-3xl">
            Estrategias, historias reales y recursos para preparar la EvAU con claridad y confianza.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
        {/* Lista de artículos */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden transition hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)]">
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
              {['Selectividad', 'Universidad', 'Consejos de estudio'].map((c) => (
                <div key={c} className="px-4 py-2 bg-gray-50 rounded-lg">
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 p-6">
            <h3 className="font-bold mb-2">Suscríbete a nuestro boletín</h3>
            <p className="text-gray-600 text-sm mb-4">
              Recibe los mejores consejos para Selectividad, notas de corte y novedades.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />
              <button
                type="submit"
                className="w-full bg-[#FFB800] text-black px-4 py-2.5 rounded-lg font-medium hover:bg-[#ffc835] transition"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </aside>
      </section>
      <Footer />
    </main>
  )
}


