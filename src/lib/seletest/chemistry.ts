import type { Subject } from './types'

export const chemistryES: Subject = {
  id: 'quimica',
  name: 'Química',
  topics: [
    {
      id: 'estructura-atomica',
      title: 'Estructura atómica y tabla periódica',
      questions: [
        {
          id: 'quim-atom-q1',
          tier: 'standard',
          prompt: '¿Cuál es la configuración electrónica del átomo de calcio en su estado fundamental, expresada en notación abreviada? $[Ar]\\,4s^2$',
          options: [
            { id: 'a', label: '[Ar] 4s^2', isCorrect: true },
            { id: 'b', label: '[Ar] 3d^10 4s^2', isCorrect: false },
            { id: 'c', label: '[Ne] 3s^2 3p^6', isCorrect: false },
            { id: 'd', label: '[Kr] 4d^10 5s^2', isCorrect: false },
          ],
          explanation: 'El calcio (Z=20) tiene configuración [Ar] 4s^2 en su estado fundamental.'
        },
        {
          id: 'quim-atom-q2',
          tier: 'premium',
          prompt: '¿La configuración electrónica del anión fluoruro F⁻, en su estado fundamental, puede escribirse como $[$He$]\\,2s^2 2p^6$?',
          options: [
            { id: 'a', label: '[He] 2s^2 2p^5', isCorrect: false },
            { id: 'b', label: '[He] 2s^2 2p^6', isCorrect: true },
            { id: 'c', label: '[Ne] 2s^2 2p^5', isCorrect: false },
            { id: 'd', label: '[Ne] 3s^2 3p^6', isCorrect: false },
          ],
          explanation: 'F⁻ tiene 10 electrones con configuración neutra de He más 2s^2 2p^6.'
        },
        {
          id: 'quim-atom-q3',
          tier: 'premium',
          prompt: 'Entre Na y Cl, ¿cuál tiene mayor radio atómico?',
          options: [
            { id: 'a', label: 'Na', isCorrect: true },
            { id: 'b', label: 'Cl', isCorrect: false },
            { id: 'c', label: 'Ambos iguales', isCorrect: false },
            { id: 'd', label: 'Depende del estado de oxidación', isCorrect: false },
          ],
          explanation: 'En un periodo el radio disminuye de izquierda a derecha; Na (grupo 1) tiene mayor radio que Cl (grupo 17).'
        }
      ]
    },
    {
      id: 'enlace-quimico',
      title: 'Enlace químico y fuerzas intermoleculares',
      questions: [
        {
          id: 'quim-enl-q1',
          tier: 'standard',
          prompt: '¿Qué tipo de enlace predomina entre Na y Cl en NaCl?',
          options: [
            { id: 'a', label: 'Covalente', isCorrect: false },
            { id: 'b', label: 'Iónico', isCorrect: true },
            { id: 'c', label: 'Metálico', isCorrect: false },
            { id: 'd', label: 'Dativo', isCorrect: false },
          ],
          explanation: 'NaCl es una sal iónica formada por transferencia de electrones entre metal y no metal.'
        },
        {
          id: 'quim-enl-q2',
          tier: 'premium',
          prompt: '¿Qué geometría tiene la molécula CO₂?',
          options: [
            { id: 'a', label: 'Angular', isCorrect: false },
            { id: 'b', label: 'Lineal', isCorrect: true },
            { id: 'c', label: 'Tetraédrica', isCorrect: false },
            { id: 'd', label: 'Pirámidal', isCorrect: false },
          ],
          explanation: 'CO₂ es lineal debido a dos pares de enlaces en 180° con el átomo central C.'
        },
        {
          id: 'quim-enl-q3',
          tier: 'premium',
          prompt: '¿Cuál de estas moléculas es polar?',
          options: [
            { id: 'a', label: 'CO₂', isCorrect: false },
            { id: 'b', label: 'Cl₂', isCorrect: false },
            { id: 'c', label: 'H₂O', isCorrect: true },
            { id: 'd', label: 'N₂', isCorrect: false },
          ],
          explanation: 'H₂O tiene un momento dipolar neto debido a la geometría angular y diferencias de electronegatividad.'
        }
      ]
    },
    {
      id: 'termodinamica',
      title: 'Termodinámica y gases',
      questions: [
        {
          id: 'quim-term-q1',
          tier: 'standard',
          prompt: 'Para un gas ideal, la ecuación $PV = nRT$ se mantiene. Si n y V son constantes y se aumenta la temperatura, la presión...',
          options: [
            { id: 'a', label: 'Aumenta', isCorrect: true },
            { id: 'b', label: 'Disminuye', isCorrect: false },
            { id: 'c', label: 'Permanece constante', isCorrect: false },
            { id: 'd', label: 'No se puede determinar', isCorrect: false },
          ],
          explanation: 'Con n y V fijos, P es directamente proporcional a T por la ecuación de estado de un gas ideal.'
        },
        {
          id: 'quim-term-q2',
          tier: 'premium',
          prompt: 'La entalpía de fusión de una sustancia es...',
          options: [
            { id: 'a', label: 'Endotérmica', isCorrect: true },
            { id: 'b', label: 'Exotérmica', isCorrect: false },
            { id: 'c', label: 'Nula', isCorrect: false },
            { id: 'd', label: 'Indeterminada', isCorrect: false },
          ],
          explanation: 'La fusión requiere absorción de calor, por lo que es endotérmica.'
        }
      ]
    },
    {
      id: 'disoluciones',
      title: 'Disoluciones y propiedades coligativas',
      questions: [
        {
          id: 'quim-dis-q1',
          tier: 'standard',
          prompt: 'La molaridad de una disolución es $M = \\frac{n}{V}$; si se disuelven $2\\ \\text{mol}$ en $0.5\\ \\text{L}$, la molaridad es...',
          options: [
            { id: 'a', label: '0.25 M', isCorrect: false },
            { id: 'b', label: '1 M', isCorrect: false },
            { id: 'c', label: '2 M', isCorrect: false },
            { id: 'd', label: '4 M', isCorrect: true },
          ],
          explanation: 'M = n/V = 2 mol / 0.5 L = 4 M.'
        },
        {
          id: 'quim-dis-q2',
          tier: 'premium',
          prompt: 'La molalidad se define como $m = \\frac{n_{soluto}}{m\\,\\text{solvente}}$ y se expresa en...',
          options: [
            { id: 'a', label: 'M', isCorrect: false },
            { id: 'b', label: 'mol/L', isCorrect: false },
            { id: 'c', label: 'mol/kg', isCorrect: true },
            { id: 'd', label: 'g/L', isCorrect: false },
          ],
          explanation: 'La molalidad está definida por moles de soluto por kilogramo de disolvente.'
        }
      ]
    },
    {
      id: 'cinetica-equilibrio',
      title: 'Cinética y equilibrio químico',
      questions: [
        {
          id: 'quim-cin-q1',
          tier: 'standard',
          prompt: 'La constante de equilibrio en una reacción reversible es $K_c = \\dfrac{[productos]^\\nu}{[reactantes]^\\nu}$; ¿qué indica un valor muy grande de $K_c$?',
          options: [
            { id: 'a', label: 'La reacción se desplaza hacia los reactantes', isCorrect: false },
            { id: 'b', label: 'La concentracion de productos es mucho mayor que la de reactantes en equilibrio', isCorrect: true },
            { id: 'c', label: 'La reacción no alcanza el equilibrio', isCorrect: false },
            { id: 'd', label: 'La temperatura es extremadamente alta', isCorrect: false },
          ],
          explanation: 'Un $K_c$ grande indica una mayor concentración de productos en equilibrio.'
        },
        {
          id: 'quim-cin-q2',
          tier: 'premium',
          prompt: 'La relación entre $K_p$ y $K_c$ para una reacción gaseosa es $K_p = K_c (RT)^{\\Delta n}$; ¿qué representa $\\Delta n$?',
          options: [
            { id: 'a', label: 'Cambio en el número de moles de gas entre productos y reactantes', isCorrect: true },
            { id: 'b', label: 'Cambio de entropía', isCorrect: false },
            { id: 'c', label: 'Energía de activación', isCorrect: false },
            { id: 'd', label: 'Cambió de volumen', isCorrect: false },
          ],
          explanation: 'La relación entre constantes de equilibrio en fase gaseosa depende del cambio en el número de moles de gas.'
        }
      ]
    },
    {
      id: 'acido-base',
      title: 'Ácido-base',
      questions: [
        {
          id: 'quim-acid-q1',
          tier: 'standard',
          prompt: 'El pH describe la concentración de iones hidrógeno en una solución; el pOH está relacionado por...',
          options: [
            { id: 'a', label: 'pH + pOH = 14 a 25 °C', isCorrect: true },
            { id: 'b', label: 'pH + pOH = 0', isCorrect: false },
            { id: 'c', label: 'pH = pOH', isCorrect: false },
            { id: 'd', label: 'pH = 7', isCorrect: false },
          ],
          explanation: 'A 25 °C, la suma de pH y pOH es aproximadamente 14.'
        },
        {
          id: 'quim-acid-q2',
          tier: 'premium',
          prompt: 'Una disolución tampón se caracteriza por su capacidad para resistir cambios de pH cuando se añade...',
          options: [
            { id: 'a', label: 'Ácido fuerte', isCorrect: false },
            { id: 'b', label: 'Base fuerte', isCorrect: false },
            { id: 'c', label: 'Ácido débil o base conjugada', isCorrect: true },
            { id: 'd', label: 'Sales neutras', isCorrect: false },
          ],
          explanation: 'Los tampóns contienen un ácido débil y su base conjugada o una base débil y su ácido conjugado.'
        }
      ]
    },
    {
      id: 'redox',
      title: 'Oxidación-reducción',
      questions: [
        {
          id: 'quim-redox-q1',
          tier: 'standard',
          prompt: 'Las reacciones de oxidación-reducción implican:',
          options: [
            { id: 'a', label: 'Solo transferencia de protones', isCorrect: false },
            { id: 'b', label: 'Transferencia de electrones', isCorrect: true },
            { id: 'c', label: 'Cambios de color sin transferencia de electrones', isCorrect: false },
            { id: 'd', label: 'Formación de enlaces iónicos', isCorrect: false },
          ],
          explanation: 'Las reacciones redox implican transferencia de electrones entre especies.'
        },
        {
          id: 'quim-redox-q2',
          tier: 'premium',
          prompt: 'En una pila galvánica, el potencial de electrodo estándar se refiere a...',
          options: [
            { id: 'a', label: 'La energía liberada al disolver la pila', isCorrect: false },
            { id: 'b', label: 'La tendencia de una semi-reacción a ocurrir en condiciones estándar', isCorrect: true },
            { id: 'c', label: 'La presión de la solución', isCorrect: false },
            { id: 'd', label: 'La temperatura de operación', isCorrect: false },
          ],
          explanation: 'El potencial de electrodo estándar describe la disponibilidad de una semi-reacción en condiciones estándar.'
        }
      ]
    },
    {
      id: 'organica',
      title: 'Química orgánica',
      questions: [
        {
          id: 'quim-org-q1',
          tier: 'standard',
          prompt: 'Grupo funcionales: alcano, alqueno y alquino se diferencian principalmente por...',
          options: [
            { id: 'a', label: 'El tipo de enlaces (simples, dobles, triples)', isCorrect: true },
            { id: 'b', label: 'La presencia de heteroátomos', isCorrect: false },
            { id: 'c', label: 'La densidad de las moléculas', isCorrect: false },
            { id: 'd', label: 'La saturación de anillos', isCorrect: false },
          ],
          explanation: 'Alcano (enlaces simples), alqueno (dobles) y alquino (triples) difieren en el grado de saturación de enlaces.'
        },
        {
          id: 'quim-org-q2',
          tier: 'premium',
          prompt: 'La reacción de esterificación entre un ácido carboxílico y un alcohol produce un éster y...',
          options: [
            { id: 'a', label: 'Agua', isCorrect: true },
            { id: 'b', label: 'Sal neutra', isCorrect: false },
            { id: 'c', label: 'Hidrógeno molecular', isCorrect: false },
            { id: 'd', label: 'CO₂', isCorrect: false },
          ],
          explanation: 'La esterificación genera éster y agua en una reacción de deshidratación.'
        },
          {
            "id": "quim-atom-q1",
            "tier": "premium",
            "prompt": "¿Cuál de los siguientes elementos tiene mayor energía de ionización?",
            "options": [
              { "id": "a", "label": "Na", "isCorrect": false },
              { "id": "b", "label": "Mg", "isCorrect": false },
              { "id": "c", "label": "Al", "isCorrect": false },
              { "id": "d", "label": "Ne", "isCorrect": true }
            ],
            "explanation": "El Ne tiene configuración electrónica completa (gas noble), por lo que requiere mucha más energía para arrancar un electrón que los elementos metálicos del mismo período."
          },
          {
            "id": "quim-atom-q2",
            "tier": "premium",
            "prompt": "La configuración electrónica del ion $\\text{O}^{2-}$ en su estado fundamental es:",
            "options": [
              { "id": "a", "label": "[He] $2s^2$ $2p^4$", "isCorrect": false },
              { "id": "b", "label": "[He] $2s^2$ $2p^6$", "isCorrect": true },
              { "id": "c", "label": "[Ne] $3s^2$", "isCorrect": false },
              { "id": "d", "label": "[He] $2s^2$ $2p^5$", "isCorrect": false }
            ],
            "explanation": "El oxígeno neutro tiene 8 electrones. Al ganar 2 electrones forma O²⁻ con 10 electrones, igual que el Ne: [He] 2s² 2p⁶."
          },
          {
            "id": "quim-atom-q3",
            "tier": "premium",
            "prompt": "¿Qué propiedad periódica disminuye al avanzar de izquierda a derecha en un período?",
            "options": [
              { "id": "a", "label": "Electronegatividad", "isCorrect": false },
              { "id": "b", "label": "Afinidad electrónica", "isCorrect": false },
              { "id": "c", "label": "Radio atómico", "isCorrect": true },
              { "id": "d", "label": "Energía de ionización", "isCorrect": false }
            ],
            "explanation": "Al aumentar la carga nuclear efectiva en un período, los electrones son atraídos más fuertemente, reduciendo el radio atómico."
          },
          {
            "id": "quim-atom-q4",
            "tier": "premium",
            "prompt": "Un elemento con configuración electrónica [Ar] $3d^{10}$ $4s^2$ $4p^5$ pertenece al grupo:",
            "options": [
              { "id": "a", "label": "15", "isCorrect": false },
              { "id": "b", "label": "16", "isCorrect": false },
              { "id": "c", "label": "17", "isCorrect": true },
              { "id": "d", "label": "18", "isCorrect": false }
            ],
            "explanation": "Los elementos con 7 electrones de valencia (s²p⁵) pertenecen al grupo 17, los halógenos."
          },
          {
            "id": "quim-atom-q5",
            "tier": "premium",
            "prompt": "¿Cuál de las siguientes especies tiene el mayor radio iónico?",
            "options": [
              { "id": "a", "label": "$\\text{F}^-$", "isCorrect": false },
              { "id": "b", "label": "$\\text{Na}^+$", "isCorrect": false },
              { "id": "c", "label": "$\\text{Cl}^-$", "isCorrect": true },
              { "id": "d", "label": "$\\text{Mg}^{2+}$", "isCorrect": false }
            ],
            "explanation": "Cl⁻ tiene más capas electrónicas que F⁻, y los aniones son mayores que los cationes. Na⁺ y Mg²⁺ son cationes pequeños."
          },
          {
            "id": "quim-atom-q6",
            "tier": "premium",
            "prompt": "El número de electrones desapareados en el átomo de $\\text{Cr}$ (Z=24) en su estado fundamental es:",
            "options": [
              { "id": "a", "label": "2", "isCorrect": false },
              { "id": "b", "label": "4", "isCorrect": false },
              { "id": "c", "label": "5", "isCorrect": false },
              { "id": "d", "label": "6", "isCorrect": true }
            ],
            "explanation": "El Cr tiene configuración [Ar] 3d⁵ 4s¹ (excepción), con los 5 electrones d desapareados más 1 electrón s, total 6 electrones desapareados."
          },
          {
            "id": "quim-enl-q1",
            "tier": "premium",
            "prompt": "El compuesto $\\text{MgO}$ presenta principalmente enlace:",
            "options": [
              { "id": "a", "label": "Covalente polar", "isCorrect": false },
              { "id": "b", "label": "Iónico", "isCorrect": true },
              { "id": "c", "label": "Metálico", "isCorrect": false },
              { "id": "d", "label": "Covalente apolar", "isCorrect": false }
            ],
            "explanation": "El MgO se forma entre un metal (Mg) y un no metal (O) con gran diferencia de electronegatividad, formando un enlace iónico."
          },
          {
            "id": "quim-enl-q2",
            "tier": "premium",
            "prompt": "La geometría molecular del $\\text{NH}_3$ según la teoría VSEPR es:",
            "options": [
              { "id": "a", "label": "Tetraédrica", "isCorrect": false },
              { "id": "b", "label": "Trigonal plana", "isCorrect": false },
              { "id": "c", "label": "Pirámide trigonal", "isCorrect": true },
              { "id": "d", "label": "Angular", "isCorrect": false }
            ],
            "explanation": "El NH₃ tiene 3 enlaces y 1 par solitario, con geometría de pirámide trigonal (hibridación sp³ con un vértice ocupado por el par libre)."
          },
          {
            "id": "quim-enl-q3",
            "tier": "premium",
            "prompt": "¿Cuál de las siguientes moléculas es apolar?",
            "options": [
              { "id": "a", "label": "$\\text{H}_2\\text{O}$", "isCorrect": false },
              { "id": "b", "label": "$\\text{NH}_3$", "isCorrect": false },
              { "id": "c", "label": "$\\text{CH}_4$", "isCorrect": true },
              { "id": "d", "label": "$\\text{HCl}$", "isCorrect": false }
            ],
            "explanation": "El CH₄ tiene geometría tetraédrica perfecta y enlaces C-H con baja diferencia de electronegatividad que se anulan vectorialmente."
          },
          {
            "id": "quim-enl-q4",
            "tier": "premium",
            "prompt": "Las fuerzas intermoleculares más intensas en el $\\text{H}_2\\text{O}$ líquida son:",
            "options": [
              { "id": "a", "label": "Fuerzas de London", "isCorrect": false },
              { "id": "b", "label": "Dipolo-dipolo", "isCorrect": false },
              { "id": "c", "label": "Puentes de hidrógeno", "isCorrect": true },
              { "id": "d", "label": "Iónicas", "isCorrect": false }
            ],
            "explanation": "El H₂O forma puentes de hidrógeno (H unido a O, N o F), las fuerzas intermoleculares más intensas entre moléculas covalentes."
          },
          {
            "id": "quim-enl-q5",
            "tier": "premium",
            "prompt": "El tipo de hibridación del carbono en el $\\text{CO}_2$ es:",
            "options": [
              { "id": "a", "label": "$sp$", "isCorrect": true },
              { "id": "b", "label": "$sp^2$", "isCorrect": false },
              { "id": "c", "label": "$sp^3$", "isCorrect": false },
              { "id": "d", "label": "$sp^3d$", "isCorrect": false }
            ],
            "explanation": "El CO₂ es lineal (O=C=O) con dos dobles enlaces, correspondiendo a hibridación sp del carbono central."
          },
          {
            "id": "quim-enl-q6",
            "tier": "premium",
            "prompt": "¿Cuál de las siguientes sustancias presenta el punto de ebullición más elevado?",
            "options": [
              { "id": "a", "label": "$\\text{CH}_4$", "isCorrect": false },
              { "id": "b", "label": "$\\text{C}_2\\text{H}_6$", "isCorrect": false },
              { "id": "c", "label": "$\\text{C}_3\\text{H}_8$", "isCorrect": false },
              { "id": "d", "label": "$\\text{C}_4\\text{H}_{10}$", "isCorrect": true }
            ],
            "explanation": "A mayor masa molecular en alcanos, mayores fuerzas de London, por lo que el butano (C₄H₁₀) tiene mayor punto de ebullición."
          },
          {
            "id": "quim-gas-q1",
            "tier": "premium",
            "prompt": "Según la ecuación de los gases ideales $PV = nRT$, si duplicamos la presión y la temperatura absoluta de un gas ideal manteniendo constante el volumen, la cantidad de sustancia:",
            "options": [
              { "id": "a", "label": "Se duplica", "isCorrect": true },
              { "id": "b", "label": "Se reduce a la mitad", "isCorrect": false },
              { "id": "c", "label": "Se cuadruplica", "isCorrect": false },
              { "id": "d", "label": "Permanece constante", "isCorrect": false }
            ],
            "explanation": "De PV = nRT, si P y T se duplican y V es constante: 2P·V = n'·R·2T, entonces n' = 2n."
          },
          {
            "id": "quim-gas-q2",
            "tier": "premium",
            "prompt": "En condiciones normales (0°C y 1 atm), el volumen molar de un gas ideal es aproximadamente:",
            "options": [
              { "id": "a", "label": "11,2 L", "isCorrect": false },
              { "id": "b", "label": "22,4 L", "isCorrect": true },
              { "id": "c", "label": "44,8 L", "isCorrect": false },
              { "id": "d", "label": "5,6 L", "isCorrect": false }
            ],
            "explanation": "En condiciones normales (CN), 1 mol de gas ideal ocupa 22,4 L, valor obtenido de PV = nRT con P=1 atm y T=273 K."
          },
          {
            "id": "quim-dis-q1",
            "tier": "premium",
            "prompt": "Una disolución contiene 20 g de $\\text{NaCl}$ (M=58,5 g/mol) en 500 mL de disolución. Su molaridad es:",
            "options": [
              { "id": "a", "label": "0,34 M", "isCorrect": false },
              { "id": "b", "label": "0,68 M", "isCorrect": true },
              { "id": "c", "label": "1,36 M", "isCorrect": false },
              { "id": "d", "label": "2,72 M", "isCorrect": false }
            ],
            "explanation": "Molaridad = moles/L = (20/58,5)/0,5 = 0,342/0,5 = 0,68 M."
          },
          {
            "id": "quim-dis-q2",
            "tier": "premium",
            "prompt": "Una propiedad coligativa de las disoluciones es:",
            "options": [
              { "id": "a", "label": "La densidad", "isCorrect": false },
              { "id": "b", "label": "La viscosidad", "isCorrect": false },
              { "id": "c", "label": "El descenso crioscópico", "isCorrect": true },
              { "id": "d", "label": "La conductividad eléctrica", "isCorrect": false }
            ],
            "explanation": "El descenso crioscópico (disminución del punto de congelación) depende del número de partículas de soluto, no de su naturaleza."
          },
          {
            "id": "quim-dis-q3",
            "tier": "premium",
            "prompt": "La molalidad de una disolución expresa:",
            "options": [
              { "id": "a", "label": "Moles de soluto por litro de disolución", "isCorrect": false },
              { "id": "b", "label": "Gramos de soluto por 100 g de disolución", "isCorrect": false },
              { "id": "c", "label": "Moles de soluto por kilogramo de disolvente", "isCorrect": true },
              { "id": "d", "label": "Moles de soluto por moles totales", "isCorrect": false }
            ],
            "explanation": "La molalidad (m) = moles de soluto / kg de disolvente puro, a diferencia de la molaridad que usa volumen de disolución."
          },
          {
            "id": "quim-dis-q4",
            "tier": "premium",
            "prompt": "Al disolver un soluto no volátil en un disolvente puro, el punto de ebullición de la disolución:",
            "options": [
              { "id": "a", "label": "Disminuye", "isCorrect": false },
              { "id": "b", "label": "Aumenta", "isCorrect": true },
              { "id": "c", "label": "No varía", "isCorrect": false },
              { "id": "d", "label": "Puede aumentar o disminuir", "isCorrect": false }
            ],
            "explanation": "El ascenso ebulloscópico es una propiedad coligativa: la presencia de soluto aumenta el punto de ebullición del disolvente."
          },
          {
            "id": "quim-term-q1",
            "tier": "premium",
            "prompt": "En una reacción exotérmica, el signo de $\\Delta H$ es:",
            "options": [
              { "id": "a", "label": "Positivo", "isCorrect": false },
              { "id": "b", "label": "Negativo", "isCorrect": true },
              { "id": "c", "label": "Cero", "isCorrect": false },
              { "id": "d", "label": "Puede ser positivo o negativo", "isCorrect": false }
            ],
            "explanation": "En reacciones exotérmicas se libera calor al entorno, por lo que ΔH < 0 (negativo)."
          },
          {
            "id": "quim-term-q2",
            "tier": "premium",
            "prompt": "La ley de Hess establece que:",
            "options": [
              { "id": "a", "label": "La entalpía es una función de estado", "isCorrect": true },
              { "id": "b", "label": "Todas las reacciones son exotérmicas", "isCorrect": false },
              { "id": "c", "label": "La entropía siempre aumenta", "isCorrect": false },
              { "id": "d", "label": "La energía se conserva", "isCorrect": false }
            ],
            "explanation": "La ley de Hess indica que ΔH de una reacción es independiente del camino, solo depende de estados inicial y final (función de estado)."
          },
          {
            "id": "quim-term-q3",
            "tier": "premium",
            "prompt": "Dada la reacción: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$ con $\\Delta H = -92$ kJ. La formación de 34 g de $\\text{NH}_3$ (M=17 g/mol) libera:",
            "options": [
              { "id": "a", "label": "46 kJ", "isCorrect": false },
              { "id": "b", "label": "92 kJ", "isCorrect": true },
              { "id": "c", "label": "184 kJ", "isCorrect": false },
              { "id": "d", "label": "23 kJ", "isCorrect": false }
            ],
            "explanation": "34 g NH₃ = 2 moles. La reacción libera 92 kJ por 2 moles de NH₃, por lo que se liberan 92 kJ."
          },
          {
            "id": "quim-term-q4",
            "tier": "premium",
            "prompt": "Para que una reacción sea espontánea a cualquier temperatura, debe cumplirse que:",
            "options": [
              { "id": "a", "label": "$\\Delta H > 0$ y $\\Delta S < 0$", "isCorrect": false },
              { "id": "b", "label": "$\\Delta H < 0$ y $\\Delta S > 0$", "isCorrect": true },
              { "id": "c", "label": "$\\Delta H > 0$ y $\\Delta S > 0$", "isCorrect": false },
              { "id": "d", "label": "$\\Delta H < 0$ y $\\Delta S < 0$", "isCorrect": false }
            ],
            "explanation": "Según ΔG = ΔH - TΔS, si ΔH < 0 y ΔS > 0, entonces ΔG < 0 a cualquier T (reacción espontánea)."
          },
          {
            "id": "quim-cin-q1",
            "tier": "premium",
            "prompt": "La velocidad de una reacción química generalmente aumenta al:",
            "options": [
              { "id": "a", "label": "Disminuir la temperatura", "isCorrect": false },
              { "id": "b", "label": "Disminuir la concentración de reactivos", "isCorrect": false },
              { "id": "c", "label": "Aumentar la temperatura", "isCorrect": true },
              { "id": "d", "label": "Aumentar el volumen del recipiente", "isCorrect": false }
            ],
            "explanation": "Al aumentar la temperatura, aumenta la energía cinética de las moléculas y la frecuencia de choques eficaces, acelerando la reacción."
          },
          {
            "id": "quim-cin-q2",
            "tier": "premium",
            "prompt": "Un catalizador en una reacción química:",
            "options": [
              { "id": "a", "label": "Desplaza el equilibrio hacia los productos", "isCorrect": false },
              { "id": "b", "label": "Aumenta la energía de activación", "isCorrect": false },
              { "id": "c", "label": "Disminuye la energía de activación", "isCorrect": true },
              { "id": "d", "label": "Se consume durante la reacción", "isCorrect": false }
            ],
            "explanation": "El catalizador proporciona un camino alternativo con menor energía de activación, acelerando la reacción sin consumirse."
          },
          {
            "id": "quim-cin-q3",
            "tier": "premium",
            "prompt": "Para la reacción: $\\text{A} + 2\\text{B} \\rightarrow \\text{C}$, con ecuación de velocidad $v = k[\\text{A}]^2[\\text{B}]$, el orden total de la reacción es:",
            "options": [
              { "id": "a", "label": "1", "isCorrect": false },
              { "id": "b", "label": "2", "isCorrect": false },
              { "id": "c", "label": "3", "isCorrect": true },
              { "id": "d", "label": "4", "isCorrect": false }
            ],
            "explanation": "El orden total es la suma de los exponentes: 2 (de A) + 1 (de B) = 3."
          },
          {
            "id": "quim-eq-q1",
            "tier": "premium",
            "prompt": "Para la reacción en equilibrio: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, la expresión de $K_c$ es:",
            "options": [
              { "id": "a", "label": "$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$", "isCorrect": true },
              { "id": "b", "label": "$K_c = \\frac{[\\text{N}_2][\\text{H}_2]^3}{[\\text{NH}_3]^2}$", "isCorrect": false },
              { "id": "c", "label": "$K_c = \\frac{[\\text{NH}_3]}{[\\text{N}_2][\\text{H}_2]}$", "isCorrect": false },
              { "id": "d", "label": "$K_c = \\frac{2[\\text{NH}_3]}{[\\text{N}_2] + 3[\\text{H}_2]}$", "isCorrect": false }
            ],
            "explanation": "La constante de equilibrio se expresa como productos elevados a sus coeficientes dividido por reactivos elevados a sus coeficientes."
          },
          {
            "id": "quim-eq-q2",
            "tier": "premium",
            "prompt": "Según el principio de Le Châtelier, si aumentamos la presión en un sistema gaseoso en equilibrio:",
            "options": [
              { "id": "a", "label": "El equilibrio se desplaza hacia donde hay más moles de gas", "isCorrect": false },
              { "id": "b", "label": "El equilibrio se desplaza hacia donde hay menos moles de gas", "isCorrect": true },
              { "id": "c", "label": "El equilibrio no se modifica", "isCorrect": false },
              { "id": "d", "label": "La constante de equilibrio aumenta", "isCorrect": false }
            ],
            "explanation": "Al aumentar la presión, el equilibrio se desplaza hacia el lado con menos moles gaseosos para contrarrestar el cambio."
          },
          {
            "id": "quim-eq-q3",
            "tier": "premium",
            "prompt": "Si $K_c >> 1$ para una reacción en equilibrio, significa que:",
            "options": [
              { "id": "a", "label": "Predominan los reactivos", "isCorrect": false },
              { "id": "b", "label": "Predominan los productos", "isCorrect": true },
              { "id": "c", "label": "Hay igual cantidad de reactivos y productos", "isCorrect": false },
              { "id": "d", "label": "La reacción es muy lenta", "isCorrect": false }
            ],
            "explanation": "Una Kc muy grande indica que el numerador (productos) es mucho mayor que el denominador (reactivos) en equilibrio."
          },
          {
            "id": "quim-eq-q4",
            "tier": "premium",
            "prompt": "La relación entre $K_p$ y $K_c$ viene dada por la expresión:",
            "options": [
              { "id": "a", "label": "$K_p = K_c$", "isCorrect": false },
              { "id": "b", "label": "$K_p = K_c(RT)^{\\Delta n}$", "isCorrect": true },
              { "id": "c", "label": "$K_p = K_c + RT$", "isCorrect": false },
              { "id": "d", "label": "$K_p = K_c/RT$", "isCorrect": false }
            ],
            "explanation": "Donde Δn = (moles de productos gaseosos) - (moles de reactivos gaseosos). Si Δn = 0, entonces Kp = Kc."
          },
          {
            "id": "quim-acid-q1",
            "tier": "premium",
            "prompt": "El pH de una disolución acuosa con $[\\text{H}^+] = 1 \\times 10^{-5}$ M es:",
            "options": [
              { "id": "a", "label": "5", "isCorrect": true },
              { "id": "b", "label": "9", "isCorrect": false },
              { "id": "c", "label": "-5", "isCorrect": false },
              { "id": "d", "label": "14", "isCorrect": false }
            ],
            "explanation": "pH = -log[H⁺] = -log(10⁻⁵) = 5. La disolución es ácida (pH < 7)."
          },
          {
            "id": "quim-acid-q2",
            "tier": "premium",
            "prompt": "Según la teoría de Brønsted-Lowry, una base es una sustancia capaz de:",
            "options": [
              { "id": "a", "label": "Ceder electrones", "isCorrect": false },
              { "id": "b", "label": "Aceptar protones", "isCorrect": true },
              { "id": "c", "label": "Ceder protones", "isCorrect": false },
              { "id": "d", "label": "Aumentar la concentración de OH⁻", "isCorrect": false }
            ],
            "explanation": "Para Brønsted-Lowry, base es cualquier especie capaz de aceptar protones (H⁺), y ácido es el que cede protones."
          },
          {
            "id": "quim-acid-q3",
            "tier": "premium",
            "prompt": "Una disolución reguladora o tampón se caracteriza por:",
            "options": [
              { "id": "a", "label": "Tener siempre pH = 7", "isCorrect": false },
              { "id": "b", "label": "Resistir cambios de pH al añadir pequeñas cantidades de ácido o base", "isCorrect": true },
              { "id": "c", "label": "Contener solo ácidos fuertes", "isCorrect": false },
              { "id": "d", "label": "No contener sales", "isCorrect": false }
            ],
            "explanation": "Las disoluciones tampón contienen un ácido débil y su base conjugada (o viceversa), manteniendo el pH relativamente constante."
          },
          {
            "id": "quim-acid-q4",
            "tier": "premium",
            "prompt": "El producto iónico del agua a 25°C, $K_w = [\\text{H}^+][\\text{OH}^-]$, vale:",
            "options": [
              { "id": "a", "label": "$1 \\times 10^{-7}$", "isCorrect": false },
              { "id": "b", "label": "$1 \\times 10^{-14}$", "isCorrect": true },
              { "id": "c", "label": "$1 \\times 10^{-12}$", "isCorrect": false },
              { "id": "d", "label": "$7$", "isCorrect": false }
            ],
            "explanation": "A 25°C, Kw = 1×10⁻¹⁴, lo que implica que en agua pura [H⁺] = [OH⁻] = 1×10⁻⁷ M y pH = 7."
          },
          {
            "id": "quim-acid-q5",
            "tier": "premium",
            "prompt": "En una valoración ácido-base, el punto de equivalencia se alcanza cuando:",
            "options": [
              { "id": "a", "label": "El pH es siempre 7", "isCorrect": false },
              { "id": "b", "label": "Los moles de ácido igualan a los moles de base", "isCorrect": true },
              { "id": "c", "label": "La disolución se vuelve incolora", "isCorrect": false },
              { "id": "d", "label": "Se ha añadido el doble de base que de ácido", "isCorrect": false }
            ],
            "explanation": "El punto de equivalencia ocurre cuando los moles de ácido y base son estequiométricamente equivalentes, aunque el pH no sea necesariamente 7."
          },
          {
            "id": "quim-acid-q6",
            "tier": "premium",
            "prompt": "El pOH de una disolución con pH = 11 es:",
            "options": [
              { "id": "a", "label": "11", "isCorrect": false },
              { "id": "b", "label": "7", "isCorrect": false },
              { "id": "c", "label": "3", "isCorrect": true },
              { "id": "d", "label": "25", "isCorrect": false }
            ],
            "explanation": "pH + pOH = 14 (a 25°C), por lo tanto pOH = 14 - 11 = 3."
          },
            {
              "id": "quim-atom-s1",
              "tier": "standard",
              "prompt": "¿Cuál es el número de protones en un átomo de $\\text{Cl}$ (Z=17)?",
              "options": [
                { "id": "a", "label": "17", "isCorrect": true },
                { "id": "b", "label": "18", "isCorrect": false },
                { "id": "c", "label": "35", "isCorrect": false },
                { "id": "d", "label": "52", "isCorrect": false }
              ],
              "explanation": "El número atómico (Z) indica el número de protones en el núcleo. Para el cloro, Z=17, por lo que tiene 17 protones."
            },
            {
              "id": "quim-atom-s2",
              "tier": "standard",
              "prompt": "La configuración electrónica del átomo de $\\text{Ne}$ (Z=10) es:",
              "options": [
                { "id": "a", "label": "$1s^2$ $2s^2$ $2p^4$", "isCorrect": false },
                { "id": "b", "label": "$1s^2$ $2s^2$ $2p^6$", "isCorrect": true },
                { "id": "c", "label": "$1s^2$ $2s^2$ $2p^5$", "isCorrect": false },
                { "id": "d", "label": "$1s^2$ $2s^2$ $3s^2$", "isCorrect": false }
              ],
              "explanation": "El Ne tiene 10 electrones que se distribuyen: 2 en 1s, 2 en 2s y 6 en 2p, completando su capa de valencia."
            },
            {
              "id": "quim-atom-s3",
              "tier": "standard",
              "prompt": "Los elementos del grupo 1 (alcalinos) se caracterizan por tener en su última capa:",
              "options": [
                { "id": "a", "label": "1 electrón", "isCorrect": true },
                { "id": "b", "label": "2 electrones", "isCorrect": false },
                { "id": "c", "label": "7 electrones", "isCorrect": false },
                { "id": "d", "label": "8 electrones", "isCorrect": false }
              ],
              "explanation": "Los metales alcalinos tienen configuración ns¹ (1 electrón de valencia), lo que les confiere alta reactividad."
            },
            {
              "id": "quim-atom-s4",
              "tier": "standard",
              "prompt": "¿Cuántos electrones tiene el ion $\\text{Ca}^{2+}$ (Z=20)?",
              "options": [
                { "id": "a", "label": "20", "isCorrect": false },
                { "id": "b", "label": "22", "isCorrect": false },
                { "id": "c", "label": "18", "isCorrect": true },
                { "id": "d", "label": "16", "isCorrect": false }
              ],
              "explanation": "El Ca neutro tiene 20 electrones. Al formar Ca²⁺ pierde 2 electrones, quedando con 18 electrones."
            },
            {
              "id": "quim-atom-s5",
              "tier": "standard",
              "prompt": "El radio atómico generalmente aumenta en la tabla periódica al:",
              "options": [
                { "id": "a", "label": "Avanzar en un período de izquierda a derecha", "isCorrect": false },
                { "id": "b", "label": "Descender en un grupo", "isCorrect": true },
                { "id": "c", "label": "Aumentar la electronegatividad", "isCorrect": false },
                { "id": "d", "label": "Aumentar el número de protones", "isCorrect": false }
              ],
              "explanation": "Al descender en un grupo se añaden capas electrónicas, aumentando el tamaño atómico."
            },
            {
              "id": "quim-atom-s6",
              "tier": "standard",
              "prompt": "Los gases nobles se caracterizan por:",
              "options": [
                { "id": "a", "label": "Ser muy reactivos", "isCorrect": false },
                { "id": "b", "label": "Tener alta electronegatividad", "isCorrect": false },
                { "id": "c", "label": "Tener su última capa completa", "isCorrect": true },
                { "id": "d", "label": "Formar fácilmente iones positivos", "isCorrect": false }
              ],
              "explanation": "Los gases nobles tienen 8 electrones de valencia (excepto He con 2), configuración muy estable que les confiere baja reactividad."
            },
            {
              "id": "quim-enl-s1",
              "tier": "standard",
              "prompt": "El enlace entre dos átomos de cloro en la molécula $\\text{Cl}_2$ es:",
              "options": [
                { "id": "a", "label": "Iónico", "isCorrect": false },
                { "id": "b", "label": "Covalente apolar", "isCorrect": true },
                { "id": "c", "label": "Covalente polar", "isCorrect": false },
                { "id": "d", "label": "Metálico", "isCorrect": false }
              ],
              "explanation": "Al ser átomos idénticos, la diferencia de electronegatividad es cero, formando un enlace covalente apolar."
            },
            {
              "id": "quim-enl-s2",
              "tier": "standard",
              "prompt": "¿Cuál de los siguientes compuestos es iónico?",
              "options": [
                { "id": "a", "label": "$\\text{H}_2\\text{O}$", "isCorrect": false },
                { "id": "b", "label": "$\\text{NaCl}$", "isCorrect": true },
                { "id": "c", "label": "$\\text{CO}_2$", "isCorrect": false },
                { "id": "d", "label": "$\\text{CH}_4$", "isCorrect": false }
              ],
              "explanation": "El NaCl se forma por transferencia de electrones entre Na (metal) y Cl (no metal), generando iones Na⁺ y Cl⁻."
            },
            {
              "id": "quim-enl-s3",
              "tier": "standard",
              "prompt": "La molécula de $\\text{H}_2\\text{O}$ tiene geometría:",
              "options": [
                { "id": "a", "label": "Lineal", "isCorrect": false },
                { "id": "b", "label": "Angular", "isCorrect": true },
                { "id": "c", "label": "Tetraédrica", "isCorrect": false },
                { "id": "d", "label": "Trigonal plana", "isCorrect": false }
              ],
              "explanation": "El agua tiene 2 enlaces y 2 pares solitarios en el oxígeno, adoptando geometría angular con ángulo de aproximadamente 104,5°."
            },
            {
              "id": "quim-enl-s4",
              "tier": "standard",
              "prompt": "El enlace metálico se caracteriza por:",
              "options": [
                { "id": "a", "label": "Electrones localizados entre dos átomos", "isCorrect": false },
                { "id": "b", "label": "Electrones deslocalizados", "isCorrect": true },
                { "id": "c", "label": "Transferencia completa de electrones", "isCorrect": false },
                { "id": "d", "label": "Fuerzas intermoleculares débiles", "isCorrect": false }
              ],
              "explanation": "En los metales, los electrones de valencia están deslocalizados formando un 'mar de electrones' que permite conductividad."
            },
            {
              "id": "quim-enl-s5",
              "tier": "standard",
              "prompt": "¿Cuál de las siguientes moléculas es polar?",
              "options": [
                { "id": "a", "label": "$\\text{CO}_2$", "isCorrect": false },
                { "id": "b", "label": "$\\text{HCl}$", "isCorrect": true },
                { "id": "c", "label": "$\\text{Cl}_2$", "isCorrect": false },
                { "id": "d", "label": "$\\text{CH}_4$", "isCorrect": false }
              ],
              "explanation": "HCl tiene diferente electronegatividad entre H y Cl, generando un dipolo permanente (molécula polar)."
            },
            {
              "id": "quim-enl-s6",
              "tier": "standard",
              "prompt": "Las fuerzas de London (o de dispersión) son más intensas en moléculas con:",
              "options": [
                { "id": "a", "label": "Menor masa molecular", "isCorrect": false },
                { "id": "b", "label": "Mayor masa molecular", "isCorrect": true },
                { "id": "c", "label": "Mayor polaridad", "isCorrect": false },
                { "id": "d", "label": "Presencia de puentes de hidrógeno", "isCorrect": false }
              ],
              "explanation": "Las fuerzas de London aumentan con la masa molecular debido a mayor número de electrones y mayor polarizabilidad."
            },
            {
              "id": "quim-gas-s1",
              "tier": "standard",
              "prompt": "La ecuación general de los gases ideales es:",
              "options": [
                { "id": "a", "label": "$PV = nRT$", "isCorrect": true },
                { "id": "b", "label": "$P + V = nRT$", "isCorrect": false },
                { "id": "c", "label": "$PV = mRT$", "isCorrect": false },
                { "id": "d", "label": "$P/V = nRT$", "isCorrect": false }
              ],
              "explanation": "PV = nRT relaciona presión, volumen, moles, constante de gases y temperatura absoluta en gases ideales."
            },
            {
              "id": "quim-gas-s2",
              "tier": "standard",
              "prompt": "Si la temperatura de un gas ideal se duplica manteniendo el volumen constante, la presión:",
              "options": [
                { "id": "a", "label": "Se reduce a la mitad", "isCorrect": false },
                { "id": "b", "label": "Se duplica", "isCorrect": true },
                { "id": "c", "label": "Se cuadruplica", "isCorrect": false },
                { "id": "d", "label": "No cambia", "isCorrect": false }
              ],
              "explanation": "Según la ley de Gay-Lussac, a volumen constante P/T = constante, por lo que si T se duplica, P también se duplica."
            },
            {
              "id": "quim-gas-s3",
              "tier": "standard",
              "prompt": "En la ecuación $PV = nRT$, la constante $R$ en unidades del SI vale:",
              "options": [
                { "id": "a", "label": "0,082 atm·L·mol⁻¹·K⁻¹", "isCorrect": false },
                { "id": "b", "label": "8,314 J·mol⁻¹·K⁻¹", "isCorrect": true },
                { "id": "c", "label": "1,987 cal·mol⁻¹·K⁻¹", "isCorrect": false },
                { "id": "d", "label": "62,4 mmHg·L·mol⁻¹·K⁻¹", "isCorrect": false }
              ],
              "explanation": "En el SI, R = 8,314 J·mol⁻¹·K⁻¹. También puede expresarse como 0,082 atm·L·mol⁻¹·K⁻¹ en otras unidades."
            },
            {
              "id": "quim-gas-s4",
              "tier": "standard",
              "prompt": "La ley de Boyle establece que a temperatura constante:",
              "options": [
                { "id": "a", "label": "$P \\cdot V = $ constante", "isCorrect": true },
                { "id": "b", "label": "$P / V = $ constante", "isCorrect": false },
                { "id": "c", "label": "$P + V = $ constante", "isCorrect": false },
                { "id": "d", "label": "$P - V = $ constante", "isCorrect": false }
              ],
              "explanation": "La ley de Boyle indica que la presión y el volumen son inversamente proporcionales a temperatura constante: P₁V₁ = P₂V₂."
            },
            {
              "id": "quim-dis-s1",
              "tier": "standard",
              "prompt": "La molaridad se define como:",
              "options": [
                { "id": "a", "label": "Moles de soluto por litro de disolución", "isCorrect": true },
                { "id": "b", "label": "Gramos de soluto por litro de disolución", "isCorrect": false },
                { "id": "c", "label": "Moles de soluto por kilogramo de disolvente", "isCorrect": false },
                { "id": "d", "label": "Gramos de soluto por 100 mL de disolución", "isCorrect": false }
              ],
              "explanation": "Molaridad (M) = moles de soluto / litros de disolución total. Es la concentración más utilizada en química."
            },
            {
              "id": "quim-dis-s2",
              "tier": "standard",
              "prompt": "Una disolución que contiene 10 g de $\\text{NaOH}$ (M=40 g/mol) en 250 mL tiene una molaridad de:",
              "options": [
                { "id": "a", "label": "0,5 M", "isCorrect": false },
                { "id": "b", "label": "1 M", "isCorrect": true },
                { "id": "c", "label": "2 M", "isCorrect": false },
                { "id": "d", "label": "4 M", "isCorrect": false }
              ],
              "explanation": "Moles = 10/40 = 0,25 mol. M = 0,25 mol / 0,25 L = 1 M."
            },
            {
              "id": "quim-dis-s3",
              "tier": "standard",
              "prompt": "El porcentaje en masa de una disolución se calcula como:",
              "options": [
                { "id": "a", "label": "$\\frac{\\text{masa soluto}}{\\text{masa disolución}} \\times 100$", "isCorrect": true },
                { "id": "b", "label": "$\\frac{\\text{masa soluto}}{\\text{masa disolvente}} \\times 100$", "isCorrect": false },
                { "id": "c", "label": "$\\frac{\\text{volumen soluto}}{\\text{volumen disolución}} \\times 100$", "isCorrect": false },
                { "id": "d", "label": "$\\frac{\\text{moles soluto}}{\\text{masa disolución}} \\times 100$", "isCorrect": false }
              ],
              "explanation": "% en masa = (masa de soluto / masa total de disolución) × 100. Expresa gramos de soluto por cada 100 g de disolución."
            },
            {
              "id": "quim-dis-s4",
              "tier": "standard",
              "prompt": "Al añadir un soluto no volátil a un disolvente puro, su presión de vapor:",
              "options": [
                { "id": "a", "label": "Aumenta", "isCorrect": false },
                { "id": "b", "label": "Disminuye", "isCorrect": true },
                { "id": "c", "label": "No cambia", "isCorrect": false },
                { "id": "d", "label": "Se hace cero", "isCorrect": false }
              ],
              "explanation": "La presencia de soluto disminuye la presión de vapor del disolvente (ley de Raoult), ya que reduce la fracción molar del disolvente."
            },
            {
              "id": "quim-dis-s5",
              "tier": "standard",
              "prompt": "La solubilidad de los gases en agua generalmente:",
              "options": [
                { "id": "a", "label": "Aumenta con la temperatura", "isCorrect": false },
                { "id": "b", "label": "Disminuye con la temperatura", "isCorrect": true },
                { "id": "c", "label": "No depende de la temperatura", "isCorrect": false },
                { "id": "d", "label": "Aumenta con el volumen", "isCorrect": false }
              ],
              "explanation": "La solubilidad de gases en líquidos disminuye al aumentar la temperatura, por eso las bebidas calientes tienen menos gas disuelto."
            },
            {
              "id": "quim-dis-s6",
              "tier": "standard",
              "prompt": "Una disolución saturada es aquella que:",
              "options": [
                { "id": "a", "label": "Contiene la máxima cantidad de soluto disuelto a esa temperatura", "isCorrect": true },
                { "id": "b", "label": "Contiene poco soluto", "isCorrect": false },
                { "id": "c", "label": "Tiene pH neutro", "isCorrect": false },
                { "id": "d", "label": "No puede disolver más disolvente", "isCorrect": false }
              ],
              "explanation": "Una disolución saturada ha alcanzado el equilibrio de solubilidad, conteniendo la máxima cantidad de soluto que puede disolverse a esa temperatura."
            },
            {
              "id": "quim-term-s1",
              "tier": "standard",
              "prompt": "La entalpía de una reacción ($\\Delta H$) representa:",
              "options": [
                { "id": "a", "label": "El calor intercambiado a presión constante", "isCorrect": true },
                { "id": "b", "label": "El trabajo realizado", "isCorrect": false },
                { "id": "c", "label": "La energía cinética de las moléculas", "isCorrect": false },
                { "id": "d", "label": "La temperatura final", "isCorrect": false }
              ],
              "explanation": "La entalpía (H) es una función de estado que mide el calor intercambiado en procesos a presión constante."
            },
            {
              "id": "quim-term-s2",
              "tier": "standard",
              "prompt": "Una reacción con $\\Delta H > 0$ es:",
              "options": [
                { "id": "a", "label": "Exotérmica", "isCorrect": false },
                { "id": "b", "label": "Endotérmica", "isCorrect": true },
                { "id": "c", "label": "Espontánea", "isCorrect": false },
                { "id": "d", "label": "Irreversible", "isCorrect": false }
              ],
              "explanation": "Si ΔH > 0, la reacción absorbe calor del entorno (endotérmica). Si ΔH < 0 sería exotérmica."
            },
            {
              "id": "quim-term-s3",
              "tier": "standard",
              "prompt": "La entalpía estándar de formación de un elemento en su estado más estable es:",
              "options": [
                { "id": "a", "label": "Positiva", "isCorrect": false },
                { "id": "b", "label": "Negativa", "isCorrect": false },
                { "id": "c", "label": "Cero", "isCorrect": true },
                { "id": "d", "label": "Variable", "isCorrect": false }
              ],
              "explanation": "Por convenio, la entalpía de formación de elementos en su estado estándar (como O₂, H₂, C grafito) es cero."
            },
            {
              "id": "quim-term-s4",
              "tier": "standard",
              "prompt": "La combustión de hidrocarburos es un proceso:",
              "options": [
                { "id": "a", "label": "Endotérmico", "isCorrect": false },
                { "id": "b", "label": "Exotérmico", "isCorrect": true },
                { "id": "c", "label": "Sin cambio de entalpía", "isCorrect": false },
                { "id": "d", "label": "No espontáneo", "isCorrect": false }
              ],
              "explanation": "La combustión libera gran cantidad de energía en forma de calor, por lo que es un proceso exotérmico (ΔH < 0)."
            },
            {
              "id": "quim-term-s5",
              "tier": "standard",
              "prompt": "La primera ley de la termodinámica establece que:",
              "options": [
                { "id": "a", "label": "La energía se crea constantemente", "isCorrect": false },
                { "id": "b", "label": "La energía se conserva", "isCorrect": true },
                { "id": "c", "label": "La entropía siempre aumenta", "isCorrect": false },
                { "id": "d", "label": "El calor fluye de frío a caliente", "isCorrect": false }
              ],
              "explanation": "La primera ley establece que la energía no se crea ni se destruye, solo se transforma: ΔU = Q - W."
            },
            {
              "id": "quim-cin-s1",
              "tier": "standard",
              "prompt": "La velocidad de una reacción química se puede expresar como:",
              "options": [
                { "id": "a", "label": "La variación de concentración por unidad de tiempo", "isCorrect": true },
                { "id": "b", "label": "La temperatura de la reacción", "isCorrect": false },
                { "id": "c", "label": "La energía de activación", "isCorrect": false },
                { "id": "d", "label": "El número de moles de reactivo", "isCorrect": false }
              ],
              "explanation": "La velocidad de reacción se define como v = Δ[concentración]/Δt, midiendo cómo cambia la concentración con el tiempo."
            },
            {
              "id": "quim-cin-s2",
              "tier": "standard",
              "prompt": "La energía de activación es:",
              "options": [
                { "id": "a", "label": "La energía mínima necesaria para que ocurra la reacción", "isCorrect": true },
                { "id": "b", "label": "La energía liberada en la reacción", "isCorrect": false },
                { "id": "c", "label": "La energía de los productos", "isCorrect": false },
                { "id": "d", "label": "La diferencia entre reactivos y productos", "isCorrect": false }
              ],
              "explanation": "La energía de activación (Ea) es la barrera energética que deben superar los reactivos para transformarse en productos."
            },
            {
              "id": "quim-cin-s3",
              "tier": "standard",
              "prompt": "Un aumento de temperatura generalmente provoca en la velocidad de reacción:",
              "options": [
                { "id": "a", "label": "Una disminución", "isCorrect": false },
                { "id": "b", "label": "Un aumento", "isCorrect": true },
                { "id": "c", "label": "Ningún efecto", "isCorrect": false },
                { "id": "d", "label": "Un cambio impredecible", "isCorrect": false }
              ],
              "explanation": "Al aumentar T, más moléculas tienen energía suficiente para superar la Ea, aumentando la frecuencia de choques eficaces."
            },
            {
              "id": "quim-cin-s4",
              "tier": "standard",
              "prompt": "Un catalizador actúa en una reacción:",
              "options": [
                { "id": "a", "label": "Aumentando la temperatura", "isCorrect": false },
                { "id": "b", "label": "Aumentando la energía de activación", "isCorrect": false },
                { "id": "c", "label": "Disminuyendo la energía de activación", "isCorrect": true },
                { "id": "d", "label": "Modificando el equilibrio", "isCorrect": false }
              ],
              "explanation": "El catalizador acelera la reacción proporcionando un camino alternativo con menor energía de activación, sin modificar ΔH ni el equilibrio."
            },
            {
              "id": "quim-cin-s5",
              "tier": "standard",
              "prompt": "El orden de una reacción se determina:",
              "options": [
                { "id": "a", "label": "Por los coeficientes estequiométricos", "isCorrect": false },
                { "id": "b", "label": "Experimentalmente", "isCorrect": true },
                { "id": "c", "label": "Por la temperatura", "isCorrect": false },
                { "id": "d", "label": "Por la presión", "isCorrect": false }
              ],
              "explanation": "El orden de reacción debe determinarse experimentalmente; no coincide necesariamente con los coeficientes estequiométricos."
            },
            {
              "id": "quim-eq-s1",
              "tier": "standard",
              "prompt": "Una reacción está en equilibrio cuando:",
              "options": [
                { "id": "a", "label": "Las velocidades directa e inversa son iguales", "isCorrect": true },
                { "id": "b", "label": "Se han consumido todos los reactivos", "isCorrect": false },
                { "id": "c", "label": "La temperatura es constante", "isCorrect": false },
                { "id": "d", "label": "No hay productos formados", "isCorrect": false }
              ],
              "explanation": "En el equilibrio químico, las velocidades de las reacciones directa e inversa se igualan, manteniendo constantes las concentraciones."
            },
            {
              "id": "quim-eq-s2",
              "tier": "standard",
              "prompt": "La constante de equilibrio $K_c$ depende de:",
              "options": [
                { "id": "a", "label": "Las concentraciones iniciales", "isCorrect": false },
                { "id": "b", "label": "La temperatura", "isCorrect": true },
                { "id": "c", "label": "La presión", "isCorrect": false },
                { "id": "d", "label": "El volumen del recipiente", "isCorrect": false }
              ],
              "explanation": "Kc es característica de cada reacción a una temperatura dada; no depende de concentraciones, presión o volumen."
            },
            {
              "id": "quim-eq-s3",
              "tier": "standard",
              "prompt": "Si $K_c < 1$, en el equilibrio predominan:",
              "options": [
                { "id": "a", "label": "Los productos", "isCorrect": false },
                { "id": "b", "label": "Los reactivos", "isCorrect": true },
                { "id": "c", "label": "Ambos por igual", "isCorrect": false },
                { "id": "d", "label": "Ninguno", "isCorrect": false }
              ],
              "explanation": "Si Kc < 1, el denominador (reactivos) es mayor que el numerador (productos), por lo que predominan los reactivos."
            },
            {
              "id": "quim-eq-s4",
              "tier": "standard",
              "prompt": "Al aumentar la temperatura en una reacción exotérmica en equilibrio, según Le Châtelier:",
              "options": [
                { "id": "a", "label": "El equilibrio se desplaza hacia productos", "isCorrect": false },
                { "id": "b", "label": "El equilibrio se desplaza hacia reactivos", "isCorrect": true },
                { "id": "c", "label": "No se modifica el equilibrio", "isCorrect": false },
                { "id": "d", "label": "Se detiene la reacción", "isCorrect": false }
              ],
              "explanation": "En reacciones exotérmicas, aumentar T favorece el proceso endotérmico (reacción inversa), desplazando el equilibrio hacia reactivos."
            },
            {
              "id": "quim-eq-s5",
              "tier": "standard",
              "prompt": "Al añadir un catalizador a un sistema en equilibrio:",
              "options": [
                { "id": "a", "label": "El equilibrio se desplaza hacia productos", "isCorrect": false },
                { "id": "b", "label": "El equilibrio se desplaza hacia reactivos", "isCorrect": false },
                { "id": "c", "label": "No se modifica la posición del equilibrio", "isCorrect": true },
                { "id": "d", "label": "Aumenta la constante de equilibrio", "isCorrect": false }
              ],
              "explanation": "El catalizador acelera ambas reacciones (directa e inversa) por igual, alcanzando el equilibrio más rápido pero sin modificar su posición."
            }
      ]
    }
  ]
}