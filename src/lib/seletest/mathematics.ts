import type { Subject } from './types'

// Matemáticas CCSS (Madrid)
// Bloques: 1) Álgebra y Matemática financiera  2) Análisis  3) Probabilidad y Estadística
export const mathematicsES: Subject = {
  id: 'matematicas-ccss',
  name: 'Matemáticas CCSS',
  topics: [
    {
      id: 'algebra-financiera',
      title: 'Álgebra y Matemática financiera',
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
        {
          id: 'mat-fin-q1',
          tier: 'standard',
          prompt: 'Interés simple: A = P(1+rt). Con P=1000, r=0,05 y t=3, ¿A?',
          options: [
            { id: 'a', label: '1150', isCorrect: true },
            { id: 'b', label: '1050', isCorrect: false },
            { id: 'c', label: '1200', isCorrect: false },
            { id: 'd', label: '1100', isCorrect: false },
          ],
          explanation: 'A=1000[1+0,05·3]=1150.'
        },
        {
          id: 'mat-fin-q2',
          tier: 'standard',
          prompt: 'Valor presente de una renta vencida: PV = R[1-(1+i)^{-n}]/i. Con R=100, i=0,04, n=5, ¿PV?',
          options: [
            { id: 'a', label: '≈ 445,2', isCorrect: true },
            { id: 'b', label: '≈ 500,0', isCorrect: false },
            { id: 'c', label: '≈ 350,3', isCorrect: false },
            { id: 'd', label: '≈ 600,5', isCorrect: false },
          ],
          explanation: 'PV≈100[1-(1,04)^{-5}]/0,04≈445,2.'
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
