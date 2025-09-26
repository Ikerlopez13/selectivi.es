import type { Subject } from './types'

export const mathematicsES: Subject = {
  id: 'matematicas',
  name: 'Matemáticas',
  topics: [
    {
      id: 'analisis',
      title: 'Análisis',
      questions: [
        {
          id: 'mat-ana-q3',
          tier: 'standard',
          prompt: 'Sea $f(x)=\\sin x$ y $g(x)=\\ln x$ con dominio adecuado. ¿Cuál es la derivada de $f(x)g(x)$ en $x>0$?',
          options: [
            { id: 'a', label: '$f\'(x)g(x) + f(x)g\'(x)$', isCorrect: true },
            { id: 'b', label: '$f\'(x)g(x) - f(x)g\'(x)$', isCorrect: false },
            { id: 'c', label: '$f\'\'(x)g(x) + f(x)g\'\'(x)$', isCorrect: false },
            { id: 'd', label: '$f\'(x)/g\'(x)$', isCorrect: false },
          ],
          explanation: 'Regla del producto: $(fg)\' = f\'g + fg\'.$'
        },
        {
          id: 'mat-ana-q4',
          tier: 'standard',
          prompt: '\\lim_{x\\to 0} \\frac{\\sin x}{x} =',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '1', isCorrect: true },
            { id: 'c', label: '$\\infty$', isCorrect: false },
            { id: 'd', label: 'No existe', isCorrect: false },
          ],
          explanation: 'Límite clásico de la derivación de sen x en 0.'
        },
        {
          id: 'mat-ana-q5',
          tier: 'standard',
          prompt: 'Si $f(x)=x^3-5x$, ¿cuál es $f\'(2)$?',
          options: [
            { id: 'a', label: '7', isCorrect: true },
            { id: 'b', label: '3', isCorrect: false },
            { id: 'c', label: '9', isCorrect: false },
            { id: 'd', label: '-5', isCorrect: false },
          ],
          explanation: '$f\'(x)=3x^2-5$, por tanto $f\'(2)=12-5=7$.'
        },
        {
          id: 'mat-ana-q6',
          tier: 'standard',
          prompt: 'Derivada de $\\sin x\\cos x$ es...',
          options: [
            { id: 'a', label: '$\\cos^2 x - \\sin^2 x$', isCorrect: true },
            { id: 'b', label: '$2\\sin x\\cos x$', isCorrect: false },
            { id: 'c', label: '$-\\cos 2x$', isCorrect: false },
            { id: 'd', label: '$\\sin 2x$', isCorrect: false },
          ],
          explanation: 'Aplicando la regla del producto: derivada de \\sin x \\cos x es $\\cos x\\cos x - \\sin x\\sin x$.'
        },
        {
          id: 'mat-ana-q7',
          tier: 'standard',
          prompt: 'Una función $f(x)=x^3-3x$ tiene extremos locales en...',
          options: [
            { id: 'a', label: 'x=-1 (máximo) y x=1 (mínimo)', isCorrect: true },
            { id: 'b', label: 'x=0 solamente', isCorrect: false },
            { id: 'c', label: 'No tiene extremos', isCorrect: false },
            { id: 'd', label: 'Sólo extremos globales', isCorrect: false },
          ],
          explanation: '$f\'(x)=3x^2-3=0$ en $x=\\pm1$; $f\'\'(x)=6x$ da máximo en $x=-1$ y mínimo en $x=1$.'
        },
        {
          id: 'mat-ana-q8',
          tier: 'standard',
          prompt: 'Primitiva de $2x$ es...',
          options: [
            { id: 'a', label: '$x^2+C$', isCorrect: true },
            { id: 'b', label: '$2x+C$', isCorrect: false },
            { id: 'c', label: '$x^2/2+C$', isCorrect: false },
            { id: 'd', label: '$4x+C$', isCorrect: false },
          ],
          explanation: 'Integrar: \\int 2x dx = x^2 + C.'
        },
        {
          id: 'mat-ana-q9',
          tier: 'standard',
          prompt: 'Integral definida: $\\int_0^1 2x\\,dx$ vale...',
          options: [
            { id: 'a', label: '1', isCorrect: true },
            { id: 'b', label: '2', isCorrect: false },
            { id: 'c', label: '1/2', isCorrect: false },
            { id: 'd', label: '0', isCorrect: false },
          ],
          explanation: 'Resultado: [x^2]_{0}^{1} = 1.'
        },
        {
          id: 'mat-ana-q10',
          tier: 'standard',
          prompt: 'La media (valor medio) de una función $f$ en $[a,b]$ se define como...',
          options: [
            { id: 'a', label: '\\(\\dfrac{1}{b-a}\\int_a^b f(x)\\,dx\\)', isCorrect: true },
            { id: 'b', label: '\\(\\dfrac{f(a)+f(b)}{2}\\)', isCorrect: false },
            { id: 'c', label: '\\(\\min_{[a,b]} f(x)\\)', isCorrect: false },
            { id: 'd', label: '\\(\\max_{[a,b]} f(x)\\)', isCorrect: false },
          ],
          explanation: 'La media (valor medio) se obtiene al dividir la integral entre la longitud del intervalo.'
        },
        {
          id: 'mat-ana-q11',
          tier: 'standard',
          prompt: 'Derivada de $\\ln x$ para $x>0$ es...',
          options: [
            { id: 'a', label: '$1/x$', isCorrect: true },
            { id: 'b', label: '$x$', isCorrect: false },
            { id: 'c', label: '$-1/x$', isCorrect: false },
            { id: 'd', label: '$1/\\ln x$', isCorrect: false },
          ],
          explanation: 'La derivada de $\\ln x$ es $1/x$ para $x>0$.'
        },
        {
          id: 'mat-ana-q12',
          tier: 'standard',
          prompt: 'La integral indefinida de $e^x$ es...',
          options: [
            { id: 'a', label: '$e^x+C$', isCorrect: true },
            { id: 'b', label: '$x e^x + C$', isCorrect: false },
            { id: 'c', label: '$e^{-x}+C$', isCorrect: false },
            { id: 'd', label: '$\\ln(e^x)+C$', isCorrect: false },
          ],
          explanation: 'La derivación de $e^x$ es $e^x$, por lo que su primitiva es $e^x+C$.'
        },
        {
          id: 'mat-ana-q13',
          tier: 'standard',
          prompt: 'El límite de $\\left(1+\\dfrac{1}{n}\\right)^n$ cuando $n\\to\\infty$ es...',
          options: [
            { id: 'a', label: '0', isCorrect: false },
            { id: 'b', label: '1', isCorrect: false },
            { id: 'c', label: '$e$', isCorrect: true },
            { id: 'd', label: '$\\infty$', isCorrect: false },
          ],
          explanation: 'Convergencia a la constante de E, $e$.'
        },
        {
          id: 'mat-ana-q14',
          tier: 'standard',
          prompt: 'Si $f(x)=\\dfrac{1}{x}$, entonces $\\displaystyle \\lim_{x\\to\\infty} f(x)=...',
          options: [
            { id: 'a', label: '0', isCorrect: true },
            { id: 'b', label: '$1$', isCorrect: false },
            { id: 'c', label: '$\\infty$', isCorrect: false },
            { id: 'd', label: 'No existe', isCorrect: false },
          ],
          explanation: 'Con $x\\to\\infty$, $1/x\\to 0$.'
        },
        {
          id: 'mat-ana-q1',
          tier: 'standard',
          prompt: 'Calcule el límite: $$\\lim_{x\\to 0} \\frac{\\sin x}{x}$$',
          options: [
            { id: 'a', label: '$0$', isCorrect: false },
            { id: 'b', label: '$1$', isCorrect: true },
            { id: 'c', label: '$\\infty$', isCorrect: false },
            { id: 'd', label: 'no existe', isCorrect: false },
          ],
          explanation: 'Este es un límite fundamental. Se puede demostrar que $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ usando el desarrollo de Taylor de $\\sin x$.'
        },
        {
          id: 'mat-ana-q2',
          tier: 'standard',
          prompt: 'Dada la función $f(x) = x^2\\sin(\\frac{1}{x})$ para $x \\neq 0$ y $f(0) = 0$, la función es:',
          options: [
            { id: 'a', label: 'Continua pero no derivable en $x=0$', isCorrect: false },
            { id: 'b', label: 'Continua y derivable en $x=0$', isCorrect: true },
            { id: 'c', label: 'No continua en $x=0$', isCorrect: false },
            { id: 'd', label: 'No definida en $x=0$', isCorrect: false },
          ],
          explanation: 'La función es continua en $x=0$ por el límite del producto. Es derivable en $x=0$ y $f\'(0)=0$.'
        }
      ]
    },
    {
      id: 'probabilidad',
      title: 'Probabilidad y Estadística',
      questions: [
        {
          id: 'mat-prob-q1',
          tier: 'standard',
          prompt: 'En un dado justo de 6 caras, ¿cuál es la probabilidad de obtener un número par?',
          options: [
            { id: 'a', label: '1/2', isCorrect: true },
            { id: 'b', label: '1/3', isCorrect: false },
            { id: 'c', label: '2/3', isCorrect: false },
            { id: 'd', label: '1/6', isCorrect: false },
          ],
          explanation: 'Resultados pares {2,4,6} son 3 de 6 posibles; probabilidad = 3/6 = 1/2.'
        },
        {
          id: 'mat-prob-q2',
          tier: 'standard',
          prompt: 'Si A y B son eventos independientes, ¿cuál es $P(A\\cap B)$?',
          options: [
            { id: 'a', label: '$P(A)+P(B)$', isCorrect: false },
            { id: 'b', label: '$P(A)P(B)$', isCorrect: true },
            { id: 'c', label: '$\\frac{P(A)}{P(B)}$', isCorrect: false },
            { id: 'd', label: '$P(A|B)$', isCorrect: false },
          ],
          explanation: 'Para eventos independientes, $P(A\\cap B)=P(A)P(B)$.'
        },
        {
          id: 'mat-prob-q3',
          tier: 'standard',
          prompt: 'Teorema de Bayes: $P(A|B)=\\dfrac{P(B|A)P(A)}{P(B)}$. Si $P(A)=0.2$, $P(B|A)=0.5$ y $P(B)=0.3$, entonces $P(A|B)$ es...',
          options: [
            { id: 'a', label: '$\\dfrac{1}{3}$', isCorrect: true },
            { id: 'b', label: '$\\dfrac{1}{6}$', isCorrect: false },
            { id: 'c', label: '$\\dfrac{2}{3}$', isCorrect: false },
            { id: 'd', label: '$\\dfrac{1}{2}$', isCorrect: false },
          ],
          explanation: 'Calcula: $P(A|B)=0.5\\times 0.2/0.3=0.1/0.3=1/3$.'
        },
        {
          id: 'mat-prob-q4',
          tier: 'standard',
          prompt: 'Una variable aleatoria binomial $X\\sim B(n,p)$ tiene media $\\mu = np$. Si $n=10$ y $p=0.5$, ¿cuál es la media?',
          options: [
            { id: 'a', label: '5', isCorrect: true },
            { id: 'b', label: '10', isCorrect: false },
            { id: 'c', label: '0.5', isCorrect: false },
            { id: 'd', label: '15', isCorrect: false },
          ],
          explanation: 'Para Binomial, la media es $np=10\\cdot 0.5=5$.'
        },
        {
          id: 'mat-prob-q5',
          tier: 'standard',
          prompt: 'La variable normal $Z\\sim N(0,1)$ tiene probabilidad entre $-1$ y $1$ aproximadamente...',
          options: [
            { id: 'a', label: '0.68', isCorrect: true },
            { id: 'b', label: '0.50', isCorrect: false },
            { id: 'c', label: '0.95', isCorrect: false },
            { id: 'd', label: '0.99', isCorrect: false },
          ],
          explanation: 'Regla empírica:≈68% dentro de ±1 desviación típica.'
        },
        {
          id: 'mat-prob-q6',
          tier: 'standard',
          prompt: 'La desviación típica de una distribución binomial $B(n,p)$ es...',
          options: [
            { id: 'a', label: '\\(\\sqrt{np(1-p)}\\)', isCorrect: true },
            { id: 'b', label: '\\(np\\)', isCorrect: false },
            { id: 'c', label: '\\(\\sqrt{n}\\)', isCorrect: false },
            { id: 'd', label: '\\(p(1-p)\\)', isCorrect: false },
          ],
          explanation: 'Varianza de Binomial es $np(1-p)$ y desviación típica es su raíz cuadrada.'
        },
        {
          id: 'mat-prob-q7',
          tier: 'standard',
          prompt: 'Un conjunto de datos tiene mediana 5 y media 6; ¿qué se puede deducir?',
          options: [
            { id: 'a', label: 'La distribución es simétrica', isCorrect: false },
            { id: 'b', label: 'La distribución está sesgada a la derecha', isCorrect: true },
            { id: 'c', label: 'La distribución está sesgada a la izquierda', isCorrect: false },
            { id: 'd', label: 'No se puede deducir nada', isCorrect: false },
          ],
          explanation: 'Media > Mediana suele indicar sesgo a la derecha.'
        },
        {
          id: 'mat-prob-q8',
          tier: 'standard',
          prompt: 'La probabilidad total de un suceso A se calcula como...',
          options: [
            { id: 'a', label: 'P(A) + P(A^c)', isCorrect: true },
            { id: 'b', label: 'P(A) - P(A^c)', isCorrect: false },
            { id: 'c', label: 'P(A|B) + P(B|A)', isCorrect: false },
            { id: 'd', label: 'P(A) * P(B)', isCorrect: false },
          ],
          explanation: 'Como P(A) + P(A^c) = 1, la probabilidad total de A (con su complemento) es 1.'
        },
        {
          id: 'mat-prob-q9',
          tier: 'standard',
          prompt: 'Distribución Poisson: si $X\\sim \\mathrm{Poisson}(\\lambda)$, entonces $P(X=k)$ es...',
          options: [
            { id: 'a', label: '$e^{-\\lambda}\\dfrac{\\lambda^k}{k!}$', isCorrect: true },
            { id: 'b', label: '$\\dfrac{\\lambda^k}{k!}$', isCorrect: false },
            { id: 'c', label: '$\\dfrac{e^{\\lambda}}{k!}$', isCorrect: false },
            { id: 'd', label: '$\\lambda^k e^{-k}$', isCorrect: false },
          ],
          explanation: 'La probabilidad de Poisson es $P(X=k)=e^{-\\lambda}\\lambda^k/k!$.'
        },
        {
          id: 'mat-prob-q10',
          tier: 'standard',
          prompt: 'Si en una muestra de tamaño $n$ se observa una proporción muestral $\\hat{p}$, la estimación de la probabilidad real es...',
          options: [
            { id: 'a', label: '$\\hat{p}$', isCorrect: true },
            { id: 'b', label: '$1-\\hat{p}$', isCorrect: false },
            { id: 'c', label: '$\\sqrt{\\hat{p}}$', isCorrect: false },
            { id: 'd', label: '$\\hat{p}(1-\\hat{p})$', isCorrect: false },
          ],
          explanation: 'La estimación puntual de la probabilidad poblacional es el valor muestral $\\hat{p}$.'
        },
        {
          id: 'mat-prob-q11',
          tier: 'standard',
          prompt: 'Cuando se aplica la Regla de la suma para la probabilidad de A o B, se tiene...',
          options: [
            { id: 'a', label: 'P(A) + P(B)', isCorrect: false },
            { id: 'b', label: 'P(A) + P(B) - P(A\\cap B)', isCorrect: true },
            { id: 'c', label: 'P(A)P(B)', isCorrect: false },
            { id: 'd', label: 'P(A|B) + P(B|A)', isCorrect: false },
          ],
          explanation: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'
        },
        {
          id: 'mat-prob-q12',
          tier: 'standard',
          prompt: 'La distribución normal está estandarizada con media 0 y desviación 1; el valor z asociado a un cuantil 0.975 es...',
          options: [
            { id: 'a', label: '1.96', isCorrect: true },
            { id: 'b', label: '1.64', isCorrect: false },
            { id: 'c', label: '2.58', isCorrect: false },
            { id: 'd', label: '0.98', isCorrect: false },
          ],
          explanation: 'Para Z ~ N(0,1), P(Z ≤ 1.96) ≈ 0.975.'
        },
        {
          id: 'mat-prob-q13',
          tier: 'standard',
          prompt: 'La probabilidad de exactamente 0 éxitos en un experimento binomial con n=4 y p=0.5 es...',
          options: [
            { id: 'a', label: '\\(0.0625\\)', isCorrect: true },
            { id: 'b', label: '\\(0.25\\)', isCorrect: false },
            { id: 'c', label: '\\(0.5\\)', isCorrect: false },
            { id: 'd', label: '\\(1\\)', isCorrect: false },
          ],
          explanation: 'P(X=0) = C(4,0) (0.5)^0 (0.5)^4 = 1/16 = 0.0625.'
        },
        {
          id: 'mat-prob-q14',
          tier: 'standard',
          prompt: 'La media de una muestra grande se aproxima por...',
          options: [
            { id: 'a', label: 'la media poblacional', isCorrect: true },
            { id: 'b', label: 'la moda', isCorrect: false },
            { id: 'c', label: 'la varianza', isCorrect: false },
            { id: 'd', label: 'la mediana', isCorrect: false },
          ],
          explanation: 'Por ley de los grandes números, la media muestral tiende a la media poblacional.'
        },
        {
          id: 'mat-prob-q15',
          tier: 'standard',
          prompt: 'La varianza de una muestra se describe como...',
          options: [
            { id: 'a', label: 'promedio de las desviaciones al cuadrado respecto de la media muestral', isCorrect: true },
            { id: 'b', label: 'media de las desviaciones', isCorrect: false },
            { id: 'c', label: 'mínimo cuadrado', isCorrect: false },
            { id: 'd', label: 'ninguna de las anteriores', isCorrect: false },
          ],
          explanation: 'La varianza muestral es la esperanza de las desviaciones al cuadrado respecto a la media muestral.'
        },
      ],
    },
    {
      id: 'geometria',
      title: 'Geometría',
      questions: [
        {
          id: 'mat-geo-q1',
          tier: 'standard',
          prompt: 'Las rectas en el plano $r:\\;2x-y+3=0$ y $s:\\;x+y=1$ son...',
          options: [
            { id: 'a', label: 'paralelas', isCorrect: false },
            { id: 'b', label: 'perpendiculares', isCorrect: false },
            { id: 'c', label: 'se intersectan', isCorrect: true },
            { id: 'd', label: 'coinciden', isCorrect: false },
          ],
          explanation: 'Sus pendientes son $m_r=2$ y $m_s=-1$; no son paralelas ni perpendiculares; se cortan en un punto.'
        },
        {
          id: 'mat-geo-q2',
          tier: 'standard',
          prompt: 'La elipse dada por $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$ tiene vértices en...',
          options: [
            { id: 'a', label: '$(\\pm 3,0)$ y $(0,\\pm 2)$', isCorrect: true },
            { id: 'b', label: '$(\\pm 2,0)$ y $(0,\\pm 3)$', isCorrect: false },
            { id: 'c', label: 'Sólo en $(\\pm 3,\\pm 2)$', isCorrect: false },
            { id: 'd', label: 'No tiene vértices', isCorrect: false },
          ],
          explanation: 'Los semiejes son $a=3$ en el eje $x$ y $b=2$ en el eje $y$.'
        },
        {
          id: 'mat-geo-q3',
          tier: 'standard',
          prompt: 'La parábola estándar $y^2=4ax$ (con $a>0$) tiene foco en...',
          options: [
            { id: 'a', label: '$(a,0)$', isCorrect: true },
            { id: 'b', label: '$(0,a)$', isCorrect: false },
            { id: 'c', label: '$(-a,0)$', isCorrect: false },
            { id: 'd', label: '$(-a,-a)$', isCorrect: false },
          ],
          explanation: 'Para $y^2=4ax$, el foco es $(a,0)$ y la directriz es $x=-a$.'
        },
        {
          id: 'mat-geo-q4',
          tier: 'standard',
          prompt: 'La distancia entre dos planos paralelos $\\Pi_1: x+y+z=1$ y $\\Pi_2: x+y+z=3$ es...',
          options: [
            { id: 'a', label: '$\\dfrac{2}{\\sqrt{3}}$', isCorrect: true },
            { id: 'b', label: '$\\dfrac{1}{\\sqrt{3}}$', isCorrect: false },
            { id: 'c', label: '$\\dfrac{2}{\\sqrt{2}}$', isCorrect: false },
            { id: 'd', label: '$\\sqrt{3}$', isCorrect: false },
          ],
          explanation: 'Distancia entre planos paralelos con normales iguales es $|d_2-d_1|/\\|n\\|$; aquí $|3-1|/\\sqrt{1^2+1^2+1^2}=2/\\sqrt{3}$.'
        },
        {
          id: 'mat-geo-q5',
          tier: 'standard',
          prompt: 'Una recta en el espacio puede definirse paramétricamente como...',
          options: [
            { id: 'a', label: '$\\vec{r}(t)=\\vec{r}_0+t\\vec{v}$', isCorrect: true },
            { id: 'b', label: 'Una ecuación de segundo grado', isCorrect: false },
            { id: 'c', label: 'Una cónica', isCorrect: false },
            { id: 'd', label: 'Una circunferencia', isCorrect: false },
          ],
          explanation: 'La forma vectorial paramétrica describe una línea recta en el espacio.'
        },
        {
          id: 'mat-geo-q6',
          tier: 'standard',
          prompt: 'La circunferencia de radio 1 centrada en el origen tiene ecuación...',
          options: [
            { id: 'a', label: '$x^2+y^2=1$', isCorrect: true },
            { id: 'b', label: '$x^2-y^2=1$', isCorrect: false },
            { id: 'c', label: '$x^2+y^2+z^2=1$', isCorrect: false },
            { id: 'd', label: '$x^2+y^2=0$', isCorrect: false },
          ],
          explanation: 'En el plano $z=0$ la circunferencia de radio 1 es $x^2+y^2=1$.'
        },
        {
          id: 'mat-geo-q7',
          tier: 'standard',
          prompt: 'La distancia entre el punto $P(0,1,2)$ y la recta $L:\\; x=t,\\, y=0,\\, z=0$ es...',
          options: [
            { id: 'a', label: '$0$', isCorrect: false },
            { id: 'b', label: '$\\sqrt{5}$', isCorrect: true },
            { id: 'c', label: '$2$', isCorrect: false },
            { id: 'd', label: '$\\sqrt{3}$', isCorrect: false },
          ],
          explanation: 'La distancia al eje x desde $P$ es $\\sqrt{1^2+2^2}=\\sqrt{5}$.'
        },
        {
          id: 'mat-geo-q8',
          tier: 'standard',
          prompt: 'Una elipse centrada en el origen con semiejes $a=4$, $b=3$ tiene vértices en...',
          options: [
            { id: 'a', label: '$(\\pm 4,0)$ y $(0,\\pm 3)$', isCorrect: true },
            { id: 'b', label: '$(\\pm 3,0)$ y $(0,\\pm 4)$', isCorrect: false },
            { id: 'c', label: '$(\\pm 4,\\pm 3)$', isCorrect: false },
            { id: 'd', label: 'No tiene vértices visibles', isCorrect: false },
          ],
          explanation: 'Los vértices de una elipse horizontal son $(\\pm a,0)$ y $(0,\\pm b)$.'
        },
        {
          id: 'mat-geo-q9',
          tier: 'standard',
          prompt: 'Si una recta en el espacio es paralela a un plano y no interseca el plano, entonces...',
          options: [
            { id: 'a', label: 'La recta es perpendicular al plano', isCorrect: false },
            { id: 'b', label: 'La recta se encuentra en el plano', isCorrect: false },
            { id: 'c', label: 'La recta es paralela al plano', isCorrect: true },
            { id: 'd', label: 'No tiene relación', isCorrect: false },
          ],
          explanation: 'Una recta paralela a un plano no lo corta; la dirección es paralela al plano.'
        },
      ],
    },
    {
      id: 'algebra',
      title: 'Álgebra',
      questions: [
        {
          id: 'mat-alg-q11',
          tier: 'standard',
          prompt: 'En el espacio, las rectas $r(t)=(t,t,0)$ y $s(u)=(u,0,u)$ son...',
          options: [
            { id: 'a', label: 'paralelas', isCorrect: false },
            { id: 'b', label: 'se intersectan', isCorrect: true },
            { id: 'c', label: 'son skew', isCorrect: false },
            { id: 'd', label: 'son coincidentes', isCorrect: false },
          ],
          explanation: 'Se intercetan en el origen (t=0=u), por lo que no son paralelas ni skew.'
        },
        {
          id: 'mat-alg-q12',
          tier: 'standard',
          prompt: 'La recta $r(t)=(t,0,0)$ y el plano $\\Pi: x+y+z=0$ son...',
          options: [
            { id: 'a', label: 'paralelas', isCorrect: false },
            { id: 'b', label: 'perpendiculares', isCorrect: false },
            { id: 'c', label: 'se intersectan en un punto', isCorrect: true },
            { id: 'd', label: 'son paralelas e no se cortan', isCorrect: false },
          ],
          explanation: 'La recta intersecta el plano en $t=0$, es decir en el punto origin. No es perpendicular pues su dirección no es normal al plano.'
        },
        {
          id: 'mat-alg-q13',
          tier: 'standard',
          prompt: 'La ecuación de una recta en forma paramétrica: $\\vec{r}(t)=\\vec{r}_0 + t\\vec{v}$, ¿qué representación describe?',
          options: [
            { id: 'a', label: 'Una recta en el espacio', isCorrect: true },
            { id: 'b', label: 'Una recta en el plano', isCorrect: false },
            { id: 'c', label: 'Un plano', isCorrect: false },
            { id: 'd', label: 'Una circunferencia', isCorrect: false },
          ],
          explanation: 'La forma vectorial paramétrica describe una recta en el espacio (o en el plano, si la dirección tiene dos componentes).'
        },
        {
          id: 'mat-alg-q2',
          tier: 'standard',
          prompt: 'Sea $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$. ¿Cuándo es invertible $A$?',
          options: [
            { id: 'a', label: '$\\det A = 0$', isCorrect: false },
            { id: 'b', label: '$\\det A \\neq 0$', isCorrect: true },
            { id: 'c', label: '$a+d=0$', isCorrect: false },
            { id: 'd', label: '$ad=bc$', isCorrect: false },
          ],
          explanation: 'Un matriz es invertible si y solo si su determinante es distinto de cero.'
        },
        {
          id: 'mat-alg-q3',
          tier: 'standard',
          prompt: 'Dados $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ y $b = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$, resuelve $Ax=b$.',
          options: [
            { id: 'a', label: '$x=-4$, $y=\\dfrac{9}{2}$', isCorrect: true },
            { id: 'b', label: '$x=4$, $y=-\\dfrac{9}{2}$', isCorrect: false },
            { id: 'c', label: '$x=-2$, $y=3$', isCorrect: false },
            { id: 'd', label: '$x=0$, $y=0$', isCorrect: false },
          ],
          explanation: 'Con $\\det A = -2 \\neq 0$ el sistema tiene solución única; resolviendo se obtiene $x=-4$, $y=9/2$.'
        },
        {
          id: 'mat-alg-q4',
          tier: 'standard',
          prompt: 'Sea $S = \\operatorname{span}\\{(1,2,3), (4,5,6)\\} \\subset \\mathbb{R}^3$. ¿Qué describe $S$?',
          options: [
            { id: 'a', label: 'Es todo \\(\\mathbb{R}^3\\)', isCorrect: false },
            { id: 'b', label: 'Es {0}', isCorrect: false },
            { id: 'c', label: 'Es un plano de dimensión 2', isCorrect: true },
            { id: 'd', label: 'Es un subespacio de dimensión 1', isCorrect: false },
          ],
          explanation: 'Los dos vectores no son múltiplos entre sí, por lo que generan un plano (dimensión 2) a través del origen.'
        },
        {
          id: 'mat-alg-q5',
          tier: 'standard',
          prompt: 'Sean $u=(1,0,0)$, $v=(0,1,0)$, $w=(0,0,1)$. ¿Qué afirmación es correcta?',
          options: [
            { id: 'a', label: 'Son linealmente dependientes', isCorrect: false },
            { id: 'b', label: 'Forman una base de \\(\\mathbb{R}^3\\)', isCorrect: true },
            { id: 'c', label: 'Generan un espacio de dimensión 2', isCorrect: false },
            { id: 'd', label: 'Sus combinaciones lineales producen solo vectores con $z=0$', isCorrect: false },
          ],
          explanation: 'Son la base canónica de \\(\\mathbb{R}^3\\), por tanto son linealmente independientes y generan todo el espacio.'
        },
        {
          id: 'mat-alg-q6',
          tier: 'standard',
          prompt: 'La matriz triangular superior $A=\\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 5 \\end{pmatrix}$ tiene determinante igual a...',
          options: [
            { id: 'a', label: '30', isCorrect: true },
            { id: 'b', label: '0', isCorrect: false },
            { id: 'c', label: '-30', isCorrect: false },
            { id: 'd', label: '10', isCorrect: false },
          ],
          explanation: 'El determinante de una matriz triangular es el producto de sus entradas diagonales: $2\\cdot 3\\cdot 5=30$.'
        },
        {
          id: 'mat-alg-q7',
          tier: 'standard',
          prompt: 'La traza de la matriz $A=\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$ es...',
          options: [
            { id: 'a', label: '10', isCorrect: true },
            { id: 'b', label: '2', isCorrect: false },
            { id: 'c', label: '30', isCorrect: false },
            { id: 'd', label: '5', isCorrect: false },
          ],
          explanation: 'La traza es la suma de los elementos de la diagonal: $2+3+5=10$.'
        },
        {
          id: 'mat-alg-q8',
          tier: 'standard',
          prompt: 'Sea $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ y $B=\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$. ¿Es verdadera la afirmación $\\det(A B) = (\\det A)(\\det B)$?',
          options: [
            { id: 'a', label: 'Sí', isCorrect: true },
            { id: 'b', label: 'No', isCorrect: false },
            { id: 'c', label: 'Solo si $A$ es triangular', isCorrect: false },
            { id: 'd', label: 'Solo si $B$ es invertible', isCorrect: false },
          ],
          explanation: 'Propiedad de determinantes: multiplican entre sí para la multiplicación de matrices.'
        },
        {
          id: 'mat-alg-q9',
          tier: 'standard',
          prompt: 'Sea $u=(1,1,0)$ y $v=(0,1,1)$. ¿Cuál de las siguientes afirmaciones es correcta sobre el conjunto \\{u,v\\}?',
          options: [
            { id: 'a', label: 'Es linealmente dependiente', isCorrect: false },
            { id: 'b', label: 'Es linealmente independiente', isCorrect: true },
            { id: 'c', label: 'Genera un subespacio de dimensión 3', isCorrect: false },
            { id: 'd', label: 'No genera ningún plano', isCorrect: false },
          ],
          explanation: 'Los vectores no son múltiplos entre sí y son independientes en \\(\\mathbb{R}^3\\).'
        },
        {
          id: 'mat-alg-q10',
          tier: 'standard',
          prompt: 'Solución de un sistema lineal con dos ecuaciones dependientes (más una sola igualidad):',
          options: [
            { id: 'a', label: 'Solución necesaria y suficiente es única', isCorrect: false },
            { id: 'b', label: 'Soluciones infinitas (un plano de soluciones)', isCorrect: true },
            { id: 'c', label: 'Sin soluciones', isCorrect: false },
            { id: 'd', label: 'No se puede determinar', isCorrect: false },
          ],
          explanation: 'Si una ecuación es múltiplo de la otra, el sistema tiene un conjunto infinito de soluciones que describe un plano en el espacio de variables.'
        },
        {
          id: 'mat-alg-q1',
          tier: 'standard',
          prompt: 'Sea la matriz $$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$ Sus valores propios son:',
          options: [
            { id: 'a', label: '$\\lambda_1 = \\frac{5+\\sqrt{33}}{2}, \\lambda_2 = \\frac{5-\\sqrt{33}}{2}$', isCorrect: true },
            { id: 'b', label: '$\\lambda_1 = 1, \\lambda_2 = 4$', isCorrect: false },
            { id: 'c', label: '$\\lambda_1 = 2, \\lambda_2 = 3$', isCorrect: false },
            { id: 'd', label: '$\\lambda_1 = \\lambda_2 = 5$', isCorrect: false },
          ],
          explanation: 'Los valores propios se obtienen resolviendo $|A-\\lambda I| = 0$, que da $\\lambda^2-5\\lambda-2=0$.'
        }
      ]
    }
  ]
}
