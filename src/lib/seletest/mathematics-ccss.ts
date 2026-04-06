import { Subject } from './types'

export const mathematicsCCSSES: Subject = {
  id: 'mathematics-ccss',
  name: 'Matemáticas CCSS',
  topics: [
    {
      id: 'algebra',
      title: 'Álgebra y Sistemas',
      questions: [
        { id: 'ccss-alg-q1', tier: 'standard', prompt: 'Un sistema es Compatible Determinado si:', options: [{ id: 'a', label: 'Tiene una única solución.', isCorrect: true }, { id: 'b', label: 'No tiene solución.', isCorrect: false }, { id: 'c', label: 'Tiene infinitas soluciones.', isCorrect: false }, { id: 'd', label: 'El determinante es 0.', isCorrect: false }], explanation: 'Teorema de Rouché-Frobenius.' },
        { id: 'ccss-alg-q2', tier: 'premium', prompt: 'Resolver matricialmente $AX + B = C$ implica:', options: [{ id: 'a', label: '$X = A^{-1}(C-B)$', isCorrect: true }, { id: 'b', label: '$X = (C-B)A^{-1}$', isCorrect: false }, { id: 'c', label: '$X = A^{-1}C - B$', isCorrect: false }, { id: 'd', label: '$X = A(C+B)$', isCorrect: false }], explanation: 'Despeje cuidadoso por la izquierda.' },
        { id: 'ccss-prog-q1', tier: 'premium', prompt: 'En programación lineal, el valor óptimo de la función objetivo se encuentra siempre en:', options: [{ id: 'a', label: 'Un vértice de la región factible.', isCorrect: true }, { id: 'b', label: 'El origen $(0,0)$.', isCorrect: false }, { id: 'c', label: 'Fuera de la región.', isCorrect: false }, { id: 'd', label: 'Donde las rectas se cortan fuera de los ejes.', isCorrect: false }], explanation: 'Teorema fundamental de la optimización lineal.' }
      ]
    },
    {
      id: 'analisis',
      title: 'Análisis de Funciones',
      questions: [
        { id: 'ccss-ana-q1', tier: 'standard', prompt: 'Función de costes $C(x) = 2x^2 + 10x + 100$. ¿Cuál es el coste marginal?', options: [{ id: 'a', label: '$4x + 10$', isCorrect: true }, { id: 'b', label: '$2x + 10$', isCorrect: false }, { id: 'c', label: '100', isCorrect: false }, { id: 'd', label: '$4x$', isCorrect: false }], explanation: 'El coste marginal es la derivada de la función de costes.' },
        { id: 'ccss-ana-q2', tier: 'premium', prompt: 'Si $f\'\'(x) > 0$ en un intervalo, la función es:', options: [{ id: 'a', label: 'Convexa (forma de U).', isCorrect: true }, { id: 'b', label: 'Cóncava.', isCorrect: false }, { id: 'c', label: 'Creciente.', isCorrect: false }, { id: 'd', label: 'Decreciente.', isCorrect: false }], explanation: 'Curvatura positiva implica convexidad.' }
      ]
    },
    {
      id: 'probabilidad',
      title: 'Probabilidad y Estadística',
      questions: [
        { id: 'ccss-pro-q1', tier: 'standard', prompt: 'Si $P(A) = 0.5$ y $P(A \cap B) = 0.1$, ¿cuál es $P(B|A)$?', options: [{ id: 'a', label: '0.2', isCorrect: true }, { id: 'b', label: '0.5', isCorrect: false }, { id: 'c', label: '0.1', isCorrect: false }, { id: 'd', label: '0.6', isCorrect: false }], explanation: '$P(B|A) = P(A \cap B) / P(A) = 0.1 / 0.5 = 0.2$.' },
        { id: 'ccss-est-q1', tier: 'premium', prompt: 'Z-score de 1.96 en una normal $N(0, 1)$ deja a su derecha:', options: [{ id: 'a', label: '2.5% de probabilidad.', isCorrect: true }, { id: 'b', label: '5%.', isCorrect: false }, { id: 'c', label: '1%.', isCorrect: false }, { id: 'd', label: '10%.', isCorrect: false }], explanation: 'Intervalo de confianza del 95%.' }
      ]
    },
    {
      id: 'financiera',
      title: 'Matemática Financiera',
      questions: [
        { id: 'ccss-fin-q1', tier: 'premium', prompt: 'Interés compuesto de 1000€ al 5% anual durante 2 años:', options: [{ id: 'a', label: '1102.50€', isCorrect: true }, { id: 'b', label: '1100€', isCorrect: false }, { id: 'c', label: '1050€', isCorrect: false }, { id: 'd', label: '1200€', isCorrect: false }], explanation: '$1000 \cdot (1.05)^2 = 1102.5$.' }
      ]
    }
  ]
}
