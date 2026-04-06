import { Subject } from './types'

export const historyES: Subject = {
  id: 'historia-espana',
  name: 'Historia de España',
  topics: [
    {
      id: 'prehistoria-antigua',
      title: 'Prehistoria y Edad Antigua (EBAU Focus)',
      questions: [
        { id: 'his-pre-q1', tier: 'standard', prompt: '¿Qué pueblo fundó Gadir?', options: [{ id: 'a', label: 'Fenicios.', isCorrect: true }, { id: 'b', label: 'Griegos.', isCorrect: false }, { id: 'c', label: 'Romanos.', isCorrect: false }, { id: 'd', label: 'Celtas.', isCorrect: false }], explanation: 'Gadir es hoy Cádiz.' }
      ]
    },
    {
      id: 'moderna-ebau',
      title: 'Edad Moderna y Contemporánea (EBAU Madrid)',
      questions: [
        { id: 'his-mod-q1', tier: 'premium', prompt: 'Los Decretos de Nueva Planta de Felipe V provocaron:', options: [{ id: 'a', label: 'La abolición de los fueros de la Corona de Aragón.', isCorrect: true }, { id: 'b', label: 'La independencia de Cataluña.', isCorrect: false }, { id: 'c', label: 'La creación de las CC.AA.', isCorrect: false }, { id: 'd', label: 'El fin de la Inquisición.', isCorrect: false }], explanation: 'Centralización borbónica.' }
      ]
    }
  ]
}
