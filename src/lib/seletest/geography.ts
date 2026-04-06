import { Subject } from './types'

export const geographyES: Subject = {
  id: 'geografia',
  name: 'Geografía',
  topics: [
    {
      id: 'fisica-espana',
      title: 'Geografía Física de España (Relieve y Clima)',
      questions: [
        { id: 'geo-q1', tier: 'standard', prompt: '¿Cuál es el pico más alto de la Península Ibérica?', options: [{ id: 'a', label: 'Mulhacén.', isCorrect: true }, { id: 'b', label: 'Teide.', isCorrect: false }, { id: 'c', label: 'Aneto.', isCorrect: false }, { id: 'd', label: 'Peñalara.', isCorrect: false }], explanation: '3479 m.' }
      ]
    },
    {
      id: 'urbana-madrid',
      title: 'Geografía Urbana y Geografía de Madrid',
      questions: [
        { id: 'geo-urb-q1', tier: 'premium', prompt: '¿Qué es el área metropolitana?', options: [{ id: 'a', label: 'Un conjunto de municipios integrados funcionalmente en una ciudad central.', isCorrect: true }, { id: 'b', label: 'Un parque grande.', isCorrect: false }, { id: 'c', label: 'El centro histórico.', isCorrect: false }, { id: 'd', label: 'Un desierto.', isCorrect: false }], explanation: 'Estructura urbana moderna.' }
      ]
    }
  ]
}
