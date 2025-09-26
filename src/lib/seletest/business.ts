import type { Subject } from './types'

export const businessES: Subject = {
  id: 'economia-empresa',
  name: 'Economía de la empresa',
  topics: [
    {
      id: 'empresa-entorno',
      title: 'La empresa y su entorno',
      questions: [
        {
          id: 'bus-emp-q1',
          tier: 'standard',
          prompt: 'La empresa interactúa con su entorno y está sometida a factores macroeconómicos y tecnológicos.',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Depende', isCorrect: false },
            { id: 'd', label: 'Ninguno', isCorrect: false },
          ],
          explanation: 'El entorno externo influye en las decisiones empresariales.'
        },
        {
          id: 'bus-emp-q2',
          tier: 'standard',
          prompt: '¿Qué se entiende por entorno de la empresa?',
          options: [
            { id: 'a', label: 'Solo el mercado en el que vende productos', isCorrect: false },
            { id: 'b', label: 'El conjunto de factores internos de la empresa', isCorrect: false },
            { id: 'c', label: 'El conjunto de factores externos y factores internos que rodean a la empresa y pueden influir en su funcionamiento', isCorrect: true },
            { id: 'd', label: 'Las normas legales que regulan su contabilidad', isCorrect: false },
          ],
          explanation: 'Incluye factores externos (económicos, legales, sociales, tecnológicos) y condicionantes internos.'
        }
      ]
    },
    {
      id: 'concepto-funciones',
      title: 'Concepto de empresa y funciones',
      questions: [
        {
          id: 'bus-con-q1',
          tier: 'standard',
          prompt: 'El objetivo central de la empresa es generar valor para sus propietarios y partes interesadas.',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Depende', isCorrect: false },
            { id: 'd', label: 'Ninguno', isCorrect: false },
          ],
          explanation: 'La creación de valor reside en aportar beneficios a diversos actores.'
        }
      ]
    },
    {
      id: 'produccion-costes',
      title: 'Producción y costes',
      questions: [
        {
          id: 'bus-pro-q1',
          tier: 'standard',
          prompt: 'El coste marginal (CM) se calcula como: $$\\text{CM} = \\frac{\\Delta \\text{CT}}{\\Delta Q}$$',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Depende', isCorrect: false },
            { id: 'd', label: 'Ninguno', isCorrect: false },
          ],
          explanation: 'El CM es el incremento del coste total al producir una unidad adicional.'
        },
        {
          id: 'bus-pro-q2',
          tier: 'standard',
          prompt: 'La productividad total de factores (PTF) se define como: $$\\text{PTF} = \\frac{Q}{aK + bL}$$',
          options: [
            { id: 'a', label: '$Q/L$', isCorrect: false },
            { id: 'b', label: '$Q/K$', isCorrect: false },
            { id: 'c', label: '$Q/(aK + bL)$', isCorrect: true },
            { id: 'd', label: '$Q$', isCorrect: false },
          ],
          explanation: 'La PTF utiliza una función de insumos ponderada para medir la eficiencia global.'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      questions: [
        {
          id: 'bus-mkt-q1',
          tier: 'standard',
          prompt: '¿Qué componente NO forma parte de la mezcla de marketing (4P)?',
          options: [
            { id: 'a', label: 'Producto', isCorrect: false },
            { id: 'b', label: 'Precio', isCorrect: false },
            { id: 'c', label: 'Plaza', isCorrect: false },
            { id: 'd', label: 'Personas', isCorrect: true },
          ],
          explanation: 'Las 4P clásicas son Producto, Precio, Plaza (distribución) y Promoción; Personas se asocia a marketing interno.'
        }
      ]
    },
    {
      id: 'financiacion',
      title: 'Financiación e inversión',
      questions: [
        {
          id: 'bus-fin-q1',
          tier: 'standard',
          prompt: 'El Valor Actual Neto (VAN) se calcula con la fórmula: $$\\text{VAN} = \\sum_{t=1}^n \\frac{F_t}{(1+i)^t} - I_0$$',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'N/A', isCorrect: false },
            { id: 'd', label: 'N/A', isCorrect: false },
          ],
          explanation: 'La fórmula muestra el valor actual neto descontando flujos $F_t$ al costo $i$.'
        },
        {
          id: 'bus-fin-q2',
          tier: 'standard',
          prompt: 'La TIR es la tasa de descuento que hace que VAN sea cero: $$\\sum_{t=1}^n \\frac{F_t}{(1+\\text{TIR})^t} - I_0 = 0$$',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'N/A', isCorrect: false },
            { id: 'd', label: 'N/A', isCorrect: false },
          ],
          explanation: 'La TIR es precisamente esa tasa que hace VAN igual a cero.'
        }
      ]
    },
    {
      id: 'contabilidad',
      title: 'Contabilidad y análisis económico-financiero',
      questions: [
        {
          id: 'bus-cont-q1',
          tier: 'standard',
          prompt: 'El ROE (Return on Equity) se calcula como: $$\\text{ROE} = \\frac{\\text{Beneficio Neto}}{\\text{Patrimonio Neto}}$$',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Depende', isCorrect: false },
            { id: 'd', label: 'N/A', isCorrect: false },
          ],
          explanation: 'El ROE mide la rentabilidad obtenida por los accionistas sobre sus fondos invertidos.'
        }
      ]
    }
  ]
}
