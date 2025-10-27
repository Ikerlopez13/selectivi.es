'use client'

import { useState, useMemo } from 'react'
import {
  notasDeCorte,
  universidades,
  ambitos,
  type NotaDeCorte,
  type Ambito,
  esNotaAlta,
  esMuyDemandado,
} from '@/data/notasDeCorte'
import Navbar from '@/components/Navbar'

type OrdenType = 'nota-alta' | 'nota-baja' | 'alfabetico' | 'demandados'

export default function NotasDeCortePage() {
  const [universidadFiltro, setUniversidadFiltro] = useState<string>('todas')
  const [ambitoFiltro, setAmbitoFiltro] = useState<Ambito | 'todos'>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<OrdenType>('nota-alta')
  const [favoritos, setFavoritos] = useState<Set<string>>(new Set())

  const gradosFiltrados = useMemo(() => {
    let resultados = notasDeCorte.filter((grado) => {
      const matchUniversidad =
        universidadFiltro === 'todas' || grado.universidad === universidadFiltro
      const matchAmbito =
        ambitoFiltro === 'todos' || grado.ambito === ambitoFiltro
      const matchBusqueda =
        busqueda === '' ||
        grado.grado.toLowerCase().includes(busqueda.toLowerCase()) ||
        grado.universidad.toLowerCase().includes(busqueda.toLowerCase())

      return matchUniversidad && matchAmbito && matchBusqueda
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
  }, [universidadFiltro, ambitoFiltro, busqueda, orden])

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
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notas de Corte España 2024/25
            </h1>
            <p className="text-xl text-gray-800">
              Consulta las notas de acceso a todas las universidades españolas
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                <option value="todas">Todas las universidades</option>
                {universidades.map((uni) => (
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
          <div className="text-sm text-gray-600">
            Mostrando <span className="font-semibold">{gradosFiltrados.length}</span> grados
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

          {/* Sin resultados */}
          {gradosFiltrados.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-xl text-gray-600 mb-2">No se encontraron resultados</p>
              <p className="text-gray-500">Prueba a cambiar los filtros o la búsqueda</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

