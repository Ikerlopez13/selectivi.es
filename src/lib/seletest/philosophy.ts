import type { Subject } from './types'

export const philosophyES: Subject = {
  id: 'filosofia',
  name: 'Filosofía',
  topics: [
    {
      id: 'platon',
      title: 'Platón',
      questions: [
        {
          id: 'fil-pla-q1',
          tier: 'standard',
          prompt: '¿Qué propone Platón como fundamento del conocimiento verdadero?',
          options: [
            { id: 'a', label: 'El mundo sensible', isCorrect: false },
            { id: 'b', label: 'Las Ideas o Formas', isCorrect: true },
            { id: 'c', label: 'La opinión común', isCorrect: false },
            { id: 'd', label: 'La experiencia empírica', isCorrect: false },
          ],
          explanation: 'Para Platón, las Ideas son las realidades inmutables y verdaderas; el mundo sensible es una copia imperfecta.'
        },
        {
          id: 'fil-pla-q2',
          tier: 'standard',
          prompt: '¿Qué afirma la teoría de la anamnesis en Platón?',
          options: [
            { id: 'a', label: 'El alma recuerda las Formas que conoció antes del encarnarse', isCorrect: true },
            { id: 'b', label: 'El conocimiento se adquiere solo por experiencia sensorial', isCorrect: false },
            { id: 'c', label: 'La verdad se obtiene por la opinión popular', isCorrect: false },
            { id: 'd', label: 'Las ideas son innatas sin necesidad de experiencia', isCorrect: false },
          ],
          explanation: 'La anamnesis sostiene que el alma recuerda las Formas, lo que explica el reconocimiento de verdades universales.'
        },
        {
          id: 'fil-pla-q3',
          tier: 'standard',
          prompt: '¿Qué relación sostiene Platón entre el mundo sensible y el mundo de las Formas?',
          options: [
            { id: 'a', label: 'El mundo sensible es idéntico a las Formas', isCorrect: false },
            { id: 'b', label: 'El mundo sensible es una copia imperfecta de las Formas', isCorrect: true },
            { id: 'c', label: 'Las Formas no existen', isCorrect: false },
            { id: 'd', label: 'El mundo sensible es la única realidad', isCorrect: false },
          ],
          explanation: 'El mundo sensible es una imitación imperfecta de las Formas, que son la verdadera realidad.'
        }
      ]
    },
    {
      id: 'aristoteles',
      title: 'Aristóteles',
      questions: [
        {
          id: 'fil-ari-q1',
          tier: 'standard',
          prompt: '¿Qué entiende Aristóteles por sustancia (ousía)?',
          options: [
            { id: 'a', label: 'La materia sin forma', isCorrect: false },
            { id: 'b', label: 'La unión de materia y forma', isCorrect: true },
            { id: 'c', label: 'La forma sin materia', isCorrect: false },
            { id: 'd', label: 'Un accidente', isCorrect: false },
          ],
          explanation: 'La sustancia es la unión de materia y forma (hylemorfismo): lo que subsiste.'
        }
      ]
    }
  ]
}
