import type { Subject } from '../types'

export const languageAND: Subject = {
  id: 'lengua-castellana',
  name: 'Lengua Castellana y Literatura',
  topics: [
    {
      id: 'literatura-espanola',
      title: 'Literatura española',
      questions: [
        {
          id: 'and-lengua-q1',
          tier: 'standard',
          prompt: '¿Qué generación literaria española se caracterizó por la crisis del 98?',
          options: [
            { id: 'a', label: 'Generación del 27', isCorrect: false },
            { id: 'b', label: 'Generación del 98', isCorrect: true },
            { id: 'c', label: 'Generación del 14', isCorrect: false },
            { id: 'd', label: 'Generación del 50', isCorrect: false },
          ],
          explanation: 'La Generación del 98 surgió tras la pérdida de las colonias españolas en 1898, reflejando una crisis nacional e identitaria.'
        },
        {
          id: 'and-lengua-q2',
          tier: 'standard',
          prompt: 'El "Lazarillo de Tormes" pertenece al género:',
          options: [
            { id: 'a', label: 'Novela caballeresca', isCorrect: false },
            { id: 'b', label: 'Novela pastoril', isCorrect: false },
            { id: 'c', label: 'Novela picaresca', isCorrect: true },
            { id: 'd', label: 'Novela sentimental', isCorrect: false },
          ],
          explanation: 'El Lazarillo de Tormes (1554) es la obra fundacional de la novela picaresca española, narrando las aventuras de un pícaro.'
        },
        {
          id: 'and-lengua-q3',
          tier: 'standard',
          prompt: 'Federico García Lorca escribió:',
          options: [
            { id: 'a', label: 'Luces de bohemia', isCorrect: false },
            { id: 'b', label: 'La casa de Bernarda Alba', isCorrect: true },
            { id: 'c', label: 'Marianela', isCorrect: false },
            { id: 'd', label: 'Niebla', isCorrect: false },
          ],
          explanation: 'Federico García Lorca escribió "La casa de Bernarda Alba" (1936), una de sus obras teatrales más emblemáticas de la Generación del 27.'
        },
        {
          id: 'and-lengua-q4',
          tier: 'standard',
          prompt: '"El Quijote" fue escrito por:',
          options: [
            { id: 'a', label: 'Miguel de Cervantes', isCorrect: true },
            { id: 'b', label: 'Lope de Vega', isCorrect: false },
            { id: 'c', label: 'Calderón de la Barca', isCorrect: false },
            { id: 'd', label: 'Francisco de Quevedo', isCorrect: false },
          ],
          explanation: 'Miguel de Cervantes Saavedra escribió "Don Quijote de la Mancha" (1605-1615), considerada la primera novela moderna.'
        },
        {
          id: 'and-lengua-q5',
          tier: 'premium',
          prompt: 'En sintaxis, una oración como "María estudia" es:',
          options: [
            { id: 'a', label: 'Simple predicativa intransitiva', isCorrect: true },
            { id: 'b', label: 'Compuesta coordinada', isCorrect: false },
            { id: 'c', label: 'Simple predicativa transitiva', isCorrect: false },
            { id: 'd', label: 'Compuesta subordinada', isCorrect: false },
          ],
          explanation: 'Es una oración simple (un solo verbo), predicativa (con verbo predicativo "estudiar"), intransitiva (sin complemento directo).'
        },
        {
          id: 'and-lengua-q6',
          tier: 'premium',
          prompt: 'El Romancero es característico de:',
          options: [
            { id: 'a', label: 'La lírica popular medieval', isCorrect: true },
            { id: 'b', label: 'El teatro barroco', isCorrect: false },
            { id: 'c', label: 'La novela renacentista', isCorrect: false },
            { id: 'd', label: 'La poesía contemporánea', isCorrect: false },
          ],
          explanation: 'El Romancero es un conjunto de poemas épico-líricos breves de origen medieval, transmitidos oralmente en la tradición popular española.'
        },
        {
          id: 'lengua-com-q1',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje predomina en el enunciado \'El agua hierve a 100°C\'?',
          options: [
            { id: 'a', label: 'Función expresiva', isCorrect: false },
            { id: 'b', label: 'Función conativa', isCorrect: false },
            { id: 'c', label: 'Función referencial', isCorrect: true },
            { id: 'd', label: 'Función poética', isCorrect: false }
          ],
          explanation: 'La función referencial transmite información objetiva sobre la realidad sin implicación emotiva del emisor.'
        },
        {
          id: 'lengua-com-q2',
          tier: 'standard',
          prompt: 'En la expresión \'¿Me oyes? ¿Sigues ahí?\', la función predominante es:',
          options: [
            { id: 'a', label: 'Metalingüística', isCorrect: false },
            { id: 'b', label: 'Fática', isCorrect: true },
            { id: 'c', label: 'Referencial', isCorrect: false },
            { id: 'd', label: 'Conativa', isCorrect: false }
          ],
          explanation: 'La función fática tiene como objetivo verificar que el canal de comunicación funciona correctamente.'
        },
        {
          id: 'lengua-var-q1',
          tier: 'standard',
          prompt: 'El ceceo y el seseo son fenómenos lingüísticos característicos de:',
          options: [
            { id: 'a', label: 'El dialecto leonés', isCorrect: false },
            { id: 'b', label: 'El gallego', isCorrect: false },
            { id: 'c', label: 'El andaluz', isCorrect: true },
            { id: 'd', label: 'El asturiano', isCorrect: false }
          ],
          explanation: 'El seseo y ceceo son rasgos fonéticos identificativos del andaluz, especialmente en la pronunciación de /s/, /θ/ y /z/.'
        },
        {
          id: 'lengua-var-q2',
          tier: 'standard',
          prompt: 'El registro coloquial se caracteriza por:',
          options: [
            { id: 'a', label: 'El uso de tecnicismos especializados', isCorrect: false },
            { id: 'b', label: 'La ausencia total de normas gramaticales', isCorrect: false },
            { id: 'c', label: 'El uso de expresiones familiares y espontáneas', isCorrect: true },
            { id: 'd', label: 'La rigidez sintáctica y léxica', isCorrect: false }
          ],
          explanation: 'El registro coloquial es informal, espontáneo y utiliza vocabulario cotidiano, frases hechas y muletillas.'
        },
        {
          id: 'lengua-lex-q1',
          tier: 'standard',
          prompt: 'La palabra \'paraguas\' se ha formado mediante:',
          options: [
            { id: 'a', label: 'Derivación', isCorrect: false },
            { id: 'b', label: 'Composición', isCorrect: true },
            { id: 'c', label: 'Parasíntesis', isCorrect: false },
            { id: 'd', label: 'Acronimia', isCorrect: false }
          ],
          explanation: 'Paraguas es una palabra compuesta formada por el verbo \'parar\' y el sustantivo \'aguas\'.'
        },
        {
          id: 'lengua-lex-q2',
          tier: 'standard',
          prompt: 'Un neologismo es:',
          options: [
            { id: 'a', label: 'Una palabra en desuso', isCorrect: false },
            { id: 'b', label: 'Una palabra de nueva creación', isCorrect: true },
            { id: 'c', label: 'Un sinónimo culto', isCorrect: false },
            { id: 'd', label: 'Un vulgarismo', isCorrect: false }
          ],
          explanation: 'Los neologismos son palabras de reciente creación o incorporación a una lengua, como \'tuitear\' o \'escanear\'.'
        },
        {
          id: 'lengua-morf-q1',
          tier: 'standard',
          prompt: 'En la oración \'Llegaremos mañana temprano\', las palabras subrayadas son respectivamente:',
          options: [
            { id: 'a', label: 'Adverbio de tiempo y adverbio de modo', isCorrect: true },
            { id: 'b', label: 'Sustantivo y adjetivo', isCorrect: false },
            { id: 'c', label: 'Adjetivo y adverbio de tiempo', isCorrect: false },
            { id: 'd', label: 'Dos adverbios de lugar', isCorrect: false }
          ],
          explanation: '\'Mañana\' indica tiempo y \'temprano\' indica modo o manera en que se realiza la acción.'
        },
        {
          id: 'lengua-sint-q1',
          tier: 'standard',
          prompt: 'En \'Me gusta el chocolate\', el sintagma \'el chocolate\' desempeña la función de:',
          options: [
            { id: 'a', label: 'Complemento directo', isCorrect: false },
            { id: 'b', label: 'Atributo', isCorrect: false },
            { id: 'c', label: 'Sujeto', isCorrect: true },
            { id: 'd', label: 'Complemento circunstancial', isCorrect: false }
          ],
          explanation: 'Con el verbo \'gustar\', el elemento que produce el gusto funciona como sujeto, no como complemento directo.'
        },
        {
          id: 'lengua-sint-q2',
          tier: 'standard',
          prompt: 'La oración \'Aunque llueva, iremos al parque\' es:',
          options: [
            { id: 'a', label: 'Coordinada adversativa', isCorrect: false },
            { id: 'b', label: 'Subordinada sustantiva', isCorrect: false },
            { id: 'c', label: 'Subordinada adverbial concesiva', isCorrect: true },
            { id: 'd', label: 'Coordinada copulativa', isCorrect: false }
          ],
          explanation: '\'Aunque\' introduce una subordinada concesiva que expresa un obstáculo que no impide la acción principal.'
        },
        {
          id: 'lengua-sint-q3',
          tier: 'standard',
          prompt: 'En \'Ojalá apruebe el examen\', el modo verbal subjuntivo expresa:',
          options: [
            { id: 'a', label: 'Una orden directa', isCorrect: false },
            { id: 'b', label: 'Un hecho real y objetivo', isCorrect: false },
            { id: 'c', label: 'Deseo o posibilidad', isCorrect: true },
            { id: 'd', label: 'Una pregunta retórica', isCorrect: false }
          ],
          explanation: 'El subjuntivo con \'ojalá\' expresa el deseo del hablante de que algo suceda, sin certeza de que ocurra.'
        },
        {
          id: 'lengua-text-q1',
          tier: 'standard',
          prompt: 'Los conectores \'sin embargo\', \'no obstante\' y \'aunque\' establecen una relación de:',
          options: [
            { id: 'a', label: 'Causa', isCorrect: false },
            { id: 'b', label: 'Consecuencia', isCorrect: false },
            { id: 'c', label: 'Oposición o contraste', isCorrect: true },
            { id: 'd', label: 'Adición', isCorrect: false }
          ],
          explanation: 'Estos conectores contraargumentativos introducen ideas que contrastan con lo expresado anteriormente.'
        },
        {
          id: 'lengua-text-q2',
          tier: 'standard',
          prompt: 'Un texto es coherente cuando:',
          options: [
            { id: 'a', label: 'Utiliza muchos conectores', isCorrect: false },
            { id: 'b', label: 'Presenta unidad temática y sentido global', isCorrect: true },
            { id: 'c', label: 'Es muy extenso', isCorrect: false },
            { id: 'd', label: 'Tiene muchas oraciones subordinadas', isCorrect: false }
          ],
          explanation: 'La coherencia garantiza que todas las ideas del texto se relacionen en torno a un tema común y tengan sentido global.'
        },
        {
          id: 'lengua-gen-q1',
          tier: 'standard',
          prompt: 'El texto argumentativo se caracteriza por:',
          options: [
            { id: 'a', label: 'Defender una tesis mediante razones', isCorrect: true },
            { id: 'b', label: 'Contar hechos en orden cronológico', isCorrect: false },
            { id: 'c', label: 'Describir espacios detalladamente', isCorrect: false },
            { id: 'd', label: 'Exponer datos sin valoración', isCorrect: false }
          ],
          explanation: 'La argumentación busca convencer al receptor de una opinión mediante argumentos y razonamientos lógicos.'
        }
      ]
    },
    {
      id: 'literatura-medieval-renacimiento',
      title: 'Literatura Medieval y Renacentista',
      questions: [
        {
          id: 'lit-medieval-q1',
          tier: 'standard',
          prompt: 'Las jarchas son composiciones líricas escritas en:',
          options: [
            { id: 'a', label: 'Latín eclesiástico', isCorrect: false },
            { id: 'b', label: 'Gallego-portugués', isCorrect: false },
            { id: 'c', label: 'Mozárabe', isCorrect: true },
            { id: 'd', label: 'Castellano primitivo', isCorrect: false }
          ],
          explanation: 'Las jarchas son breves poemas en mozárabe (romance hablado por cristianos en territorio musulmán) insertados en moaxajas.'
        },
        {
          id: 'lit-medieval-q2',
          tier: 'standard',
          prompt: 'El \'Cantar de Mio Cid\' pertenece al género de:',
          options: [
            { id: 'a', label: 'La lírica trovadoresca', isCorrect: false },
            { id: 'b', label: 'Los cantares de gesta', isCorrect: true },
            { id: 'c', label: 'El mester de clerecía', isCorrect: false },
            { id: 'd', label: 'La novela de caballerías', isCorrect: false }
          ],
          explanation: 'Los cantares de gesta narran hazañas de héroes en verso irregular y eran recitados por juglares en plazas públicas.'
        },
        {
          id: 'lit-sigloXV-q1',
          tier: 'standard',
          prompt: 'Las \'Coplas a la muerte de su padre\' de Jorge Manrique desarrollan el tema de:',
          options: [
            { id: 'a', label: 'El amor cortés', isCorrect: false },
            { id: 'b', label: 'La fugacidad de la vida y el poder igualador de la muerte', isCorrect: true },
            { id: 'c', label: 'La crítica social y política', isCorrect: false },
            { id: 'd', label: 'La descripción de batallas épicas', isCorrect: false }
          ],
          explanation: 'Manrique reflexiona sobre la muerte, el paso del tiempo y la fama, utilizando tópicos como el \'tempus fugit\' y el \'ubi sunt\'.'
        },
        {
          id: 'lit-renacimiento-q1',
          tier: 'standard',
          prompt: 'Garcilaso de la Vega introdujo en España:',
          options: [
            { id: 'a', label: 'El romance octosílabo', isCorrect: false },
            { id: 'b', label: 'El soneto endecasílabo', isCorrect: true },
            { id: 'c', label: 'La cuaderna vía', isCorrect: false },
            { id: 'd', label: 'El verso alejandrino', isCorrect: false }
          ],
          explanation: 'Garcilaso adaptó el soneto italiano (endecasílabo) y lo popularizó en la lírica española renacentista.'
        },
        {
          id: 'lit-renacimiento-q2',
          tier: 'standard',
          prompt: 'Fray Luis de León cultivó en su poesía temas como:',
          options: [
            { id: 'a', label: 'El desengaño barroco', isCorrect: false },
            { id: 'b', label: 'El paisaje urbano y cortesano', isCorrect: false },
            { id: 'c', label: 'La naturaleza, la soledad y la vida retirada', isCorrect: true },
            { id: 'd', label: 'Las aventuras picarescas', isCorrect: false }
          ],
          explanation: 'Fray Luis buscaba la paz espiritual en la naturaleza, el retiro y la contemplación, influido por Horacio y el neoplatonismo.'
        }
      ]
    },
    {
      id: 'literatura-barroco-ilustracion',
      title: 'Literatura Barroca e Ilustración',
      questions: [
        {
          id: 'lit-barroco-q1',
          tier: 'standard',
          prompt: 'El culteranismo de Góngora se caracteriza por:',
          options: [
            { id: 'a', label: 'La sencillez y claridad expresiva', isCorrect: false },
            { id: 'b', label: 'El uso de hipérbatos, metáforas complejas y cultismos', isCorrect: true },
            { id: 'c', label: 'La ironía y el humor popular', isCorrect: false },
            { id: 'd', label: 'El prosaísmo cotidiano', isCorrect: false }
          ],
          explanation: 'Góngora embellece la forma mediante recursos como el hipérbaton, cultismos latinos y metáforas rebuscadas.'
        },
        {
          id: 'lit-barroco-q2',
          tier: 'standard',
          prompt: 'Quevedo, en su poesía satírica, critica:',
          options: [
            { id: 'a', label: 'La naturaleza y el campo', isCorrect: false },
            { id: 'b', label: 'Las costumbres, vicios y tipos sociales de su época', isCorrect: true },
            { id: 'c', label: 'La religión cristiana', isCorrect: false },
            { id: 'd', label: 'La poesía amorosa petrarquista', isCorrect: false }
          ],
          explanation: 'Quevedo satiriza con mordacidad los defectos humanos, los tipos sociales y las hipocresías de la sociedad barroca.'
        },
        {
          id: 'lit-barroco-q3',
          tier: 'standard',
          prompt: 'Lope de Vega renovó el teatro español mediante:',
          options: [
            { id: 'a', label: 'La tragedia clásica de las tres unidades', isCorrect: false },
            { id: 'b', label: 'La comedia nueva en tres actos y mezcla de lo trágico y cómico', isCorrect: true },
            { id: 'c', label: 'El teatro experimental de vanguardia', isCorrect: false },
            { id: 'd', label: 'El auto sacramental exclusivamente', isCorrect: false }
          ],
          explanation: 'Lope rompió con las unidades clásicas y creó la \'comedia nueva\' en tres jornadas, con variedad métrica y mezcla de géneros.'
        },
        {
          id: 'lit-ilustracion-q1',
          tier: 'standard',
          prompt: 'El teatro neoclásico de Leandro Fernández de Moratín se caracteriza por:',
          options: [
            { id: 'a', label: 'El respeto a las tres unidades aristotélicas', isCorrect: true },
            { id: 'b', label: 'La mezcla de verso y prosa', isCorrect: false },
            { id: 'c', label: 'La ausencia de finalidad didáctica', isCorrect: false },
            { id: 'd', label: 'La exaltación de lo irracional', isCorrect: false }
          ],
          explanation: 'Moratín respeta las unidades de acción, tiempo y lugar, y busca educar al público mediante la sátira de costumbres.'
        }
      ]
    },
    {
      id: 'literatura-romanticismo-realismo',
      title: 'Romanticismo y Realismo',
      questions: [
        {
          id: 'lit-romanticismo-q1',
          tier: 'standard',
          prompt: 'José de Espronceda escribió el poema:',
          options: [
            { id: 'a', label: '\'Rimas\'', isCorrect: false },
            { id: 'b', label: '\'Soledades\'', isCorrect: false },
            { id: 'c', label: '\'Canción del pirata\'', isCorrect: true },
            { id: 'd', label: '\'Campos de Castilla\'', isCorrect: false }
          ],
          explanation: 'Espronceda exalta la libertad y rebeldía en \'Canción del pirata\', poema emblemático del Romanticismo español.'
        },
        {
          id: 'lit-romanticismo-q2',
          tier: 'standard',
          prompt: 'Las \'Rimas\' de Gustavo Adolfo Bécquer tratan principalmente sobre:',
          options: [
            { id: 'a', label: 'La crítica social y política', isCorrect: false },
            { id: 'b', label: 'El amor, la poesía y el desengaño', isCorrect: true },
            { id: 'c', label: 'Las hazañas militares', isCorrect: false },
            { id: 'd', label: 'La naturaleza americana', isCorrect: false }
          ],
          explanation: 'Bécquer desarrolla una lírica intimista centrada en el amor, la creación poética y el dolor por el desengaño amoroso.'
        },
        {
          id: 'lit-romanticismo-q3',
          tier: 'standard',
          prompt: 'Rosalía de Castro escribió en:',
          options: [
            { id: 'a', label: 'Catalán y castellano', isCorrect: false },
            { id: 'b', label: 'Gallego y castellano', isCorrect: true },
            { id: 'c', label: 'Solo en castellano', isCorrect: false },
            { id: 'd', label: 'Euskera y castellano', isCorrect: false }
          ],
          explanation: 'Rosalía escribió en gallego (\'Cantares gallegos\', \'Follas novas\') y castellano (\'En las orillas del Sar\'), reivindicando su lengua materna.'
        },
        {
          id: 'lit-realismo-q1',
          tier: 'standard',
          prompt: 'Benito Pérez Galdós en sus \'Episodios Nacionales\' narra:',
          options: [
            { id: 'a', label: 'Historias fantásticas y leyendas', isCorrect: false },
            { id: 'b', label: 'La historia de España del siglo XIX', isCorrect: true },
            { id: 'c', label: 'Mitos grecolatinos', isCorrect: false },
            { id: 'd', label: 'Biografías de santos', isCorrect: false }
          ],
          explanation: 'Los \'Episodios Nacionales\' son una serie de 46 novelas que reconstruyen la historia española desde Trafalgar hasta la Restauración.'
        },
        {
          id: 'lit-realismo-q2',
          tier: 'standard',
          prompt: '\'La Regenta\' de Leopoldo Alas Clarín retrata:',
          options: [
            { id: 'a', label: 'La sociedad rural andaluza', isCorrect: false },
            { id: 'b', label: 'La hipocresía de la burguesía provinciana de Vetusta', isCorrect: true },
            { id: 'c', label: 'Las guerras carlistas', isCorrect: false },
            { id: 'd', label: 'La vida en la corte madrileña', isCorrect: false }
          ],
          explanation: 'Clarín analiza la sociedad provinciana (Oviedo/Vetusta), criticando la hipocresía, el clericalismo y la moral burguesa.'
        }
      ]
    },
    {
      id: 'literatura-modernismo-98',
      title: 'Modernismo y Generación del 98',
      questions: [
        {
          id: 'lit-modernismo-q1',
          tier: 'standard',
          prompt: 'Rubén Darío introdujo en España:',
          options: [
            { id: 'a', label: 'El realismo social', isCorrect: false },
            { id: 'b', label: 'El Modernismo', isCorrect: true },
            { id: 'c', label: 'El teatro del absurdo', isCorrect: false },
            { id: 'd', label: 'La novela experimental', isCorrect: false }
          ],
          explanation: 'Rubén Darío renovó la lírica hispánica con \'Azul\' y \'Prosas profanas\', trayendo el Modernismo desde América.'
        },
        {
          id: 'lit-98-q1',
          tier: 'standard',
          prompt: 'Miguel de Unamuno en \'Niebla\' denomina a su novela como:',
          options: [
            { id: 'a', label: 'Novela lírica', isCorrect: false },
            { id: 'b', label: 'Nivola', isCorrect: true },
            { id: 'c', label: 'Novela psicológica', isCorrect: false },
            { id: 'd', label: 'Novela experimental', isCorrect: false }
          ],
          explanation: 'Unamuno llamó \'nivola\' a sus novelas para liberarlas de las convenciones realistas y explorar el existencialismo.'
        },
        {
          id: 'lit-98-q2',
          tier: 'standard',
          prompt: 'Antonio Machado, en \'Campos de Castilla\', describe:',
          options: [
            { id: 'a', label: 'El paisaje andaluz de su infancia', isCorrect: false },
            { id: 'b', label: 'Las costas gallegas', isCorrect: false },
            { id: 'c', label: 'El paisaje castellano y reflexiona sobre España', isCorrect: true },
            { id: 'd', label: 'Los jardines modernistas', isCorrect: false }
          ],
          explanation: 'Machado retrata Castilla (Soria) con tono sobrio y reflexiona sobre la decadencia española y la muerte de Leonor.'
        },
        {
          id: 'lit-98-q3',
          tier: 'standard',
          prompt: 'Valle-Inclán creó el género teatral del:',
          options: [
            { id: 'a', label: 'Drama histórico', isCorrect: false },
            { id: 'b', label: 'Esperpento', isCorrect: true },
            { id: 'c', label: 'Auto sacramental', isCorrect: false },
            { id: 'd', label: 'Teatro poético', isCorrect: false }
          ],
          explanation: 'El esperpento deforma sistemáticamente la realidad para mostrar lo grotesco de la sociedad española (\'Luces de bohemia\').'
        },
        {
          id: 'lit-98-q4',
          tier: 'standard',
          prompt: 'Pío Baroja se caracteriza por escribir novelas:',
          options: [
            { id: 'a', label: 'Con estructura clásica y argumento cerrado', isCorrect: false },
            { id: 'b', label: 'De acción rápida, personajes marginales y estilo directo', isCorrect: true },
            { id: 'c', label: 'Poéticas y simbolistas', isCorrect: false },
            { id: 'd', label: 'De crítica religiosa exclusivamente', isCorrect: false }
          ],
          explanation: 'Baroja prefiere la acción, personajes inadaptados y un estilo seco y directo, como en \'El árbol de la ciencia\'.'
        }
      ]
    },
    {
      id: 'literatura-generacion-27',
      title: 'Generación del 14 y del 27',
      questions: [
        {
          id: 'lit-14-q1',
          tier: 'standard',
          prompt: 'Juan Ramón Jiménez evolucionó desde una poesía modernista hacia una poesía:',
          options: [
            { id: 'a', label: 'Social y comprometida', isCorrect: false },
            { id: 'b', label: 'Pura y esencial', isCorrect: true },
            { id: 'c', label: 'Surrealista', isCorrect: false },
            { id: 'd', label: 'Neoclásica', isCorrect: false }
          ],
          explanation: 'Juan Ramón evolucionó hacia la \'poesía pura\' o desnuda, despojada de artificios, buscando la esencia poética.'
        },
        {
          id: 'lit-27-q1',
          tier: 'standard',
          prompt: 'Federico García Lorca en \'Romancero gitano\' une:',
          options: [
            { id: 'a', label: 'Tradición popular y vanguardia', isCorrect: true },
            { id: 'b', label: 'Realismo social y naturalismo', isCorrect: false },
            { id: 'c', label: 'Teatro clásico y épica medieval', isCorrect: false },
            { id: 'd', label: 'Costumbrismo y folletín', isCorrect: false }
          ],
          explanation: 'Lorca fusiona el romance tradicional con metáforas vanguardistas, creando una obra innovadora y popular a la vez.'
        },
        {
          id: 'lit-27-q2',
          tier: 'standard',
          prompt: 'El tema central de \'La casa de Bernarda Alba\' de Lorca es:',
          options: [
            { id: 'a', label: 'La Guerra Civil', isCorrect: false },
            { id: 'b', label: 'La opresión de la mujer y el autoritarismo', isCorrect: true },
            { id: 'c', label: 'La modernización de España', isCorrect: false },
            { id: 'd', label: 'El amor cortés', isCorrect: false }
          ],
          explanation: 'Bernarda impone un luto riguroso que simboliza la represión de la libertad y la sexualidad femeninas en la España tradicional.'
        },
        {
          id: 'lit-27-q3',
          tier: 'standard',
          prompt: 'Rafael Alberti en \'Marinero en tierra\' evoca:',
          options: [
            { id: 'a', label: 'El paisaje castellano', isCorrect: false },
            { id: 'b', label: 'La nostalgia del mar y su Cádiz natal', isCorrect: true },
            { id: 'c', label: 'La guerra y el exilio', isCorrect: false },
            { id: 'd', label: 'El mundo surrealista onírico', isCorrect: false }
          ],
          explanation: 'Alberti expresa la añoranza del mar gaditano con un estilo neopopularista de influencia lorquiana.'
        },
        {
          id: 'lit-27-q4',
          tier: 'standard',
          prompt: 'Luis Cernuda desarrolla el tema de:',
          options: [
            { id: 'a', label: 'El heroísmo épico', isCorrect: false },
            { id: 'b', label: 'La fe religiosa', isCorrect: false },
            { id: 'c', label: 'El deseo frente a la realidad', isCorrect: true },
            { id: 'd', label: 'La naturaleza bucólica', isCorrect: false }
          ],
          explanation: 'Cernuda plantea el conflicto entre \'la realidad y el deseo\', explorando la soledad, el amor y la marginalidad.'
        },
        {
          id: 'lit-franquismo-q1',
          tier: 'standard',
          prompt: '\'La familia de Pascual Duarte\' de Camilo José Cela inaugura:',
          options: [
            { id: 'a', label: 'El realismo social', isCorrect: false },
            { id: 'b', label: 'El tremendismo', isCorrect: true },
            { id: 'c', label: 'La novela experimental', isCorrect: false },
            { id: 'd', label: 'La novela histórica', isCorrect: false }
          ],
          explanation: 'Cela muestra con crudeza la violencia y miseria en la España de posguerra, inaugurando el tremendismo narrativo.'
        }
      ]
    }
  ],
}

