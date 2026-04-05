import type { Subject } from '../types'

export const geographyAND: Subject = {
  id: 'geografia',
  name: 'Geografía de España',
  topics: [
    {
      id: 'medio-fisico',
      title: 'El medio físico: relieve, clima e hidrografía',
      questions: [
        {
          id: 'and-geo-fisico-q1',
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
          id: 'and-geo-fisico-q2',
          tier: 'premium',
          prompt: 'El pico más alto de la Península Ibérica es:',
          options: [
            { id: 'a', label: 'Mulhacén (Sierra Nevada)', isCorrect: true },
            { id: 'b', label: 'Aneto (Pirineos)', isCorrect: false },
            { id: 'c', label: 'Torre Cerredo (Picos de Europa)', isCorrect: false },
            { id: 'd', label: 'Teide (Canarias)', isCorrect: false },
          ],
          explanation: 'El Mulhacén (3.479 m) en Sierra Nevada, Granada, es el pico más alto de la Península Ibérica. El Teide es más alto pero está en Canarias.'
        },
        {
          id: 'and-geo-fisico-q3',
          tier: 'premium',
          prompt: 'El río Guadalquivir desemboca en:',
          options: [
            { id: 'a', label: 'El Océano Atlántico', isCorrect: true },
            { id: 'b', label: 'El Mar Mediterráneo', isCorrect: false },
            { id: 'c', label: 'El Mar Cantábrico', isCorrect: false },
            { id: 'd', label: 'El Río Tajo', isCorrect: false },
          ],
          explanation: 'El Guadalquivir desemboca en el Océano Atlántico, en el Golfo de Cádiz, formando el Parque Nacional de Doñana.'
        }
      ]
    },
    {
      id: 'vegetacion-suelos',
      title: 'La vegetación y los suelos',
      questions: []
    },
    {
      id: 'poblacion',
      title: 'La población española',
      questions: []
    },
    {
      id: 'espacios-urbanos',
      title: 'El espacio urbano',
      questions: []
    },
    {
      id: 'espacios-rurales',
      title: 'Los espacios rurales y actividades del sector primario',
      questions: []
    },
    {
      id: 'industria-energia',
      title: 'La industria y la energía',
      questions: []
    },
    {
      id: 'servicios-transportes',
      title: 'El sector servicios y los transportes',
      questions: []
    },
    {
      id: 'turismo',
      title: 'El turismo en España',
      questions: []
    },
    {
      id: 'organizacion-territorial',
      title: 'La organización territorial de España',
      questions: [
        {
          id: 'and-geo-org-q1',
          tier: 'standard',
          prompt: '¿En qué continente está Andalucía?',
          options: [
            { id: 'a', label: 'Europa', isCorrect: true },
            { id: 'b', label: 'África', isCorrect: false },
            { id: 'c', label: 'Asia', isCorrect: false },
            { id: 'd', label: 'América', isCorrect: false },
          ],
          explanation: 'Andalucía es una comunidad autónoma del sur de España, ubicada en el continente europeo, aunque muy próxima a África.'
        },
        {
          id: 'and-geo-org-q2',
          tier: 'standard',
          prompt: 'La capital de Andalucía es:',
          options: [
            { id: 'a', label: 'Sevilla', isCorrect: true },
            { id: 'b', label: 'Málaga', isCorrect: false },
            { id: 'c', label: 'Granada', isCorrect: false },
            { id: 'd', label: 'Córdoba', isCorrect: false },
          ],
          explanation: 'Sevilla es la capital de la comunidad autónoma de Andalucía y la ciudad más poblada de la región.'
        }
      ]
    },
    {
      id: 'medio-ambiente',
      title: 'El medio ambiente y la sostenibilidad',
      questions: []
    },
    {
      id: 'espana-europa-mundo',
      title: 'España en Europa y el mundo',
      questions: []
    }
  ],
}
