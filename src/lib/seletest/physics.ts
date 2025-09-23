import type { Subject } from './types'

export const physicsES: Subject = {
  id: 'fisica',
  name: 'Física',
  topics: [
    {
      id: 'campo-gravitatorio',
      title: '1. Campo gravitatorio',
      questions: [
        {
          id: 'fis-grav-q1',
          tier: 'standard',
          prompt: 'En un campo gravitatorio conservativo, si solo actúan fuerzas gravitatorias, ¿qué ocurre con la energía mecánica E del sistema?',
          options: [
            { id: 'a', label: 'E permanece constante', isCorrect: true },
            { id: 'b', label: 'E aumenta', isCorrect: false },
            { id: 'c', label: 'E disminuye', isCorrect: false },
            { id: 'd', label: 'E no está determinada', isCorrect: false },
          ],
          explanation: 'En un campo gravitatorio conservativo, la energía mecánica total (cinética + potencial) se conserva.'
        },
        {
          id: 'fis-grav-q2',
          tier: 'standard',
          prompt: 'La velocidad orbital de un satélite v = sqrt(G M / r). Si aumenta la masa central M y r se mantiene constante, ¿qué sucede con v?',
          options: [
            { id: 'a', label: 'aumenta', isCorrect: true },
            { id: 'b', label: 'disminuye', isCorrect: false },
            { id: 'c', label: 'se mantiene', isCorrect: false },
            { id: 'd', label: 'no definido', isCorrect: false },
          ],
          explanation: 'Para r fijo, v ∝ sqrt(M), por tanto aumenta.'
        },
      ],
    },
    { id: 'campo-electrico', title: '2. Campo eléctrico', questions: [] },
    { id: 'campo-magnetico', title: '3. Campo magnético', questions: [] },
    { id: 'ondas', title: '4. Ondas', questions: [] },
    { id: 'optica-geometrica', title: '5. Óptica geométrica', questions: [] },
    { id: 'fisica-moderna', title: '6. Física moderna', questions: [] },
  ],
}


