import type { Subject } from '../types'

export const mathematicsAND: Subject = {
  id: 'matematicas',
  name: 'Matemáticas',
  topics: [
    // ---------- ANÁLISIS ----------
    {
      id: 'analisis',
      title: 'Análisis',
      questions: [
        {
          id: 'and-mat-ana-q1',
          tier: 'standard',
          prompt: 'Calcule el límite cuando x tiende a 0 de (sen x)/x',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '1', isCorrect: true },
            { id: 'c', label: 'infinito', isCorrect: false },
            { id: 'd', label: 'no existe', isCorrect: false },
          ],
          explanation: 'Este es un límite fundamental. Se puede demostrar que $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ usando el desarrollo de Taylor de $\\sin x$.'
        },
        {
          id: 'and-mat-ana-q2',
          tier: 'standard',
          prompt: 'Dada la función $f(x) = x^2 \\cdot \\sin(1/x)$ para $x \\neq 0$ y $f(0) = 0$, la función es:',
          options: [
            { id: 'a', label: 'Continua pero no derivable en x=0', isCorrect: false },
            { id: 'b', label: 'Continua y derivable en x=0', isCorrect: true },
            { id: 'c', label: 'No continua en x=0', isCorrect: false },
            { id: 'd', label: 'No definida en x=0', isCorrect: false },
          ],
          explanation: 'La función es continua en $x=0$ por el límite del producto. Es derivable en $x=0$ y $f\'(0)=0$.'
        },
        {
          id: 'and-mat-ana-q3',
          tier: 'standard',
          prompt: 'Sea $f(x) = \\sin x$ y $g(x) = \\ln x$ con dominio adecuado. ¿Cuál es la derivada de $f(x) \\cdot g(x)$ en $x > 0$?',
          options: [
            { id: 'a', label: "f'(x)·g(x) + f(x)·g'(x)", isCorrect: true },
            { id: 'b', label: "f'(x)·g(x) - f(x)·g'(x)", isCorrect: false },
            { id: 'c', label: "f''(x)·g(x) + f(x)·g''(x)", isCorrect: false },
            { id: 'd', label: "f'(x)/g'(x)", isCorrect: false },
          ],
          explanation: 'Regla del producto: $(fg)\' = f\'g + fg\'.$'
        },
        {
          id: 'and-mat-ana-q5',
          tier: 'standard',
          prompt: 'Si $f(x) = x^3 - 5x$, ¿cuál es $f\'(2)$?',
          options: [
            { id: 'a', label: '7', isCorrect: true },
            { id: 'b', label: '3', isCorrect: false },
            { id: 'c', label: '9', isCorrect: false },
            { id: 'd', label: '-5', isCorrect: false },
          ],
          explanation: "$f'(x)=3x^2-5$, por tanto $f'(2)=12-5=7$."
        },
        {
          id: 'and-mat-ana-q6',
          tier: 'standard',
          prompt: 'La derivada de sen(x)·cos(x) es:',
          options: [
            { id: 'a', label: 'cos²(x) - sen²(x)', isCorrect: true },
            { id: 'b', label: '2·sen(x)·cos(x)', isCorrect: false },
            { id: 'c', label: '-cos(2x)', isCorrect: false },
            { id: 'd', label: 'sen(2x)', isCorrect: false },
          ],
          explanation: 'Regla del producto: $(\\sin x\\cos x)\' = \\cos x\\cos x - \\sin x\\sin x$.'
        },
        {
          id: 'and-mat-ana-q7',
          tier: 'standard',
          prompt: 'Una función $f(x) = x^3 - 3x$ tiene extremos locales en:',
          options: [
            { id: 'a', label: 'x=-1 (máximo) y x=1 (mínimo)', isCorrect: true },
            { id: 'b', label: 'x=0 solamente', isCorrect: false },
            { id: 'c', label: 'No tiene extremos', isCorrect: false },
            { id: 'd', label: 'Sólo extremos globales', isCorrect: false },
          ],
          explanation: '$f\'(x)=3x^2-3=0 \\implies x=\\pm1$. El estudio de la segunda derivada indica el tipo de extremo.'
        },
        {
          id: 'and-mat-ana-q8',
          tier: 'standard',
          prompt: 'Una primitiva de 2x es:',
          options: [
            { id: 'a', label: 'x² + C', isCorrect: true },
            { id: 'b', label: '2x + C', isCorrect: false },
            { id: 'c', label: 'x²/2 + C', isCorrect: false },
            { id: 'd', label: '4x + C', isCorrect: false },
          ],
          explanation: 'Integrar: $\\int 2x dx = x^2 + C$.'
        },
        {
          id: 'and-mat-ana-q9',
          tier: 'standard',
          prompt: 'La integral definida de 2x entre 0 y 1 vale:',
          options: [
            { id: 'a', label: '1', isCorrect: true },
            { id: 'b', label: '2', isCorrect: false },
            { id: 'c', label: '1/2', isCorrect: false },
            { id: 'd', label: '0', isCorrect: false },
          ],
          explanation: 'Resultado: $[x^2]_{0}^{1} = 1$.'
        },
        {
          id: 'and-mat-ana-q10',
          tier: 'standard',
          prompt: 'La media (valor medio) de una función f en el intervalo [a,b] se define como:',
          options: [
            { id: 'a', label: 'La integral de f entre a y b dividida por (b-a)', isCorrect: true },
            { id: 'b', label: 'La semisuma de f(a) y f(b)', isCorrect: false },
            { id: 'c', label: 'El máximo en [a,b]', isCorrect: false },
            { id: 'd', label: 'El mínimo en [a,b]', isCorrect: false },
          ],
          explanation: 'La media es la integral de $f$ dividida entre la longitud del intervalo.'
        },
        {
          id: 'and-mat-ana-q11',
          tier: 'standard',
          prompt: 'La derivada de ln(x) para x>0 es:',
          options: [
            { id: 'a', label: '1/x', isCorrect: true },
            { id: 'b', label: 'x', isCorrect: false },
            { id: 'c', label: '-1/x', isCorrect: false },
            { id: 'd', label: '1/ln(x)', isCorrect: false },
          ],
          explanation: 'La derivada de $\\ln x$ es $1/x$.'
        },
        {
          id: 'and-mat-ana-q12',
          tier: 'standard',
          prompt: 'La integral indefinida de e^x es:',
          options: [
            { id: 'a', label: 'e^x + C', isCorrect: true },
            { id: 'b', label: 'x·e^x + C', isCorrect: false },
            { id: 'c', label: 'e^(-x) + C', isCorrect: false },
            { id: 'd', label: 'ln(e^x) + C', isCorrect: false },
          ],
          explanation: 'La derivada de $e^x$ es $e^x$, así que su primitiva también es $e^x + C$.'
        },
        {
          id: 'and-mat-ana-q13',
          tier: 'standard',
          prompt: 'El límite de (1 + 1/n)^n cuando n tiende a infinito es:',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '1', isCorrect: false },
            { id: 'c', label: 'e', isCorrect: true },
            { id: 'd', label: 'infinito', isCorrect: false },
          ],
          explanation: 'Definición clásica del número $e$.'
        },
        {
          id: 'and-mat-ana-q14',
          tier: 'standard',
          prompt: 'Si $f(x) = \\frac{1}{x}$, entonces el límite cuando $x$ tiende a infinito de $f(x)$ es:',
          options: [
            { id: 'a', label: '0', isCorrect: true },
            { id: 'b', label: '1', isCorrect: false },
            { id: 'c', label: 'infinito', isCorrect: false },
            { id: 'd', label: 'No existe', isCorrect: false },
          ],
          explanation: 'Cuando $x\\to\\infty$, $1/x\\to 0$.'
        },
        {
          id: 'and-mat-ana-q15',
          tier: 'premium',
          prompt: 'Sea $f(x) = x \\cdot e^{-x^2}$. ¿Cuál es el valor de la integral de $f(x)$ entre $-\\infty$ e $\\infty$?',
          options: [
            { id: 'a', label: '0', isCorrect: true },
            { id: 'b', label: 'raíz cuadrada de π', isCorrect: false },
            { id: 'c', label: '1', isCorrect: false },
            { id: 'd', label: 'No existe', isCorrect: false },
          ],
          explanation: 'La función es impar y el intervalo simétrico, así que la integral es 0.'
        },
        {
          id: 'and-mat-ana-q16',
          tier: 'standard',
          prompt: '¿En qué puntos la función $g(x) = \\frac{x}{x^2-1}$ no es continua?',
          options: [
            { id: 'a', label: 'En x=1 y x=-1', isCorrect: true },
            { id: 'b', label: 'En x=0', isCorrect: false },
            { id: 'c', label: 'En x=2', isCorrect: false },
            { id: 'd', label: 'Es continua en todos los reales', isCorrect: false },
          ],
          explanation: 'El denominador se anula en $x = 1$ y $x = -1$.'
        },
        {
          id: 'and-mat-ana-q17',
          tier: 'premium',
          prompt: 'Si $h(x) = \\ln(x^2 + x)$, ¿cuál es el dominio de $h$?',
          options: [
            { id: 'a', label: '(-∞,-1)∪(0,∞)', isCorrect: true },
            { id: 'b', label: '(-1,∞)', isCorrect: false },
            { id: 'c', label: '(-∞,0)', isCorrect: false },
            { id: 'd', label: 'Todos los reales', isCorrect: false },
          ],
          explanation: 'El argumento del logaritmo es positivo únicamente si $x < -1$ o $x > 0$.'
        }
      ]
    },

    // ---------- ÁLGEBRA ----------
    {
      id: 'algebra',
      title: 'Álgebra',
      questions: [
        {
          id: 'and-mat-alg-q1',
          tier: 'premium',
          prompt: 'Sea la matriz $A$ con elementos $a_{11}=1$, $a_{12}=2$, $a_{21}=3$, $a_{22}=4$. Sus valores propios son:',
          options: [
            { id: 'a', label: '$\\lambda_1 = \\frac{5+\\sqrt{33}}{2}, \\lambda_2 = \\frac{5-\\sqrt{33}}{2}$', isCorrect: true },
            { id: 'b', label: '$\\lambda_1 = 1, \\lambda_2 = 4$', isCorrect: false },
            { id: 'c', label: '$\\lambda_1 = 2, \\lambda_2 = 3$', isCorrect: false },
            { id: 'd', label: '$\\lambda_1 = \\lambda_2 = 5$', isCorrect: false },
          ],
          explanation: 'Los valores propios se obtienen resolviendo $|A-\\lambda I| = 0$.'
        },
        {
          id: 'and-mat-alg-q2',
          tier: 'standard',
          prompt: 'Sea A una matriz 2x2 con elementos a, b, c, d. ¿Cuándo es invertible A?',
          options: [
            { id: 'a', label: 'det(A) = 0', isCorrect: false },
            { id: 'b', label: 'det(A) ≠ 0', isCorrect: true },
            { id: 'c', label: 'a + d = 0', isCorrect: false },
            { id: 'd', label: 'a·d = b·c', isCorrect: false },
          ],
          explanation: 'Una matriz es invertible si su determinante es distinto de cero.'
        },
        {
          id: 'and-mat-alg-q3',
          tier: 'standard',
          prompt: 'Dados $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ y $\\vec{b} = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$, resuelve el sistema $A\\vec{x}=\\vec{b}$:',
          options: [
            { id: 'a', label: 'x = -4, y = 9/2', isCorrect: true },
            { id: 'b', label: 'x = 4, y = -9/2', isCorrect: false },
            { id: 'c', label: 'x = -2, y = 3', isCorrect: false },
            { id: 'd', label: 'x = 0, y = 0', isCorrect: false },
          ],
          explanation: 'La solución del sistema se obtiene por determinantes o por inversión de matrices.'
        },
        {
          id: 'and-mat-alg-q4',
          tier: 'standard',
          prompt: 'Sea $S$ el subespacio generado por los vectores $(1,2,3)$ y $(4,5,6)$ en $\\mathbb{R}^3$. ¿Qué describe $S$?',
          options: [
            { id: 'a', label: 'Todo R³', isCorrect: false },
            { id: 'b', label: 'Solo el vector cero', isCorrect: false },
            { id: 'c', label: 'Es un plano de dimensión 2', isCorrect: true },
            { id: 'd', label: 'Un subespacio de dimensión 1', isCorrect: false },
          ],
          explanation: 'No son proporcionales, así que generan un plano dentro de $\\mathbb{R}^3$.'
        },
        {
          id: 'and-mat-alg-q5',
          tier: 'standard',
          prompt: 'Sean $\\vec{u}=(1,0,0)$, $\\vec{v}=(0,1,0)$, $\\vec{w}=(0,0,1)$. ¿Qué afirmación es correcta?',
          options: [
            { id: 'a', label: 'Son linealmente dependientes', isCorrect: false },
            { id: 'b', label: 'Forman una base de R³', isCorrect: true },
            { id: 'c', label: 'Generan un espacio de dimensión 2', isCorrect: false },
            { id: 'd', label: 'Sus combinaciones lineales producen solo vectores con z=0', isCorrect: false },
          ],
          explanation: 'Son la base canónica de $\\mathbb{R}^3$, generan todo el espacio y son linealmente independientes.'
        },
        {
          id: 'and-mat-alg-q6',
          tier: 'standard',
          prompt: 'La matriz triangular superior A con diagonal (2,3,5) tiene determinante igual a:',
          options: [
            { id: 'a', label: '30', isCorrect: true },
            { id: 'b', label: '0', isCorrect: false },
            { id: 'c', label: '-30', isCorrect: false },
            { id: 'd', label: '10', isCorrect: false },
          ],
          explanation: 'El determinante de una matriz triangular es el producto de sus elementos diagonales: $2\\times3\\times5=30$.'
        },
        {
          id: 'and-mat-alg-q7',
          tier: 'standard',
          prompt: 'La traza de la matriz diagonal A con elementos 2, 3, 5 es:',
          options: [
            { id: 'a', label: '10', isCorrect: true },
            { id: 'b', label: '2', isCorrect: false },
            { id: 'c', label: '30', isCorrect: false },
            { id: 'd', label: '5', isCorrect: false },
          ],
          explanation: 'La traza es la suma de los elementos de la diagonal principal: $2+3+5=10$.'
        },
        {
          id: 'and-mat-alg-q8',
          tier: 'standard',
          prompt: 'Sean A y B matrices cuadradas. ¿Es verdadera la afirmación det(AB) = det(A)·det(B)?',
          options: [
            { id: 'a', label: 'Sí', isCorrect: true },
            { id: 'b', label: 'No', isCorrect: false },
            { id: 'c', label: 'Solo si A es triangular', isCorrect: false },
            { id: 'd', label: 'Solo si B es invertible', isCorrect: false },
          ],
          explanation: 'Para matrices cuadradas, $\\det(AB)=\\det(A)\\cdot\\det(B)$.'
        },
        {
          id: 'and-mat-alg-q9',
          tier: 'standard',
          prompt: 'Sean $\\vec{u}=(1,1,0)$ y $\\vec{v}=(0,1,1)$. ¿Cuál de las siguientes afirmaciones es correcta sobre el conjunto $\\{\\vec{u},\\vec{v}\\}$?',
          options: [
            { id: 'a', label: 'Es linealmente dependiente', isCorrect: false },
            { id: 'b', label: 'Es linealmente independiente', isCorrect: true },
            { id: 'c', label: 'Genera un subespacio de dimensión 3', isCorrect: false },
            { id: 'd', label: 'No genera ningún plano', isCorrect: false },
          ],
          explanation: 'No son proporcionales ni el nulo, así que son linealmente independientes.'
        },
        {
          id: 'and-mat-alg-q10',
          tier: 'standard',
          prompt: 'Solución de un sistema lineal con dos ecuaciones dependientes (más una sola igualidad):',
          options: [
            { id: 'a', label: 'Solución única', isCorrect: false },
            { id: 'b', label: 'Infinitas soluciones', isCorrect: true },
            { id: 'c', label: 'Sin soluciones', isCorrect: false },
            { id: 'd', label: 'No se puede determinar', isCorrect: false },
          ],
          explanation: 'Si las ecuaciones son dependientes, representa una familia infinita de soluciones.'
        },
        {
          id: 'and-mat-alg-q11',
          tier: 'standard',
          prompt: 'En el espacio, las rectas $r(t)=(t,t,0)$ y $s(u)=(u,0,u)$ son:',
          options: [
            { id: 'a', label: 'paralelas', isCorrect: false },
            { id: 'b', label: 'se intersectan', isCorrect: true },
            { id: 'c', label: 'se cruzan (skew)', isCorrect: false },
            { id: 'd', label: 'coincidentes', isCorrect: false },
          ],
          explanation: 'Se intersectan en el origen $(0,0,0)$.'
        },
        {
          id: 'and-mat-alg-q12',
          tier: 'standard',
          prompt: 'La recta $r(t)=(t,0,0)$ y el plano $\\Pi: x+y+z=0$ son:',
          options: [
            { id: 'a', label: 'paralelos', isCorrect: false },
            { id: 'b', label: 'perpendiculares', isCorrect: false },
            { id: 'c', label: 'se intersectan en un punto', isCorrect: true },
            { id: 'd', label: 'son paralelos y no se cortan', isCorrect: false },
          ],
          explanation: 'La recta pasa por el origen que pertenece al plano. El vector director $(1,0,0)$ no es paralelo al normal $(1,1,1)$, por lo que se intersectan en $(0,0,0)$.'
        },
        {
          id: 'and-mat-alg-q13',
          tier: 'standard',
          prompt: 'La ecuación de una recta en forma paramétrica $\\vec{r}(t) = \\vec{r}_0 + t\\vec{v}$, ¿qué representación describe?',
          options: [
            { id: 'a', label: 'Una recta en el espacio', isCorrect: true },
            { id: 'b', label: 'Una recta solo en el plano', isCorrect: false },
            { id: 'c', label: 'Un plano', isCorrect: false },
            { id: 'd', label: 'Una circunferencia', isCorrect: false },
          ],
          explanation: 'Describe una recta en el espacio (o plano si tiene solo dos componentes no nulas).'
        },
        // Añadidas difíciles
        {
          id: 'and-mat-alg-q14',
          tier: 'standard',
          prompt: 'Considera el polinomio $P(x) = x^3 - 2x^2 + 3$. ¿Cuál es el resto al dividirlo por $(x-1)$?',
          options: [
            { id: 'a', label: '2', isCorrect: true },
            { id: 'b', label: '1', isCorrect: false },
            { id: 'c', label: '0', isCorrect: false },
            { id: 'd', label: '3', isCorrect: false },
          ],
          explanation: 'Por el teorema del resto: $P(1)=1-2+3=2$.'
        },
        {
          id: 'and-mat-alg-q15',
          tier: 'premium',
          prompt: 'Un sistema homogéneo $A\\vec{x}=\\vec{0}$ con $\\det(A)=0$ (con $A$ de $3\\times 3$) tiene:',
          options: [
            { id: 'a', label: 'Infinitas soluciones', isCorrect: true },
            { id: 'b', label: 'Una sola solución', isCorrect: false },
            { id: 'c', label: 'Ninguna solución', isCorrect: false },
            { id: 'd', label: 'Solución sólo si A es diagonal', isCorrect: false },
          ],
          explanation: 'Si el determinante es cero, el sistema homogéneo tiene núcleo de dimensión mayor que cero, así que soluciones infinitas.'
        },
        {
          id: 'and-mat-alg-q16',
          tier: 'premium',
          prompt: '¿Cuál es la matriz inversa de $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$?',
          options: [
            { id: 'a', label: '$\\begin{pmatrix} 5 & -2 \\\\ -3 & 1\\end{pmatrix}$', isCorrect: false },
            { id: 'b', label: '$\\begin{pmatrix} -5 & 2 \\\\ 3 & -1\\end{pmatrix}$', isCorrect: true },
            { id: 'c', label: '$\\begin{pmatrix} 1 & -2 \\\\ -3 & 5\\end{pmatrix}$', isCorrect: false },
            { id: 'd', label: 'No existe', isCorrect: false },
          ],
          explanation: 'La inversa de una $2\\times 2$ es $\\frac{1}{ad-bc}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}$. Aquí $ad-bc=1\\cdot5-3\\cdot2=-1$.'
        }
      ]
    },

    // ---------- GEOMETRÍA ----------
    {
      id: 'geometria',
      title: 'Geometría',
      questions: [
        {
          id: 'and-mat-geo-q1',
          tier: 'standard',
          prompt: 'Las rectas en el plano $r: 2x-y+3=0$ y $s: x+y=1$ son:',
          options: [
            { id: 'a', label: 'paralelas', isCorrect: false },
            { id: 'b', label: 'perpendiculares', isCorrect: false },
            { id: 'c', label: 'se intersectan', isCorrect: true },
            { id: 'd', label: 'coinciden', isCorrect: false },
          ],
          explanation: 'Las rectas tienen pendientes diferentes (una tiene pendiente $m_1=2$ y otra $m_2=-1$), por lo que se intersectan en un único punto.'
        },
        {
          id: 'and-mat-geo-q2',
          tier: 'standard',
          prompt: 'La elipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ tiene vértices en:',
          options: [
            { id: 'a', label: '$(\\pm 3,0)$ y $(0,\\pm 2)$', isCorrect: true },
            { id: 'b', label: '$(\\pm 2,0)$ y $(0,\\pm 3)$', isCorrect: false },
            { id: 'c', label: 'Sólo en $(\\pm 3,\\pm 2)$', isCorrect: false },
            { id: 'd', label: 'No tiene vértices', isCorrect: false },
          ],
          explanation: 'Elipse con semiejes $a=3$ (horizontal) y $b=2$ (vertical).'
        },
        {
          id: 'and-mat-geo-q3',
          tier: 'standard',
          prompt: 'La parábola estándar $y^2 = 4ax$ (con $a>0$) tiene foco en:',
          options: [
            { id: 'a', label: '$(a,0)$', isCorrect: true },
            { id: 'b', label: '$(0,a)$', isCorrect: false },
            { id: 'c', label: '$(-a,0)$', isCorrect: false },
            { id: 'd', label: '$(-a,-a)$', isCorrect: false },
          ],
          explanation: 'Parábola con parámetro $a$. Foco en $(a,0)$ y directriz $x=-a$.'
        },
        {
          id: 'and-mat-geo-q4',
          tier: 'standard',
          prompt: 'La distancia entre dos planos paralelos $\\Pi_1: x+y+z=1$ y $\\Pi_2: x+y+z=3$ es:',
          options: [
            { id: 'a', label: '$\\frac{2}{\\sqrt{3}}$', isCorrect: true },
            { id: 'b', label: '$\\frac{1}{\\sqrt{3}}$', isCorrect: false },
            { id: 'c', label: '$\\frac{2}{\\sqrt{2}}$', isCorrect: false },
            { id: 'd', label: '$\\sqrt{3}$', isCorrect: false },
          ],
          explanation: 'La distancia entre planos paralelos es $d = \\frac{|d_2 - d_1|}{\\|\\vec{n}\\|}$ donde $\\vec{n} = (1,1,1)$ es el vector normal. Así: $d = \\frac{|3-1|}{\\sqrt{1^2+1^2+1^2}} = \\frac{2}{\\sqrt{3}}$.'
        },
        {
          id: 'and-mat-geo-q5',
          tier: 'standard',
          prompt: 'Una recta en el espacio puede definirse paramétricamente como:',
          options: [
            { id: 'a', label: 'r(t) = r₀ + t·v', isCorrect: true },
            { id: 'b', label: 'Una ecuación de segundo grado', isCorrect: false },
            { id: 'c', label: 'Una cónica', isCorrect: false },
            { id: 'd', label: 'Una circunferencia', isCorrect: false },
          ],
          explanation: 'La forma vectorial paramétrica $\\vec{r}(t) = \\vec{r}_0 + t\\vec{v}$ describe una recta que pasa por el punto $\\vec{r}_0$ con dirección $\\vec{v}$.'
        },
        {
          id: 'and-mat-geo-q6',
          tier: 'standard',
          prompt: 'La circunferencia de radio 1 centrada en el origen tiene ecuación:',
          options: [
            { id: 'a', label: 'x² + y² = 1', isCorrect: true },
            { id: 'b', label: 'x² - y² = 1', isCorrect: false },
            { id: 'c', label: 'x² + y² + z² = 1', isCorrect: false },
            { id: 'd', label: 'x² + y² = 0', isCorrect: false },
          ],
          explanation: 'Circunferencia en el plano con centro en el origen y radio $r=1$. Ecuación general: $x^2 + y^2 = r^2 = 1$.'
        },
        {
          id: 'and-mat-geo-q7',
          tier: 'standard',
          prompt: 'La distancia entre el punto $P(0,1,2)$ y la recta $L: x=t, y=0, z=0$ es:',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '√5', isCorrect: true },
            { id: 'c', label: '2', isCorrect: false },
            { id: 'd', label: '√3', isCorrect: false },
          ],
          explanation: 'Distancia perpendicular, $\\sqrt{1^2+2^2}=\\sqrt{5}$.'
        },
        {
          id: 'and-mat-geo-q8',
          tier: 'standard',
          prompt: 'Una elipse con semiejes $a=4$, $b=3$ centrada en el origen tiene vértices en:',
          options: [
            { id: 'a', label: '$(\\pm 4,0)$ y $(0,\\pm 3)$', isCorrect: true },
            { id: 'b', label: '$(\\pm 3,0)$ y $(0,\\pm 4)$', isCorrect: false },
            { id: 'c', label: '$(\\pm 4,\\pm 3)$', isCorrect: false },
            { id: 'd', label: 'No tiene vértices visibles', isCorrect: false },
          ],
          explanation: 'Elipse con vértices en $(\pm a, 0) = (\pm 4, 0)$ y $(0, \pm b) = (0, \pm 3)$.'
        },
        {
          id: 'and-mat-geo-q9',
          tier: 'standard',
          prompt: 'Si una recta en el espacio es paralela a un plano y no interseca el plano, entonces...',
          options: [
            { id: 'a', label: 'La recta es perpendicular al plano', isCorrect: false },
            { id: 'b', label: 'La recta se encuentra en el plano', isCorrect: false },
            { id: 'c', label: 'La recta es paralela al plano', isCorrect: true },
            { id: 'd', label: 'No tiene relación', isCorrect: false },
          ],
          explanation: 'Una recta es paralela a un plano si su vector director es perpendicular al vector normal del plano y no está contenida en él.'
        },
        // Difíciles añadidas
        {
          id: 'and-mat-geo-q10',
          tier: 'premium',
          prompt: '¿Cuál es el radio de la esfera $x^2 + y^2 + z^2 - 4x + 6y - 8z = 0$?',
          options: [
            { id: 'a', label: '$\\sqrt{29}$', isCorrect: true },
            { id: 'b', label: '5', isCorrect: false },
            { id: 'c', label: '7', isCorrect: false },
            { id: 'd', label: '3', isCorrect: false },
          ],
          explanation: 'Completando cuadrados: $(x-2)^2+(y+3)^2+(z-4)^2=4+9+16=29$. El radio es $\\sqrt{29}$.'
        },
        {
          id: 'and-mat-geo-q11',
          tier: 'standard',
          prompt: 'La hipérbola $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$ tiene vértices en:',
          options: [
            { id: 'a', label: '$(\\pm 2,0)$', isCorrect: true },
            { id: 'b', label: '$(0,\\pm 3)$', isCorrect: false },
            { id: 'c', label: '$(\\pm 3,0)$', isCorrect: false },
            { id: 'd', label: '$(\\pm 2,\\pm 3)$', isCorrect: false },
          ],
          explanation: 'Hipérbola con eje transversal horizontal y semieje $a=2$. Vértices en $(\pm 2, 0)$.'
        },
        {
          id: 'and-mat-geo-q12',
          tier: 'standard',
          prompt: 'El vector normal al plano $3x - 2y + z = 5$ es:',
          options: [
            { id: 'a', label: '$(3,-2,1)$', isCorrect: true },
            { id: 'b', label: '$(3,2,1)$', isCorrect: false },
            { id: 'c', label: '$(3,-2,5)$', isCorrect: false },
            { id: 'd', label: '$(5,3,-2)$', isCorrect: false },
          ],
          explanation: 'Los coeficientes de $x$, $y$ y $z$ en la ecuación general del plano forman el vector normal.'
        },
        {
          id: 'and-mat-geo-q13',
          tier: 'premium',
          prompt: 'Sea el plano $\\Pi: 2x + y - z = 3$ y el punto $P(1,1,1)$. La distancia de $P$ a $\\Pi$ es:',
          options: [
            { id: 'a', label: '$\\frac{1}{\\sqrt{6}}$', isCorrect: true },
            { id: 'b', label: '$\\frac{2}{\\sqrt{6}}$', isCorrect: false },
            { id: 'c', label: '$\\sqrt{6}$', isCorrect: false },
            { id: 'd', label: '1', isCorrect: false },
          ],
          explanation: 'Fórmula: $d=\\frac{|2(1)+1(1)-1(1)-3|}{\\sqrt{2^2+1^2+(-1)^2}}=\\frac{|2+1-1-3|}{\\sqrt{6}}=\\frac{1}{\\sqrt{6}}$.'
        },
        {
          id: 'and-mat-geo-q14',
          tier: 'premium',
          prompt: 'Los planos $\\Pi_1: x+y+z=1$ y $\\Pi_2: 2x+2y+2z=3$ son:',
          options: [
            { id: 'a', label: 'paralelos', isCorrect: true },
            { id: 'b', label: 'perpendiculares', isCorrect: false },
            { id: 'c', label: 'se intersectan en una recta', isCorrect: false },
            { id: 'd', label: 'coincidentes', isCorrect: false },
          ],
          explanation: 'Los vectores normales $(1,1,1)$ y $(2,2,2)$ son proporcionales, por lo que los planos son paralelos. No coinciden porque $1 \\neq 3/2$.'
        },
        {
          id: 'and-mat-geo-q15',
          tier: 'standard',
          prompt: 'La ecuación de la recta que pasa por $A(1,2,3)$ con dirección $\\vec{v}=(1,0,0)$ es:',
          options: [
            { id: 'a', label: '$(1+t,2,3)$', isCorrect: true },
            { id: 'b', label: '$(t,2,3)$', isCorrect: false },
            { id: 'c', label: '$(1,2+t,3)$', isCorrect: false },
            { id: 'd', label: '$(1,2,3+t)$', isCorrect: false },
          ],
          explanation: 'Forma paramétrica: $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}=(1,2,3)+t(1,0,0)=(1+t,2,3)$.'
        },
        {
          id: 'and-mat-geo-q16',
          tier: 'premium',
          prompt: 'Sea la cónica $4x^2 + 9y^2 = 36$. ¿Qué tipo de cónica es y cuáles son sus semiejes?',
          options: [
            { id: 'a', label: 'Elipse con $a=3, b=2$', isCorrect: true },
            { id: 'b', label: 'Hipérbola con $a=3, b=2$', isCorrect: false },
            { id: 'c', label: 'Elipse con $a=2, b=3$', isCorrect: false },
            { id: 'd', label: 'Circunferencia de radio 6', isCorrect: false },
          ],
          explanation: 'Dividiendo por 36: $\\frac{x^2}{9}+\\frac{y^2}{4}=1$. Es una elipse con semiejes $a=3$ (horizontal) y $b=2$ (vertical).'
        },
        {
          id: 'and-mat-geo-q17',
          tier: 'standard',
          prompt: 'El producto vectorial de $\\vec{u}=(1,0,0)$ y $\\vec{v}=(0,1,0)$ es:',
          options: [
            { id: 'a', label: '$(0,0,1)$', isCorrect: true },
            { id: 'b', label: '$(1,1,0)$', isCorrect: false },
            { id: 'c', label: '$(0,0,0)$', isCorrect: false },
            { id: 'd', label: '$(1,0,1)$', isCorrect: false },
          ],
          explanation: 'El producto vectorial $\\mathbf{u}\\times\\mathbf{v}$ resulta en un vector perpendicular a ambos: $(0,0,1)$.'
        }
      ]
    }
  ]
}
