import type { Subject } from '../types'

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
        },
        {
          id: 'and-lengua-q4',
          tier: 'standard',
          prompt: '"El Quijote" fue escrito por:',
          options: [
            { id: 'a', label: 'Miguel de Cervantes', isCorrect: true },
            { id: 'b', label: 'Lope de Vega', isCorrect: false },
            { id: 'c', label: 'Calderón de la Barca', isCorrect: false },
            { id: 'd', label: 'Francisco de Quevedo', isCorrect: false },
          ],
          explanation: 'Miguel de Cervantes Saavedra escribió "Don Quijote de la Mancha" (1605-1615), considerada la primera novela moderna.'
        },
        {
          id: 'and-lengua-q5',
          tier: 'premium',
          prompt: 'En sintaxis, una oración como "María estudia" es:',
          options: [
            { id: 'a', label: 'Simple predicativa intransitiva', isCorrect: true },
            { id: 'b', label: 'Compuesta coordinada', isCorrect: false },
            { id: 'c', label: 'Simple predicativa transitiva', isCorrect: false },
            { id: 'd', label: 'Compuesta subordinada', isCorrect: false },
          ],
          explanation: 'Es una oración simple (un solo verbo), predicativa (con verbo predicativo "estudiar"), intransitiva (sin complemento directo).'
        },
        {
          id: 'and-lengua-q6',
          tier: 'premium',
          prompt: 'El Romancero es característico de:',
          options: [
            { id: 'a', label: 'La lírica popular medieval', isCorrect: true },
            { id: 'b', label: 'El teatro barroco', isCorrect: false },
            { id: 'c', label: 'La novela renacentista', isCorrect: false },
            { id: 'd', label: 'La poesía contemporánea', isCorrect: false },
          ],
          explanation: 'El Romancero es un conjunto de poemas épico-líricos breves de origen medieval, transmitidos oralmente en la tradición popular española.'
        }
      ]
    }
  ],
}

