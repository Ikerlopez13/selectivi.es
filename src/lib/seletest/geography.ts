import type { Subject } from './types'

export const geographyES: Subject = {
  id: 'geografia',
  name: 'Geografía',
  topics: [
    // El medio físico
    { id: 'relieve-peninsular', title: 'El relieve peninsular: unidades morfoestructurales.', questions: [
        {
          id: 'geo-rel-q1',
          tier: 'standard',
          prompt: '¿Qué rasgo caracteriza principalmente la Meseta Central, gran unidad morfoestructural del interior peninsular?',
          options: [
            { id: 'a', label: 'Altas montañas kársticas', isCorrect: false },
            { id: 'b', label: 'Altiplanos y mesetas con relieve suavemente ondulado', isCorrect: true },
            { id: 'c', label: 'Desiertos', isCorrect: false },
            { id: 'd', label: 'Valles glaciales', isCorrect: false },
          ],
          explanation: 'La Meseta Central es una gran llanura elevada con relieve relativamente llano y ondulado, característica clave de su morfología.'
        },
        {
          id: 'geo-rel-q2',
          tier: 'standard',
          prompt: 'La sierra de Guadarrama es parte de qué unidad morfoestructural?',
          options: [
            { id: 'a', label: 'Cordillera Cantábrica', isCorrect: false },
            { id: 'b', label: 'Sistema Central', isCorrect: true },
            { id: 'c', label: 'Cordillera Ibérica', isCorrect: false },
            { id: 'd', label: 'Cordillera Bética', isCorrect: false },
          ],
          explanation: 'La sierra de Guadarrama forma parte del Sistema Central, una cadena montañosa que delimita la Meseta Central al norte.'
        },
        {
          id: 'geo-rel-q3',
          tier: 'standard',
          prompt: '¿Qué unidad morfoestructural se ubica al norte de la Península y da lugar a paisajes montañosos y ríos caudalosos?',
          options: [
            { id: 'a', label: 'Cordillera Ibérica', isCorrect: false },
            { id: 'b', label: 'Cordillera Cantábrica', isCorrect: true },
            { id: 'c', label: 'Sierra Morena', isCorrect: false },
            { id: 'd', label: 'Sistema Central', isCorrect: false },
          ],
          explanation: 'La Cordillera Cantábrica es la principal unidad morfoestructural del norte peninsular, caracterizada por montañas y ríos caudalosos.'
        },
        {
          id: 'geo-rel-q4',
          tier: 'standard',
          prompt: 'La Cordillera Bética se localiza principalmente en:',
          options: [
            { id: 'a', label: 'Norte', isCorrect: false },
            { id: 'b', label: 'Centro', isCorrect: false },
            { id: 'c', label: 'Sur y Este', isCorrect: true },
            { id: 'd', label: 'Islas', isCorrect: false },
          ],
          explanation: 'La Cordillera Bética se sitúa mayoritariamente en el extremo sur y este de la Península, delimitando la Meseta por su vertiente mediterránea.'
        },
      { id: 'geo-relpen-q1', tier: 'standard', prompt: 'En el medio físico de la Península Ibérica, ¿qué caracteriza la Meseta Central?', options: [
        { id: 'a', label: 'Se sitúa a lo largo de la costa atlántica.', isCorrect: false },
        { id: 'b', label: 'Es una meseta interior rodeada por cordilleras.', isCorrect: true },
        { id: 'c', label: 'Es una depresión costera del sur.', isCorrect: false },
        { id: 'd', label: 'Es una cordillera costera.', isCorrect: false },
      ], explanation: 'La Meseta Central es una gran altiplanicie interior delimitada por cordilleras como la Cantábrica, el Sistema Central y la Ibérica.' },
      { id: 'geo-relpen-q2', tier: 'standard', prompt: '¿Qué cadena montañosa forma parte del relieve peninsular y delimita la Meseta por el norte?', options: [
        { id: 'a', label: 'Cordillera de los Andes', isCorrect: false },
        { id: 'b', label: 'Cordillera Cantábrica', isCorrect: true },
        { id: 'c', label: 'Montes Urales', isCorrect: false },
        { id: 'd', label: 'Cárpatos', isCorrect: false },
      ], explanation: 'La Cordillera Cantábrica se sitúa al norte de la Meseta y la separa del litoral cantábrico.' },
      { id: 'geo-relpen-q3', tier: 'standard', prompt: '¿Qué unidad morfoestructural forma la mayor parte del interior de España?', options: [
        { id: 'a', label: 'Meseta Central', isCorrect: true },
        { id: 'b', label: 'Cordillera Cantábrica', isCorrect: false },
        { id: 'c', label: 'Sistema Ibérico', isCorrect: false },
        { id: 'd', label: 'Depresión del Ebro', isCorrect: false },
      ], explanation: 'La Meseta Central es la gran plataforma interior que domina el interior peninsular.' },
      { id: 'geo-relpen-q4', tier: 'standard', prompt: '¿Qué unidad morfoestructural delimita la Meseta por el norte?', options: [
        { id: 'a', label: 'Cordillera Cantábrica', isCorrect: true },
        { id: 'b', label: 'Sierra Morena', isCorrect: false },
        { id: 'c', label: 'Sierra Nevada', isCorrect: false },
        { id: 'd', label: 'Cordillera Ibérica', isCorrect: false },
      ], explanation: 'La Cordillera Cantábrica se sitúa al norte de la Meseta, delimitándola por ese borde.' },
      { id: 'geo-relpen-q5', tier: 'standard', prompt: '¿Qué unidad morfoestructural se sitúa al este de la Meseta y forma parte del sistema montañoso de la España oriental?', options: [
        { id: 'a', label: 'Depresión del Guadalquivir', isCorrect: false },
        { id: 'b', label: 'Sistema Ibérico', isCorrect: true },
        { id: 'c', label: 'Depresión de la Mancha', isCorrect: false },
        { id: 'd', label: 'Sierra de Grazalema', isCorrect: false },
      ], explanation: 'El Sistema Ibérico está al este de la Meseta y constituye una parte significativa del relieve oriental.' },
      { id: 'geo-relpen-q6', tier: 'standard', prompt: 'Entre las unidades morfoestructurales peninsulares, ¿qué depresión se localiza en la franja oriental y está asociada al valle del río Ebro?', options: [
        { id: 'a', label: 'Depresión del Ebro', isCorrect: true },
        { id: 'b', label: 'Depresión de la Mancha', isCorrect: false },
        { id: 'c', label: 'Depresión del Guadalquivir', isCorrect: false },
        { id: 'd', label: 'Depresión del Duero', isCorrect: false },
      ], explanation: 'La depresión del Ebro es una gran cuenca al este de la Meseta vinculada al valle del río Ebro.' },
      { id: 'geo-relpen-q7', tier: 'standard', prompt: '¿Qué unidad morfoestructural separa la Meseta Norte de la Meseta Sur?', options: [
        { id: 'a', label: 'Cordillera Cantábrica', isCorrect: false },
        { id: 'b', label: 'Sistema Central', isCorrect: true },
        { id: 'c', label: 'Cordillera Ibérica', isCorrect: false },
        { id: 'd', label: 'Sierra Morena', isCorrect: false },
      ], explanation: 'El Sistema Central actúa como divisoria entre las dos mitades de la Meseta.' },
      { id: 'geo-relpen-q8', tier: 'standard', prompt: '¿Cuál es la unidad situada en el borde oriental de la Península que conecta con Aragón y Cataluña?', options: [
        { id: 'a', label: 'Cordillera Cantábrica', isCorrect: false },
        { id: 'b', label: 'Sistema Central', isCorrect: false },
        { id: 'c', label: 'Cordillera Ibérica', isCorrect: true },
        { id: 'd', label: 'Cordillera Bética', isCorrect: false },
      ], explanation: 'La Cordillera Ibérica condiciona la transición entre Meseta y el relieve oriental.' },
      { id: 'geo-relpen-q9', tier: 'standard', prompt: '¿Qué unidad morfoestructural constituye la columna vertebral del sur peninsular (sierras Bética y Subbética)?', options: [
        { id: 'a', label: 'Cordillera Cantábrica', isCorrect: false },
        { id: 'b', label: 'Sistema Central', isCorrect: false },
        { id: 'c', label: 'Cordillera Ibérica', isCorrect: false },
        { id: 'd', label: 'Cordillera Bética', isCorrect: true },
      ], explanation: 'La Cordillera Bética es la unidad montañosa dominante en el sur.' },
      { id: 'geo-relpen-q10', tier: 'standard', prompt: 'La transición entre el Sistema Central y cordilleras periféricas se produce principalmente a través de…', options: [
        { id: 'a', label: 'un eje de fallas', isCorrect: true },
        { id: 'b', label: 'un cinturón volcánico', isCorrect: false },
        { id: 'c', label: 'una llanura aluvial', isCorrect: false },
        { id: 'd', label: 'un desierto', isCorrect: false },
      ], explanation: 'La estructura tectónica y fallas condicionan los contactos entre unidades.' },
    ] },
    { id: 'relieve-insular', title: 'El relieve insular: Canarias y Baleares.', questions: [
      { id: 'geo-relins-q1', tier: 'standard', prompt: '¿Qué tipo de relieve predomina en las Islas Canarias?', options: [
        { id: 'a', label: 'Islas volcánicas antiguas', isCorrect: false },
        { id: 'b', label: 'Islas coralinas', isCorrect: false },
        { id: 'c', label: 'Islas volcánicas jóvenes', isCorrect: true },
        { id: 'd', label: 'Islas de origen calcáreo', isCorrect: false },
      ], explanation: 'Las Canarias son archipiélagos volcánicos con volcanismo activo; predominan relieves jóvenes.' },
      { id: 'geo-relins-q2', tier: 'standard', prompt: 'Las Baleares se caracterizan principalmente por…', options: [
        { id: 'a', label: 'Gran presencia de volcanes', isCorrect: false },
        { id: 'b', label: 'Rocas calcáreas y estructuras kársticas', isCorrect: true },
        { id: 'c', label: 'Montañas de roca ígnea oscura', isCorrect: false },
        { id: 'd', label: 'Desiertos de roca', isCorrect: false },
      ], explanation: 'Las Baleares están formadas mayoritariamente por rocas calcáreas con karstificación.' },
      { id: 'geo-relins-q3', tier: 'standard', prompt: 'El Teide es un volcán situado en la isla de:', options: [
        { id: 'a', label: 'La Palma', isCorrect: false },
        { id: 'b', label: 'Tenerife', isCorrect: true },
        { id: 'c', label: 'Gran Canaria', isCorrect: false },
        { id: 'd', label: 'La Gomera', isCorrect: false },
      ], explanation: 'El Teide es el volcán más alto de España, situado en Tenerife.' },
      { id: 'geo-relins-q4', tier: 'standard', prompt: '¿Cuál es la isla más alta de Canarias?', options: [
        { id: 'a', label: 'Gran Canaria', isCorrect: false },
        { id: 'b', label: 'Tenerife', isCorrect: true },
        { id: 'c', label: 'Fuerteventura', isCorrect: false },
        { id: 'd', label: 'La Palma', isCorrect: false },
      ], explanation: 'Tenerife alberga el Teide, la máxima altitud de España.' },
      { id: 'geo-relins-q5', tier: 'standard', prompt: '¿En qué mar se encuentran las Baleares?', options: [
        { id: 'a', label: 'Mar Cantábrico', isCorrect: false },
        { id: 'b', label: 'Mar Mediterráneo', isCorrect: true },
        { id: 'c', label: 'Océano Atlántico', isCorrect: false },
        { id: 'd', label: 'Mar Rojo', isCorrect: false },
      ], explanation: 'Las Baleares se localizan en el mar Mediterráneo.' },
      { id: 'geo-relins-q6', tier: 'standard', prompt: 'La formación de las Baleares se debe principalmente a…', options: [
        { id: 'a', label: 'Actividad volcánica reciente', isCorrect: false },
        { id: 'b', label: 'Levantamiento tectónico y erosión marina', isCorrect: true },
        { id: 'c', label: 'Glaciación holocena', isCorrect: false },
        { id: 'd', label: 'Grandes ríos actuales', isCorrect: false },
      ], explanation: 'Procesos tectónicos y marinos de larga duración.' },
    ] },
    { id: 'climas-espana', title: 'Climas de España: rasgos y dominios climáticos.', questions: [
        {
          id: 'geo-clima-q1',
          tier: 'standard',
          prompt: '¿Qué rasgo caracteriza al clima mediterráneo en España?',
          options: [
            { id: 'a', label: 'Invierno suave y veranos secos', isCorrect: true },
            { id: 'b', label: 'Invierno frío y veranos lluviosos', isCorrect: false },
            { id: 'c', label: 'Uniforme todo el año', isCorrect: false },
            { id: 'd', label: 'Inviernos fríos y veranos cálidos', isCorrect: false },
          ],
          explanation: 'El clima mediterráneo se caracteriza por inviernos suaves y veranos secos, con variaciones regionales.'
        },
        {
          id: 'geo-clima-q2',
          tier: 'standard',
          prompt: 'En la España atlántica, el clima se caracteriza por',
          options: [
            { id: 'a', label: 'sequía estival', isCorrect: false },
            { id: 'b', label: 'lluvia abundante durante todo el año', isCorrect: true },
            { id: 'c', label: 'inviernos extremos', isCorrect: false },
            { id: 'd', label: 'veranos muy calurosos', isCorrect: false },
          ],
          explanation: 'La España atlántica recibe precipitaciones relativamente abundantes durante todo el año, con inviernos frescos y veranos suaves.'
        },
        {
          id: 'geo-clima-q3',
          tier: 'standard',
          prompt: '¿Qué dominio climático predomina en Canarias?',
          options: [
            { id: 'a', label: 'Mediterráneo', isCorrect: false },
            { id: 'b', label: 'Subtropical árido', isCorrect: true },
            { id: 'c', label: 'Continental húmedo', isCorrect: false },
            { id: 'd', label: 'Tropical húmedo', isCorrect: false },
          ],
          explanation: 'Canarias presenta un clima subtropical árido, con temperaturas suaves anualmente y variaciones según la altitud.'
        },
        {
          id: 'geo-clima-q4',
          tier: 'standard',
          prompt: 'La Meseta suele presentar un clima interior de tipo Mediterráneo continental, con inviernos fríos y veranos calurosos.',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'No aplica', isCorrect: false },
            { id: 'd', label: 'Sin datos', isCorrect: false },
          ],
          explanation: 'La Meseta posee un régimen climático interior, con inviernos fríos y veranos muy calurosos, típico del Mediterráneo continental.'
        },
      { id: 'geo-clima-q1', tier: 'standard', prompt: '¿Qué dominio climático predomina en la costa mediterránea?', options: [
        { id: 'a', label: 'Oceánico', isCorrect: false },
        { id: 'b', label: 'Mediterráneo', isCorrect: true },
        { id: 'c', label: 'Continental', isCorrect: false },
        { id: 'd', label: 'Desértico', isCorrect: false },
      ], explanation: 'La franja costera mediterránea presenta clima mediterráneo (Csa/Csb).' },
      { id: 'geo-clima-q2', tier: 'standard', prompt: '¿Qué caracteriza el clima oceánico típico del norte de España?', options: [
        { id: 'a', label: 'Vientos cálidos', isCorrect: false },
        { id: 'b', label: 'Humedad elevada y lluvias constantes todo el año', isCorrect: true },
        { id: 'c', label: 'Sequía estival', isCorrect: false },
        { id: 'd', label: 'Desiertos', isCorrect: false },
      ], explanation: 'El clima oceánico se caracteriza por humedad y precipitaciones relativamente uniformes a lo largo del año.' },
      { id: 'geo-clima-q3', tier: 'standard', prompt: 'El clima continental típico de la Meseta se caracteriza por…', options: [
        { id: 'a', label: 'invierno suave', isCorrect: false },
        { id: 'b', label: 'veranos muy cálidos e inviernos fríos', isCorrect: true },
        { id: 'c', label: 'veranos fríos e inviernos suaves', isCorrect: false },
        { id: 'd', label: 'precipitaciones constantes todo el año', isCorrect: false },
      ], explanation: 'La Meseta presenta veranos cálidos e inviernos fríos, con precipitaciones moderadas.' },
      { id: 'geo-clima-q4', tier: 'standard', prompt: '¿Qué dominio climático se asocia al sur y este de España con veranos secos?', options: [
        { id: 'a', label: 'Clima oceánico', isCorrect: false },
        { id: 'b', label: 'Clima mediterráneo seco', isCorrect: true },
        { id: 'c', label: 'Clima continental', isCorrect: false },
        { id: 'd', label: 'Clima desértico', isCorrect: false },
      ], explanation: 'El Mediterráneo seco (subtipo Csa/Csb) es característico de estas áreas.' },
      { id: 'geo-clima-q5', tier: 'standard', prompt: '¿Qué influencia tienen los Pirineos en el clima de la vertiente norte de la península?', options: [
        { id: 'a', label: 'Provocan climas más cálidos en toda la península', isCorrect: false },
        { id: 'b', label: 'Contribuyen a lluvias abundantes en el norte y crean sombras pluviométricas en el sur', isCorrect: true },
        { id: 'c', label: 'No influyen en el clima', isCorrect: false },
        { id: 'd', label: 'Producen climas tropicales en la vertiente norte', isCorrect: false },
      ], explanation: 'Barrera orográfica que incrementa precipitaciones en el norte y sombrea al sur.' },
      { id: 'geo-clima-q6', tier: 'standard', prompt: '¿Qué tipología climática predomina en la franja atlántica del norte de España?', options: [
        { id: 'a', label: 'Continental', isCorrect: false },
        { id: 'b', label: 'Oceánico', isCorrect: true },
        { id: 'c', label: 'Desértico', isCorrect: false },
        { id: 'd', label: 'Tropical', isCorrect: false },
      ], explanation: 'La costa cantábrica y comunidades vecinas presentan un clima oceánico.' },
      { id: 'geo-clima-q7', tier: 'standard', prompt: '¿Qué factor explica la gran variación climática entre litoral e interior en España?', options: [
        { id: 'a', label: 'Latitud', isCorrect: false },
        { id: 'b', label: 'Elevación y relieve', isCorrect: true },
        { id: 'c', label: 'Actividad volcánica', isCorrect: false },
        { id: 'd', label: 'Corrientes marinas frías', isCorrect: false },
      ], explanation: 'La altitud y el relieve generan contrastes térmicos y pluviométricos.' },
      { id: 'geo-clima-q8', tier: 'standard', prompt: '¿Qué dominio climático predomina en la cornisa cantábrica?', options: [
        { id: 'a', label: 'Mediterráneo', isCorrect: false },
        { id: 'b', label: 'Oceánico', isCorrect: true },
        { id: 'c', label: 'Continental', isCorrect: false },
        { id: 'd', label: 'Desértico', isCorrect: false },
      ], explanation: 'Clima templado con lluvias abundantes por influencia atlántica.' },
      { id: 'geo-clima-q9', tier: 'standard', prompt: 'El clima mediterráneo interior se caracteriza por…', options: [
        { id: 'a', label: 'inviernos cálidos y veranos fríos', isCorrect: false },
        { id: 'b', label: 'inviernos suaves y veranos húmedos', isCorrect: false },
        { id: 'c', label: 'veranos calurosos, inviernos fríos y lluvias en otoño-primavera', isCorrect: true },
        { id: 'd', label: 'clima polar', isCorrect: false },
      ], explanation: 'Propio de áreas interiores con continentalidad marcada.' },
      { id: 'geo-clima-q10', tier: 'standard', prompt: '¿Qué dominio climático se extiende principalmente por Canarias?', options: [
        { id: 'a', label: 'Mediterráneo', isCorrect: false },
        { id: 'b', label: 'Oceánico', isCorrect: false },
        { id: 'c', label: 'Desértico subtropical', isCorrect: true },
        { id: 'd', label: 'Polar', isCorrect: false },
      ], explanation: 'Predominio de condiciones subtropicales áridas o semiáridas.' },
      { id: 'geo-clima-q11', tier: 'standard', prompt: '¿Qué región recibe mayor precipitación anual por influencia atlántica?', options: [
        { id: 'a', label: 'Andalucía', isCorrect: false },
        { id: 'b', label: 'Galicia y Cantabria', isCorrect: true },
        { id: 'c', label: 'Murcia', isCorrect: false },
        { id: 'd', label: 'Valencia', isCorrect: false },
      ], explanation: 'La fachada atlántica norte es la más lluviosa.' },
      { id: 'geo-clima-q12', tier: 'standard', prompt: 'En el interior peninsular, las amplitudes térmicas son…', options: [
        { id: 'a', label: 'bajas', isCorrect: false },
        { id: 'b', label: 'moderadas', isCorrect: false },
        { id: 'c', label: 'elevadas', isCorrect: true },
        { id: 'd', label: 'inexistentes', isCorrect: false },
      ], explanation: 'Grandes contrastes entre verano e invierno en la Meseta.' },
    ] },
    { id: 'aguas-cuencas', title: 'Las aguas y cuencas hidrográficas.', questions: [
        {
          id: 'geo-agua-q1',
          tier: 'standard',
          prompt: '¿En cuál mar desemboca la cuenca hidrográfica del Ebro?',
          options: [
            { id: 'a', label: 'Mar Cantábrico', isCorrect: false },
            { id: 'b', label: 'Mar Mediterráneo', isCorrect: true },
            { id: 'c', label: 'Océano Atlántico', isCorrect: false },
            { id: 'd', label: 'Mar Rojo', isCorrect: false },
          ],
          explanation: 'El Ebro desemboca en el mar Mediterráneo, formando un delta cercano a la desembocadura.'
        },
        {
          id: 'geo-agua-q2',
          tier: 'standard',
          prompt: 'El río Duero nace en la Meseta Norte y desemboca en',
          options: [
            { id: 'a', label: 'Atlántico', isCorrect: true },
            { id: 'b', label: 'Mediterráneo', isCorrect: false },
            { id: 'c', label: 'Mar Cantábrico', isCorrect: false },
            { id: 'd', label: 'Mar Adriático', isCorrect: false },
          ],
          explanation: 'El Duero nace en la Meseta Norte y desemboca en el océano Atlántico, principalmente en Portugal.'
        },
        {
          id: 'geo-agua-q3',
          tier: 'standard',
          prompt: 'La cuenca del Guadalquivir drena principalmente la región',
          options: [
            { id: 'a', label: 'Este', isCorrect: false },
            { id: 'b', label: 'Oeste', isCorrect: false },
            { id: 'c', label: 'Norte', isCorrect: false },
            { id: 'd', label: 'Sur', isCorrect: true },
          ],
          explanation: 'El Guadalquivir drena la vertiente atlántica del sur de la Península, en Andalucía.'
        },
        {
          id: 'geo-agua-q4',
          tier: 'standard',
          prompt: '¿Qué río forma un delta importante en el Mediterráneo?',
          options: [
            { id: 'a', label: 'Duero', isCorrect: false },
            { id: 'b', label: 'Ebro', isCorrect: true },
            { id: 'c', label: 'Tajo', isCorrect: false },
            { id: 'd', label: 'Guadalquivir', isCorrect: false },
          ],
          explanation: 'El río Ebro forma uno de los deltas más destacados del Mediterráneo español.'
        },
      { id: 'geo-aguas-q1', tier: 'standard', prompt: '¿En cuál cuenca hidrográfica se agrupa la mayor parte de la población y se dirige al Atlántico?', options: [
        { id: 'a', label: 'Duero', isCorrect: true },
        { id: 'b', label: 'Ebro', isCorrect: false },
        { id: 'c', label: 'Guadalquivir', isCorrect: false },
        { id: 'd', label: 'Júcar', isCorrect: false },
      ], explanation: 'La cuenca del Duero cubre una amplia área del norte y desemboca en el Atlántico.' },
      { id: 'geo-aguas-q2', tier: 'standard', prompt: '¿En qué mar desemboca el río Ebro?', options: [
        { id: 'a', label: 'Atlántico', isCorrect: false },
        { id: 'b', label: 'Mar Cantábrico', isCorrect: false },
        { id: 'c', label: 'Mar Mediterráneo', isCorrect: true },
        { id: 'd', label: 'Mar Rojo', isCorrect: false },
      ], explanation: 'El Ebro desemboca en el Mediterráneo, cerca de Tortosa.' },
      { id: 'geo-aguas-q3', tier: 'standard', prompt: 'La cuenca hidrográfica del Guadalquivir discurre principalmente por…', options: [
        { id: 'a', label: 'Andalucía y parte de Extremadura', isCorrect: true },
        { id: 'b', label: 'Cataluña', isCorrect: false },
        { id: 'c', label: 'Galicia', isCorrect: false },
        { id: 'd', label: 'Navarra', isCorrect: false },
      ], explanation: 'El Guadalquivir discurre principalmente por Andalucía, con aportes en Extremadura.' },
      { id: 'geo-aguas-q4', tier: 'standard', prompt: '¿Qué río mediterráneo desemboca en la costa de Valencia?', options: [
        { id: 'a', label: 'Guadalquivir', isCorrect: false },
        { id: 'b', label: 'Júcar', isCorrect: true },
        { id: 'c', label: 'Duero', isCorrect: false },
        { id: 'd', label: 'Tajo', isCorrect: false },
      ], explanation: 'El Júcar drena parte de la cuenca mediterránea y desemboca en la costa valenciana.' },
      { id: 'geo-aguas-q5', tier: 'standard', prompt: '¿Qué gran río forma un amplio delta en su desembocadura mediterránea?', options: [
        { id: 'a', label: 'Guadalquivir', isCorrect: false },
        { id: 'b', label: 'Guadiana', isCorrect: false },
        { id: 'c', label: 'Ebro', isCorrect: true },
        { id: 'd', label: 'Júcar', isCorrect: false },
      ], explanation: 'El Ebro forma un destacado delta en el Mediterráneo (Delta del Ebro).' },
    ] },
    { id: 'paisajes-naturales', title: 'Los paisajes naturales de España: vegetación y suelos.', questions: [
        {
          id: 'geo-pais-q1',
          tier: 'standard',
          prompt: '¿Qué tipo de bosque es típico del Mediterráneo español?',
          options: [
            { id: 'a', label: 'Bosques boreales', isCorrect: false },
            { id: 'b', label: 'Bosque mediterráneo de encinas y alcornoques', isCorrect: true },
            { id: 'c', label: 'Selva lluviosa', isCorrect: false },
            { id: 'd', label: 'Taiga', isCorrect: false },
          ],
          explanation: 'El bosque mediterráneo se caracteriza por encinas y alcornoques, adaptados a sequía estival y inviernos suaves.'
        },
        {
          id: 'geo-pais-q2',
          tier: 'standard',
          prompt: 'En zonas cálidas y secas del sur de España predominan los suelos calcáreos, conocidos como calcisoles.',
          options: [
            { id: 'a', label: 'Aluviales', isCorrect: false },
            { id: 'b', label: 'Calcisoles', isCorrect: true },
            { id: 'c', label: 'Organomóficos', isCorrect: false },
            { id: 'd', label: 'Podzoles', isCorrect: false },
          ],
          explanation: 'Los calcisoles son suelos calcáreos comunes en zonas cálidas y secas, con perfil calcáreo característico.'
        },
        {
          id: 'geo-pais-q3',
          tier: 'standard',
          prompt: '¿Qué vegetación domina en las montañas de la España peninsular por su altitud?',
          options: [
            { id: 'a', label: 'Bosques mediterráneos', isCorrect: false },
            { id: 'b', label: 'Prados alpinos', isCorrect: true },
            { id: 'c', label: 'Desiertos', isCorrect: false },
            { id: 'd', label: 'Selvas tropicales', isCorrect: false },
          ],
          explanation: 'A mayores altitudes predomina la vegetación de prados y bloques alpinos, propia de zonas montañosas.'
        },
      { id: 'geo-pais-q1', tier: 'standard', prompt: '¿Qué tipo de vegetación domina principalmente en el bosque mediterráneo?', options: [
        { id: 'a', label: 'Bosques boreales', isCorrect: false },
        { id: 'b', label: 'Matorral y encinas', isCorrect: true },
        { id: 'c', label: 'Selvas tropicales', isCorrect: false },
        { id: 'd', label: 'Desiertos', isCorrect: false },
      ], explanation: 'El bosque mediterráneo se caracteriza por matorral y encinas/carrascas.' },
      { id: 'geo-pais-q2', tier: 'standard', prompt: '¿Qué tipo de suelo es típico de las zonas mediterráneas secas?', options: [
        { id: 'a', label: 'Suelos calcáreos', isCorrect: true },
        { id: 'b', label: 'Suelos ácidos profundos', isCorrect: false },
        { id: 'c', label: 'Suelos salinos exclusivamente', isCorrect: false },
        { id: 'd', label: 'Suelos volcánicos', isCorrect: false },
      ], explanation: 'Las áreas mediterráneas presentan suelos calcáreos (calcisoles) en muchos casos.' },
      { id: 'geo-pais-q3', tier: 'standard', prompt: 'La vegetación de montaña del norte se caracteriza principalmente por…', options: [
        { id: 'a', label: 'Bosques mediterráneos de encina', isCorrect: false },
        { id: 'b', label: 'Bosques atlánticos de robles y hayas', isCorrect: true },
        { id: 'c', label: 'Desiertos alpinos', isCorrect: false },
        { id: 'd', label: 'Sabana tropical', isCorrect: false },
      ], explanation: 'En el norte, la vegetación se orienta a bosques atlánticos con robles y hayas.' },
      { id: 'geo-pais-q4', tier: 'standard', prompt: '¿Qué tipo de vegetación domina en la mitad norte con robles y hayas?', options: [
        { id: 'a', label: 'Bosques mediterráneos', isCorrect: false },
        { id: 'b', label: 'Bosques boreales', isCorrect: false },
        { id: 'c', label: 'Bosques atlánticos húmedos', isCorrect: true },
        { id: 'd', label: 'Praderas', isCorrect: false },
      ], explanation: 'Predominan formaciones de clima templado húmedo con frondosas.' },
      { id: 'geo-pais-q5', tier: 'standard', prompt: '¿Qué tipo de suelo favorece viñedo y olivar en áreas mediterráneas?', options: [
        { id: 'a', label: 'Calcáreo-arenoso', isCorrect: false },
        { id: 'b', label: 'Arcilloso', isCorrect: false },
        { id: 'c', label: 'Laterítico', isCorrect: false },
        { id: 'd', label: 'Calcáreo-arcilloso', isCorrect: true },
      ], explanation: 'Suelos calizos con fracciones arcillosas son favorables a estos cultivos.' },
    ] },

    // La población
    { id: 'poblacion-evolucion', title: 'Evolución de la población española.', questions: [
        {
          id: 'geo-pob-q1',
          tier: 'standard',
          prompt: '¿Qué tendencia describe mejor la evolución de la población española desde los años 60 hasta la actualidad?',
          options: [
            { id: 'a', label: 'Crecimiento constante sin fluctuaciones', isCorrect: false },
            { id: 'b', label: 'Población joven en aumento y alta natalidad', isCorrect: false },
            { id: 'c', label: 'Envejecimiento progresivo y baja natalidad', isCorrect: true },
            { id: 'd', label: 'Inmigración neta cero', isCorrect: false },
          ],
          explanation: 'La población española ha envejecido progresivamente y la natalidad se mantiene baja en buena parte del siglo XXI.'
        },
        {
          id: 'geo-pob-q2',
          tier: 'standard',
          prompt: 'La distribución de la población en España es mayoritariamente',
          options: [
            { id: 'a', label: 'concentrada en núcleos rurales', isCorrect: false },
            { id: 'b', label: 'en la Sierra Bética', isCorrect: false },
            { id: 'c', label: 'concentrada en ciudades y áreas metropolitanas de la fachada costera y grandes ejes de comunicación', isCorrect: true },
            { id: 'd', label: 'uniformemente repartida', isCorrect: false },
          ],
          explanation: 'La población se concentra especialmente en áreas de costa y grandes ciudades, siguiendo los ejes de comunicación y la oferta de empleo.'
        },
        {
          id: 'geo-pob-q3',
          tier: 'standard',
          prompt: 'La población activa en España se concentra principalmente en',
          options: [
            { id: 'a', label: 'zonas rurales', isCorrect: false },
            { id: 'b', label: 'áreas urbanas e industriales', isCorrect: true },
            { id: 'c', label: 'latitudes altas', isCorrect: false },
            { id: 'd', label: 'islas', isCorrect: false },
          ],
          explanation: 'La actividad económica y la población activa se concentran en áreas urbanas y en nodos industriales.'
        },
        {
          id: 'geo-pob-q4',
          tier: 'standard',
          prompt: 'El proceso de envejecimiento de la población se refleja en un aumento de',
          options: [
            { id: 'a', label: 'la tasa de natalidad', isCorrect: false },
            { id: 'b', label: 'la esperanza de vida y el porcentaje de mayores de 65 años', isCorrect: true },
            { id: 'c', label: 'la migración neta', isCorrect: false },
            { id: 'd', label: 'la población infantil', isCorrect: false },
          ],
          explanation: 'El envejecimiento demográfico se manifiesta por mayor esperanza de vida y un incremento de la población de 65 años o más.'
        },
        {
          id: 'geo-pob-q5',
          tier: 'standard',
          prompt: 'La densidad de población tiende a concentrarse principalmente en',
          options: [
            { id: 'a', label: 'zonas interiores', isCorrect: false },
            { id: 'b', label: 'zonas de costa y grandes ciudades', isCorrect: true },
            { id: 'c', label: 'montañas', isCorrect: false },
            { id: 'd', label: 'desiertos', isCorrect: false },
          ],
          explanation: 'La mayor concentración de población se registra en la fachada costera y en las grandes áreas urbanas.'
        },
        {
          id: 'geo-pob-q6',
          tier: 'standard',
          prompt: 'Movimientos migratorios internos y externos en las últimas décadas se caracterizan por',
          options: [
            { id: 'a', label: 'salida masiva del país hacia el exterior', isCorrect: false },
            { id: 'b', label: 'migración neta positiva en polos y crecimiento de ciudades, junto a flujos internos', isCorrect: true },
            { id: 'c', label: 'cero', isCorrect: false },
            { id: 'd', label: 'todos los movimientos igualitarios', isCorrect: false },
          ],
          explanation: 'Se observan flujos de inmigración y movimientos internos hacia ciudades, generando dinamismo demográfico en ciertos polos.'
        },
      { id: 'geo-pob-ev-q1', tier: 'standard', prompt: '¿Qué factor principal explica el fuerte crecimiento de la población española en la segunda mitad del siglo XX?', options: [
        { id: 'a', label: 'Migración externa masiva', isCorrect: false },
        { id: 'b', label: 'Alta natalidad y reducción de la mortalidad', isCorrect: true },
        { id: 'c', label: 'Desempleo extremo', isCorrect: false },
        { id: 'd', label: 'Aislamiento internacional', isCorrect: false },
      ], explanation: 'Crecimiento natural por baja mortalidad y altas tasas de natalidad.' },
    ] },
    { id: 'poblacion-distribucion', title: 'Distribución espacial y densidad.', questions: [
      { id: 'geo-pob-dist-q1', tier: 'standard', prompt: 'La distribución espacial de la población española está fuertemente concentrada en…', options: [
        { id: 'a', label: 'zonas rurales interiores', isCorrect: false },
        { id: 'b', label: 'áreas urbanas y costeras', isCorrect: true },
        { id: 'c', label: 'zonas montañosas aisladas', isCorrect: false },
        { id: 'd', label: 'zonas desérticas', isCorrect: false },
      ], explanation: 'Mayor concentración en ciudades y áreas costeras.' },
      { id: 'geo-pob-dist-q2', tier: 'standard', prompt: 'La densidad de población en España es mayor en…', options: [
        { id: 'a', label: 'la Castilla profunda', isCorrect: false },
        { id: 'b', label: 'la costa mediterránea y en las grandes ciudades', isCorrect: true },
        { id: 'c', label: 'las zonas desérticas del sureste', isCorrect: false },
        { id: 'd', label: 'las sierras del interior', isCorrect: false },
      ], explanation: 'Alta densidad en el litoral mediterráneo y en áreas metropolitanas.' },
      { id: 'geo-pob-dist-q3', tier: 'standard', prompt: 'La menor densidad de población se observa en…', options: [
        { id: 'a', label: 'Madrid', isCorrect: false },
        { id: 'b', label: 'Cataluña', isCorrect: false },
        { id: 'c', label: 'Castilla y León', isCorrect: true },
        { id: 'd', label: 'Islas Canarias', isCorrect: false },
      ], explanation: 'Grandes áreas rurales del interior presentan menor densidad.' },
    ] },
    { id: 'poblacion-migraciones', title: 'Movimientos migratorios internos y externos.', questions: [
      { id: 'geo-pob-mig-q1', tier: 'standard', prompt: 'Movimientos migratorios internos y externos: España ha recibido flujos migratorios principalmente…', options: [
        { id: 'a', label: 'desde el norte hacia el sur', isCorrect: false },
        { id: 'b', label: 'de Europa y de otros continentes hacia ciudades españolas', isCorrect: true },
        { id: 'c', label: 'hacia zonas rurales aisladas', isCorrect: false },
        { id: 'd', label: 'no ha recibido migración externa', isCorrect: false },
      ], explanation: 'La inmigración reciente se concentra en áreas urbanas.' },
      { id: 'geo-pob-mig-q2', tier: 'standard', prompt: '¿Qué fenómeno describe el paso de población desde áreas rurales a grandes ciudades?', options: [
        { id: 'a', label: 'Emigración rural al exterior', isCorrect: false },
        { id: 'b', label: 'Inmigración masiva internacional', isCorrect: false },
        { id: 'c', label: 'Migración interna hacia ciudades', isCorrect: true },
        { id: 'd', label: 'Estabilización demográfica', isCorrect: false },
      ], explanation: 'La migración interna ha impulsado el crecimiento urbano.' },
    ] },
    { id: 'poblacion-estructura', title: 'Estructura de la población: edad, sexo y actividad.', questions: [
      { id: 'geo-pob-est-q1', tier: 'standard', prompt: 'La estructura de la población por edad en España se caracteriza por…', options: [
        { id: 'a', label: 'una población joven en expansión', isCorrect: false },
        { id: 'b', label: 'un envejecimiento progresivo', isCorrect: true },
        { id: 'c', label: 'una población extremadamente juvenil', isCorrect: false },
        { id: 'd', label: 'una población inmadura sin cambios', isCorrect: false },
      ], explanation: 'Proceso de envejecimiento demográfico con mayor proporción de mayores.' },
      { id: 'geo-pob-est-q2', tier: 'standard', prompt: 'La distribución por sexo en la población española tiende a mostrar…', options: [
        { id: 'a', label: 'un dominio masculino en todas las edades', isCorrect: false },
        { id: 'b', label: 'un superávit femenino en edades avanzadas', isCorrect: true },
        { id: 'c', label: 'paridad exacta en todas las franjas', isCorrect: false },
        { id: 'd', label: 'predominio masculino en jóvenes', isCorrect: false },
      ], explanation: 'Mayor supervivencia femenina a edades avanzadas.' },
      { id: 'geo-pob-est-q3', tier: 'standard', prompt: 'El envejecimiento de la población tiene consecuencias claras en…', options: [
        { id: 'a', label: 'menos presión en el sistema de pensiones', isCorrect: false },
        { id: 'b', label: 'mayor demanda de servicios sanitarios y cuidados', isCorrect: true },
        { id: 'c', label: 'disminución de la esperanza de vida', isCorrect: false },
        { id: 'd', label: 'crecimiento acelerado de la natalidad', isCorrect: false },
      ], explanation: 'Aumenta la demanda de sanidad y servicios sociales.' },
      { id: 'geo-pob-est-q4', tier: 'standard', prompt: '¿Qué sector ha ganado mayor peso en la economía española en las últimas décadas?', options: [
        { id: 'a', label: 'Servicios', isCorrect: true },
        { id: 'b', label: 'Primario', isCorrect: false },
        { id: 'c', label: 'Sector secundario', isCorrect: false },
        { id: 'd', label: 'Cuaternario', isCorrect: false },
      ], explanation: 'El sector servicios ha crecido y concentra empleo y PIB.' },
      { id: 'geo-pob-est-q5', tier: 'standard', prompt: 'La población activa en España (20-64) se concentra principalmente en…', options: [
        { id: 'a', label: '0-14', isCorrect: false },
        { id: 'b', label: '15-24', isCorrect: false },
        { id: 'c', label: '25-54', isCorrect: true },
        { id: 'd', label: '55-64', isCorrect: false },
      ], explanation: 'La mayor parte de la población activa está entre 25 y 54 años.' },
      { id: 'geo-pob-est-q6', tier: 'standard', prompt: 'La pirámide de población española tiende a mostrar…', options: [
        { id: 'a', label: 'base amplia y cuello estrecho', isCorrect: false },
        { id: 'b', label: 'envejecimiento progresivo y estabilización de la natalidad', isCorrect: true },
        { id: 'c', label: 'crecimiento explosivo de jóvenes', isCorrect: false },
        { id: 'd', label: 'población joven muy numerosa', isCorrect: false },
      ], explanation: 'Tendencia al envejecimiento con natalidad baja.' },
    ] },

    // Espacio rural y sector primario
    { id: 'espacios-agrarios', title: 'Espacios agrarios: agricultura, ganadería y pesca.', questions: [
        {
          id: 'geo-agr-q1',
          tier: 'standard',
          prompt: 'En el espacio rural, la mecanización y el regadío han permitido',
          options: [
            { id: 'a', label: 'estancamiento', isCorrect: false },
            { id: 'b', label: 'mayor productividad', isCorrect: true },
            { id: 'c', label: 'abandono', isCorrect: false },
            { id: 'd', label: 'desertificación', isCorrect: false },
          ],
          explanation: 'La modernización agraria y el riego han aumentado la productividad y la diversificación de cultivos.'
        },
        {
          id: 'geo-agr-q2',
          tier: 'standard',
          prompt: 'La pesca en España se concentra principalmente en',
          options: [
            { id: 'a', label: 'ríos', isCorrect: false },
            { id: 'b', label: 'mares', isCorrect: true },
            { id: 'c', label: 'lagos', isCorrect: false },
            { id: 'd', label: 'interior', isCorrect: false },
          ],
          explanation: 'La pesca española está centrada en las grandes masas de agua costera y plataformas marinas.'
        },
        {
          id: 'geo-agr-q3',
          tier: 'standard',
          prompt: 'Un problema del medio rural es',
          options: [
            { id: 'a', label: 'despoblación y envejecimiento', isCorrect: true },
            { id: 'b', label: 'superpoblación', isCorrect: false },
            { id: 'c', label: 'crecimiento de bosques', isCorrect: false },
            { id: 'd', label: 'urbanización', isCorrect: false },
          ],
          explanation: 'La despoblación y el envejecimiento de las zonas rurales son desafíos recurrentes para el medio rural.'
        },
        {
          id: 'geo-agr-q4',
          tier: 'standard',
          prompt: 'La aparición de las cooperativas agrarias ha favorecido',
          options: [
            { id: 'a', label: 'mejora de la organización y comercialización', isCorrect: true },
            { id: 'b', label: 'desaparición de la agricultura', isCorrect: false },
            { id: 'c', label: 'destrucción del suelo', isCorrect: false },
            { id: 'd', label: 'ninguna de las anteriores', isCorrect: false },
          ],
          explanation: 'Las cooperativas agrarias impulsan organización, compra de insumos y comercialización de productos, mejorando la rentabilidad.'
        },
      { id: 'geo-rural-q1', tier: 'standard', prompt: 'La agricultura de secano mediterránea se caracteriza por…', options: [
        { id: 'a', label: 'riego intensivo', isCorrect: false },
        { id: 'b', label: 'uso limitado de riego con cultivos como olivo y viñedo', isCorrect: true },
        { id: 'c', label: 'ganadería', isCorrect: false },
        { id: 'd', label: 'industria', isCorrect: false },
      ], explanation: 'Secano con riegos limitados y cultivos típicos del Mediterráneo.' },
      { id: 'geo-rural-q2', tier: 'standard', prompt: 'La ganadería en España se concentra principalmente en…', options: [
        { id: 'a', label: 'zonas de dehesa extremeñas y andaluzas', isCorrect: true },
        { id: 'b', label: 'zonas urbanas', isCorrect: false },
        { id: 'c', label: 'zonas litorales de arroz', isCorrect: false },
        { id: 'd', label: 'zonas montañosas aisladas', isCorrect: false },
      ], explanation: 'Ganadería extensiva en dehesas de Extremadura y Andalucía.' },
      { id: 'geo-rural-q3', tier: 'standard', prompt: 'La pesca en España se concentra principalmente en…', options: [
        { id: 'a', label: 'la costa cantábrica', isCorrect: true },
        { id: 'b', label: 'la Meseta', isCorrect: false },
        { id: 'c', label: 'los ríos interiores', isCorrect: false },
        { id: 'd', label: 'las tierras altas de Galicia', isCorrect: false },
      ], explanation: 'Alta actividad pesquera en la costa cantábrica y otras zonas costeras.' },
      { id: 'geo-rural-q4', tier: 'standard', prompt: '¿Qué uso del suelo define la agricultura de secano de la Meseta?', options: [
        { id: 'a', label: 'Irrigación intensiva', isCorrect: false },
        { id: 'b', label: 'Secano tradicional', isCorrect: true },
        { id: 'c', label: 'Regadío intensivo', isCorrect: false },
        { id: 'd', label: 'Pastoreo exclusivo', isCorrect: false },
      ], explanation: 'Predomina el secano con cultivos extensivos.' },
      { id: 'geo-rural-q5', tier: 'standard', prompt: 'La ganadería extensiva se asocia principalmente a…', options: [
        { id: 'a', label: 'zonas de montaña y dehesas', isCorrect: true },
        { id: 'b', label: 'zonas urbanas', isCorrect: false },
        { id: 'c', label: 'costas turísticas', isCorrect: false },
        { id: 'd', label: 'tierras de regadío intensivo', isCorrect: false },
      ], explanation: 'Extensiva en dehesas y áreas de montaña.' },
      { id: 'geo-rural-q6', tier: 'standard', prompt: 'La pesca de litoral se practica sobre todo en…', options: [
        { id: 'a', label: 'Cantábrico y Mediterráneo', isCorrect: true },
        { id: 'b', label: 'Duero', isCorrect: false },
        { id: 'c', label: 'Ebro', isCorrect: false },
        { id: 'd', label: 'Guadalquivir', isCorrect: false },
      ], explanation: 'Las pesquerías de litoral destacan en Cantábrico y Mediterráneo.' },
    ] },
    { id: 'usos-sistemas-agrarios', title: 'Usos y sistemas agrarios tradicionales y actuales.', questions: [] },
    { id: 'rural-problemas-transformaciones', title: 'Problemas y transformaciones del medio rural.', questions: [] },

    // Industria
    { id: 'industrializacion', title: 'Proceso de industrialización en España.', questions: [
        {
          id: 'geo-ind-q1',
          tier: 'standard',
          prompt: 'La industrialización española se caracteriza por',
          options: [
            { id: 'a', label: 'desarrollo temprano, con gran peso de la industria pesada', isCorrect: false },
            { id: 'b', label: 'tardío con especialización en sectores manufactureros en Madrid y Cataluña', isCorrect: true },
            { id: 'c', label: 'sin cambios', isCorrect: false },
            { id: 'd', label: 'excesiva dependencia agraria', isCorrect: false },
          ],
          explanation: 'España se industrializó de forma relativamente tardía y concentró su crecimiento en sectores manufactureros, con capital humano en Madrid y Cataluña.'
        },
        {
          id: 'geo-ind-q2',
          tier: 'standard',
          prompt: 'Entre los factores de localización industrial se encuentran',
          options: [
            { id: 'a', label: 'cercanía a mercados y recursos energéticos', isCorrect: true },
            { id: 'b', label: 'lejanía de infraestructuras', isCorrect: false },
            { id: 'c', label: 'clima extremo', isCorrect: false },
            { id: 'd', label: 'aislamiento', isCorrect: false },
          ],
          explanation: 'La proximidad a mercados, recursos y buena conectividad favorece la localización de la industria.'
        },
        {
          id: 'geo-ind-q3',
          tier: 'standard',
          prompt: 'Entre los sectores industriales estratégicos en España se destacan',
          options: [
            { id: 'a', label: 'automoción, aeronáutica y química', isCorrect: true },
            { id: 'b', label: 'textil y alimentación', isCorrect: false },
            { id: 'c', label: 'pesca', isCorrect: false },
            { id: 'd', label: 'turismo', isCorrect: false },
          ],
          explanation: 'Automoción, aeronáutica y química son sectores industriales estratégicos por su peso en empleo y desarrollo tecnológico.'
        },
        {
          id: 'geo-ind-q4',
          tier: 'standard',
          prompt: 'La deslocalización industrial ha generado',
          options: [
            { id: 'a', label: 'equilibrios espaciales', isCorrect: false },
            { id: 'b', label: 'desequilibrios territoriales y concentración en áreas metropolitanas', isCorrect: true },
            { id: 'c', label: 'reducción de empleo', isCorrect: false },
            { id: 'd', label: 'ninguna', isCorrect: false },
          ],
          explanation: 'La deslocalización tiende a concentrar la actividad en ciertas zonas y generar desequilibrios territoriales.'
        },
        {
          id: 'geo-ind-q5',
          tier: 'standard',
          prompt: 'La industria automotriz en España se localiza principalmente en',
          options: [
            { id: 'a', label: 'Madrid y Cataluña', isCorrect: true },
            { id: 'b', label: 'Andalucía', isCorrect: false },
            { id: 'c', label: 'Galicia', isCorrect: false },
            { id: 'd', label: 'Castilla y León', isCorrect: false },
          ],
          explanation: 'La concentración de producción automotriz se sitúa principalmente en Madrid y Cataluña, con redes de proveedores y servicios.'
        },
        {
          id: 'geo-ind-q6',
          tier: 'standard',
          prompt: 'La política de especialización regional ha favorecido',
          options: [
            { id: 'a', label: 'uniformidad', isCorrect: false },
            { id: 'b', label: 'diversificación de sectores en distintas comunidades autónomas', isCorrect: true },
            { id: 'c', label: 'parálisis', isCorrect: false },
            { id: 'd', label: 'pérdida de peso tecnológico', isCorrect: false },
          ],
          explanation: 'La especialización regional ha permitido potenciar sectores diferentes en distintas comunidades, aumentando la producción y la cohesión territorial.'
        },
      { id: 'geo-ind-q1', tier: 'standard', prompt: 'El proceso de industrialización en España se inició principalmente en…', options: [
        { id: 'a', label: 'siglo XIX', isCorrect: false },
        { id: 'b', label: 'entre 1950 y 1970', isCorrect: true },
        { id: 'c', label: 'siglo XV', isCorrect: false },
        { id: 'd', label: 'siglo XXI', isCorrect: false },
      ], explanation: 'Industrialización moderna en la segunda mitad del siglo XX.' },
    ] },
    { id: 'localizacion-desequilibrios', title: 'Localización industrial y desequilibrios territoriales.', questions: [
      { id: 'geo-ind-loc-q1', tier: 'standard', prompt: '¿Qué factor condicionó tradicionalmente la localización de la industria en España?', options: [
        { id: 'a', label: 'cercanía a puertos y redes de transporte', isCorrect: true },
        { id: 'b', label: 'aislamiento de las ciudades', isCorrect: false },
        { id: 'c', label: 'escasez de mano de obra', isCorrect: false },
        { id: 'd', label: 'clima frío extremo', isCorrect: false },
      ], explanation: 'Puertos, ferrocarril y carreteras facilitaron logística y comercio.' },
      { id: 'geo-ind-loc-q2', tier: 'standard', prompt: 'La industria se ha históricamente concentrado en torno a…', options: [
        { id: 'a', label: 'ciudades de gran población y puertos', isCorrect: true },
        { id: 'b', label: 'zonas despobladas y aisladas', isCorrect: false },
        { id: 'c', label: 'zonas costeras únicamente', isCorrect: false },
        { id: 'd', label: 'zonas de interior sin infraestructuras', isCorrect: false },
      ], explanation: 'Concentración en grandes ciudades y áreas portuarias con conectividad.' },
      { id: 'geo-ind-loc-q3', tier: 'standard', prompt: 'La deslocalización industrial ha generado desequilibrios territoriales principalmente…', options: [
        { id: 'a', label: 'entre el norte y el sur del país', isCorrect: true },
        { id: 'b', label: 'entre islas y península', isCorrect: false },
        { id: 'c', label: 'solo en zonas montañosas', isCorrect: false },
        { id: 'd', label: 'sin efectos regionales', isCorrect: false },
      ], explanation: 'Acentúa disparidades regionales, especialmente norte-sur.' },
      { id: 'geo-ind-loc-q4', tier: 'standard', prompt: 'La reconversión industrial en España ha implicado…', options: [
        { id: 'a', label: 'cierre total de industrias', isCorrect: false },
        { id: 'b', label: 'innovación y diversificación hacia servicios', isCorrect: true },
        { id: 'c', label: 'abandono del sector manufacturero', isCorrect: false },
        { id: 'd', label: 'crecimiento sin cambios estructurales', isCorrect: false },
      ], explanation: 'Proceso de adaptación hacia un tejido más innovador y terciarizado.' },
      { id: 'geo-ind-loc-q5', tier: 'standard', prompt: '¿Qué factor ha contribuido a desequilibrios territoriales en la localización industrial?', options: [
        { id: 'a', label: 'clima', isCorrect: false },
        { id: 'b', label: 'infraestructura de transporte y nodos logísticos', isCorrect: true },
        { id: 'c', label: 'idioma', isCorrect: false },
        { id: 'd', label: 'altitud', isCorrect: false },
      ], explanation: 'La conectividad y nodos logísticos favorecen concentración industrial.' },
    ] },
    { id: 'sectores-estrategicos', title: 'Sectores industriales estratégicos.', questions: [
      { id: 'geo-ind-sec-q1', tier: 'standard', prompt: 'Uno de los sectores estratégicos de la industria española actual es…', options: [
        { id: 'a', label: 'Automoción, energía, químico y aeronáutica', isCorrect: true },
        { id: 'b', label: 'Textil y calzado únicamente', isCorrect: false },
        { id: 'c', label: 'Construcción sin ninguna tecnología', isCorrect: false },
        { id: 'd', label: 'Extractiva y carbón', isCorrect: false },
      ], explanation: 'Sectores tractores de la industria moderna española.' },
      { id: 'geo-ind-sec-q2', tier: 'standard', prompt: '¿Qué ciudad catalana concentra un parque industrial e I+D relevante en automoción?', options: [
        { id: 'a', label: 'Madrid', isCorrect: false },
        { id: 'b', label: 'Barcelona', isCorrect: true },
        { id: 'c', label: 'Valencia', isCorrect: false },
        { id: 'd', label: 'Sevilla', isCorrect: false },
      ], explanation: 'Barcelona es un polo industrial y tecnológico clave.' },
    ] },

    // Servicios
    { id: 'transporte-comunicaciones', title: 'El transporte y las comunicaciones en España.', questions: [
      { id: 'geo-serv-trans-q1', tier: 'standard', prompt: 'El transporte y las comunicaciones en España se han modernizado con…', options: [
        { id: 'a', label: 'AVE, redes portuarias modernas, autopistas y aeropuertos', isCorrect: true },
        { id: 'b', label: 'uso exclusivo de transporte fluvial antiguo', isCorrect: false },
        { id: 'c', label: 'eliminación de redes logísticas', isCorrect: false },
        { id: 'd', label: 'un sistema de carreteras pobre', isCorrect: false },
      ], explanation: 'España ha desarrollado AVE, puertos y aeropuertos modernos.' },
      { id: 'geo-serv-trans-q2', tier: 'standard', prompt: '¿Qué modo de transporte ha fomentado la movilidad de turistas entre ciudades españolas?', options: [
        { id: 'a', label: 'Autobuses', isCorrect: false },
        { id: 'b', label: 'Ferrocarril de alta velocidad (AVE)', isCorrect: true },
        { id: 'c', label: 'Avión entre ciudades cercanas', isCorrect: false },
        { id: 'd', label: 'Bicicleta', isCorrect: false },
      ], explanation: 'El AVE facilita desplazamientos rápidos entre núcleos urbanos.' },
    ] },
    { id: 'turismo', title: 'El turismo: evolución, impactos y tipologías.', questions: [
        {
          id: 'geo-tur-q1',
          tier: 'standard',
          prompt: 'El turismo de sol y playa es típico de',
          options: [
            { id: 'a', label: 'Pirineos', isCorrect: false },
            { id: 'b', label: 'Costa mediterránea', isCorrect: true },
            { id: 'c', label: 'Castilla y León', isCorrect: false },
            { id: 'd', label: 'Extremadura', isCorrect: false },
          ],
          explanation: 'El turismo de costa y playa es característico de la fachada mediterránea y zonas costeras.'
        },
        {
          id: 'geo-tur-q2',
          tier: 'standard',
          prompt: 'El turismo cultural se desarrolla principalmente en',
          options: [
            { id: 'a', label: 'zonas rurales', isCorrect: false },
            { id: 'b', label: 'ciudades con patrimonio y museos', isCorrect: true },
            { id: 'c', label: 'zonas industriales', isCorrect: false },
            { id: 'd', label: 'desiertos', isCorrect: false },
          ],
          explanation: 'El turismo cultural se concentra en ciudades y lugares con patrimonio, museos y centros históricos.'
        },
        {
          id: 'geo-tur-q3',
          tier: 'standard',
          prompt: 'Los impactos negativos del turismo pueden incluir',
          options: [
            { id: 'a', label: 'empleo', isCorrect: false },
            { id: 'b', label: 'degradación ambiental', isCorrect: true },
            { id: 'c', label: 'crecimiento económico', isCorrect: false },
            { id: 'd', label: 'mejora de infraestructuras', isCorrect: false },
          ],
          explanation: 'Aunque genera empleo y economía, puede conllevar degradación ambiental y presión sobre recursos si mal gestionado.'
        },
        {
          id: 'geo-tur-q4',
          tier: 'standard',
          prompt: 'El comercio exterior español se caracteriza por',
          options: [
            { id: 'a', label: 'déficit constante', isCorrect: false },
            { id: 'b', label: 'peso de exportaciones de bienes y servicios, especialmente turismo', isCorrect: true },
            { id: 'c', label: 'ausencia de servicios', isCorrect: false },
            { id: 'd', label: 'proteccionismo extremo', isCorrect: false },
          ],
          explanation: 'España combina exportaciones industriales y servicios (turismo) con importaciones, influyendo en su balanza comercial.'
        },
        {
          id: 'geo-tur-q5',
          tier: 'standard',
          prompt: 'El papel de las infraestructuras de transporte en los servicios se refleja en',
          options: [
            { id: 'a', label: 'reducción del turismo', isCorrect: false },
            { id: 'b', label: 'mejora de conectividad y distribución regional', isCorrect: true },
            { id: 'c', label: 'desigualdad geográfica extrema', isCorrect: false },
            { id: 'd', label: 'ninguna', isCorrect: false },
          ],
          explanation: 'Buenas infraestructuras facilitan la movilidad, la accesibilidad y la distribución de servicios, especialmente turismo y comercio.'
        },
      { id: 'geo-serv-tur-q1', tier: 'standard', prompt: 'El turismo en España abarca tipologías que incluyen…', options: [
        { id: 'a', label: 'turismo de sol y playa, turismo urbano y turismo de naturaleza', isCorrect: true },
        { id: 'b', label: 'solo turismo de sol y playa', isCorrect: false },
        { id: 'c', label: 'turismo espacial', isCorrect: false },
        { id: 'd', label: 'turismo agrícola', isCorrect: false },
      ], explanation: 'Amplia gama de tipologías turísticas en España.' },
      { id: 'geo-serv-tur-q2', tier: 'standard', prompt: 'Impactos del turismo masivo en España incluyen…', options: [
        { id: 'a', label: 'reducción de la presión sobre recursos', isCorrect: false },
        { id: 'b', label: 'presión sobre recursos, congestión y contaminación', isCorrect: true },
        { id: 'c', label: 'mejoras ambientales automáticas', isCorrect: false },
        { id: 'd', label: 'ausencia de empleo local', isCorrect: false },
      ], explanation: 'El turismo mal gestionado aumenta presión ambiental y urbana.' },
      { id: 'geo-serv-tur-q3', tier: 'standard', prompt: '¿Qué impacto económico del turismo es más significativo para España?', options: [
        { id: 'a', label: 'Degradación ambiental', isCorrect: false },
        { id: 'b', label: 'Ingresos de divisas y empleo', isCorrect: true },
        { id: 'c', label: 'Reducción de la población', isCorrect: false },
        { id: 'd', label: 'Desempleo estructural', isCorrect: false },
      ], explanation: 'Genera ingresos y empleo directos e indirectos.' },
      { id: 'geo-serv-tur-q4', tier: 'standard', prompt: '¿Qué caracteriza mejor la estacionalidad turística en España?', options: [
        { id: 'a', label: 'Todo el año', isCorrect: false },
        { id: 'b', label: 'Mayor demanda en verano', isCorrect: true },
        { id: 'c', label: 'Solo invierno', isCorrect: false },
        { id: 'd', label: 'Sin variación estacional', isCorrect: false },
      ], explanation: 'Pico estival por clima y calendario vacacional.' },
    ] },
    { id: 'comercio', title: 'El comercio: interior y exterior.', questions: [
      { id: 'geo-serv-com-q1', tier: 'standard', prompt: 'El comercio interior y exterior en España se caracteriza por…', options: [
        { id: 'a', label: 'un cierre progresivo de mercados', isCorrect: false },
        { id: 'b', label: 'apertura comercial y diversificación de mercados', isCorrect: true },
        { id: 'c', label: 'aislamiento comercial', isCorrect: false },
        { id: 'd', label: 'reducción de la producción exportable', isCorrect: false },
      ], explanation: 'Apertura y diversificación de mercados internacionales.' },
      { id: 'geo-serv-com-q2', tier: 'standard', prompt: 'La red de distribución comercial en España se apoya principalmente en…', options: [
        { id: 'a', label: 'gran distribución, centros comerciales y redes logísticas modernas', isCorrect: true },
        { id: 'b', label: 'tiendas de barrio sin grandes cadenas', isCorrect: false },
        { id: 'c', label: 'venta exclusiva en mercados tradicionales', isCorrect: false },
        { id: 'd', label: 'ventas directas sin canales de distribución', isCorrect: false },
      ], explanation: 'Distribución moderna y cadenas comerciales extensas.' },
      { id: 'geo-serv-com-q3', tier: 'standard', prompt: 'Entre las exportaciones españolas destacan…', options: [
        { id: 'a', label: 'solo materias primas', isCorrect: false },
        { id: 'b', label: 'automoción y productos agroalimentarios', isCorrect: true },
        { id: 'c', label: 'exclusivamente servicios', isCorrect: false },
        { id: 'd', label: 'textil como único rubro', isCorrect: false },
      ], explanation: 'Automoción y agroalimentario son pilares exportadores.' },
    ] },

    // Espacio urbano
    { id: 'urbanizacion', title: 'El proceso de urbanización en España.', questions: [
      { id: 'geo-urb-urb-q1', tier: 'standard', prompt: 'El proceso de urbanización en España se acelera principalmente desde…', options: [
        { id: 'a', label: 'años 60-70 del siglo XX', isCorrect: true },
        { id: 'b', label: 'siglo XVIII', isCorrect: false },
        { id: 'c', label: 'siglo XIX', isCorrect: false },
        { id: 'd', label: 'siglo XXI', isCorrect: false },
      ], explanation: 'Aceleración urbana en la segunda mitad del siglo XX.' },
    ] },
    { id: 'jerarquia-red', title: 'Jerarquía urbana y red de ciudades.', questions: [
        {
          id: 'geo-urb-q1',
          tier: 'standard',
          prompt: 'La jerarquía urbana se refiere a la distribución de ciudades en función de su tamaño y funciones. ¿Qué ciudades están en la cúspide de la jerarquía?',
          options: [
            { id: 'a', label: 'ciudades medias', isCorrect: false },
            { id: 'b', label: 'grandes ciudades y metrópolis', isCorrect: true },
            { id: 'c', label: 'pueblos', isCorrect: false },
            { id: 'd', label: 'villas', isCorrect: false },
          ],
          explanation: 'La jerarquía urbana sitúa a las grandes ciudades y metrópolis en la cúspide por su peso demográfico, económico y de servicios.'
        },
        {
          id: 'geo-urb-q2',
          tier: 'standard',
          prompt: 'La morfología urbana describe',
          options: [
            { id: 'a', label: 'número de habitantes', isCorrect: false },
            { id: 'b', label: 'forma y distribución de calles y barrios', isCorrect: true },
            { id: 'c', label: 'clima', isCorrect: false },
            { id: 'd', label: 'topografía', isCorrect: false },
          ],
          explanation: 'La morfología urbana estudia la forma de la ciudad, la distribución de usos del suelo y la organización de calles.'
        },
        {
          id: 'geo-urb-q3',
          tier: 'standard',
          prompt: 'Uno de los problemas de las ciudades españolas actuales es',
          options: [
            { id: 'a', label: 'falta de población', isCorrect: false },
            { id: 'b', label: 'congestión del tráfico y contaminación', isCorrect: true },
            { id: 'c', label: 'exceso de vivienda barata', isCorrect: false },
            { id: 'd', label: 'ausencia de infraestructuras', isCorrect: false },
          ],
          explanation: 'La congestión de tráfico y la contaminación son problemas destacados en varias áreas urbanas.'
        },
        {
          id: 'geo-urb-q4',
          tier: 'standard',
          prompt: 'La expansión de la vivienda unifamiliar en las periferias urbanas se asocia con',
          options: [
            { id: 'a', label: 'movilidad sostenible', isCorrect: false },
            { id: 'b', label: 'expansión urbana (urban sprawl)', isCorrect: true },
            { id: 'c', label: 'mayor densidad', isCorrect: false },
            { id: 'd', label: 'deterioro del transporte público', isCorrect: false },
          ],
          explanation: 'La proliferación de viviendas unifamiliares en periferias favorece la expansión urbana y la dispersión de asentamientos.'
        },
        {
          id: 'geo-urb-q5',
          tier: 'standard',
          prompt: 'La red de ciudades españolas se organiza en una jerarquía con nodos que concentran servicios. ¿Verdadero o Falso?',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Depende', isCorrect: false },
            { id: 'd', label: 'No especificado', isCorrect: false },
          ],
          explanation: 'La red urbana se organiza jerárquicamente, con nodos que concentran servicios y funciones estratégicas.'
        },
      { id: 'geo-urb-jer-q1', tier: 'standard', prompt: 'La jerarquía urbana y la red de ciudades en España se caracterizan por…', options: [
        { id: 'a', label: 'una jerarquía de grandes ciudades y nodos regionales', isCorrect: true },
        { id: 'b', label: 'una red de ciudades homogénea', isCorrect: false },
        { id: 'c', label: 'ciudades aisladas sin interacción', isCorrect: false },
        { id: 'd', label: 'una única ciudad dominante', isCorrect: false },
      ], explanation: 'Red urbana policéntrica con metrópolis y centros regionales.' },
      { id: 'geo-urb-jer-q2', tier: 'standard', prompt: 'La jerarquía urbana en España se expresa principalmente en…', options: [
        { id: 'a', label: 'red de ciudades y nodos', isCorrect: true },
        { id: 'b', label: 'distribución plana', isCorrect: false },
        { id: 'c', label: 'concentración rural', isCorrect: false },
        { id: 'd', label: 'saturación de ciudades', isCorrect: false },
      ], explanation: 'Sistema urbano de nodos principales, secundarios y locales.' },
      { id: 'geo-urb-jer-q3', tier: 'standard', prompt: '¿Qué ciudad es un ejemplo destacado del corredor Mediterráneo por urbanización y economía?', options: [
        { id: 'a', label: 'Madrid', isCorrect: false },
        { id: 'b', label: 'Barcelona', isCorrect: true },
        { id: 'c', label: 'A Coruña', isCorrect: false },
        { id: 'd', label: 'Zaragoza', isCorrect: false },
      ], explanation: 'Barcelona es eje central del corredor mediterráneo.' },
    ] },
    { id: 'morfologia-funciones-urbanas', title: 'Morfología y funciones urbanas.', questions: [
      { id: 'geo-urb-morf-q1', tier: 'standard', prompt: 'Morfología y funciones urbanas se caracterizan por…', options: [
        { id: 'a', label: 'trama lineal rígida', isCorrect: false },
        { id: 'b', label: 'ciudades difusas, con funciones mixtas', isCorrect: true },
        { id: 'c', label: 'ciudades circulares exclusivamente', isCorrect: false },
        { id: 'd', label: 'urbes sin funciones mixtas', isCorrect: false },
      ], explanation: 'Morfología difusa y mezcla funcional (residencial, comercial, etc.).' },
      { id: 'geo-urb-morf-q2', tier: 'standard', prompt: 'La expansión urbana reciente se asocia principalmente a…', options: [
        { id: 'a', label: 'consolidación de núcleos antiguos', isCorrect: false },
        { id: 'b', label: 'gentrificación exclusiva', isCorrect: false },
        { id: 'c', label: 'expansión hacia áreas periféricas (urban sprawl)', isCorrect: true },
        { id: 'd', label: 'reducción del uso del suelo', isCorrect: false },
      ], explanation: 'Tendencia al crecimiento periférico difuso.' },
    ] },
    { id: 'problemas-ciudades', title: 'Problemas de las ciudades españolas.', questions: [
      { id: 'geo-urb-prob-q1', tier: 'standard', prompt: 'Entre los problemas de las ciudades españolas se encuentran…', options: [
        { id: 'a', label: 'vivienda asequible, tráfico, contaminación y desigualdades', isCorrect: true },
        { id: 'b', label: 'exceso de infraestructuras y baja densidad', isCorrect: false },
        { id: 'c', label: 'límites de expansión imposibles', isCorrect: false },
        { id: 'd', label: 'ausencia de servicios básicos', isCorrect: false },
      ], explanation: 'Retos urbanos frecuentes en grandes ciudades españolas.' },
    ] },

    // Territorio y organización espacial
    { id: 'organizacion-estado', title: 'La organización territorial del Estado.', questions: [
        {
          id: 'geo-org-q1',
          tier: 'standard',
          prompt: 'La organización territorial del Estado está formada por',
          options: [
            { id: 'a', label: '17 comunidades autónomas y 2 ciudades autónomas', isCorrect: true },
            { id: 'b', label: '12 comunidades autónomas', isCorrect: false },
            { id: 'c', label: '60 provincias', isCorrect: false },
            { id: 'd', label: '4 grandes regiones', isCorrect: false },
          ],
          explanation: 'España está organizada en 17 comunidades autónomas y las dos ciudades autónomas de Ceuta y Melilla.'
        },
        {
          id: 'geo-org-q2',
          tier: 'standard',
          prompt: 'Las comunidades autónomas tienen competencias en materias de educación, sanidad y transporte. ¿Verdadero o Falso?',
          options: [
            { id: 'a', label: 'Verdadero', isCorrect: true },
            { id: 'b', label: 'Falso', isCorrect: false },
            { id: 'c', label: 'Solo educación', isCorrect: false },
            { id: 'd', label: 'Solo sanidad', isCorrect: false },
          ],
          explanation: 'Las comunidades autónomas poseen competencias en educación, sanidad, transporte y otras áreas, dentro del marco estatutario.'
        },
        {
          id: 'geo-org-q3',
          tier: 'standard',
          prompt: 'España en la Unión Europea y en la globalización: ¿qué relación describe mejor su posición?',
          options: [
            { id: 'a', label: 'España no participa en estructuras europeas', isCorrect: false },
            { id: 'b', label: 'España participa en la UE y se beneficia de fondos de cohesión, integrándose en la globalización', isCorrect: true },
            { id: 'c', label: 'España está aislada de la globalización', isCorrect: false },
            { id: 'd', label: 'España depende exclusivamente de asociaciones regionales', isCorrect: false },
          ],
          explanation: 'España forma parte de la Unión Europea y recibe fondos de cohesión; su economía está integrada en la economía global.'
        },
        {
          id: 'geo-org-q4',
          tier: 'standard',
          prompt: 'España en la globalización ha actuado como puerta de entrada a:',
          options: [
            { id: 'a', label: 'Europa y África', isCorrect: true },
            { id: 'b', label: 'Asia', isCorrect: false },
            { id: 'c', label: 'Oceanía', isCorrect: false },
            { id: 'd', label: 'Antártida', isCorrect: false },
          ],
          explanation: 'La posición geográfica peninsular facilita la conexión con Europa y África, reforzando su papel en la globalización.'
        },
      { id: 'geo-terr-org-q1', tier: 'standard', prompt: 'La organización territorial del Estado en España se basa en…', options: [
        { id: 'a', label: 'un Estado centralizado sin autonomías', isCorrect: false },
        { id: 'b', label: 'un Estado de las Autonomías', isCorrect: true },
        { id: 'c', label: 'una confederación de estados', isCorrect: false },
        { id: 'd', label: 'un sistema federal', isCorrect: false },
      ], explanation: 'Monarquía parlamentaria con estructura autonómica.' },
    ] },
    { id: 'ccaa-desequilibrios', title: 'Comunidades Autónomas y desequilibrios regionales.', questions: [
      { id: 'geo-terr-ccaa-q1', tier: 'standard', prompt: 'Las Comunidades Autónomas y desequilibrios regionales se deben a…', options: [
        { id: 'a', label: 'homogeneidad de recursos y población', isCorrect: false },
        { id: 'b', label: 'desigualdades históricas en desarrollo económico e infraestructuras', isCorrect: true },
        { id: 'c', label: 'ausencia de recursos culturales', isCorrect: false },
        { id: 'd', label: 'uniformidad climática', isCorrect: false },
      ], explanation: 'Desigualdades relacionadas con desarrollo e infraestructuras a lo largo del tiempo.' },
    ] },
    { id: 'espana-ue-global', title: 'España en la Unión Europea y en la globalización.', questions: [
      { id: 'geo-terr-ue-q1', tier: 'standard', prompt: 'España en la Unión Europea y en la globalización: ¿qué efecto tiene la pertenencia a la UE en su economía?', options: [
        { id: 'a', label: 'desconexión de mercados', isCorrect: false },
        { id: 'b', label: 'acceso a fondos estructurales y apertura comercial', isCorrect: true },
        { id: 'c', label: 'aislamiento económico', isCorrect: false },
        { id: 'd', label: 'nulo impacto', isCorrect: false },
      ], explanation: 'Fondos de cohesión, apertura de mercados y cooperación regional.' },
      { id: 'geo-terr-ue-q2', tier: 'standard', prompt: 'La organización territorial y la globalización se complementan: ¿qué organismo gestiona los Fondos Estructurales de la UE en España?', options: [
        { id: 'a', label: 'Banco Central', isCorrect: false },
        { id: 'b', label: 'Unión Europea', isCorrect: true },
        { id: 'c', label: 'Gobierno de España', isCorrect: false },
        { id: 'd', label: 'Naciones Unidas', isCorrect: false },
      ], explanation: 'Los fondos estructurales los gestiona la UE, con implementación nacional y regional.' },
      { id: 'geo-terr-ue-q3', tier: 'standard', prompt: '¿Cuál es la situación de España en el contexto de la globalización?', options: [
        { id: 'a', label: 'España no participa en estructuras europeas', isCorrect: false },
        { id: 'b', label: 'España participa en la UE y se beneficia de fondos de cohesión, integrándose en la globalización', isCorrect: true },
        { id: 'c', label: 'España está aislada de la globalización', isCorrect: false },
        { id: 'd', label: 'España depende exclusivamente de asociaciones regionales', isCorrect: false },
      ], explanation: 'España forma parte de la Unión Europea y recibe fondos de cohesión; su economía está integrada en la economía global.' },
      { id: 'geo-terr-ue-q4', tier: 'standard', prompt: 'España en la globalización ha actuado como puerta de entrada a:', options: [
        { id: 'a', label: 'Europa y África', isCorrect: true },
        { id: 'b', label: 'Asia', isCorrect: false },
        { id: 'c', label: 'Oceanía', isCorrect: false },
        { id: 'd', label: 'Antártida', isCorrect: false },
      ], explanation: 'La posición geográfica peninsular facilita la conexión con Europa y África, reforzando su papel en la globalización.' },
    ] },
  ],
}


