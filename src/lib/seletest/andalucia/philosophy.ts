import type { Subject } from '../types'

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
        },
        {
          id: 'and-filosofia-q3',
          tier: 'standard',
          prompt: 'El concepto de "superhombre" (Übermensch) es de:',
          options: [
            { id: 'a', label: 'Nietzsche', isCorrect: true },
            { id: 'b', label: 'Marx', isCorrect: false },
            { id: 'c', label: 'Hegel', isCorrect: false },
            { id: 'd', label: 'Schopenhauer', isCorrect: false },
          ],
          explanation: 'Friedrich Nietzsche desarrolló el concepto del "Übermensch" en "Así habló Zaratustra" como el ser humano que supera los valores tradicionales.'
        },
        {
          id: 'and-filosofia-q4',
          tier: 'premium',
          prompt: 'El "Imperativo Categórico" de Kant establece:',
          options: [
            { id: 'a', label: 'Actuar según máximas que puedan ser ley universal', isCorrect: true },
            { id: 'b', label: 'El fin justifica los medios', isCorrect: false },
            { id: 'c', label: 'Buscar el placer y evitar el dolor', isCorrect: false },
            { id: 'd', label: 'Conocerse a uno mismo', isCorrect: false },
          ],
          explanation: 'Kant formuló: "Obra sólo según aquella máxima que puedas querer que se convierta en ley universal", base de su ética deontológica.'
        }
      ]
    }
  ],
}

