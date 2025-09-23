import type { Subject } from './types'

// Biología (Madrid) - Bloques: 1) Biomoléculas 2) Genética y Biología molecular
// 3) Citología 4) Microbiología e Inmunología 5) Anatomía y fisiología humanas
// 6) Ecología y Medioambiente
export const biologyES: Subject = {
  id: 'biologia',
  name: 'Biología',
  topics: [
    {
      id: 'biomoleculas',
      title: '1. Biomoléculas',
      questions: [
        { id: 'bio-1', tier: 'standard', prompt: '¿Cuál es la combinación de bioelementos primarios que forma la mayor parte de las moléculas orgánicas?', options: [
          { id: 'a', label: 'C, H y O', isCorrect: false },
          { id: 'b', label: 'C, H, O y Na', isCorrect: false },
          { id: 'c', label: 'C, H, O y N', isCorrect: true },
          { id: 'd', label: 'Ca, K y P', isCorrect: false },
        ], explanation: 'Los bioelementos primarios son C, H, O y N.' },
        { id: 'bio-2', tier: 'standard', prompt: '¿Qué afirmación sobre el agua es crucial para la vida en los organismos?', options: [
          { id: 'a', label: 'Es una molécula no polar', isCorrect: false },
          { id: 'b', label: 'Presenta alta tensión superficial', isCorrect: false },
          { id: 'c', label: 'Es un disolvente polar que facilita reacciones y disolución de sustancias', isCorrect: true },
          { id: 'd', label: 'No se disocia en iones', isCorrect: false },
        ], explanation: 'El agua es polar y facilita reacciones y transporte.' },
        { id: 'bio-3', tier: 'standard', prompt: 'El monómero de los glúcidos se llama:', options: [
          { id: 'a', label: 'monosacárido', isCorrect: true },
          { id: 'b', label: 'disacárido', isCorrect: false },
          { id: 'c', label: 'polisacárido', isCorrect: false },
          { id: 'd', label: 'aminoácido', isCorrect: false },
        ], explanation: 'Los glúcidos se componen de monosacáridos como la glucosa.' },
        { id: 'bio-4', tier: 'standard', prompt: '¿Cuál de los siguientes lípidos es no saponificable?', options: [
          { id: 'a', label: 'triglicéridos', isCorrect: false },
          { id: 'b', label: 'fosfolípidos', isCorrect: false },
          { id: 'c', label: 'colesterol', isCorrect: true },
          { id: 'd', label: 'ceramida', isCorrect: false },
        ], explanation: 'Los esteroides (colesterol) no son saponificables.' },
        { id: 'bio-5', tier: 'standard', prompt: '¿La función de una proteína depende principalmente de su…?', options: [
          { id: 'a', label: 'estructura secundaria', isCorrect: false },
          { id: 'b', label: 'estructura primaria', isCorrect: false },
          { id: 'c', label: 'conformación tridimensional', isCorrect: true },
          { id: 'd', label: 'estructura primaria', isCorrect: false },
        ], explanation: 'La conformación tridimensional condiciona la función.' },
        { id: 'bio-6', tier: 'standard', prompt: 'La acción de una enzima se debe principalmente a:', options: [
          { id: 'a', label: 'disminuir la entropía libre', isCorrect: false },
          { id: 'b', label: 'estabilizar el complejo ES y reducir la energía de activación', isCorrect: true },
          { id: 'c', label: 'aumentar la temperatura', isCorrect: false },
          { id: 'd', label: 'aumentar la concentración de sustrato', isCorrect: false },
        ], explanation: 'Las enzimas disminuyen la energía de activación.' },
        { id: 'bio-7', tier: 'standard', prompt: 'Diferencias principales entre ADN y ARN:', options: [
          { id: 'a', label: 'ADN: desoxirribosa y T; ARN: ribosa y U', isCorrect: true },
          { id: 'b', label: 'ADN: cadena simple; ARN: cadena doble', isCorrect: false },
          { id: 'c', label: 'ADN: ribosa y U; ARN: desoxirribosa y T', isCorrect: false },
          { id: 'd', label: 'ADN contiene U; ARN contiene T', isCorrect: false },
        ], explanation: 'ADN con T y desoxirribosa; ARN con U y ribosa.' },
        { id: 'bio-8', tier: 'standard', prompt: 'La replicación del ADN es semiconservativa; cada nueva molécula contiene…', options: [
          { id: 'a', label: 'dos cadenas completamente nuevas', isCorrect: false },
          { id: 'b', label: 'una cadena antigua y una nueva', isCorrect: true },
          { id: 'c', label: 'dos cadenas antiguas', isCorrect: false },
          { id: 'd', label: 'tres cadenas', isCorrect: false },
        ], explanation: 'Cada hebra parental sirve de molde.' },
        { id: 'bio-9', tier: 'standard', prompt: 'Las mutaciones pueden ser inducidas por…', options: [
          { id: 'a', label: 'radiación', isCorrect: false },
          { id: 'b', label: 'sustancias químicas mutágenas', isCorrect: false },
          { id: 'c', label: 'errores de replicación', isCorrect: false },
          { id: 'd', label: 'Todas las anteriores', isCorrect: true },
        ], explanation: 'Pueden ser puntuales o cromosómicas y tener diversos orígenes.' },
      ],
    },
    {
      id: 'genetica',
      title: '2. Genética y Biología molecular',
      questions: [
        { id: 'bio-10', tier: 'standard', prompt: '¿Qué enzima sintetiza el nuevo ADN durante la replicación?', options: [
          { id: 'a', label: 'ADN polimerasa', isCorrect: true },
          { id: 'b', label: 'ARN polimerasa', isCorrect: false },
          { id: 'c', label: 'Ligasa', isCorrect: false },
          { id: 'd', label: 'Topoisomerasa', isCorrect: false },
        ], explanation: 'La ADN polimerasa alarga la nueva hebra de ADN.' },
        { id: 'bio-11', tier: 'standard', prompt: 'En la transcripción, ¿qué sirve como plantilla para sintetizar ARN?', options: [
          { id: 'a', label: 'ADN', isCorrect: true },
          { id: 'b', label: 'ARN', isCorrect: false },
          { id: 'c', label: 'Proteína', isCorrect: false },
          { id: 'd', label: 'Carbohidrato', isCorrect: false },
        ], explanation: 'Se usa una hebra de ADN como molde.' },
        { id: 'bio-12', tier: 'standard', prompt: '¿Qué describe mejor el código genético?', options: [
          { id: 'a', label: 'Ambiguo', isCorrect: false },
          { id: 'b', label: 'Degenerado y prácticamente universal', isCorrect: true },
          { id: 'c', label: 'Unívoco y universal', isCorrect: false },
          { id: 'd', label: 'No universal', isCorrect: false },
        ], explanation: 'Es degenerado (varios codones por aminoácido) y casi universal.' },
        { id: 'bio-13', tier: 'standard', prompt: 'Una mutación que cambia un codón pero sigue codificando el mismo aminoácido es:', options: [
          { id: 'a', label: 'silenciosa', isCorrect: true },
          { id: 'b', label: 'sin sentido', isCorrect: false },
          { id: 'c', label: 'missense', isCorrect: false },
          { id: 'd', label: 'frameshift', isCorrect: false },
        ], explanation: 'No altera la proteína resultante.' },
        { id: 'bio-14', tier: 'standard', prompt: '¿Qué técnica se usa para insertar un gen en un vector bacteriano y producir una proteína recombinante?', options: [
          { id: 'a', label: 'Clonación en vectores plasmídicos', isCorrect: true },
          { id: 'b', label: 'PCR', isCorrect: false },
          { id: 'c', label: 'Electroforesis', isCorrect: false },
          { id: 'd', label: 'Secuenciación', isCorrect: false },
        ], explanation: 'Permite expresar proteínas en bacterias.' },
        { id: 'bio-15', tier: 'standard', prompt: '¿Para qué se utiliza principalmente CRISPR-Cas9?', options: [
          { id: 'a', label: 'Edición del genoma', isCorrect: true },
          { id: 'b', label: 'Secuenciación de ADN', isCorrect: false },
          { id: 'c', label: 'Clonación de genes', isCorrect: false },
          { id: 'd', label: 'Análisis de proteínas', isCorrect: false },
        ], explanation: 'Edición precisa del genoma.' },
        { id: 'bio-16', tier: 'standard', prompt: '¿Qué propiedad describe el código genético en su forma general?', options: [
          { id: 'a', label: 'Ambiguo', isCorrect: false },
          { id: 'b', label: 'Universal y degenerado', isCorrect: true },
          { id: 'c', label: 'Universal y sin ambigüedad', isCorrect: false },
          { id: 'd', label: 'No universal', isCorrect: false },
        ], explanation: 'Universal (salvo excepciones) y degenerado.' },
        { id: 'bio-17', tier: 'standard', prompt: 'Una mutación puntual que genera un codón de parada se denomina:', options: [
          { id: 'a', label: 'silenciosa', isCorrect: false },
          { id: 'b', label: 'sin sentido (nonsense)', isCorrect: true },
          { id: 'c', label: 'missense', isCorrect: false },
          { id: 'd', label: 'frameshift', isCorrect: false },
        ], explanation: 'Introduce un stop prematuro.' },
        { id: 'bio-18', tier: 'standard', prompt: '¿Para qué se utiliza la PCR?', options: [
          { id: 'a', label: 'Amplificar cantidades de ADN', isCorrect: true },
          { id: 'b', label: 'Secuenciar ADN', isCorrect: false },
          { id: 'c', label: 'Ligar fragmentos de ADN', isCorrect: false },
          { id: 'd', label: 'Transcribir ADN a ARN', isCorrect: false },
        ], explanation: 'Amplifica regiones específicas de ADN.' },
        { id: 'bio-19', tier: 'standard', prompt: 'En procariotas, el control de la expresión mediante promotor y operador corresponde a:', options: [
          { id: 'a', label: 'Operón', isCorrect: true },
          { id: 'b', label: 'Intrones', isCorrect: false },
          { id: 'c', label: 'Exones', isCorrect: false },
          { id: 'd', label: 'Ribosomas', isCorrect: false },
        ], explanation: 'Sistema operón (promotor, operador y genes).' },
        { id: 'bio-20', tier: 'standard', prompt: 'Una inserción/deleción que cambia el marco de lectura se llama:', options: [
          { id: 'a', label: 'mutación silenciosa', isCorrect: false },
          { id: 'b', label: 'mutación missense', isCorrect: false },
          { id: 'c', label: 'mutación de cambio de marco (frameshift)', isCorrect: true },
          { id: 'd', label: 'mutación nonsense', isCorrect: false },
        ], explanation: 'Desplaza el marco de lectura.' },
      ],
    },
    {
      id: 'citologia',
      title: '3. Citología',
      questions: [
        { id: 'bio-21', tier: 'standard', prompt: '¿Cuál describe mejor una célula procariota?', options: [
          { id: 'a', label: 'Tiene núcleo definido', isCorrect: false },
          { id: 'b', label: 'Carece de núcleo definido y orgánulos membranosos', isCorrect: true },
          { id: 'c', label: 'Contiene cloroplastos', isCorrect: false },
          { id: 'd', label: 'Siempre es multicelular', isCorrect: false },
        ], explanation: 'Sin núcleo verdadero ni orgánulos membranosos.' },
        { id: 'bio-22', tier: 'standard', prompt: '¿Qué función cumple el retículo endoplásmico rugoso?', options: [
          { id: 'a', label: 'Síntesis de lípidos', isCorrect: false },
          { id: 'b', label: 'Síntesis de proteínas', isCorrect: true },
          { id: 'c', label: 'Producción de ATP', isCorrect: false },
          { id: 'd', label: 'Digestión celular', isCorrect: false },
        ], explanation: 'RER: síntesis y maduración inicial de proteínas.' },
        { id: 'bio-23', tier: 'standard', prompt: 'La mitocondria contiene:', options: [
          { id: 'a', label: 'ADN circular y ribosomas 70S', isCorrect: true },
          { id: 'b', label: 'ADN lineal y ribosomas 80S', isCorrect: false },
          { id: 'c', label: 'ADN nuclear', isCorrect: false },
          { id: 'd', label: 'Cloroplastos', isCorrect: false },
        ], explanation: 'Orgánulo con ADN propio y ribosomas 70S.' },
        { id: 'bio-24', tier: 'standard', prompt: 'En la mitosis, la anafase se caracteriza por:', options: [
          { id: 'a', label: 'Separación de cromátidas hermanas', isCorrect: true },
          { id: 'b', label: 'Alineación en el ecuador', isCorrect: false },
          { id: 'c', label: 'Replicación de ADN', isCorrect: false },
          { id: 'd', label: 'Formación de núcleos nuevos', isCorrect: false },
        ], explanation: 'Cromátidas migran a polos opuestos.' },
        { id: 'bio-25', tier: 'standard', prompt: 'En la meiosis I, ¿qué se separa?', options: [
          { id: 'a', label: 'Cromátidas hermanas', isCorrect: false },
          { id: 'b', label: 'Cromosomas homólogos', isCorrect: true },
          { id: 'c', label: 'Centromeros', isCorrect: false },
          { id: 'd', label: 'Genes individuales', isCorrect: false },
        ], explanation: 'Reducción cromosómica en meiosis I.' },
        { id: 'bio-26', tier: 'standard', prompt: 'El citoesqueleto está formado principalmente por:', options: [
          { id: 'a', label: 'microtúbulos', isCorrect: false },
          { id: 'b', label: 'microfilamentos (actina)', isCorrect: true },
          { id: 'c', label: 'filamentos intermedios', isCorrect: false },
          { id: 'd', label: 'colágeno', isCorrect: false },
        ], explanation: 'Actina, microtúbulos y filamentos intermedios.' },
        { id: 'bio-27', tier: 'standard', prompt: 'Estructura presente en eucariotas y ausente en procariotas:', options: [
          { id: 'a', label: 'Núcleo', isCorrect: true },
          { id: 'b', label: 'Ribosomas', isCorrect: false },
          { id: 'c', label: 'Membrana plasmática', isCorrect: false },
          { id: 'd', label: 'Pared celular', isCorrect: false },
        ], explanation: 'El núcleo membranoso es propio de eucariotas.' },
        { id: 'bio-28', tier: 'standard', prompt: 'La membrana plasmática está formada principalmente por una bicapa de…', options: [
          { id: 'a', label: 'lípidos, proteínas y carbohidratos', isCorrect: true },
          { id: 'b', label: 'proteínas y carbohidratos', isCorrect: false },
          { id: 'c', label: 'lípidos solamente', isCorrect: false },
          { id: 'd', label: 'agua y sales', isCorrect: false },
        ], explanation: 'Modelo de mosaico fluido.' },
      ],
    },
    {
      id: 'micro-inmuno',
      title: '4. Microbiología e Inmunología',
      questions: [
        { id: 'bio-29', tier: 'standard', prompt: '¿Qué propiedad distingue a los virus de las células vivas?', options: [
          { id: 'a', label: 'No tienen material genético', isCorrect: false },
          { id: 'b', label: 'Se reproducen fuera de una célula huésped', isCorrect: false },
          { id: 'c', label: 'Requieren una célula huésped para replicarse', isCorrect: true },
          { id: 'd', label: 'Tienen metabolismo propio', isCorrect: false },
        ], explanation: 'Parásitos intracelulares obligados.' },
        { id: 'bio-30', tier: 'standard', prompt: 'En Gram-positivas, la pared celular presenta…', options: [
          { id: 'a', label: 'una gruesa capa de peptidoglicano', isCorrect: true },
          { id: 'b', label: 'una membrana externa rica en LPS', isCorrect: false },
          { id: 'c', label: 'una capa delgada de peptidoglicano', isCorrect: false },
          { id: 'd', label: 'ausencia de peptidoglicano', isCorrect: false },
        ], explanation: 'Característica de bacterias Gram +' },
        { id: 'bio-31', tier: 'standard', prompt: 'El moho del pan pertenece principalmente a…', options: [
          { id: 'a', label: 'Ascomycota', isCorrect: false },
          { id: 'b', label: 'Zygomycota', isCorrect: true },
          { id: 'c', label: 'Basidiomycota', isCorrect: false },
          { id: 'd', label: 'Deuteromycota', isCorrect: false },
        ], explanation: 'Rhizopus, moho del pan: Zygomycota.' },
        { id: 'bio-32', tier: 'standard', prompt: '¿Qué componentes caracterizan la inmunidad innata?', options: [
          { id: 'a', label: 'Barreras físicas y células fagocíticas (neutrófilos y macrófagos)', isCorrect: true },
          { id: 'b', label: 'Anticuerpos y células B', isCorrect: false },
          { id: 'c', label: 'Memoria inmunitaria a largo plazo', isCorrect: false },
          { id: 'd', label: 'Solo linfocitos T', isCorrect: false },
        ], explanation: 'Innata: barreras, fagocitos, complemento.' },
        { id: 'bio-33', tier: 'standard', prompt: 'Una vacuna que estimula la respuesta y genera memoria es una vacuna…', options: [
          { id: 'a', label: 'activa', isCorrect: true },
          { id: 'b', label: 'pasiva', isCorrect: false },
          { id: 'c', label: 'toxina', isCorrect: false },
          { id: 'd', label: 'recombinante sin antígeno', isCorrect: false },
        ], explanation: 'Activa genera memoria; pasiva no.' },
        { id: 'bio-34', tier: 'standard', prompt: 'Las vacunas pueden ser…', options: [
          { id: 'a', label: 'atenuadas', isCorrect: false },
          { id: 'b', label: 'inactivadas', isCorrect: false },
          { id: 'c', label: 'subunidades', isCorrect: false },
          { id: 'd', label: 'Todas las anteriores', isCorrect: true },
        ], explanation: 'Diversas plataformas vacunales.' },
        { id: 'bio-35', tier: 'standard', prompt: 'La inmunidad adquirida se caracteriza por…', options: [
          { id: 'a', label: 'respuestas inmediatas sin memoria', isCorrect: false },
          { id: 'b', label: 'memoria inmunitaria y especificidad', isCorrect: true },
          { id: 'c', label: 'solo barreras físicas', isCorrect: false },
          { id: 'd', label: 'falta de anticuerpos', isCorrect: false },
        ], explanation: 'Adaptativa: específica y con memoria.' },
        { id: 'bio-36', tier: 'standard', prompt: 'Las vacunas de subunidades suelen inducir respuestas de…', options: [
          { id: 'a', label: 'anticuerpos y, a veces, células T', isCorrect: true },
          { id: 'b', label: 'solo anticuerpos', isCorrect: false },
          { id: 'c', label: 'solo células B', isCorrect: false },
          { id: 'd', label: 'ninguna respuesta', isCorrect: false },
        ], explanation: 'Generan anticuerpos y, según adyuvantes, respuesta celular.' },
      ],
    },
    {
      id: 'anat-fisio',
      title: '5. Anatomía y fisiología humanas',
      questions: [
        { id: 'bio-37', tier: 'standard', prompt: '¿Qué célula es la principal productora de anticuerpos?', options: [
          { id: 'a', label: 'Linfocito T', isCorrect: false },
          { id: 'b', label: 'Linfocito B', isCorrect: true },
          { id: 'c', label: 'Macrófago', isCorrect: false },
          { id: 'd', label: 'Neutrófilo', isCorrect: false },
        ], explanation: 'Los linfocitos B → células plasmáticas (Ac).' },
        { id: 'bio-38', tier: 'standard', prompt: '¿Qué órgano produce la bilis?', options: [
          { id: 'a', label: 'Hígado', isCorrect: true },
          { id: 'b', label: 'Vesícula biliar', isCorrect: false },
          { id: 'c', label: 'Páncreas', isCorrect: false },
          { id: 'd', label: 'Estómago', isCorrect: false },
        ], explanation: 'Se produce en hígado y se almacena en vesícula.' },
        { id: 'bio-39', tier: 'standard', prompt: '¿Qué enzima desdobla el almidón y actúa en saliva e intestino?', options: [
          { id: 'a', label: 'Amilasa', isCorrect: true },
          { id: 'b', label: 'Lipasa', isCorrect: false },
          { id: 'c', label: 'Proteasa', isCorrect: false },
          { id: 'd', label: 'Pepsina', isCorrect: false },
        ], explanation: 'Amilasa salival y pancreática.' },
        { id: 'bio-40', tier: 'standard', prompt: '¿Qué vaso transporta sangre oxigenada desde los pulmones al corazón?', options: [
          { id: 'a', label: 'Arteria pulmonar', isCorrect: false },
          { id: 'b', label: 'Vena cava', isCorrect: false },
          { id: 'c', label: 'Vena pulmonar', isCorrect: true },
          { id: 'd', label: 'Aorta', isCorrect: false },
        ], explanation: 'Venas pulmonares → aurícula izquierda.' },
        { id: 'bio-41', tier: 'standard', prompt: '¿Qué estructura del nefrón realiza la filtración inicial?', options: [
          { id: 'a', label: 'Glomérulo', isCorrect: true },
          { id: 'b', label: 'Túbulo contorneado proximal', isCorrect: false },
          { id: 'c', label: 'Asa de Henle', isCorrect: false },
          { id: 'd', label: 'Túbulo distal', isCorrect: false },
        ], explanation: 'Unidad filtrante inicial del riñón.' },
        { id: 'bio-42', tier: 'standard', prompt: 'Diferencia general entre el sistema nervioso y el endocrino:', options: [
          { id: 'a', label: 'Nervioso rápido/corto; endocrino lento/sostenido', isCorrect: true },
          { id: 'b', label: 'Endocrino rápido/corto', isCorrect: false },
          { id: 'c', label: 'Nervioso lento/sostenido', isCorrect: false },
          { id: 'd', label: 'Iguales en rapidez y duración', isCorrect: false },
        ], explanation: 'Nervioso → señales rápidas; endocrino → hormonales y sostenidas.' },
        { id: 'bio-43', tier: 'standard', prompt: 'La meiosis II del ovocito humano se completa…', options: [
          { id: 'a', label: 'Durante la ovogénesis', isCorrect: false },
          { id: 'b', label: 'En la fecundación', isCorrect: true },
          { id: 'c', label: 'Nunca', isCorrect: false },
          { id: 'd', label: 'En la pubertad', isCorrect: false },
        ], explanation: 'Tras la entrada del espermatozoide.' },
      ],
    },
    {
      id: 'ecologia',
      title: '6. Ecología y Medioambiente',
      questions: [
        { id: 'bio-44', tier: 'standard', prompt: 'En homeostasis endocrina, la retroalimentación negativa tiende a…', options: [
          { id: 'a', label: 'Reducir el exceso para estabilizar', isCorrect: true },
          { id: 'b', label: 'Reforzar el estímulo', isCorrect: false },
          { id: 'c', label: 'No cambia nada', isCorrect: false },
          { id: 'd', label: 'No aplica', isCorrect: false },
        ], explanation: 'La negativa restaura el equilibrio.' },
        { id: 'bio-45', tier: 'standard', prompt: 'El crecimiento exponencial de una población suele ocurrir cuando…', options: [
          { id: 'a', label: 'Los recursos son ilimitados', isCorrect: true },
          { id: 'b', label: 'Los recursos son limitados', isCorrect: false },
          { id: 'c', label: 'La competencia es alta', isCorrect: false },
          { id: 'd', label: 'Existen depredadores', isCorrect: false },
        ], explanation: 'Con abundancia de recursos y bajas limitaciones.' },
        { id: 'bio-46', tier: 'standard', prompt: 'En el ciclo del carbono, el proceso que fija CO2 en azúcares es…', options: [
          { id: 'a', label: 'Fotosíntesis', isCorrect: true },
          { id: 'b', label: 'Respiración', isCorrect: false },
          { id: 'c', label: 'Descomposición', isCorrect: false },
          { id: 'd', label: 'Nitrificación', isCorrect: false },
        ], explanation: 'Fijación de CO2 en el ciclo de Calvin.' },
        { id: 'bio-47', tier: 'standard', prompt: '¿Qué efecto tiene la deforestación sobre la biodiversidad?', options: [
          { id: 'a', label: 'Aumenta', isCorrect: false },
          { id: 'b', label: 'Disminuye', isCorrect: true },
          { id: 'c', label: 'No afecta', isCorrect: false },
          { id: 'd', label: 'Solo afecta a plantas', isCorrect: false },
        ], explanation: 'Reduce diversidad y servicios ecosistémicos.' },
        { id: 'bio-48', tier: 'standard', prompt: 'En el ciclo del nitrógeno, proceso que convierte N2 en NH3:', options: [
          { id: 'a', label: 'Fijación de nitrógeno', isCorrect: true },
          { id: 'b', label: 'Nitrificación', isCorrect: false },
          { id: 'c', label: 'Asimilación', isCorrect: false },
          { id: 'd', label: 'Descomposición', isCorrect: false },
        ], explanation: 'Fijación biológica o abiótica.' },
        { id: 'bio-49', tier: 'standard', prompt: 'La huella ecológica cuantifica…', options: [
          { id: 'a', label: 'Cantidad de especies', isCorrect: false },
          { id: 'b', label: 'Impacto de una persona/actividad sobre recursos', isCorrect: true },
          { id: 'c', label: 'Tasa de reproducción', isCorrect: false },
          { id: 'd', label: 'Crecimiento de población', isCorrect: false },
        ], explanation: 'Demanda de recursos vs. capacidad de la biosfera.' },
        { id: 'bio-50', tier: 'standard', prompt: 'La biotecnología verde se aplica, entre otros, a…', options: [
          { id: 'a', label: 'Descontaminación ambiental con microorganismos', isCorrect: true },
          { id: 'b', label: 'Software en biología molecular', isCorrect: false },
          { id: 'c', label: 'Moda textil', isCorrect: false },
          { id: 'd', label: 'Energía nuclear', isCorrect: false },
        ], explanation: 'Biorremediación y gestión ambiental.' },
      ],
    },
  ],
}


