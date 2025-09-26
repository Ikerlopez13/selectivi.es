import type { Subject } from './types'

export const biologyES: Subject = {
  id: 'biologia',
  name: 'Biología',
  topics: [
    {
      id: 'biomoleculas',
      title: 'Biomoléculas',
      questions: [
        {
          id: 'bio-mol-q1',
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
          id: 'bio-mol-q2',
          tier: 'standard',
          prompt: '¿Cuál es el polisacárido de reserva principal en las plantas?',
          options: [
            { id: 'a', label: 'Almidón', isCorrect: true },
            { id: 'b', label: 'Celulosa', isCorrect: false },
            { id: 'c', label: 'Quitina', isCorrect: false },
            { id: 'd', label: 'Glucógeno', isCorrect: false },
          ],
          explanation: 'En plantas predomina el almidón como reserva de glúcidos.'
        },
        {
          id: 'bio-mol-q3',
          tier: 'standard',
          prompt: '¿Qué grupo funcional forma la unión entre aminoácidos en las proteínas?',
          options: [
            { id: 'a', label: 'Enlace éster', isCorrect: false },
            { id: 'b', label: 'Enlace glucosídico', isCorrect: false },
            { id: 'c', label: 'Enlace peptídico', isCorrect: true },
            { id: 'd', label: 'Enlace iónico', isCorrect: false },
          ],
          explanation: 'La unión entre aminoácidos se establece mediante enlaces peptídicos.'
        },
        {
          id: 'bio-mol-q4',
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
          id: 'bio-mol-q5',
          tier: 'standard',
          prompt: 'En la proteína, ¿qué tipo de interacción estabiliza la estructura secundaria mediante puentes de hidrógeno?',
          options: [
            { id: 'a', label: 'Enlace peptídico', isCorrect: false },
            { id: 'b', label: 'Puentes disulfuro', isCorrect: false },
            { id: 'c', label: 'Enlaces iónicos', isCorrect: false },
            { id: 'd', label: 'Puentes de hidrógeno', isCorrect: true },
          ],
          explanation: 'La estructura secundaria (láminas β y helices α) se estabiliza principalmente por puentes de hidrógeno entre grupos del backbone.'
        }
      ]
    },
    {
      id: 'genetica-molecular',
      title: 'Genética y Biología molecular',
      questions: [
        {
          id: 'bio-gen-q1',
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
          id: 'bio-gen-q2',
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
          id: 'bio-gen-q3',
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
      title: 'Citología',
      questions: [
        {
          id: 'bio-cit-q1',
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
          id: 'bio-cit-q2',
          tier: 'standard',
          prompt: '¿Qué función del retículo endoplásmico rugoso (RER) describe mejor?',
          options: [
            { id: 'a', label: 'Síntesis de lípidos', isCorrect: false },
            { id: 'b', label: 'Almacenamiento de agua', isCorrect: false },
            { id: 'c', label: 'Síntesis de proteínas que serán secretadas o insertadas en membranas', isCorrect: true },
            { id: 'd', label: 'Síntesis de ARN ribosomal', isCorrect: false },
          ],
          explanation: 'El RER contiene ribosomas y participa en la síntesis de proteínas celulares y secretadas.'
        }
      ]
    },
    {
      id: 'microbiologia-inmunologia',
      title: 'Microbiología e Inmunología',
      questions: [
        {
          id: 'bio-mic-q1',
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
          id: 'bio-mic-q2',
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
      id: 'anatomia-fisiologia',
      title: 'Anatomía y fisiología humanas',
      questions: [
        {
          id: 'bio-ana-q1',
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
          id: 'bio-ana-q2',
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
      id: 'ecologia-medioambiente',
      title: 'Ecología y Medioambiente',
      questions: [
        {
          id: 'bio-eco-q1',
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
          id: 'bio-eco-q2',
          tier: 'standard',
          prompt: '¿Qué ciclo biogeoquímico describe el movimiento del agua entre la atmósfera, la hidrosfera y los seres vivos?',
          options: [
            { id: 'a', label: 'Ciclo del nitrógeno', isCorrect: false },
            { id: 'b', label: 'Ciclo del carbono', isCorrect: false },
            { id: 'c', label: 'Ciclo del agua', isCorrect: true },
            { id: 'd', label: 'Ciclo del fósforo', isCorrect: false },
          ],
          explanation: 'El ciclo del agua describe la circulación del H2O entre los compartimentos terrestres y atmosféricos.'
        }
      ]
    }
  ]
}