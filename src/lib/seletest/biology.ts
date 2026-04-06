import { Subject } from './types'

export const biologyES: Subject = {
  id: 'biologia',
  name: 'Biología',
  topics: [
    {
      id: 'celula-metabolismo',
      title: 'La Célula y el Metabolismo (EBAU Focus)',
      questions: [
        { id: 'bio-q1', tier: 'standard', prompt: '¿Cuál es el orgánulo responsable de la respiración celular?', options: [{ id: 'a', label: 'Mitocondria.', isCorrect: true }, { id: 'b', label: 'Cloroplasto.', isCorrect: false }, { id: 'c', label: 'Lisosoma.', isCorrect: false }, { id: 'd', label: 'Ribosoma.', isCorrect: false }], explanation: 'Produce ATP.' }
      ]
    },
    {
      id: 'ebau-madrid-mega-block',
      title: 'Bloque de Refuerzo Biotecnología y Genética (Madrid 2025)',
      questions: [
        { id: 'bio-mega-q1', tier: 'premium', prompt: '¿Qué enzima se encarga de sintetizar ARN a partir de ADN?', options: [{ id: 'a', label: 'ARN polimerasa.', isCorrect: true }, { id: 'b', label: 'ADN ligasa.', isCorrect: false }, { id: 'c', label: 'Helicasa.', isCorrect: false }, { id: 'd', label: 'Proteasa.', isCorrect: false }], explanation: 'Proceso de transcripción.' }
      ]
    }
  ]
}