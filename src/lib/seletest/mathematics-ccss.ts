import type { Subject } from './types'

export const mathematicsCCSS: Subject = {
  id: 'matematicas-ccss',
  name: 'Matemáticas CCSS',
  topics: [
    {
      id: 'algebra-finanzas',
      title: 'Álgebra y Matemática financiera',
      questions: [
        {
          id: 'mat-ccss-alg-q1',
          tier: 'standard',
          prompt: 'Resolver el sistema lineal dado por las ecuaciones $2x + 3y = 7$ y $-x + y = 1$.',
          options: [
            { id: 'a', label: '$x = \\frac{4}{5}$, $y = \\frac{9}{5}$', isCorrect: true },
            { id: 'b', label: '$x = 1$, $y = 2$', isCorrect: false },
            { id: 'c', label: '$x = 2$, $y = 3$', isCorrect: false },
            { id: 'd', label: '$x = 0$, $y = 1$', isCorrect: false },
          ],
          explanation: 'Resolviendo por sustitución: de $-x+y=1$ se obtiene $y=x+1$, y sustituyendo en $2x+3y=7$ se obtiene $x=4/5$ y $y=9/5$.'
        },
        {
          id: 'mat-ccss-alg-q2',
          tier: 'standard',
          prompt: 'Para la matriz $A=\\begin{pmatrix}1 & 2\\\\ 3 & 4\\end{pmatrix}$, calcule $\\det(A)$ y determine si es invertible.',
          options: [
            { id: 'a', label: '$\\det(A)=0$', isCorrect: false },
            { id: 'b', label: '$\\det(A)=-2$', isCorrect: true },
            { id: 'c', label: '$\\det(A)=2$', isCorrect: false },
            { id: 'd', label: '$\\det(A)=-1$', isCorrect: false },
          ],
          explanation: 'Con $\\det(A)=ad-bc=1\\cdot4-2\\cdot3=4-6=-2\\neq0$, por lo que $A$ es invertible.'
        },
        {
          id: 'mat-ccss-alg-q3',
          tier: 'standard',
          prompt: 'Dada el sistema $\\begin{cases}2x+ y=4\\\\ x- y=1\\end{cases}$, obtenga la solución mediante método matricial.',
          options: [
            { id: 'a', label: '$\\left(x,y\\right)=\\left(\\frac{4}{5},\\frac{9}{5}\\right)$', isCorrect: true },
            { id: 'b', label: '$\\left(x,y\\right)=(2,0)$', isCorrect: false },
            { id: 'c', label: '$\\left(x,y\\right)=(1,3)$', isCorrect: false },
            { id: 'd', label: '$\\left(x,y\\right)=(0,2)$', isCorrect: false },
          ],
          explanation: 'El sistema tiene matriz coeficiente $A=\\begin{pmatrix}2 & 1\\\\1 & -1\\end{pmatrix}$; resolver con inversa da la solución indicada.'
        },
        {
          id: 'mat-ccss-alg-q4',
          tier: 'standard',
          prompt: 'Una empresa quiere maximizar su beneficio lineal $Z=6x+4y$ sujeta a las restricciones $2x+y\\le 20$, $x+3y\\le 24$ y $x,y\\ge0$. ¿En qué vértice se alcanza el óptimo?',
          options: [
            { id: 'a', label: '$(0,0)$', isCorrect: false },
            { id: 'b', label: '$(10,0)$', isCorrect: false },
            { id: 'c', label: '$(\\tfrac{36}{5},\\tfrac{28}{5})$', isCorrect: true },
            { id: 'd', label: '$(0,8)$', isCorrect: false },
          ],
          explanation: 'La intersección de $2x+y=20$ y $x+3y=24$ da $(x,y)=(36/5,28/5)$, y corresponde al vértice con máximo $Z=6x+4y$.'
        },
        {
          id: 'mat-ccss-alg-q5',
          tier: 'standard',
          prompt: 'Si el capital inicial es $P=1000$, a interés simple anual del 5% durante $t=3$ años, ¿cuál es el monto al final del periodo?',
          options: [
            { id: 'a', label: '$1150$', isCorrect: true },
            { id: 'b', label: '$1050$', isCorrect: false },
            { id: 'c', label: '$1000$', isCorrect: false },
            { id: 'd', label: '$1250$', isCorrect: false },
          ],
          explanation: 'Monto $A=P(1+rt)=1000(1+0.05\\cdot3)=1150$.'
        },
        {
          id: 'mat-ccss-alg-q6',
          tier: 'standard',
          prompt: 'Con un interés compuesto anual del 5% y capital inicial $P=1000$, ¿cuánto vale $A$ tras 2 años?',
          options: [
            { id: 'a', label: '$1102.5$', isCorrect: true },
            { id: 'b', label: '$1050$', isCorrect: false },
            { id: 'c', label: '$1000$', isCorrect: false },
            { id: 'd', label: '$1125$', isCorrect: false },
          ],
          explanation: 'Monto $A=P(1+r)^t=1000(1.05)^2=1102.5$.'
        },
        {
          id: 'mat-ccss-alg-q7',
          tier: 'standard',
          prompt: 'Una renta de 5 pagos anuales de 200 € cada uno, al interés efectivo anual $i=0.08$. ¿Cuál es su valor presente?',
          options: [
            { id: 'a', label: '$798.6$', isCorrect: true },
            { id: 'b', label: '$400$', isCorrect: false },
            { id: 'c', label: '$1000$', isCorrect: false },
            { id: 'd', label: '$100$', isCorrect: false },
          ],
          explanation: 'Valor presente de una anualidad: $PV=200\\cdot\\frac{1-(1+i)^{-5}}{i}$, con $i=0.08$.'
        },
        {
          id: 'mat-ccss-alg-q8',
          tier: 'standard',
          prompt: 'Si $\\det(kA)=k^{2}\\det(A)$ para una matriz $A$ 2×2, ¿cuál es $\\det(3A)$ si $\\det(A)=-2$?',
          options: [
            { id: 'a', label: '$-6$', isCorrect: false },
            { id: 'b', label: '$-18$', isCorrect: true },
            { id: 'c', label: '$-9$', isCorrect: false },
            { id: 'd', label: '$6$', isCorrect: false },
          ],
          explanation: 'Para una matriz 2×2, $\\det(kA)=k^{2}\\det(A)$; así $\\det(3A)=3^{2}(-2)=-18$.'
        },
        {
          id: 'mat-ccss-alg-q9',
          tier: 'standard',
          prompt: 'Si $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$, ¿$\\det(A^T)$?',
          options: [
            { id: 'a', label: '$-2$', isCorrect: true },
            { id: 'b', label: '$2$', isCorrect: false },
            { id: 'c', label: '$-4$', isCorrect: false },
            { id: 'd', label: '$4$', isCorrect: false },
          ],
          explanation: 'Determinante se conserva en traspuesta: $\\det(A^T)=\\det(A)=-2$.'
        },
        {
          id: 'mat-ccss-alg-q10',
          tier: 'standard',
          prompt: 'Aplicando la regla de Cramer para el sistema $\\begin{cases}2x+ y=7 \\\\\\ x+3y=5\\end{cases}$, ¿cuál es la solución?',
          options: [
            { id: 'a', label: '$\\left(\\tfrac{16}{5},\\tfrac{3}{5}\\right)$', isCorrect: true },
            { id: 'b', label: '$\\left(1,2\\right)$', isCorrect: false },
            { id: 'c', label: '$\\left(2,3\\right)$', isCorrect: false },
            { id: 'd', label: '$\\left(0,\\tfrac{3}{2}\\right)$', isCorrect: false },
          ],
          explanation: 'Resolviendo el sistema da $x=16/5$, $y=3/5$.'
        },
        {
          id: 'mat-ccss-alg-q11',
          tier: 'standard',
          prompt: 'En un problema de programación lineal simple: maximizar $Z=x+2y$ sujeto a $x\\le 4$, $y\\le 3$, $x,y\\ge0$, y $x+y\\le5$. ¿Qué vértice proporciona el óptimo?',
          options: [
            { id: 'a', label: '$(0,0)$', isCorrect: false },
            { id: 'b', label: '$(2,3)$', isCorrect: true },
            { id: 'c', label: '$(4,1)$', isCorrect: false },
            { id: 'd', label: '$(4,0)$', isCorrect: false },
          ],
          explanation: 'El vértice $(2,3)$ es factible y da $Z=2+2\\cdot3=8$, mayor que los demás vértices.'
        },
        {
          id: 'mat-ccss-alg-q12',
          tier: 'standard',
          prompt: 'Si la matriz de coeficientes de un sistema 2×2 es singular, ¿qué tipo de solución tiene el sistema?',
          options: [
            { id: 'a', label: 'Única', isCorrect: false },
            { id: 'b', label: 'Ninguna', isCorrect: false },
            { id: 'c', label: 'Infinitas', isCorrect: true },
            { id: 'd', label: 'Depende del lado derecho', isCorrect: false },
          ],
          explanation: 'Si la matriz es singular, el sistema puede tener infinitas soluciones (o ser incompatible); suele haber infinitas soluciones cuando las ecuaciones son proporcionales.'
        },
        {
          id: 'mat-ccss-alg-q13',
          tier: 'standard',
          prompt: '¿Qué condición garantiza que un sistema lineal 2×2 tenga solución única?',
          options: [
            { id: 'a', label: 'Determinante de la matriz de coeficientes igual a cero', isCorrect: false },
            { id: 'b', label: 'Determinante de la matriz de coeficientes distinto de cero', isCorrect: true },
            { id: 'c', label: 'La matriz es simétrica', isCorrect: false },
            { id: 'd', label: 'La matriz es ortogonal', isCorrect: false },
          ],
          explanation: 'Un sistema tiene solución única si y solo si $\\det(A)\\neq0$.'
        },
        {
          id: 'mat-ccss-alg-q14',
          tier: 'standard',
          prompt: 'Un problema de programación lineal muestra que la solución óptima siempre se da en un vértice de la región factible debido a:',
          options: [
            { id: 'a', label: 'La linealidad de las funciones objetivo y restricciones', isCorrect: true },
            { id: 'b', label: 'La convexidad de las restricciones', isCorrect: false },
            { id: 'c', label: 'La no linealidad de la función objetivo', isCorrect: false },
            { id: 'd', label: 'La existencia de restricciones no lineales', isCorrect: false },
          ],
          explanation: 'En problemas lineales, la optimum de una función lineal sobre una región poligonal se alcanza en un vértice (o en una arista si hay degeneración).'
        },
        {
          id: 'mat-ccss-alg-q15',
          tier: 'standard',
          prompt: 'Calcule la inversa de $A=\\begin{pmatrix}3 & -1\\\\ 2 & 4\\end{pmatrix}$; ¿cuál es $A^{-1}$?',
          options: [
            { id: 'a', label: '$\\dfrac{1}{14}\\begin{pmatrix}4 & 1\\\\ -2 & 3\\end{pmatrix}$', isCorrect: true },
            { id: 'b', label: '$\\dfrac{1}{2}\\begin{pmatrix}4 & 1\\\\ -2 & 3\\end{pmatrix}$', isCorrect: false },
            { id: 'c', label: '$\\dfrac{1}{14}\\begin{pmatrix}4 & -1\\\\ 2 & 3\\end{pmatrix}$', isCorrect: false },
            { id: 'd', label: '$\\dfrac{1}{14}\\begin{pmatrix}-4 & -1\\\\ 2 & -3\\end{pmatrix}$', isCorrect: false },
          ],
          explanation: 'Para $A=\\begin{pmatrix}3 & -1\\\\ 2 & 4\\end{pmatrix}$, $\\det(A)=14$ y $A^{-1}=\\frac{1}{14}\\begin{pmatrix}4 & 1\\\\ -2 & 3\\end{pmatrix}$.'
        }
      ]
    }
  ]
}
