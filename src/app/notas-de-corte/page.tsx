'use client'

import { useState, useMemo } from 'react'
import {
  notasDeCorte as staticNotasDeCorte,
  universidades,
  ambitos,
  comunidadesAutonomas,
  universidadAComunidad,
  getComunidadAutonoma,
  type NotaDeCorte,
  type Ambito,
  type ComunidadAutonoma,
  esNotaAlta,
  esMuyDemandado,
} from '@/data/notasDeCorte'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'

type OrdenType = 'nota-alta' | 'nota-baja' | 'alfabetico' | 'demandados'

export default function NotasDeCortePage() {
  const [comunidadFiltro, setComunidadFiltro] = useState<ComunidadAutonoma | 'todas'>('todas')
  const [universidadFiltro, setUniversidadFiltro] = useState<string>('todas')
  const [ambitoFiltro, setAmbitoFiltro] = useState<Ambito | 'todos'>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<OrdenType>('nota-alta')
  const [favoritos, setFavoritos] = useState<Set<string>>(new Set())
  const [allNotas, setAllNotas] = useState<NotaDeCorte[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch consolidated data
  useEffect(() => {
    fetch('/data/notas_corte.json')
      .then(res => res.json())
      .then(data => {
        setAllNotas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading notas:", err);
        setAllNotas(staticNotasDeCorte);
        setLoading(false);
      });
  }, []);

  const internalCommunityToUnis = (comunidad: string, currentNotas: any[]) => {
    if (comunidad === 'todas') {
      const unis = new Set(currentNotas.map(n => n.universidad));
      return Array.from(unis).sort();
    }
    const unis = new Set(currentNotas.filter(n => n.comunidad === comunidad).map(n => n.universidad));
    return Array.from(unis).sort();
  }

  // Filtrar universidades según la comunidad seleccionada
  const universidadesFiltradas = useMemo(() => {
    return internalCommunityToUnis(comunidadFiltro, allNotas);
  }, [comunidadFiltro, allNotas])

  const gradosFiltrados = useMemo(() => {
    let resultados = allNotas.filter((grado: any) => {
      const matchComunidad =
        comunidadFiltro === 'todas' || (grado.comunidad || 'Andalucía') === comunidadFiltro
      const matchUniversidad =
        universidadFiltro === 'todas' || grado.universidad === universidadFiltro
      const matchAmbito =
        ambitoFiltro === 'todos' || grado.ambito === ambitoFiltro
      const matchBusqueda =
        busqueda === '' ||
        grado.grado.toLowerCase().includes(busqueda.toLowerCase()) ||
        grado.universidad.toLowerCase().includes(busqueda.toLowerCase())

      return matchComunidad && matchUniversidad && matchAmbito && matchBusqueda
    })

    // Ordenar
    resultados.sort((a, b) => {
      switch (orden) {
        case 'nota-alta':
          return b.notaCorte2024 - a.notaCorte2024
        case 'nota-baja':
          return a.notaCorte2024 - b.notaCorte2024
        case 'alfabetico':
          return a.grado.localeCompare(b.grado)
        case 'demandados':
          return b.solicitudes / b.plazas - a.solicitudes / a.plazas
        default:
          return 0
      }
    })

    return resultados
  }, [comunidadFiltro, universidadFiltro, ambitoFiltro, busqueda, orden])

  const toggleFavorito = (id: string) => {
    const nuevosFavoritos = new Set(favoritos)
    if (nuevosFavoritos.has(id)) {
      nuevosFavoritos.delete(id)
    } else {
      nuevosFavoritos.add(id)
    }
    setFavoritos(nuevosFavoritos)
  }

  const getTendenciaIcon = (grado: NotaDeCorte) => {
    if (grado.tendencia === 'subida') {
      return <span className="text-red-600 font-bold">↑</span>
    } else if (grado.tendencia === 'bajada') {
      return <span className="text-green-600 font-bold">↓</span>
    } else {
      return <span className="text-gray-400">→</span>
    }
  }

  const getTendenciaColor = (grado: NotaDeCorte) => {
    if (grado.tendencia === 'subida') return 'text-red-600'
    if (grado.tendencia === 'bajada') return 'text-green-600'
    return 'text-gray-600'
  }

  return (
    <>
        <Navbar />
      
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuál es la nota de corte más alta de España?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Normalmente corresponde al Doble Grado de Matemáticas y Física, superando el 13.6 en universidades como la Complutense de Madrid o la de Granada."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuándo salen las notas de corte de 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las notas de corte de la primera adjudicación suelen publicarse en la primera quincena de julio, tras la realización de la prueba ordinaria de Selectividad."
                  }
                }
              ]
            })
          }}
        />

        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
          {/* Header */}
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-gray-900 py-16">
            <div className="container mx-auto px-4">
              <nav className="text-sm mb-4 flex gap-2 text-gray-800" aria-label="Breadcrumb">
                <a href="/" className="hover:underline">Inicio</a> / <span className="font-semibold">Notas de Corte</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Notas de Corte <span className="bg-white/30 px-3 rounded-xl">2025/2026</span> <br/>
                Madrid, Cataluña y Andalucía
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 max-w-3xl font-medium leading-relaxed">
                Consulta las notas de acceso actualizadas a todas las universidades españolas. Compara tendencias, plazas disponibles y ratios de solicitud para asegurar tu plaza.
              </p>
              
              {/* Region Quick Links */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Madrid', 'Cataluña', 'Andalucía'].map(region => (
                  <button 
                    key={region}
                    onClick={() => setComunidadFiltro(region as ComunidadAutonoma)}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            {/* Buscador */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar grado
              </label>
              <input
                type="text"
                placeholder="Ej: Medicina, Informática..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Comunidad Autónoma */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comunidad Autónoma
              </label>
              <select
                value={comunidadFiltro}
                onChange={(e) => {
                  setComunidadFiltro(e.target.value as ComunidadAutonoma | 'todas')
                  setUniversidadFiltro('todas') // Reset universidad al cambiar comunidad
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="todas">Todas las comunidades</option>
                {comunidadesAutonomas.map((comunidad) => (
                  <option key={comunidad} value={comunidad}>
                    {comunidad}
                  </option>
                ))}
              </select>
            </div>

            {/* Universidad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Universidad
              </label>
              <select
                value={universidadFiltro}
                onChange={(e) => setUniversidadFiltro(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="todas">
                  {comunidadFiltro === 'todas' 
                    ? 'Todas las universidades' 
                    : `Todas de ${comunidadFiltro}`}
                </option>
                {universidadesFiltradas.map((uni: string) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
            </div>

            {/* Ámbito */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ámbito de estudio
              </label>
              <select
                value={ambitoFiltro}
                onChange={(e) => setAmbitoFiltro(e.target.value as Ambito | 'todos')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="todos">Todos los ámbitos</option>
                {ambitos.map((ambito) => (
                  <option key={ambito} value={ambito}>
                    {ambito}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select
                value={orden}
                onChange={(e) => setOrden(e.target.value as OrdenType)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="nota-alta">Nota más alta</option>
                <option value="nota-baja">Nota más baja</option>
                <option value="alfabetico">Alfabético</option>
                <option value="demandados">Más demandados</option>
              </select>
            </div>
          </div>

          {/* Resultados count */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              Mostrando <span className="font-bold text-yellow-600">{gradosFiltrados.length}</span> grados encontrados
            </div>
            {loading && (
              <div className="flex items-center gap-2 text-yellow-600">
                <span className="animate-spin text-lg">⏳</span> Actualizando base de datos...
              </div>
            )}
          </div>
        </div>

        {/* Tabla Desktop */}
        <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-yellow-400 text-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Grado</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Universidad</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Nota 2024/25</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Evolución</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Plazas/Solicitudes</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gradosFiltrados.map((grado) => (
                  <tr key={grado.id} className="hover:bg-yellow-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{grado.grado}</span>
                        <div className="flex gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            {grado.ambito}
                          </span>
                          {grado.nuevaTitulacion && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              Nuevo
                            </span>
                          )}
                          {esNotaAlta(grado.notaCorte2024) && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                              Nota alta
                            </span>
                          )}
                          {esMuyDemandado(grado) && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                              Muy demandado
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {grado.universidad}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-gray-900">
                        {grado.notaCorte2024.toFixed(3)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          {getTendenciaIcon(grado)}
                          {grado.notaCorte2023 && (
                            <span className={`text-sm ${getTendenciaColor(grado)}`}>
                              {Math.abs(grado.notaCorte2024 - grado.notaCorte2023).toFixed(3)}
                            </span>
                          )}
                        </div>
                        {grado.notaCorte2023 && (
                          <span className="text-xs text-gray-500">
                            ({grado.notaCorte2023.toFixed(3)})
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      <div className="flex flex-col gap-1">
                        <span>
                          {grado.plazas} / {grado.solicitudes}
                        </span>
                        <span className="text-xs text-gray-500">
                          Ratio: {(grado.solicitudes / grado.plazas).toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => toggleFavorito(grado.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            favoritos.has(grado.id)
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          title={favoritos.has(grado.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        >
                          {favoritos.has(grado.id) ? '★' : '☆'}
                        </button>
                        <a
                          href={grado.urlOficial}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                        >
                          Ver detalles
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tarjetas Mobile */}
        <div className="lg:hidden space-y-4">
          {gradosFiltrados.map((grado) => (
            <div key={grado.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{grado.grado}</h3>
                  <p className="text-sm text-gray-600 mb-2">{grado.universidad}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      {grado.ambito}
                    </span>
                    {grado.nuevaTitulacion && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Nuevo
                      </span>
                    )}
                    {esNotaAlta(grado.notaCorte2024) && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                        Nota alta
                      </span>
                    )}
                    {esMuyDemandado(grado) && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                        Muy demandado
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorito(grado.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    favoritos.has(grado.id)
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {favoritos.has(grado.id) ? '★' : '☆'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Nota de corte 2024/25</p>
                  <p className="text-2xl font-bold text-yellow-700">{grado.notaCorte2024.toFixed(3)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Evolución</p>
                  <div className="flex items-center gap-2">
                    {getTendenciaIcon(grado)}
                    {grado.notaCorte2023 && (
                      <span className={`text-lg font-semibold ${getTendenciaColor(grado)}`}>
                        {Math.abs(grado.notaCorte2024 - grado.notaCorte2023).toFixed(3)}
                      </span>
                    )}
                  </div>
                  {grado.notaCorte2023 && (
                    <p className="text-xs text-gray-500 mt-1">Anterior: {grado.notaCorte2023.toFixed(3)}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>
                  Plazas: <span className="font-semibold">{grado.plazas}</span>
                </span>
                <span>
                  Solicitudes: <span className="font-semibold">{grado.solicitudes}</span>
                </span>
                <span>
                  Ratio: <span className="font-semibold">{(grado.solicitudes / grado.plazas).toFixed(1)}</span>
                </span>
              </div>

              <a
                href={grado.urlOficial}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Ver detalles
              </a>
            </div>
          ))}
        </div>

        </div>

        {/* SEO Text Content Sections */}
        <div className="container mx-auto px-4 py-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Madrid: Polo Universitario</h2>
              <p className="text-gray-600 leading-relaxed">
                Madrid concentra algunas de las universidades más prestigiosas como la UCM, UAM y UC3M. Las notas de corte en carreras como Medicina y Doble Grado de Matemáticas + Física suelen ser de las más altas del país, superando a menudo el 13.5.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Cataluña y Proceso de Preinscripción</h2>
              <p className="text-gray-600 leading-relaxed">
                En Cataluña, la preinscripción es centralizada a través del Canal Universitats. Instituciones como la UB, UAB y UPC ofrecen una oferta académica competitiva en Ingeniería y Ciencias de la Salud con una alta demanda internacional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Distrito Único Andaluz</h2>
              <p className="text-gray-600 leading-relaxed">
                Andalucía cuenta con el Distrito Único Andaluz (DUA), que permite a los estudiantes solicitar plaza en cualquier universidad andaluza de forma coordinada. Sevilla y Granada son los principales focos de atracción estudiantes.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info for SEO */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">SelectiviES © 2025</h3>
            <p className="text-xs text-gray-400 max-w-xl mx-auto">
              Las notas de corte mostradas son orientativas y corresponden a la última adjudicación del curso anterior. Recomendamos siempre contrastar con el portal oficial de cada universidad o comunidad autónoma.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}



