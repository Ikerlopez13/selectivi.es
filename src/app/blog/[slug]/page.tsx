import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

type Post = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  content: ReactNode
}

const POSTS: Post[] = [
  {
    slug: 'herramienta-que-me-cambio-la-forma-de-estudiar',
    title: 'No sabía si aprobaría la Selectividad… hasta que encontré la herramienta que me cambió la forma de estudiar.',
    description:
      'Historias reales y una guía paso a paso para estudiar por temas con feedback inmediato y seguimiento de progreso.',
    date: '12 de septiembre de 2025',
    category: 'Selectividad',
    content: (
      <>
        <p className="text-gray-700 mb-6">
          Si te pasa que estudias horas pero no sabes si aprobarás, no es por falta de esfuerzo: es por
          <strong> falta de foco y verificación</strong>. Aquí tienes un esquema accionable, paso a paso, para
          transformar tu estudio en resultados.
        </p>

        <h2 className="text-2xl font-semibold mb-3">El problema real</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl border border-gray-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Antes</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Resumenes infinitos y sensación de “me falta todo”.</li>
              <li>Poca práctica tipo EvAU; estudio teórico sin comprobación.</li>
              <li>Sin métricas: no sabes si realmente mejoras.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 bg-[#FFFBEB]">
            <h3 className="font-semibold mb-2">Ahora</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Estudio <strong>por temas</strong> con objetivos claros.</li>
              <li>Preguntas tipo EvAU + <strong>feedback inmediato</strong>.</li>
              <li>Seguimiento simple de progreso por tema.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Plan de acción en 3 pasos</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Mapa de temas</strong>: lista los temas del temario y marca prioridad (alta/media/baja) según
            probabilidad y dominio actual.
          </li>
          <li>
            <strong>Práctica guiada</strong>: responde 5–10 preguntas tipo EvAU del tema; anota los fallos y revisa el
            apunte exacto que corrige ese fallo.
          </li>
          <li>
            <strong>Control de progreso</strong>: registra “Domino / Repasar / No domino” y repite el tema hasta dejarlo en
            “Domino”.
          </li>
        </ol>

        <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50 mb-8">
          <p className="font-semibold mb-1">Checklist rápida</p>
          <ul className="list-disc pl-5 text-gray-700 grid md:grid-cols-2 gap-y-1">
            <li>Objetivo de la semana por temas definido.</li>
            <li>Preguntas tipo EvAU resueltas y corregidas.</li>
            <li>Errores anotados con su explicación.</li>
            <li>Estado del tema actualizado (Domino/Repasar/No domino).</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Resultado esperado</h2>
        <p className="text-gray-700 mb-8">
          Llegas al examen con <strong>seguridad</strong> porque has <strong>demostrado</strong> tema por tema que lo dominas y
          sabes dónde insistir.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">¿Prueba rápida?</p>
            <p className="text-gray-600 text-sm">Mira en 60 segundos cómo funciona el sistema.</p>
          </div>
          <Link href="/onboarding" className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
            Ver cómo funciona →
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold mb-3">Artículos relacionados</h3>
          <ul className="list-disc pl-5 text-[#FFB800]">
            <li>
              <Link href="/blog/universidad-de-mis-suenos-imposible-hasta-este-metodo">Entrar a tu universidad objetivo con un
                plan real</Link>
            </li>
            <li>
              <Link href="/blog/de-perdido-a-seguro-para-la-evau-gracias-a-esto">De perdido a seguro para la EvAU</Link>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    slug: 'universidad-de-mis-suenos-imposible-hasta-este-metodo',
    title:
      'Creía que entrar a la universidad de mis sueños era imposible… hasta que descubrí este método.',
    description:
      'De la acumulación de apuntes al estudio con foco: prioriza, practica y mejora con datos.',
    date: '10 de septiembre de 2025',
    category: 'Universidad',
    content: (
      <>
        <p className="text-gray-700 mb-6">
          Cuando el objetivo es ambicioso, necesitas un sistema que te acerque a la nota objetivo con pasos
          medibles. Este es el método que convierte la incertidumbre en progreso real.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Por qué parecía imposible</h2>
        <p className="text-gray-700 mb-6">El volumen sin estrategia genera la sensación de que “no llego”.</p>
        <h2 className="text-2xl font-semibold mb-3">Método en 3 pasos</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6">
          <li>
            <strong>Prioriza</strong> por probabilidad de aparición y utilidad real.
          </li>
          <li>
            <strong>Practica</strong> preguntas tipo EvAU por tema.
          </li>
          <li>
            <strong>Ajusta</strong> con feedback y repite lo no sólido.
          </li>
        </ol>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl border border-gray-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Errores habituales</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Estudiar “por bloques” sin calendario ni objetivos.</li>
              <li>Subrayar → resumir → volver a leer (poca transferencia).</li>
              <li>No practicar con el formato real del examen.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 bg-[#FFFBEB]">
            <h3 className="font-semibold mb-2">Qué hacer en su lugar</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Plan semanal por temas priorizados.</li>
              <li>Preguntas tipo EvAU con corrección inmediata.</li>
              <li>Revisión espaciada de los fallos hasta dominar.</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-3">Beneficio</h2>
        <p className="text-gray-700 mb-8">Te acercas a tu nota objetivo de forma medible.</p>
        <Link href="/onboarding" className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
          Ver cómo funciona →
        </Link>
        <div className="mt-10">
          <h3 className="font-semibold mb-3">Artículos relacionados</h3>
          <ul className="list-disc pl-5 text-[#FFB800]">
            <li>
              <Link href="/blog/herramienta-que-me-cambio-la-forma-de-estudiar">La herramienta que cambió mi forma de estudiar</Link>
            </li>
            <li>
              <Link href="/blog/de-perdido-a-seguro-para-la-evau-gracias-a-esto">De perdido a seguro para la EvAU</Link>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    slug: 'de-perdido-a-seguro-para-la-evau-gracias-a-esto',
    title:
      'Pasé de estar perdido en segundo de bachiller a sentirme seguro para la EvAU gracias a esto.',
    description:
      'Cómo estructurar tu estudio con claridad, evitar olvidos y ganar confianza con práctica guiada.',
    date: '8 de septiembre de 2025',
    category: 'Consejos de estudio',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-3">De la confusión al foco</h2>
        <p className="text-gray-700 mb-6">Con un mapa de temas y verificación continua, la preparación se vuelve predecible.</p>
        <h2 className="text-2xl font-semibold mb-3">Pilares</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Plan semanal por temas</li>
          <li>Preguntas con feedback</li>
          <li>Seguimiento de métricas simples</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Conclusión</h2>
        <p className="text-gray-700 mb-8">
          La confianza llega cuando puedes <strong>demostrar</strong> que dominas los temas clave.
        </p>
        <Link href="/onboarding" className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
          Ver cómo funciona →
        </Link>
        <div className="mt-10">
          <h3 className="font-semibold mb-3">Artículos relacionados</h3>
          <ul className="list-disc pl-5 text-[#FFB800]">
            <li>
              <Link href="/blog/herramienta-que-me-cambio-la-forma-de-estudiar">La herramienta que cambió mi forma de estudiar</Link>
            </li>
            <li>
              <Link href="/blog/universidad-de-mis-suenos-imposible-hasta-este-metodo">Universidad de mis sueños: plan real</Link>
            </li>
          </ul>
        </div>
      </>
    ),
  },
]

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Artículo | selectiviES' }
  return {
    title: `${post.title} | selectiviES`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return null

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <article className="max-w-[900px] mx-auto px-6 py-14">
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl font-extrabold leading-tight">{post.title}</h1>
          <p className="text-gray-500 mt-2">{post.date}</p>
        </header>

        <div className="max-w-none space-y-4 text-[17px] leading-7 text-gray-800">
          {post.content}
        </div>

        <hr className="my-10" />
        <section className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">¿Quieres ver cómo funciona en 60 segundos?</h3>
            <p className="text-gray-600">Onboarding rápido de SeleTest: estudio por temas, feedback inmediato y progreso.</p>
          </div>
          <Link href="/onboarding" className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
            Ver cómo funciona →
          </Link>
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} selectiviES. Todos los derechos reservados.</p>
        </footer>
      </article>
      <Footer />
    </main>
  )
}


