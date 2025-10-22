import type { Subject } from '../../types'

export const philosophyAND: Subject = {
  id: 'filosofia',
  name: 'Filosofía',
  topics: [
    {
      id: 'filosofia-antigua-moderna',
      title: 'Filosofía antigua y moderna',
      questions: [
        {
          id: 'and-filosofia-q1',
          tier: 'standard',
          prompt: 'Platón fue discípulo de:',
          options: [
            { id: 'a', label: 'Sócrates', isCorrect: true },
            { id: 'b', label: 'Aristóteles', isCorrect: false },
            { id: 'c', label: 'Pitágoras', isCorrect: false },
            { id: 'd', label: 'Tales de Mileto', isCorrect: false },
          ],
          explanation: 'Platón fue discípulo de Sócrates y maestro de Aristóteles, formando una triada fundamental de la filosofía griega clásica.'
        },
        {
          id: 'and-filosofia-q2',
          tier: 'standard',
          prompt: 'El "cogito ergo sum" (pienso, luego existo) es de:',
          options: [
            { id: 'a', label: 'Descartes', isCorrect: true },
            { id: 'b', label: 'Kant', isCorrect: false },
            { id: 'c', label: 'Hume', isCorrect: false },
            { id: 'd', label: 'Locke', isCorrect: false },
          ],
          explanation: 'René Descartes formuló el "Cogito ergo sum" en su obra "Discurso del método" (1637) como punto de partida del conocimiento cierto.'
        }
      ]
    }
  ],
}

