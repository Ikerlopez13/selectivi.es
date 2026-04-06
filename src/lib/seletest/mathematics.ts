import { Subject } from './types'

export const mathematicsES: Subject = {
  id: 'mathematics',
  name: 'Matemáticas II',
  topics: [
    {
      id: 'algebra',
      title: 'Álgebra de Matrices y Sistemas',
      questions: [
        { id: 'mat-alg-q1', tier: 'standard', prompt: 'Si $\det(A) = 3$ y $A$ es $3 \times 3$, ¿cuál es $\det(2A)$?', options: [{ id: 'a', label: '24', isCorrect: true }, { id: 'b', label: '6', isCorrect: false }, { id: 'c', label: '12', isCorrect: false }, { id: 'd', label: '9', isCorrect: false }], explanation: '$2^3 \cdot 3 = 24$.' },
        { id: 'mat-alg-q2', tier: 'premium', prompt: 'Rango de una matriz con dos filas iguales:', options: [{ id: 'a', label: 'Menor que el número de filas.', isCorrect: true }, { id: 'b', label: 'Igual.', isCorrect: false }, { id: 'c', label: 'Cero.', isCorrect: false }, { id: 'd', label: 'Siempre 1.', isCorrect: false }], explanation: 'Fila LD no suma rango.' },
        { id: 'mat-alg-q3', tier: 'premium', prompt: 'Condición para inversa $A^{-1}$:', options: [{ id: 'a', label: '$\det(A) \neq 0$', isCorrect: true }, { id: 'b', label: '$A$ simétrica.', isCorrect: false }, { id: 'c', label: '$A$ diagonal.', isCorrect: false }, { id: 'd', label: '$\det(A) = 1$', isCorrect: false }], explanation: 'Matrices regulares.' },
        { id: 'mat-alg-q10', tier: 'premium', prompt: 'Valor de $k$ para que $A = \begin{pmatrix} 1 & k \\ 2 & k \end{pmatrix}$ no tenga inversa:', options: [{ id: 'a', label: '$k=0$', isCorrect: true }, { id: 'b', label: '$k=1$', isCorrect: false }, { id: 'c', label: '$k=2$', isCorrect: false }, { id: 'd', label: 'Siempre tiene.', isCorrect: false }], explanation: '$\det(A) = k - 2k = -k \implies k=0$.' }
      ]
    },
    {
      id: 'analisis',
      title: 'Análisis y Cálculo',
      questions: [
        { id: 'mat-ana-q1', tier: 'standard', prompt: 'Derivada de $e^{x^2}$:', options: [{ id: 'a', label: '$2x e^{x^2}$', isCorrect: true }, { id: 'b', label: '$e^{x^2}$', isCorrect: false }, { id: 'c', label: '$2 e^{x^2}$', isCorrect: false }, { id: 'd', label: '$x^2 e^{x^2}$', isCorrect: false }], explanation: 'Regla de la cadena.' },
        { id: 'mat-ana-q20', tier: 'premium', prompt: 'Límite $\lim_{x \to 0} \frac{\sin(x)}{x}$:', options: [{ id: 'a', label: '1', isCorrect: true }, { id: 'b', label: '0', isCorrect: false }, { id: 'c', label: '$\infty$', isCorrect: false }, { id: 'd', label: 'No existe.', isCorrect: false }], explanation: 'L\'Hôpital: $\cos(x)/1 = 1$.' },
        { id: 'mat-ana-q40', tier: 'premium', prompt: 'Si $f\'\'(x) = 0$ y $f\'\'\'(x) \neq 0$, hay un:', options: [{ id: 'a', label: 'Punto de inflexión.', isCorrect: true }, { id: 'b', label: 'Máximo.', isCorrect: false }, { id: 'c', label: 'Mínimo.', isCorrect: false }, { id: 'd', label: 'Punto de corte.', isCorrect: false }], explanation: 'Condición de cambio de curvatura.' }
      ]
    },
    {
      id: 'geometria',
      title: 'Geometría en el Espacio',
      questions: [
        { id: 'mat-geo-q50', tier: 'premium', prompt: 'Área del triángulo de vértices $A, B, C$:', options: [{ id: 'a', label: '$\frac{1}{2} | \vec{AB} \times \vec{AC} |$', isCorrect: true }, { id: 'b', label: '$\vec{AB} \cdot \vec{AC}$', isCorrect: false }, { id: 'c', label: 'Base $\cdot$ altura.', isCorrect: false }, { id: 'd', label: '$\frac{1}{2} | \vec{AB} \cdot \vec{AC} |$', isCorrect: false }], explanation: 'Producto vectorial mide áreas.' }
      ]
    }
  ]
}
