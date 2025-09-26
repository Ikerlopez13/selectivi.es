import type { Subject } from './types'

export const languageES: Subject = {
  id: 'lengua',
  name: 'Lengua Castellana y Literatura',
  topics: [
    {
      id: 'comunicacion-funciones',
      title: 'La comunicación y las funciones del lenguaje',
      questions: [
        {
          id: 'lengua-com-func-q1',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje predomina en una noticia que informa hechos de forma objetiva?',
          options: [
            { id: 'a', label: 'Función emotiva', isCorrect: false },
            { id: 'b', label: 'Función conativa', isCorrect: false },
            { id: 'c', label: 'Función referencial', isCorrect: true },
            { id: 'd', label: 'Función metalingüística', isCorrect: false },
          ],
          explanation: 'La función referencial transmite información objetiva, centrada en el referente.'
        },
        {
          id: 'lengua-com-func-q2',
          tier: 'standard',
          prompt: '¿Qué función se utiliza cuando un poema se dirige al lector para provocar una emoción?',
          options: [
            { id: 'a', label: 'Función referencial', isCorrect: false },
            { id: 'b', label: 'Función expresiva', isCorrect: true },
            { id: 'c', label: 'Función fática', isCorrect: false },
            { id: 'd', label: 'Función metalingüística', isCorrect: false },
          ],
          explanation: 'La función expresiva se centra en la actitud y emoción del emisor.'
        },
        {
          id: 'lengua-com-func-q3',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje se advierte al verificar si el canal de comunicación está activo en una conversación telefónica?',
          options: [
            { id: 'a', label: 'Función referencial', isCorrect: false },
            { id: 'b', label: 'Función poética', isCorrect: false },
            { id: 'c', label: 'Función fática', isCorrect: true },
            { id: 'd', label: 'Función apelativa', isCorrect: false },
          ],
          explanation: 'La función fática se emplea para asegurar que el canal está abierto y funcionando.'
        },
        {
          id: 'lengua-com-func-q4',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje predomina en la redacción de una noticia periodística para informar de hechos objetivos?',
          options: [
            { id: 'a', label: 'Expresiva', isCorrect: false },
            { id: 'b', label: 'Conativa', isCorrect: false },
            { id: 'c', label: 'Referencial', isCorrect: true },
            { id: 'd', label: 'Metalingüística', isCorrect: false },
          ],
          explanation: 'La función referencial transmite información objetiva sobre la realidad.'
        },
        {
          id: 'lengua-com-func-q5',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje se utiliza para expresar afecto o agradecimiento?',
          options: [
            { id: 'a', label: 'Referencial', isCorrect: false },
            { id: 'b', label: 'Expresiva', isCorrect: true },
            { id: 'c', label: 'Conativa', isCorrect: false },
            { id: 'd', label: 'Metalingüística', isCorrect: false },
          ],
          explanation: 'La función expresiva transmite emociones del emisor.'
        },
        {
          id: 'lengua-com-func-q6',
          tier: 'standard',
          prompt: '¿Qué función del lenguaje se utiliza para iniciar o mantener la conversación?',
          options: [
            { id: 'a', label: 'Referencial', isCorrect: false },
            { id: 'b', label: 'Fática', isCorrect: true },
            { id: 'c', label: 'Metalingüística', isCorrect: false },
            { id: 'd', label: 'Expresiva', isCorrect: false },
          ],
          explanation: 'La función fática sirve para abrir, mantener o cerrar el canal.'
        },
        {
          id: 'lengua-com-func-q7',
          tier: 'standard',
          prompt: 'En un cartel publicitario, ¿qué función del lenguaje predomina para influir al receptor?',
          options: [
            { id: 'a', label: 'Función poética', isCorrect: false },
            { id: 'b', label: 'Función apelativa (conativa)', isCorrect: true },
            { id: 'c', label: 'Función referencial', isCorrect: false },
            { id: 'd', label: 'Función metalingüística', isCorrect: false },
          ],
          explanation: 'La función apelativa busca provocar una respuesta o acción del receptor.'
        }
      ]
    },
    {
      id: 'variedades-lengua',
      title: 'Las variedades de la lengua: dialectos y registros',
      questions: [
        {
          id: 'lengua-var-q1',
          tier: 'standard',
          prompt: '¿Qué ejemplo describe mejor un registro formal?',
          options: [
            { id: 'a', label: '"¿Qué tal?"', isCorrect: false },
            { id: 'b', label: '"Estimado señor, le ruego..."', isCorrect: true },
            { id: 'c', label: '"Qué pasa?"', isCorrect: false },
            { id: 'd', label: '"Oye, ¿qué haces?"', isCorrect: false },
          ],
          explanation: 'La fórmula de cortesía y el lenguaje orientado a la etiqueta conforman el registro formal.'
        },
        {
          id: 'lengua-var-q2',
          tier: 'standard',
          prompt: '¿Qué no se considera un criterio típico de variación lingüística?',
          options: [
            { id: 'a', label: 'Región', isCorrect: false },
            { id: 'b', label: 'Edad', isCorrect: false },
            { id: 'c', label: 'Horario de uso', isCorrect: true },
            { id: 'd', label: 'Nivel sociocultural', isCorrect: false },
          ],
          explanation: 'La variación suele estar ligada a región, edad, sexo, nivel sociocultural; el horario no es un criterio determinante.'
        },
        {
          id: 'lengua-var-q3',
          tier: 'standard',
          prompt: '¿Cuál es la diferencia principal entre dialecto y registro?',
          options: [
            { id: 'a', label: 'El dialecto es geográfico; el registro es situacional o funcional.', isCorrect: true },
            { id: 'b', label: 'El dialecto es ficcional; el registro es real.', isCorrect: false },
            { id: 'c', label: 'El dialecto es formal; el registro es informal.', isCorrect: false },
            { id: 'd', label: 'No hay diferencia.', isCorrect: false },
          ],
          explanation: 'El dialecto distingue variantes geográficas; el registro se refiere a la adecuación situacional o funcional.'
        },
        {
          id: 'lengua-var-q4',
          tier: 'standard',
          prompt: '¿Cuál de las siguientes afirmaciones describe mejor un registro de uso formal?',
          options: [
            { id: 'a', label: 'Uso coloquial', isCorrect: false },
            { id: 'b', label: 'Uso en contextos informales', isCorrect: false },
            { id: 'c', label: 'Nivel de formalidad y adecuación situacional', isCorrect: true },
            { id: 'd', label: 'Nivel regional', isCorrect: false },
          ],
          explanation: 'El registro formal se adapta al contexto y a la audiencia.'
        },
        {
          id: 'lengua-var-q5',
          tier: 'standard',
          prompt: 'En un informe técnico, ¿qué registro se utiliza mayoritariamente?',
          options: [
            { id: 'a', label: 'Coloquial', isCorrect: false },
            { id: 'b', label: 'Vulgar', isCorrect: false },
            { id: 'c', label: 'Culto', isCorrect: true },
            { id: 'd', label: 'Familiar', isCorrect: false },
          ],
          explanation: 'Los textos técnicos emplean registro culto y objetivo.'
        },
        {
          id: 'lengua-var-q6',
          tier: 'standard',
          prompt: '¿Qué término describe la variante regional de una lengua?',
          options: [
            { id: 'a', label: 'Registro', isCorrect: false },
            { id: 'b', label: 'Dialecto', isCorrect: true },
            { id: 'c', label: 'Sociolecto', isCorrect: false },
            { id: 'd', label: 'Idiolecto', isCorrect: false },
          ],
          explanation: 'El dialecto es una variante regional de una lengua.'
        },
        {
          id: 'lengua-var-q7',
          tier: 'standard',
          prompt: '¿Qué rasgo caracteriza el registro informal frente al registro culto?',
          options: [
            { id: 'a', label: 'Mayor precisión léxica', isCorrect: false },
            { id: 'b', label: 'Uso de jerga y coloquialismos', isCorrect: true },
            { id: 'c', label: 'Mayor formalidad', isCorrect: false },
            { id: 'd', label: 'Estructuras gramaticales más complejas', isCorrect: false },
          ],
          explanation: 'El registro informal incluye jerga, coloquialismos y menor formalidad.'
        }
      ]
    },
    {
      id: 'lexico-formacion',
      title: 'El léxico: formación de palabras, neologismos, extranjerismos',
      questions: [
        {
          id: 'lengua-lex-q1',
          tier: 'standard',
          prompt: '¿Qué es un neologismo?',
          options: [
            { id: 'a', label: 'Palabra prestada de otra lengua', isCorrect: false },
            { id: 'b', label: 'Palabra existente que cambia de significado', isCorrect: false },
            { id: 'c', label: 'Palabra nueva que nombra un concepto reciente', isCorrect: true },
            { id: 'd', label: 'Palabra formada por combinación de dos palabras', isCorrect: false },
          ],
          explanation: 'Un neologismo es una palabra nueva creada para designar un nuevo concepto.'
        },
        {
          id: 'lengua-lex-q2',
          tier: 'standard',
          prompt: '¿Qué es un extranjerismo?',
          options: [
            { id: 'a', label: 'Palabra adaptada fonéticamente a la lengua', isCorrect: false },
            { id: 'b', label: 'Palabra prestada de otra lengua o uso extranjero sin adaptación', isCorrect: true },
            { id: 'c', label: 'Palabra que cambia de significado', isCorrect: false },
            { id: 'd', label: 'Palabra formada por derivación de origen latino', isCorrect: false },
          ],
          explanation: 'Palabra tomada de otra lengua sin adaptación fonética o morfológica.'
        },
        {
          id: 'lengua-lex-q3',
          tier: 'standard',
          prompt: "¿Qué se produce por derivación con el sufijo -ción a la base 'informar'?",
          options: [
            { id: 'a', label: 'informante', isCorrect: false },
            { id: 'b', label: 'información', isCorrect: true },
            { id: 'c', label: 'informativo', isCorrect: false },
            { id: 'd', label: 'informador', isCorrect: false },
          ],
          explanation: 'La derivación con -ción genera el sustantivo de acción: información.'
        },
        {
          id: 'lengua-lex-q4',
          tier: 'standard',
          prompt: '¿Qué tipo de conocimiento léxico describe mejor un calco semántico?',
          options: [
            { id: 'a', label: 'Palabras prestadas con forma fonética semejante', isCorrect: false },
            { id: 'b', label: 'Palabras nuevas por sentido traducido de otra lengua', isCorrect: true },
            { id: 'c', label: 'Palabra que mantiene su significado original sin cambios', isCorrect: false },
            { id: 'd', label: 'Palabra creada por composición', isCorrect: false },
          ],
          explanation: 'Traslada el significado de una expresión de otra lengua manteniendo el sentido.'
        },
        {
          id: 'lengua-lex-q5',
          tier: 'standard',
          prompt: '¿Qué es un extranjerismo?',
          options: [
            { id: 'a', label: 'Palabra formada por derivación en español', isCorrect: false },
            { id: 'b', label: 'Palabra de origen extranjero usada en español sin traducción', isCorrect: true },
            { id: 'c', label: 'Palabra que cambia de significado', isCorrect: false },
            { id: 'd', label: 'Palabra que se usa solo en una región', isCorrect: false },
          ],
          explanation: 'Término tomado de otra lengua tal como se usa.'
        },
        {
          id: 'lengua-lex-q6',
          tier: 'standard',
          prompt: '¿Qué es un neologismo?',
          options: [
            { id: 'a', label: 'Palabra antigua ya en desuso', isCorrect: false },
            { id: 'b', label: 'Palabra existente con cambio de significado', isCorrect: false },
            { id: 'c', label: 'Palabra nueva creada o introducida para un concepto reciente', isCorrect: true },
            { id: 'd', label: 'Palabra de origen extranjero sin adaptación', isCorrect: false },
          ],
          explanation: 'Palabra nueva o recientemente incorporada al uso.'
        },
        {
          id: 'lengua-lex-q7',
          tier: 'standard',
          prompt: '¿Qué es un prefijo?',
          options: [
            { id: 'a', label: 'Morfema que se añade al inicio de la palabra', isCorrect: true },
            { id: 'b', label: 'Morfema que se añade al final de la palabra', isCorrect: false },
            { id: 'c', label: 'Raíz de la palabra', isCorrect: false },
            { id: 'd', label: 'Desinencia de la palabra', isCorrect: false },
          ],
          explanation: 'El prefijo se antepone a la raíz para formar nuevas palabras.'
        }
      ]
    },
    {
      id: 'morfologia',
      title: 'Morfología: categorías gramaticales',
      questions: [
        {
          id: 'lengua-morf-q1',
          tier: 'standard',
          prompt: '¿Qué clase gramatical es "gato"?',
          options: [
            { id: 'a', label: 'Verbo', isCorrect: false },
            { id: 'b', label: 'Sustantivo', isCorrect: true },
            { id: 'c', label: 'Adjetivo', isCorrect: false },
            { id: 'd', label: 'Pronombre', isCorrect: false },
          ],
          explanation: 'Gato es un sustantivo común que nombra un objeto concreto.'
        },
        {
          id: 'lengua-morf-q2',
          tier: 'standard',
          prompt: '¿Qué clase gramatical es "rapidísimamente"?',
          options: [
            { id: 'a', label: 'Adverbio', isCorrect: true },
            { id: 'b', label: 'Adjetivo', isCorrect: false },
            { id: 'c', label: 'Sustantivo', isCorrect: false },
            { id: 'd', label: 'Gerundio', isCorrect: false },
          ],
          explanation: 'Es un adverbio de modo derivado de rápido.'
        },
        {
          id: 'lengua-morf-q3',
          tier: 'standard',
          prompt: '¿Qué morfema flexivo expresa plural en la palabra "libro"?',
          options: [
            { id: 'a', label: '-o', isCorrect: false },
            { id: 'b', label: '-s', isCorrect: true },
            { id: 'c', label: '-os', isCorrect: false },
            { id: 'd', label: '-as', isCorrect: false },
          ],
          explanation: 'El plural de libro se forma con el sufijo -s.'
        },
        {
          id: 'lengua-morf-q4',
          tier: 'standard',
          prompt: '¿Cuál es la diferencia entre sustantivo común y sustantivo propio?',
          options: [
            { id: 'a', label: 'Común nombra seres de manera genérica; propio nombra entidades específicas', isCorrect: true },
            { id: 'b', label: 'Común se escribe siempre con mayúscula; propio no', isCorrect: false },
            { id: 'c', label: 'Propio nombra conceptos abstractos; común nombra personas', isCorrect: false },
            { id: 'd', label: 'No hay diferencia', isCorrect: false },
          ],
          explanation: 'Sustantivos comunes nombran clases generales; propios, entidades singulares y específicas.'
        },
        {
          id: 'lengua-morf-q5',
          tier: 'standard',
          prompt: '¿Cuál de estas palabras es un sustantivo?',
          options: [
            { id: 'a', label: 'correr', isCorrect: false },
            { id: 'b', label: 'libro', isCorrect: true },
            { id: 'c', label: 'rápido', isCorrect: false },
            { id: 'd', label: 'bonita', isCorrect: false },
          ],
          explanation: '"Libro" designa una cosa; es un sustantivo.'
        },
        {
          id: 'lengua-morf-q6',
          tier: 'standard',
          prompt: '¿Cuál de estas palabras funciona como determinante en la oración "la casa"?',
          options: [
            { id: 'a', label: 'la', isCorrect: true },
            { id: 'b', label: 'casa', isCorrect: false },
            { id: 'c', label: 'en', isCorrect: false },
            { id: 'd', label: 'casa', isCorrect: false },
          ],
          explanation: 'En "la casa", "la" es un determinante artículo.'
        },
        {
          id: 'lengua-morf-q7',
          tier: 'standard',
          prompt: '¿Qué proceso de formación de palabras está presente en "releer"?',
          options: [
            { id: 'a', label: 'Derivación', isCorrect: false },
            { id: 'b', label: 'Prefijación', isCorrect: true },
            { id: 'c', label: 'Sufijación', isCorrect: false },
            { id: 'd', label: 'Parasíntesis', isCorrect: false },
          ],
          explanation: 'Añade el prefijo "re-" a la base "leer".'
        },
        {
          id: 'lengua-morf-q8',
          tier: 'standard',
          prompt: '¿Qué es un sufijo?',
          options: [
            { id: 'a', label: 'Morfema que se añade al inicio', isCorrect: false },
            { id: 'b', label: 'Morfema que se añade al final', isCorrect: true },
            { id: 'c', label: 'Raíz de la palabra', isCorrect: false },
            { id: 'd', label: 'Desinencia que señala género o número', isCorrect: false },
          ],
          explanation: 'El sufijo se pospone a la raíz para derivar o flexionar palabras.'
        }
      ]
    },
    {
      id: 'sintaxis',
      title: 'Sintaxis: análisis de oraciones simples y compuestas',
      questions: [
        {
          id: 'lengua-sint-q1',
          tier: 'standard',
          prompt: '¿Qué tipo de oración es "María estudia y aprueba"?',
          options: [
            { id: 'a', label: 'Oración simple', isCorrect: false },
            { id: 'b', label: 'Oración compuesta subordinada', isCorrect: false },
            { id: 'c', label: 'Oración compuesta coordinada copulativa', isCorrect: true },
            { id: 'd', label: 'Oración con relativo', isCorrect: false },
          ],
          explanation: 'Se trata de una oración compuesta coordinada por la conjunción copulativa "y".'
        },
        {
          id: 'lengua-sint-q2',
          tier: 'standard',
          prompt: '¿Qué tipo de oración es "Si llueve, iremos"?',
          options: [
            { id: 'a', label: 'Oración simple', isCorrect: false },
            { id: 'b', label: 'Oración compuesta copulativa', isCorrect: false },
            { id: 'c', label: 'Oración compuesta subordinada adverbial condicional', isCorrect: true },
            { id: 'd', label: 'Oración compuesta sustantiva', isCorrect: false },
          ],
          explanation: 'Contiene una oración subordinada adverbial condicional (si llueve) y una principal.'
        },
        {
          id: 'lengua-sint-q3',
          tier: 'standard',
          prompt: 'En la oración "Quiero que vengas mañana", ¿qué clase de oración es "que vengas mañana"?',
          options: [
            { id: 'a', label: 'Subordinada sustantiva', isCorrect: true },
            { id: 'b', label: 'Subordinada adjetiva', isCorrect: false },
            { id: 'c', label: 'Subordinada adverbial', isCorrect: false },
            { id: 'd', label: 'Coordinada', isCorrect: false },
          ],
          explanation: 'Es una subordinada sustantiva que funciona como complemento directo del verbo "quiero".'
        },
        {
          id: 'lengua-sint-q4',
          tier: 'standard',
          prompt: '¿Qué función expresan las conjunciones como "y", "o" y "pero"?',
          options: [
            { id: 'a', label: 'Adición', isCorrect: true },
            { id: 'b', label: 'Causa', isCorrect: false },
            { id: 'c', label: 'Concesión', isCorrect: false },
            { id: 'd', label: 'Consecutión', isCorrect: false },
          ],
          explanation: 'Estas conjunciones coordinantes expresan relación de adición u oposición según la palabra.'
        },
        {
          id: 'lengua-sint-q5',
          tier: 'standard',
          prompt: '¿Qué tipo de oración es "Si llueve, cancelaremos el picnic"?',
          options: [
            { id: 'a', label: 'Oración simple', isCorrect: false },
            { id: 'b', label: 'Oración compuesta coordinada', isCorrect: false },
            { id: 'c', label: 'Oración compuesta subordinada (condicional)', isCorrect: true },
            { id: 'd', label: 'Oración compuesta sin conjunción', isCorrect: false },
          ],
          explanation: 'Subordinada condicional introducida por "si".'
        },
        {
          id: 'lengua-sint-q6',
          tier: 'standard',
          prompt: '¿Qué tipo de oración es "Llegaron los resultados"?',
          options: [
            { id: 'a', label: 'Oración simple', isCorrect: true },
            { id: 'b', label: 'Oración coordinada', isCorrect: false },
            { id: 'c', label: 'Oración subordinada', isCorrect: false },
            { id: 'd', label: 'Oración pasiva', isCorrect: false },
          ],
          explanation: 'Oración simple con sujeto y predicado.'
        },
        {
          id: 'lengua-sint-q7',
          tier: 'standard',
          prompt: '¿Qué clasificación corresponde a la oración "Abre la ventana y llama a tu madre"?',
          options: [
            { id: 'a', label: 'Oración simple', isCorrect: false },
            { id: 'b', label: 'Oración coordinada copulativa', isCorrect: true },
            { id: 'c', label: 'Oración subordinada', isCorrect: false },
            { id: 'd', label: 'Oración unimembre', isCorrect: false },
          ],
          explanation: 'Dos oraciones independientes unidas por "y".'
        }
      ]
    },
    {
      id: 'modalidades-subjuntivo',
      title: 'Modalidades oracionales y valores del subjuntivo',
      questions: [
        {
          id: 'lengua-modsub-q1',
          tier: 'standard',
          prompt: '¿Qué valor del subjuntivo se utiliza para expresar deseo?',
          options: [
            { id: 'a', label: 'Desiderativo', isCorrect: true },
            { id: 'b', label: 'Dubitativo', isCorrect: false },
            { id: 'c', label: 'Intencional', isCorrect: false },
            { id: 'd', label: 'Afirmativo', isCorrect: false },
          ],
          explanation: 'El subjuntivo puede expresar deseos o aspiraciones.'
        },
        {
          id: 'lengua-modsub-q2',
          tier: 'standard',
          prompt: 'En la oración "Para que estudies, te dejaré salir", ¿qué valor del subjuntivo predomina?',
          options: [
            { id: 'a', label: 'Desiderativo', isCorrect: false },
            { id: 'b', label: 'Dubitativo', isCorrect: false },
            { id: 'c', label: 'Final', isCorrect: true },
            { id: 'd', label: 'Concesivo', isCorrect: false },
          ],
          explanation: 'Indica finalidad o efecto deseado para lograr un objetivo.'
        },
        {
          id: 'lengua-modsub-q3',
          tier: 'standard',
          prompt: '¿Qué valor del subjuntivo aparece para expresar duda o hipótesis?',
          options: [
            { id: 'a', label: 'Desiderativo', isCorrect: false },
            { id: 'b', label: 'Dubitativo', isCorrect: true },
            { id: 'c', label: 'Concesivo', isCorrect: false },
            { id: 'd', label: 'Afirmativo', isCorrect: false },
          ],
          explanation: 'El subjuntivo puede expresar duda, probabilidad o hipótesis en ciertos contextos.'
        },
        {
          id: 'lengua-modsub-q4',
          tier: 'standard',
          prompt: 'En "Ojalá haya sido todo un error", ¿qué valor expresa el subjuntivo?',
          options: [
            { id: 'a', label: 'Deseo', isCorrect: true },
            { id: 'b', label: 'Duda', isCorrect: false },
            { id: 'c', label: 'Probabilidad', isCorrect: false },
            { id: 'd', label: 'Obligación', isCorrect: false },
          ],
          explanation: 'Expresa deseo o esperanza.'
        },
        {
          id: 'lengua-modsub-q5',
          tier: 'standard',
          prompt: '¿Qué valor expresa el subjuntivo en "Es posible que llueva"?',
          options: [
            { id: 'a', label: 'Deseo', isCorrect: false },
            { id: 'b', label: 'Duda', isCorrect: false },
            { id: 'c', label: 'Probabilidad', isCorrect: true },
            { id: 'd', label: 'Obligación', isCorrect: false },
          ],
          explanation: 'Indica posibilidad o probabilidad.'
        }
      ]
    },
    {
      id: 'cohesion-coherencia',
      title: 'Cohesión y coherencia textual',
      questions: [
        {
          id: 'lengua-cohes-q1',
          tier: 'standard',
          prompt: '¿Qué recurso mejora la cohesión mediante la repetición de una palabra o su sustitución por pronombres?',
          options: [
            { id: 'a', label: 'Cohesión léxica', isCorrect: true },
            { id: 'b', label: 'Coherencia global', isCorrect: false },
            { id: 'c', label: 'Metáfora', isCorrect: false },
            { id: 'd', label: 'Sinonimia', isCorrect: false },
          ],
          explanation: 'La cohesión léxica se logra con la repetición o sustitución de palabras.'
        },
        {
          id: 'lengua-cohes-q2',
          tier: 'standard',
          prompt: '¿Qué tipo de conectores produce una progresión en ideas tal como "además", "también"?',
          options: [
            { id: 'a', label: 'Consecutivos', isCorrect: false },
            { id: 'b', label: 'Adición', isCorrect: true },
            { id: 'c', label: 'Causa', isCorrect: false },
            { id: 'd', label: 'Conclusión', isCorrect: false },
          ],
          explanation: 'Conectores de adición introducen ideas adicionales.'
        },
        {
          id: 'lengua-cohes-q3',
          tier: 'standard',
          prompt: 'En un texto, ¿qué recurso se utiliza para evitar repeticiones y mantener la cohesión?',
          options: [
            { id: 'a', label: 'Anáfora', isCorrect: true },
            { id: 'b', label: 'Catáfora', isCorrect: false },
            { id: 'c', label: 'Metáfora', isCorrect: false },
            { id: 'd', label: 'Elipsis', isCorrect: false },
          ],
          explanation: 'La anáfora usa referencias para evitar repeticiones, manteniendo la cohesión.'
        },
        {
          id: 'lengua-cohes-q4',
          tier: 'standard',
          prompt: '¿Qué recurso de cohesión utiliza la expresión "lo que dije" para aludir a una idea previamente mencionada?',
          options: [
            { id: 'a', label: 'Sustitución', isCorrect: false },
            { id: 'b', label: 'Elipsis', isCorrect: false },
            { id: 'c', label: 'Anáfora', isCorrect: true },
            { id: 'd', label: 'Concordancia', isCorrect: false },
          ],
          explanation: 'La anáfora retoma un referente previo.'
        },
        {
          id: 'lengua-cohes-q5',
          tier: 'standard',
          prompt: '¿Qué recurso de cohesión es la repetición de palabras al inicio de oraciones sucesivas?',
          options: [
            { id: 'a', label: 'Reiteración', isCorrect: false },
            { id: 'b', label: 'Sustitución', isCorrect: false },
            { id: 'c', label: 'Anáfora', isCorrect: true },
            { id: 'd', label: 'Parataxis', isCorrect: false },
          ],
          explanation: 'La anáfora también designa la repetición inicial con fines cohesivos.'
        },
        {
          id: 'lengua-cohes-q6',
          tier: 'standard',
          prompt: '¿Qué recurso de cohesión se utiliza para evitar repeticiones excesivas de palabras?',
          options: [
            { id: 'a', label: 'Sinonimia', isCorrect: true },
            { id: 'b', label: 'Reiteración', isCorrect: false },
            { id: 'c', label: 'Conectores', isCorrect: false },
            { id: 'd', label: 'Elipsis', isCorrect: false },
          ],
          explanation: 'La sinonimia evita repeticiones al emplear palabras de significado similar.'
        }
      ]
    },
    {
      id: 'generos-discursivos',
      title: 'Géneros discursivos: narración, descripción, argumentación, exposición, diálogo',
      questions: [
        {
          id: 'lengua-generos-q1',
          tier: 'standard',
          prompt: '¿Qué rasgo caracteriza principalmente a la narrativa?',
          options: [
            { id: 'a', label: 'Descripciones detalladas de objetos', isCorrect: false },
            { id: 'b', label: 'Desarrollo de hechos en un tiempo y narrador', isCorrect: true },
            { id: 'c', label: 'Rigor expositivo sin personajes', isCorrect: false },
            { id: 'd', label: 'Diálogo entre personajes', isCorrect: false },
          ],
          explanation: 'La narrativa presenta hechos en secuencia temporal y con un narrador.'
        },
        {
          id: 'lengua-generos-q2',
          tier: 'standard',
          prompt: '¿Qué rasgo define principalmente la descripción?',
          options: [
            { id: 'a', label: 'Presenta hechos objetivos', isCorrect: false },
            { id: 'b', label: 'Carácter histórico', isCorrect: false },
            { id: 'c', label: 'Retrata las características de un objeto, escena o sujeto', isCorrect: true },
            { id: 'd', label: 'Narra una acción en pasado', isCorrect: false },
          ],
          explanation: 'La descripción se centra en presentar rasgos perceptibles.'
        },
        {
          id: 'lengua-generos-q3',
          tier: 'standard',
          prompt: '¿Qué rasgo define la argumentación?',
          options: [
            { id: 'a', label: 'Relata hechos en secuencia', isCorrect: false },
            { id: 'b', label: 'Expone una información de forma objetiva', isCorrect: false },
            { id: 'c', label: 'Defiende una tesis con razonamientos', isCorrect: true },
            { id: 'd', label: 'Presenta un diálogo entre personajes', isCorrect: false },
          ],
          explanation: 'La argumentación persigue persuadir o convencer mediante razonamiento y pruebas.'
        },
        {
          id: 'lengua-generos-q4',
          tier: 'standard',
          prompt: '¿Qué rasgo caracteriza el diálogo en un texto narrativo?',
          options: [
            { id: 'a', label: 'Interacciones orales entre personajes', isCorrect: true },
            { id: 'b', label: 'Descripción de lugares', isCorrect: false },
            { id: 'c', label: 'Exposición de ideas', isCorrect: false },
            { id: 'd', label: 'Narración en pasado', isCorrect: false },
          ],
          explanation: 'El diálogo reproduce la conversación entre personajes dentro de la narrativa.'
        },
        {
          id: 'lengua-generos-q5',
          tier: 'standard',
          prompt: '¿Qué género se caracteriza por presentar hechos y acciones en una secuencia temporal?',
          options: [
            { id: 'a', label: 'Narración', isCorrect: true },
            { id: 'b', label: 'Descripción', isCorrect: false },
            { id: 'c', label: 'Exposición', isCorrect: false },
            { id: 'd', label: 'Diálogo', isCorrect: false },
          ],
          explanation: 'La narración organiza eventos en el tiempo.'
        },
        {
          id: 'lengua-generos-q6',
          tier: 'standard',
          prompt: '¿Qué género se emplea para presentar hechos y argumentos de forma organizada para convencer?',
          options: [
            { id: 'a', label: 'Narración', isCorrect: false },
            { id: 'b', label: 'Descripción', isCorrect: false },
            { id: 'c', label: 'Exposición', isCorrect: false },
            { id: 'd', label: 'Argumentación', isCorrect: true },
          ],
          explanation: 'La argumentación busca persuadir y justificar tesis.'
        }
      ]
    },
    {
      id: 'lit-medieval',
      title: 'Literatura medieval: jarchas, cantares de gesta, Mío Cid, lírica culta y popular',
      questions: [
        {
          id: 'lengua-lit-med-q1',
          tier: 'standard',
          prompt: '¿Qué género predomina en El Cantar de Mio Cid?',
          options: [
            { id: 'a', label: 'Cantar de gesta', isCorrect: true },
            { id: 'b', label: 'Novela', isCorrect: false },
            { id: 'c', label: 'Romance', isCorrect: false },
            { id: 'd', label: 'Letrilla', isCorrect: false },
          ],
          explanation: 'El Cantar de Mio Cid es un cantar de gesta, épica y heroica.'
        },
        {
          id: 'lengua-lit-med-q2',
          tier: 'standard',
          prompt: 'La lírica culta medieval se diferencia de la lírica popular principalmente por...',
          options: [
            { id: 'a', label: 'Origen geográfico', isCorrect: false },
            { id: 'b', label: 'Nivel de complejidad y discurso culto', isCorrect: true },
            { id: 'c', label: 'Índice de rima irregular', isCorrect: false },
            { id: 'd', label: 'Uso de prosa', isCorrect: false },
          ],
          explanation: 'La lírica culta emplea rasgos formales y un alto nivel de abstracción, frente a la lírica popular.'
        },
        {
          id: 'lengua-lit-med-q3',
          tier: 'standard',
          prompt: '¿Qué lengua predomina en las jarchas?',
          options: [
            { id: 'a', label: 'Latín clásico', isCorrect: false },
            { id: 'b', label: 'Mozárabe/romance temprano', isCorrect: true },
            { id: 'c', label: 'Griego', isCorrect: false },
            { id: 'd', label: 'Árabe', isCorrect: false },
          ],
          explanation: 'Las jarchas muestran rasgos mozárabes en el tránsito hacia el romance.'
        }
      ]
    },
    {
      id: 'lit-siglo-oro',
      title: 'Literatura del Siglo de Oro: Renacimiento y Barroco',
      questions: [
        {
          id: 'lengua-lit-oro-q1',
          tier: 'standard',
          prompt: 'Garcilaso de la Vega es destacado por...',
          options: [
            { id: 'a', label: 'El uso del soneto en métrica endecasílaba y rima consonante', isCorrect: true },
            { id: 'b', label: 'La prosa narrativa de carácter realista', isCorrect: false },
            { id: 'c', label: 'La fragmentación en verso libre puro', isCorrect: false },
            { id: 'd', label: 'La poesía épica medieval', isCorrect: false },
          ],
          explanation: 'Garcilaso popularizó el soneto en endecasílabos y la rima consonante.'
        },
        {
          id: 'lengua-lit-oro-q2',
          tier: 'standard',
          prompt: 'Fray Luis de León destaca por...',
          options: [
            { id: 'a', label: 'La oratoria barroca', isCorrect: false },
            { id: 'b', label: 'La claridad y sobriedad en la expresión', isCorrect: true },
            { id: 'c', label: 'La poesía de tono satírico', isCorrect: false },
            { id: 'd', label: 'El uso del soneto negro', isCorrect: false },
          ],
          explanation: 'Fray Luis de León es conocido por su estilo sobrio y claro.'
        },
        {
          id: 'lengua-lit-oro-q3',
          tier: 'standard',
          prompt: '¿Qué rasgo distingue el culteranismo de Góngora?',
          options: [
            { id: 'a', label: 'Idea y concepto mediante recursos retóricos complejos', isCorrect: true },
            { id: 'b', label: 'Realismo social y diálogo', isCorrect: false },
            { id: 'c', label: 'Sencillez directa y claridad', isCorrect: false },
            { id: 'd', label: 'Versificación irregular', isCorrect: false },
          ],
          explanation: 'El culteranismo de Góngora se caracteriza por la complejidad verbal y el uso de la erudición.'
        },
        {
          id: 'lengua-lit-oro-q4',
          tier: 'standard',
          prompt: 'Quevedo representa el concepto del Barroco mediante...',
          options: [
            { id: 'a', label: 'Uso del conceptismo y la agudeza conceptual', isCorrect: true },
            { id: 'b', label: 'Pastiche de epopeyas medievales', isCorrect: false },
            { id: 'c', label: 'Estilo clasicista y sobrio', isCorrect: false },
            { id: 'd', label: 'Descripciones de paisajes', isCorrect: false },
          ],
          explanation: 'Quevedo es emblemático del conceptismo, juego de ideas y agudeza conceptual.'
        },
        {
          id: 'lengua-lit-oro-q5',
          tier: 'standard',
          prompt: 'Lope de Vega se distingue por...',
          options: [
            { id: 'a', label: 'El cultivo del soneto culto', isCorrect: false },
            { id: 'b', label: 'La renovación de la novela picaresca', isCorrect: false },
            { id: 'c', label: 'La expansión del teatro popular y la creación de la comedia', isCorrect: true },
            { id: 'd', label: 'La presencia de poesía lírica amplia y densa', isCorrect: false },
          ],
          explanation: 'Lope impulsó el teatro comercial y popular con estructuras accesibles.'
        }
      ]
    },
    {
      id: 'lit-contemporanea',
      title: 'Literatura contemporánea: del Romanticismo a la actualidad',
      questions: [
        {
          id: 'lengua-lit-cont-q1',
          tier: 'standard',
          prompt: 'El Romanticismo en España se caracteriza por...',
          options: [
            { id: 'a', label: 'El énfasis en la razón y la claridad clásica', isCorrect: false },
            { id: 'b', label: 'La exaltación de la libertad, la emoción y la subjetividad', isCorrect: true },
            { id: 'c', label: 'La concentración en la poesía didáctica y moral', isCorrect: false },
            { id: 'd', label: 'La promesa de un progreso tecnológico', isCorrect: false },
          ],
          explanation: 'El Romanticismo enfatiza la emoción, la individualidad y la libertad creadora.'
        },
        {
          id: 'lengua-lit-cont-q2',
          tier: 'standard',
          prompt: '¿Qué rasgo identifica la poesía de Bécquer?',
          options: [
            { id: 'a', label: 'Énfasis en la narración heroica', isCorrect: false },
            { id: 'b', label: 'Subjetividad, musicalidad y intimismo', isCorrect: true },
            { id: 'c', label: 'Exaltación de la ciencia', isCorrect: false },
            { id: 'd', label: 'Costumbrismo rural', isCorrect: false },
          ],
          explanation: 'Bécquer es conocido por su lirismo intimista y musical.'
        },
        {
          id: 'lengua-lit-cont-q3',
          tier: 'standard',
          prompt: 'El Realismo español de Galdós se caracteriza por...',
          options: [
            { id: 'a', label: 'La idealización de la vida rural', isCorrect: false },
            { id: 'b', label: 'La crítica social a través del retrato detallado de la vida cotidiana', isCorrect: true },
            { id: 'c', label: 'El uso de elementos fantásticos', isCorrect: false },
            { id: 'd', label: 'La poesía en verso libre', isCorrect: false },
          ],
          explanation: 'Galdós retrata la sociedad con precisión y análisis de costumbres.'
        },
        {
          id: 'lengua-lit-cont-q4',
          tier: 'standard',
          prompt: 'Clarín, en La Regenta, aborda...',
          options: [
            { id: 'a', label: 'La visión idealizada de la mujer', isCorrect: false },
            { id: 'b', label: 'La crítica a la hipocresía social y la realidad urbana', isCorrect: true },
            { id: 'c', label: 'La celebración de la nobleza medieval', isCorrect: false },
            { id: 'd', label: 'La exuberancia de la vida rural', isCorrect: false },
          ],
          explanation: 'La Regenta critica la sociedad y la hipocresía de la ciudad en clave realista.'
        },
        {
          id: 'lengua-lit-cont-q5',
          tier: 'standard',
          prompt: 'En el Naturalismo, ¿qué rasgo es característico?',
          options: [
            { id: 'a', label: 'Optimismo inquebrantable', isCorrect: false },
            { id: 'b', label: 'Determinismo social y representación impiadosa de la realidad', isCorrect: true },
            { id: 'c', label: 'Ausencia de escenas cotidianas', isCorrect: false },
            { id: 'd', label: 'La glorificación de la vida rural', isCorrect: false },
          ],
          explanation: 'El naturalismo enfatiza el determinismo y la observación clínica de la realidad social.'
        }
      ]
    }
  ]
}
