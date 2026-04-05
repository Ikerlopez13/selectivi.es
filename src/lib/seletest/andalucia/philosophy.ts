import type { Subject } from '../types'

export const philosophyAND: Subject = {
  id: 'filosofia',
  name: 'Historia de la Filosofía',
  topics: [
    {
      id: 'platon',
      title: 'Platón - República',
      questions: [
        {
          id: 'and-filo-platon-q1',
          tier: 'standard',
          prompt: 'Según Platón en la "Alegoría de la Caverna" (República, Libro VI), ¿qué representa el mundo sensible?',
          options: [
            { id: 'a', label: 'La realidad verdadera', isCorrect: false },
            { id: 'b', label: 'Las sombras y apariencias', isCorrect: true },
            { id: 'c', label: 'El mundo de las Ideas', isCorrect: false },
            { id: 'd', label: 'La Idea del Bien', isCorrect: false },
          ],
          explanation: 'Para Platón, el mundo sensible es solo apariencia (las sombras en la caverna), mientras que el mundo inteligible de las Ideas es la verdadera realidad.'
        },
        {
          id: 'and-filo-platon-q2',
          tier: 'standard',
          prompt: 'La teoría de las Ideas de Platón establece que:',
          options: [
            { id: 'a', label: 'Las Ideas son copias de los objetos sensibles', isCorrect: false },
            { id: 'b', label: 'Las Ideas son eternas, inmutables y universales', isCorrect: true },
            { id: 'c', label: 'Solo existen los objetos materiales', isCorrect: false },
            { id: 'd', label: 'Las Ideas cambian con el tiempo', isCorrect: false },
          ],
          explanation: 'Las Ideas platónicas son entidades eternas, inmutables y universales que constituyen la verdadera realidad frente al mundo sensible cambiante.'
        }
      ]
    },
    {
      id: 'descartes',
      title: 'Descartes - Meditaciones y Discurso del Método',
      questions: [
        {
          id: 'and-filo-descartes-q1',
          tier: 'standard',
          prompt: 'Descartes en sus "Meditaciones Metafísicas" llega a la certeza del "cogito ergo sum" mediante:',
          options: [
            { id: 'a', label: 'La experiencia sensible', isCorrect: false },
            { id: 'b', label: 'La duda metódica', isCorrect: true },
            { id: 'c', label: 'La fe religiosa', isCorrect: false },
            { id: 'd', label: 'La autoridad de Aristóteles', isCorrect: false },
          ],
          explanation: 'Descartes aplica la duda metódica para encontrar una verdad indudable, llegando a que si dudo, pienso; y si pienso, existo.'
        },
        {
          id: 'and-filo-descartes-q2',
          tier: 'standard',
          prompt: 'En el "Discurso del Método", Descartes establece que la sustancia pensante (res cogitans) es:',
          options: [
            { id: 'a', label: 'El cuerpo material', isCorrect: false },
            { id: 'b', label: 'La mente o alma', isCorrect: true },
            { id: 'c', label: 'Dios', isCorrect: false },
            { id: 'd', label: 'La materia extensa', isCorrect: false },
          ],
          explanation: 'Descartes distingue entre res cogitans (sustancia pensante, la mente) y res extensa (sustancia extensa, el cuerpo material).'
        }
      ]
    },
    {
      id: 'kant-epistemologia',
      title: 'Kant - Crítica de la Razón Pura',
      questions: [
        {
          id: 'and-filo-kant-ep-q1',
          tier: 'premium',
          prompt: 'Kant en la "Crítica de la Razón Pura" afirma que el conocimiento comienza con la experiencia pero:',
          options: [
            { id: 'a', label: 'Todo conocimiento procede exclusivamente de la experiencia', isCorrect: false },
            { id: 'b', label: 'No todo conocimiento procede de la experiencia', isCorrect: true },
            { id: 'c', label: 'La experiencia es innecesaria', isCorrect: false },
            { id: 'd', label: 'Solo la razón pura es válida', isCorrect: false },
          ],
          explanation: 'Kant realiza una síntesis entre racionalismo y empirismo: el conocimiento comienza con la experiencia, pero la mente aporta estructuras a priori.'
        },
        {
          id: 'and-filo-kant-ep-q2',
          tier: 'premium',
          prompt: 'Los juicios sintéticos a priori según Kant son aquellos que:',
          options: [
            { id: 'a', label: 'Dependen de la experiencia y no aportan conocimiento nuevo', isCorrect: false },
            { id: 'b', label: 'Son independientes de la experiencia y amplían el conocimiento', isCorrect: true },
            { id: 'c', label: 'Son contradictorios', isCorrect: false },
            { id: 'd', label: 'Solo existen en matemáticas', isCorrect: false },
          ],
          explanation: 'Los juicios sintéticos a priori (como 7+5=12) amplían el conocimiento sin depender de la experiencia, fundamentando la ciencia.'
        },
        {
          id: 'and-filo-kant-ep-q3',
          tier: 'premium',
          prompt: 'Para Kant, los fenómenos son:',
          options: [
            { id: 'a', label: 'Las cosas tal como son en sí mismas', isCorrect: false },
            { id: 'b', label: 'Las cosas tal como se nos aparecen', isCorrect: true },
            { id: 'c', label: 'Ilusiones sin realidad', isCorrect: false },
            { id: 'd', label: 'Ideas platónicas', isCorrect: false },
          ],
          explanation: 'Kant distingue entre fenómenos (lo que conocemos, las cosas como se nos aparecen) y noúmenos (las cosas en sí, incognoscibles).'
        }
      ]
    },
    {
      id: 'aristoteles',
      title: 'Aristóteles - Política',
      questions: [
        {
          id: 'and-filo-aristoteles-q1',
          tier: 'standard',
          prompt: 'Aristóteles en la "Política" define al ser humano como:',
          options: [
            { id: 'a', label: 'Un animal racional', isCorrect: false },
            { id: 'b', label: 'Un animal político (zoon politikon)', isCorrect: true },
            { id: 'c', label: 'Un ser aislado', isCorrect: false },
            { id: 'd', label: 'Un ser puramente espiritual', isCorrect: false },
          ],
          explanation: 'Para Aristóteles, el ser humano es por naturaleza un "zoon politikon" (animal político), que solo puede realizar su naturaleza en la polis.'
        },
        {
          id: 'and-filo-aristoteles-q2',
          tier: 'standard',
          prompt: 'Según Aristóteles, el fin de la polis es:',
          options: [
            { id: 'a', label: 'El poder del gobernante', isCorrect: false },
            { id: 'b', label: 'La vida buena y virtuosa de los ciudadanos', isCorrect: true },
            { id: 'c', label: 'La acumulación de riqueza', isCorrect: false },
            { id: 'd', label: 'La conquista militar', isCorrect: false },
          ],
          explanation: 'La polis existe para lograr el bien común y la vida buena (eudaimonía) de los ciudadanos, no solo para la supervivencia.'
        }
      ]
    },
    {
      id: 'locke',
      title: 'Locke - Segundo Tratado del Gobierno Civil',
      questions: [
        {
          id: 'and-filo-locke-q1',
          tier: 'standard',
          prompt: 'En el "Segundo Tratado del Gobierno Civil", Locke defiende que los derechos naturales del individuo son:',
          options: [
            { id: 'a', label: 'Vida, libertad y propiedad', isCorrect: true },
            { id: 'b', label: 'Solo la vida', isCorrect: false },
            { id: 'c', label: 'Poder absoluto', isCorrect: false },
            { id: 'd', label: 'Obediencia al soberano', isCorrect: false },
          ],
          explanation: 'Locke establece tres derechos naturales fundamentales: vida, libertad y propiedad, que el Estado debe proteger.'
        },
        {
          id: 'and-filo-locke-q2',
          tier: 'standard',
          prompt: 'Para Locke, el Estado se origina mediante:',
          options: [
            { id: 'a', label: 'La conquista militar', isCorrect: false },
            { id: 'b', label: 'El derecho divino', isCorrect: false },
            { id: 'c', label: 'El contrato social', isCorrect: true },
            { id: 'd', label: 'La fuerza natural', isCorrect: false },
          ],
          explanation: 'Locke fundamenta el Estado en un contrato social por el cual los individuos ceden parte de su libertad para proteger sus derechos naturales.'
        }
      ]
    },
    {
      id: 'kant-etica',
      title: 'Kant - Fundamentación de la Metafísica de las Costumbres',
      questions: [
        {
          id: 'and-filo-kant-et-q1',
          tier: 'premium',
          prompt: 'El Imperativo Categórico de Kant en la "Fundamentación de la Metafísica de las Costumbres" establece:',
          options: [
            { id: 'a', label: 'Obra según la utilidad', isCorrect: false },
            { id: 'b', label: 'Obra según una máxima que puedas querer que se convierta en ley universal', isCorrect: true },
            { id: 'c', label: 'Obra según tus deseos', isCorrect: false },
            { id: 'd', label: 'Obra según la tradición', isCorrect: false },
          ],
          explanation: 'El Imperativo Categórico kantiano exige actuar según principios universalizables, base de una ética deontológica y autónoma.'
        },
        {
          id: 'and-filo-kant-et-q2',
          tier: 'premium',
          prompt: 'Según Kant, una acción es moral cuando:',
          options: [
            { id: 'a', label: 'Produce consecuencias beneficiosas', isCorrect: false },
            { id: 'b', label: 'Se realiza por deber y respeto a la ley moral', isCorrect: true },
            { id: 'c', label: 'Satisface nuestras inclinaciones', isCorrect: false },
            { id: 'd', label: 'Es aprobada por la sociedad', isCorrect: false },
          ],
          explanation: 'Para Kant, el valor moral reside en la intención (obrar por deber), no en las consecuencias ni en las inclinaciones.'
        }
      ]
    },
    {
      id: 'arendt',
      title: 'Hannah Arendt - La condición humana',
      questions: [
        {
          id: 'and-filo-arendt-q1',
          tier: 'premium',
          prompt: 'Hannah Arendt en "La condición humana" distingue entre labor, trabajo y:',
          options: [
            { id: 'a', label: 'Descanso', isCorrect: false },
            { id: 'b', label: 'Acción', isCorrect: true },
            { id: 'c', label: 'Contemplación', isCorrect: false },
            { id: 'd', label: 'Producción', isCorrect: false },
          ],
          explanation: 'Arendt distingue tres actividades: labor (necesidad biológica), trabajo (fabricación) y acción (actividad política y discursiva).'
        },
        {
          id: 'and-filo-arendt-q2',
          tier: 'premium',
          prompt: 'Para Arendt, la acción es la actividad más propiamente humana porque:',
          options: [
            { id: 'a', label: 'Satisface necesidades básicas', isCorrect: false },
            { id: 'b', label: 'Crea objetos duraderos', isCorrect: false },
            { id: 'c', label: 'Se realiza entre iguales y revela la identidad del agente', isCorrect: true },
            { id: 'd', label: 'Genera riqueza', isCorrect: false },
          ],
          explanation: 'La acción, para Arendt, es la actividad política que se da entre iguales en el espacio público, revelando quiénes somos.'
        }
      ]
    }
  ],
}
