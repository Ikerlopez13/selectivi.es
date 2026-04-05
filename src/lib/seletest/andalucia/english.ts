import type { Subject } from '../types'

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
        },
        {
          id: 'and-ingles-q3',
          tier: 'standard',
          prompt: 'She _____ reading a book now.',
          options: [
            { id: 'a', label: 'is', isCorrect: true },
            { id: 'b', label: 'are', isCorrect: false },
            { id: 'c', label: 'am', isCorrect: false },
            { id: 'd', label: 'be', isCorrect: false },
          ],
          explanation: 'Con "she" (tercera persona singular) usamos "is" en presente continuo: "She is reading".'
        },
        {
          id: 'and-ingles-q4',
          tier: 'premium',
          prompt: 'If I _____ rich, I would travel the world. (Second conditional)',
          options: [
            { id: 'a', label: 'were', isCorrect: true },
            { id: 'b', label: 'am', isCorrect: false },
            { id: 'c', label: 'was', isCorrect: false },
            { id: 'd', label: 'will be', isCorrect: false },
          ],
          explanation: 'En el segundo condicional (situación hipotética presente), usamos "were" con todos los sujetos: "If I were rich..."'
        },
        {
          id: 'and-ingles-q5',
          tier: 'premium',
          prompt: 'The book _____ by millions of people. (Passive voice)',
          options: [
            { id: 'a', label: 'was read', isCorrect: true },
            { id: 'b', label: 'read', isCorrect: false },
            { id: 'c', label: 'is reading', isCorrect: false },
            { id: 'd', label: 'reads', isCorrect: false },
          ],
          explanation: 'La voz pasiva en pasado simple se forma con "was/were + past participle": "The book was read".'
        }
      ]
    }
  ],
}

