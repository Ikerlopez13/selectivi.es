import type { Subject } from './types'

export const physicsES: Subject = {
  id: 'fisica',
  name: 'Física',
  topics: [
    {
      id: 'gravitacion',
      title: 'Gravitación',
      questions: [
        {
          id: 'fis-grav-q1',
          tier: 'standard',
          prompt: 'Sean \\(m_1\\) y \\(m_2\\) dos masas separadas por distancia \\(r\\). La magnitud de la fuerza gravitatoria entre ellas es \\(F = G\\frac{m_1 m_2}{r^2}\\). Si la distancia \\(r\\) se duplica, ¿cómo cambia \\(F\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene igual.', isCorrect: false },
            { id: 'c', label: 'Disminuye a la cuarta parte.', isCorrect: true },
            { id: 'd', label: 'Disminuye a la mitad.', isCorrect: false },
          ],
          explanation: 'La ley de gravitación es inversa al cuadrado de la distancia, \\(F\' = F/4\\) al doblar \\(r\\).'
        },
        {
          id: 'fis-grav-q2',
          tier: 'standard',
          prompt: 'El campo gravitatorio de una masa puntual \\(M\\) a una distancia \\(r\\) es \\(g(r) = \\dfrac{G M}{r^2}\\), dirigido radialmente hacia \\(M\\). ¿Qué pasa con \\(g\\) si la distancia \\(r\\) se duplica?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene.', isCorrect: false },
            { id: 'c', label: 'Se reduce a la mitad.', isCorrect: false },
            { id: 'd', label: 'Se reduce a la cuarta parte.', isCorrect: true },
          ],
          explanation: 'La magnitud es inversa al cuadrado: \\(g\' = g/4\\) cuando \\(r\\to 2r\\).'
        },
        {
          id: 'fis-grav-q3',
          tier: 'standard',
          prompt: 'La energía potencial gravitatoria entre dos masas \\(M\\) y \\(m\\) separadas por \\(r\\) es \\(U(r) = -\\dfrac{G M m}{r}\\). Si \\(r\\) se duplica, ¿qué ocurre con \\(U\\)?',
          options: [
            { id: 'a', label: 'Se hace menos negativa (aumenta su valor).', isCorrect: true },
            { id: 'b', label: 'Se hace más negativa (disminuye).', isCorrect: false },
            { id: 'c', label: 'Se hace positiva.', isCorrect: false },
            { id: 'd', label: 'Se mantiene igual.', isCorrect: false },
          ],
          explanation: 'Como \\(U\\propto -1/r\\), al doblar \\(r\\) el valor numérico de \\(U\\) aumenta (se vuelve menos negativo).'
        },
        {
          id: 'fis-grav-q4',
          tier: 'standard',
          prompt: 'Para una órbita circular alrededor de una masa central \\(M\\) de radio \\(r\\), la velocidad orbital es \\(v = \\sqrt{\\dfrac{G M}{r}}\\). Si \\(r\\) se duplica, ¿qué pasa con \\(v\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Disminuye por factor \\(\\sqrt{2}\\).', isCorrect: true },
            { id: 'c', label: 'Se reduce a la mitad.', isCorrect: false },
            { id: 'd', label: 'Permanece igual.', isCorrect: false },
          ],
          explanation: 'Con \\(v = \\sqrt{GM/r}\\), si \\(r\\to 2r\\), \\(v\' = v/\\sqrt{2}\\).'
        },
        {
          id: 'fis-grav-q5',
          tier: 'standard',
          prompt: 'La energía mecánica total de una órbita circular es \\(E = -\\dfrac{G M m}{2 r}\\). Si \\(r\\) se duplica, ¿qué ocurre con \\(E\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene.', isCorrect: false },
            { id: 'c', label: 'Se incrementa en un factor de \\(1/2\\) (se hace menos negativa).', isCorrect: true },
            { id: 'd', label: 'Se vuelve positiva.', isCorrect: false },
          ],
          explanation: 'Al doblar \\(r\\), \\(E\\) pasa de \\(-GMm/(2r)\\) a \\(-GMm/(4r) = E/2\\).'
        }
      ]
    },
    {
      id: 'electrostatica',
      title: 'Electrostática y Campo Eléctrico',
      questions: [
        {
          id: 'fis-elec-q1',
          tier: 'standard',
          prompt: 'Dos cargas puntuales \\(q_1\\) y \\(q_2\\) separadas por distancia \\(r\\) ejercen una fuerza de Coulomb \\(F = k\\frac{|q_1 q_2|}{r^2}\\). Si la distancia se duplica, ¿qué sucede con la magnitud de la fuerza?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene.', isCorrect: false },
            { id: 'c', label: 'Se reduce a la mitad.', isCorrect: false },
            { id: 'd', label: 'Se reduce a la cuarta parte.', isCorrect: true },
          ],
          explanation: 'La fuerza es inversa al cuadrado de la distancia; al doblar \\(r\\), \\(F\\) se reduce a la cuarta parte.'
        },
        {
          id: 'fis-elec-q2',
          tier: 'standard',
          prompt: 'El campo eléctrico de una carga puntual \\(q\\) a distancia \\(r\\) es \\(E = k\\frac{|q|}{r^2}\\), dirigido radialmente. Si \\(r\\) se duplica, ¿qué pasa con \\(E\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene.', isCorrect: false },
            { id: 'c', label: 'Se reduce a la mitad.', isCorrect: false },
            { id: 'd', label: 'Se reduce a la cuarta parte.', isCorrect: true },
          ],
          explanation: 'La magnitud de \\(E\\) es inversa al cuadrado de la distancia.'
        },
        {
          id: 'fis-elec-q3',
          tier: 'standard',
          prompt: 'La potencial eléctrica debida a una carga puntual es \\(V(r) = k\\dfrac{q}{r}\\). Si la distancia se duplica, ¿cuál es el factor de cambio en \\(V\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se mantiene.', isCorrect: false },
            { id: 'c', label: 'Se reduce a la mitad.', isCorrect: true },
            { id: 'd', label: 'Se reduce a la cuarta parte.', isCorrect: false },
          ],
          explanation: 'Como \\(V\\propto 1/r\\), al doblar \\(r\\) disminuye a la mitad.'
        },
        {
          id: 'fis-elec-q4',
          tier: 'standard',
          prompt: 'La diferencia de potencial entre dos puntos ubicados a distancias \\(r_1\\) y \\(r_2\\) de una carga puntual es \\(\\Delta V = V(r_2) - V(r_1) = k q (\\frac{1}{r_2} - \\frac{1}{r_1})\\). Si se invierte el orden de los puntos, ¿qué ocurre con el signo de \\(\\Delta V\\)?',
          options: [
            { id: 'a', label: 'Permanece igual.', isCorrect: false },
            { id: 'b', label: 'Cambia de signo.', isCorrect: true },
            { id: 'c', label: 'Se anula.', isCorrect: false },
            { id: 'd', label: 'No depende de la posición.', isCorrect: false },
          ],
          explanation: 'Intercambiar los puntos invierte el signo de la diferencia de potencial.'
        }
      ]
    },
    {
      id: 'magnetismo',
      title: 'Campo Magnético e Inducción',
      questions: [
        {
          id: 'fis-mag-q1',
          tier: 'standard',
          prompt: 'El campo magnético alrededor de un hilo largo recto con corriente I, a una distancia r, es \\(B = \\dfrac{\\mu_0 I}{2 \\pi r}\\). ¿Qué pasa con \\(B\\) si se duplica la distancia \\(r\\)?',
          options: [
            { id: 'a', label: 'Se duplica.', isCorrect: false },
            { id: 'b', label: 'Se reduce a la mitad.', isCorrect: true },
            { id: 'c', label: 'Se reduce a la cuarta parte.', isCorrect: false },
            { id: 'd', label: 'Se mantiene.', isCorrect: false },
          ],
          explanation: 'La dependencia es \\(B \\propto 1/r\\); al doblar la distancia, la intensidad se reduce a la mitad.'
        },
        {
          id: 'fis-mag-q2',
          tier: 'standard',
          prompt: 'Una carga puntual \\(q\\) se mueve con velocidad \\(v\\) en un campo magnético uniforme \\(\\mathbf{B}\\). La magnitud de la fuerza es \\(F = q v B \\sin\\theta\\), donde \\(\\theta\\) es el ángulo entre \\(\\mathbf{v}\\) y \\(\\mathbf{B}\\).',
          options: [
            { id: 'a', label: 'F = q v B.', isCorrect: false },
            { id: 'b', label: 'F = q v B sin\\theta.', isCorrect: true },
            { id: 'c', label: 'F = q E.', isCorrect: false },
            { id: 'd', label: 'F = B.', isCorrect: false },
          ],
          explanation: 'La fuerza de Lorentz transversal es proporcional a \\(\\sin\\theta\\).'
        },
        {
          id: 'fis-mag-q3',
          tier: 'standard',
          prompt: 'La fem inducida en una espira de área \\(A\\) cuando el flujo magnético cambia se da por \\(\\varepsilon = -\\dfrac{d\\Phi_B}{dt}\\). Si el flujo cambia por un valor constante en el tiempo, ¿qué sucede con la dirección de la corriente inducida?',
          options: [
            { id: 'a', label: 'Se mantiene constante en dirección.', isCorrect: false },
            { id: 'b', label: 'Se opondrá al cambio del flujo (Lenz).', isCorrect: true },
            { id: 'c', label: 'No se induce corriente.', isCorrect: false },
            { id: 'd', label: 'Su dirección es aleatoria.', isCorrect: false },
          ],
          explanation: 'La regla de Lenz indica que la corriente inducida genera un campo que se opone al cambio del flujo.'
        }
      ]
    },
    {
      id: 'ondas',
      title: 'Ondas y Óptica',
      questions: [
        {
          id: 'fis-ond-q1',
          tier: 'standard',
          prompt: 'Una onda mecánica transversal se propaga en un medio a velocidad \\(v\\) con frecuencia \\(f\\) y longitud de onda \\(\\lambda\\). ¿Cuál es la relación correcta entre estas magnitudes?',
          options: [
            { id: 'a', label: 'v = f / \\lambda', isCorrect: false },
            { id: 'b', label: 'v = f \\lambda', isCorrect: true },
            { id: 'c', label: 'v = \\lambda / f', isCorrect: false },
            { id: 'd', label: 'v = f + \\lambda', isCorrect: false },
          ],
          explanation: 'La relación fundamental de una onda es \\(v = f\\lambda\\).'
        },
        {
          id: 'fis-ond-q2',
          tier: 'standard',
          prompt: 'Una onda con frecuencia \\(f = 50\\,\\text{Hz}\\) y longitud de onda \\(\\lambda = 4\\,\\text{m}\\) se propaga a través de un medio. ¿Cuál es su velocidad de propagación?',
          options: [
            { id: 'a', label: '200 m/s', isCorrect: true },
            { id: 'b', label: '50 m/s', isCorrect: false },
            { id: 'c', label: '25 m/s', isCorrect: false },
            { id: 'd', label: '400 m/s', isCorrect: false },
          ],
          explanation: 'Utilizando \\(v = f\\lambda\\), \\(v = 50\\times 4 = 200\\) m/s.'
        },
        {
          id: 'fis-ond-q3',
          tier: 'standard',
          prompt: 'Dos ondas armónicas de la misma frecuencia y amplitud se superponen en fase; ¿qué ocurre con la amplitud resultante?',
          options: [
            { id: 'a', label: 'Se anula.', isCorrect: false },
            { id: 'b', label: 'La amplitud resulta en la diferencia de amplitudes.', isCorrect: false },
            { id: 'c', label: 'La amplitud se obtiene por suma de amplitudes.', isCorrect: true },
            { id: 'd', label: 'La amplitud se mantiene constante.', isCorrect: false },
          ],
          explanation: 'En superposición en fase, las amplitudes se suman.'
        }
      ]
    },
    {
      id: 'cuantica',
      title: 'Física Cuántica',
      questions: [
        {
          id: 'fis-cuan-q1',
          tier: 'standard',
          prompt: 'El efecto fotoeléctrico describe la emisión de electrones desde una superficie cuando se ilumina con luz de suficiente energía. ¿Qué cantidad determina el umbral para la emisión?',
          options: [
            { id: 'a', label: 'La intensidad de la luz.', isCorrect: false },
            { id: 'b', label: 'La frecuencia (o energía de fotón) de la luz.', isCorrect: true },
            { id: 'c', label: 'La longitud de onda de la luz solamente.', isCorrect: false },
            { id: 'd', label: 'La temperatura de la superficie.', isCorrect: false },
          ],
          explanation: 'Para emitir electrones se debe superar la función de trabajo, dependiente de la energía de fotón, no solo de la intensidad.'
        },
        {
          id: 'fis-cuan-q2',
          tier: 'standard',
          prompt: 'En el modelo atómico de Bohr para el átomo de hidrógeno, los niveles de energía están dados por \\(E_n = -\\dfrac{13.6\\text{ eV}}{n^2}\\). ¿Qué transición emite un fotón cuando el electrón desciende de \\(n=2\\) a \\(n=1\\)?',
          options: [
            { id: 'a', label: 'Longitud de onda infinita.', isCorrect: false },
            { id: 'b', label: 'Un fotón con energía \\(13.6\\text{ eV} (1 - 1/4) = 10.2\\text{ eV}\\).', isCorrect: true },
            { id: 'c', label: 'Un fotón con energía \\(13.6\\text{ eV}\\).', isCorrect: false },
            { id: 'd', label: 'Dos fotones de energía distinta.', isCorrect: false },
          ],
          explanation: 'La diferencia de energía entre niveles \\(E_1-E_2 = -13.6(1/1^2 - 1/2^2) = -10.2\\text{ eV}\\). El fotón tiene esa energía en negativo signo, es decir, emite.'
        },
        {
          id: 'fis-cuan-q3',
          tier: 'standard',
          prompt: 'Según la dualidad onda-corpúsculo, la partícula tiene una longitud de onda asociada dada por \\(\\lambda = \\dfrac{h}{p}\\). ¿Qué afirmación describe correctamente esta relación para un electrón con momento lineal \\(p = m v\\)?',
          options: [
            { id: 'a', label: '\\(\\lambda\\) es independiente de la velocidad.', isCorrect: false },
            { id: 'b', label: '\\(\\lambda\\) aumenta con la velocidad.', isCorrect: false },
            { id: 'c', label: '\\(\\lambda\\) disminuye al aumentar la cantidad de movimiento.', isCorrect: true },
            { id: 'd', label: '\\(\\lambda\\) está determinada solo por la energía.', isCorrect: false },
          ],
          explanation: 'La longitud de onda asociada es inversamente proporcional al momento: al aumentar \\(p\\), \\(\\lambda\\) disminuye.'
        }
      ]
    }
  ]
}