import { Subject } from './types'

export const physicsES: Subject = {
  id: 'physics',
  name: 'Física',
  topics: [
    {
      id: 'gravitatorio',
      title: 'Campo Gravitatorio',
      questions: [
        { id: 'fis-grav-q1', tier: 'standard', prompt: '¿Cómo varía la fuerza gravitatoria si la distancia se duplica?', options: [{ id: 'a', label: 'Se reduce a la cuarta parte.', isCorrect: true }, { id: 'b', label: 'Se reduce a la mitad.', isCorrect: false }, { id: 'c', label: 'Se duplica.', isCorrect: false }, { id: 'd', label: 'Se cuadruplica.', isCorrect: false }], explanation: '$F \propto 1/r^2$.' },
        { id: 'fis-grav-q2', tier: 'premium', prompt: 'Periodo de un satélite geoestacionario:', options: [{ id: 'a', label: '24 horas.', isCorrect: true }, { id: 'b', label: '12 horas.', isCorrect: false }, { id: 'c', label: '1.5 horas.', isCorrect: false }, { id: 'd', label: '27 días.', isCorrect: false }], explanation: 'Coincide con la rotación terrestre.' },
        { id: 'fis-grav-q3', tier: 'premium', prompt: 'La velocidad de escape depende de:', options: [{ id: 'a', label: 'Masa del planeta y su radio.', isCorrect: true }, { id: 'b', label: 'Masa del satélite.', isCorrect: false }, { id: 'c', label: 'Solo de G.', isCorrect: false }, { id: 'd', label: 'La densidad del aire.', isCorrect: false }], explanation: '$v_e = \sqrt{2GM/R}$.' },
        { id: 'fis-grav-q4', tier: 'standard', prompt: 'Si la masa de la Tierra se duplicara sin cambiar su radio, la gravedad g:', options: [{ id: 'a', label: 'Se duplicaría.', isCorrect: true }, { id: 'b', label: 'Se reduciría a la mitad.', isCorrect: false }, { id: 'c', label: 'No variaría.', isCorrect: false }, { id: 'd', label: 'Aumentaría 4 veces.', isCorrect: false }], explanation: '$g = GM/R^2$.' },
        { id: 'fis-grav-q5', tier: 'premium', prompt: 'Energía mecánica de un satélite en órbita circular:', options: [{ id: 'a', label: '$-GMm/2R$', isCorrect: true }, { id: 'b', label: '$GMm/R$', isCorrect: false }, { id: 'c', label: '$-GMm/R$', isCorrect: false }, { id: 'd', label: '$GMm/2R$', isCorrect: false }], explanation: '$E_m = E_c + E_p = -E_c$.' },
        { id: 'fis-grav-q6', tier: 'standard', prompt: 'Las leyes de Kepler describen:', options: [{ id: 'a', label: 'El movimiento planetario.', isCorrect: true }, { id: 'b', label: 'La caída libre.', isCorrect: false }, { id: 'c', label: 'La refracción.', isCorrect: false }, { id: 'd', label: 'La radiactividad.', isCorrect: false }], explanation: 'Publicadas en 1609-1619.' }
      ]
    },
    {
      id: 'electromagnetismo',
      title: 'Electromagnetismo',
      questions: [
        { id: 'fis-mag-q1', tier: 'premium', prompt: 'Dirección de la fuerza sobre una carga positiva moviéndose en +X con campo en +Y:', options: [{ id: 'a', label: 'Hacia +Z (fuera de la página).', isCorrect: true }, { id: 'b', label: 'Hacia -Z.', isCorrect: false }, { id: 'c', label: 'Hacia -X.', isCorrect: false }, { id: 'd', label: 'Hacia +Y.', isCorrect: false }], explanation: 'Regla de la mano derecha.' },
        { id: 'fis-mag-q2', tier: 'standard', prompt: 'Unidad del flujo magnético en el S.I.:', options: [{ id: 'a', label: 'Weber (Wb).', isCorrect: true }, { id: 'b', label: 'Tesla (T).', isCorrect: false }, { id: 'c', label: 'Newton (N).', isCorrect: false }, { id: 'd', label: 'Joule (J).', isCorrect: false }], explanation: '$1 Wb = 1 T \cdot m^2$.' },
        { id: 'fis-mag-q3', tier: 'premium', prompt: 'Un ciclotrón acelera partículas mediante:', options: [{ id: 'a', label: 'Campos eléctricos y magnéticos.', isCorrect: true }, { id: 'b', label: 'Solo presión.', isCorrect: false }, { id: 'c', label: 'Gravedad.', isCorrect: false }, { id: 'd', label: 'Luz láser.', isCorrect: false }], explanation: 'El campo magnético curva y el eléctrico acelera.' },
        { id: 'fis-mag-q4', tier: 'standard', prompt: 'La ley de Ampère relaciona:', options: [{ id: 'a', label: 'Corriente y campo magnético.', isCorrect: true }, { id: 'b', label: 'Carga y fuerza.', isCorrect: false }, { id: 'c', label: 'Luz y calor.', isCorrect: false }, { id: 'd', label: 'Voltaje y resistencia.', isCorrect: false }], explanation: 'Circulación de B por una curva cerrada.' },
        { id: 'fis-mag-q5', tier: 'premium', prompt: 'Dos hilos paralelos con corrientes en el mismo sentido:', options: [{ id: 'a', label: 'Se atraen.', isCorrect: true }, { id: 'b', label: 'Se repelen.', isCorrect: false }, { id: 'c', label: 'No interactúan.', isCorrect: false }, { id: 'd', label: 'Giran entre sí.', isCorrect: false }], explanation: 'Fuerza magnética atractiva.' }
      ]
    },
    {
      id: 'ondas-optica',
      title: 'Ondas y Óptica',
      questions: [
        { id: 'fis-wav-q1', tier: 'standard', prompt: 'Distancia entre dos crestas consecutivas:', options: [{ id: 'a', label: 'Longitud de onda ($\lambda$).', isCorrect: true }, { id: 'b', label: 'Amplitud.', isCorrect: false }, { id: 'c', label: 'Frecuencia.', isCorrect: false }, { id: 'd', label: 'Periodo.', isCorrect: false }], explanation: 'Definición de longitud de onda.' },
        { id: 'fis-wav-q2', tier: 'premium', prompt: 'El sonido no puede propagarse en:', options: [{ id: 'a', label: 'El vacío.', isCorrect: true }, { id: 'b', label: 'El agua.', isCorrect: false }, { id: 'c', label: 'El acero.', isCorrect: false }, { id: 'd', label: 'El aire.', isCorrect: false }], explanation: 'Es una onda mecánica que requiere medio elástico.' },
        { id: 'fis-opt-q1', tier: 'premium', prompt: 'Reflexión total interna ocurre cuando:', options: [{ id: 'a', label: 'De medio más denso a menos denso con ángulo superior al crítico.', isCorrect: true }, { id: 'b', label: 'De aire a agua siempre.', isCorrect: false }, { id: 'c', label: 'En espejos planos solamente.', isCorrect: false }, { id: 'd', label: 'Con luz roja siempre.', isCorrect: false }], explanation: 'El rayo no logra salir del medio.' },
        { id: 'fis-opt-q2', tier: 'standard', prompt: 'La miopía se corrige con lentes:', options: [{ id: 'a', label: 'Divergentes.', isCorrect: true }, { id: 'b', label: 'Convergentes.', isCorrect: false }, { id: 'c', label: 'Planas.', isCorrect: false }, { id: 'd', label: 'Opacas.', isCorrect: false }], explanation: 'Trasladan la imagen hacia la retina.' },
        { id: 'fis-wav-q3', tier: 'premium', prompt: 'Efecto Doppler: si la fuente se aleja, la frecuencia percibida:', options: [{ id: 'a', label: 'Disminuye.', isCorrect: true }, { id: 'b', label: 'Aumenta.', isCorrect: false }, { id: 'c', label: 'No varía.', isCorrect: false }, { id: 'd', label: 'Se hace cero.', isCorrect: false }], explanation: 'El sonido se percibe más grave.' }
      ]
    },
    {
      id: 'moderna',
      title: 'Física Moderna',
      questions: [
        { id: 'fis-cuan-q1', tier: 'standard', prompt: '¿Quién propuso los cuantos de luz?', options: [{ id: 'a', label: 'Max Planck.', isCorrect: true }, { id: 'b', label: 'Isaac Newton.', isCorrect: false }, { id: 'c', label: 'Galileo.', isCorrect: false }, { id: 'd', label: 'Marie Curie.', isCorrect: false }], explanation: 'Constante de Planck $h$.' },
        { id: 'fis-cuan-q2', tier: 'premium', prompt: 'Principio de Incertidumbre de Heisenberg:', options: [{ id: 'a', label: 'No se puede conocer posición y momento con precisión infinita a la vez.', isCorrect: true }, { id: 'b', label: 'El gato está vivo y muerto.', isCorrect: false }, { id: 'c', label: 'La velocidad de la luz es variable.', isCorrect: false }, { id: 'd', label: 'La energía se crea.', isCorrect: false }], explanation: '$\Delta x \Delta p \geq h/4\pi$.' },
        { id: 'fis-rel-q1', tier: 'premium', prompt: 'En relatividad especial, el tiempo para un observador en movimiento:', options: [{ id: 'a', label: 'Pasa más despacio (dilatación).', isCorrect: true }, { id: 'b', label: 'Pasa más rápido.', isCorrect: false }, { id: 'c', label: 'Se detiene.', isCorrect: false }, { id: 'd', label: 'Es absoluto.', isCorrect: false }], explanation: 'Dilatación temporal de Lorentz.' },
        { id: 'fis-nuc-q1', tier: 'standard', prompt: 'La radiactividad Alfa consiste en:', options: [{ id: 'a', label: 'Núcleos de Helio-4.', isCorrect: true }, { id: 'b', label: 'Electrones.', isCorrect: false }, { id: 'c', label: 'Fotones gamma.', isCorrect: false }, { id: 'd', label: 'Neutrinos.', isCorrect: false }], explanation: 'Partículas con 2 protones y 2 neutrones.' }
      ]
    }
  ]
}