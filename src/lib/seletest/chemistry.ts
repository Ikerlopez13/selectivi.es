import type { Subject } from './types'

export const chemistryES: Subject = {
  id: 'quimica',
  name: 'Química',
  topics: [
    {
      id: 'estructura-atomica',
      title: 'Estructura Atómica y Tabla Periódica',
      questions: [
        { id: 'quim-at-q1', tier: 'standard', prompt: 'Configuración abreviada del Hierro ($Z=26$):', options: [{ id: 'a', label: '$[Ar]\,3d^6\,4s^2$', isCorrect: true }, { id: 'b', label: '$[Ar]\,4s^2$', isCorrect: false }, { id: 'c', label: '$[Kr]\,4d^6$', isCorrect: false }, { id: 'd', label: '$[Ar]\,3d^8$', isCorrect: false }], explanation: 'El Fe llena el 4s y luego 6 electrones en el subnivel 3d.' },
        { id: 'quim-at-q2', tier: 'premium', prompt: 'Elemento con mayor energía de ionización en el periodo 3:', options: [{ id: 'a', label: 'Argón (Ar).', isCorrect: true }, { id: 'b', label: 'Sodio (Na).', isCorrect: false }, { id: 'c', label: 'Silicio (Si).', isCorrect: false }, { id: 'd', label: 'Cloro (Cl).', isCorrect: false }], explanation: 'Los gases nobles tienen las energías de ionización más altas.' },
        { id: 'quim-at-q3', tier: 'premium', prompt: 'Principio de exclusión de Pauli:', options: [{ id: 'a', label: 'No puede haber dos electrones con los 4 números cuánticos iguales.', isCorrect: true }, { id: 'b', label: 'Los electrones giran en círculos.', isCorrect: false }, { id: 'c', label: 'La masa se conserva.', isCorrect: false }, { id: 'd', label: 'El átomo es neutro siempre.', isCorrect: false }], explanation: 'Define el llenado de orbitales.' }
      ]
    },
    {
      id: 'enlace',
      title: 'Enlace Químico',
      questions: [
        { id: 'quim-en-q1', tier: 'standard', prompt: 'Geometría de la molécula de $CH_4$ (metano):', options: [{ id: 'a', label: 'Tetraédrica.', isCorrect: true }, { id: 'b', label: 'Lineal.', isCorrect: false }, { id: 'c', label: 'Plana trigonal.', isCorrect: false }, { id: 'd', label: 'Piramidal.', isCorrect: false }], explanation: 'Hibridación $sp^3$ del carbono.' },
        { id: 'quim-en-q2', tier: 'premium', prompt: 'Elemento más electronegativo de la tabla:', options: [{ id: 'a', label: 'Flúor (F).', isCorrect: true }, { id: 'b', label: 'Oxígeno (O).', isCorrect: false }, { id: 'c', label: 'Francio (Fr).', isCorrect: false }, { id: 'd', label: 'Cloro (Cl).', isCorrect: false }], explanation: 'Atrae electrones con máxima fuerza.' }
      ]
    },
    {
      id: 'termoquimica',
      title: 'Termoquímica',
      questions: [
        { id: 'quim-ter-q1', tier: 'standard', prompt: 'Una reacción exotérmica:', options: [{ id: 'a', label: 'Libera calor ($\Delta H < 0$).', isCorrect: true }, { id: 'b', label: 'Absorbe calor.', isCorrect: false }, { id: 'c', label: 'Enfría el recipiente.', isCorrect: false }, { id: 'd', label: 'No tiene entalpía.', isCorrect: false }], explanation: 'La energía de productos es menor que de reactivos.' },
        { id: 'quim-ter-q2', tier: 'premium', prompt: 'La entropía ($S$) mide:', options: [{ id: 'a', label: 'El grado de desorden de un sistema.', isCorrect: true }, { id: 'b', label: 'La presión máxima.', isCorrect: false }, { id: 'c', label: 'El calor total.', isCorrect: false }, { id: 'd', label: 'La velocidad de reacción.', isCorrect: false }], explanation: 'Un cristal perfecto a 0K tiene entropía 0.' }
      ]
    },
    {
      id: 'ácido-base',
      title: 'Ácido-Base',
      questions: [
        { id: 'quim-ab-q1', tier: 'standard', prompt: '¿Cuál es el ácido conjugado de $H_2O$?', options: [{ id: 'a', label: '$H_3O^+$.', isCorrect: true }, { id: 'b', label: '$OH^-$.', isCorrect: false }, { id: 'c', label: '$H_2$.', isCorrect: false }, { id: 'd', label: '$O_2^-$.', isCorrect: false }], explanation: 'Acepta un protón.' },
        { id: 'quim-ab-q2', tier: 'premium', prompt: 'PH de una base fuerte $0.1\,M$:', options: [{ id: 'a', label: '13', isCorrect: true }, { id: 'b', label: '1', isCorrect: false }, { id: 'c', label: '7', isCorrect: false }, { id: 'd', label: '14', isCorrect: false }], explanation: '$pOH = 1 \implies pH = 14 - 1 = 13$.' }
      ]
    },
    {
      id: 'redox',
      title: 'Redox y Electroquímica',
      questions: [
        { id: 'quim-red-q1', tier: 'premium', prompt: 'En una celda galvánica, el cátodo es el electrodo donde ocurre:', options: [{ id: 'a', label: 'La reducción.', isCorrect: true }, { id: 'b', label: 'La oxidación.', isCorrect: false }, { id: 'c', label: 'La fusión.', isCorrect: false }, { id: 'd', label: 'La hidrólisis.', isCorrect: false }], explanation: 'RE-CAT (Reducción en el Cátodo).' }
      ]
    },
    {
      id: 'organica',
      title: 'Química Orgánica',
      questions: [
        { id: 'quim-org-q1', tier: 'premium', prompt: 'Isomería de la glucosa y la fructosa:', options: [{ id: 'a', label: 'Isomería de función.', isCorrect: true }, { id: 'b', label: 'Isomería de cadena.', isCorrect: false }, { id: 'c', label: 'Isomería óptica.', isCorrect: false }, { id: 'd', label: 'Son idénticas.', isCorrect: false }], explanation: 'Aldosa vs Cetosa.' }
      ]
    }
  ]
}