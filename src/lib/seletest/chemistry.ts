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
        }
      ]
    }
  ]
}