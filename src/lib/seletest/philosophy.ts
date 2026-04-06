import { Subject } from './types'

export const philosophyES: Subject = {
  id: 'filosofia',
  name: 'Filosofía',
  topics: [
    {
      id: 'antigua-medieval',
      title: 'Filosofía Antigua y Medieval (EBAU Focus)',
      questions: [
        { id: 'phi-ant-q1', tier: 'standard', prompt: 'Para Platón, las Ideas son:', options: [{ id: 'a', label: 'Realidades eternas e inmutables.', isCorrect: true }, { id: 'b', label: 'Simples pensamientos.', isCorrect: false }, { id: 'c', label: 'Cosas sensibles.', isCorrect: false }, { id: 'd', label: 'Sueños.', isCorrect: false }], explanation: 'Dualismo ontológico: Ideas vs Sensible.' }
      ]
    },
    {
      id: 'moderna-ebau',
      title: 'La Modernidad: Racionalismo y Empirismo',
      questions: [
        { id: 'phi-mod-q1', tier: 'premium', prompt: 'Descartes afirma la existencia del yo mediante:', options: [{ id: 'a', label: 'El Cogito (Pienso, luego existo).', isCorrect: true }, { id: 'b', label: 'La experiencia sensible.', isCorrect: false }, { id: 'c', label: 'La fe divina.', isCorrect: false }, { id: 'd', label: 'La tradición.', isCorrect: false }], explanation: 'Primera certeza indubitable.' }
      ]
    }
  ]
}
