import { Subject } from './types'

export const businessES: Subject = {
  id: 'economia-empresa',
  name: 'Economía de la Empresa',
  topics: [
    {
      id: 'empresa-entorno',
      title: 'La Empresa y su Entorno (EBAU)',
      questions: [
        { id: 'eco-ent-q1', tier: 'standard', prompt: '¿Cuál es el objetivo principal de una empresa privada?', options: [{ id: 'a', label: 'Maximizar el beneficio.', isCorrect: true }, { id: 'b', label: 'Proveer servicios gratuitos.', isCorrect: false }, { id: 'c', label: 'Pagar impuestos solamente.', isCorrect: false }, { id: 'd', label: 'Dar empleo a todos.', isCorrect: false }], explanation: 'Principio de rentabilidad.' }
      ]
    },
    {
      id: 'marketing-ebau',
      title: 'Marketing Mix y Comercialización',
      questions: [
        { id: 'eco-mar-q1', tier: 'premium', prompt: 'Las 4 P del marketing son:', options: [{ id: 'a', label: 'Producto, Precio, Plaza y Promoción.', isCorrect: true }, { id: 'b', label: 'Personas, Procesos, Precio y Planta.', isCorrect: false }, { id: 'c', label: 'Poder, Política, Producto y Precio.', isCorrect: false }, { id: 'd', label: 'Páginas, Papel, Precio y Producto.', isCorrect: false }], explanation: 'Estrategias fundamentales de comercialización.' }
      ]
    }
  ]
}
