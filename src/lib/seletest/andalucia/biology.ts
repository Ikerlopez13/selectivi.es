import type { Subject } from '../types'

export const biologyAND: Subject = {
  id: 'biologia',
  name: 'Biología',
  topics: [
    {
      id: 'biomoleculas',
      title: 'Las biomoléculas',
      questions: [
        {
          id: 'and-bio-mol-q1',
          tier: 'standard',
          prompt: 'Entre los bioelementos, ¿cuál se considera un bioelemento mayor y está presente en gran cantidad en compuestos orgánicos?',
          options: [
            { id: 'a', label: 'Fe', isCorrect: false },
            { id: 'b', label: 'Zn', isCorrect: false },
            { id: 'c', label: 'C', isCorrect: true },
            { id: 'd', label: 'Se', isCorrect: false },
          ],
          explanation: 'El carbono es un bioelemento mayor esencial para la estructura de compuestos orgánicos.'
        },
        {
          id: 'and-bio-mol-q2',
          tier: 'standard',
          prompt: '¿Cuál es el polisacárido de reserva principal en las plantas?',
          options: [
            { id: 'a', label: 'Almidón', isCorrect: true },
            { id: 'b', label: 'Celulosa', isCorrect: false },
            { id: 'c', label: 'Quitina', isCorrect: false },
            { id: 'd', label: 'Glucógeno', isCorrect: false },
          ],
          explanation: 'En plantas predomina el almidón como reserva de glúcidos, formado principalmente por amilosa y amilopectina.'
        },
        {
          id: 'and-bio-mol-q3',
          tier: 'standard',
          prompt: '¿Qué grupo funcional forma la unión entre aminoácidos en las proteínas?',
          options: [
            { id: 'a', label: 'Enlace éster', isCorrect: false },
            { id: 'b', label: 'Enlace glucosídico', isCorrect: false },
            { id: 'c', label: 'Enlace peptídico', isCorrect: true },
            { id: 'd', label: 'Enlace iónico', isCorrect: false },
          ],
          explanation: 'El enlace peptídico resulta de una reacción de condensación entre el grupo carboxilo de un aminoácido y el grupo amino de otro.'
        },
        {
          id: 'and-bio-mol-q4',
          tier: 'standard',
          prompt: '¿Qué molécula porta la información genética para la síntesis de proteínas en la mayoría de los organismos?',
          options: [
            { id: 'a', label: 'ADN', isCorrect: true },
            { id: 'b', label: 'ARN mensajero', isCorrect: false },
            { id: 'c', label: 'ARN de transferencia', isCorrect: false },
            { id: 'd', label: 'ARN ribosomal', isCorrect: false },
          ],
          explanation: 'En la mayoría de los organismos, el ADN almacena la información genética.'
        },
        {
          id: 'and-bio-mol-q5',
          tier: 'standard',
          prompt: 'En la proteína, ¿qué tipo de interacción estabiliza la estructura secundaria mediante puentes de hidrógeno?',
          options: [
            { id: 'a', label: 'Enlace peptídico', isCorrect: false },
            { id: 'b', label: 'Puentes disulfuro', isCorrect: false },
            { id: 'c', label: 'Enlaces iónicos', isCorrect: false },
            { id: 'd', label: 'Puentes de hidrógeno', isCorrect: true },
          ],
          explanation: 'La estructura secundaria (hélices α y láminas β) se estabiliza principalmente mediante puentes de hidrógeno entre grupos del esqueleto polipeptídico.'
        },
        {
          id: 'and-bio-mol-q6',
          tier: 'standard',
          prompt: '¿Cuál de los siguientes bioelementos es el más abundante en la materia viva?',
          options: [
            { id: 'a', label: 'Nitrógeno', isCorrect: false },
            { id: 'b', label: 'Carbono', isCorrect: false },
            { id: 'c', label: 'Oxígeno', isCorrect: true },
            { id: 'd', label: 'Hidrógeno', isCorrect: false }
          ],
          explanation: 'El oxígeno representa cerca del 65% de la masa corporal, principalmente formando parte del agua, que supone la mayor fracción del organismo.'
        },
        {
          id: 'and-bio-mol-q7',
          tier: 'standard',
          prompt: 'La fórmula molecular $C_6H_{12}O_6$ corresponde a:',
          options: [
            { id: 'a', label: 'Fructosa y galactosa', isCorrect: false },
            { id: 'b', label: 'Glucosa, fructosa y galactosa', isCorrect: true },
            { id: 'c', label: 'Solo glucosa', isCorrect: false },
            { id: 'd', label: 'Ribosa', isCorrect: false }
          ],
          explanation: 'Las tres hexosas más relevantes (glucosa, fructosa y galactosa) comparten la fórmula $C_6H_{12}O_6$ porque son isómeros estructurales.'
        },
        {
          id: 'and-bio-mol-q8',
          tier: 'standard',
          prompt: 'Los triglicéridos están formados por:',
          options: [
            { id: 'a', label: 'Glicerol y tres ácidos grasos', isCorrect: true },
            { id: 'b', label: 'Glicerol y dos ácidos grasos', isCorrect: false },
            { id: 'c', label: 'Tres moléculas de glicerol', isCorrect: false },
            { id: 'd', label: 'Esfingosina y ácidos grasos', isCorrect: false }
          ],
          explanation: 'Los triglicéridos se forman por esterificación de una molécula de glicerol con tres ácidos grasos.'
        },
        {
          id: 'and-bio-mol-q9',
          tier: 'standard',
          prompt: '¿Qué característica distingue al ADN del ARN?',
          options: [
            { id: 'a', label: 'El ADN contiene timina y el ARN contiene uracilo', isCorrect: true },
            { id: 'b', label: 'El ADN contiene uracilo y el ARN timina', isCorrect: false },
            { id: 'c', label: 'El ADN es monocatenario', isCorrect: false },
            { id: 'd', label: 'El ARN contiene desoxirribosa', isCorrect: false }
          ],
          explanation: 'El ADN posee timina como base nitrogenada exclusiva, mientras que en el ARN se encuentra uracilo.'
        },
        {
          id: 'and-bio-mol-q10',
          tier: 'standard',
          prompt: 'Las enzimas actúan como catalizadores biológicos porque:',
          options: [
            { id: 'a', label: 'Aumentan la energía de activación', isCorrect: false },
            { id: 'b', label: 'Disminuyen la energía de activación', isCorrect: true },
            { id: 'c', label: 'Modifican el equilibrio de la reacción', isCorrect: false },
            { id: 'd', label: 'Se consumen durante la reacción', isCorrect: false }
          ],
          explanation: 'Las enzimas reducen la energía de activación necesaria, acelerando la reacción sin alterarse de forma permanente.'
        },
        {
          id: 'and-bio-mol-q11',
          tier: 'standard',
          prompt: '¿Qué nivel de estructura proteica se mantiene mediante puentes de hidrógeno entre grupos del esqueleto peptídico?',
          options: [
            { id: 'a', label: 'Estructura primaria', isCorrect: false },
            { id: 'b', label: 'Estructura cuaternaria', isCorrect: false },
            { id: 'c', label: 'Estructura secundaria', isCorrect: true },
            { id: 'd', label: 'Estructura terciaria', isCorrect: false }
          ],
          explanation: 'La estructura secundaria (hélices α y láminas β) se estabiliza por puentes de hidrógeno entre los grupos carbonilo y amino del esqueleto polipeptídico.'
        }
      ]
    },
    {
      id: 'genetica-molecular',
      title: 'Genética molecular',
      questions: [
        {
          id: 'and-bio-gen-q1',
          tier: 'standard',
          prompt: 'Durante la replicación del ADN, ¿qué enzima añade nuevos nucleótidos a la cadena en crecimiento?',
          options: [
            { id: 'a', label: 'Helicasa', isCorrect: false },
            { id: 'b', label: 'Topoisomerasa', isCorrect: false },
            { id: 'c', label: 'Ligasa', isCorrect: false },
            { id: 'd', label: 'ADN polimerasa', isCorrect: true },
          ],
          explanation: 'La ADN polimerasa es la enzima que sintetiza la nueva cadena de ADN.'
        },
        {
          id: 'and-bio-gen-q2',
          tier: 'standard',
          prompt: '¿Qué proceso transcribe DNA a RNA?',
          options: [
            { id: 'a', label: 'Traducción', isCorrect: false },
            { id: 'b', label: 'Transcripción', isCorrect: true },
            { id: 'c', label: 'Replicación', isCorrect: false },
            { id: 'd', label: 'Transcripción inversa', isCorrect: false },
          ],
          explanation: 'La transcripción genera el ARN mensajero a partir de la plantilla de ADN.'
        },
        {
          id: 'and-bio-gen-q3',
          tier: 'standard',
          prompt: '¿Cuál es el codón de inicio en la mayoría de los organismos?',
          options: [
            { id: 'a', label: 'UAA', isCorrect: false },
            { id: 'b', label: 'AUG', isCorrect: true },
            { id: 'c', label: 'UGA', isCorrect: false },
            { id: 'd', label: 'GCU', isCorrect: false },
          ],
          explanation: 'El codón de inicio habitual para la traducción es AUG.'
        }
      ]
    },
    {
      id: 'citologia',
      title: 'Biología celular',
      questions: [
        {
          id: 'and-bio-cit-q1',
          tier: 'standard',
          prompt: '¿Cuál es la diferencia principal entre células procariotas y eucariotas?',
          options: [
            { id: 'a', label: 'Las procariotas tienen núcleo definido y organelos membranosos', isCorrect: false },
            { id: 'b', label: 'Las eucariotas carecen de membrana plasmática', isCorrect: false },
            { id: 'c', label: 'Las eucariotas poseen núcleo y organelos membranosos, mientras que las procariotas carecen de ellos', isCorrect: true },
            { id: 'd', label: 'Las procariotas tienen mayor tamaño celular', isCorrect: false },
          ],
          explanation: 'Las células eucariotas tienen núcleo y organelos membranosos; las procariotas carecen de núcleo definido y de organelos membranosos.'
        },
        {
          id: 'and-bio-cit-q2',
          tier: 'standard',
          prompt: '¿Qué función del retículo endoplásmico rugoso (RER) describe mejor?',
          options: [
            { id: 'a', label: 'Síntesis de lípidos', isCorrect: false },
            { id: 'b', label: 'Almacenamiento de agua', isCorrect: false },
            { id: 'c', label: 'Síntesis de proteínas que serán secretadas o insertadas en membranas', isCorrect: true },
            { id: 'd', label: 'Síntesis de ARN ribosomal', isCorrect: false },
          ],
          explanation: 'El RER contiene ribosomas y participa en la síntesis de proteínas celulares y secretadas.'
        },
        {
          id: 'and-bio-q1',
          tier: 'standard',
          prompt: 'La mitosis produce:',
          options: [
            { id: 'a', label: '2 células diploides idénticas', isCorrect: true },
            { id: 'b', label: '4 células haploides', isCorrect: false },
            { id: 'c', label: '2 células haploides', isCorrect: false },
            { id: 'd', label: '4 células diploides diferentes', isCorrect: false },
          ],
          explanation: 'La mitosis es un proceso de división celular que produce dos células hijas diploides genéticamente idénticas a la célula madre.'
        },
        {
          id: 'and-bio-q2',
          tier: 'standard',
          prompt: 'El ADN se encuentra en:',
          options: [
            { id: 'a', label: 'El núcleo', isCorrect: true },
            { id: 'b', label: 'La membrana plasmática', isCorrect: false },
            { id: 'c', label: 'El citoplasma exclusivamente', isCorrect: false },
            { id: 'd', label: 'Las vacuolas', isCorrect: false },
          ],
          explanation: 'En células eucariotas, la mayor parte del ADN se encuentra en el núcleo, aunque también hay ADN en mitocondrias y cloroplastos.'
        },
        {
          id: 'and-bio-q3',
          tier: 'standard',
          prompt: 'La fotosíntesis ocurre en:',
          options: [
            { id: 'a', label: 'Los cloroplastos', isCorrect: true },
            { id: 'b', label: 'Las mitocondrias', isCorrect: false },
            { id: 'c', label: 'Los ribosomas', isCorrect: false },
            { id: 'd', label: 'El núcleo', isCorrect: false },
          ],
          explanation: 'La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar en energía química, y ocurre en los cloroplastos.'
        },
        {
          id: 'and-bio-q4',
          tier: 'standard',
          prompt: 'La ecuación general de la fotosíntesis es: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{luz} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$. ¿Qué gas se libera?',
          options: [
            { id: 'a', label: '$\\text{O}_2$ (oxígeno)', isCorrect: true },
            { id: 'b', label: '$\\text{CO}_2$ (dióxido de carbono)', isCorrect: false },
            { id: 'c', label: '$\\text{N}_2$ (nitrógeno)', isCorrect: false },
            { id: 'd', label: '$\\text{H}_2$ (hidrógeno)', isCorrect: false },
          ],
          explanation: 'Durante la fotosíntesis, las plantas liberan oxígeno ($\\text{O}_2$) como producto de la fotólisis del agua.'
        },
        {
          id: 'and-bio-q5',
          tier: 'premium',
          prompt: 'En la replicación del ADN, si una cadena tiene la secuencia $5\'-\\text{ATCG}-3\'$, la cadena complementaria será:',
          options: [
            { id: 'a', label: '$3\'-\\text{TAGC}-5\'$', isCorrect: true },
            { id: 'b', label: '$5\'-\\text{TAGC}-3\'$', isCorrect: false },
            { id: 'c', label: '$3\'-\\text{ATCG}-5\'$', isCorrect: false },
            { id: 'd', label: '$5\'-\\text{UAGC}-3\'$', isCorrect: false },
          ],
          explanation: 'Las bases se emparejan: A-T y C-G. Las cadenas son antiparalelas: si una va $5\' \\rightarrow 3\'$, la complementaria va $3\' \\rightarrow 5\'$.'
        },
        {
          id: 'and-bio-q6',
          tier: 'premium',
          prompt: 'La respiración celular aeróbica produce aproximadamente:',
          options: [
            { id: 'a', label: '36-38 ATP por glucosa', isCorrect: true },
            { id: 'b', label: '2 ATP por glucosa', isCorrect: false },
            { id: 'c', label: '10 ATP por glucosa', isCorrect: false },
            { id: 'd', label: '100 ATP por glucosa', isCorrect: false },
          ],
          explanation: 'La respiración aeróbica completa (glucólisis + ciclo de Krebs + cadena respiratoria) produce aproximadamente 36-38 moléculas de ATP por molécula de glucosa.'
        },
        {
          id: 'and-bio-q7',
          tier: 'premium',
          prompt: 'En genética, si un cruce $Aa \\times Aa$ (donde A es dominante), la proporción fenotípica esperada es:',
          options: [
            { id: 'a', label: '3:1 (dominante:recesivo)', isCorrect: true },
            { id: 'b', label: '1:1', isCorrect: false },
            { id: 'c', label: '9:3:3:1', isCorrect: false },
            { id: 'd', label: '1:2:1', isCorrect: false },
          ],
          explanation: 'Cuadro de Punnett: AA (25%), Aa (50%), aa (25%). Fenotípicamente: 75% dominante (AA + Aa) : 25% recesivo (aa) = 3:1.'
        }
      ]
    },
    {
      id: 'inmunologia',
      title: 'Inmunología',
      questions: [
        {
          id: 'and-bio-mic-q1',
          tier: 'standard',
          prompt: '¿Qué tipo de microorganismo carece de núcleo definido?',
          options: [
            { id: 'a', label: 'Bacteria', isCorrect: true },
            { id: 'b', label: 'Protozoo', isCorrect: false },
            { id: 'c', label: 'Hongos', isCorrect: false },
            { id: 'd', label: 'Virus', isCorrect: false },
          ],
          explanation: 'Las bacterias son procariotas, sin núcleo definido ni organelos membranosos.'
        },
        {
          id: 'and-bio-mic-q2',
          tier: 'standard',
          prompt: '¿Qué inmunidad se activa frente a patógenos de manera inespecífica, sin memoria específica?',
          options: [
            { id: 'a', label: 'Inmunidad innata', isCorrect: true },
            { id: 'b', label: 'Inmunidad adaptativa', isCorrect: false },
            { id: 'c', label: 'Inmunidad pasiva', isCorrect: false },
            { id: 'd', label: 'Inmunidad humoral', isCorrect: false },
          ],
          explanation: 'La inmunidad innata es la primera línea de defensa y no tiene memoria específica.'
        }
      ]
    },
    {
      id: 'metabolismo',
      title: 'Metabolismo',
      questions: [
        {
          id: 'and-bio-ana-q1',
          tier: 'standard',
          prompt: 'En el sistema digestivo, ¿cuál es el principal sitio de absorción de nutrientes?',
          options: [
            { id: 'a', label: 'Estómago', isCorrect: false },
            { id: 'b', label: 'Intestino grueso', isCorrect: false },
            { id: 'c', label: 'Intestino delgado', isCorrect: true },
            { id: 'd', label: 'Esófago', isCorrect: false },
          ],
          explanation: 'La mayor absorción de nutrientes ocurre principalmente en el intestino delgado (duodeno, yeyuno, íleon).'
        },
        {
          id: 'and-bio-ana-q2',
          tier: 'standard',
          prompt: '¿Cuál es el principal sitio de intercambio gaseoso en el sistema respiratorio humano?',
          options: [
            { id: 'a', label: 'Tráquea', isCorrect: false },
            { id: 'b', label: 'Bronquios', isCorrect: false },
            { id: 'c', label: 'Alvéolos', isCorrect: true },
            { id: 'd', label: 'Faringe', isCorrect: false },
          ],
          explanation: 'Los alvéolos areola, con una fina membrana, permiten el intercambio de O2 y CO2.'
        }
      ]
    },
    {
      id: 'biotecnologia',
      title: 'Biotecnología',
      questions: [
        {
          id: 'and-bio-eco-q1',
          tier: 'standard',
          prompt: 'En un ecosistema, ¿qué nivel de organización corresponde a un conjunto de individuos de la misma especie en un área determinada?',
          options: [
            { id: 'a', label: 'Individuo', isCorrect: false },
            { id: 'b', label: 'Población', isCorrect: true },
            { id: 'c', label: 'Comunidad', isCorrect: false },
            { id: 'd', label: 'Ecosistema', isCorrect: false },
          ],
          explanation: 'Una población es un conjunto de individuos de la misma especie en un lugar específico.'
        },
        {
          id: 'and-bio-eco-q2',
          tier: 'standard',
          prompt: '¿Qué ciclo biogeoquímico describe el movimiento del agua entre la atmósfera, la hidrosfera y los seres vivos?',
          options: [
            { id: 'a', label: 'Ciclo del nitrógeno', isCorrect: false },
            { id: 'b', label: 'Ciclo del carbono', isCorrect: false },
            { id: 'c', label: 'Ciclo del agua', isCorrect: true },
            { id: 'd', label: 'Ciclo del fósforo', isCorrect: false },
          ],
          explanation: 'El ciclo del agua describe la circulación del H2O entre los compartimentos terrestres y atmosféricos.'
        },
          {
            id: 'and-bio-mol-q1',
            tier: 'standard',
            prompt: '¿Cuál de los siguientes bioelementos es el más abundante en la materia viva?',
            options: [
              { id: 'a', label: 'Nitrógeno', isCorrect: false },
              { id: 'b', label: 'Carbono', isCorrect: false },
              { id: 'c', label: 'Oxígeno', isCorrect: true },
              { id: 'd', label: 'Hidrógeno', isCorrect: false }
            ],
            explanation: 'El oxígeno representa aproximadamente el 65% de la masa corporal, principalmente formando parte del agua, que constituye el 70% del organismo.'
          },
          {
            id: 'and-bio-mol-q2',
            tier: 'standard',
            prompt: '¿Cuál es el polisacárido de reserva principal en las plantas?',
            options: [
              { id: 'a', label: 'Almidón', isCorrect: true },
              { id: 'b', label: 'Celulosa', isCorrect: false },
              { id: 'c', label: 'Quitina', isCorrect: false },
              { id: 'd', label: 'Glucógeno', isCorrect: false }
            ],
            explanation: 'En plantas predomina el almidón como reserva de glúcidos, formado por amilosa y amilopectina.'
          },
          {
            id: 'and-bio-mol-q3',
            tier: 'standard',
            prompt: 'La fórmula molecular $C_6H_{12}O_6$ corresponde a:',
            options: [
              { id: 'a', label: 'Fructosa y galactosa', isCorrect: false },
              { id: 'b', label: 'Glucosa, fructosa y galactosa', isCorrect: true },
              { id: 'c', label: 'Solo glucosa', isCorrect: false },
              { id: 'd', label: 'Ribosa', isCorrect: false }
            ],
            explanation: 'La fórmula $C_6H_{12}O_6$ es común a las tres hexosas más importantes: glucosa, fructosa y galactosa, que son isómeros.'
          },
          {
            id: 'and-bio-mol-q4',
            tier: 'standard',
            prompt: '¿Qué tipo de enlace une los aminoácidos en las proteínas?',
            options: [
              { id: 'a', label: 'Enlace glucosídico', isCorrect: false },
              { id: 'b', label: 'Enlace fosfodiéster', isCorrect: false },
              { id: 'c', label: 'Enlace peptídico', isCorrect: true },
              { id: 'd', label: 'Enlace éster', isCorrect: false }
            ],
            explanation: 'El enlace peptídico se forma por reacción de condensación entre el grupo carboxilo de un aminoácido y el grupo amino de otro.'
          },
          {
            id: 'and-bio-mol-q5',
            tier: 'standard',
            prompt: 'Los triglicéridos están formados por:',
            options: [
              { id: 'a', label: 'Glicerol y tres ácidos grasos', isCorrect: true },
              { id: 'b', label: 'Glicerol y dos ácidos grasos', isCorrect: false },
              { id: 'c', label: 'Tres moléculas de glicerol', isCorrect: false },
              { id: 'd', label: 'Esfingosina y ácidos grasos', isCorrect: false }
            ],
            explanation: 'Los triglicéridos o triacilglicéridos se forman por esterificación de una molécula de glicerol con tres ácidos grasos.'
          },
          {
            id: 'and-bio-mol-q6',
            tier: 'standard',
            prompt: '¿Qué característica distingue al ADN del ARN?',
            options: [
              { id: 'a', label: 'El ADN contiene timina y el ARN contiene uracilo', isCorrect: true },
              { id: 'b', label: 'El ADN contiene uracilo y el ARN timina', isCorrect: false },
              { id: 'c', label: 'El ADN es monocatenario', isCorrect: false },
              { id: 'd', label: 'El ARN contiene desoxirribosa', isCorrect: false }
            ],
            explanation: 'El ADN contiene las bases adenina, guanina, citosina y timina, mientras que el ARN sustituye la timina por uracilo.'
          },
          {
            id: 'and-bio-mol-q7',
            tier: 'standard',
            prompt: 'Las enzimas actúan como catalizadores biológicos porque:',
            options: [
              { id: 'a', label: 'Aumentan la energía de activación', isCorrect: false },
              { id: 'b', label: 'Disminuyen la energía de activación', isCorrect: true },
              { id: 'c', label: 'Modifican el equilibrio de la reacción', isCorrect: false },
              { id: 'd', label: 'Se consumen durante la reacción', isCorrect: false }
            ],
            explanation: 'Las enzimas reducen la energía de activación necesaria para que se produzca la reacción, acelerándola sin consumirse en el proceso.'
          },
          {
            id: 'and-bio-mol-q8',
            tier: 'standard',
            prompt: '¿Qué nivel de estructura proteica se mantiene mediante puentes de hidrógeno entre grupos del esqueleto peptídico?',
            options: [
              { id: 'a', label: 'Estructura primaria', isCorrect: false },
              { id: 'b', label: 'Estructura cuaternaria', isCorrect: false },
              { id: 'c', label: 'Estructura secundaria', isCorrect: true },
              { id: 'd', label: 'Estructura terciaria', isCorrect: false }
            ],
            explanation: 'La estructura secundaria (hélice α y lámina β) se estabiliza por puentes de hidrógeno entre grupos C=O y N-H de la cadena polipeptídica.'
          },
          {
            id: 'gen-q1',
            tier: 'standard',
            prompt: 'Durante la replicación del ADN, ¿qué enzima sintetiza la nueva cadena de ADN?',
            options: [
              { id: 'a', label: 'ARN polimerasa', isCorrect: false },
              { id: 'b', label: 'ADN polimerasa', isCorrect: true },
              { id: 'c', label: 'Helicasa', isCorrect: false },
              { id: 'd', label: 'Ligasa', isCorrect: false }
            ],
            explanation: 'La ADN polimerasa es la enzima responsable de añadir nucleótidos complementarios durante la síntesis de la nueva cadena.'
          },
          {
            id: 'gen-q2',
            tier: 'standard',
            prompt: 'El proceso de transcripción consiste en:',
            options: [
              { id: 'a', label: 'Síntesis de proteínas a partir de ARNm', isCorrect: false },
              { id: 'b', label: 'Duplicación del ADN', isCorrect: false },
              { id: 'c', label: 'Síntesis de ARN a partir de ADN', isCorrect: true },
              { id: 'd', label: 'Unión de aminoácidos', isCorrect: false }
            ],
            explanation: 'La transcripción es el proceso por el cual se sintetiza una molécula de ARN complementaria a una hebra de ADN molde.'
          },
          {
            id: 'gen-q3',
            tier: 'standard',
            prompt: 'Un codón está formado por:',
            options: [
              { id: 'a', label: 'Dos nucleótidos', isCorrect: false },
              { id: 'b', label: 'Tres nucleótidos', isCorrect: true },
              { id: 'c', label: 'Cuatro nucleótidos', isCorrect: false },
              { id: 'd', label: 'Cinco nucleótidos', isCorrect: false }
            ],
            explanation: 'Un codón es una secuencia de tres nucleótidos consecutivos en el ARNm que codifica un aminoácido específico o una señal de parada.'
          },
          {
            id: 'gen-q4',
            tier: 'standard',
            prompt: 'Las mutaciones puntuales que no cambian el aminoácido codificado se denominan:',
            options: [
              { id: 'a', label: 'Mutaciones silenciosas', isCorrect: true },
              { id: 'b', label: 'Mutaciones sin sentido', isCorrect: false },
              { id: 'c', label: 'Mutaciones con cambio de sentido', isCorrect: false },
              { id: 'd', label: 'Deleciones', isCorrect: false }
            ],
            explanation: 'Las mutaciones silenciosas no alteran la secuencia de aminoácidos debido a la degeneración del código genético.'
          },
          {
            id: 'gen-q5',
            tier: 'standard',
            prompt: '¿Qué técnica permite amplificar fragmentos específicos de ADN in vitro?',
            options: [
              { id: 'a', label: 'Electroforesis', isCorrect: false },
              { id: 'b', label: 'PCR (Reacción en Cadena de la Polimerasa)', isCorrect: true },
              { id: 'c', label: 'Secuenciación de Sanger', isCorrect: false },
              { id: 'd', label: 'Western blot', isCorrect: false }
            ],
            explanation: 'La PCR permite amplificar exponencialmente millones de copias de una secuencia específica de ADN mediante ciclos de temperatura.'
          },
          {
            id: 'gen-q6',
            tier: 'standard',
            prompt: 'Los plásmidos son utilizados en ingeniería genética como:',
            options: [
              { id: 'a', label: 'Enzimas de restricción', isCorrect: false },
              { id: 'b', label: 'Vectores de clonación', isCorrect: true },
              { id: 'c', label: 'Marcadores moleculares', isCorrect: false },
              { id: 'd', label: 'Inhibidores enzimáticos', isCorrect: false }
            ],
            explanation: 'Los plásmidos bacterianos se utilizan como vectores para introducir genes de interés en células huésped y clonarlos.'
          },
          {
            id: 'gen-q7',
            tier: 'standard',
            prompt: 'Durante la traducción, el anticodón se encuentra en:',
            options: [
              { id: 'a', label: 'El ARN mensajero', isCorrect: false },
              { id: 'b', label: 'El ARN ribosómico', isCorrect: false },
              { id: 'c', label: 'El ARN de transferencia', isCorrect: true },
              { id: 'd', label: 'El ADN', isCorrect: false }
            ],
            explanation: 'El ARNt posee un anticodón que se empareja con el codón del ARNm, transportando el aminoácido correspondiente al ribosoma.'
          },
          {
            id: 'gen-q8',
            tier: 'standard',
            prompt: 'Las enzimas de restricción son utilizadas para:',
            options: [
              { id: 'a', label: 'Amplificar ADN', isCorrect: false },
              { id: 'b', label: 'Cortar ADN en secuencias específicas', isCorrect: true },
              { id: 'c', label: 'Unir fragmentos de ADN', isCorrect: false },
              { id: 'd', label: 'Secuenciar ADN', isCorrect: false }
            ],
            explanation: 'Las endonucleasas de restricción reconocen secuencias palindrómicas específicas y cortan el ADN en esos puntos.'
          },
          {
            id: 'cit-q1',
            tier: 'standard',
            prompt: '¿Qué orgánulo es responsable de la síntesis de proteínas?',
            options: [
              { id: 'a', label: 'Mitocondria', isCorrect: false },
              { id: 'b', label: 'Ribosoma', isCorrect: true },
              { id: 'c', label: 'Lisosoma', isCorrect: false },
              { id: 'd', label: 'Aparato de Golgi', isCorrect: false }
            ],
            explanation: 'Los ribosomas son los orgánulos encargados de traducir el ARNm en proteínas mediante el proceso de traducción.'
          },
          {
            id: 'cit-q2',
            tier: 'standard',
            prompt: 'La pared celular bacteriana está compuesta principalmente por:',
            options: [
              { id: 'a', label: 'Celulosa', isCorrect: false },
              { id: 'b', label: 'Quitina', isCorrect: false },
              { id: 'c', label: 'Peptidoglicano', isCorrect: true },
              { id: 'd', label: 'Pectina', isCorrect: false }
            ],
            explanation: 'El peptidoglicano o mureína es el principal componente estructural de la pared celular bacteriana.'
          },
          {
            id: 'cit-q3',
            tier: 'standard',
            prompt: '¿En qué fase del ciclo celular se duplica el ADN?',
            options: [
              { id: 'a', label: 'Fase G1', isCorrect: false },
              { id: 'b', label: 'Fase S', isCorrect: true },
              { id: 'c', label: 'Fase G2', isCorrect: false },
              { id: 'd', label: 'Fase M', isCorrect: false }
            ],
            explanation: 'La fase S (síntesis) es el periodo de la interfase en el que se replica el ADN, duplicando el material genético.'
          },
          {
            id: 'cit-q4',
            tier: 'standard',
            prompt: 'Las mitocondrias tienen su propio ADN porque:',
            options: [
              { id: 'a', label: 'Son orgánulos de origen endosimbiótico', isCorrect: true },
              { id: 'b', label: 'Se forman en el núcleo', isCorrect: false },
              { id: 'c', label: 'Lo necesitan para la fotosíntesis', isCorrect: false },
              { id: 'd', label: 'Son más antiguas que el núcleo', isCorrect: false }
            ],
            explanation: 'Según la teoría endosimbiótica, las mitocondrias provienen de bacterias ancestrales que mantuvieron su propio material genético.'
          },
          {
            id: 'cit-q5',
            tier: 'standard',
            prompt: 'Durante la metafase mitótica, los cromosomas se sitúan:',
            options: [
              { id: 'a', label: 'En los polos celulares', isCorrect: false },
              { id: 'b', label: 'En el plano ecuatorial', isCorrect: true },
              { id: 'c', label: 'En la envoltura nuclear', isCorrect: false },
              { id: 'd', label: 'Dispersos por el citoplasma', isCorrect: false }
            ],
            explanation: 'En metafase, los cromosomas se alinean en el plano ecuatorial de la célula, unidos a las fibras del huso mitótico.'
          },
          {
            id: 'cit-q6',
            tier: 'standard',
            prompt: 'La meiosis produce células:',
            options: [
              { id: 'a', label: 'Diploides genéticamente idénticas', isCorrect: false },
              { id: 'b', label: 'Diploides genéticamente diferentes', isCorrect: false },
              { id: 'c', label: 'Haploides genéticamente diferentes', isCorrect: true },
              { id: 'd', label: 'Haploides genéticamente idénticas', isCorrect: false }
            ],
            explanation: 'La meiosis genera cuatro células haploides (n) genéticamente distintas debido al entrecruzamiento y distribución aleatoria de cromosomas.'
          },
          {
            id: 'cit-q7',
            tier: 'standard',
            prompt: '¿Qué orgánulo contiene enzimas hidrolíticas para la digestión intracelular?',
            options: [
              { id: 'a', label: 'Peroxisoma', isCorrect: false },
              { id: 'b', label: 'Lisosoma', isCorrect: true },
              { id: 'c', label: 'Retículo endoplasmático', isCorrect: false },
              { id: 'd', label: 'Vacuola', isCorrect: false }
            ],
            explanation: 'Los lisosomas contienen hidrolasas ácidas que degradan macromoléculas, participando en la digestión celular y autofagia.'
          },
          {
            id: 'cit-q8',
            tier: 'standard',
            prompt: 'El citoesqueleto está compuesto principalmente por:',
            options: [
              { id: 'a', label: 'Lípidos y carbohidratos', isCorrect: false },
              { id: 'b', label: 'Microfilamentos, microtúbulos y filamentos intermedios', isCorrect: true },
              { id: 'c', label: 'Ácidos nucleicos', isCorrect: false },
              { id: 'd', label: 'Peptidoglicanos', isCorrect: false }
            ],
            explanation: 'El citoesqueleto es una red de proteínas filamentosas (actina, tubulina y otras) que proporciona forma y movimiento celular.'
          },
          {
            id: 'micro-q1',
            tier: 'standard',
            prompt: 'Los virus son considerados acelulares porque:',
            options: [
              { id: 'a', label: 'No tienen membrana plasmática ni orgánulos', isCorrect: true },
              { id: 'b', label: 'Son células muy pequeñas', isCorrect: false },
              { id: 'c', label: 'Tienen pared celular rígida', isCorrect: false },
              { id: 'd', label: 'Pueden vivir fuera de las células', isCorrect: false }
            ],
            explanation: 'Los virus carecen de estructura celular, metabolismo propio y solo pueden reproducirse dentro de células huésped.'
          },
          {
            id: 'micro-q2',
            tier: 'standard',
            prompt: 'Las bacterias Gram positivas se caracterizan por:',
            options: [
              { id: 'a', label: 'Tener una capa gruesa de peptidoglicano', isCorrect: true },
              { id: 'b', label: 'Carecer de pared celular', isCorrect: false },
              { id: 'c', label: 'Tener membrana externa', isCorrect: false },
              { id: 'd', label: 'Ser resistentes a todos los antibióticos', isCorrect: false }
            ],
            explanation: 'Las bacterias Gram+ poseen una gruesa capa de peptidoglicano que retiene el colorante cristal violeta en la tinción de Gram.'
          },
          {
            id: 'micro-q3',
            tier: 'standard',
            prompt: 'La inmunidad innata se caracteriza por:',
            options: [
              { id: 'a', label: 'Ser específica y tener memoria inmunológica', isCorrect: false },
              { id: 'b', label: 'Actuar de forma rápida e inespecífica', isCorrect: true },
              { id: 'c', label: 'Producir anticuerpos', isCorrect: false },
              { id: 'd', label: 'Requerir exposición previa al patógeno', isCorrect: false }
            ],
            explanation: 'La inmunidad innata es la primera línea de defensa, actúa rápidamente sin especificidad y no genera memoria inmunológica.'
          },
          {
            id: 'micro-q4',
            tier: 'standard',
            prompt: 'Los linfocitos B son responsables de:',
            options: [
              { id: 'a', label: 'La inmunidad celular', isCorrect: false },
              { id: 'b', label: 'La producción de anticuerpos', isCorrect: true },
              { id: 'c', label: 'La fagocitosis', isCorrect: false },
              { id: 'd', label: 'La respuesta inflamatoria', isCorrect: false }
            ],
            explanation: 'Los linfocitos B se diferencian en células plasmáticas que producen anticuerpos específicos contra antígenos.'
          },
          {
            id: 'micro-q5',
            tier: 'standard',
            prompt: 'Las vacunas generan inmunidad:',
            options: [
              { id: 'a', label: 'Pasiva natural', isCorrect: false },
              { id: 'b', label: 'Pasiva artificial', isCorrect: false },
              { id: 'c', label: 'Activa artificial', isCorrect: true },
              { id: 'd', label: 'Innata', isCorrect: false }
            ],
            explanation: 'Las vacunas proporcionan inmunidad activa artificial al estimular la respuesta inmunitaria sin causar la enfermedad.'
          },
          {
            id: 'micro-q6',
            tier: 'standard',
            prompt: '¿Qué células son las principales responsables de la presentación de antígenos?',
            options: [
              { id: 'a', label: 'Eritrocitos', isCorrect: false },
              { id: 'b', label: 'Células dendríticas y macrófagos', isCorrect: true },
              { id: 'c', label: 'Plaquetas', isCorrect: false },
              { id: 'd', label: 'Neutrófilos exclusivamente', isCorrect: false }
            ],
            explanation: 'Las células presentadoras de antígeno (APC), como células dendríticas y macrófagos, procesan y presentan antígenos a linfocitos T.'
          },
          {
            id: 'micro-q7',
            tier: 'standard',
            prompt: 'Los hongos son organismos:',
            options: [
              { id: 'a', label: 'Autótrofos fotosintéticos', isCorrect: false },
              { id: 'b', label: 'Heterótrofos con pared de quitina', isCorrect: true },
              { id: 'c', label: 'Procariotas', isCorrect: false },
              { id: 'd', label: 'Sin pared celular', isCorrect: false }
            ],
            explanation: 'Los hongos son eucariotas heterótrofos que poseen pared celular compuesta principalmente de quitina.'
          },
          {
            id: 'micro-q8',
            tier: 'standard',
            prompt: 'El ciclo lítico de un virus se caracteriza por:',
            options: [
              { id: 'a', label: 'Integración del material viral en el genoma del huésped', isCorrect: false },
              { id: 'b', label: 'Destrucción de la célula huésped tras la replicación viral', isCorrect: true },
              { id: 'c', label: 'Latencia prolongada sin síntomas', isCorrect: false },
              { id: 'd', label: 'Transmisión vertical a células hijas', isCorrect: false }
            ],
            explanation: 'En el ciclo lítico, el virus se replica rápidamente y destruye la célula huésped al liberarse los nuevos viriones.'
          },
          {
            id: 'anat-q1',
            tier: 'standard',
            prompt: 'La digestión química de los carbohidratos comienza en:',
            options: [
              { id: 'a', label: 'El estómago', isCorrect: false },
              { id: 'b', label: 'La boca', isCorrect: true },
              { id: 'c', label: 'El intestino delgado', isCorrect: false },
              { id: 'd', label: 'El páncreas', isCorrect: false }
            ],
            explanation: 'La amilasa salival inicia la hidrólisis del almidón en la boca, aunque la mayor parte ocurre en el intestino delgado.'
          },
          {
            id: 'anat-q2',
            tier: 'standard',
            prompt: 'El intercambio gaseoso en los pulmones se produce en:',
            options: [
              { id: 'a', label: 'Los bronquios', isCorrect: false },
              { id: 'b', label: 'La tráquea', isCorrect: false },
              { id: 'c', label: 'Los alvéolos', isCorrect: true },
              { id: 'd', label: 'Los bronquiolos', isCorrect: false }
            ],
            explanation: 'Los alvéolos pulmonares son estructuras en forma de saco donde se produce la difusión de $O_2$ y $CO_2$ con los capilares.'
          },
          {
            id: 'anat-q3',
            tier: 'standard',
            prompt: 'El marcapasos natural del corazón se localiza en:',
            options: [
              { id: 'a', label: 'El nodo auriculoventricular', isCorrect: false },
              { id: 'b', label: 'El haz de His', isCorrect: false },
              { id: 'c', label: 'El nodo sinoauricular', isCorrect: true },
              { id: 'd', label: 'Las fibras de Purkinje', isCorrect: false }
            ],
            explanation: 'El nodo sinoauricular (nodo sinusal) genera los impulsos eléctricos que coordinan el ritmo cardíaco normal.'
          },
          {
            id: 'anat-q4',
            tier: 'standard',
            prompt: 'La hormona que regula los niveles de glucosa en sangre es:',
            options: [
              { id: 'a', label: 'Tiroxina', isCorrect: false },
              { id: 'b', label: 'Insulina', isCorrect: true },
              { id: 'c', label: 'Adrenalina', isCorrect: false },
              { id: 'd', label: 'Cortisol', isCorrect: false }
            ],
            explanation: 'La insulina, producida por las células beta del páncreas, disminuye la glucemia facilitando la entrada de glucosa a las células.'
          },
          {
            id: 'anat-q5',
            tier: 'standard',
            prompt: 'La nefrona es la unidad funcional de:',
            options: [
              { id: 'a', label: 'El hígado', isCorrect: false },
              { id: 'b', label: 'El riñón', isCorrect: true },
              { id: 'c', label: 'El páncreas', isCorrect: false },
              { id: 'd', label: 'El bazo', isCorrect: false }
            ],
            explanation: 'La nefrona es la unidad estructural y funcional del riñón donde se filtra la sangre y se forma la orina.'
          },
          {
            id: 'anat-q6',
            tier: 'standard',
            prompt: 'Los neurotransmisores se liberan en:',
            options: [
              { id: 'a', label: 'El cuerpo celular', isCorrect: false },
              { id: 'b', label: 'Las dendritas', isCorrect: false },
              { id: 'c', label: 'La sinapsis', isCorrect: true },
              { id: 'd', label: 'El axón inicial', isCorrect: false }
            ],
            explanation: 'Los neurotransmisores se liberan en el espacio sináptico desde las vesículas del terminal presináptico del axón.'
          },
          {
            id: 'anat-q7',
            tier: 'standard',
            prompt: 'La espermatogénesis produce:',
            options: [
              { id: 'a', label: 'Dos espermatozoides diploides', isCorrect: false },
              { id: 'b', label: 'Cuatro espermatozoides haploides', isCorrect: true },
              { id: 'c', label: 'Un espermatozoide haploide', isCorrect: false },
              { id: 'd', label: 'Cuatro espermatozoides diploides', isCorrect: false }
            ],
            explanation: 'La espermatogénesis mediante meiosis produce cuatro gametos masculinos haploides funcionales a partir de cada espermatocito primario.'
          },
          {
            id: 'anat-q8',
            tier: 'standard',
            prompt: 'La hormona responsable del desarrollo de los caracteres sexuales secundarios femeninos es:',
            options: [
              { id: 'a', label: 'Progesterona', isCorrect: false },
              { id: 'b', label: 'Testosterona', isCorrect: false },
              { id: 'c', label: 'Estrógenos', isCorrect: true },
              { id: 'd', label: 'FSH', isCorrect: false }
            ],
            explanation: 'Los estrógenos, producidos principalmente por los ovarios, son responsables del desarrollo de las características sexuales secundarias femeninas.'
          },
        {
          id: 'bio-mol-q1',
          tier: 'standard',
          prompt: '¿Cuál de los siguientes bioelementos es un componente esencial de los ácidos nucleicos pero NO de las proteínas?',
          options: [
            { id: 'a', label: 'Nitrógeno', isCorrect: false },
            { id: 'b', label: 'Carbono', isCorrect: false },
            { id: 'c', label: 'Fósforo', isCorrect: true },
            { id: 'd', label: 'Hidrógeno', isCorrect: false }
          ],
          explanation: 'El fósforo forma parte de los grupos fosfato en el esqueleto azúcar-fosfato del ADN y ARN, pero no está presente en la estructura de las proteínas.'
        },
        {
          id: 'bio-mol-q2',
          tier: 'standard',
          prompt: '¿Qué propiedad del agua es responsable de su elevada capacidad calorífica?',
          options: [
            { id: 'a', label: 'Su carácter apolar', isCorrect: false },
            { id: 'b', label: 'Su bajo peso molecular', isCorrect: false },
            { id: 'c', label: 'Los puentes de hidrógeno entre moléculas', isCorrect: true },
            { id: 'd', label: 'Su estructura lineal', isCorrect: false }
          ],
          explanation: 'Los numerosos puentes de hidrógeno requieren gran cantidad de energía para romperse, lo que confiere al agua una alta capacidad calorífica.'
        },
        {
          id: 'bio-mol-q3',
          tier: 'standard',
          prompt: 'La sacarosa (C₁₂H₂₂O₁₁) es un disacárido formado por:',
          options: [
            { id: 'a', label: 'Glucosa + fructosa', isCorrect: true },
            { id: 'b', label: 'Glucosa + galactosa', isCorrect: false },
            { id: 'c', label: 'Dos moléculas de glucosa', isCorrect: false },
            { id: 'd', label: 'Fructosa + galactosa', isCorrect: false }
          ],
          explanation: 'La sacarosa o azúcar común resulta de la unión mediante enlace glucosídico de una molécula de α-glucosa y una de β-fructosa.'
        },
        {
          id: 'bio-mol-q4',
          tier: 'standard',
          prompt: '¿Qué tipo de lípido tiene función estructural formando parte de las membranas celulares?',
          options: [
            { id: 'a', label: 'Triglicéridos', isCorrect: false },
            { id: 'b', label: 'Ceras', isCorrect: false },
            { id: 'c', label: 'Esteroides', isCorrect: false },
            { id: 'd', label: 'Fosfolípidos', isCorrect: true }
          ],
          explanation: 'Los fosfolípidos son anfipáticos y forman bicapas lipídicas, componente fundamental de todas las membranas biológicas.'
        },
        {
          id: 'bio-mol-q5',
          tier: 'standard',
          prompt: 'La estructura primaria de una proteína se refiere a:',
          options: [
            { id: 'a', label: 'Los puentes de hidrógeno entre aminoácidos', isCorrect: false },
            { id: 'b', label: 'La secuencia de aminoácidos', isCorrect: true },
            { id: 'c', label: 'La forma tridimensional global', isCorrect: false },
            { id: 'd', label: 'La asociación de varias cadenas polipeptídicas', isCorrect: false }
          ],
          explanation: 'La estructura primaria es la secuencia lineal de aminoácidos unidos por enlaces peptídicos, determinada genéticamente.'
        },
        {
          id: 'bio-mol-q6',
          tier: 'standard',
          prompt: '¿Cuál es la función principal del glucógeno en los animales?',
          options: [
            { id: 'a', label: 'Estructural en tejidos conectivos', isCorrect: false },
            { id: 'b', label: 'Reserva energética', isCorrect: true },
            { id: 'c', label: 'Transporte de oxígeno', isCorrect: false },
            { id: 'd', label: 'Catálisis enzimática', isCorrect: false }
          ],
          explanation: 'El glucógeno es el polisacárido de reserva energética en animales, almacenado principalmente en hígado y músculos.'
        },
        {
          id: 'bio-mol-q7',
          tier: 'standard',
          prompt: 'Las enzimas actúan disminuyendo:',
          options: [
            { id: 'a', label: 'La temperatura de reacción', isCorrect: false },
            { id: 'b', label: 'El pH del medio', isCorrect: false },
            { id: 'c', label: 'La concentración de sustratos', isCorrect: false },
            { id: 'd', label: 'La energía de activación', isCorrect: true }
          ],
          explanation: 'Las enzimas son catalizadores biológicos que reducen la energía de activación necesaria para que ocurra una reacción química.'
        },
        {
          id: 'bio-mol-q8',
          tier: 'standard',
          prompt: '¿Qué tipo de ácido graso NO tiene dobles enlaces en su cadena hidrocarbonada?',
          options: [
            { id: 'a', label: 'Ácido graso poliinsaturado', isCorrect: false },
            { id: 'b', label: 'Ácido graso saturado', isCorrect: true },
            { id: 'c', label: 'Ácido graso monoinsaturado', isCorrect: false },
            { id: 'd', label: 'Ácido graso esencial', isCorrect: false }
          ],
          explanation: 'Los ácidos grasos saturados solo tienen enlaces simples C-C, lo que los hace más sólidos a temperatura ambiente.'
        }
      ]
    },
    {
      id: 'genetica-molecular-avanzada',
      title: 'Genética Molecular Avanzada',
      questions: [
        {
          id: 'bio-gen-q1',
          tier: 'standard',
          prompt: 'Durante la replicación del ADN, ¿qué enzima es responsable de sintetizar la nueva cadena de ADN?',
          options: [
            { id: 'a', label: 'ARN polimerasa', isCorrect: false },
            { id: 'b', label: 'Helicasa', isCorrect: false },
            { id: 'c', label: 'ADN polimerasa', isCorrect: true },
            { id: 'd', label: 'Ligasa', isCorrect: false }
          ],
          explanation: 'La ADN polimerasa es la enzima que cataliza la adición de nucleótidos complementarios durante la síntesis de ADN.'
        },
        {
          id: 'bio-gen-q2',
          tier: 'standard',
          prompt: 'El proceso de transcripción consiste en:',
          options: [
            { id: 'a', label: 'Síntesis de proteínas a partir de ARNm', isCorrect: false },
            { id: 'b', label: 'Duplicación del material genético', isCorrect: false },
            { id: 'c', label: 'Síntesis de ARN a partir de ADN', isCorrect: true },
            { id: 'd', label: 'Unión de aminoácidos mediante enlaces peptídicos', isCorrect: false }
          ],
          explanation: 'La transcripción es el proceso por el cual se sintetiza ARN usando una hebra de ADN como molde.'
        },
        {
          id: 'bio-gen-q3',
          tier: 'standard',
          prompt: '¿Cuántos nucleótidos forman un codón en el código genético?',
          options: [
            { id: 'a', label: 'Dos', isCorrect: false },
            { id: 'b', label: 'Cuatro', isCorrect: false },
            { id: 'c', label: 'Cinco', isCorrect: false },
            { id: 'd', label: 'Tres', isCorrect: true }
          ],
          explanation: 'Un codón está formado por tres nucleótidos consecutivos que codifican para un aminoácido específico o señal de terminación.'
        },
        {
          id: 'bio-gen-q4',
          tier: 'standard',
          prompt: '¿Qué tipo de mutación implica el cambio de un único nucleótido en la secuencia de ADN?',
          options: [
            { id: 'a', label: 'Deleción', isCorrect: false },
            { id: 'b', label: 'Duplicación', isCorrect: false },
            { id: 'c', label: 'Puntual o sustitución', isCorrect: true },
            { id: 'd', label: 'Inversión', isCorrect: false }
          ],
          explanation: 'Las mutaciones puntuales o por sustitución cambian un solo nucleótido, pudiendo ser silenciosas, sin sentido o de cambio de sentido.'
        },
        {
          id: 'bio-gen-q5',
          tier: 'standard',
          prompt: 'La técnica de PCR (Reacción en Cadena de la Polimerasa) se utiliza para:',
          options: [
            { id: 'a', label: 'Secuenciar proteínas', isCorrect: false },
            { id: 'b', label: 'Amplificar fragmentos de ADN', isCorrect: true },
            { id: 'c', label: 'Separar moléculas por tamaño', isCorrect: false },
            { id: 'd', label: 'Transferir genes entre bacterias', isCorrect: false }
          ],
          explanation: 'La PCR permite obtener millones de copias de un fragmento específico de ADN mediante ciclos de desnaturalización, hibridación y extensión.'
        },
        {
          id: 'bio-gen-q6',
          tier: 'standard',
          prompt: 'Los organismos transgénicos son aquellos que:',
          options: [
            { id: 'a', label: 'Han sufrido una mutación espontánea', isCorrect: false },
            { id: 'b', label: 'Contienen ADN de otra especie', isCorrect: true },
            { id: 'c', label: 'Se reproducen asexualmente', isCorrect: false },
            { id: 'd', label: 'Tienen más de dos juegos cromosómicos', isCorrect: false }
          ],
          explanation: 'Los organismos transgénicos han sido modificados genéticamente mediante la inserción de genes procedentes de otra especie.'
        },
        {
          id: 'bio-gen-q7',
          tier: 'standard',
          prompt: 'Durante la traducción, los ARNt transportan:',
          options: [
            { id: 'a', label: 'Nucleótidos', isCorrect: false },
            { id: 'b', label: 'Aminoácidos', isCorrect: true },
            { id: 'c', label: 'Lípidos', isCorrect: false },
            { id: 'd', label: 'Glucosa', isCorrect: false }
          ],
          explanation: 'Los ARN de transferencia (ARNt) reconocen los codones del ARNm y transportan el aminoácido correspondiente al ribosoma.'
        },
        {
          id: 'bio-gen-q8',
          tier: 'standard',
          prompt: '¿Qué enzima de restricción se utiliza en ingeniería genética para cortar el ADN en secuencias específicas?',
          options: [
            { id: 'a', label: 'Ligasa', isCorrect: false },
            { id: 'b', label: 'Endonucleasa', isCorrect: true },
            { id: 'c', label: 'Polimerasa', isCorrect: false },
            { id: 'd', label: 'Helicasa', isCorrect: false }
          ],
          explanation: 'Las endonucleasas de restricción reconocen y cortan secuencias específicas de ADN, generando extremos cohesivos o romos.'
        }
      ]
    },
    {
      id: 'citologia-avanzada',
      title: 'Citología Avanzada',
      questions: [
        {
          id: 'bio-cit-new-q1',
          tier: 'standard',
          prompt: '¿Qué estructura celular es exclusiva de las células vegetales?',
          options: [
            { id: 'a', label: 'Mitocondria', isCorrect: false },
            { id: 'b', label: 'Retículo endoplasmático', isCorrect: false },
            { id: 'c', label: 'Pared celular de celulosa', isCorrect: true },
            { id: 'd', label: 'Membrana plasmática', isCorrect: false }
          ],
          explanation: 'La pared celular de celulosa proporciona soporte estructural y es característica exclusiva de las células vegetales.'
        },
        {
          id: 'bio-cit-new-q2',
          tier: 'standard',
          prompt: 'Las mitocondrias son los orgánulos responsables de:',
          options: [
            { id: 'a', label: 'La síntesis de proteínas', isCorrect: false },
            { id: 'b', label: 'La fotosíntesis', isCorrect: false },
            { id: 'c', label: 'La respiración celular', isCorrect: true },
            { id: 'd', label: 'La digestión celular', isCorrect: false }
          ],
          explanation: 'Las mitocondrias realizan la respiración celular aerobia, produciendo ATP mediante la cadena de transporte electrónico.'
        },
        {
          id: 'bio-cit-new-q3',
          tier: 'standard',
          prompt: '¿En qué fase del ciclo celular se duplica el ADN?',
          options: [
            { id: 'a', label: 'G1', isCorrect: false },
            { id: 'b', label: 'S', isCorrect: true },
            { id: 'c', label: 'G2', isCorrect: false },
            { id: 'd', label: 'Mitosis', isCorrect: false }
          ],
          explanation: 'La fase S (síntesis) es el periodo de la interfase en el que se produce la replicación del ADN.'
        },
        {
          id: 'bio-cit-new-q4',
          tier: 'standard',
          prompt: 'La diferencia fundamental entre mitosis y meiosis es que:',
          options: [
            { id: 'a', label: 'La mitosis ocurre solo en células vegetales', isCorrect: false },
            { id: 'b', label: 'La meiosis produce células con la mitad de cromosomas', isCorrect: true },
            { id: 'c', label: 'La mitosis implica dos divisiones sucesivas', isCorrect: false },
            { id: 'd', label: 'La meiosis no tiene interfase', isCorrect: false }
          ],
          explanation: 'La meiosis produce cuatro células haploides (n) a partir de una célula diploide (2n), reduciendo el número cromosómico a la mitad.'
        },
        {
          id: 'bio-cit-new-q5',
          tier: 'standard',
          prompt: 'Los ribosomas son los orgánulos donde se realiza:',
          options: [
            { id: 'a', label: 'La traducción', isCorrect: true },
            { id: 'b', label: 'La transcripción', isCorrect: false },
            { id: 'c', label: 'La replicación', isCorrect: false },
            { id: 'd', label: 'La glucólisis', isCorrect: false }
          ],
          explanation: 'Los ribosomas son las estructuras donde se sintetizan las proteínas mediante el proceso de traducción del ARNm.'
        },
        {
          id: 'bio-cit-new-q6',
          tier: 'standard',
          prompt: '¿Qué orgánulo contiene enzimas digestivas y se encarga de la digestión intracelular?',
          options: [
            { id: 'a', label: 'Aparato de Golgi', isCorrect: false },
            { id: 'b', label: 'Peroxisoma', isCorrect: false },
            { id: 'c', label: 'Lisosoma', isCorrect: true },
            { id: 'd', label: 'Vacuola', isCorrect: false }
          ],
          explanation: 'Los lisosomas contienen hidrolasas ácidas que degradan macromoléculas y orgánulos envejecidos mediante autofagia.'
        },
        {
          id: 'bio-cit-new-q7',
          tier: 'standard',
          prompt: 'Las células procariotas se caracterizan por:',
          options: [
            { id: 'a', label: 'Tener núcleo definido', isCorrect: false },
            { id: 'b', label: 'Carecer de membrana nuclear', isCorrect: true },
            { id: 'c', label: 'Poseer mitocondrias', isCorrect: false },
            { id: 'd', label: 'Tener retículo endoplasmático', isCorrect: false }
          ],
          explanation: 'Las células procariotas (bacterias y arqueas) carecen de núcleo definido y su ADN está en una región llamada nucleoide.'
        },
        {
          id: 'bio-cit-new-q8',
          tier: 'standard',
          prompt: 'Durante la metafase de la mitosis, los cromosomas se encuentran:',
          options: [
            { id: 'a', label: 'Migrando hacia los polos', isCorrect: false },
            { id: 'b', label: 'Descondensándose', isCorrect: false },
            { id: 'c', label: 'Alineados en el plano ecuatorial', isCorrect: true },
            { id: 'd', label: 'Recombinándose genéticamente', isCorrect: false }
          ],
          explanation: 'En metafase, los cromosomas alcanzan su máxima condensación y se alinean en la placa ecuatorial unidos al huso mitótico.'
        }
      ]
    },
    {
      id: 'microbiologia-inmunologia-avanzada',
      title: 'Microbiología e Inmunología Avanzada',
      questions: [
        {
          id: 'bio-mic-new-q1',
          tier: 'standard',
          prompt: 'Los virus se consideran parásitos intracelulares obligados porque:',
          options: [
            { id: 'a', label: 'Tienen metabolismo propio', isCorrect: false },
            { id: 'b', label: 'Pueden reproducirse en medios de cultivo', isCorrect: false },
            { id: 'c', label: 'Necesitan la maquinaria celular del hospedador', isCorrect: true },
            { id: 'd', label: 'Son células procariotas', isCorrect: false }
          ],
          explanation: 'Los virus carecen de metabolismo propio y requieren infectar células para utilizar sus ribosomas y sintetizar sus componentes.'
        },
        {
          id: 'bio-mic-new-q2',
          tier: 'standard',
          prompt: '¿Qué células del sistema inmunitario presentan antígenos a los linfocitos T?',
          options: [
            { id: 'a', label: 'Eritrocitos', isCorrect: false },
            { id: 'b', label: 'Plaquetas', isCorrect: false },
            { id: 'c', label: 'Células dendríticas', isCorrect: true },
            { id: 'd', label: 'Neutrófilos', isCorrect: false }
          ],
          explanation: 'Las células dendríticas son células presentadoras de antígeno (CPA) que activan la respuesta inmunitaria adaptativa.'
        },
        {
          id: 'bio-mic-new-q3',
          tier: 'standard',
          prompt: 'La inmunidad humoral está mediada principalmente por:',
          options: [
            { id: 'a', label: 'Linfocitos T citotóxicos', isCorrect: false },
            { id: 'b', label: 'Macrófagos', isCorrect: false },
            { id: 'c', label: 'Linfocitos B y anticuerpos', isCorrect: true },
            { id: 'd', label: 'Células NK', isCorrect: false }
          ],
          explanation: 'Los linfocitos B producen anticuerpos específicos contra antígenos, constituyendo la base de la inmunidad humoral.'
        },
        {
          id: 'bio-mic-new-q4',
          tier: 'standard',
          prompt: 'Las vacunas atenuadas contienen:',
          options: [
            { id: 'a', label: 'Toxinas inactivadas', isCorrect: false },
            { id: 'b', label: 'Microorganismos muertos', isCorrect: false },
            { id: 'c', label: 'Microorganismos vivos debilitados', isCorrect: true },
            { id: 'd', label: 'Solo fragmentos de ADN', isCorrect: false }
          ],
          explanation: 'Las vacunas atenuadas utilizan patógenos vivos pero debilitados que inducen inmunidad sin causar enfermedad grave.'
        },
        {
          id: 'bio-mic-new-q5',
          tier: 'standard',
          prompt: '¿Qué estructura bacteriana es responsable de la resistencia a condiciones adversas?',
          options: [
            { id: 'a', label: 'Plásmido', isCorrect: false },
            { id: 'b', label: 'Flagelo', isCorrect: false },
            { id: 'c', label: 'Endospora', isCorrect: true },
            { id: 'd', label: 'Cápsula', isCorrect: false }
          ],
          explanation: 'Las endosporas son estructuras de resistencia que permiten a algunas bacterias sobrevivir en condiciones extremas de temperatura y sequedad.'
        },
        {
          id: 'bio-mic-new-q6',
          tier: 'standard',
          prompt: 'La fagocitosis es un mecanismo de defensa característico de la inmunidad:',
          options: [
            { id: 'a', label: 'Adaptativa específica', isCorrect: false },
            { id: 'b', label: 'Innata inespecífica', isCorrect: true },
            { id: 'c', label: 'Humoral solamente', isCorrect: false },
            { id: 'd', label: 'Celular adquirida', isCorrect: false }
          ],
          explanation: 'La fagocitosis por macrófagos y neutrófilos es una respuesta rápida e inespecífica de la inmunidad innata.'
        },
        {
          id: 'bio-mic-new-q7',
          tier: 'standard',
          prompt: 'Los hongos son organismos:',
          options: [
            { id: 'a', label: 'Autótrofos fotosintéticos', isCorrect: false },
            { id: 'b', label: 'Heterótrofos por absorción', isCorrect: true },
            { id: 'c', label: 'Quimioautótrofos', isCorrect: false },
            { id: 'd', label: 'Procariotas', isCorrect: false }
          ],
          explanation: 'Los hongos son eucariotas heterótrofos que secretan enzimas y absorben nutrientes del medio externo.'
        },
        {
          id: 'bio-mic-new-q8',
          tier: 'standard',
          prompt: 'Los antibióticos son efectivos contra:',
          options: [
            { id: 'a', label: 'Virus', isCorrect: false },
            { id: 'b', label: 'Bacterias', isCorrect: true },
            { id: 'c', label: 'Protozoos exclusivamente', isCorrect: false },
            { id: 'd', label: 'Todas las infecciones', isCorrect: false }
          ],
          explanation: 'Los antibióticos actúan específicamente contra bacterias, inhibiendo procesos como la síntesis de pared celular o proteínas.'
        }
      ]
    },
    {
      id: 'anatomia-fisiologia-humana',
      title: 'Anatomía y Fisiología Humana',
      questions: [
        {
          id: 'bio-ana-new-q1',
          tier: 'standard',
          prompt: '¿En qué órgano se produce principalmente la absorción de nutrientes?',
          options: [
            { id: 'a', label: 'Estómago', isCorrect: false },
            { id: 'b', label: 'Intestino delgado', isCorrect: true },
            { id: 'c', label: 'Intestino grueso', isCorrect: false },
            { id: 'd', label: 'Esófago', isCorrect: false }
          ],
          explanation: 'El intestino delgado, especialmente el yeyuno-íleon, posee vellosidades y microvellosidades que maximizan la superficie de absorción.'
        },
        {
          id: 'bio-ana-new-q2',
          tier: 'standard',
          prompt: 'La hematosis o intercambio gaseoso en los pulmones se produce en:',
          options: [
            { id: 'a', label: 'Los bronquios', isCorrect: false },
            { id: 'b', label: 'La tráquea', isCorrect: false },
            { id: 'c', label: 'Los alvéolos pulmonares', isCorrect: true },
            { id: 'd', label: 'Las fosas nasales', isCorrect: false }
          ],
          explanation: 'Los alvéolos pulmonares están rodeados de capilares donde se produce el intercambio de O₂ y CO₂ por difusión simple.'
        },
        {
          id: 'bio-ana-new-q3',
          tier: 'standard',
          prompt: '¿Qué hormona estimula la reabsorción de agua en los túbulos renales?',
          options: [
            { id: 'a', label: 'Insulina', isCorrect: false },
            { id: 'b', label: 'Adrenalina', isCorrect: false },
            { id: 'c', label: 'Hormona antidiurética (ADH)', isCorrect: true },
            { id: 'd', label: 'Tiroxina', isCorrect: false }
          ],
          explanation: 'La ADH o vasopresina aumenta la permeabilidad de los túbulos colectores, favoreciendo la reabsorción de agua.'
        },
        {
          id: 'bio-ana-new-q4',
          tier: 'standard',
          prompt: 'El nódulo sinoauricular (marcapasos cardíaco) se localiza en:',
          options: [
            { id: 'a', label: 'El ventrículo izquierdo', isCorrect: false },
            { id: 'b', label: 'La aurícula derecha', isCorrect: true },
            { id: 'c', label: 'El tabique interventricular', isCorrect: false },
            { id: 'd', label: 'La arteria aorta', isCorrect: false }
          ],
          explanation: 'El nódulo sinoauricular está en la pared de la aurícula derecha y genera los impulsos eléctricos que regulan el ritmo cardíaco.'
        },
        {
          id: 'bio-ana-new-q5',
          tier: 'standard',
          prompt: 'La neurona está formada por un cuerpo celular o soma, dendritas y:',
          options: [
            { id: 'a', label: 'Axón', isCorrect: true },
            { id: 'b', label: 'Mielina', isCorrect: false },
            { id: 'c', label: 'Sinapsis', isCorrect: false },
            { id: 'd', label: 'Ganglio', isCorrect: false }
          ],
          explanation: 'El axón es la prolongación neuronal que conduce el impulso nervioso desde el soma hacia otras neuronas o células efectoras.'
        },
        {
          id: 'bio-ana-new-q6',
          tier: 'standard',
          prompt: '¿Qué glándula produce insulina y glucagón?',
          options: [
            { id: 'a', label: 'Tiroides', isCorrect: false },
            { id: 'b', label: 'Hipófisis', isCorrect: false },
            { id: 'c', label: 'Suprarrenales', isCorrect: false },
            { id: 'd', label: 'Páncreas', isCorrect: true }
          ],
          explanation: 'Los islotes de Langerhans del páncreas contienen células beta (insulina) y alfa (glucagón) que regulan la glucemia.'
        },
        {
          id: 'bio-ana-new-q7',
          tier: 'standard',
          prompt: 'La espermatogénesis ocurre en:',
          options: [
            { id: 'a', label: 'La próstata', isCorrect: false },
            { id: 'b', label: 'Los túbulos seminíferos', isCorrect: true },
            { id: 'c', label: 'El epidídimo', isCorrect: false },
            { id: 'd', label: 'Las vesículas seminales', isCorrect: false }
          ],
          explanation: 'La espermatogénesis tiene lugar en los túbulos seminíferos de los testículos.'
        },
        {
          id: 'bio-ana-new-q8',
          tier: 'standard',
          prompt: 'La función principal de los eritrocitos o glóbulos rojos es:',
          options: [
            { id: 'a', label: 'Defensa inmunitaria', isCorrect: false },
            { id: 'b', label: 'Coagulación sanguínea', isCorrect: false },
            { id: 'c', label: 'Transporte de oxígeno', isCorrect: true },
            { id: 'd', label: 'Regulación hormonal', isCorrect: false }
          ],
          explanation: 'Los eritrocitos contienen hemoglobina que transporta oxígeno desde los pulmones a los tejidos.'
        },
        {
          id: 'bio-ana-new-q9',
          tier: 'standard',
          prompt: 'El impulso nervioso se propaga a lo largo del axón mediante:',
          options: [
            { id: 'a', label: 'Flujo de sangre', isCorrect: false },
            { id: 'b', label: 'Ondas de despolarización y repolarización', isCorrect: true },
            { id: 'c', label: 'Transporte de neurotransmisores', isCorrect: false },
            { id: 'd', label: 'Movimiento de orgánulos', isCorrect: false }
          ],
          explanation: 'El potencial de acción se propaga por cambios en la permeabilidad de la membrana a iones Na⁺ y K⁺.'
        },
        {
          id: 'bio-ana-new-q10',
          tier: 'standard',
          prompt: 'La ovulación en el ciclo menstrual ocurre aproximadamente en el día:',
          options: [
            { id: 'a', label: '1', isCorrect: false },
            { id: 'b', label: '7', isCorrect: false },
            { id: 'c', label: '14', isCorrect: true },
            { id: 'd', label: '28', isCorrect: false }
          ],
          explanation: 'En un ciclo de 28 días, la ovulación suele ocurrir alrededor del día 14, tras el pico de LH.'
        }
      ]
    }
  ]
}