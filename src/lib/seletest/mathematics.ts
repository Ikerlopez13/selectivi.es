import type { Subject } from './types'

export const mathematicsES: Subject = {
  id: 'matematicas',
  name: 'Matemáticas',
  topics: [
    {
      id: 'algebra',
      title: 'Álgebra',
      questions: [
        {
          id: 'mat-alg-q1',
          tier: 'standard',
          prompt: 'Sea A=[[1,2],[3,4]]. ¿Cuál es su determinante?',
          options: [
            { id: 'a', label: '-2', isCorrect: true },
            { id: 'b', label: '2', isCorrect: false },
            { id: 'c', label: '0', isCorrect: false },
            { id: 'd', label: '5', isCorrect: false },
          ],
          explanation: 'Det(A)=ad−bc=1·4−2·3=−2.'
        },
        {
          id: 'mat-alg-q3',
          tier: 'standard',
          prompt: 'Resuelva el sistema: 2x+y=5, x−y=1. ¿Qué par (x,y) satisface?',
          options: [
            { id: 'a', label: '(2,3)', isCorrect: true },
            { id: 'b', label: '(1,4)', isCorrect: false },
            { id: 'c', label: '(0,5)', isCorrect: false },
            { id: 'd', label: '(3,-1)', isCorrect: false },
          ],
          explanation: 'Sumando: 3x=6 ⇒ x=2; luego y=3.'
        },
      ],
    },
    {
      id: 'analisis',
      title: 'Análisis',
      questions: [
        {
          id: 'mat-ana-q13',
          tier: 'standard',
          prompt: 'Calcule el límite: lim_{x→0} (sin x)/x',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '1', isCorrect: true },
            { id: 'c', label: '∞', isCorrect: false },
            { id: 'd', label: 'no existe', isCorrect: false },
          ],
          explanation: 'Límite clásico: vale 1.'
        },
      ],
    },
    {
      id: 'geometria',
      title: 'Geometría',
      questions: [
        {
          id: 'mat-geo-q31',
          tier: 'standard',
          prompt: 'Distancia de P(1,2,3) al plano 2x−y+z−4=0',
          options: [
            { id: 'a', label: '1/√6', isCorrect: true },
            { id: 'b', label: '√6', isCorrect: false },
            { id: 'c', label: '1/2', isCorrect: false },
            { id: 'd', label: '2/√6', isCorrect: false },
          ],
          explanation: 'Distancia = |2·1 −2 +3 −4| / √(2^2+1+1) = 1/√6.'
        },
      ],
    },
    {
      id: 'prob-estad',
      title: 'Probabilidad y Estadística',
      questions: [
        {
          id: 'mat-prob-q44',
          tier: 'standard',
          prompt: 'Si A y B son disjuntos, entonces P(A ∪ B) =',
          options: [
            { id: 'a', label: 'P(A) − P(B)', isCorrect: false },
            { id: 'b', label: 'P(A)P(B)', isCorrect: false },
            { id: 'c', label: 'P(A) + P(B)', isCorrect: true },
            { id: 'd', label: 'P(A|B)', isCorrect: false },
          ],
          explanation: 'Para sucesos disjuntos, la probabilidad se suma.'
        },
      ],
    },
  ],
}
