import type { Subject } from './types'

export const businessES: Subject = {
  id: 'economia-empresa',
  name: 'Economía de la empresa',
  topics: [
    { id: 'empresa-entorno', title: 'La empresa y su entorno', questions: [
      { id: 'empresa-entorno-q1', tier: 'standard', prompt: 'La empresa interactúa con su entorno y está sometida a factores macroeconómicos y tecnológicos.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El entorno externo influye en las decisiones empresariales.' },
      { id: 'empresa-entorno-q2', tier: 'standard', prompt: '¿Qué se entiende por entorno de la empresa?', options: [
        { id: 'a', label: 'Solo el mercado en el que vende productos.', isCorrect: false },
        { id: 'b', label: 'El conjunto de factores internos de la empresa.', isCorrect: false },
        { id: 'c', label: 'El conjunto de factores externos y factores internos que rodean a la empresa y pueden influir en su funcionamiento.', isCorrect: true },
        { id: 'd', label: 'Las normas legales que regulan su contabilidad.', isCorrect: false },
      ], explanation: 'Incluye factores externos (económicos, legales, sociales, tecnológicos) y condicionantes internos.' },
      { id: 'empresa-entorno-q3', tier: 'standard', prompt: '¿Cuál es la función principal de la empresa en una economía de mercado?', options: [
        { id: 'a', label: 'Producir bienes y servicios para satisfacer las necesidades de la sociedad.', isCorrect: true },
        { id: 'b', label: 'Maximizar siempre el beneficio a corto plazo.', isCorrect: false },
        { id: 'c', label: 'Controlar todos los recursos del mercado.', isCorrect: false },
        { id: 'd', label: 'Declarar pérdidas para evadir impuestos.', isCorrect: false },
      ], explanation: 'La empresa transforma factores de producción en bienes y servicios que satisfacen necesidades.' },
      { id: 'empresa-entorno-q4', tier: 'standard', prompt: 'Entre los siguientes, ¿cuál es un factor externo al que la empresa debe adaptar su estrategia?', options: [
        { id: 'a', label: 'La competencia', isCorrect: true },
        { id: 'b', label: 'La cultura organizativa interna', isCorrect: false },
        { id: 'c', label: 'La estructura de costes fijos', isCorrect: false },
        { id: 'd', label: 'La tecnología propia', isCorrect: false },
      ], explanation: 'La competencia es un factor externo que condiciona decisiones estratégicas.' },
    ] },
    { id: 'concepto-funciones', title: 'Concepto de empresa y funciones', questions: [
      { id: 'empresa-concepto-q1', tier: 'standard', prompt: 'El objetivo central de la empresa es generar valor para sus propietarios y partes interesadas.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La creación de valor reside en aportar beneficios a diversos actores.' },
      { id: 'empresa-concepto-q2', tier: 'standard', prompt: 'La empresa se define como una organización orientada a obtener beneficios y satisfacer necesidades mediante la producción y comercialización de bienes o servicios.', options: [
        { id: 'a', label: 'Una entidad que solo produce sin vender.', isCorrect: false },
        { id: 'b', label: 'Una entidad orientada a obtener beneficios y satisfacer necesidades mediante la producción y comercialización de bienes o servicios.', isCorrect: true },
        { id: 'c', label: 'Un ente público que no busca rentabilidad.', isCorrect: false },
        { id: 'd', label: 'Un grupo de personas que gestiona sin recursos.', isCorrect: false },
      ], explanation: 'Combina recursos y procesos para generar valor y rentabilidad.' },
      { id: 'empresa-concepto-q3', tier: 'standard', prompt: 'Dentro de las funciones de una empresa, ¿cuál de las siguientes NO corresponde a una función básica de la empresa?', options: [
        { id: 'a', label: 'Dirección y coordinación.', isCorrect: false },
        { id: 'b', label: 'Compras y ventas.', isCorrect: false },
        { id: 'c', label: 'Producción y logística.', isCorrect: false },
        { id: 'd', label: 'Gestión de contenidos personales de empleados.', isCorrect: true },
      ], explanation: 'Funciones básicas: dirección, producción, finanzas, marketing y RR. HH.' },
      { id: 'empresa-concepto-q4', tier: 'standard', prompt: '¿Qué función describe la actividad principal de la empresa al convertir inputs en outputs con valor añadido?', options: [
        { id: 'a', label: 'Gestión de recursos humanos', isCorrect: false },
        { id: 'b', label: 'Creación de valor a través de la combinación de factores de producción', isCorrect: true },
        { id: 'c', label: 'Gestión de crédito', isCorrect: false },
        { id: 'd', label: 'Auditoría interna', isCorrect: false },
      ], explanation: 'La función básica es combinar recursos para generar valor.' },
    ] },
    { id: 'tipos-empresa', title: 'Tipos de empresas según distintos criterios', questions: [
      { id: 'empresa-tipos-q1', tier: 'standard', prompt: 'Los criterios de clasificación incluyen tamaño, actividad y titularidad.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Tamaño, actividad y titularidad son criterios clásicos de clasificación.' },
      { id: 'empresa-tipos-q2', tier: 'standard', prompt: '¿Qué criterio no suele utilizarse para clasificar a las empresas?', options: [
        { id: 'a', label: 'Tamaño.', isCorrect: false },
        { id: 'b', label: 'Actividad económica.', isCorrect: false },
        { id: 'c', label: 'Forma jurídica.', isCorrect: false },
        { id: 'd', label: 'Sede social.', isCorrect: true },
      ], explanation: 'La sede es más un dato geográfico que un criterio tipológico.' },
      { id: 'empresa-tipos-q3', tier: 'standard', prompt: 'Según criterios, ¿qué distingue a una empresa de propiedad pública frente a una privada?', options: [
        { id: 'a', label: 'Su tamaño', isCorrect: false },
        { id: 'b', label: 'La forma jurídica', isCorrect: false },
        { id: 'c', label: 'La propiedad del capital', isCorrect: true },
        { id: 'd', label: 'La ubicación geográfica', isCorrect: false },
      ], explanation: 'La propiedad del capital (pública vs. privada) es el criterio principal.' },
    ] },
    { id: 'rsc-objetivos', title: 'Responsabilidad social corporativa y objetivos empresariales', questions: [
      { id: 'empresa-rsc-q1', tier: 'standard', prompt: 'La RSC busca equilibrar intereses de distintos grupos de interés y generar valor social.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La RSC contempla impactos sociales, ambientales y económicos.' },
      { id: 'empresa-rsc-q2', tier: 'standard', prompt: 'La responsabilidad social corporativa (RSC) se entiende como...', options: [
        { id: 'a', label: 'Únicamente donar dinero a ONGs.', isCorrect: false },
        { id: 'b', label: 'Integrar objetivos sociales y ambientales en la estrategia empresarial.', isCorrect: true },
        { id: 'c', label: 'Garantizar beneficios sin responsabilidad social.', isCorrect: false },
        { id: 'd', label: 'Cumplir solo la normativa laboral.', isCorrect: false },
      ], explanation: 'Integra impactos sociales y ambientales en decisiones y estrategia.' },
      { id: 'empresa-rsc-q3', tier: 'standard', prompt: 'El objetivo principal de la RSC es...', options: [
        { id: 'a', label: 'Maximizar beneficios a corto plazo.', isCorrect: false },
        { id: 'b', label: 'Equilibrar resultados económicos con impactos sociales y medioambientales a largo plazo.', isCorrect: true },
        { id: 'c', label: 'Evitar impuestos.', isCorrect: false },
        { id: 'd', label: 'Expandirse internacionalmente.', isCorrect: false },
      ], explanation: 'Busca sostenibilidad combinando rentabilidad con impacto social y ambiental.' },
    ] },

    { id: 'funciones-directivo', title: 'Funciones del directivo', questions: [
      { id: 'dir-func-q1', tier: 'standard', prompt: 'Las funciones del directivo incluyen planificar, organizar, dirigir y controlar.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Estas son las funciones clásicas de la dirección.' },
      { id: 'dir-func-q2', tier: 'standard', prompt: 'La toma de decisiones debe basarse en intuición absoluta sin datos.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: false },
        { id: 'b', label: 'Falso', isCorrect: true },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La toma de decisiones debe basarse en análisis y datos, no solo en intuición.' },
      { id: 'dir-func-q3', tier: 'standard', prompt: 'La delegación de autoridad debe hacerse con responsabilidad y control suficiente.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La delegación eficaz implica autonomía acompañada de responsabilidad y control.' },
    ] },
    { id: 'liderazgo-motivacion', title: 'Liderazgo, estilos de dirección y motivación', questions: [
      { id: 'dir-liderazgo-q1', tier: 'standard', prompt: "La afirmación 'En entornos de alta incertidumbre, el liderazgo democrático es el único estilo adecuado' es incorrecta.", options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La efectividad del estilo depende del contexto y de la situación.' },
      { id: 'dir-liderazgo-q2', tier: 'standard', prompt: '¿Qué estilo de liderazgo se caracteriza por alta orientación a la tarea y baja relación con la gente?', options: [
        { id: 'a', label: 'Autoritario.', isCorrect: true },
        { id: 'b', label: 'Democrático.', isCorrect: false },
        { id: 'c', label: 'Laissez-faire.', isCorrect: false },
        { id: 'd', label: 'Participativo.', isCorrect: false },
      ], explanation: 'Prioriza control y resultados con menor foco en relaciones.' },
      { id: 'dir-liderazgo-q3', tier: 'standard', prompt: 'La motivación según la jerarquía de Maslow implica que...', options: [
        { id: 'a', label: 'Las necesidades se cumplen de forma lineal.', isCorrect: false },
        { id: 'b', label: 'Las necesidades se organizan en jerarquía y al satisfacer una emergen otras superiores.', isCorrect: true },
        { id: 'c', label: 'Solo las recompensas externas motivan.', isCorrect: false },
        { id: 'd', label: 'La motivación no influye en el rendimiento.', isCorrect: false },
      ], explanation: 'Pirámide de necesidades: fisiológicas → autorrealización.' },
    ] },
    { id: 'estructuras-organizativas', title: 'Estructuras organizativas', questions: [
      { id: 'dir-estruct-q1', tier: 'standard', prompt: 'La organización formal define funciones y relaciones de autoridad y se expresa en el organigrama.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El organigrama representa la organización oficial y sus relaciones.' },
      { id: 'dir-estruct-q2', tier: 'standard', prompt: 'La estructura funcional agrupa por funciones; la estructura matricial combina función y producto.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La estructura matricial integra dos dimensiones organizativas.' },
      { id: 'dir-estruct-q3', tier: 'standard', prompt: '¿Qué elemento describe mejor la organización de una empresa?', options: [
        { id: 'a', label: 'Naturaleza jurídica.', isCorrect: false },
        { id: 'b', label: 'Luz de fines.', isCorrect: false },
        { id: 'c', label: 'Estructura de roles, procesos y relaciones para lograr objetivos.', isCorrect: true },
        { id: 'd', label: 'Único beneficio.', isCorrect: false },
      ], explanation: 'Distribución de funciones, recursos y relaciones para alcanzar metas.' },
      { id: 'dir-estruct-q4', tier: 'standard', prompt: 'La dirección estratégica se ocupa principalmente de…', options: [
        { id: 'a', label: 'Gestionar solo recursos humanos.', isCorrect: false },
        { id: 'b', label: 'Definir objetivos a largo plazo, asignar recursos y coordinar esfuerzos.', isCorrect: true },
        { id: 'c', label: 'Controlar únicamente la contabilidad.', isCorrect: false },
        { id: 'd', label: 'Operaciones de ventas diarias.', isCorrect: false },
      ], explanation: 'Fija rumbo, asigna recursos y coordina para objetivos a largo plazo.' },
    ] },

    { id: 'proceso-productivo', title: 'Proceso productivo y eficiencia', questions: [
      { id: 'procprod-q1', tier: 'standard', prompt: 'El tiempo de ciclo en un proceso productivo se define como el tiempo total desde el inicio hasta la salida del producto.', options: [
        { id: 'a', label: 'Tiempo de parada', isCorrect: false },
        { id: 'b', label: 'Tiempo entre entregas', isCorrect: false },
        { id: 'c', label: 'Tiempo total desde inicio hasta salida de un producto', isCorrect: true },
        { id: 'd', label: 'Tiempo de reparación', isCorrect: false },
      ], explanation: 'El tiempo de ciclo abarca el periodo completo desde el inicio de un producto hasta su salida.' },
      { id: 'procprod-q2', tier: 'standard', prompt: 'El OEE (Overall Equipment Effectiveness) se compone de disponibilidad, rendimiento y calidad.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Solo Disponibilidad', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El OEE se descompone en disponibilidad, rendimiento y calidad.' },
      { id: 'procprod-q3', tier: 'standard', prompt: 'Un cuello de botella aparece cuando la capacidad de un recurso limita la producción total.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'N/A', isCorrect: false },
      ], explanation: 'El cuello de botella es el recurso cuyo rendimiento restringe la producción global.' },
      { id: 'procprod-q4', tier: 'standard', prompt: 'La productividad multifactorial (PMF) se define como la producción dividida por una combinación ponderada de factores de entrada.', options: [
        { id: 'a', label: 'Producción / L', isCorrect: false },
        { id: 'b', label: 'Producción / (K)', isCorrect: false },
        { id: 'c', label: 'Producción / (aK + bL)', isCorrect: true },
        { id: 'd', label: 'Producción / CT', isCorrect: false },
      ], explanation: 'La PMF considera una combinación ponderada de factores (K, L, etc.) en el denominador.' },
      { id: 'procprod-q5', tier: 'standard', prompt: 'La eficiencia técnica se alcanza cuando se produce con el menor consumo de insumos para una cantidad dada.', options: [
        { id: 'a', label: 'Mayor coste', isCorrect: false },
        { id: 'b', label: 'Menor consumo de insumos', isCorrect: true },
        { id: 'c', label: 'Menor coste total', isCorrect: false },
        { id: 'd', label: 'Mayor coste fijo', isCorrect: false },
      ], explanation: 'La eficiencia técnica busca minimizar la cantidad de insumos para una producción dada.' },
    ] },
    { id: 'productividad-costes-umbral', title: 'Productividad, costes y umbral de rentabilidad', questions: [
      { id: 'pcu-q1', tier: 'standard', prompt: 'El coste fijo total (CFT) es independiente del nivel de producción en el corto plazo.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'No se puede determinar', isCorrect: false },
      ], explanation: 'Por definición, el CFT no varía con la cantidad producida.' },
      { id: 'pcu-q2', tier: 'standard', prompt: 'La curva de coste variable total (CVT) suele ser creciente a medida que aumenta la producción.', options: [
        { id: 'a', label: 'Disminuye', isCorrect: false },
        { id: 'b', label: 'Creciente', isCorrect: true },
        { id: 'c', label: 'Constante', isCorrect: false },
        { id: 'd', label: 'Decrece', isCorrect: false },
      ], explanation: 'A medida que se producen más unidades, suelen incrementarse los costos variables totales.' },
      { id: 'pcu-q3', tier: 'standard', prompt: 'El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales.', options: [
        { id: 'a', label: 'Ingresos > costos', isCorrect: false },
        { id: 'b', label: 'Ingresos = costos', isCorrect: true },
        { id: 'c', label: 'Costos fijos = costos variables', isCorrect: false },
        { id: 'd', label: 'Producción máxima', isCorrect: false },
      ], explanation: 'En ese punto, beneficio es cero y la empresa cubre todos sus costos.' },
      { id: 'pcu-q4', tier: 'standard', prompt: 'Con economías de escala, al aumentar la producción, el coste medio tiende a disminuir.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Nunca', isCorrect: false },
      ], explanation: 'Las economías de escala implican que el coste medio disminuye al aumentar la producción.' },
      { id: 'pcu-q5', tier: 'standard', prompt: 'El coste marginal (CM) se calcula como ΔCT/ΔQ.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El CM es el incremento del coste total al producir una unidad adicional.' },
      { id: 'pcu-q6', tier: 'standard', prompt: 'El coste fijo medio cae a medida que se incrementa la cantidad producida.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'CFMe = CFT / Q; al subir Q, este cociente tiende a disminuir.' },
      { id: 'pcu-q7', tier: 'standard', prompt: 'El punto de equilibrio es la cantidad en la que los ingresos totales cubren los costos totales.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Ingresos Totales = Costos Totales en el punto de equilibrio.' },
      { id: 'pcu-q8', tier: 'standard', prompt: 'Para maximizar beneficios, la empresa debe producir hasta que el ingreso marginal (IM) sea igual al coste marginal (CM).', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'En general, el óptimo de beneficio ocurre cuando IM = CM.' },
      { id: 'pcu-q9', tier: 'standard', prompt: 'La productividad total de factores (PTF) se define como la producción dividida por una combinación ponderada de insumos: Q / (aK + bL).', options: [
        { id: 'a', label: 'Q / L', isCorrect: false },
        { id: 'b', label: 'Q / K', isCorrect: false },
        { id: 'c', label: 'Q / (aK + bL)', isCorrect: true },
        { id: 'd', label: 'Q', isCorrect: false },
      ], explanation: 'La PTF utiliza una función de insumos ponderada para medir la eficiencia global.' },
    ] },

    { id: 'concepto-marketing', title: 'Concepto de marketing', questions: [
      { id: 'mkt-q1', tier: 'standard', prompt: 'El marketing es un proceso social y humano orientado a satisfacer necesidades y deseos mediante intercambio.', options: [
        { id: 'a', label: 'Es una actividad de ventas exclusivamente', isCorrect: false },
        { id: 'b', label: 'Es solo logística', isCorrect: false },
        { id: 'c', label: 'Proceso social y humano orientado a satisfacer necesidades y deseos mediante intercambio', isCorrect: true },
        { id: 'd', label: 'Solo publicidad', isCorrect: false },
      ], explanation: 'El marketing se centra en comprender y satisfacer necesidades mediante intercambio.' },
    ] },
    { id: 'investigacion-mercados', title: 'Investigación de mercados', questions: [
      { id: 'mkt-research-q1', tier: 'standard', prompt: 'Investigación de mercados: objetivo principal es conocer las preferencias de los consumidores.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Nunca', isCorrect: false },
      ], explanation: 'Conocer preferencias permite orientar productos y estrategias.' },
      { id: 'mkt-research-q2', tier: 'standard', prompt: '¿Qué técnica de investigación de mercados proporciona datos numéricos y generalizables?', options: [
        { id: 'a', label: 'focus group', isCorrect: false },
        { id: 'b', label: 'encuesta', isCorrect: true },
        { id: 'c', label: 'observación', isCorrect: false },
        { id: 'd', label: 'entrevista en profundidad', isCorrect: false },
      ], explanation: 'Las encuestas permiten muestrear poblaciones y generalizar resultados.' },
      { id: 'mkt-research-q3', tier: 'standard', prompt: "La 'muestra representativa' es...", options: [
        { id: 'a', label: 'una parte de la población que refleja sus características', isCorrect: true },
        { id: 'b', label: 'un segmento de mercado irrelevante', isCorrect: false },
        { id: 'c', label: 'un informe de ventas', isCorrect: false },
        { id: 'd', label: 'un estudio de costes', isCorrect: false },
      ], explanation: 'Una muestra representativa mantiene las características de la población objetivo.' },
    ] },
    { id: 'marketing-estrategias-ppdc', title: 'Estrategias de producto, precio, distribución y comunicación', questions: [
      { id: 'mkt-ppdc-q1', tier: 'standard', prompt: 'Las 4P del marketing son Producto, Precio, Plaza (Distribución) y Promoción.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Las 4P clásicas son Producto, Precio, Plaza y Promoción.' },
      { id: 'mkt-ppdc-q2', tier: 'standard', prompt: 'La segmentación de mercado implica dividir el mercado en grupos homogéneos.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La segmentación agrupa a clientes con características similares para dirigir estrategias.' },
      { id: 'mkt-ppdc-q3', tier: 'standard', prompt: 'El posicionamiento de marca se refiere al lugar que ocupa la marca en la mente del consumidor respecto a la competencia.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El posicionamiento busca diferenciar la marca en la percepción del público.' },
      { id: 'mkt-ppdc-q4', tier: 'standard', prompt: 'El branding se enfoca en la gestión de la marca y su valor estratégico para la empresa.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El branding construye y mantiene el valor de la marca a lo largo del tiempo.' },
      { id: 'mkt-ppdc-q5', tier: 'standard', prompt: 'Para un producto nuevo al entrar en un mercado competitivo, una estrategia de precio adecuada es...', options: [
        { id: 'a', label: 'Precio de penetración', isCorrect: true },
        { id: 'b', label: 'Precio premium', isCorrect: false },
        { id: 'c', label: 'Precio de lujo', isCorrect: false },
        { id: 'd', label: 'Precio único', isCorrect: false },
      ], explanation: 'El precio de penetración facilita la entrada ganando cuota de mercado.' },
      { id: 'mkt-ppdc-q6', tier: 'standard', prompt: '¿Qué canal de distribución implica venta directa al consumidor sin intermediarios?', options: [
        { id: 'a', label: 'Canal directo', isCorrect: true },
        { id: 'b', label: 'Canal indirecto', isCorrect: false },
        { id: 'c', label: 'Canal mixto', isCorrect: false },
        { id: 'd', label: 'Vía minorista', isCorrect: false },
      ], explanation: 'El canal directo evita intermediarios y llega directamente al cliente.' },
      { id: 'mkt-ppdc-q7', tier: 'standard', prompt: 'La función de la comunicación integrada de marketing comprende...', options: [
        { id: 'a', label: 'Publicidad, relaciones públicas y promoción de ventas', isCorrect: true },
        { id: 'b', label: 'Sólo publicidad', isCorrect: false },
        { id: 'c', label: 'Gestión de costes', isCorrect: false },
        { id: 'd', label: 'Negociación con proveedores', isCorrect: false },
      ], explanation: 'La mezcla de comunicación incluye publicidad, RR.PP. y promoción para apoyar el marketing.' },
    ] },

    { id: 'seleccion-formacion', title: 'Selección y formación de personal', questions: [
      { id: 'rrhh-sf-q1', tier: 'standard', prompt: 'Selección y formación de personal: el proceso suele incluir reclutamiento, preselección, entrevistas y contratación.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La selección suele seguir un proceso estructurado para identificar candidatos adecuados.' },
      { id: 'rrhh-sf-q2', tier: 'standard', prompt: 'La formación de personal puede ser tanto inicial como continua a lo largo de la carrera profesional.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La formación inicial y la capacitación continua fortalecen competencias.' },
    ] },
    { id: 'motivacion-incentivos-rrll', title: 'Motivación, incentivos y relaciones laborales', questions: [
      { id: 'rrhh-motiv-q1', tier: 'standard', prompt: 'La evaluación del desempeño puede basarse en criterios de objetivos (MBO) y en evaluaciones de 360 grados.', options: [
        { id: 'a', label: 'Solo MBO', isCorrect: false },
        { id: 'b', label: 'Solo 360', isCorrect: false },
        { id: 'c', label: 'Ambos', isCorrect: true },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Técnicas diversas permiten valorar rendimiento y desarrollo del empleado.' },
      { id: 'rrhh-motiv-q2', tier: 'standard', prompt: 'La teoría de Herzberg distingue entre factores higiénicos y motivadores; los primeros evitan la insatisfacción y los segundos motivan.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La clasificación propone dos tipos de factores para motivar o evitar insatisfacción.' },
      { id: 'rrhh-motiv-q3', tier: 'standard', prompt: 'La teoría de la Equidad, en motivación, sostiene que la motivación depende de...', options: [
        { id: 'a', label: 'La jerarquía de necesidades', isCorrect: false },
        { id: 'b', label: 'La equidad percibida entre inputs y outputs', isCorrect: true },
        { id: 'c', label: 'La satisfacción de higiene', isCorrect: false },
        { id: 'd', label: 'La motivación intrínseca', isCorrect: false },
      ], explanation: 'La percepción de equidad influye en la motivación en función de la comparación entre esfuerzos y recompensas.' },
      { id: 'rrhh-motiv-q4', tier: 'standard', prompt: 'Un incentivo no monetario que puede aumentar la motivación es...', options: [
        { id: 'a', label: 'aumento de salario', isCorrect: false },
        { id: 'b', label: 'reconocimiento y reconocimiento público', isCorrect: true },
        { id: 'c', label: 'bono por ventas', isCorrect: false },
        { id: 'd', label: 'participación en utilidades', isCorrect: false },
      ], explanation: 'El reconocimiento puede elevar la motivación sin necesidad de coste directo.' },
    ] },

    { id: 'fuentes-financiacion', title: 'Fuentes de financiación internas y externas', questions: [
      { id: 'fin-fuentes-q1', tier: 'standard', prompt: 'Fuentes de financiación internas y externas: internas como beneficios retenidos.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Los beneficios retenidos se clasifican entre las fuentes internas.' },
      { id: 'fin-fuentes-q2', tier: 'standard', prompt: 'La deuda suele ser más barata que el capital propio si su coste es menor que el coste de oportunidad de los accionistas.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La deuda puede ser más barata gracias a beneficios fiscales y menor costo de oportunidad.' },
      { id: 'fin-fuentes-q3', tier: 'standard', prompt: '¿Qué opción describe una financiación externa a través de instituciones financieras?', options: [
        { id: 'a', label: 'Autofinanciación', isCorrect: false },
        { id: 'b', label: 'Crédito bancario', isCorrect: true },
        { id: 'c', label: 'Reinversión de beneficios', isCorrect: false },
        { id: 'd', label: 'Amortización', isCorrect: false },
      ], explanation: 'El crédito bancario es una fuente externa de financiación.' },
    ] },
    { id: 'analisis-inversiones', title: 'Análisis de inversiones: VAN, TIR y plazo de recuperación', questions: [
      { id: 'inv-analisis-q1', tier: 'standard', prompt: 'La fórmula del VAN es: VAN = ∑ F_t/(1+i)^t − I_0.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'VAN = valor presente de flujos de caja descontados menos la inversión inicial.' },
      { id: 'inv-analisis-q2', tier: 'standard', prompt: 'La TIR es la tasa de descuento que hace que VAN sea igual a cero.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La TIR es la tasa que iguala los flujos descontados a la inversión inicial.' },
      { id: 'inv-analisis-q3', tier: 'standard', prompt: 'La afirmación "La TIR se obtiene por métodos de interpolación ya que no tiene solución cerrada" es correcta.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'En la mayoría de casos, se recurre a métodos numéricos para estimar la TIR.' },
      { id: 'inv-analisis-q4', tier: 'standard', prompt: 'Para decidir entre dos proyectos, conviene elegir aquel que tenga VAN mayor.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Un VAN mayor indica mayor valor presente neto esperado.' },
      { id: 'inv-analisis-q5', tier: 'standard', prompt: 'El plazo de recuperación no tiene en cuenta el valor del dinero en el tiempo.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Este método no aplica descuento de flujos; sólo acumula flujos positivos hasta recuperar la inversión.' },
    ] },
    { id: 'plan-financiacion', title: 'Plan de financiación y autofinanciación', questions: [
      { id: 'plan-fin-q1', tier: 'standard', prompt: 'La autofinanciación ofrece mayor control y menor coste de financiación que la financiación externa.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La autofinanciación evita costos de emisión y dilución de control.' },
      { id: 'plan-fin-q2', tier: 'standard', prompt: 'Un plan de financiación describe…', options: [
        { id: 'a', label: 'Cómo se obtiene liquidez y cómo se asignan recursos en el periodo.', isCorrect: true },
        { id: 'b', label: 'Solo la distribución de dividendos.', isCorrect: false },
        { id: 'c', label: 'La estrategia de marketing.', isCorrect: false },
        { id: 'd', label: 'La estructura de costes de producción.', isCorrect: false },
      ], explanation: 'Incluye necesidades de liquidez, fuentes y calendarización.' },
    ] },

    { id: 'contabilidad-concepto', title: 'Concepto y objetivos de la contabilidad', questions: [] },
    { id: 'contabilidad-concepto', title: 'Concepto y objetivos de la contabilidad', questions: [
      { id: 'cont-concepto-q1', tier: 'standard', prompt: 'La contabilidad tiene como objetivo principal informar sobre...', options: [
        { id: 'a', label: 'La cantidad de ventas', isCorrect: false },
        { id: 'b', label: 'La situación patrimonial y los resultados de la empresa', isCorrect: true },
        { id: 'c', label: 'La ocupación de personal', isCorrect: false },
        { id: 'd', label: 'La calidad de los productos', isCorrect: false },
      ], explanation: 'La contabilidad recoge la situación económica y los resultados para la toma de decisiones.' },
    ] },
    { id: 'masas-patrimoniales', title: 'Masas patrimoniales: activo, pasivo y patrimonio neto', questions: [
      { id: 'cont-masas-q1', tier: 'standard', prompt: 'El balance de situación refleja el activo, el pasivo y el patrimonio neto.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'El balance presenta la situación financiera en un momento dado.' },
      { id: 'cont-masas-q2', tier: 'standard', prompt: 'La ecuación fundamental del balance es Activo = Pasivo + Patrimonio Neto.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Activo debe ser igual a la suma de pasivo y patrimonio neto.' },
    ] },
    { id: 'pyg-balance', title: 'Cuenta de pérdidas y ganancias y balance de situación', questions: [
      { id: 'cont-pyg-q1', tier: 'standard', prompt: 'La cuenta de pérdidas y ganancias muestra ingresos y gastos de un periodo.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Este estado refleja la rentabilidad de un periodo concreto.' },
    ] },
    { id: 'ratios', title: 'Ratios económicos y financieros', questions: [
      { id: 'cont-ratios-q1', tier: 'standard', prompt: 'La liquidez corriente se calcula como activo circulante / pasivo circulante.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'La liquidez corriente mide capacidad de cubrir obligaciones a corto plazo.' },
      { id: 'cont-ratios-q2', tier: 'standard', prompt: 'El ROE se define como beneficio neto / patrimonio neto.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'ROE = beneficio neto entre el patrimonio neto refleja rentabilidad sobre el capital propio.' },
      { id: 'cont-ratios-q3', tier: 'standard', prompt: 'El ratio de endeudamiento mide la proporción de recursos financiados por deudas frente a fondos propios.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Indica la estructura de financiamiento y apalancamiento de la empresa.' },
      { id: 'cont-ratios-q4', tier: 'standard', prompt: 'La rotación de activos mide la eficiencia de uso de los activos para generar ventas.', options: [
        { id: 'a', label: 'Verdadero', isCorrect: true },
        { id: 'b', label: 'Falso', isCorrect: false },
        { id: 'c', label: 'Depende', isCorrect: false },
        { id: 'd', label: 'Ninguno', isCorrect: false },
      ], explanation: 'Mide cuántas ventas se generan por cada unidad de activo.' },
    ] },

    { id: 'crecimiento-estrategias', title: 'Estrategias de crecimiento interno y externo', questions: [
      { id: 'crec-estrat-q1', tier: 'standard', prompt: 'Una estrategia de crecimiento interno implica...', options: [
        { id: 'a', label: 'Expansión mediante nuevas inversiones dentro de la propia empresa', isCorrect: true },
        { id: 'b', label: 'Adquisiciones de otras empresas', isCorrect: false },
        { id: 'c', label: 'Fusión con competidores', isCorrect: false },
        { id: 'd', label: 'Desinversión', isCorrect: false },
      ], explanation: 'El crecimiento interno se logra aumentando la capacidad productiva propia.' },
    ] },
    { id: 'fusiones-adquisiciones', title: 'Fusiones, adquisiciones y concentración empresarial', questions: [
      { id: 'fus-adh-q1', tier: 'standard', prompt: '¿Qué describe una adquisición horizontal?', options: [
        { id: 'a', label: 'Compra de una empresa complementaria en una cadena de suministro', isCorrect: false },
        { id: 'b', label: 'Compra de un competidor en el mismo sector', isCorrect: true },
        { id: 'c', label: 'Fusión con una empresa del mismo grupo', isCorrect: false },
        { id: 'd', label: 'Externalización de procesos', isCorrect: false },
      ], explanation: 'La adquisición horizontal implica compra de competidores directos en el mismo sector.' },
      { id: 'fus-adh-q2', tier: 'standard', prompt: 'La concentración empresarial puede consistir en...', options: [
        { id: 'a', label: 'El cierre de divisiones', isCorrect: false },
        { id: 'b', label: 'La unión de varias empresas para formar una entidad', isCorrect: true },
        { id: 'c', label: 'La venta de activos', isCorrect: false },
        { id: 'd', label: 'La descentralización de funciones', isCorrect: false },
      ], explanation: 'La concentración junta empresas para obtener mayor tamaño o poder de mercado.' },
      { id: 'fus-adh-q3', tier: 'standard', prompt: 'La concentración puede producir...', options: [
        { id: 'a', label: 'Mayor competencia', isCorrect: false },
        { id: 'b', label: 'Economías de escala y mayor poder de mercado', isCorrect: true },
        { id: 'c', label: 'Reducción de costes laborales', isCorrect: false },
        { id: 'd', label: 'Menor diversificación', isCorrect: false },
      ], explanation: 'Las fusiones pueden generar economías de escala y mayor influencia en precios.' },
    ] },
    { id: 'internacionalizacion', title: 'Internacionalización y globalización', questions: [
      { id: 'intern-q1', tier: 'standard', prompt: 'La internacionalización por exportación implica...', options: [
        { id: 'a', label: 'Producción sólo en el país de origen', isCorrect: false },
        { id: 'b', label: 'Vender en mercados extranjeros sin presencia física', isCorrect: true },
        { id: 'c', label: 'Consolidar sólo en el mercado nacional', isCorrect: false },
        { id: 'd', label: 'Subcontratar toda la producción', isCorrect: false },
      ], explanation: 'La exportación implica vender productos en otros países sin establecer mayor presencia local.' },
    ] },
  ],
}


