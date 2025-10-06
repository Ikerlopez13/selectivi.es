import type { Subject } from "./types";

export const businessES: Subject = {
  id: "economia-empresa",
  name: "Economía de la empresa",
  topics: [
    {
      id: "empresa-entorno",
      title: "La empresa y su entorno",
      questions: [
        {
          id: "bus-emp-q1",
          tier: "standard",
          prompt:
            "La empresa interactúa con su entorno y está sometida a factores macroeconómicos y tecnológicos.",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "Depende", isCorrect: false },
            { id: "d", label: "Ninguno", isCorrect: false },
          ],
          explanation:
            "El entorno externo influye en las decisiones empresariales.",
        },
        {
          id: "bus-emp-q2",
          tier: "standard",
          prompt: "¿Qué se entiende por entorno de la empresa?",
          options: [
            {
              id: "a",
              label: "Solo el mercado en el que vende productos",
              isCorrect: false,
            },
            {
              id: "b",
              label: "El conjunto de factores internos de la empresa",
              isCorrect: false,
            },
            {
              id: "c",
              label:
                "El conjunto de factores externos e internos que rodean a la empresa y pueden influir en su funcionamiento",
              isCorrect: true,
            },
            {
              id: "d",
              label: "Las normas legales que regulan su contabilidad",
              isCorrect: false,
            },
          ],
          explanation:
            "Incluye factores externos (económicos, legales, sociales, tecnológicos) y condicionantes internos.",
        },
        {
          id: "bus-emp-q3",
          tier: "standard",
          prompt:
            "El entorno general de la empresa incluye factores económicos, políticos, sociales y tecnológicos que la afectan indirectamente.",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "Depende del tipo de empresa", isCorrect: false },
            {
              id: "d",
              label: "Solo incluye factores económicos",
              isCorrect: false,
            },
          ],
          explanation:
            "El entorno general está compuesto por variables externas no controlables por la empresa.",
        },
        {
          id: "bus-emp-q4",
          tier: "standard",
          prompt: "El análisis PEST estudia los factores:",
          options: [
            {
              id: "a",
              label: "Políticos, Económicos, Sociales y Tecnológicos",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Personales, Éticos, Sociales y Territoriales",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Productivos, Estructurales y Sectoriales",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Psicológicos, Económicos y Sociales",
              isCorrect: false,
            },
          ],
          explanation:
            "El análisis PEST ayuda a identificar factores externos que afectan a la empresa.",
        },
        {
          id: "bus-emp-q5",
          tier: "standard",
          prompt:
            "El entorno específico de la empresa está formado principalmente por:",
          options: [
            {
              id: "a",
              label: "Clientes, proveedores y competidores",
              isCorrect: true,
            },
            { id: "b", label: "El clima político y social", isCorrect: false },
            { id: "c", label: "La legislación laboral", isCorrect: false },
            { id: "d", label: "Los tipos de interés", isCorrect: false },
          ],
          explanation:
            "El entorno específico afecta directamente a las operaciones y decisiones de la empresa.",
        },
        {
          id: "bus-emp-q6",
          tier: "standard",
          prompt: "La globalización ha provocado:",
          options: [
            {
              id: "a",
              label: "Mayor competencia internacional",
              isCorrect: true,
            },
            { id: "b", label: "Menor competencia local", isCorrect: false },
            {
              id: "c",
              label: "Desaparición de empresas multinacionales",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Desvinculación de los mercados",
              isCorrect: false,
            },
          ],
          explanation:
            "La apertura global incrementa la competencia en todos los sectores.",
        },
        {
          id: "bus-emp-q7",
          tier: "standard",
          prompt: "El análisis DAFO identifica:",
          options: [
            {
              id: "a",
              label: "Debilidades, Amenazas, Fortalezas y Oportunidades",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Ingresos, Costes, Beneficios y Pérdidas",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Factores internos exclusivamente",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Factores externos únicamente",
              isCorrect: false,
            },
          ],
          explanation:
            "Es una herramienta para evaluar la situación interna y externa de la empresa.",
        },
      ],
    },
    {
      id: "concepto-funciones",
      title: "Concepto de empresa y funciones",
      questions: [
        {
          id: "bus-con-q1",
          tier: "standard",
          prompt:
            "La empresa se puede definir como una unidad económica de producción que:",
          options: [
            {
              id: "a",
              label: "Solo busca maximizar beneficios",
              isCorrect: false,
            },
            {
              id: "b",
              label:
                "Combina factores productivos para crear bienes y servicios",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Únicamente distribuye productos",
              isCorrect: false,
            },
            {
              id: "d",
              label: "No asume riesgos empresariales",
              isCorrect: false,
            },
          ],
          explanation:
            "La empresa transforma factores productivos mediante un proceso organizativo para obtener bienes y servicios.",
        },
        {
          id: "bus-con-q2",
          tier: "standard",
          prompt:
            "¿Cuál de las siguientes NO es una función básica de la empresa?",
          options: [
            { id: "a", label: "Función de producción", isCorrect: false },
            { id: "b", label: "Función financiera", isCorrect: false },
            { id: "c", label: "Función legislativa", isCorrect: true },
            { id: "d", label: "Función comercial", isCorrect: false },
          ],
          explanation:
            "Las funciones básicas son producción, comercial, financiera, recursos humanos y dirección.",
        },
        {
          id: "bus-con-q3",
          tier: "standard",
          prompt: "El objetivo principal de una empresa mercantil es:",
          options: [
            { id: "a", label: "Crear empleo exclusivamente", isCorrect: false },
            {
              id: "b",
              label: "Obtener beneficios económicos",
              isCorrect: true,
            },
            { id: "c", label: "Pagar impuestos al Estado", isCorrect: false },
            {
              id: "d",
              label: "Satisfacer necesidades sin ánimo de lucro",
              isCorrect: false,
            },
          ],
          explanation:
            "Las empresas mercantiles buscan maximizar beneficios para remunerar a propietarios y garantizar su supervivencia.",
        },
        {
          id: "bus-con-q4",
          tier: "standard",
          prompt: "La función productiva de la empresa se encarga de:",
          options: [
            {
              id: "a",
              label: "Transformar los recursos en bienes o servicios",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Vender productos al cliente final",
              isCorrect: false,
            },
            { id: "c", label: "Contratar empleados", isCorrect: false },
            {
              id: "d",
              label: "Controlar los costes financieros",
              isCorrect: false,
            },
          ],
          explanation: "Convierte los inputs en outputs para generar valor.",
        },
        {
          id: "bus-con-q5",
          tier: "standard",
          prompt: "Una empresa se considera un sistema abierto porque:",
          options: [
            {
              id: "a",
              label: "Interactúa constantemente con su entorno",
              isCorrect: true,
            },
            { id: "b", label: "No depende del exterior", isCorrect: false },
            { id: "c", label: "Es autosuficiente", isCorrect: false },
            { id: "d", label: "Actúa de forma cerrada", isCorrect: false },
          ],
          explanation:
            "Recibe recursos del entorno y devuelve bienes o servicios al mercado.",
        },
        {
          id: "bus-con-q6",
          tier: "standard",
          prompt: "La función financiera de la empresa se encarga de:",
          options: [
            {
              id: "a",
              label: "Obtener y gestionar los recursos monetarios",
              isCorrect: true,
            },
            { id: "b", label: "Organizar la producción", isCorrect: false },
            { id: "c", label: "Seleccionar el personal", isCorrect: false },
            {
              id: "d",
              label: "Diseñar campañas publicitarias",
              isCorrect: false,
            },
          ],
          explanation:
            "Garantiza la disponibilidad de fondos y la rentabilidad de la empresa.",
        },
        {
          id: "bus-con-q7",
          tier: "standard",
          prompt: "Una empresa pública pertenece a:",
          options: [
            {
              id: "a",
              label: "El Estado o una administración pública",
              isCorrect: true,
            },
            { id: "b", label: "Los trabajadores", isCorrect: false },
            { id: "c", label: "Los consumidores", isCorrect: false },
            { id: "d", label: "Empresarios privados", isCorrect: false },
          ],
          explanation:
            "Las empresas públicas son propiedad de organismos estatales.",
        },
        {
          id: "bus-con-q8",
          tier: "standard",
          prompt:
            "El objetivo central de la empresa es generar valor para sus propietarios y partes interesadas.",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "Depende", isCorrect: false },
            { id: "d", label: "Ninguno", isCorrect: false },
          ],
          explanation:
            "La creación de valor reside en aportar beneficios a propietarios, empleados y sociedad.",
        },
      ],
    },
    {
      id: "tipos-empresas",
      title: "Tipos de empresas según distintos criterios",
      questions: [
        {
          id: "bus-tip-q1",
          tier: "standard",
          prompt:
            "Según su forma jurídica, una Sociedad Anónima (S.A.) se caracteriza por:",
          options: [
            {
              id: "a",
              label: "Responsabilidad ilimitada de los socios",
              isCorrect: false,
            },
            {
              id: "b",
              label:
                "Capital dividido en acciones con responsabilidad limitada",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Necesitar solo un socio mínimo",
              isCorrect: false,
            },
            { id: "d", label: "No poder cotizar en bolsa", isCorrect: false },
          ],
          explanation:
            "La S.A. divide su capital en acciones, exige 60.000€ mínimos y los socios responden con el capital aportado.",
        },
        {
          id: "bus-tip-q2",
          tier: "standard",
          prompt:
            "Una microempresa se define según su número de trabajadores como aquella que tiene:",
          options: [
            { id: "a", label: "Menos de 10 empleados", isCorrect: true },
            { id: "b", label: "Entre 10 y 50 empleados", isCorrect: false },
            { id: "c", label: "Entre 50 y 250 empleados", isCorrect: false },
            { id: "d", label: "Más de 250 empleados", isCorrect: false },
          ],
          explanation:
            "Según la UE: microempresa (<10), pequeña (10-49), mediana (50-249) y gran empresa (≥250 empleados).",
        },
        {
          id: "bus-tip-q3",
          tier: "standard",
          prompt: "La principal diferencia entre una S.A. y una S.L. es:",
          options: [
            {
              id: "a",
              label: "La S.L. tiene responsabilidad ilimitada",
              isCorrect: false,
            },
            {
              id: "b",
              label: "La S.A. requiere mayor capital social mínimo",
              isCorrect: true,
            },
            {
              id: "c",
              label: "La S.L. no puede tener beneficios",
              isCorrect: false,
            },
            { id: "d", label: "La S.A. no paga impuestos", isCorrect: false },
          ],
          explanation:
            "La S.A. exige 60.000€ de capital mínimo y divide en acciones; la S.L. requiere 3.000€ y divide en participaciones.",
        },
        {
          id: "bus-tip-q4",
          tier: "standard",
          prompt:
            "Según el sector económico, una empresa que se dedica a la fabricación de automóviles pertenece al sector:",
          options: [
            { id: "a", label: "Primario", isCorrect: false },
            { id: "b", label: "Secundario", isCorrect: true },
            { id: "c", label: "Terciario", isCorrect: false },
            { id: "d", label: "Cuaternario", isCorrect: false },
          ],
          explanation:
            "El sector secundario agrupa las actividades industriales y de transformación.",
        },
      ],
    },
    {
      id: "crecimiento-desarrollo",
      title: "Crecimiento y desarrollo de la empresa",
      questions: [
        {
          id: "bus-crec-q1",
          tier: "standard",
          prompt:
            "¿Cuál es un beneficio clave de las alianzas estratégicas entre empresas?",
          options: [
            {
              id: "a",
              label: "Acceder a sinergias y recursos complementarios",
              isCorrect: true,
            },
            { id: "b", label: "Aumentar costes", isCorrect: false },
            { id: "c", label: "Disminuir la competencia", isCorrect: false },
            { id: "d", label: "No hay efectos", isCorrect: false },
          ],
          explanation:
            "Las alianzas permiten compartir recursos, capacidades y riesgo para acelerar el crecimiento.",
        },
        {
          id: "bus-crec-q2",
          tier: "standard",
          prompt: "¿Qué se entiende por concentración horizontal?",
          options: [
            {
              id: "a",
              label:
                "Unión de empresas del mismo sector para aumentar cuota de mercado",
              isCorrect: true,
            },
            { id: "b", label: "Compra de proveedores", isCorrect: false },
            {
              id: "c",
              label: "Colaboración en investigación",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Fusión con competidores de otro sector",
              isCorrect: false,
            },
          ],
          explanation:
            "La concentración horizontal implica fusionarse o adquirir competidores del mismo sector para ganar tamaño.",
        },
      ],
    },
    {
      id: "rsc-objetivos",
      title: "Responsabilidad social corporativa y objetivos empresariales",
      questions: [
        {
          id: "bus-rsc-q1",
          tier: "standard",
          prompt: "La Responsabilidad Social Corporativa (RSC) implica:",
          options: [
            {
              id: "a",
              label: "Solo cumplir la legislación vigente",
              isCorrect: false,
            },
            {
              id: "b",
              label:
                "Integrar voluntariamente preocupaciones sociales y medioambientales",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Maximizar beneficios sin considerar el entorno",
              isCorrect: false,
            },
            { id: "d", label: "Reducir costes laborales", isCorrect: false },
          ],
          explanation:
            "La RSC incorpora aspectos sociales, ambientales y éticos más allá de las obligaciones legales.",
        },
        {
          id: "bus-rsc-q2",
          tier: "standard",
          prompt:
            "Los stakeholders o grupos de interés de una empresa incluyen:",
          options: [
            { id: "a", label: "Solo los accionistas", isCorrect: false },
            {
              id: "b",
              label:
                "Accionistas, empleados, clientes, proveedores y comunidad",
              isCorrect: true,
            },
            { id: "c", label: "Únicamente los directivos", isCorrect: false },
            { id: "d", label: "Solo el gobierno", isCorrect: false },
          ],
          explanation:
            "Los stakeholders son todos los grupos afectados por la actividad empresarial.",
        },
        {
          id: "bus-rsc-q3",
          tier: "standard",
          prompt: "El balance social de una empresa mide:",
          options: [
            {
              id: "a",
              label: "Solo los beneficios económicos",
              isCorrect: false,
            },
            {
              id: "b",
              label: "El impacto social y medioambiental de su actividad",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Únicamente las pérdidas contables",
              isCorrect: false,
            },
            { id: "d", label: "La cotización en bolsa", isCorrect: false },
          ],
          explanation:
            "El balance social evalúa el comportamiento ético, social y medioambiental de la empresa.",
        },
      ],
    },
    {
      id: "funciones-directivo",
      title: "Funciones del directivo",
      questions: [
        {
          id: "bus-dir-q1",
          tier: "standard",
          prompt: "Según Fayol, las funciones directivas son:",
          options: [
            {
              id: "a",
              label: "Planificar, organizar, dirigir, coordinar y controlar",
              isCorrect: true,
            },
            { id: "b", label: "Solo producir y vender", isCorrect: false },
            {
              id: "c",
              label: "Únicamente contratar personal",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Maximizar beneficios exclusivamente",
              isCorrect: false,
            },
          ],
          explanation:
            "Henri Fayol estableció cinco funciones administrativas que conforman el proceso directivo clásico.",
        },
        {
          id: "bus-dir-q2",
          tier: "standard",
          prompt: "La función de control consiste en:",
          options: [
            {
              id: "a",
              label: "Establecer objetivos futuros",
              isCorrect: false,
            },
            {
              id: "b",
              label:
                "Comparar resultados con objetivos y corregir desviaciones",
              isCorrect: true,
            },
            { id: "c", label: "Contratar nuevo personal", isCorrect: false },
            {
              id: "d",
              label: "Dividir el trabajo en tareas",
              isCorrect: false,
            },
          ],
          explanation:
            "El control verifica el cumplimiento de objetivos y establece medidas correctoras.",
        },
        {
          id: "bus-dir-q3",
          tier: "standard",
          prompt: "La planificación estratégica se caracteriza por:",
          options: [
            {
              id: "a",
              label: "Ser a corto plazo y operativa",
              isCorrect: false,
            },
            {
              id: "b",
              label: "Ser a largo plazo y definir objetivos generales",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Centrarse solo en tareas diarias",
              isCorrect: false,
            },
            {
              id: "d",
              label: "No involucrar a la alta dirección",
              isCorrect: false,
            },
          ],
          explanation:
            "La planificación estratégica define misión, visión y metas a largo plazo (3-5 años).",
        },
      ],
    },
    {
      id: "liderazgo-motivacion",
      title: "Liderazgo, estilos de dirección y motivación",
      questions: [
        {
          id: "bus-lid-q1",
          tier: "standard",
          prompt: "El estilo de liderazgo autocrático se caracteriza por:",
          options: [
            {
              id: "a",
              label: "Tomar decisiones de forma centralizada sin consultar",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Permitir total libertad a los empleados",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Consultar siempre todas las decisiones",
              isCorrect: false,
            },
            { id: "d", label: "No tomar ninguna decisión", isCorrect: false },
          ],
          explanation:
            "El líder autocrático concentra poder y controla estrechamente el trabajo.",
        },
        {
          id: "bus-lid-q2",
          tier: "standard",
          prompt:
            "Según Maslow, el orden correcto de necesidades (de base a cúspide) es:",
          options: [
            {
              id: "a",
              label:
                "Fisiológicas, seguridad, sociales, estima, autorrealización",
              isCorrect: true,
            },
            {
              id: "b",
              label:
                "Sociales, seguridad, fisiológicas, estima, autorrealización",
              isCorrect: false,
            },
            {
              id: "c",
              label:
                "Autorrealización, estima, sociales, seguridad, fisiológicas",
              isCorrect: false,
            },
            {
              id: "d",
              label:
                "Seguridad, fisiológicas, estima, sociales, autorrealización",
              isCorrect: false,
            },
          ],
          explanation:
            "La pirámide de Maslow establece cinco niveles jerárquicos de necesidades.",
        },
        {
          id: "bus-lid-q3",
          tier: "standard",
          prompt: "Según la Teoría X e Y de McGregor, la Teoría X asume que:",
          options: [
            {
              id: "a",
              label: "Los trabajadores son responsables y buscan autonomía",
              isCorrect: false,
            },
            {
              id: "b",
              label: "Los empleados evitan el trabajo y necesitan control",
              isCorrect: true,
            },
            {
              id: "c",
              label: "La motivación intrínseca es suficiente",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Los trabajadores no necesitan supervisión",
              isCorrect: false,
            },
          ],
          explanation:
            "La Teoría X mantiene una visión pesimista del trabajador y exige supervisión estricta.",
        },
        {
          id: "bus-lid-q4",
          tier: "standard",
          prompt: "La teoría bifactorial de Herzberg distingue entre:",
          options: [
            {
              id: "a",
              label: "Factores higiénicos y factores motivadores",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Necesidades primarias y secundarias",
              isCorrect: false,
            },
            { id: "c", label: "Teoría X y Teoría Y", isCorrect: false },
            {
              id: "d",
              label: "Liderazgo autocrático y democrático",
              isCorrect: false,
            },
          ],
          explanation:
            "Los factores higiénicos evitan la insatisfacción; los motivadores generan satisfacción.",
        },
      ],
    },
    {
      id: "estructuras-organizativas",
      title: "Estructuras organizativas",
      questions: [
        {
          id: "bus-org-q1",
          tier: "standard",
          prompt: "En una estructura organizativa lineal o jerárquica:",
          options: [
            {
              id: "a",
              label: "Cada empleado tiene varios jefes",
              isCorrect: false,
            },
            {
              id: "b",
              label:
                "La autoridad fluye de arriba hacia abajo con unidad de mando",
              isCorrect: true,
            },
            {
              id: "c",
              label: "No existe jerarquía definida",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Se organizan equipos temporales por proyectos",
              isCorrect: false,
            },
          ],
          explanation:
            "La estructura lineal respeta el principio de unidad de mando con jerarquía definida.",
        },
        {
          id: "bus-org-q2",
          tier: "standard",
          prompt: "La estructura matricial combina:",
          options: [
            {
              id: "a",
              label: "Criterios funcionales y por proyectos",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Solo departamentos funcionales",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Únicamente líneas de productos",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Una estructura totalmente horizontal",
              isCorrect: false,
            },
          ],
          explanation:
            "La organización matricial otorga doble dependencia: jefe funcional y director de proyecto.",
        },
        {
          id: "bus-org-q3",
          tier: "standard",
          prompt: "El organigrama de una empresa representa:",
          options: [
            {
              id: "a",
              label: "Solo los beneficios económicos",
              isCorrect: false,
            },
            {
              id: "b",
              label: "La estructura formal de autoridad y comunicación",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Únicamente el personal directivo",
              isCorrect: false,
            },
            { id: "d", label: "Los productos que fabrica", isCorrect: false },
          ],
          explanation:
            "El organigrama muestra jerarquía, departamentos y relaciones de autoridad.",
        },
      ],
    },
    {
      id: "produccion-costes",
      title: "Productividad, costes y umbral de rentabilidad",
      questions: [
        {
          id: "bus-prod-q1",
          tier: "standard",
          prompt: "La productividad se define como:",
          options: [
            {
              id: "a",
              label:
                "La cantidad de producto obtenida por unidad de factor empleado",
              isCorrect: true,
            },
            {
              id: "b",
              label: "El coste total de producción",
              isCorrect: false,
            },
            {
              id: "c",
              label: "El precio de venta del producto",
              isCorrect: false,
            },
            { id: "d", label: "El número de trabajadores", isCorrect: false },
          ],
          explanation:
            "La productividad mide la eficiencia al relacionar producción con los factores utilizados.",
        },
        {
          id: "bus-prod-q2",
          tier: "standard",
          prompt: "Los costes fijos son aquellos que:",
          options: [
            {
              id: "a",
              label: "Varían con el nivel de producción",
              isCorrect: false,
            },
            {
              id: "b",
              label: "No varían aunque cambie la producción",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Solo incluyen materias primas",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Desaparecen si no se produce",
              isCorrect: false,
            },
          ],
          explanation:
            "Los costes fijos se mantienen constantes independientemente del volumen producido.",
        },
        {
          id: "bus-prod-q3",
          tier: "standard",
          prompt: "El umbral de rentabilidad o punto muerto se alcanza cuando:",
          options: [
            {
              id: "a",
              label: "Los ingresos totales igualan a los costes totales",
              isCorrect: true,
            },
            { id: "b", label: "Los beneficios son máximos", isCorrect: false },
            { id: "c", label: "No hay costes variables", isCorrect: false },
            { id: "d", label: "La producción es cero", isCorrect: false },
          ],
          explanation:
            "En el punto muerto se cubren todos los costes y la empresa ni gana ni pierde.",
        },
        {
          id: "bus-prod-q4",
          tier: "standard",
          prompt:
            "Si los costes fijos son 10.000€, el coste variable unitario 5€ y el precio de venta 15€, el umbral de rentabilidad en unidades es:",
          options: [
            { id: "a", label: "500 unidades", isCorrect: false },
            { id: "b", label: "1.000 unidades", isCorrect: true },
            { id: "c", label: "2.000 unidades", isCorrect: false },
            { id: "d", label: "667 unidades", isCorrect: false },
          ],
          explanation:
            "Qₚₘ = CF / (P - CVᵤ) = 10.000 / (15 - 5) = 1.000 unidades.",
        },
        {
          id: "bus-prod-q5",
          tier: "standard",
          prompt:
            "El coste marginal (CM) se calcula como: $$\\text{CM} = \\frac{\\Delta \\text{CT}}{\\Delta Q}$$",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "Depende", isCorrect: false },
            { id: "d", label: "Ninguno", isCorrect: false },
          ],
          explanation:
            "El CM es el incremento del coste total al producir una unidad adicional.",
        },
        {
          id: "bus-prod-q6",
          tier: "standard",
          prompt:
            "La productividad total de factores (PTF) se define como: $$\\text{PTF} = \\frac{Q}{aK + bL}$$",
          options: [
            { id: "a", label: "$Q/L$", isCorrect: false },
            { id: "b", label: "$Q/K$", isCorrect: false },
            { id: "c", label: "$Q/(aK + bL)$", isCorrect: true },
            { id: "d", label: "$Q$", isCorrect: false },
          ],
          explanation:
            "La PTF utiliza ponderaciones de capital y trabajo para medir la eficiencia global.",
        },
      ],
    },
    {
      id: "marketing",
      title: "Marketing y estrategias comerciales",
      questions: [
        {
          id: "bus-mkt-q1",
          tier: "standard",
          prompt: "El marketing busca:",
          options: [
            {
              id: "a",
              label:
                "Satisfacer las necesidades del consumidor mediante intercambios rentables",
              isCorrect: true,
            },
            { id: "b", label: "Aumentar los precios", isCorrect: false },
            {
              id: "c",
              label: "Reducir el gasto en publicidad",
              isCorrect: false,
            },
            { id: "d", label: "Maximizar la producción", isCorrect: false },
          ],
          explanation:
            "El marketing se centra en crear valor para el cliente y la empresa.",
        },
        {
          id: "bus-mkt-q2",
          tier: "standard",
          prompt: "El estudio del mercado permite:",
          options: [
            {
              id: "a",
              label: "Conocer las preferencias y hábitos del consumidor",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Reducir los costes laborales",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Aumentar la deuda financiera",
              isCorrect: false,
            },
            { id: "d", label: "Evitar la competencia", isCorrect: false },
          ],
          explanation:
            "Permite adaptar productos y estrategias a las necesidades del público objetivo.",
        },
        {
          id: "bus-mkt-q3",
          tier: "standard",
          prompt: "El precio psicológico se basa en:",
          options: [
            { id: "a", label: "La percepción del consumidor", isCorrect: true },
            { id: "b", label: "El coste de producción", isCorrect: false },
            {
              id: "c",
              label: "El margen de beneficio contable",
              isCorrect: false,
            },
            { id: "d", label: "Los impuestos indirectos", isCorrect: false },
          ],
          explanation:
            "Ajusta el precio a la valoración subjetiva del cliente.",
        },
        {
          id: "bus-mkt-q4",
          tier: "standard",
          prompt: "La estrategia de diferenciación consiste en:",
          options: [
            {
              id: "a",
              label: "Ofrecer un producto con características únicas",
              isCorrect: true,
            },
            { id: "b", label: "Competir solo por precio", isCorrect: false },
            { id: "c", label: "Reducir la calidad", isCorrect: false },
            {
              id: "d",
              label: "Aumentar la producción sin control",
              isCorrect: false,
            },
          ],
          explanation:
            "Diferenciar el producto crea una ventaja competitiva sostenible.",
        },
        {
          id: "bus-mkt-q5",
          tier: "standard",
          prompt: "El canal de distribución directa implica:",
          options: [
            {
              id: "a",
              label: "Que el fabricante vende directamente al consumidor",
              isCorrect: true,
            },
            {
              id: "b",
              label: "La participación de mayoristas",
              isCorrect: false,
            },
            {
              id: "c",
              label: "Una cadena de intermediarios",
              isCorrect: false,
            },
            { id: "d", label: "Un mercado financiero", isCorrect: false },
          ],
          explanation:
            "Elimina intermediarios y acerca el producto al cliente final.",
        },
        {
          id: "bus-mkt-q6",
          tier: "standard",
          prompt: "El marketing-mix o mezcla comercial está compuesto por:",
          options: [
            {
              id: "a",
              label: "Producto, precio, distribución y comunicación (4P)",
              isCorrect: true,
            },
            { id: "b", label: "Solo publicidad", isCorrect: false },
            { id: "c", label: "Únicamente el precio", isCorrect: false },
            { id: "d", label: "Producción y finanzas", isCorrect: false },
          ],
          explanation:
            "Las 4P clásicas son producto, precio, plaza (distribución) y promoción.",
        },
        {
          id: "bus-mkt-q7",
          tier: "standard",
          prompt: "La segmentación de mercado consiste en:",
          options: [
            {
              id: "a",
              label: "Vender al mercado total sin diferenciación",
              isCorrect: false,
            },
            {
              id: "b",
              label: "Dividir el mercado en grupos homogéneos de consumidores",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Fijar el precio más alto posible",
              isCorrect: false,
            },
            {
              id: "d",
              label: "Producir un solo tipo de producto",
              isCorrect: false,
            },
          ],
          explanation:
            "Permite crear estrategias específicas para cada segmento con necesidades similares.",
        },
        {
          id: "bus-mkt-q8",
          tier: "standard",
          prompt: "Una estrategia de penetración de mercado implica:",
          options: [
            {
              id: "a",
              label: "Fijar precios bajos para ganar cuota rápidamente",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Establecer precios muy altos inicialmente",
              isCorrect: false,
            },
            {
              id: "c",
              label: "No considerar la competencia",
              isCorrect: false,
            },
            { id: "d", label: "Abandonar el mercado", isCorrect: false },
          ],
          explanation:
            "La penetración busca captar mercado con precios atractivos.",
        },
        {
          id: "bus-mkt-q9",
          tier: "standard",
          prompt: "El ciclo de vida del producto tiene las siguientes fases:",
          options: [
            {
              id: "a",
              label: "Introducción, crecimiento, madurez y declive",
              isCorrect: true,
            },
            { id: "b", label: "Solo introducción y declive", isCorrect: false },
            { id: "c", label: "Producción y venta", isCorrect: false },
            { id: "d", label: "Inicio y fin", isCorrect: false },
          ],
          explanation:
            "El ciclo de vida incluye lanzamiento, expansión, madurez y decadencia.",
        },
        {
          id: "bus-mkt-q10",
          tier: "standard",
          prompt: "La investigación de mercados tiene como objetivo:",
          options: [
            {
              id: "a",
              label:
                "Recopilar información sobre consumidores, competencia y entorno",
              isCorrect: true,
            },
            { id: "b", label: "Solo fijar precios", isCorrect: false },
            {
              id: "c",
              label: "Únicamente diseñar productos",
              isCorrect: false,
            },
            { id: "d", label: "Contratar personal", isCorrect: false },
          ],
          explanation:
            "Recoge y analiza información para apoyar la toma de decisiones comerciales.",
        },
        {
          id: "bus-mkt-q11",
          tier: "standard",
          prompt: "La distribución intensiva se caracteriza por:",
          options: [
            {
              id: "a",
              label: "Distribuir en pocos puntos de venta selectos",
              isCorrect: false,
            },
            {
              id: "b",
              label: "Usar el mayor número posible de establecimientos",
              isCorrect: true,
            },
            {
              id: "c",
              label: "Vender solo en tienda propia",
              isCorrect: false,
            },
            { id: "d", label: "No utilizar intermediarios", isCorrect: false },
          ],
          explanation:
            "La cobertura amplia es clave para productos de consumo frecuente.",
        },
        {
          id: "bus-mkt-q12",
          tier: "standard",
          prompt: "La marca es importante porque:",
          options: [
            {
              id: "a",
              label: "Identifica y diferencia el producto de la competencia",
              isCorrect: true,
            },
            {
              id: "b",
              label: "Solo sirve para la publicidad",
              isCorrect: false,
            },
            {
              id: "c",
              label: "No influye en la decisión de compra",
              isCorrect: false,
            },
            { id: "d", label: "Únicamente aumenta costes", isCorrect: false },
          ],
          explanation:
            "La marca aporta valor, fideliza clientes y crea ventaja competitiva.",
        },
        {
          id: "bus-mkt-q13",
          tier: "standard",
          prompt: "La elasticidad-precio de la demanda mide:",
          options: [
            {
              id: "a",
              label:
                "La variación porcentual de la cantidad demandada ante cambios en el precio",
              isCorrect: true,
            },
            { id: "b", label: "Solo el precio máximo", isCorrect: false },
            { id: "c", label: "El coste de producción", isCorrect: false },
            { id: "d", label: "La publicidad necesaria", isCorrect: false },
          ],
          explanation:
            "Eₚ = (ΔQ/Q) / (ΔP/P); si |Eₚ| > 1 la demanda es elástica, si |Eₚ| < 1 es inelástica.",
        },
      ],
    },
    {
      id: "financiacion",
      title: "Financiación e inversión",
      questions: [
        {
          id: "bus-fin-q1",
          tier: "standard",
          prompt:
            "El Valor Actual Neto (VAN) se calcula con la fórmula: $$\\text{VAN} = \\sum_{t=1}^n \\frac{F_t}{(1+i)^t} - I_0$$",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "N/A", isCorrect: false },
            { id: "d", label: "N/A", isCorrect: false },
          ],
          explanation:
            "El VAN descuenta los flujos futuros al coste del capital y resta la inversión inicial.",
        },
        {
          id: "bus-fin-q2",
          tier: "standard",
          prompt:
            "La TIR es la tasa de descuento que hace que el VAN sea cero: $$\\sum_{t=1}^n \\frac{F_t}{(1+\\text{TIR})^t} - I_0 = 0$$",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "N/A", isCorrect: false },
            { id: "d", label: "N/A", isCorrect: false },
          ],
          explanation:
            "La TIR representa la rentabilidad implícita del proyecto de inversión.",
        },
      ],
    },
    {
      id: "contabilidad",
      title: "Contabilidad y análisis económico-financiero",
      questions: [
        {
          id: "bus-cont-q1",
          tier: "standard",
          prompt:
            "El ROE (Return on Equity) se calcula como: $$\\text{ROE} = \\frac{\\text{Beneficio Neto}}{\\text{Patrimonio Neto}}$$",
          options: [
            { id: "a", label: "Verdadero", isCorrect: true },
            { id: "b", label: "Falso", isCorrect: false },
            { id: "c", label: "Depende", isCorrect: false },
            { id: "d", label: "N/A", isCorrect: false },
          ],
          explanation:
            "El ROE mide la rentabilidad obtenida por los accionistas sobre sus fondos propios.",
        },
      ],
    },
    {
      id: "recursos-humanos",
      title: "Recursos humanos",
      questions: [
        {
          id: "bus-rrhh-q1",
          tier: "standard",
          prompt: "El proceso de selección de personal comienza con:",
          options: [
            { id: "a", label: "La entrevista final", isCorrect: false },
            {
              id: "b",
              label: "El reclutamiento y la definición del perfil del puesto",
              isCorrect: true,
            },
            { id: "c", label: "La firma del contrato", isCorrect: false },
            { id: "d", label: "La evaluación del desempeño", isCorrect: false },
          ],
          explanation:
            "Primero se define el puesto, luego se atraen candidatos y se selecciona al más adecuado.",
        },
        {
          id: "bus-rrhh-q2",
          tier: "standard",
          prompt: "La formación continua del personal tiene como objetivo:",
          options: [
            {
              id: "a",
              label: "Actualizar conocimientos y mejorar competencias",
              isCorrect: true,
            },
            { id: "b", label: "Reducir salarios", isCorrect: false },
            { id: "c", label: "Despedir trabajadores", isCorrect: false },
            { id: "d", label: "Solo cumplir la ley", isCorrect: false },
          ],
          explanation:
            "La formación desarrolla capacidades, motiva y facilita la adaptación a cambios tecnológicos.",
        },
      ],
    },
  ],
};
