import type { Subject } from '../../types'

export const englishAND: Subject = {
  id: 'ingles',
  name: 'Inglés',
  topics: [
    {
      id: 'gramatica-vocabulario',
      title: 'Gramática y vocabulario',
      questions: [
        {
          id: 'and-ingles-q1',
          tier: 'standard',
          prompt: '"I _____ to the cinema yesterday"',
          options: [
            { id: 'a', label: 'went', isCorrect: true },
            { id: 'b', label: 'go', isCorrect: false },
            { id: 'c', label: 'going', isCorrect: false },
            { id: 'd', label: 'goes', isCorrect: false },
          ],
          explanation: 'El pasado simple de "go" es "went". Se usa para acciones completadas en el pasado con marcadores temporales como "yesterday".'
        },
        {
          id: 'and-ingles-q2',
          tier: 'standard',
          prompt: 'El plural de "child" es:',
          options: [
            { id: 'a', label: 'children', isCorrect: true },
            { id: 'b', label: 'childs', isCorrect: false },
            { id: 'c', label: 'childrens', isCorrect: false },
            { id: 'd', label: 'child', isCorrect: false },
          ],
          explanation: '"Children" es el plural irregular de "child". No sigue la regla estándar de añadir -s o -es.'
        }
      ]
    }
  ],
}

