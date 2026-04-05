import type { Subject } from '../types'

export const physicsAND: Subject = {
  id: 'fisica',
  name: 'Física',
  topics: [
    {
      id: 'gravitacion',
      title: 'La ley de la Gravitación Universal',
      questions: [
        {
          id: 'and-fis-grav-q1',
          tier: 'standard',
          prompt: 'Un satélite orbita la Tierra a una altura de 400 km sobre la superficie. Si el radio de la Tierra es 6.37×10⁶ m y su masa 5.97×10²⁴ kg, ¿cuál es aproximadamente la velocidad orbital del satélite? (G = 6.67×10⁻¹¹ N·m²/kg²)',
          options: [
            { id: 'a', label: '5.5 km/s', isCorrect: false },
            { id: 'b', label: '7.7 km/s', isCorrect: true },
            { id: 'c', label: '11.2 km/s', isCorrect: false },
            { id: 'd', label: '3.1 km/s', isCorrect: false },
          ],
          explanation: 'Para una órbita circular, la velocidad orbital depende de la masa de la Tierra y la distancia al centro. Con $r = 6.77 \\times 10^6$ m (radio terrestre + altura), se calcula $v \\approx 7.7$ km/s.'
        },
        {
          id: 'and-fis-grav-q2',
          tier: 'premium',
          prompt: 'La estación espacial internacional (ISS) orbita a 408 km de altura con un periodo de 92.68 minutos. Un astronauta de 80 kg realiza un paseo espacial. ¿Cuál es la energía que se requeriría para llevar al astronauta desde la ISS hasta el infinito? (Masa de la Tierra: 5.97×10²⁴ kg, Radio de la Tierra: 6.37×10⁶ m, G = 6.67×10⁻¹¹ N·m²/kg²)',
          options: [
            { id: 'a', label: '4.7×10⁹ J', isCorrect: true },
            { id: 'b', label: '3.2×10⁹ J', isCorrect: false },
            { id: 'c', label: '6.4×10⁹ J', isCorrect: false },
            { id: 'd', label: '2.5×10⁹ J', isCorrect: false },
          ],
          // CORREGIDO: Usando un solo $ en lugar de $$
          explanation: 'La energía de escape desde la órbita es igual a la energía potencial gravitatoria: $E = \\frac{GMm}{r}$ donde $r = 6.778 \\times 10^6$ m. $E = \\frac{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24} \\times 80}{6.778 \\times 10^6} \\approx 4.7 \\times 10^9$ J.'
        },
        {
          id: 'and-fis-grav-q3',
          tier: 'premium',
          prompt: 'Dos estrellas de masas M₁ = 2×10³⁰ kg y M₂ = 3×10³⁰ kg forman un sistema binario, orbitando alrededor de su centro de masas con una separación de 1×10¹¹ m. ¿Cuál es aproximadamente el periodo orbital del sistema?',
          options: [
            { id: 'a', label: '1.8 años terrestres', isCorrect: false },
            { id: 'b', label: '0.89 años terrestres', isCorrect: true },
            { id: 'c', label: '2.5 años terrestres', isCorrect: false },
            { id: 'd', label: '0.45 años terrestres', isCorrect: false },
          ],
          explanation: 'Por la tercera ley de Kepler generalizada: $T^2 = \\frac{4\\pi^2 r^3}{G(M_1 + M_2)}$. Con $r = 10^{11}$ m y $M_1 + M_2 = 5 \\times 10^{30}$ kg, se obtiene $T \\approx 2.81 \\times 10^7$ s, que equivale aproximadamente a 0.89 años terrestres.'
        },
        {
          id: 'and-fis-grav-q4',
          tier: 'standard',
          prompt: 'Un planeta tiene un radio dos veces mayor que la Tierra y una densidad media igual. ¿Cuál es la aceleración de la gravedad en su superficie comparada con la terrestre (g = 10 m/s²)?',
          options: [
            { id: 'a', label: '10 m/s²', isCorrect: false },
            { id: 'b', label: '20 m/s²', isCorrect: true },
            { id: 'c', label: '5 m/s²', isCorrect: false },
            { id: 'd', label: '40 m/s²', isCorrect: false },
          ],
          explanation: 'La gravedad superficial es $g = \\frac{GM}{R^2} = \\frac{G \\cdot \\rho \\cdot \\frac{4\\pi R^3}{3}}{R^2} = \\frac{4\\pi G \\rho R}{3}$. Como $g \\propto R$ con densidad constante, si $R\' = 2R$ entonces $g\' = 2g = 20$ m/s².'
        }
      ]
    },
    {
      id: 'campo-electrico-magnetico',
      title: 'Campo eléctrico y magnético',
      questions: [
        {
          id: 'and-fis-elec-q1',
          tier: 'premium',
          prompt: 'Una partícula de carga q = 9 nC y masa m = 5×10⁻⁸ g viaja con velocidad 5×10⁶ m/s en dirección x, y entra en una región con campo magnético uniforme de 3 T en dirección y. ¿Cuál es la magnitud de la fuerza magnética sobre la partícula?',
          options: [
            { id: 'a', label: '0.135 N', isCorrect: true },
            { id: 'b', label: '0.027 N', isCorrect: false },
            { id: 'c', label: '0.045 N', isCorrect: false },
            { id: 'd', label: '0.068 N', isCorrect: false },
          ],
          explanation: 'La fuerza magnética es $F = qvB\\sin\\theta$. Como la velocidad y el campo son perpendiculares ($\\theta = 90°$): $F = qvB = 9 \\times 10^{-9} \\times 5 \\times 10^6 \\times 3 = 0.135$ N.'
        },
        {
          id: 'and-fis-elec-q2',
          tier: 'premium',
          prompt: 'Continuando con la partícula anterior (q = 9 nC, m = 5×10⁻⁸ g, v = 5×10⁶ m/s en campo B = 3 T), ¿cuál es el radio de la trayectoria circular que describe?',
          options: [
            { id: 'a', label: '1.85 m', isCorrect: true },
            { id: 'b', label: '0.93 m', isCorrect: false },
            { id: 'c', label: '3.7 m', isCorrect: false },
            { id: 'd', label: '0.46 m', isCorrect: false },
          ],
          explanation: 'En movimiento circular: $F = \\frac{mv^2}{r}$. Igualando con $F = qvB$: $r = \\frac{mv}{qB} = \\frac{5 \\times 10^{-11} \\times 5 \\times 10^6}{9 \\times 10^{-9} \\times 3} \\approx 1.85$ m.'
        },
        {
          id: 'and-fis-elec-q3',
          tier: 'premium',
          prompt: 'Para la misma partícula en el campo magnético, ¿cuál es el periodo de giro?',
          options: [
            { id: 'a', label: '2.33×10⁻⁶ s', isCorrect: true },
            { id: 'b', label: '1.16×10⁻⁶ s', isCorrect: false },
            { id: 'c', label: '4.66×10⁻⁶ s', isCorrect: false },
            { id: 'd', label: '7.0×10⁻⁷ s', isCorrect: false },
          ],
          explanation: 'El periodo es $T = \\frac{2\\pi r}{v} = \\frac{2\\pi \\times 1.85}{5 \\times 10^6} \\approx 2.33 \\times 10^{-6}$ s. También: $T = \\frac{2\\pi m}{qB}$.'
        },
        {
          id: 'and-fis-elec-q4',
          tier: 'standard',
          prompt: 'Dos cargas puntuales q₁ = +4 μC y q₂ = -9 μC están separadas 30 cm. ¿En qué punto del segmento que las une el campo eléctrico es nulo? (k = 9×10⁹ N·m²/C²)',
          options: [
            { id: 'a', label: 'A 12 cm de q₁', isCorrect: true },
            { id: 'b', label: 'A 15 cm de q₁', isCorrect: false },
            { id: 'c', label: 'A 10 cm de q₁', isCorrect: false },
            { id: 'd', label: 'A 18 cm de q₁', isCorrect: false },
          ],
          explanation: 'El campo es nulo donde $E_1 = E_2$: $\\frac{kq_1}{x^2} = \\frac{kq_2}{(0.3-x)^2}$. Resolviendo: $\\frac{4}{x^2} = \\frac{9}{(0.3-x)^2}$, da $2(0.3-x) = 3x$, $x = 0.12$ m.'
        },
        {
          id: 'and-fis-elec-q5',
          tier: 'premium',
          prompt: 'Un electrón se acelera desde el reposo mediante una diferencia de potencial de 1000 V. ¿Cuál es su velocidad final? (Masa del electrón: 9.11×10⁻³¹ kg, carga: -1.6×10⁻¹⁹ C)',
          options: [
            { id: 'a', label: '1.88×10⁷ m/s', isCorrect: true },
            { id: 'b', label: '9.4×10⁶ m/s', isCorrect: false },
            { id: 'c', label: '2.82×10⁷ m/s', isCorrect: false },
            { id: 'd', label: '1.33×10⁷ m/s', isCorrect: false },
          ],
          explanation: 'Por conservación de energía, la energía potencial eléctrica se convierte en energía cinética: $qV = \\frac{1}{2}mv^2$. Despejando y sustituyendo los valores se obtiene $v \\approx 1.88 \\times 10^7$ m/s.'
        },
        {
          id: 'and-fis-mag-q1',
          tier: 'standard',
          prompt: 'Un conductor recto de 50 cm de longitud transporta una corriente de 8 A y está inmerso en un campo magnético uniforme de 0.4 T perpendicular al conductor. ¿Cuál es la fuerza magnética sobre el conductor?',
          options: [
            { id: 'a', label: '1.6 N', isCorrect: true },
            { id: 'b', label: '0.8 N', isCorrect: false },
            { id: 'c', label: '3.2 N', isCorrect: false },
            { id: 'd', label: '0.4 N', isCorrect: false },
          ],
          explanation: 'La fuerza sobre un conductor es $F = BIL\\sin\\theta$. Con $\\theta = 90°$: $F = 0.4 \\times 8 \\times 0.5 = 1.6$ N.'
        },
        {
          id: 'and-fis-mag-q2',
          tier: 'premium',
          prompt: 'Una espira circular de radio 10 cm con 50 vueltas está en un campo magnético uniforme que varía de 0.5 T a 0.1 T en 0.2 segundos, perpendicular al plano de la espira. ¿Cuál es la fem inducida promedio?',
          options: [
            { id: 'a', label: '0.314 V', isCorrect: true },
            { id: 'b', label: '0.157 V', isCorrect: false },
            { id: 'c', label: '0.628 V', isCorrect: false },
            { id: 'd', label: '0.094 V', isCorrect: false },
          ],
          explanation: 'La fem inducida es $\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t} = -N\\frac{A\\Delta B}{\\Delta t}$. Con $A = \\pi r^2 = \\pi(0.1)^2$: $\\varepsilon = 50 \\times \\frac{\\pi \\times 0.01 \\times 0.4}{0.2} \\approx 0.314$ V.'
        }
      ]
    },
    {
      id: 'ondas',
      title: 'Vibraciones y ondas',
      questions: [
        {
          id: 'and-fis-ond-q1',
          tier: 'standard',
          prompt: 'Una onda sonora viaja por el aire a 340 m/s y tiene una longitud de onda de 0.68 m. ¿Cuál es su frecuencia y qué tipo de sonido representa?',
          options: [
            { id: 'a', label: '500 Hz - tono medio audible', isCorrect: true },
            { id: 'b', label: '231 Hz - tono grave', isCorrect: false },
            { id: 'c', label: '1000 Hz - tono agudo', isCorrect: false },
            { id: 'd', label: '50 Hz - infrasonido', isCorrect: false },
          ],
          explanation: 'La frecuencia es $f = \\frac{v}{\\lambda} = \\frac{340}{0.68} = 500$ Hz, que corresponde a un tono medio en el rango audible humano (20-20000 Hz).'
        },
        {
          id: 'and-fis-ond-q2',
          tier: 'premium',
          prompt: 'Dos altavoces separados 4 m emiten ondas sonoras coherentes en fase con frecuencia 850 Hz (velocidad del sonido 340 m/s). Un oyente está a 5 m del primer altavoz y a 8 m del segundo. ¿Qué escuchará el oyente?',
          options: [
            { id: 'a', label: 'Interferencia destructiva (mínimo de sonido)', isCorrect: true },
            { id: 'b', label: 'Interferencia constructiva (máximo de sonido)', isCorrect: false },
            { id: 'c', label: 'Interferencia parcialmente destructiva', isCorrect: false },
            { id: 'd', label: 'No hay interferencia', isCorrect: false },
          ],
          explanation: 'La diferencia de camino es $\\Delta d = 8 - 5 = 3$ m. La longitud de onda es $\\lambda = \\frac{v}{f} = \\frac{340}{850} = 0.4$ m. Como $\\Delta d = 7.5\\lambda = (7 + \\frac{1}{2})\\lambda$, las ondas llegan en contrafase y se produce interferencia destructiva (mínimo de sonido).'
        },
        {
          id: 'and-fis-ond-q3',
          tier: 'premium',
          prompt: 'Una cuerda de guitarra de 0.65 m de longitud tiene una densidad lineal de masa de 2×10⁻³ kg/m y está sometida a una tensión de 72 N. ¿Cuál es la frecuencia fundamental del sonido que produce?',
          options: [
            { id: 'a', label: '146 Hz', isCorrect: true },
            { id: 'b', label: '292 Hz', isCorrect: false },
            { id: 'c', label: '73 Hz', isCorrect: false },
            { id: 'd', label: '219 Hz', isCorrect: false },
          ],
          explanation: 'La velocidad de propagación en la cuerda es $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{72}{2 \\times 10^{-3}}} = \\sqrt{36000} \\approx 190$ m/s. La frecuencia fundamental es $f_1 = \\frac{v}{2L} = \\frac{190}{2 \\times 0.65} \\approx 146$ Hz.'
        },
        {
          id: 'and-fis-ond-q4',
          tier: 'standard',
          prompt: 'Un péndulo simple realiza 20 oscilaciones completas en 40 segundos. Si se duplica la longitud del péndulo, ¿cuántas oscilaciones realizará en el mismo tiempo?',
          options: [
            { id: 'a', label: 'Aproximadamente 14 oscilaciones', isCorrect: true },
            { id: 'b', label: '10 oscilaciones', isCorrect: false },
            { id: 'c', label: '40 oscilaciones', isCorrect: false },
            { id: 'd', label: '28 oscilaciones', isCorrect: false },
          ],
          explanation: 'El periodo inicial es $T_1 = 2$ s. Al duplicar la longitud del péndulo, el periodo aumenta por un factor de aproximadamente 1.41, resultando en $T_2 \\approx 2.83$ s. En 40 s realizará: $n = 40/2.83 \\approx 14$ oscilaciones.'
        }
      ]
    },
    {
      id: 'optica-cuantica',
      title: 'Óptica y física cuántica',
      questions: [
        {
          id: 'and-fis-cuan-q1',
          tier: 'premium',
          prompt: 'Se ilumina una superficie de cesio (función de trabajo 2.1 eV) con luz de longitud de onda 400 nm. ¿Cuál es la energía cinética máxima de los electrones emitidos? (h = 6.63×10⁻³⁴ J·s, c = 3×10⁸ m/s, 1 eV = 1.6×10⁻¹⁹ J)',
          options: [
            { id: 'a', label: '1.0 eV', isCorrect: true },
            { id: 'b', label: '3.1 eV', isCorrect: false },
            { id: 'c', label: '0.5 eV', isCorrect: false },
            { id: 'd', label: '2.1 eV', isCorrect: false },
          ],
          explanation: 'La energía del fotón es $E_{fot} = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{400 \\times 10^{-9}} = 4.97 \\times 10^{-19}$ J $= 3.1$ eV. La energía cinética es $E_c = E_{fot} - \\phi = 3.1 - 2.1 = 1.0$ eV.'
        },
        {
          id: 'and-fis-cuan-q2',
          tier: 'premium',
          prompt: 'Un electrón se acelera mediante una diferencia de potencial de 100 V. ¿Cuál es su longitud de onda de De Broglie? (h = 6.63×10⁻³⁴ J·s, masa electrón = 9.11×10⁻³¹ kg, carga = 1.6×10⁻¹⁹ C)',
          options: [
            { id: 'a', label: '0.123 nm', isCorrect: true },
            { id: 'b', label: '0.246 nm', isCorrect: false },
            { id: 'c', label: '0.061 nm', isCorrect: false },
            { id: 'd', label: '0.184 nm', isCorrect: false },
          ],
          explanation: 'La energía cinética es $E_c = eV = 100$ eV $= 1.6 \\times 10^{-17}$ J. Calculando el momento, se obtiene $p = 5.4 \\times 10^{-24}$ kg·m/s. La longitud de onda de De Broglie es $\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{5.4 \\times 10^{-24}} \\approx 0.123$ nm.'
        },
        {
          id: 'and-fis-cuan-q3',
          tier: 'standard',
          prompt: 'En el átomo de hidrógeno, un electrón transita del nivel n=4 al nivel n=2. ¿Qué tipo de radiación electromagnética se emite? (Los niveles de energía son Eₙ = -13.6/n² eV)',
          options: [
            { id: 'a', label: 'Visible (luz verde-azulada, serie Balmer)', isCorrect: true },
            { id: 'b', label: 'Ultravioleta (serie Lyman)', isCorrect: false },
            { id: 'c', label: 'Infrarrojo (serie Paschen)', isCorrect: false },
            { id: 'd', label: 'Rayos X', isCorrect: false },
          ],
          explanation: 'La energía del fotón es $\\Delta E = E_2 - E_4 = -13.6(\\frac{1}{4} - \\frac{1}{16}) = -13.6 \\times (-\\frac{3}{16}) = 2.55$ eV. Esto corresponde a $\\lambda \\approx 486$ nm (luz visible verde-azulada, línea H-β de la serie Balmer).'
        },
        {
          id: 'and-fis-opt-q1',
          tier: 'standard',
          prompt: 'Un rayo de luz pasa del aire (índice de refracción 1.00) al vidrio (índice 1.52) con un ángulo de incidencia de 45°. ¿Cuál es el ángulo de refracción?',
          options: [
            { id: 'a', label: '27.9°', isCorrect: true },
            { id: 'b', label: '45°', isCorrect: false },
            { id: 'c', label: '35.3°', isCorrect: false },
            { id: 'd', label: '19.2°', isCorrect: false },
          ],
          explanation: 'Por la ley de Snell: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Despejando: $\\sin\\theta_2 = \\frac{n_1 \\sin\\theta_1}{n_2} = \\frac{1.00 \\times \\sin 45°}{1.52} = \\frac{0.707}{1.52} = 0.465$. Por tanto $\\theta_2 = \\arcsin(0.465) \\approx 27.9°$.'
        }
      ]
    },
    {
      id: 'mecanica-energia',
      title: 'Mecánica y Energía',
      questions: [
        {
          id: 'and-fis-mec-q1',
          tier: 'premium',
          prompt: 'Un bloque de 5 kg se desliza por un plano inclinado 30° con coeficiente de rozamiento cinético 0.2. Si el bloque parte del reposo desde una altura de 10 m, ¿cuál es su velocidad al llegar a la base?',
          options: [
            { id: 'a', label: '12.5 m/s', isCorrect: true },
            { id: 'b', label: '14.0 m/s', isCorrect: false },
            { id: 'c', label: '10.8 m/s', isCorrect: false },
            { id: 'd', label: '9.2 m/s', isCorrect: false },
          ],
          // CORREGIDO: Usando un solo $ en lugar de $$
          explanation: 'La longitud del plano es $L = \\frac{h}{\\sin 30°} = 20$ m. El trabajo del rozamiento es $W_r = -\\mu_k mg\\cos 30° \\times L = -0.2 \\times 5 \\times 10 \\times 0.866 \\times 20 = -173.2$ J. Por conservación de energía: $mgh + W_r = \\frac{1}{2}mv^2$, $500 - 173.2 = \\frac{1}{2} \\times 5 \\times v^2$, $v \\approx 12.5$ m/s.'
        },
        {
          id: 'and-fis-mec-q2',
          tier: 'premium',
          prompt: 'Una bola de 200 g colgada de un hilo de 1 m se suelta desde una posición horizontal. Al llegar al punto más bajo choca elásticamente con un bloque de 400 g en reposo sobre una superficie sin rozamiento. ¿Cuál es la velocidad del bloque después del choque?',
          options: [
            { id: 'a', label: '2.97 m/s', isCorrect: true },
            { id: 'b', label: '4.43 m/s', isCorrect: false },
            { id: 'c', label: '1.48 m/s', isCorrect: false },
            { id: 'd', label: '3.72 m/s', isCorrect: false },
          ],
          // CORREGIDO: Usando un solo $ en lugar de $$
          explanation: 'La velocidad de la bola antes del choque (desde 1 m de altura) es $v_1 = 4.47$ m/s. Para un choque elástico, la velocidad del bloque es $v_2\' = \\frac{2m_1}{m_1 + m_2}v_1 = \\frac{0.4}{0.6} \\times 4.47 \\approx 2.97$ m/s.'
        },
        {
          id: 'and-fis-mec-q3',
          tier: 'standard',
          prompt: 'Un proyectil de 50 g se dispara horizontalmente a 400 m/s e impacta en un bloque de madera de 2 kg suspendido, quedando incrustado. ¿A qué altura máxima se eleva el sistema bloque-proyectil?',
          options: [
            { id: 'a', label: '1.97 m', isCorrect: true },
            { id: 'b', label: '8.16 m', isCorrect: false },
            { id: 'c', label: '0.49 m', isCorrect: false },
            { id: 'd', label: '3.94 m', isCorrect: false },
          ],
          explanation: 'Por conservación del momento: $m_p v_p = (m_p + m_b)v_f$, $0.05 \\times 400 = 2.05 \\times v_f$, $v_f = 9.76$ m/s. La altura alcanzada es $h = \\frac{v_f^2}{2g} = \\frac{(9.76)^2}{20} \\approx 1.97$ m.'
        }
      ]
    }
  ]
}