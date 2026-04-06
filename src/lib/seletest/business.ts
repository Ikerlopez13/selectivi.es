import { Subject } from './types'

export const businessES: Subject = {
  id: 'business',
  name: 'Economía de la Empresa',
  topics: [
    {
      id: 'empresa-entorno',
      title: 'La Empresa y su Entorno',
      questions: [
        { id: 'bus-ent-q1', tier: 'standard', prompt: '¿Cuál de estos es un factor del entorno específico?', options: [{ id: 'a', label: 'Proveedores.', isCorrect: true }, { id: 'b', label: 'Tasa de paro.', isCorrect: false }, { id: 'c', label: 'Legislación fiscal.', isCorrect: false }, { id: 'd', label: 'Clima político.', isCorrect: false }], explanation: 'El entorno específico afecta solo a las empresas de un sector concreto.' },
        { id: 'bus-dafo-q1', tier: 'premium', prompt: 'En un análisis DAFO, las Amenazas son:', options: [{ id: 'a', label: 'Factores externos negativos.', isCorrect: true }, { id: 'b', label: 'Factores internos negativos.', isCorrect: false }, { id: 'c', label: 'Puntos fuertes internos.', isCorrect: false }, { id: 'd', label: 'Oportunidades de mercado.', isCorrect: false }], explanation: 'DAFO: Debilidades, Amenazas (externo), Fortalezas, Oportunidades (externo).' }
      ]
    },
    {
      id: 'produccion',
      title: 'Dirección de Producción',
      questions: [
        { id: 'bus-pm-q1', tier: 'premium', prompt: 'Si CF = 10.000€, P = 20€ y Cv = 10€, ¿cuál es el Punto Muerto?', options: [{ id: 'a', label: '1.000 unidades.', isCorrect: true }, { id: 'b', label: '500 unidades.', isCorrect: false }, { id: 'c', label: '2.000 unidades.', isCorrect: false }, { id: 'd', label: '10.000 unidades.', isCorrect: false }], explanation: '$10.000 / (20-10) = 1.000$.' },
        { id: 'bus-prod-q1', tier: 'standard', prompt: 'La productividad global mide:', options: [{ id: 'a', label: 'Valor de producción / valor de factores.', isCorrect: true }, { id: 'b', label: 'Solo horas trabajadas.', isCorrect: false }, { id: 'c', label: 'El beneficio neto.', isCorrect: false }, { id: 'd', label: 'La cantidad de máquinas recicladas.', isCorrect: false }], explanation: 'Relaciona Outputs e Inputs en términos monetarios.' }
      ]
    },
    {
      id: 'finanzas',
      title: 'Dirección Financiera',
      questions: [
        { id: 'bus-van-q1', tier: 'premium', prompt: 'Un proyecto de inversión debe aceptarse si:', options: [{ id: 'a', label: 'VAN > 0.', isCorrect: true }, { id: 'b', label: 'VAN < 0.', isCorrect: false }, { id: 'c', label: 'TIR < Tasa de descuento.', isCorrect: false }, { id: 'd', label: 'El Payback es infinito.', isCorrect: false }], explanation: 'Un VAN positivo indica creación de valor.' },
        { id: 'bus-tir-q1', tier: 'premium', prompt: 'La TIR iguala el VAN a:', options: [{ id: 'a', label: 'Cero.', isCorrect: true }, { id: 'b', label: 'Uno.', isCorrect: false }, { id: 'c', label: 'Infinito.', isCorrect: false }, { id: 'd', label: 'La inversión inicial.', isCorrect: false }], explanation: 'Es la tasa interna de rentabilidad que equilibra flujos.' }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing-Mix',
      questions: [
        { id: 'bus-mkt-q1', tier: 'standard', prompt: 'Las 4 Ps del marketing son:', options: [{ id: 'a', label: 'Producto, Precio, Plaza (Distribución) y Promoción.', isCorrect: true }, { id: 'b', label: 'Personas, Procesos, Planificación y Producción.', isCorrect: false }, { id: 'c', label: 'Publicidad, Política, Precio y Producto.', isCorrect: false }, { id: 'd', label: 'Poder, Precio, Promoción y Plaza.', isCorrect: false }], explanation: 'Marketing mix básico de McCarthy/Kotler.' }
      ]
    }
  ]
}
