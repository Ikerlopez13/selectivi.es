import type { Subject } from './types'

export const chemistryES: Subject = {
  id: 'quimica',
  name: 'Química',
  topics: [
    {
      id: 'organica',
      title: 'Química orgánica (funcionales y reacciones)',
      questions: [
        {
          id: 'qui-org-q1',
          tier: 'standard',
          prompt: 'Grupo funcional de los alcanoides saturados: ¿qué grupo funcional característico poseen?',
          options: [
            { id: 'a', label: 'Alquenos (C=C)', isCorrect: false },
            { id: 'b', label: 'Alquinos (C≡C)', isCorrect: false },
            { id: 'c', label: 'Alcanos (C–C simple)', isCorrect: true },
            { id: 'd', label: 'Alcoholes (–OH)', isCorrect: false },
          ],
          explanation: 'Los alcanos contienen enlaces simples entre carbonos (C–C), sin dobles o triples enlaces.'
        },
        {
          id: 'qui-org-q2',
          tier: 'standard',
          prompt: 'Reacciones orgánicas básicas: sustitución, adición, eliminación y esterificación son ejemplos de…',
          options: [
            { id: 'a', label: 'Reacciones inorgánicas', isCorrect: false },
            { id: 'b', label: 'Reacciones orgánicas típicas', isCorrect: true },
            { id: 'c', label: 'Reacciones de combustión solamente', isCorrect: false },
            { id: 'd', label: 'Reacciones de intercambio iónico', isCorrect: false },
          ],
          explanation: 'Son familias fundamentales de reacciones en química orgánica.'
        },
        {
          id: 'qui-org-q3',
          tier: 'standard',
          prompt: 'Isomería estructural: ¿qué es la isomería de cadena?',
          options: [
            { id: 'a', label: 'Misma fórmula pero distinto orden de sustituyentes', isCorrect: false },
            { id: 'b', label: 'Mismo esqueleto de carbono pero con diferentes arreglos de átomos', isCorrect: true },
            { id: 'c', label: 'Diferentes posiciones de dobles enlaces', isCorrect: false },
            { id: 'd', label: 'Distintas configuraciones espaciales (cis/trans)', isCorrect: false },
          ],
          explanation: 'Isomería de cadena: distintas ramificaciones para la misma fórmula molecular.'
        },
        {
          id: 'qui-org-q4',
          tier: 'standard',
          prompt: 'Adición de HX a alquenos (Regla de Markovnikov):',
          options: [
            { id: 'a', label: 'El protón se une al carbono más sustituido', isCorrect: false },
            { id: 'b', label: 'El protón se une al carbono menos sustituido y X al más sustituido', isCorrect: true },
            { id: 'c', label: 'La adición no sigue ninguna regla', isCorrect: false },
            { id: 'd', label: 'El doble enlace se conserva', isCorrect: false },
          ],
          explanation: 'Markovnikov: H al C menos sustituido; haluro al más sustituido.'
        },
        {
          id: 'qui-org-q5',
          tier: 'standard',
          prompt: 'Oxidación de alcoholes primarios: primero aldehídos y luego ácidos. ¿Qué grupo funcional corresponde a un aldehído?',
          options: [
            { id: 'a', label: '–CHO', isCorrect: true },
            { id: 'b', label: '–COOH', isCorrect: false },
            { id: 'c', label: '–C≡N', isCorrect: false },
            { id: 'd', label: '–OH', isCorrect: false },
          ],
          explanation: 'Aldeídos: grupo carbonilo unido a H (–CHO).'
        },
        {
          id: 'qui-org-q6',
          tier: 'standard',
          prompt: 'Isomería geométrica (cis/trans) en alquenos: condición necesaria',
          options: [
            { id: 'a', label: 'Al menos un C=C con dos sustituyentes diferentes en cada carbono', isCorrect: true },
            { id: 'b', label: 'Molécula lineal', isCorrect: false },
            { id: 'c', label: 'Molécula aromática', isCorrect: false },
            { id: 'd', label: 'Ocurre solo en saturados', isCorrect: false },
          ],
          explanation: 'C=C con sustituyentes distintos en cada carbono → restricción rotacional.'
        },
        {
          id: 'qui-org-q7',
          tier: 'standard',
          prompt: '¿Qué grupo funcional corresponde a un éster?',
          options: [
            { id: 'a', label: '$-COOH$', isCorrect: false },
            { id: 'b', label: '$-COO-\!-$', isCorrect: true },
            { id: 'c', label: '$-OH$', isCorrect: false },
            { id: 'd', label: '$-CHO$', isCorrect: false },
          ],
          explanation: 'Éster: $-COOR\'$ (carbonilo unido a un oxígeno).'
        },
        {
          id: 'qui-org-q8',
          tier: 'standard',
          prompt: 'Las cetonas se caracterizan por el carbonilo entre dos carbonos; fórmula general:',
          options: [
            { id: 'a', label: '$R-CO-R\'$ ', isCorrect: true },
            { id: 'b', label: '$R-COOH$', isCorrect: false },
            { id: 'c', label: '$R-CH_2-O-R\'$ ', isCorrect: false },
            { id: 'd', label: '$R-CHO$', isCorrect: false },
          ],
          explanation: 'Cetonas: $R-CO-R\'$. Aldehídos: $R-CHO$.'
        },
      ],
    },
  ],
}


