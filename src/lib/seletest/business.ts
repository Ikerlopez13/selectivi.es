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
        },
        {
                "id": "bus-con-q1",
                "tier": "standard",
                "prompt": "La empresa se puede definir como una unidad económica de producción que:",
                "options": [
                  { "id": "a", "label": "Solo busca maximizar beneficios", "isCorrect": false },
                  { "id": "b", "label": "Combina factores productivos para crear bienes y servicios", "isCorrect": true },
                  { "id": "c", "label": "Únicamente distribuye productos", "isCorrect": false },
                  { "id": "d", "label": "No asume riesgos empresariales", "isCorrect": false }
                ],
                "explanation": "La empresa transforma factores productivos (trabajo, capital, tierra) mediante un proceso organizativo para obtener productos o servicios destinados al mercado."
              },
              {
                "id": "bus-con-q2",
                "tier": "standard",
                "prompt": "¿Cuál de las siguientes NO es una función básica de la empresa?",
                "options": [
                  { "id": "a", "label": "Función de producción", "isCorrect": false },
                  { "id": "b", "label": "Función financiera", "isCorrect": false },
                  { "id": "c", "label": "Función legislativa", "isCorrect": true },
                  { "id": "d", "label": "Función comercial", "isCorrect": false }
                ],
                "explanation": "Las funciones empresariales básicas son: producción, comercial, financiera, recursos humanos y dirección. La función legislativa corresponde al Estado."
              },
              {
                "id": "bus-con-q3",
                "tier": "standard",
                "prompt": "El objetivo principal de una empresa mercantil es:",
                "options": [
                  { "id": "a", "label": "Crear empleo exclusivamente", "isCorrect": false },
                  { "id": "b", "label": "Obtener beneficios económicos", "isCorrect": true },
                  { "id": "c", "label": "Pagar impuestos al Estado", "isCorrect": false },
                  { "id": "d", "label": "Satisfacer necesidades sin ánimo de lucro", "isCorrect": false }
                ],
                "explanation": "Aunque las empresas tienen múltiples objetivos, el primordial en empresas mercantiles es maximizar beneficios para remunerar a propietarios y garantizar supervivencia."
              }
            ]
          },
          {
            "id": "tipos-empresas",
            "title": "Tipos de empresas según distintos criterios",
            "questions": [
              {
                "id": "bus-tip-q1",
                "tier": "standard",
                "prompt": "Según su forma jurídica, una Sociedad Anónima (S.A.) se caracteriza por:",
                "options": [
                  { "id": "a", "label": "Responsabilidad ilimitada de los socios", "isCorrect": false },
                  { "id": "b", "label": "Capital dividido en acciones con responsabilidad limitada", "isCorrect": true },
                  { "id": "c", "label": "Necesitar solo un socio mínimo", "isCorrect": false },
                  { "id": "d", "label": "No poder cotizar en bolsa", "isCorrect": false }
                ],
                "explanation": "La S.A. divide su capital en acciones, los socios tienen responsabilidad limitada al capital aportado y puede cotizar en bolsa. Requiere mínimo 60.000€ de capital."
              },
              {
                "id": "bus-tip-q2",
                "tier": "standard",
                "prompt": "Una microempresa se define según su número de trabajadores como aquella que tiene:",
                "options": [
                  { "id": "a", "label": "Menos de 10 empleados", "isCorrect": true },
                  { "id": "b", "label": "Entre 10 y 50 empleados", "isCorrect": false },
                  { "id": "c", "label": "Entre 50 y 250 empleados", "isCorrect": false },
                  { "id": "d", "label": "Más de 250 empleados", "isCorrect": false }
                ],
                "explanation": "Según la UE: microempresa (<10), pequeña (10-49), mediana (50-249) y gran empresa (≥250 empleados)."
              },
              {
                "id": "bus-tip-q3",
                "tier": "standard",
                "prompt": "La principal diferencia entre una S.A. y una S.L. es:",
                "options": [
                  { "id": "a", "label": "La S.L. tiene responsabilidad ilimitada", "isCorrect": false },
                  { "id": "b", "label": "La S.A. requiere mayor capital social mínimo", "isCorrect": true },
                  { "id": "c", "label": "La S.L. no puede tener beneficios", "isCorrect": false },
                  { "id": "d", "label": "La S.A. no paga impuestos", "isCorrect": false }
                ],
                "explanation": "S.A. requiere 60.000€ de capital mínimo y S.L. solo 3.000€. Además, la S.A. divide el capital en acciones y la S.L. en participaciones."
              },
              {
                "id": "bus-tip-q4",
                "tier": "standard",
                "prompt": "Según el sector económico, una empresa que se dedica a la fabricación de automóviles pertenece al sector:",
                "options": [
                  { "id": "a", "label": "Primario", "isCorrect": false },
                  { "id": "b", "label": "Secundario", "isCorrect": true },
                  { "id": "c", "label": "Terciario", "isCorrect": false },
                  { "id": "d", "label": "Cuaternario", "isCorrect": false }
                ],
                "explanation": "El sector secundario comprende actividades industriales y de transformación. Primario obtiene recursos naturales, terciario presta servicios."
              }
            ]
          },
          {
            "id": "rsc-objetivos",
            "title": "Responsabilidad social corporativa y objetivos empresariales",
            "questions": [
              {
                "id": "bus-rsc-q1",
                "tier": "standard",
                "prompt": "La Responsabilidad Social Corporativa (RSC) implica:",
                "options": [
                  { "id": "a", "label": "Solo cumplir la legislación vigente", "isCorrect": false },
                  { "id": "b", "label": "Integrar voluntariamente preocupaciones sociales y medioambientales", "isCorrect": true },
                  { "id": "c", "label": "Maximizar beneficios sin considerar el entorno", "isCorrect": false },
                  { "id": "d", "label": "Reducir costes laborales", "isCorrect": false }
                ],
                "explanation": "RSC va más allá de obligaciones legales, incorporando de forma voluntaria aspectos sociales, ambientales y éticos en la gestión empresarial."
              },
              {
                "id": "bus-rsc-q2",
                "tier": "standard",
                "prompt": "Los stakeholders o grupos de interés de una empresa incluyen:",
                "options": [
                  { "id": "a", "label": "Solo los accionistas", "isCorrect": false },
                  { "id": "b", "label": "Accionistas, empleados, clientes, proveedores y comunidad", "isCorrect": true },
                  { "id": "c", "label": "Únicamente los directivos", "isCorrect": false },
                  { "id": "d", "label": "Solo el gobierno", "isCorrect": false }
                ],
                "explanation": "Los stakeholders son todos los grupos afectados por la actividad empresarial: propietarios, trabajadores, clientes, proveedores, sociedad y administración pública."
              },
              {
                "id": "bus-rsc-q3",
                "tier": "standard",
                "prompt": "El balance social de una empresa mide:",
                "options": [
                  { "id": "a", "label": "Solo los beneficios económicos", "isCorrect": false },
                  { "id": "b", "label": "El impacto social y medioambiental de su actividad", "isCorrect": true },
                  { "id": "c", "label": "Únicamente las pérdidas contables", "isCorrect": false },
                  { "id": "d", "label": "La cotización en bolsa", "isCorrect": false }
                ],
                "explanation": "El balance social evalúa el comportamiento ético, social y medioambiental, complementando la información financiera tradicional."
              }
            ]
          },
          {
            "id": "funciones-directivo",
            "title": "Funciones del directivo",
            "questions": [
              {
                "id": "bus-dir-q1",
                "tier": "standard",
                "prompt": "Según Fayol, las funciones directivas son:",
                "options": [
                  { "id": "a", "label": "Planificar, organizar, dirigir, coordinar y controlar", "isCorrect": true },
                  { "id": "b", "label": "Solo producir y vender", "isCorrect": false },
                  { "id": "c", "label": "Únicamente contratar personal", "isCorrect": false },
                  { "id": "d", "label": "Maximizar beneficios exclusivamente", "isCorrect": false }
                ],
                "explanation": "Henri Fayol estableció cinco funciones administrativas fundamentales que conforman el proceso directivo clásico en cualquier organización."
              },
              {
                "id": "bus-dir-q2",
                "tier": "standard",
                "prompt": "La función de control consiste en:",
                "options": [
                  { "id": "a", "label": "Establecer objetivos futuros", "isCorrect": false },
                  { "id": "b", "label": "Comparar resultados con objetivos y corregir desviaciones", "isCorrect": true },
                  { "id": "c", "label": "Contratar nuevo personal", "isCorrect": false },
                  { "id": "d", "label": "Dividir el trabajo en tareas", "isCorrect": false }
                ],
                "explanation": "El control verifica el cumplimiento de objetivos, identifica desviaciones respecto a lo planificado y establece medidas correctoras."
              },
              {
                "id": "bus-dir-q3",
                "tier": "standard",
                "prompt": "La planificación estratégica se caracteriza por:",
                "options": [
                  { "id": "a", "label": "Ser a corto plazo y operativa", "isCorrect": false },
                  { "id": "b", "label": "Ser a largo plazo y definir objetivos generales", "isCorrect": true },
                  { "id": "c", "label": "Centrarse solo en tareas diarias", "isCorrect": false },
                  { "id": "d", "label": "No involucrar a la alta dirección", "isCorrect": false }
                ],
                "explanation": "La planificación estratégica establece objetivos a largo plazo (3-5 años), define la misión y visión, y determina estrategias globales de la empresa."
              }
            ]
          },
          {
            "id": "liderazgo-motivacion",
            "title": "Liderazgo, estilos de dirección y motivación",
            "questions": [
              {
                "id": "bus-lid-q1",
                "tier": "standard",
                "prompt": "El estilo de liderazgo autocrático se caracteriza por:",
                "options": [
                  { "id": "a", "label": "Tomar decisiones de forma centralizada sin consultar", "isCorrect": true },
                  { "id": "b", "label": "Permitir total libertad a los empleados", "isCorrect": false },
                  { "id": "c", "label": "Consultar siempre todas las decisiones", "isCorrect": false },
                  { "id": "d", "label": "No tomar ninguna decisión", "isCorrect": false }
                ],
                "explanation": "El líder autocrático concentra poder, toma decisiones unilateralmente, establece objetivos sin participación y controla estrictamente."
              },
              {
                "id": "bus-lid-q2",
                "tier": "standard",
                "prompt": "Según Maslow, las necesidades humanas se ordenan jerárquicamente. ¿Cuál es el orden correcto de base a cúspide?",
                "options": [
                  { "id": "a", "label": "Fisiológicas, seguridad, sociales, estima, autorrealización", "isCorrect": true },
                  { "id": "b", "label": "Sociales, seguridad, fisiológicas, estima, autorrealización", "isCorrect": false },
                  { "id": "c", "label": "Autorrealización, estima, sociales, seguridad, fisiológicas", "isCorrect": false },
                  { "id": "d", "label": "Seguridad, fisiológicas, estima, sociales, autorrealización", "isCorrect": false }
                ],
                "explanation": "La pirámide de Maslow establece cinco niveles jerárquicos: desde necesidades básicas (fisiológicas) hasta necesidades superiores (autorrealización)."
              },
              {
                "id": "bus-lid-q3",
                "tier": "standard",
                "prompt": "Según la Teoría X e Y de McGregor, la Teoría X asume que:",
                "options": [
                  { "id": "a", "label": "Los trabajadores son responsables y buscan autonomía", "isCorrect": false },
                  { "id": "b", "label": "Los empleados evitan el trabajo y necesitan control", "isCorrect": true },
                  { "id": "c", "label": "La motivación intrínseca es suficiente", "isCorrect": false },
                  { "id": "d", "label": "Los trabajadores no necesitan supervisión", "isCorrect": false }
                ],
                "explanation": "Teoría X: visión pesimista, trabajadores evitan responsabilidad, necesitan dirección autoritaria. Teoría Y: visión optimista, trabajadores son comprometidos y creativos."
              },
              {
                "id": "bus-lid-q4",
                "tier": "standard",
                "prompt": "La teoría bifactorial de Herzberg distingue entre:",
                "options": [
                  { "id": "a", "label": "Factores higiénicos y factores motivadores", "isCorrect": true },
                  { "id": "b", "label": "Necesidades primarias y secundarias", "isCorrect": false },
                  { "id": "c", "label": "Teoría X y Teoría Y", "isCorrect": false },
                  { "id": "d", "label": "Liderazgo autocrático y democrático", "isCorrect": false }
                ],
                "explanation": "Herzberg distingue: factores higiénicos (evitan insatisfacción: salario, condiciones) y motivadores (generan satisfacción: reconocimiento, responsabilidad, desarrollo)."
              }
            ]
          },
          {
            "id": "estructuras-organizativas",
            "title": "Estructuras organizativas",
            "questions": [
              {
                "id": "bus-org-q1",
                "tier": "standard",
                "prompt": "En una estructura organizativa lineal o jerárquica:",
                "options": [
                  { "id": "a", "label": "Cada empleado tiene varios jefes", "isCorrect": false },
                  { "id": "b", "label": "La autoridad fluye de arriba hacia abajo con unidad de mando", "isCorrect": true },
                  { "id": "c", "label": "No existe jerarquía definida", "isCorrect": false },
                  { "id": "d", "label": "Se organizan equipos temporales por proyectos", "isCorrect": false }
                ],
                "explanation": "La estructura lineal sigue el principio de unidad de mando: cada trabajador depende de un solo superior, con clara línea de autoridad vertical."
              },
              {
                "id": "bus-org-q2",
                "tier": "standard",
                "prompt": "La estructura matricial combina:",
                "options": [
                  { "id": "a", "label": "Criterios funcionales y por proyectos", "isCorrect": true },
                  { "id": "b", "label": "Solo departamentos funcionales", "isCorrect": false },
                  { "id": "c", "label": "Únicamente líneas de productos", "isCorrect": false },
                  { "id": "d", "label": "Estructura totalmente horizontal", "isCorrect": false }
                ],
                "explanation": "La organización matricial tiene doble autoridad: empleados dependen de su jefe funcional y del director de proyecto, favoreciendo flexibilidad y coordinación."
              },
              {
                "id": "bus-org-q3",
                "tier": "standard",
                "prompt": "El organigrama de una empresa representa:",
                "options": [
                  { "id": "a", "label": "Solo los beneficios económicos", "isCorrect": false },
                  { "id": "b", "label": "La estructura formal de autoridad y comunicación", "isCorrect": true },
                  { "id": "c", "label": "Únicamente el personal directivo", "isCorrect": false },
                  { "id": "d", "label": "Los productos que fabrica", "isCorrect": false }
                ],
                "explanation": "El organigrama muestra gráficamente la estructura formal: jerarquía, departamentos, relaciones de autoridad y canales de comunicación establecidos."
              }
            ]
          },
          {
            "id": "produccion-costes",
            "title": "Productividad, costes y umbral de rentabilidad",
            "questions": [
              {
                "id": "bus-prod-q1",
                "tier": "standard",
                "prompt": "La productividad se define como:",
                "options": [
                  { "id": "a", "label": "La cantidad de producto obtenida por unidad de factor empleado", "isCorrect": true },
                  { "id": "b", "label": "El coste total de producción", "isCorrect": false },
                  { "id": "c", "label": "El precio de venta del producto", "isCorrect": false },
                  { "id": "d", "label": "El número de trabajadores", "isCorrect": false }
                ],
                "explanation": "Productividad mide eficiencia: $\\text{Productividad} = \\frac{\\text{Producción obtenida}}{\\text{Factor empleado}}$. Puede ser del trabajo, capital o global."
              },
              {
                "id": "bus-prod-q2",
                "tier": "standard",
                "prompt": "Los costes fijos son aquellos que:",
                "options": [
                  { "id": "a", "label": "Varían con el nivel de producción", "isCorrect": false },
                  { "id": "b", "label": "No varían aunque cambie la producción", "isCorrect": true },
                  { "id": "c", "label": "Solo incluyen materias primas", "isCorrect": false },
                  { "id": "d", "label": "Desaparecen si no se produce", "isCorrect": false }
                ],
                "explanation": "Costes fijos (CF) permanecen constantes independientemente del volumen producido: alquileres, amortizaciones, seguros. Costes variables (CV) cambian con la producción."
              },
              {
                "id": "bus-prod-q3",
                "tier": "standard",
                "prompt": "El umbral de rentabilidad o punto muerto se alcanza cuando:",
                "options": [
                  { "id": "a", "label": "Los ingresos totales igualan a los costes totales", "isCorrect": true },
                  { "id": "b", "label": "Los beneficios son máximos", "isCorrect": false },
                  { "id": "c", "label": "No hay costes variables", "isCorrect": false },
                  { "id": "d", "label": "La producción es cero", "isCorrect": false }
                ],
                "explanation": "En el punto muerto: $IT = CT$, es decir, $P \\times Q = CF + CV \\times Q$. La empresa no gana ni pierde, cubriendo todos sus costes."
              },
              {
                "id": "bus-prod-q4",
                "tier": "standard",
                "prompt": "Si los costes fijos son 10.000€, el coste variable unitario 5€ y el precio de venta 15€, el umbral de rentabilidad en unidades es:",
                "options": [
                  { "id": "a", "label": "500 unidades", "isCorrect": false },
                  { "id": "b", "label": "1.000 unidades", "isCorrect": true },
                  { "id": "c", "label": "2.000 unidades", "isCorrect": false },
                  { "id": "d", "label": "667 unidades", "isCorrect": false }
                ],
                "explanation": "$Q_{pm} = \\frac{CF}{P - CV_u} = \\frac{10.000}{15-5} = \\frac{10.000}{10} = 1.000$ unidades. A partir de ahí se obtienen beneficios."
              }
            ]
          },
          {
            "id": "marketing",
            "title": "Marketing y estrategias comerciales",
            "questions": [
              {
                "id": "bus-mkt-q1",
                "tier": "standard",
                "prompt": "El marketing-mix o mezcla comercial está compuesto por:",
                "options": [
                  { "id": "a", "label": "Producto, precio, distribución y comunicación (4P)", "isCorrect": true },
                  { "id": "b", "label": "Solo publicidad", "isCorrect": false },
                  { "id": "c", "label": "Únicamente el precio", "isCorrect": false },
                  { "id": "d", "label": "Producción y finanzas", "isCorrect": false }
                ],
                "explanation": "Las 4P del marketing-mix son: Producto (product), Precio (price), Distribución (place) y Comunicación/Promoción (promotion)."
              },
              {
                "id": "bus-mkt-q2",
                "tier": "standard",
                "prompt": "La segmentación de mercado consiste en:",
                "options": [
                  { "id": "a", "label": "Vender al mercado total sin diferenciación", "isCorrect": false },
                  { "id": "b", "label": "Dividir el mercado en grupos homogéneos de consumidores", "isCorrect": true },
                  { "id": "c", "label": "Fijar el precio más alto posible", "isCorrect": false },
                  { "id": "d", "label": "Producir un solo tipo de producto", "isCorrect": false }
                ],
                "explanation": "Segmentar es dividir el mercado en grupos con características y necesidades similares para dirigir estrategias específicas a cada segmento."
              },
              {
                "id": "bus-mkt-q3",
                "tier": "standard",
                "prompt": "Una estrategia de penetración de mercado implica:",
                "options": [
                  { "id": "a", "label": "Fijar precios bajos para ganar cuota rápidamente", "isCorrect": true },
                  { "id": "b", "label": "Establecer precios muy altos inicialmente", "isCorrect": false },
                  { "id": "c", "label": "No considerar la competencia", "isCorrect": false },
                  { "id": "d", "label": "Abandonar el mercado", "isCorrect": false }
                ],
                "explanation": "Penetración busca captar rápidamente mercado con precios bajos, mientras que descremación (skimming) fija precios altos iniciales para segmentos selectos."
              },
              {
                "id": "bus-mkt-q4",
                "tier": "standard",
                "prompt": "El ciclo de vida del producto tiene las siguientes fases:",
                "options": [
                  { "id": "a", "label": "Introducción, crecimiento, madurez y declive", "isCorrect": true },
                  { "id": "b", "label": "Solo introducción y declive", "isCorrect": false },
                  { "id": "c", "label": "Producción y venta", "isCorrect": false },
                  { "id": "d", "label": "Inicio y fin", "isCorrect": false }
                ],
                "explanation": "El CVP tiene 4 etapas: introducción (lanzamiento), crecimiento (expansión ventas), madurez (estabilización) y declive (caída ventas)."
              },
              {
                "id": "bus-mkt-q5",
                "tier": "standard",
                "prompt": "La investigación de mercados tiene como objetivo:",
                "options": [
                  { "id": "a", "label": "Recopilar información sobre consumidores, competencia y entorno", "isCorrect": true },
                  { "id": "b", "label": "Solo fijar precios", "isCorrect": false },
                  { "id": "c", "label": "Únicamente diseñar productos", "isCorrect": false },
                  { "id": "d", "label": "Contratar personal", "isCorrect": false }
                ],
                "explanation": "La investigación de mercados recoge y analiza información sistemática sobre consumidores, competidores y mercado para tomar decisiones comerciales."
              },
              {
                "id": "bus-mkt-q6",
                "tier": "standard",
                "prompt": "La distribución intensiva se caracteriza por:",
                "options": [
                  { "id": "a", "label": "Distribuir en pocos puntos de venta selectos", "isCorrect": false },
                  { "id": "b", "label": "Usar el mayor número posible de establecimientos", "isCorrect": true },
                  { "id": "c", "label": "Vender solo en tienda propia", "isCorrect": false },
                  { "id": "d", "label": "No utilizar intermediarios", "isCorrect": false }
                ],
                "explanation": "Distribución intensiva busca máxima cobertura (productos de consumo frecuente), selectiva usa intermediarios limitados, exclusiva solo concesionarios autorizados."
              },
              {
                "id": "bus-mkt-q7",
                "tier": "standard",
                "prompt": "La marca es importante porque:",
                "options": [
                  { "id": "a", "label": "Identifica y diferencia el producto de la competencia", "isCorrect": true },
                  { "id": "b", "label": "Solo sirve para la publicidad", "isCorrect": false },
                  { "id": "c", "label": "No influye en la decisión de compra", "isCorrect": false },
                  { "id": "d", "label": "Únicamente aumenta costes", "isCorrect": false }
                ],
                "explanation": "La marca identifica, diferencia, aporta valor, fideliza clientes y puede generar ventaja competitiva sostenible en el mercado."
              },
              {
                "id": "bus-mkt-q8",
                "tier": "standard",
                "prompt": "La elasticidad-precio de la demanda mide:",
                "options": [
                  { "id": "a", "label": "La variación porcentual de la cantidad demandada ante cambios en el precio", "isCorrect": true },
                  { "id": "b", "label": "Solo el precio máximo", "isCorrect": false },
                  { "id": "c", "label": "El coste de producción", "isCorrect": false },
                  { "id": "d", "label": "La publicidad necesaria", "isCorrect": false }
                ],
                "explanation": "$E_p = \\frac{\\Delta Q / Q}{\\Delta P / P}$. Si $|E_p| > 1$ (elástica): demanda sensible a precio. Si $|E_p| < 1$ (inelástica): poco sensible."
              }
            ]
          },
          {
            "id": "recursos-humanos",
            "title": "Recursos humanos",
            "questions": [
              {
                "id": "bus-rrhh-q1",
                "tier": "standard",
                "prompt": "El proceso de selección de personal comienza con:",
                "options": [
                  { "id": "a", "label": "La entrevista final", "isCorrect": false },
                  { "id": "b", "label": "El reclutamiento y la definición del perfil del puesto", "isCorrect": true },
                  { "id": "c", "label": "La firma del contrato", "isCorrect": false },
                  { "id": "d", "label": "La evaluación del desempeño", "isCorrect": false }
                ],
                "explanation": "Primero se define el puesto y perfil requerido, luego reclutamiento (atraer candidatos), selección (pruebas, entrevistas) y finalmente contratación."
              },
              {
                "id": "bus-rrhh-q2",
                "tier": "standard",
                "prompt": "La formación continua del personal tiene como objetivo:",
                "options": [
                  { "id": "a", "label": "Actualizar conocimientos y mejorar competencias", "isCorrect": true },
                  { "id": "b", "label": "Reducir salarios", "isCorrect": false },
                  { "id": "c", "label": "Despedir trabajadores", "isCorrect": false },
                  { "id": "d", "label": "Solo cumplir la ley", "isCorrect": false }
                ],
                "explanation": "La formación desarrolla capacidades, adapta a cambios tecnológicos, mejora productividad, motiva y facilita promoción interna."
              }
      ]
    }
  ]
}
