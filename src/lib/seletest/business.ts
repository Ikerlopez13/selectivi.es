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
    },
      {
        "id": "empresa-entorno",
        "title": "La empresa y su entorno",
        "questions": [
          {
            "id": "entorno-q1",
            "tier": "standard",
            "prompt": "El entorno general de la empresa incluye factores económicos, políticos, sociales y tecnológicos que la afectan indirectamente.",
            "options": [
              { "id": "a", "label": "Verdadero", "isCorrect": true },
              { "id": "b", "label": "Falso", "isCorrect": false },
              { "id": "c", "label": "Depende del tipo de empresa", "isCorrect": false },
              { "id": "d", "label": "Solo incluye factores económicos", "isCorrect": false }
            ],
            "explanation": "El entorno general está compuesto por variables externas no controlables por la empresa."
          },
          {
            "id": "entorno-q2",
            "tier": "standard",
            "prompt": "El análisis PEST estudia los factores:",
            "options": [
              { "id": "a", "label": "Políticos, Económicos, Sociales y Tecnológicos", "isCorrect": true },
              { "id": "b", "label": "Personales, Éticos, Sociales y Territoriales", "isCorrect": false },
              { "id": "c", "label": "Productivos, Estructurales y Sectoriales", "isCorrect": false },
              { "id": "d", "label": "Psicológicos, Económicos y Sociales", "isCorrect": false }
            ],
            "explanation": "El análisis PEST ayuda a identificar factores externos que afectan a la empresa."
          },
          {
            "id": "entorno-q3",
            "tier": "standard",
            "prompt": "El entorno específico está formado principalmente por:",
            "options": [
              { "id": "a", "label": "Clientes, proveedores y competidores", "isCorrect": true },
              { "id": "b", "label": "El clima político y social", "isCorrect": false },
              { "id": "c", "label": "La legislación laboral", "isCorrect": false },
              { "id": "d", "label": "Los tipos de interés", "isCorrect": false }
            ],
            "explanation": "Afecta directamente a las operaciones y decisiones de la empresa."
          },
          {
            "id": "entorno-q4",
            "tier": "standard",
            "prompt": "La globalización ha provocado:",
            "options": [
              { "id": "a", "label": "Mayor competencia internacional", "isCorrect": true },
              { "id": "b", "label": "Menor competencia local", "isCorrect": false },
              { "id": "c", "label": "Desaparición de empresas multinacionales", "isCorrect": false },
              { "id": "d", "label": "Desvinculación de los mercados", "isCorrect": false }
            ],
            "explanation": "La apertura global incrementa la competencia en todos los sectores."
          },
          {
            "id": "entorno-q5",
            "tier": "standard",
            "prompt": "El análisis DAFO identifica:",
            "options": [
              { "id": "a", "label": "Debilidades, Amenazas, Fortalezas y Oportunidades", "isCorrect": true },
              { "id": "b", "label": "Ingresos, Costes, Beneficios y Pérdidas", "isCorrect": false },
              { "id": "c", "label": "Factores internos exclusivamente", "isCorrect": false },
              { "id": "d", "label": "Factores externos únicamente", "isCorrect": false }
            ],
            "explanation": "Es una herramienta para evaluar la situación interna y externa de la empresa."
          }
        ]
      },
      {
        "id": "concepto-funciones",
        "title": "Concepto de empresa y funciones",
        "questions": [
          {
            "id": "funciones-q1",
            "tier": "standard",
            "prompt": "La función productiva se encarga de:",
            "options": [
              { "id": "a", "label": "Transformar los recursos en bienes o servicios", "isCorrect": true },
              { "id": "b", "label": "Vender productos al cliente final", "isCorrect": false },
              { "id": "c", "label": "Contratar empleados", "isCorrect": false },
              { "id": "d", "label": "Controlar los costes financieros", "isCorrect": false }
            ],
            "explanation": "Convierte los inputs en outputs para generar valor."
          },
          {
            "id": "funciones-q2",
            "tier": "standard",
            "prompt": "Una empresa se considera un sistema abierto porque:",
            "options": [
              { "id": "a", "label": "Interactúa constantemente con su entorno", "isCorrect": true },
              { "id": "b", "label": "No depende del exterior", "isCorrect": false },
              { "id": "c", "label": "Es autosuficiente", "isCorrect": false },
              { "id": "d", "label": "Actúa de forma cerrada", "isCorrect": false }
            ],
            "explanation": "Recibe recursos del entorno y devuelve bienes o servicios."
          },
          {
            "id": "funciones-q3",
            "tier": "standard",
            "prompt": "El objetivo principal de la empresa es:",
            "options": [
              { "id": "a", "label": "Crear valor económico y social", "isCorrect": true },
              { "id": "b", "label": "Maximizar los costes", "isCorrect": false },
              { "id": "c", "label": "Reducir la producción", "isCorrect": false },
              { "id": "d", "label": "Aumentar la burocracia interna", "isCorrect": false }
            ],
            "explanation": "El valor creado beneficia tanto a propietarios como a la sociedad."
          },
          {
            "id": "funciones-q4",
            "tier": "standard",
            "prompt": "Una empresa pública pertenece a:",
            "options": [
              { "id": "a", "label": "El Estado o una administración pública", "isCorrect": true },
              { "id": "b", "label": "Los trabajadores", "isCorrect": false },
              { "id": "c", "label": "Los consumidores", "isCorrect": false },
              { "id": "d", "label": "Empresarios privados", "isCorrect": false }
            ],
            "explanation": "Las empresas públicas son propiedad de organismos estatales."
          },
          {
            "id": "funciones-q5",
            "tier": "standard",
            "prompt": "La función financiera se encarga de:",
            "options": [
              { "id": "a", "label": "Obtener y gestionar los recursos monetarios", "isCorrect": true },
              { "id": "b", "label": "Organizar la producción", "isCorrect": false },
              { "id": "c", "label": "Seleccionar el personal", "isCorrect": false },
              { "id": "d", "label": "Diseñar campañas publicitarias", "isCorrect": false }
            ],
            "explanation": "Garantiza la disponibilidad de fondos y la rentabilidad de la empresa."
          }
        ]
      },
      {
        "id": "marketing",
        "title": "Marketing",
        "questions": [
          {
            "id": "marketing-q1",
            "tier": "standard",
            "prompt": "El marketing busca:",
            "options": [
              { "id": "a", "label": "Satisfacer las necesidades del consumidor mediante intercambios rentables", "isCorrect": true },
              { "id": "b", "label": "Aumentar los precios", "isCorrect": false },
              { "id": "c", "label": "Reducir el gasto en publicidad", "isCorrect": false },
              { "id": "d", "label": "Maximizar la producción", "isCorrect": false }
            ],
            "explanation": "El marketing se centra en la creación de valor para el cliente."
          },
          {
            "id": "marketing-q2",
            "tier": "standard",
            "prompt": "El estudio del mercado permite:",
            "options": [
              { "id": "a", "label": "Conocer las preferencias y hábitos del consumidor", "isCorrect": true },
              { "id": "b", "label": "Reducir los costes laborales", "isCorrect": false },
              { "id": "c", "label": "Aumentar la deuda financiera", "isCorrect": false },
              { "id": "d", "label": "Evitar la competencia", "isCorrect": false }
            ],
            "explanation": "Sirve para adaptar los productos a las necesidades del público objetivo."
          },
          {
            "id": "marketing-q3",
            "tier": "standard",
            "prompt": "El precio psicológico se basa en:",
            "options": [
              { "id": "a", "label": "La percepción del consumidor", "isCorrect": true },
              { "id": "b", "label": "El coste de producción", "isCorrect": false },
              { "id": "c", "label": "El margen de beneficio contable", "isCorrect": false },
              { "id": "d", "label": "Los impuestos indirectos", "isCorrect": false }
            ],
            "explanation": "Busca ajustar el precio a la percepción emocional del cliente."
          },
          {
            "id": "marketing-q4",
            "tier": "standard",
            "prompt": "La estrategia de diferenciación consiste en:",
            "options": [
              { "id": "a", "label": "Ofrecer un producto con características únicas", "isCorrect": true },
              { "id": "b", "label": "Competir solo por precio", "isCorrect": false },
              { "id": "c", "label": "Reducir la calidad", "isCorrect": false },
              { "id": "d", "label": "Aumentar la producción sin control", "isCorrect": false }
            ],
            "explanation": "Diferenciar un producto crea ventaja competitiva."
          },
          {
            "id": "marketing-q5",
            "tier": "standard",
            "prompt": "El canal de distribución directa implica:",
            "options": [
              { "id": "a", "label": "Que el fabricante vende directamente al consumidor", "isCorrect": true },
              { "id": "b", "label": "La participación de mayoristas", "isCorrect": false },
              { "id": "c", "label": "Una cadena de intermediarios", "isCorrect": false },
              { "id": "d", "label": "Un mercado financiero", "isCorrect": false }
            ],
            "explanation": "Se elimina la intermediación para acercar el producto al cliente final."
          }
        ]
      },
    
    
    {
      id: 'crecimiento-desarrollo',
      title: 'Crecimiento y desarrollo de la empresa',
      questions: [
        {
          id: 'bus-crec-q1',
          tier: 'standard',
          prompt: '¿Cuál es un beneficio clave de las alianzas estratégicas entre empresas?',
          options: [
            { id: 'a', label: 'Acceder a sinergias y recursos complementarios', isCorrect: true },
            { id: 'b', label: 'Aumentar costes', isCorrect: false },
            { id: 'c', label: 'Disminuir la competencia', isCorrect: false },
            { id: 'd', label: 'No hay efectos', isCorrect: false },
          ],
          explanation: 'Las alianzas estratégicas permiten lograr sinergias y acceder a capacidades complementarias.'
        },
        {
          id: 'bus-crec-q2',
          tier: 'standard',
          prompt: '¿Qué se entiende por concentración horizontal?',
          options: [
            { id: 'a', label: 'Unión de empresas del mismo sector para aumentar cuota de mercado', isCorrect: true },
            { id: 'b', label: 'Compra de proveedores', isCorrect: false },
            { id: 'c', label: 'Colaboración en investigación', isCorrect: false },
            { id: 'd', label: 'Fusión con competidores de otro sector', isCorrect: false },
          ],
          explanation: 'La concentración horizontal implica fusionarse o adquirir a competidores del mismo sector para crecer en el mercado.'
        }
      ]
    }
  ]
}
