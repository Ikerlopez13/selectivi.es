import type { Subject } from './types'

export const philosophyES: Subject = {
  id: 'filosofia',
  name: 'Filosofía',
  topics: [
    // Filosofía Antigua
    { id: 'platon', title: 'Platón: teoría de las Ideas y conocimiento.', questions: [
      { id: 'platon-q1', tier: 'standard', prompt: 'Según Platón, ¿qué caracteriza a la realidad sensible?', options: [
        { id: 'a', label: 'La realidad sensible es la realidad definitiva.', isCorrect: false },
        { id: 'b', label: 'Es una copia imperfecta de las Ideas.', isCorrect: true },
        { id: 'c', label: 'Es independiente de las Ideas y accesible por la experiencia.', isCorrect: false },
        { id: 'd', label: 'No puede ser conocida de ningún modo.', isCorrect: false },
      ], explanation: 'Las cosas sensibles son imágenes o copias de las Formas/Ideas, que son el verdadero objeto de conocimiento.' },
      { id: 'platon-q2', tier: 'standard', prompt: '¿Qué son las Ideas para Platón?', options: [
        { id: 'a', label: 'Formas eternas e inmateriales que dan unidad y sentido a las cosas sensibles.', isCorrect: true },
        { id: 'b', label: 'Copia exacta de la realidad sensible.', isCorrect: false },
        { id: 'c', label: 'Simples recuerdos de la memoria.', isCorrect: false },
        { id: 'd', label: 'Ideas que sólo existen para el filósofo.', isCorrect: false },
      ], explanation: 'Las Ideas son realidades eternas e inmateriales que sostienen y dan sentido a las cosas del mundo sensible.' },
      { id: 'platon-q3', tier: 'standard', prompt: '¿Qué método platónico permite a la mente acceder al conocimiento verdadero?', options: [
        { id: 'a', label: 'La dialéctica y la reminiscencia de las Ideas (anamnesis).', isCorrect: true },
        { id: 'b', label: 'La experiencia sensorial directa.', isCorrect: false },
        { id: 'c', label: 'La fe ciega en la autoridad.', isCorrect: false },
        { id: 'd', label: 'La introspección sin orientación.', isCorrect: false },
      ], explanation: 'Con la dialéctica y la reminiscencia de las Ideas, la mente recuerda lo que ya sabía en un estado previo.' },
      { id: 'platon-q4', tier: 'standard', prompt: 'La alegoría de la caverna ilustra...', options: [
        { id: 'a', label: 'La realidad sensible es la única realidad verdadera.', isCorrect: false },
        { id: 'b', label: 'La educación no cambia la percepción de la realidad.', isCorrect: false },
        { id: 'c', label: 'El mundo sensible es una sombra de las Ideas y la filosofía libera la mente.', isCorrect: true },
        { id: 'd', label: 'La filosofía es inútil para alcanzar la verdad.', isCorrect: false },
      ], explanation: 'La caverna muestra que las apariencias sensibles ocultan las Verdades de las Ideas; la filosofía libera al alma.' },
      { id: 'platon-q5', tier: 'standard', prompt: 'En la teoría de las Ideas, ¿cómo se entiende el conocimiento verdadero?', options: [
        { id: 'a', label: 'Es opinión basada en lo sensible.', isCorrect: false },
        { id: 'b', label: 'Es episteme, conocimiento de las Ideas.', isCorrect: true },
        { id: 'c', label: 'Es mera intuición emocional.', isCorrect: false },
        { id: 'd', label: 'Es accesible solo por fe.', isCorrect: false },
      ], explanation: 'El conocimiento verdadero es episteme, conocimiento cierto de las Ideas, no de las apariencias sensibles.' },
    ] },
    { id: 'aristoteles', title: 'Aristóteles: metafísica, ética y política.', questions: [
      { id: 'aristoteles-q1', tier: 'standard', prompt: 'Para Aristóteles, la sustancia es...', options: [
        { id: 'a', label: 'la combinación de materia y forma.', isCorrect: true },
        { id: 'b', label: 'la materia sin forma.', isCorrect: false },
        { id: 'c', label: 'la forma sin materia.', isCorrect: false },
        { id: 'd', label: 'la experiencia sensible.', isCorrect: false },
      ], explanation: 'La sustancia es la unión de materia y forma; la forma da la esencia y la materia individualiza.' },
      { id: 'aristoteles-q2', tier: 'standard', prompt: '¿Cuáles son las cuatro causas que explica Aristóteles?', options: [
        { id: 'a', label: 'Material, formal, eficiente, final.', isCorrect: true },
        { id: 'b', label: 'Causal, racional, vital, divina.', isCorrect: false },
        { id: 'c', label: 'Materia, forma, potencia, acto.', isCorrect: false },
        { id: 'd', label: 'Ética, política, metafísica, estética.', isCorrect: false },
      ], explanation: 'Las cuatro causas son la material, la formal, la eficiente y la final.' },
      { id: 'aristoteles-q3', tier: 'standard', prompt: 'La Ética a Nicómaco define la eudaimonía como...', options: [
        { id: 'a', label: 'placer.', isCorrect: false },
        { id: 'b', label: 'felicidad y actividad del alma conforme a la virtud.', isCorrect: true },
        { id: 'c', label: 'conocimiento teórico.', isCorrect: false },
        { id: 'd', label: 'poder político.', isCorrect: false },
      ], explanation: 'Eudaimonía es vivir bien, realizando la virtud en acto, no buscar placeres momentáneos.' },
      { id: 'aristoteles-q4', tier: 'standard', prompt: 'En la política de Aristóteles, la ciudad-estado (pólis) busca...', options: [
        { id: 'a', label: 'la realización de intereses personales.', isCorrect: false },
        { id: 'b', label: 'la vida buena mediante la virtud cívica en comunidad.', isCorrect: true },
        { id: 'c', label: 'el dominio de la oligarquía.', isCorrect: false },
        { id: 'd', label: 'la esclavitud universal.', isCorrect: false },
      ], explanation: 'La pólis está orientada a la vida buena mediante la virtud y la organización cívica.' },
      { id: 'aristoteles-q5', tier: 'standard', prompt: 'La virtud moral, para Aristóteles, se alcanza...', options: [
        { id: 'a', label: 'mediante la contemplación teórica.', isCorrect: false },
        { id: 'b', label: 'mediante la moderación y la habituación a través del hábito.', isCorrect: true },
        { id: 'c', label: 'por la sanción divina.', isCorrect: false },
        { id: 'd', label: 'por la obediencia social.', isCorrect: false },
      ], explanation: 'La virtud se cultiva por la habituación y la justeza del término medio.' },
    ] },

    // Filosofía Medieval
    { id: 'san-agustin', title: 'San Agustín: fe y razón, interioridad.', questions: [
      { id: 'sanagustin-q1', tier: 'standard', prompt: 'Para San Agustín, la fe es necesaria para...', options: [
        { id: 'a', label: 'la razón sin fe.', isCorrect: false },
        { id: 'b', label: 'la fe que precede y guía a la razón para entender la verdad.', isCorrect: true },
        { id: 'c', label: 'la experiencia sensorial.', isCorrect: false },
        { id: 'd', label: 'la razón sin límites.', isCorrect: false },
      ], explanation: 'Agustín sostiene que la fe ilumina la comprensión y guía la razón hacia la verdad.' },
      { id: 'sanagustin-q2', tier: 'standard', prompt: 'La interioridad en Agustín se refiere a...', options: [
        { id: 'a', label: 'la experiencia de Dios dentro del alma.', isCorrect: true },
        { id: 'b', label: 'la experiencia social.', isCorrect: false },
        { id: 'c', label: 'la física del alma.', isCorrect: false },
        { id: 'd', label: 'la obediencia a la autoridad.', isCorrect: false },
      ], explanation: 'La interioridad es el camino hacia Dios en la experiencia del propio interior.' },
      { id: 'sanagustin-q3', tier: 'standard', prompt: 'En la visión agustiniana de la historia, la lucha entre la ciudad de Dios y la ciudad terrenal ilustra...', options: [
        { id: 'a', label: 'la oposición entre fe y razón.', isCorrect: false },
        { id: 'b', label: 'la historia humana orientada por la gracia divina.', isCorrect: true },
        { id: 'c', label: 'la indiferencia ante la verdad.', isCorrect: false },
        { id: 'd', label: 'la primacía de la razón natural sobre la fe.', isCorrect: false },
      ], explanation: 'Agustín describe dos ciudades en conflicto como símbolo de la historia humana orientada por la gracia.' },
      { id: 'sanagustin-q4', tier: 'standard', prompt: 'La interioridad en Agustín se vincula principalmente a...', options: [
        { id: 'a', label: 'la experiencia de Dios en el alma interior.', isCorrect: true },
        { id: 'b', label: 'la contemplación social.', isCorrect: false },
        { id: 'c', label: 'la física del cuerpo.', isCorrect: false },
        { id: 'd', label: 'la autoridad civil.', isCorrect: false },
      ], explanation: 'La experiencia interior de Dios es clave en su epistemología y espiritualidad.' },
    ] },
    { id: 'santo-tomas', title: 'Santo Tomás de Aquino: escolástica, relación entre fe y razón.', questions: [
      { id: 'tomas-q1', tier: 'standard', prompt: 'En Tomás de Aquino, la relación entre fe y razón es...', options: [
        { id: 'a', label: 'fe y razón se oponen.', isCorrect: false },
        { id: 'b', label: 'la fe debe renunciar a la razón.', isCorrect: false },
        { id: 'c', label: 'fe y razón se complementan; la fe ilumina la razón y la razón clarifica la fe.', isCorrect: true },
        { id: 'd', label: 'la razón basta por sí sola para entender todo.', isCorrect: false },
      ], explanation: 'Aquino propone una síntesis: fe y razón se sostienen mutuamente.' },
      { id: 'tomas-q2', tier: 'standard', prompt: '¿Quién es el autor de la obra Summa Theologiae?', options: [
        { id: 'a', label: 'Descartes', isCorrect: false },
        { id: 'b', label: 'Santo Tomás de Aquino', isCorrect: true },
        { id: 'c', label: 'Kant', isCorrect: false },
        { id: 'd', label: 'Aristóteles', isCorrect: false },
      ], explanation: 'Summa Theologiae es la obra cumbre de Aquino.' },
      { id: 'tomas-q3', tier: 'standard', prompt: 'La vía de la analogía del ser de Aquino busca...', options: [
        { id: 'a', label: 'demostrar la existencia de Dios solo por revelación.', isCorrect: false },
        { id: 'b', label: 'explicar la analogía entre ser creador y creado para justificar la existencia de Dios.', isCorrect: true },
        { id: 'c', label: 'separar fe y razón por completo.', isCorrect: false },
        { id: 'd', label: 'dar una prueba empírica de la existencia de Dios.', isCorrect: false },
      ], explanation: 'La analogía del ser permite hablar de Dios sin imágenes antropomórficas.' },
      { id: 'tomas-q4', tier: 'standard', prompt: 'En la relación fe y razón, ¿qué afirma Aquino?', options: [
        { id: 'a', label: 'la fe y la razón son incompatibles.', isCorrect: false },
        { id: 'b', label: 'la razón debe someterse a la fe sin duda.', isCorrect: false },
        { id: 'c', label: 'la fe ilumina la razón y la razón clarifica la fe.', isCorrect: true },
        { id: 'd', label: 'la fe basta para toda verdad.', isCorrect: false },
      ], explanation: 'Aquino sostiene cooperación entre fe y razón; no hay conflicto real entre ambas.' },
    ] },

    // Filosofía Moderna
    { id: 'descartes', title: 'Descartes: racionalismo, duda metódica, cogito.', questions: [
      { id: 'descartes-q1', tier: 'standard', prompt: 'La duda metódica de Descartes tiene como objetivo...', options: [
        { id: 'a', label: 'negar todo conocimiento.', isCorrect: false },
        { id: 'b', label: 'temblar ante toda experiencia sensorial.', isCorrect: false },
        { id: 'c', label: 'llegar a una base de certeza indemostrable para fundamentar el saber.', isCorrect: true },
        { id: 'd', label: 'afirmar la verdad de la fe.', isCorrect: false },
      ], explanation: 'La duda metódica busca una base firme para nuestros conocimientos.' },
      { id: 'descartes-q2', tier: 'standard', prompt: "¿Qué afirma Descartes con 'cogito, ergo sum'?", options: [
        { id: 'a', label: 'El cuerpo es la única realidad.', isCorrect: false },
        { id: 'b', label: 'El pensamiento demuestra la propia existencia.', isCorrect: true },
        { id: 'c', label: 'La experiencia es la única fuente de certeza.', isCorrect: false },
        { id: 'd', label: 'La fe es la base del conocimiento.', isCorrect: false },
      ], explanation: 'El cogito establece la certeza del yo pensante como punto de partida.' },
      { id: 'descartes-q3', tier: 'standard', prompt: 'En la epistemología cartesiana, la razón...', options: [
        { id: 'a', label: 'es la fuente de todo conocimiento válido; la experiencia es susceptible de engaño.', isCorrect: true },
        { id: 'b', label: 'no es fiable y debe abandonarse.', isCorrect: false },
        { id: 'c', label: 'se limita a la opinión común.', isCorrect: false },
        { id: 'd', label: 'solo sirve para demostrar probabilidades.', isCorrect: false },
      ], explanation: 'Descartes defiende la razón como fuente de certeza.' },
      { id: 'descartes-q4', tier: 'standard', prompt: 'Sobre la idea de Dios, ¿qué afirma Descartes?', options: [
        { id: 'a', label: 'La idea de Dios es innata y garantiza la fiabilidad de la razón.', isCorrect: true },
        { id: 'b', label: 'La idea de Dios proviene exclusivamente de la experiencia sensible.', isCorrect: false },
        { id: 'c', label: 'La idea de Dios no es necesaria para la razón.', isCorrect: false },
        { id: 'd', label: 'La idea de Dios es una ficción voluntaria.', isCorrect: false },
      ], explanation: 'La idea innata de un ser perfecto garantiza la veracidad de la razón.' },
    ] },
    { id: 'hume', title: 'Hume: empirismo, crítica a la causalidad.', questions: [
      { id: 'hume-q1', tier: 'standard', prompt: 'Para Hume, la causalidad se funda en...', options: [
        { id: 'a', label: 'una conexión necesaria en la naturaleza.', isCorrect: false },
        { id: 'b', label: 'la costumbre o hábito de ver una regularidad en la experiencia.', isCorrect: true },
        { id: 'c', label: 'una demostración a priori.', isCorrect: false },
        { id: 'd', label: 'una intuición innata.', isCorrect: false },
      ], explanation: 'La causalidad es un hábito mental basado en la repetición de experiencias.' },
      { id: 'hume-q2', tier: 'standard', prompt: 'En la teoría del yo de Hume, el yo es...', options: [
        { id: 'a', label: 'una sustancia inmutable.', isCorrect: false },
        { id: 'b', label: 'un conjunto de percepciones en constante cambio.', isCorrect: true },
        { id: 'c', label: 'una idea innata y fija.', isCorrect: false },
        { id: 'd', label: 'una idea derivada de la razón pura.', isCorrect: false },
      ], explanation: 'Para Hume, no hay un yo estable; es una colección de percepciones.' },
      { id: 'hume-q3', tier: 'standard', prompt: 'La crítica de Hume a la causalidad afirma que...', options: [
        { id: 'a', label: 'la causalidad es una verdad innata.', isCorrect: false },
        { id: 'b', label: 'es una construcción de la mente basada en la experiencia.', isCorrect: true },
        { id: 'c', label: 'se establece por la autoridad religiosa.', isCorrect: false },
        { id: 'd', label: 'es demostrable a priori.', isCorrect: false },
      ], explanation: 'No observamos conexiones necesarias, sino regularidades.' },
      { id: 'hume-q4', tier: 'standard', prompt: 'Según Hume, las ideas son...', options: [
        { id: 'a', label: 'impresiones vivas.', isCorrect: false },
        { id: 'b', label: 'copias pálidas de las impresiones.', isCorrect: true },
        { id: 'c', label: 'independientes de las impresiones.', isCorrect: false },
        { id: 'd', label: 'ideas innatas.', isCorrect: false },
      ], explanation: 'Las ideas derivan de impresiones previas.' },
    ] },
    { id: 'kant', title: 'Kant: criticismo, revolución copernicana, ética del deber.', questions: [
      { id: 'kant-q1', tier: 'standard', prompt: 'La revolución copernicana de Kant sostiene que...', options: [
        { id: 'a', label: 'el objeto determina a la mente.', isCorrect: false },
        { id: 'b', label: 'la mente estructura la experiencia mediante formas y categorías.', isCorrect: true },
        { id: 'c', label: 'la experiencia es ajena a la mente.', isCorrect: false },
        { id: 'd', label: 'solo la fe da certeza.', isCorrect: false },
      ], explanation: 'Las estructuras a priori organizan los datos sensibles.' },
      { id: 'kant-q2', tier: 'standard', prompt: 'Un conocimiento humano requiere...', options: [
        { id: 'a', label: 'estructuras a priori y datos de la experiencia.', isCorrect: true },
        { id: 'b', label: 'solo experiencia sensible.', isCorrect: false },
        { id: 'c', label: 'solo ideas innatas.', isCorrect: false },
        { id: 'd', label: 'fe sin razón.', isCorrect: false },
      ], explanation: 'Síntesis de intuiciones sensibles con conceptos puros.' },
      { id: 'kant-q3', tier: 'standard', prompt: 'El imperativo categórico de Kant afirma que se debe actuar...', options: [
        { id: 'a', label: 'siguiendo deseos personales.', isCorrect: false },
        { id: 'b', label: 'según máximas universalizables.', isCorrect: true },
        { id: 'c', label: 'solo por utilidad.', isCorrect: false },
        { id: 'd', label: 'para obtener placer.', isCorrect: false },
      ], explanation: 'La moral exige universalidad y respeto al deber.' },
      { id: 'kant-q4', tier: 'standard', prompt: 'La distinción fenómeno / cosa en sí indica que...', options: [
        { id: 'a', label: 'podemos conocer la cosa en sí por experiencia.', isCorrect: false },
        { id: 'b', label: 'solo conocemos fenómenos; la cosa en sí es incognoscible.', isCorrect: true },
        { id: 'c', label: 'los fenómenos son ideas innatas.', isCorrect: false },
        { id: 'd', label: 'la cosa en sí es accesible a la razón pura.', isCorrect: false },
      ], explanation: 'Límites del conocimiento humano.' },
      { id: 'kant-q5', tier: 'standard', prompt: 'Un juicio sintético a priori es...', options: [
        { id: 'a', label: 'analítico y a posteriori.', isCorrect: false },
        { id: 'b', label: 'sintético y a priori, amplía conocimiento universal.', isCorrect: true },
        { id: 'c', label: 'analítico y a priori.', isCorrect: false },
        { id: 'd', label: 'empírico y contingente.', isCorrect: false },
      ], explanation: 'Amplía contenido sin depender de la experiencia.' },
    ] },

    // Filosofía Contemporánea
    { id: 'marx', title: 'Marx: materialismo histórico, alienación.', questions: [
      { id: 'marx-q1', tier: 'standard', prompt: 'El materialismo histórico sostiene que...', options: [
        { id: 'a', label: 'la historia está determinada por ideas.', isCorrect: false },
        { id: 'b', label: 'las fuerzas productivas y relaciones de producción determinan la superestructura.', isCorrect: true },
        { id: 'c', label: 'la economía no influye en la sociedad.', isCorrect: false },
        { id: 'd', label: 'la historia es ciega y sin leyes.', isCorrect: false },
      ], explanation: 'La base económica condiciona la superestructura.' },
      { id: 'marx-q2', tier: 'standard', prompt: 'La alienación, en Marx, se refiere a...', options: [
        { id: 'a', label: 'identificación plena con el trabajo.', isCorrect: false },
        { id: 'b', label: 'separación del trabajador respecto al producto, proceso, especie y comunidad.', isCorrect: true },
        { id: 'c', label: 'condición natural y deseable.', isCorrect: false },
        { id: 'd', label: 'solo se da en la religión.', isCorrect: false },
      ], explanation: 'Describe la desvinculación del trabajador respecto a lo que produce y su esencia.' },
      { id: 'marx-q3', tier: 'standard', prompt: 'La lucha de clases, según Marx, es...', options: [
        { id: 'a', label: 'una idea abstracta sin impacto real.', isCorrect: false },
        { id: 'b', label: 'motor de la historia mediante el conflicto entre clases.', isCorrect: true },
        { id: 'c', label: 'exclusiva de la Edad Moderna.', isCorrect: false },
        { id: 'd', label: 'un obstáculo para la libertad individual.', isCorrect: false },
      ], explanation: 'El conflicto de clases impulsa la transformación histórica.' },
      { id: 'marx-q4', tier: 'standard', prompt: 'La “conciencia de clase” describe...', options: [
        { id: 'a', label: 'la percepción de la clase dominante sobre sí misma.', isCorrect: false },
        { id: 'b', label: 'la percepción distorsionada de la clase trabajadora impuesta por la estructura económica.', isCorrect: true },
        { id: 'c', label: 'la conciencia universal de la libertad.', isCorrect: false },
        { id: 'd', label: 'la ideología religiosa dominante.', isCorrect: false },
      ], explanation: 'Frecuentemente la clase trabajadora percibe su situación desde ópticas ideológicas.' },
      { id: 'marx-q5', tier: 'standard', prompt: '¿Qué futuro vislumbra Marx tras la sociedad comunista?', options: [
        { id: 'a', label: 'Perpetuación de las clases existentes.', isCorrect: false },
        { id: 'b', label: 'Superación de contradicciones y sociedad sin clases según necesidad.', isCorrect: true },
        { id: 'c', label: 'Dictadura permanente del proletariado.', isCorrect: false },
        { id: 'd', label: 'Dominación de ideas burguesas.', isCorrect: false },
      ], explanation: 'Fin de las clases y organización según necesidades.' },
    ] },
    { id: 'nietzsche', title: 'Nietzsche: crítica a la moral, voluntad de poder, superhombre.', questions: [
      { id: 'nietzsche-q1', tier: 'standard', prompt: 'La "voluntad de poder" en Nietzsche se entiende como...', options: [
        { id: 'a', label: 'un deseo de dominar a otros a toda costa.', isCorrect: false },
        { id: 'b', label: 'el impulso vital de afirmar, crear y superar límites.', isCorrect: true },
        { id: 'c', label: 'búsqueda exclusiva de poder político.', isCorrect: false },
        { id: 'd', label: 'obediencia a normas sociales.', isCorrect: false },
      ], explanation: 'Impulso fundamental creativo y afirmativo.' },
      { id: 'nietzsche-q2', tier: 'standard', prompt: 'El "superhombre" de Nietzsche representa...', options: [
        { id: 'a', label: 'un tirano político autónomo.', isCorrect: false },
        { id: 'b', label: 'quien crea valores propios y trasciende la moral tradicional.', isCorrect: true },
        { id: 'c', label: 'un ser divino.', isCorrect: false },
        { id: 'd', label: 'una figura del miedo y la sumisión.', isCorrect: false },
      ], explanation: 'Forja valores propios y afirma la vida.' },
      { id: 'nietzsche-q3', tier: 'standard', prompt: 'La “moral de rebaño” a la que se opone Nietzsche es...', options: [
        { id: 'a', label: 'una ética que fomenta la libertad individual.', isCorrect: false },
        { id: 'b', label: 'obediencia ciega a normas tradicionales que limitan la vitalidad.', isCorrect: true },
        { id: 'c', label: 'una ética de la autenticidad.', isCorrect: false },
        { id: 'd', label: 'una moral que valora la creatividad.', isCorrect: false },
      ], explanation: 'Crítica a la moral tradicional que debilita la vitalidad.' },
      { id: 'nietzsche-q4', tier: 'standard', prompt: 'El “eterno retorno” propone...', options: [
        { id: 'a', label: 'repetición infinita de la existencia.', isCorrect: true },
        { id: 'b', label: 'tiempo lineal sin repetición.', isCorrect: false },
        { id: 'c', label: 'vida única que no se repite.', isCorrect: false },
        { id: 'd', label: 'historia sin sentido.', isCorrect: false },
      ], explanation: 'Idea de evaluación vital: vivirías lo mismo si se repitiera eternamente.' },
      { id: 'nietzsche-q5', tier: 'standard', prompt: 'Según Nietzsche, la religión...', options: [
        { id: 'a', label: 'fuente de verdad y guía vital.', isCorrect: false },
        { id: 'b', label: 'construcción que niega la vida y aplasta la existencia individual.', isCorrect: true },
        { id: 'c', label: 'sin influencia moral.', isCorrect: false },
        { id: 'd', label: 'irrelevante para la ética.', isCorrect: false },
      ], explanation: 'Crítica de la religión como negación de la vida.' },
    ] },
    { id: 'ortega-gasset', title: 'Ortega y Gasset: perspectivismo, razón vital e histórica.', questions: [
      { id: 'ortega-q1', tier: 'standard', prompt: 'El “perspectivismo” de Ortega sostiene que...', options: [
        { id: 'a', label: 'hay una verdad única accesible a todos.', isCorrect: false },
        { id: 'b', label: 'el conocimiento está situado en la perspectiva y la vida del ser humano.', isCorrect: true },
        { id: 'c', label: 'la verdad es puramente subjetiva.', isCorrect: false },
        { id: 'd', label: 'la razón es guía de la verdad absoluta.', isCorrect: false },
      ], explanation: 'La verdad depende del punto de vista y de las condiciones vitales e históricas.' },
      { id: 'ortega-q2', tier: 'standard', prompt: 'La “razón vital e histórica” señala que...', options: [
        { id: 'a', label: 'la razón es abstracta y ajena a la vida.', isCorrect: false },
        { id: 'b', label: 'la razón está imbricada con la vida y la historia.', isCorrect: true },
        { id: 'c', label: 'la historia es dato empírico sin estructura.', isCorrect: false },
        { id: 'd', label: 'la verdad no depende de la vida.', isCorrect: false },
      ], explanation: 'Entender la razón dentro de la vida y la historia del sujeto.' },
      { id: 'ortega-q3', tier: 'standard', prompt: '“Yo soy yo y mi circunstancia” expresa...', options: [
        { id: 'a', label: 'aislamiento absoluto del individuo.', isCorrect: false },
        { id: 'b', label: 'que el yo se define por su entorno y vida concreta.', isCorrect: true },
        { id: 'c', label: 'primacía de la razón independiente.', isCorrect: false },
        { id: 'd', label: 'negación de la libertad.', isCorrect: false },
      ], explanation: 'Identidad inseparable de la circunstancia histórica y vital.' },
      { id: 'ortega-q4', tier: 'standard', prompt: 'La función de la “razón vital” es...', options: [
        { id: 'a', label: 'separar la vida de la reflexión.', isCorrect: false },
        { id: 'b', label: 'orientar acción y pensamiento desde la vida y sus proyectos.', isCorrect: true },
        { id: 'c', label: 'distinguir ética de estética.', isCorrect: false },
        { id: 'd', label: 'definir verdades universales sin contexto.', isCorrect: false },
      ], explanation: 'Conecta pensamiento y vida para posibilitar proyectos.' },
    ] },
    { id: 'hannah-arendt', title: 'Hannah Arendt: totalitarismo, acción política y libertad.', questions: [
      { id: 'arendt-q1', tier: 'standard', prompt: 'En Arendt, el totalitarismo se caracteriza por...', options: [
        { id: 'a', label: 'un régimen de ley y libertad.', isCorrect: false },
        { id: 'b', label: 'dominar todo aspecto de la vida mediante ideología, terror y propaganda.', isCorrect: true },
        { id: 'c', label: 'una democracia que amplía derechos.', isCorrect: false },
        { id: 'd', label: 'un estado que facilita la pluralidad.', isCorrect: false },
      ], explanation: 'Sistema que totaliza el control y suprime la libertad.' },
      { id: 'arendt-q2', tier: 'standard', prompt: 'Para Arendt, la acción política es...', options: [
        { id: 'a', label: 'irrelevante para la libertad.', isCorrect: false },
        { id: 'b', label: 'forma central de libertad en la esfera pública.', isCorrect: true },
        { id: 'c', label: 'solo violencia sin sentido.', isCorrect: false },
        { id: 'd', label: 'un simple trámite burocrático.', isCorrect: false },
      ], explanation: 'La acción política expresa la libertad en la pluralidad.' },
      { id: 'arendt-q3', tier: 'standard', prompt: 'La esfera pública, para Arendt, es...', options: [
        { id: 'a', label: 'un ámbito privado de libertad.', isCorrect: false },
        { id: 'b', label: 'espacio de aparición de la pluralidad y la acción política.', isCorrect: true },
        { id: 'c', label: 'dominio de las leyes sin debate.', isCorrect: false },
        { id: 'd', label: 'lugar de aislamiento individual.', isCorrect: false },
      ], explanation: 'Lugar donde se ejerce la libertad política.' },
      { id: 'arendt-q4', tier: 'standard', prompt: 'Según Arendt, el riesgo último del totalitarismo es...', options: [
        { id: 'a', label: 'fortalecimiento de libertades civiles.', isCorrect: false },
        { id: 'b', label: 'disolución de la verdad y anulación de la libertad por ideología totalizante.', isCorrect: true },
        { id: 'c', label: 'aislamiento de los filósofos.', isCorrect: false },
        { id: 'd', label: 'expansión ilimitada de la democracia.', isCorrect: false },
      ], explanation: 'Sustitución de la verdad por propaganda y supresión de la libertad.' },
    ] },
  ],
}


