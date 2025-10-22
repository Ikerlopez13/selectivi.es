import type { Subject } from '../../types'

export const geographyAND: Subject = {
  id: 'geografia',
  name: 'Geografía',
  topics: [
    {
      id: 'geografia-espana',
      title: 'Geografía de España',
      questions: [
        {
          id: 'and-geografia-q1',
          tier: 'standard',
          prompt: 'El río más largo de España es:',
          options: [
            { id: 'a', label: 'El Tajo', isCorrect: true },
            { id: 'b', label: 'El Ebro', isCorrect: false },
            { id: 'c', label: 'El Guadalquivir', isCorrect: false },
            { id: 'd', label: 'El Duero', isCorrect: false },
          ],
          explanation: 'El río Tajo es el más largo de la Península Ibérica con 1.007 km, naciendo en la Sierra de Albarracín y desembocando en Lisboa.'
        },
        {
          id: 'and-geografia-q2',
          tier: 'standard',
          prompt: '¿En qué continente está Andalucía?',
          options: [
            { id: 'a', label: 'Europa', isCorrect: true },
            { id: 'b', label: 'África', isCorrect: false },
            { id: 'c', label: 'Asia', isCorrect: false },
            { id: 'd', label: 'América', isCorrect: false },
          ],
          explanation: 'Andalucía es una comunidad autónoma del sur de España, ubicada en el continente europeo, aunque muy próxima a África.'
        }
      ]
    }
  ],
}

