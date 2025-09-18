'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-24 border-t">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10">
        <div className="flex items-center gap-3">
          <img src="/images/logoo.svg" alt="SelectiviES" className="w-10 h-10" />
          <span className="text-xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-semibold mb-3">Comunidades</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="https://selectivi.cat" target="_blank" rel="noreferrer" className="hover:underline">Cataluña</a></li>
              <li><a href="/madrid" className="hover:underline">Madrid</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Blog</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/blog/herramienta-que-me-cambio-la-forma-de-estudiar" className="hover:underline">La herramienta que me cambió la forma de estudiar</a></li>
              <li><a href="/blog/universidad-de-mis-suenos-imposible-hasta-este-metodo" className="hover:underline">Universidad de mis sueños: el método</a></li>
              <li><a href="/blog/de-perdido-a-seguro-para-la-evau-gracias-a-esto" className="hover:underline">De perdido a seguro para la EvAU</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/blog" className="hover:underline">Todos los artículos</a></li>
              <li><a href="/onboarding" className="hover:underline">Cómo funciona</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


