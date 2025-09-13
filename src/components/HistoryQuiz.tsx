'use client'

import { useMemo, useState } from 'react'

type Question = {
  id: number
  topicId: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

type Topic = { id: string; title: string }

const TOPICS: Topic[] = [
  { id: 'prehistoria', title: 'La Prehistoria y la Edad Antigua' },
  { id: 'edad-media', title: 'La Edad Media' },
  { id: 'edad-moderna', title: 'La Edad Moderna' },
  { id: 'crisis-antiguo', title: 'Crisis del Antiguo Régimen' },
  { id: 'estado-liberal', title: 'Construcción del Estado Liberal' },
  { id: 'restauracion', title: 'Régimen de la Restauración' },
  { id: 'transformaciones-xix', title: 'Transformaciones eco-sociales s.XIX' },
  { id: 'alfonso-xiii', title: 'Alfonso XIII y crisis de la Restauración' },
  { id: 'segunda-republica', title: 'La Segunda República' },
  { id: 'guerra-civil', title: 'Guerra Civil española' },
  { id: 'franquismo', title: 'Dictadura franquista' },
  { id: 'transicion', title: 'Transición y España democrática' },
]

// Solo mostramos los últimos 7 temas en la UI
const VISIBLE_TOPICS: Topic[] = TOPICS.slice(-7)

const QUESTIONS: Record<string, Question[]> = {
  'prehistoria': [
    {
      id: 1,
      topicId: 'prehistoria',
      question: '¿Qué pueblo colonizador introdujo el alfabeto en la Península Ibérica?',
      options: ['Fenicios', 'Cartagineses', 'Romanos', 'Griegos'],
      correctAnswer: 'Fenicios',
      explanation: 'Los fenicios introdujeron el alfabeto y fundaron factorías comerciales en el sur y levante peninsular.'
    }
  ],
  'edad-media': [
    {
      id: 1,
      topicId: 'edad-media',
      question: '¿Qué se entiende por repoblación en la Edad Media hispana?',
      options: [
        'Proceso de expansión demográfica hacia América',
        'Ocupación y organización de territorios conquistados a Al-Ándalus',
        'Migración visigoda hacia el norte de África',
        'Exilio de mudéjares y judíos'
      ],
      correctAnswer: 'Ocupación y organización de territorios conquistados a Al-Ándalus',
      explanation: 'La repoblación fue clave en la consolidación de los reinos cristianos tras los avances de la Reconquista.'
    }
  ],
  'edad-moderna': [
    {
      id: 1,
      topicId: 'edad-moderna',
      question: '¿Qué monarcas unificaron dinásticamente Castilla y Aragón?',
      options: ['Carlos I y Felipe II', 'Isabel I y Fernando II', 'Felipe IV y Carlos II', 'Juana I y Felipe el Hermoso'],
      correctAnswer: 'Isabel I y Fernando II',
      explanation: 'Los Reyes Católicos establecieron una unión dinástica entre Castilla y Aragón.'
    }
  ],
  'crisis-antiguo': [
    {
      id: 1,
      topicId: 'crisis-antiguo',
      question: '¿Qué acontecimiento internacional influyó decisivamente en la crisis del Antiguo Régimen en España?',
      options: ['Guerra de Sucesión Austriaca', 'Revolución Francesa', 'Guerra de los Siete Años', 'Guerra de Crimea'],
      correctAnswer: 'Revolución Francesa',
      explanation: 'La Revolución Francesa difundió ideas liberales que cuestionaron el Antiguo Régimen.'
    }
  ],
  'estado-liberal': [
    {
      id: 1,
      topicId: 'estado-liberal',
      question: '¿Qué texto consolidó el liberalismo en España durante el Trienio Liberal?',
      options: ['Constitución de 1812', 'Constitución de 1837', 'Concordato de 1851', 'Estatuto Real'],
      correctAnswer: 'Constitución de 1812',
      explanation: 'La Pepa inspiró posteriores cartas y fue restaurada durante el Trienio Liberal (1820-1823).'
    }
  ],
  'restauracion': [
    {
      id: 1,
      topicId: 'restauracion',
      question: '¿Qué sistema político caracterizó a la Restauración borbónica?',
      options: ['Sufragio femenino', 'Bipartidismo turnista', 'República federal', 'Dictadura militar permanente'],
      correctAnswer: 'Bipartidismo turnista',
      explanation: 'Conservadores y liberales se alternaban pacíficamente en el poder mediante el turno.'
    },
    {
      id: 2,
      topicId: 'restauracion',
      question: '¿Qué práctica electoral garantizaba el turno de partidos?',
      options: ['El caciquismo', 'El referéndum', 'El sufragio censitario', 'La segunda vuelta'],
      correctAnswer: 'El caciquismo',
      explanation: 'Las redes clientelares locales (caciques) aseguraban los resultados previstos por el Gobierno.'
    },
    {
      id: 3,
      topicId: 'restauracion',
      question: '¿Qué conflicto colonial impactó al régimen a finales del XIX?',
      options: ['Guerra de Cuba', 'Guerra de Sucesión', 'Guerra de Marruecos (Ifni)', 'Guerra Carlista IV'],
      correctAnswer: 'Guerra de Cuba',
      explanation: 'La pérdida de Cuba (1898) supuso una crisis moral y política para el sistema.'
    }
  ],
  'transformaciones-xix': [
    {
      id: 1,
      topicId: 'transformaciones-xix',
      question: '¿Qué medida económica impulsó la desamortización?',
      options: ['Privatización de tierras eclesiásticas y comunales', 'Implantación de aranceles', 'Creación del Banco de España', 'Plan de regadíos nacionales'],
      correctAnswer: 'Privatización de tierras eclesiásticas y comunales',
      explanation: 'Buscaba sanear la Hacienda y cambiar la estructura de la propiedad.'
    },
    {
      id: 2,
      topicId: 'transformaciones-xix',
      question: '¿Qué sector experimentó un fuerte impulso con el ferrocarril?',
      options: ['Agricultura de subsistencia', 'Industria siderúrgica y carbonífera', 'Pesca artesanal', 'Textil doméstico'],
      correctAnswer: 'Industria siderúrgica y carbonífera',
      explanation: 'El ferrocarril dinamizó la demanda de acero y carbón, motores de la primera industrialización.'
    },
    {
      id: 3,
      topicId: 'transformaciones-xix',
      question: '¿Qué movimiento social cobró fuerza a finales del XIX?',
      options: ['Carlismo campesino', 'Anarquismo y socialismo obrero', 'Movimientos absolutistas', 'Falange Española'],
      correctAnswer: 'Anarquismo y socialismo obrero',
      explanation: 'El movimiento obrero se organizó en torno a sindicatos y partidos de inspiración anarquista y socialista.'
    }
  ],
  'alfonso-xiii': [
    {
      id: 1,
      topicId: 'alfonso-xiii',
      question: '¿Qué desastre militar precipitó la crisis del sistema en 1921?',
      options: ['Annual', 'Cuba', 'Bailén', 'Guadalajara'],
      correctAnswer: 'Annual',
      explanation: 'El desastre de Annual en el Rif agravó la inestabilidad del régimen.'
    },
    {
      id: 2,
      topicId: 'alfonso-xiii',
      question: '¿Qué dictadura se instauró en 1923?',
      options: ['Primo de Rivera', 'Franco', 'Berenguer', 'Espartero'],
      correctAnswer: 'Primo de Rivera',
      explanation: 'El golpe de 1923 estableció la Dictadura de Primo de Rivera con apoyo del rey.'
    },
    {
      id: 3,
      topicId: 'alfonso-xiii',
      question: '¿Qué hecho condujo a la caída de la Monarquía en 1931?',
      options: ['Elecciones municipales', 'Huelga general', 'Referéndum nacional', 'Golpe militar'],
      correctAnswer: 'Elecciones municipales',
      explanation: 'Las elecciones municipales de abril de 1931 dieron triunfo a candidaturas republicanas en capitales.'
    }
  ],
  'segunda-republica': [
    {
      id: 1,
      topicId: 'segunda-republica',
      question: '¿Qué periodo se conoce como Bienio Reformista?',
      options: ['1931-1933', '1933-1935', '1935-1936', '1936'],
      correctAnswer: '1931-1933',
      explanation: 'El Gobierno de Azaña impulsó reformas sociales, militares y educativas.'
    },
    {
      id: 2,
      topicId: 'segunda-republica',
      question: '¿Qué acontecimiento caracterizó el Bienio Conservador?',
      options: ['Reforma agraria profunda', 'Paralización/retroceso de reformas', 'Proclamación de Estatutos', 'Golpe de Casado'],
      correctAnswer: 'Paralización/retroceso de reformas',
      explanation: 'Entre 1933-1935 se frenaron varias reformas del primer bienio.'
    },
    {
      id: 3,
      topicId: 'segunda-republica',
      question: '¿Qué Frente ganó las elecciones de febrero de 1936?',
      options: ['Frente Popular', 'CEDA', 'Monárquicos', 'CNT-FAI'],
      correctAnswer: 'Frente Popular',
      explanation: 'La victoria del Frente Popular reactivó tensiones que precedieron al golpe de julio.'
    }
  ],
  'guerra-civil': [
    {
      id: 1,
      topicId: 'guerra-civil',
      question: '¿Qué potencias intervinieron de forma determinante apoyando a los sublevados?',
      options: ['Francia y Reino Unido', 'Italia y Alemania nazi', 'URSS y México', 'EE.UU. y Portugal'],
      correctAnswer: 'Italia y Alemania nazi',
      explanation: 'La ayuda de Italia y Alemania fue clave para el bando sublevado.'
    },
    {
      id: 2,
      topicId: 'guerra-civil',
      question: '¿Qué política siguieron Francia y Reino Unido respecto al conflicto?',
      options: ['Intervención directa', 'No intervención', 'Bloqueo naval a los sublevados', 'Alianza con la República'],
      correctAnswer: 'No intervención',
      explanation: 'Promovieron el Comité de No Intervención, aunque hubo incumplimientos.'
    },
    {
      id: 3,
      topicId: 'guerra-civil',
      question: '¿Qué batalla se considera un punto de inflexión en 1937?',
      options: ['Jarama', 'Brunete', 'Ebro', 'Guadalajara'],
      correctAnswer: 'Guadalajara',
      explanation: 'En Guadalajara las tropas italianas fueron derrotadas, frenando el avance hacia Madrid.'
    }
  ],
  'franquismo': [
    {
      id: 1,
      topicId: 'franquismo',
      question: 'Tras la Segunda Guerra Mundial, España quedó…',
      options: ['Aislada internacionalmente', 'Integrada en la ONU de inmediato', 'Aliada con EE.UU. en 1946', 'Con democracia parlamentaria'],
      correctAnswer: 'Aislada internacionalmente',
      explanation: 'El aislamiento se fue superando a inicios de los 50 con los acuerdos con EE.UU.'
    },
    {
      id: 2,
      topicId: 'franquismo',
      question: '¿Qué plan económico marcó la apertura en los 60?',
      options: ['Plan de Estabilización de 1959', 'Autarquía de 1939', 'Pactos de la Moncloa', 'Plan de Choque 1977'],
      correctAnswer: 'Plan de Estabilización de 1959',
      explanation: 'Supuso liberalización y tecnocracia, iniciando el desarrollismo.'
    },
    {
      id: 3,
      topicId: 'franquismo',
      question: '¿Qué leyes orgánicas estructuraron el régimen?',
      options: ['Leyes Fundamentales', 'Constitución de 1978', 'Estatuto Real', 'Carta Magna'],
      correctAnswer: 'Leyes Fundamentales',
      explanation: 'Conjunto de leyes que hacían de pseudoconstitución del régimen.'
    }
  ],
  'transicion': [
    {
      id: 1,
      topicId: 'transicion',
      question: '¿Qué fecha marca la Constitución que inaugura la España democrática?',
      options: ['1975', '1977', '1978', '1979'],
      correctAnswer: '1978',
      explanation: 'La Constitución de 1978 consolidó el marco democrático y autonómico.'
    },
    {
      id: 2,
      topicId: 'transicion',
      question: '¿Qué ley permitió la reforma desde la legalidad franquista?',
      options: ['Ley para la Reforma Política', 'Ley Orgánica del Estado', 'Ley de Amnistía', 'Ley D’Hondt'],
      correctAnswer: 'Ley para la Reforma Política',
      explanation: 'Aprobada en referéndum de 1976, abrió el proceso democratizador.'
    },
    {
      id: 3,
      topicId: 'transicion',
      question: '¿Qué hecho intentó frenar el proceso democrático en 1981?',
      options: ['23-F', 'Atentados de Atocha', 'Juicios de Burgos', 'Vitoria 1976'],
      correctAnswer: '23-F',
      explanation: 'El intento de golpe del 23 de febrero de 1981 fracasó y consolidó la democracia.'
    }
  ],
}

export default function HistoryQuiz() {
  const [topicId, setTopicId] = useState<string>(VISIBLE_TOPICS[0]?.id ?? TOPICS[0]?.id ?? 'prehistoria')
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [show, setShow] = useState(false)

  const questions = useMemo(() => QUESTIONS[topicId] ?? [], [topicId])
  const current = questions[qIndex]

  const selectTopic = (id: string) => {
    setTopicId(id)
    setQIndex(0)
    setSelected(null)
    setShow(false)
  }

  const handleSelect = (opt: string) => {
    setSelected(opt)
    setShow(true)
  }

  const next = () => {
    if (qIndex < (questions.length - 1)) {
      // Pasar a la siguiente pregunta dentro del mismo tema
      setQIndex(qIndex + 1)
      setSelected(null)
      setShow(false)
      return
    }

    // No quedan preguntas: saltar al siguiente tema visible
    const idx = VISIBLE_TOPICS.findIndex(t => t.id === topicId)
    const nextTopic = VISIBLE_TOPICS[(idx + 1) % VISIBLE_TOPICS.length]
    setTopicId(nextTopic.id)
    setQIndex(0)
    setSelected(null)
    setShow(false)
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <div className="inline-flex items-center gap-2 bg-[#FFE8A6] text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
          ✨ Prueba SeleTest
        </div>
        <h3 className="text-3xl font-extrabold leading-tight mb-6">
          ¿Qué tema de historia de España quieres estudiar hoy?
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Temas (últimos 6) */}
          <div className="space-y-4">
            {VISIBLE_TOPICS.map((t) => {
              const active = t.id === topicId
              return (
                <button
                  key={t.id}
                  onClick={() => selectTopic(t.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-full text-left transition-all border ${
                    active ? 'bg-[#FFFBEB] border-[#FFB800]' : 'bg-gray-50 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full ${active ? 'bg-[#FFB800]' : 'bg-gray-400'}`} />
                  <span className="font-medium">{t.title}</span>
                </button>
              )
            })}
          </div>

          {/* Cuestionario en el mismo recuadro */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Pregunta {qIndex + 1} de {questions.length || 1}</span>
              <span className="text-sm text-gray-600">Puntuación: 0 / {questions.length || 1}</span>
            </div>

            {current ? (
              <div className="space-y-4">
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Historia</div>
                <h4 className="text-xl font-semibold">{current.question}</h4>
                <div className="space-y-3">
                  {current.options.map((opt, idx) => {
                    const isSel = selected === opt
                    const isCorrect = opt === current.correctAnswer
                    let cls = 'w-full p-4 rounded-lg border text-left transition-colors'
                    if (show) {
                      if (isCorrect) cls += ' border-green-500 bg-green-50'
                      else if (isSel && !isCorrect) cls += ' border-red-500 bg-red-50'
                    } else if (isSel) {
                      cls += ' border-[#FFB800]'
                    } else {
                      cls += ' hover:border-[#FFB800]'
                    }
                    return (
                      <button key={idx} className={cls} onClick={() => handleSelect(opt)} disabled={show}>
                        {String.fromCharCode(65 + idx)}. {opt}
                      </button>
                    )
                  })}
                </div>

                {show && (
                  <div className="space-y-3">
                    <h5 className="font-medium">Explicación:</h5>
                    <p className="text-gray-600">{current.explanation}</p>
                    <button className="w-full bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors" onClick={next}>
                      Siguiente pregunta
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-600">Aún no hay preguntas para este tema.</p>
            )}
          </div>
        </div>
        {/* CTA dentro del mismo recuadro */}
        <div className="mt-8 rounded-2xl bg-gray-50 p-5 flex items-center justify-between gap-4 border border-gray-100">
          <div>
            <p className="font-semibold mb-1">¿Cómo funciona SelectiviES?</p>
            <p className="text-gray-600 text-sm">En 60 segundos: cuestionarios por temas, feedback inmediato y seguimiento de progreso.</p>
          </div>
          <a
            href="#onboarding"
            className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            Ver cómo funciona
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}


