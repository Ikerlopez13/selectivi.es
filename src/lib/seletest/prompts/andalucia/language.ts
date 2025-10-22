import type { Subject } from '../../types'

export const languageAND: Subject = {
  id: 'lengua-castellana',
  name: 'Lengua Castellana y Literatura',
  topics: [
    {
      id: 'literatura-espanola',
      title: 'Literatura española',
      questions: [
        {
          id: 'and-lengua-q1',
          tier: 'standard',
          prompt: '¿Qué generación literaria española se caracterizó por la crisis del 98?',
          options: [
            { id: 'a', label: 'Generación del 27', isCorrect: false },
            { id: 'b', label: 'Generación del 98', isCorrect: true },
            { id: 'c', label: 'Generación del 14', isCorrect: false },
            { id: 'd', label: 'Generación del 50', isCorrect: false },
          ],
          explanation: 'La Generación del 98 surgió tras la pérdida de las colonias españolas en 1898, reflejando una crisis nacional e identitaria.'
        },
        {
          id: 'and-lengua-q2',
          tier: 'standard',
          prompt: 'El "Lazarillo de Tormes" pertenece al género:',
          options: [
            { id: 'a', label: 'Novela caballeresca', isCorrect: false },
            { id: 'b', label: 'Novela pastoril', isCorrect: false },
            { id: 'c', label: 'Novela picaresca', isCorrect: true },
            { id: 'd', label: 'Novela sentimental', isCorrect: false },
          ],
          explanation: 'El Lazarillo de Tormes (1554) es la obra fundacional de la novela picaresca española, narrando las aventuras de un pícaro.'
        },
        {
          id: 'and-lengua-q3',
          tier: 'standard',
          prompt: 'Federico García Lorca escribió:',
          options: [
            { id: 'a', label: 'Luces de bohemia', isCorrect: false },
            { id: 'b', label: 'La casa de Bernarda Alba', isCorrect: true },
            { id: 'c', label: 'Marianela', isCorrect: false },
            { id: 'd', label: 'Niebla', isCorrect: false },
          ],
          explanation: 'Federico García Lorca escribió "La casa de Bernarda Alba" (1936), una de sus obras teatrales más emblemáticas de la Generación del 27.'
        }
      ]
    }
  ],
}

