import type { Subject } from '../../types'

export const mathematicsAND: Subject = {
  id: 'matematicas',
  name: 'Matemáticas',
  topics: [
    {
      id: 'analisis',
      title: 'Análisis',
      questions: [
        {
          id: 'and-mat-ana-q3',
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
          id: 'and-mat-ana-q4',
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
          id: 'and-mat-ana-q5',
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
          id: 'and-mat-ana-q6',
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
          id: 'and-mat-ana-q7',
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
          id: 'and-mat-ana-q8',
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
          id: 'and-mat-ana-q9',
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
          id: 'and-mat-ana-q10',
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
          id: 'and-mat-ana-q11',
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
          id: 'and-mat-ana-q12',
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
          id: 'and-mat-ana-q13',
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
          id: 'and-mat-ana-q14',
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
          id: 'and-mat-ana-q1',
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
          id: 'and-mat-ana-q2',
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
          id: 'and-mat-prob-q1',
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
          id: 'and-mat-prob-q2',
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
          id: 'and-mat-prob-q3',
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
          id: 'and-mat-prob-q4',
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
          id: 'and-mat-prob-q5',
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
          id: 'and-mat-prob-q6',
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
          id: 'and-mat-prob-q7',
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
          id: 'and-mat-prob-q8',
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
          id: 'and-mat-prob-q9',
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
          id: 'and-mat-prob-q10',
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
          id: 'and-mat-prob-q11',
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
          id: 'and-mat-prob-q12',
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
          id: 'and-mat-prob-q13',
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
          id: 'and-mat-prob-q14',
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
          id: 'and-mat-prob-q15',
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
          id: 'and-mat-geo-q1',
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
          id: 'and-mat-geo-q2',
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
          id: 'and-mat-geo-q3',
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
          id: 'and-mat-geo-q4',
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
          id: 'and-mat-geo-q5',
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
          id: 'and-mat-geo-q6',
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
          id: 'and-mat-geo-q7',
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
          id: 'and-mat-geo-q8',
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
          id: 'and-mat-geo-q9',
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
          id: 'and-mat-alg-q11',
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
          id: 'and-mat-alg-q12',
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
          id: 'and-mat-alg-q13',
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
          id: 'and-mat-alg-q2',
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
          id: 'and-mat-alg-q3',
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
          id: 'and-mat-alg-q4',
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
          id: 'and-mat-alg-q5',
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
          id: 'and-mat-alg-q6',
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
          id: 'and-mat-alg-q7',
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
          id: 'and-mat-alg-q8',
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
          id: 'and-mat-alg-q9',
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
          id: 'and-mat-alg-q10',
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
          id: 'and-mat-alg-q1',
          tier: 'standard',
          prompt: 'Sea la matriz $$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$ Sus valores propios son:',
          options: [
            { id: 'a', label: '$\\lambda_1 = \\frac{5+\\sqrt{33}}{2}, \\lambda_2 = \\frac{5-\\sqrt{33}}{2}$', isCorrect: true },
            { id: 'b', label: '$\\lambda_1 = 1, \\lambda_2 = 4$', isCorrect: false },
            { id: 'c', label: '$\\lambda_1 = 2, \\lambda_2 = 3$', isCorrect: false },
            { id: 'd', label: '$\\lambda_1 = \\lambda_2 = 5$', isCorrect: false },
          ],
          explanation: 'Los valores propios se obtienen resolviendo $|A-\\lambda I| = 0$, que da $\\lambda^2-5\\lambda-2=0$.'
        },

  {
    "id": "mat-alg-q1",
    "tier": "standard",
    "prompt": "Dada la matriz $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, calcula $\\det(A)$.",
    "options": [
      { "id": "a", "label": "5", "isCorrect": false },
      { "id": "b", "label": "6", "isCorrect": true },
      { "id": "c", "label": "3", "isCorrect": false },
      { "id": "d", "label": "2", "isCorrect": false }
    ],
    "explanation": "El determinante de una matriz $2\\times 2$ es $\\det(A) = 2\\cdot 3 - 1\\cdot 0 = 6$."
  },
  {
    "id": "mat-alg-q2",
    "tier": "standard",
    "prompt": "Si $A$ es una matriz cuadrada de orden 3 con $\\det(A) = 4$, entonces $\\det(2A) = $",
    "options": [
      { "id": "a", "label": "8", "isCorrect": false },
      { "id": "b", "label": "16", "isCorrect": false },
      { "id": "c", "label": "32", "isCorrect": true },
      { "id": "d", "label": "4", "isCorrect": false }
    ],
    "explanation": "$\\det(kA) = k^n \\det(A)$ para matriz de orden $n$. Aquí $\\det(2A) = 2^3 \\cdot 4 = 32$."
  },
  {
    "id": "mat-alg-q3",
    "tier": "standard",
    "prompt": "El rango de la matriz $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 0 & 0 & 0 \\end{pmatrix}$ es:",
    "options": [
      { "id": "a", "label": "3", "isCorrect": false },
      { "id": "b", "label": "2", "isCorrect": false },
      { "id": "c", "label": "1", "isCorrect": true },
      { "id": "d", "label": "0", "isCorrect": false }
    ],
    "explanation": "La segunda fila es el doble de la primera y la tercera es nula, por tanto todas las filas son proporcionales a la primera. $\\text{rg}(A) = 1$."
  },
  {
    "id": "mat-alg-q4",
    "tier": "standard",
    "prompt": "Si $A$ y $B$ son matrices cuadradas del mismo orden, ¿cuál de las siguientes afirmaciones es siempre cierta?",
    "options": [
      { "id": "a", "label": "$AB = BA$", "isCorrect": false },
      { "id": "b", "label": "$\\det(AB) = \\det(A)\\det(B)$", "isCorrect": true },
      { "id": "c", "label": "$(A+B)^2 = A^2 + 2AB + B^2$", "isCorrect": false },
      { "id": "d", "label": "$\\text{rg}(A+B) = \\text{rg}(A) + \\text{rg}(B)$", "isCorrect": false }
    ],
    "explanation": "La propiedad del determinante del producto siempre se cumple: $\\det(AB) = \\det(A)\\det(B)$."
  },
  {
    "id": "mat-alg-q5",
    "tier": "standard",
    "prompt": "La matriz inversa de $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ es:",
    "options": [
      { "id": "a", "label": "$\\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}$", "isCorrect": true },
      { "id": "b", "label": "$\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "isCorrect": false },
      { "id": "c", "label": "$\\begin{pmatrix} 1 & -2 \\\\ -3 & 4 \\end{pmatrix}$", "isCorrect": false },
      { "id": "d", "label": "$\\begin{pmatrix} -1/2 & 1 \\\\ 3/2 & -2 \\end{pmatrix}$", "isCorrect": false }
    ],
    "explanation": "$\\det(A) = -2$, $A^{-1} = \\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}$."
  },
  {
    "id": "mat-alg-q6",
    "tier": "standard",
    "prompt": "El sistema $\\begin{cases} x+y=2 \\\\ 2x+2y=4 \\end{cases}$ es:",
    "options": [
      { "id": "a", "label": "Compatible determinado", "isCorrect": false },
      { "id": "b", "label": "Incompatible", "isCorrect": false },
      { "id": "c", "label": "Compatible indeterminado", "isCorrect": true },
      { "id": "d", "label": "Imposible de clasificar", "isCorrect": false }
    ],
    "explanation": "La segunda ecuación es múltiplo de la primera: ambas representan la misma recta. Sistema con infinitas soluciones (compatible indeterminado)."
  },
  {
    "id": "mat-alg-q7",
    "tier": "standard",
    "prompt": "Si los valores propios de una matriz $A$ son $\\lambda_1=2$ y $\\lambda_2=5$, entonces $\\det(A) = $",
    "options": [
      { "id": "a", "label": "7", "isCorrect": false },
      { "id": "b", "label": "3", "isCorrect": false },
      { "id": "c", "label": "10", "isCorrect": true },
      { "id": "d", "label": "25", "isCorrect": false }
    ],
    "explanation": "El determinante de una matriz es el producto de sus valores propios: $\\det(A) = 2 \\cdot 5 = 10$."
  },
  {
    "id": "mat-alg-q8",
    "tier": "standard",
    "prompt": "Para que el sistema $\\begin{cases} x+2y=3 \\\\ 2x+ky=6 \\end{cases}$ sea incompatible, el valor de $k$ debe ser:",
    "options": [
      { "id": "a", "label": "$k=4$", "isCorrect": true },
      { "id": "b", "label": "$k=2$", "isCorrect": false },
      { "id": "c", "label": "$k\\neq 4$", "isCorrect": false },
      { "id": "d", "label": "$k=0$", "isCorrect": false }
    ],
    "explanation": "Para ser incompatible, las rectas deben ser paralelas pero no coincidentes: $k=4$ hace que los coeficientes sean proporcionales pero no los términos independientes."
  },
  {
    "id": "mat-alg-q9",
    "tier": "standard",
    "prompt": "La traza de la matriz $A = \\begin{pmatrix} 3 & 1 & 2 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 6 \\end{pmatrix}$ es:",
    "options": [
      { "id": "a", "label": "11", "isCorrect": false },
      { "id": "b", "label": "8", "isCorrect": true },
      { "id": "c", "label": "15", "isCorrect": false },
      { "id": "d", "label": "6", "isCorrect": false }
    ],
    "explanation": "La traza es la suma de los elementos de la diagonal principal: $\\text{tr}(A) = 3 + (-1) + 6 = 8$."
  },
  {
    "id": "mat-alg-q10",
    "tier": "standard",
    "prompt": "Si $A$ es una matriz $3\\times 2$ y $B$ es una matriz $2\\times 4$, ¿cuál es el orden de la matriz $AB$?",
    "options": [
      { "id": "a", "label": "$2\\times 2$", "isCorrect": false },
      { "id": "b", "label": "$3\\times 4$", "isCorrect": true },
      { "id": "c", "label": "$4\\times 3$", "isCorrect": false },
      { "id": "d", "label": "$3\\times 2$", "isCorrect": false }
    ],
    "explanation": "El producto $AB$ tiene dimensión $3\\times 4$, tomando el número de filas de $A$ y columnas de $B$."
  },
  {
    "id": "mat-alg-q11",
    "tier": "standard",
    "prompt": "Una matriz $A$ de orden $n$ es ortogonal si:",
    "options": [
      { "id": "a", "label": "$A^T = A$", "isCorrect": false },
      { "id": "b", "label": "$A^T A = I$", "isCorrect": true },
      { "id": "c", "label": "$\\det(A) = 1$", "isCorrect": false },
      { "id": "d", "label": "$A = -A^T$", "isCorrect": false }
    ],
    "explanation": "Una matriz es ortogonal si su traspuesta es igual a su inversa: $A^T A = I$."
  },
  {
    "id": "mat-alg-q12",
    "tier": "standard",
    "prompt": "El método de Gauss para resolver sistemas de ecuaciones lineales consiste en:",
    "options": [
      { "id": "a", "label": "Calcular la matriz inversa", "isCorrect": false },
      { "id": "b", "label": "Triangularizar la matriz ampliada mediante operaciones elementales", "isCorrect": true },
      { "id": "c", "label": "Calcular el determinante del sistema", "isCorrect": false },
      { "id": "d", "label": "Aplicar la regla de Cramer", "isCorrect": false }
    ],
    "explanation": "El método de Gauss transforma el sistema en uno triangular mediante operaciones elementales por filas sobre la matriz ampliada."
  },
  {
    "id": "mat-ana-q1",
    "tier": "standard",
    "prompt": "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = $",
    "options": [
      { "id": "a", "label": "0", "isCorrect": false },
      { "id": "b", "label": "1", "isCorrect": true },
      { "id": "c", "label": "$\\infty$", "isCorrect": false },
      { "id": "d", "label": "No existe", "isCorrect": false }
    ],
    "explanation": "Es un límite notable fundamental: $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$."
  },
  {
    "id": "mat-ana-q2",
    "tier": "standard",
    "prompt": "Si $f(x) = x^3 - 5x$, entonces $f'(2) = $",
    "options": [
      { "id": "a", "label": "3", "isCorrect": false },
      { "id": "b", "label": "7", "isCorrect": true },
      { "id": "c", "label": "9", "isCorrect": false },
      { "id": "d", "label": "-5", "isCorrect": false }
    ],
    "explanation": "$f'(x) = 3x^2 - 5$, por tanto $f'(2) = 3(4) - 5 = 12 - 5 = 7$."
  },
  {
    "id": "mat-ana-q3",
    "tier": "standard",
    "prompt": "La función $f(x) = \\frac{1}{x-2}$ es continua en:",
    "options": [
      { "id": "a", "label": "$\\mathbb{R}$", "isCorrect": false },
      { "id": "b", "label": "$\\mathbb{R} - \\{0\\}$", "isCorrect": false },
      { "id": "c", "label": "$\\mathbb{R} - \\{2\\}$", "isCorrect": true },
      { "id": "d", "label": "$[0, +\\infty)$", "isCorrect": false }
    ],
    "explanation": "La función tiene una discontinuidad inevitable en $x=2$ donde el denominador se anula."
  },
  {
    "id": "mat-ana-q4",
    "tier": "standard",
    "prompt": "$\\int x e^x \\, dx = $",
    "options": [
      { "id": "a", "label": "$e^x(x-1) + C$", "isCorrect": true },
      { "id": "b", "label": "$xe^x + C$", "isCorrect": false },
      { "id": "c", "label": "$\\frac{x^2 e^x}{2} + C$", "isCorrect": false },
      { "id": "d", "label": "$e^x + C$", "isCorrect": false }
    ],
    "explanation": "Por integración por partes: $u=x$, $dv=e^x dx$, resulta $xe^x - e^x + C = e^x(x-1) + C$."
  },
  {
    "id": "mat-ana-q5",
    "tier": "standard",
    "prompt": "Si $f''(x) > 0$ en un intervalo, la función $f$ es:",
    "options": [
      { "id": "a", "label": "Creciente", "isCorrect": false },
      { "id": "b", "label": "Decreciente", "isCorrect": false },
      { "id": "c", "label": "Cóncava", "isCorrect": false },
      { "id": "d", "label": "Convexa", "isCorrect": true }
    ],
    "explanation": "Si la segunda derivada es positiva, la función tiene curvatura hacia arriba (convexa o cóncava hacia arriba)."
  },
  {
    "id": "mat-ana-q6",
    "tier": "standard",
    "prompt": "El Teorema de Rolle afirma que si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$, entonces:",
    "options": [
      { "id": "a", "label": "Existe $c\\in(a,b)$ tal que $f'(c)=0$", "isCorrect": true },
      { "id": "b", "label": "$f$ es constante en $[a,b]$", "isCorrect": false },
      { "id": "c", "label": "$f$ alcanza su máximo en $(a,b)$", "isCorrect": false },
      { "id": "d", "label": "$f''(c)=0$ para algún $c\\in(a,b)$", "isCorrect": false }
    ],
    "explanation": "El Teorema de Rolle garantiza la existencia de al menos un punto donde la derivada se anula."
  },
  {
    "id": "mat-ana-q7",
    "tier": "standard",
    "prompt": "$\\lim_{x\\to +\\infty} \\frac{3x^2 + 5x - 1}{x^2 - 2x + 4} = $",
    "options": [
      { "id": "a", "label": "0", "isCorrect": false },
      { "id": "b", "label": "3", "isCorrect": true },
      { "id": "c", "label": "$+\\infty$", "isCorrect": false },
      { "id": "d", "label": "5", "isCorrect": false }
    ],
    "explanation": "Límite de cociente de polinomios con igual grado: cociente de coeficientes principales $3/1 = 3$."
  },
  {
    "id": "mat-ana-q8",
    "tier": "standard",
    "prompt": "La regla de L'Hôpital se aplica para resolver indeterminaciones del tipo:",
    "options": [
      { "id": "a", "label": "$\\frac{0}{0}$ y $\\frac{\\infty}{\\infty}$", "isCorrect": true },
      { "id": "b", "label": "$0\\cdot\\infty$", "isCorrect": false },
      { "id": "c", "label": "$\\infty - \\infty$", "isCorrect": false },
      { "id": "d", "label": "$1^\\infty$", "isCorrect": false }
    ],
    "explanation": "La regla de L'Hôpital se aplica directamente a indeterminaciones $\\frac{0}{0}$ y $\\frac{\\infty}{\\infty}$."
  },
  {
    "id": "mat-ana-q9",
    "tier": "standard",
    "prompt": "Si $f(x) = \\ln(x^2 + 1)$, entonces $f'(x) = $",
    "options": [
      { "id": "a", "label": "$\\frac{1}{x^2+1}$", "isCorrect": false },
      { "id": "b", "label": "$\\frac{2x}{x^2+1}$", "isCorrect": true },
      { "id": "c", "label": "$2x\\ln(x^2+1)$", "isCorrect": false },
      { "id": "d", "label": "$\\frac{x}{x^2+1}$", "isCorrect": false }
    ],
    "explanation": "Por la regla de la cadena: $f'(x) = \\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2+1}$."
  },
  {
    "id": "mat-ana-q10",
    "tier": "standard",
    "prompt": "$\\int_0^{\\pi} \\sin x \\, dx = $",
    "options": [
      { "id": "a", "label": "0", "isCorrect": false },
      { "id": "b", "label": "1", "isCorrect": false },
      { "id": "c", "label": "2", "isCorrect": true },
      { "id": "d", "label": "$\\pi$", "isCorrect": false }
    ],
    "explanation": "$\\int_0^{\\pi} \\sin x \\, dx = [-\\cos x]_0^{\\pi} = -\\cos(\\pi) + \\cos(0) = 1 + 1 = 2$."
  },
  {
    "id": "mat-ana-q11",
    "tier": "standard",
    "prompt": "Una función $f$ tiene un máximo relativo en $x=a$ si:",
    "options": [
      { "id": "a", "label": "$f'(a)=0$ y $f''(a)<0$", "isCorrect": true },
      { "id": "b", "label": "$f'(a)=0$ y $f''(a)>0$", "isCorrect": false },
      { "id": "c", "label": "$f'(a)>0$", "isCorrect": false },
      { "id": "d", "label": "$f(a)$ es el mayor valor de $f$", "isCorrect": false }
    ],
    "explanation": "Criterio de la segunda derivada: si $f'(a)=0$ y $f''(a)<0$, entonces $f$ tiene un máximo relativo en $x=a$."
  },
  {
    "id": "mat-ana-q12",
    "tier": "standard",
    "prompt": "El área bajo la curva $y=x^2$ entre $x=0$ y $x=2$ es:",
    "options": [
      { "id": "a", "label": "$\\frac{4}{3}$", "isCorrect": false },
      { "id": "b", "label": "$\\frac{8}{3}$", "isCorrect": true },
      { "id": "c", "label": "4", "isCorrect": false },
      { "id": "d", "label": "2", "isCorrect": false }
    ],
    "explanation": "$\\int_0^2 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3}$."
  },
  {
    "id": "mat-geo-q1",
    "tier": "standard",
    "prompt": "La distancia entre los puntos $P(1,2,3)$ y $Q(4,6,3)$ es:",
    "options": [
      { "id": "a", "label": "5", "isCorrect": true },
      { "id": "b", "label": "7", "isCorrect": false },
      { "id": "c", "label": "$\\sqrt{41}$", "isCorrect": false },
      { "id": "d", "label": "6", "isCorrect": false }
    ],
    "explanation": "$d = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9+16+0} = \\sqrt{25} = 5$."
  },
  {
    "id": "mat-geo-q2",
    "tier": "standard",
    "prompt": "El producto escalar de los vectores $\\vec{u}=(2,1,-1)$ y $\\vec{v}=(1,0,2)$ es:",
    "options": [
      { "id": "a", "label": "4", "isCorrect": false },
      { "id": "b", "label": "0", "isCorrect": true },
      { "id": "c", "label": "2", "isCorrect": false },
      { "id": "d", "label": "-2", "isCorrect": false }
    ],
    "explanation": "$\\vec{u}\\cdot\\vec{v} = 2(1) + 1(0) + (-1)(2) = 2 + 0 - 2 = 0$. Son vectores perpendiculares."
  },
  {
    "id": "mat-geo-q3",
    "tier": "standard",
    "prompt": "¿Cuál es la ecuación del plano que pasa por $P(1,2,3)$ y es perpendicular al vector $\\vec{n}=(1,2,-2)$?",
    "options": [
      { "id": "a", "label": "$x+2y-2z=5$", "isCorrect": false },
      { "id": "b", "label": "$x+2y-2z=1$", "isCorrect": true },
      { "id": "c", "label": "$x+2y-2z=-1$", "isCorrect": false },
      { "id": "d", "label": "$x+2y-2z=0$", "isCorrect": false }
    ],
    "explanation": "Ecuación: $1(x-1) + 2(y-2) - 2(z-3) = 0$, simplificando: $x+2y-2z = 1$."
  },
  {
    "id": "mat-geo-q4",
    "tier": "standard",
    "prompt": "El módulo del vector $\\vec{v}=(3,4,0)$ es:",
    "options": [
      { "id": "a", "label": "7", "isCorrect": false },
      { "id": "b", "label": "5", "isCorrect": true },
      { "id": "c", "label": "$\\sqrt{7}$", "isCorrect": false },
      { "id": "d", "label": "25", "isCorrect": false }
    ],
    "explanation": "$|\\vec{v}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9+16} = \\sqrt{25} = 5$."
  },
  {
    "id": "mat-geo-q5",
    "tier": "standard",
    "prompt": "El producto vectorial de $\\vec{i}=(1,0,0)$ y $\\vec{j}=(0,1,0)$ es:",
    "options": [
      { "id": "a", "label": "$(0,0,1)$", "isCorrect": true },
      { "id": "b", "label": "$(1,1,0)$", "isCorrect": false },
      { "id": "c", "label": "$(0,0,-1)$", "isCorrect": false },
      { "id": "d", "label": "$(1,0,1)$", "isCorrect": false }
    ],
    "explanation": "$\\vec{i}\\times\\vec{j} = \\vec{k} = (0,0,1)$ según las propiedades de la base canónica."
  },
  {
    "id": "mat-geo-q6",
    "tier": "standard",
    "prompt": "La recta que pasa por $P(1,2,3)$ con vector director $\\vec{v}=(2,-1,3)$ tiene por ecuación paramétrica:",
    "options": [
      { "id": "a", "label": "$(x,y,z) = (1,2,3) + t(2,-1,3)$", "isCorrect": true },
      { "id": "b", "label": "$(x,y,z) = (2,-1,3) + t(1,2,3)$", "isCorrect": false },
      { "id": "c", "label": "$(x,y,z) = t(2,-1,3)$", "isCorrect": false },
      { "id": "d", "label": "$(x,y,z) = (1,2,3) - t(2,-1,3)$", "isCorrect": false }
    ],
    "explanation": "La ecuación paramétrica es $(x,y,z) = P + t\\vec{v} = (1,2,3) + t(2,-1,3)$."
  },
  {
    "id": "mat-geo-q7",
    "tier": "standard",
    "prompt": "Dos planos son paralelos si:",
    "options": [
      { "id": "a", "label": "Sus vectores normales son paralelos", "isCorrect": true },
      { "id": "b", "label": "Sus vectores normales son perpendiculares", "isCorrect": false },
      { "id": "c", "label": "Tienen el mismo término independiente", "isCorrect": false },
      { "id": "d", "label": "Se cortan en una recta", "isCorrect": false }
    ],
    "explanation": "Dos planos son paralelos si y solo si sus vectores normales son paralelos (proporcionales)."
  },
  {
    "id": "mat-geo-q8",
    "tier": "standard",
    "prompt": "La distancia de un punto $P(x_0,y_0,z_0)$ a un plano $ax+by+cz+d=0$ se calcula como:",
    "options": [
      { "id": "a", "label": "$\\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$", "isCorrect": true },
      { "id": "b", "label": "$|ax_0+by_0+cz_0+d|$", "isCorrect": false },
      { "id": "c", "label": "$\\sqrt{(x_0-a)^2+(y_0-b)^2+(z_0-c)^2}$", "isCorrect": false },
      { "id": "d", "label": "$ax_0+by_0+cz_0$", "isCorrect": false }
    ],
    "explanation": "Fórmula estándar: distancia = $\\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$."
  },
  {
    "id": "mat-geo-q9",
    "tier": "standard",
    "prompt": "El ángulo entre dos vectores $\\vec{u}$ y $\\vec{v}$ se calcula mediante:",
    "options": [
      { "id": "a", "label": "$\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|}$", "isCorrect": true },
      { "id": "b", "label": "$\\cos\\theta = \\vec{u}\\cdot\\vec{v}$", "isCorrect": false },
      { "id": "c", "label": "$\\sin\\theta = \\frac{\\vec{u}\\times\\vec{v}}{|\\vec{u}||\\vec{v}|}$", "isCorrect": false },
      { "id": "d", "label": "$\\theta = \\frac{\\vec{u}}{\\vec{v}}$", "isCorrect": false }
    ],
    "explanation": "El coseno del ángulo entre vectores: $\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|}$."
  }
      ]
    }
  ]
}
