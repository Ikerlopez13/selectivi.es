import type { Subject } from './types'

export const englishES: Subject = {
  id: 'ingles',
  name: 'Inglés',
  topics: [
    // Grammar & Use of English
    { id: 'tenses', title: 'Tiempos verbales (present, past, future, perfect, continuous, perfect continuous).', questions: [
        {
          id: 'eng-tenses-q3',
          tier: 'standard',
          prompt: 'Choose the sentence that correctly expresses a past condition with a past result.',
          options: [
            { id: 'a', label: 'If I had known about the party, I would have attended.', isCorrect: true },
            { id: 'b', label: 'If I had known about the party, I would attend.', isCorrect: false },
            { id: 'c', label: 'If I know about the party, I would have attended.', isCorrect: false },
            { id: 'd', label: 'If I would known about the party, I would have attended.', isCorrect: false },
          ],
          explanation: 'Es una condicional de tipo 3: condición pasada + resultado pasado.'
        },
        {
          id: 'eng-tenses-q4',
          tier: 'standard',
          prompt: 'Complete the sentence correctly: "When I arrived, the train ___ already left".',
          options: [
            { id: 'a', label: 'left', isCorrect: false },
            { id: 'b', label: 'has left', isCorrect: false },
            { id: 'c', label: 'had left', isCorrect: true },
            { id: 'd', label: 'was leaving', isCorrect: false },
          ],
          explanation: 'Usamos past perfect para una acción anterior a otra pasada.'
        },
      { id: 'eng-tenses-q1', tier: 'standard', prompt: 'I ... him since 2010.', options: [
        { id: 'a', label: 'know', isCorrect: false },
        { id: 'b', label: 'knew', isCorrect: false },
        { id: 'c', label: 'have known', isCorrect: true },
        { id: 'd', label: 'knowing', isCorrect: false },
      ], explanation: "Use present perfect with 'since' for states continuing to present." },
      { id: 'eng-tenses-q2', tier: 'standard', prompt: 'When I arrived, the train __ already left.', options: [
        { id: 'a', label: 'left', isCorrect: false },
        { id: 'b', label: 'had left', isCorrect: true },
        { id: 'c', label: 'was leaving', isCorrect: false },
        { id: 'd', label: 'has left', isCorrect: false },
      ], explanation: 'Past perfect for an action completed before another past action.' },
    ] },
    { id: 'passive', title: 'Voz pasiva.', questions: [
        {
          id: 'eng-passive-q4',
          tier: 'standard',
          prompt: 'Choose the sentence that is in the passive voice.',
          options: [
            { id: 'a', label: 'The chef cooked by the waiter.', isCorrect: false },
            { id: 'b', label: 'The novel was written by Jane Austen.', isCorrect: true },
            { id: 'c', label: 'Jane Austen writes the novel.', isCorrect: false },
            { id: 'd', label: 'The novel is writing by Jane Austen.', isCorrect: false },
          ],
          explanation: 'La pasiva se forma con be + participio; aquí "was written" con agente "by Jane Austen".'
        },
        {
          id: 'eng-passive-q5',
          tier: 'standard',
          prompt: 'Choose the sentence in the passive voice where the agent is omitted.',
          options: [
            { id: 'a', label: 'The cake was baked.', isCorrect: true },
            { id: 'b', label: 'The cake was baked by my mother.', isCorrect: false },
            { id: 'c', label: 'My mother baked the cake.', isCorrect: false },
            { id: 'd', label: 'Baked the cake was.', isCorrect: false },
          ],
          explanation: 'Pasiva con agente omitido: "The cake was baked."'
        },
      { id: 'eng-passive-q1', tier: 'standard', prompt: 'Choose the sentence that is grammatically correct?', options: [
        { id: 'a', label: 'The speech is delivered yesterday by the prime minister.', isCorrect: false },
        { id: 'b', label: 'The speech delivering yesterday by the prime minister.', isCorrect: false },
        { id: 'c', label: 'The speech was delivered yesterday by the prime minister.', isCorrect: true },
        { id: 'd', label: 'The speech was bake yesterday by the prime minister.', isCorrect: false },
      ], explanation: 'Correct passive: was + past participle.' },
      { id: 'eng-passive-q2', tier: 'standard', prompt: 'Which sentence is grammatically correct?', options: [
        { id: 'a', label: 'The cake is baked by my mother.', isCorrect: false },
        { id: 'b', label: 'The cake baked by my mother.', isCorrect: false },
        { id: 'c', label: 'The cake was baked by my mother.', isCorrect: true },
        { id: 'd', label: 'The cake was bake by my mother.', isCorrect: false },
      ], explanation: 'Past passive: was + baked.' },
      { id: 'eng-passive-q3', tier: 'standard', prompt: 'The committee approved the new policy. The new policy ___ approved by the committee.', options: [
        { id: 'a', label: 'was', isCorrect: true },
        { id: 'b', label: 'approved', isCorrect: false },
        { id: 'c', label: 'has', isCorrect: false },
        { id: 'd', label: 'being', isCorrect: false },
      ], explanation: 'Passive requires auxiliary + past participle: was approved.' },
    ] },
    { id: 'reported-speech', title: 'Estilo indirecto (reported speech).', questions: [
      { id: 'eng-reported-q1', tier: 'standard', prompt: 'He said ___ tired.', options: [
        { id: 'a', label: 'he is', isCorrect: false },
        { id: 'b', label: 'he was', isCorrect: false },
        { id: 'c', label: 'that he is', isCorrect: false },
        { id: 'd', label: 'that he was', isCorrect: true },
      ], explanation: 'Backshift in reported speech: that + past.' },
      { id: 'eng-reported-q2', tier: 'standard', prompt: "He said, 'I am learning English.' In reported speech: He said that __ learning English.", options: [
        { id: 'a', label: 'I was', isCorrect: false },
        { id: 'b', label: 'he was', isCorrect: true },
        { id: 'c', label: 'he were', isCorrect: false },
        { id: 'd', label: 'I am', isCorrect: false },
      ], explanation: "am learning -> was learning with backshift." },
    ] },
    { id: 'conditionals', title: 'Condicionales (0, 1st, 2nd, 3rd, mixed).', questions: [
      { id: 'eng-cond-q1', tier: 'standard', prompt: 'If I won the lottery, I would travel around the world.', options: [
        { id: 'a', label: 'would travel', isCorrect: true },
        { id: 'b', label: 'travel', isCorrect: false },
        { id: 'c', label: 'would have traveled', isCorrect: false },
        { id: 'd', label: 'will travel', isCorrect: false },
      ], explanation: 'Second conditional: if + past, would + base.' },
      { id: 'eng-cond-q2', tier: 'standard', prompt: 'If she had known about the offer, she ___ buy a new jacket.', options: [
        { id: 'a', label: 'would buy', isCorrect: false },
        { id: 'b', label: 'would have bought', isCorrect: true },
        { id: 'c', label: 'will buy', isCorrect: false },
        { id: 'd', label: 'buy', isCorrect: false },
      ], explanation: 'Third conditional: if + past perfect, would have + past participle.' },
      { id: 'eng-cond-q3', tier: 'standard', prompt: 'If you heat ice, it ___.', options: [
        { id: 'a', label: 'melts', isCorrect: true },
        { id: 'b', label: 'will melt', isCorrect: false },
        { id: 'c', label: 'melted', isCorrect: false },
        { id: 'd', label: 'is melting', isCorrect: false },
      ], explanation: 'Zero conditional for general truths.' },
    ] },
    { id: 'modals', title: 'Verbos modales (probabilidad, obligación, deducción, consejo).', questions: [
      { id: 'eng-modals-q1', tier: 'standard', prompt: 'You ... wear a helmet when riding a bike.', options: [
        { id: 'a', label: 'must', isCorrect: true },
        { id: 'b', label: 'should', isCorrect: false },
        { id: 'c', label: 'can', isCorrect: false },
        { id: 'd', label: 'might', isCorrect: false },
      ], explanation: 'Strong obligation: must.' },
      { id: 'eng-modals-q2', tier: 'standard', prompt: "She ___ forgotten her umbrella; it's not here.", options: [
        { id: 'a', label: 'must have', isCorrect: true },
        { id: 'b', label: 'must have forgot', isCorrect: false },
        { id: 'c', label: 'must have forgetting', isCorrect: false },
        { id: 'd', label: 'must forget', isCorrect: false },
      ], explanation: 'Modal perfect for deduction about a past situation.' },
    ] },
    { id: 'relative-time-clauses', title: 'Oraciones de relativo y de tiempo.', questions: [
        {
          id: 'eng-rel-q3',
          tier: 'standard',
          prompt: 'Choose the sentence with a relative clause describing "the man".',
          options: [
            { id: 'a', label: 'The man who called yesterday is my cousin.', isCorrect: true },
            { id: 'b', label: 'The man whom I called yesterday is my cousin.', isCorrect: false },
            { id: 'c', label: 'The man which called yesterday is my cousin.', isCorrect: false },
            { id: 'd', label: 'The man whose called yesterday is my cousin.', isCorrect: false },
          ],
          explanation: 'Para personas, "who" es el pronombre relativo correcto (también "whom" en contexto distinto).'
        },
      { id: 'eng-rel-q1', tier: 'standard', prompt: 'The book, ___ was published in 2015, won several awards.', options: [
        { id: 'a', label: 'who', isCorrect: false },
        { id: 'b', label: 'which', isCorrect: true },
        { id: 'c', label: 'that', isCorrect: false },
        { id: 'd', label: 'where', isCorrect: false },
      ], explanation: 'Non-restrictive relative clause uses which.' },
      { id: 'eng-rel-q2', tier: 'standard', prompt: 'The man to whom I spoke yesterday is a lawyer.', options: [
        { id: 'a', label: 'who I spoke', isCorrect: false },
        { id: 'b', label: 'whom I spoke', isCorrect: true },
        { id: 'c', label: 'that I spoke', isCorrect: false },
        { id: 'd', label: 'whose I spoke', isCorrect: false },
      ], explanation: 'Use whom after a preposition; it is the object of the verb.' },
    ] },
    { id: 'gerunds-infinitives', title: 'Gerundios e infinitivos.', questions: [
        {
          id: 'eng-gerinf-q4',
          tier: 'standard',
          prompt: 'Choose the sentence that uses a gerund after a verb.',
          options: [
            { id: 'a', label: 'I agreed to going.', isCorrect: false },
            { id: 'b', label: 'I suggested to go.', isCorrect: false },
            { id: 'c', label: 'I suggested going.', isCorrect: true },
            { id: 'd', label: 'I suggested to going.', isCorrect: false },
          ],
          explanation: 'Verbos como "suggest" suelen ir seguidos de un gerundio (-ing).'
        },
      { id: 'eng-gerinf-q1', tier: 'standard', prompt: 'I am looking forward to ___ you.', options: [
        { id: 'a', label: 'to meet', isCorrect: false },
        { id: 'b', label: 'meeting', isCorrect: true },
        { id: 'c', label: 'meet', isCorrect: false },
        { id: 'd', label: 'met', isCorrect: false },
      ], explanation: 'Look forward to + gerund.' },
      { id: 'eng-gerinf-q2', tier: 'standard', prompt: 'Choose the correct form after "suggest" with -ing.', options: [
        { id: 'a', label: 'going', isCorrect: true },
        { id: 'b', label: 'to go', isCorrect: false },
        { id: 'c', label: 'go', isCorrect: false },
        { id: 'd', label: 'goes', isCorrect: false },
      ], explanation: 'Suggest + gerund.' },
      { id: 'eng-gerinf-q3', tier: 'standard', prompt: 'Choose the sentence that means “ceased talking”.', options: [
        { id: 'a', label: 'He stopped to talk to her.', isCorrect: false },
        { id: 'b', label: 'He stopped talking to her.', isCorrect: true },
        { id: 'c', label: 'He stops talking to her.', isCorrect: false },
        { id: 'd', label: 'He stop talking to her.', isCorrect: false },
      ], explanation: 'Stop + -ing = cease an activity.' },
    ] },
    { id: 'hypothetical-wish', title: 'Discurso hipotético y wish/if only.', questions: [
      { id: 'eng-wish-q1', tier: 'standard', prompt: 'Look at those clouds. It ... rain soon.', options: [
        { id: 'a', label: 'will rain', isCorrect: false },
        { id: 'b', label: 'is going to rain', isCorrect: true },
        { id: 'c', label: 'would rain', isCorrect: false },
        { id: 'd', label: 'rains', isCorrect: false },
      ], explanation: 'Going to for prediction based on present evidence.' },
    ] },
    { id: 'linkers', title: 'Conectores y cohesion markers (although, however, in spite of, etc.).', questions: [
      { id: 'eng-linkers-q1', tier: 'standard', prompt: 'Which connector best introduces a contrasting idea in a formal essay?', options: [
        { id: 'a', label: 'moreover', isCorrect: false },
        { id: 'b', label: 'consequently', isCorrect: false },
        { id: 'c', label: 'however', isCorrect: true },
        { id: 'd', label: 'hence', isCorrect: false },
      ], explanation: 'However introduces contrast formally.' },
    ] },
    { id: 'false-friends-phrasals', title: 'False friends y phrasal verbs más frecuentes.', questions: [
      { id: 'eng-phrasal-q1', tier: 'standard', prompt: 'The exam was ___ off due to the storm.', options: [
        { id: 'a', label: 'cancelled', isCorrect: false },
        { id: 'b', label: 'called off', isCorrect: true },
        { id: 'c', label: 'given up', isCorrect: false },
        { id: 'd', label: 'broke out', isCorrect: false },
      ], explanation: 'Call off = cancelar.' },
    ] },

    // Vocabulary
    { id: 'v-education', title: 'Vocabulario: educación y estudios.', questions: [
      { id: 'eng-edu-q1', tier: 'standard', prompt: 'Which sentence is correct? Dogs are loyal.', options: [
        { id: 'a', label: 'The dogs are loyal.', isCorrect: false },
        { id: 'b', label: 'Dogs are loyal.', isCorrect: true },
        { id: 'c', label: 'A dogs are loyal.', isCorrect: false },
        { id: 'd', label: 'Some dogs are loyal.', isCorrect: false },
      ], explanation: 'General statements with plural count nouns take no article.' },
    ] },
    { id: 'v-general', title: 'Vocabulario general', questions: [
        {
          id: 'eng-vgen-q11',
          tier: 'standard',
          prompt: 'Choose the noun form of the adjective "creative".',
          options: [
            { id: 'a', label: 'creative', isCorrect: false },
            { id: 'b', label: 'creatively', isCorrect: false },
            { id: 'c', label: 'creativity', isCorrect: true },
            { id: 'd', label: 'creator', isCorrect: false },
          ],
          explanation: 'La forma nominal de "creative" es "creativity".'
        },
        {
          id: 'eng-vgen-q12',
          tier: 'standard',
          prompt: 'Choose the meaning of the phrasal verb "look after".',
          options: [
            { id: 'a', label: 'look for', isCorrect: false },
            { id: 'b', label: 'take care of', isCorrect: true },
            { id: 'c', label: 'ignore', isCorrect: false },
            { id: 'd', label: 'borrow', isCorrect: false },
          ],
          explanation: 'Look after = cuidar de.'
        },
        {
          id: 'eng-vgen-q13',
          tier: 'standard',
          prompt: 'Choose the synonym for "huge".',
          options: [
            { id: 'a', label: 'tiny', isCorrect: false },
            { id: 'b', label: 'enormous', isCorrect: true },
            { id: 'c', label: 'small', isCorrect: false },
            { id: 'd', label: 'narrow', isCorrect: false },
          ],
          explanation: 'Enorme es sinónimo de "huge".'
        },
        {
          id: 'eng-vgen-q14',
          tier: 'standard',
          prompt: 'Which is the correct collocation with "step"?',
          options: [
            { id: 'a', label: 'make a step', isCorrect: false },
            { id: 'b', label: 'do a step', isCorrect: false },
            { id: 'c', label: 'take a step', isCorrect: true },
            { id: 'd', label: 'have a step', isCorrect: false },
          ],
          explanation: 'La expresión común es "take a step".'
        },
        {
          id: 'eng-vgen-q15',
          tier: 'standard',
          prompt: 'Choose the noun form of the verb "educate".',
          options: [
            { id: 'a', label: 'education', isCorrect: true },
            { id: 'b', label: 'educator', isCorrect: false },
            { id: 'c', label: 'educative', isCorrect: false },
            { id: 'd', label: 'educationist', isCorrect: false },
          ],
          explanation: 'El sustantivo derivado directo es "education".'
        },
        {
          id: 'eng-vgen-q16',
          tier: 'standard',
          prompt: 'Choose the meaning of the phrasal verb "put off".',
          options: [
            { id: 'a', label: 'to delay', isCorrect: true },
            { id: 'b', label: 'to excite', isCorrect: false },
            { id: 'c', label: 'to remove', isCorrect: false },
            { id: 'd', label: 'to cancel', isCorrect: false },
          ],
          explanation: '"Put off" = posponer/retrasar.'
        },
        {
          id: 'eng-vgen-q17',
          tier: 'standard',
          prompt: 'Choose the correct collocation with "coffee".',
          options: [
            { id: 'a', label: 'strong coffee', isCorrect: true },
            { id: 'b', label: 'powerful coffee', isCorrect: false },
            { id: 'c', label: 'heavy coffee', isCorrect: false },
            { id: 'd', label: 'tall coffee', isCorrect: false },
          ],
          explanation: 'Se dice "strong coffee".'
        },
        {
          id: 'eng-vgen-q18',
          tier: 'standard',
          prompt: 'Which sentence uses the correct collocation with "commitment"?',
          options: [
            { id: 'a', label: 'She has a strong commitment to the project.', isCorrect: true },
            { id: 'b', label: 'She has a strong commitment with the project.', isCorrect: false },
            { id: 'c', label: 'She has a strong commitment in the project.', isCorrect: false },
            { id: 'd', label: 'She has a strong commitment on the project.', isCorrect: false },
          ],
          explanation: 'La collocación correcta es "commitment to".'
        },
        {
          id: 'eng-vgen-q19',
          tier: 'standard',
          prompt: 'Which sentence uses the verb "advise" correctly?',
          options: [
            { id: 'a', label: 'I advise you to rest.', isCorrect: true },
            { id: 'b', label: 'I advice you to rest.', isCorrect: false },
            { id: 'c', label: 'I advices you to rest.', isCorrect: false },
            { id: 'd', label: 'I advising you to rest.', isCorrect: false },
          ],
          explanation: '"Advise" is the correct verb; "advise you to" es la construcción adecuada.'
        },
        {
          id: 'eng-vgen-q20',
          tier: 'standard',
          prompt: 'Which sentence expresses agreement politely?',
          options: [
            { id: 'a', label: 'No way.', isCorrect: false },
            { id: 'b', label: 'By all means, you may go.', isCorrect: true },
            { id: 'c', label: "It's not possible.", isCorrect: false },
            { id: 'd', label: 'I doubt it.', isCorrect: false },
          ],
          explanation: '"By all means" es una forma educada de permitirlo.'
        },
        {
          id: 'eng-vgen-q21',
          tier: 'standard',
          prompt: 'Which word is the opposite of "frequent"?',
          options: [
            { id: 'a', label: 'occasional', isCorrect: true },
            { id: 'b', label: 'frequent', isCorrect: false },
            { id: 'c', label: 'constant', isCorrect: false },
            { id: 'd', label: 'always', isCorrect: false },
          ],
          explanation: 'Antónimo de "frequent" es "occasional".'
        },
        {
          id: 'eng-vgen-q22',
          tier: 'standard',
          prompt: 'Choose the closest synonym to "decrease".',
          options: [
            { id: 'a', label: 'increase', isCorrect: false },
            { id: 'b', label: 'grow', isCorrect: false },
            { id: 'c', label: 'lessen', isCorrect: true },
            { id: 'd', label: 'expand', isCorrect: false },
          ],
          explanation: '"Decrease" ≈ "lessen".'
        },
      { id: 'eng-vgen-q1', tier: 'standard', prompt: "Which word means 'agreement'?", options: [
        { id: 'a', label: 'argument', isCorrect: false },
        { id: 'b', label: 'agreement', isCorrect: true },
        { id: 'c', label: 'disagreement', isCorrect: false },
        { id: 'd', label: 'decision', isCorrect: false },
      ], explanation: 'Agreement = acuerdo, consenso.' },
      { id: 'eng-vgen-q2', tier: 'standard', prompt: "Which is the correct meaning of 'adopt'?", options: [
        { id: 'a', label: 'to throw away', isCorrect: false },
        { id: 'b', label: 'to take up or accept', isCorrect: true },
        { id: 'c', label: 'to abandon', isCorrect: false },
        { id: 'd', label: 'to create', isCorrect: false },
      ], explanation: 'Adopt = asumir/aceptar.' },
      { id: 'eng-vgen-q3', tier: 'standard', prompt: "Which word means 'increase'?", options: [
        { id: 'a', label: 'decrease', isCorrect: false },
        { id: 'b', label: 'rise', isCorrect: true },
        { id: 'c', label: 'vanish', isCorrect: false },
        { id: 'd', label: 'hinder', isCorrect: false },
      ], explanation: 'Rise = increase.' },
      { id: 'eng-vgen-q4', tier: 'standard', prompt: "Meaning of 'ample'?", options: [
        { id: 'a', label: 'scarce', isCorrect: false },
        { id: 'b', label: 'enough', isCorrect: true },
        { id: 'c', label: 'insufficient', isCorrect: false },
        { id: 'd', label: 'excessive', isCorrect: false },
      ], explanation: 'Ample = suficiente.' },
      { id: 'eng-vgen-q5', tier: 'standard', prompt: "Phrasal verb 'put off' means:", options: [
        { id: 'a', label: 'postpone', isCorrect: true },
        { id: 'b', label: 'cancel', isCorrect: false },
        { id: 'c', label: 'speed up', isCorrect: false },
        { id: 'd', label: 'start', isCorrect: false },
      ], explanation: 'Put off = posponer.' },
      { id: 'eng-vgen-q6', tier: 'standard', prompt: "Antonym of 'transparent' is:", options: [
        { id: 'a', label: 'clear', isCorrect: false },
        { id: 'b', label: 'transparent', isCorrect: false },
        { id: 'c', label: 'lucid', isCorrect: false },
        { id: 'd', label: 'opaque', isCorrect: true },
      ], explanation: 'Opaque = opaco.' },
      { id: 'eng-vgen-q7', tier: 'standard', prompt: 'Which collocation is correct?', options: [
        { id: 'a', label: 'make a living', isCorrect: true },
        { id: 'b', label: 'do a living', isCorrect: false },
        { id: 'c', label: 'earn a living', isCorrect: true },
        { id: 'd', label: 'Both A and C', isCorrect: false },
      ], explanation: 'Correct: make/earn a living.' },
      { id: 'eng-vgen-q8', tier: 'standard', prompt: "Which word means 'to improvise'?", options: [
        { id: 'a', label: 'improvise', isCorrect: true },
        { id: 'b', label: 'pretend', isCorrect: false },
        { id: 'c', label: 'elaborate', isCorrect: false },
        { id: 'd', label: 'replicate', isCorrect: false },
      ], explanation: 'Improvise = create without prior preparation.' },
      { id: 'eng-vgen-q9', tier: 'standard', prompt: "Which word is a synonym of 'resilient'?", options: [
        { id: 'a', label: 'fragile', isCorrect: false },
        { id: 'b', label: 'flexible', isCorrect: true },
        { id: 'c', label: 'rigid', isCorrect: false },
        { id: 'd', label: 'weak', isCorrect: false },
      ], explanation: 'Resilient ≈ flexible.' },
      { id: 'eng-vgen-q10', tier: 'standard', prompt: "Word meaning: 'to crave' means:", options: [
        { id: 'a', label: 'to crave', isCorrect: true },
        { id: 'b', label: 'to ignore', isCorrect: false },
        { id: 'c', label: 'to forget', isCorrect: false },
        { id: 'd', label: 'to avoid', isCorrect: false },
      ], explanation: 'Crave = desear intensamente.' },
    ] },
    { id: 'v-technology-media', title: 'Vocabulario: tecnología y medios de comunicación.', questions: [
      { id: 'eng-tech-q1', tier: 'standard', prompt: 'In the digital age, privacy matters more than ever. People change passwords and review app permissions. Which statement best describes privacy concerns?', options: [
        { id: 'a', label: 'Privacy is no longer important', isCorrect: false },
        { id: 'b', label: 'People ignore privacy', isCorrect: false },
        { id: 'c', label: 'People manage passwords and permissions to protect privacy', isCorrect: true },
        { id: 'd', label: 'Privacy is easy to maintain automatically', isCorrect: false },
      ], explanation: 'Managing passwords and permissions protects privacy.' },
    ] },
    { id: 'v-environment', title: 'Vocabulario: medio ambiente y sostenibilidad.', questions: [
      { id: 'eng-env-q1', tier: 'standard', prompt: 'Public transport systems reduce traffic congestion and pollution by offering alternatives to cars. What do they achieve?', options: [
        { id: 'a', label: 'Increase pollution', isCorrect: false },
        { id: 'b', label: 'Increase traffic', isCorrect: false },
        { id: 'c', label: 'Reduce congestion and pollution', isCorrect: true },
        { id: 'd', label: 'Only provide transport', isCorrect: false },
      ], explanation: 'They reduce congestion and pollution.' },
    ] },
    { id: 'v-health-lifestyle', title: 'Vocabulario: salud y estilo de vida.', questions: [
      { id: 'eng-health-q1', tier: 'standard', prompt: 'Getting enough sleep is essential for memory, mood, and health. What is the main idea?', options: [
        { id: 'a', label: 'Sleep is unimportant', isCorrect: false },
        { id: 'b', label: 'Sleep improves memory and health', isCorrect: true },
        { id: 'c', label: 'Sleep causes illness', isCorrect: false },
        { id: 'd', label: 'Sleep is optional', isCorrect: false },
      ], explanation: 'Sleep supports memory, mood, and health.' },
    ] },
    { id: 'v-society-politics', title: 'Vocabulario: sociedad y política.', questions: [
      { id: 'eng-soc-q1', tier: 'standard', prompt: 'Volunteering helps communities by contributing time and skills. What is the benefit?', options: [
        { id: 'a', label: 'It harms communities', isCorrect: false },
        { id: 'b', label: 'It provides nothing', isCorrect: false },
        { id: 'c', label: 'It helps communities by contributing time and skills', isCorrect: true },
        { id: 'd', label: 'It is only for students', isCorrect: false },
      ], explanation: 'Volunteering benefits communities.' },
    ] },
    { id: 'v-globalization-economy', title: 'Vocabulario: globalización y economía.', questions: [
      { id: 'eng-eco-q1', tier: 'standard', prompt: 'A tech startup arrives and locals learn new skills; shops diversify. What is the effect?', options: [
        { id: 'a', label: 'Job losses', isCorrect: false },
        { id: 'b', label: 'Growth in local economy and skills', isCorrect: true },
        { id: 'c', label: 'No change', isCorrect: false },
        { id: 'd', label: 'Only tourism grows', isCorrect: false },
      ], explanation: 'Economic and skills growth.' },
    ] },
    { id: 'v-culture-arts', title: 'Vocabulario: cultura, literatura y artes.', questions: [
        {
          id: 'eng-culture-q4',
          tier: 'standard',
          prompt: 'Which author wrote "1984"?',
          options: [
            { id: 'a', label: 'George Orwell', isCorrect: true },
            { id: 'b', label: 'Mark Twain', isCorrect: false },
            { id: 'c', label: 'Oscar Wilde', isCorrect: false },
            { id: 'd', label: 'Jane Austen', isCorrect: false },
          ],
          explanation: '1984 es una novela de George Orwell.'
        },
        {
          id: 'eng-culture-q5',
          tier: 'standard',
          prompt: 'What is the central theme of "Pride and Prejudice"?',
          options: [
            { id: 'a', label: 'Power and revolution', isCorrect: false },
            { id: 'b', label: 'Social class and love', isCorrect: true },
            { id: 'c', label: 'War and peace', isCorrect: false },
            { id: 'd', label: 'Identity and memory', isCorrect: false },
          ],
          explanation: 'La novela aborda relaciones, clase social y afectos.'
        },
        {
          id: 'eng-culture-q6',
          tier: 'standard',
          prompt: 'Who wrote "The Tyger" (The Tyger) in the Romantic era?',
          options: [
            { id: 'a', label: 'William Blake', isCorrect: true },
            { id: 'b', label: 'Robert Frost', isCorrect: false },
            { id: 'c', label: 'T.S. Eliot', isCorrect: false },
            { id: 'd', label: 'Walt Whitman', isCorrect: false },
          ],
          explanation: 'The Tyger es un poema de William Blake.'
        },
      { id: 'eng-culture-q1', tier: 'standard', prompt: 'Who wrote Pride and Prejudice?', options: [
        { id: 'a', label: 'Jane Austen', isCorrect: true },
        { id: 'b', label: 'Charles Dickens', isCorrect: false },
        { id: 'c', label: 'Mark Twain', isCorrect: false },
        { id: 'd', label: 'Virginia Woolf', isCorrect: false },
      ], explanation: 'Jane Austen authored Pride and Prejudice.' },
      { id: 'eng-culture-q2', tier: 'standard', prompt: 'Which period is most closely associated with Shakespeare?', options: [
        { id: 'a', label: 'Victorian', isCorrect: false },
        { id: 'b', label: 'Elizabethan', isCorrect: true },
        { id: 'c', label: 'Romantic', isCorrect: false },
        { id: 'd', label: 'Modernist', isCorrect: false },
      ], explanation: 'Shakespeare is associated with the Elizabethan era.' },
      { id: 'eng-culture-q3', tier: 'standard', prompt: 'Which author is known for the dystopian novel 1984?', options: [
        { id: 'a', label: 'George Orwell', isCorrect: true },
        { id: 'b', label: 'Aldous Huxley', isCorrect: false },
        { id: 'c', label: 'J.K. Rowling', isCorrect: false },
        { id: 'd', label: 'Stephen King', isCorrect: false },
      ], explanation: '1984 is by George Orwell.' },
    ] },
    { id: 'reading', title: 'Reading comprehension (breves textos).', questions: [
        {
          id: 'eng-read-q11',
          tier: 'standard',
          prompt: 'Reading passage: "Over the last decade, many companies have shifted to remote work. Employees can perform tasks from home using laptops and video calls. While productivity remains high, some managers worry about isolation and the loss of informal collaboration. On balance, many firms say flexibility is the main benefit." Question: What is the main benefit mentioned?',
          options: [
            { id: 'a', label: 'Increased salaries', isCorrect: false },
            { id: 'b', label: 'Flexibility to work from home', isCorrect: true },
            { id: 'c', label: 'More holidays', isCorrect: false },
            { id: 'd', label: 'Better technology', isCorrect: false },
          ],
          explanation: 'El pasaje concluye que la flexibilidad es el beneficio principal.'
        },
        {
          id: 'eng-read-q12',
          tier: 'standard',
          prompt: 'Reading passage: "Coffee is the most widely consumed beverage in the world after water. In many cultures, a cup of coffee is a social ritual. Researchers have suggested that moderate caffeine can improve concentration and mood, but excessive use may cause sleep problems." Question: What is one potential downside of caffeine?',
          options: [
            { id: 'a', label: 'improved memory', isCorrect: false },
            { id: 'b', label: 'improved sleep', isCorrect: false },
            { id: 'c', label: 'sleep problems', isCorrect: true },
            { id: 'd', label: 'increased energy', isCorrect: false },
          ],
          explanation: 'El texto señala que el consumo excesivo puede causar problemas de sueño.'
        },
        {
          id: 'eng-read-q13',
          tier: 'standard',
          prompt: 'Reading passage: "Several cities are investing in bicycles to reduce traffic and pollution. Bike lanes are expanding, and public bike-sharing schemes allow residents to travel short distances quickly. Some critics worry about safety and the accuracy of usage data." Question: Which is a concern about bike-sharing mentioned?',
          options: [
            { id: 'a', label: 'safety', isCorrect: true },
            { id: 'b', label: 'cost', isCorrect: false },
            { id: 'c', label: 'climate', isCorrect: false },
            { id: 'd', label: 'noise', isCorrect: false },
          ],
          explanation: 'El texto menciona la seguridad como preocupación.'
        },
        {
          id: 'eng-read-q14',
          tier: 'standard',
          prompt: 'Reading passage: "A study compared online courses with traditional classrooms. Students reported that online courses offer flexibility, but some missed direct contact with instructors. Overall, many learners appreciated the ability to study at their own pace." Question: What is one advantage of online courses?',
          options: [
            { id: 'a', label: 'higher tuition', isCorrect: false },
            { id: 'b', label: 'rigidity', isCorrect: false },
            { id: 'c', label: 'flexibility', isCorrect: true },
            { id: 'd', label: 'longer study days', isCorrect: false },
          ],
          explanation: 'El pasaje resalta la flexibilidad como ventaja.'
        },
        {
          id: 'eng-read-q15',
          tier: 'standard',
          prompt: 'Reading passage: "Antibiotics have saved countless lives, but misuse leads to antibiotic resistance. Health authorities urge patients to complete prescriptions and doctors to prescribe them only when necessary." Question: What is a consequence of misuse?',
          options: [
            { id: 'a', label: 'stronger medicine', isCorrect: false },
            { id: 'b', label: 'resistance to antibiotics', isCorrect: true },
            { id: 'c', label: 'cheaper drugs', isCorrect: false },
            { id: 'd', label: 'faster recovery', isCorrect: false },
          ],
          explanation: 'El texto indica la resistencia a antibióticos como consecuencia.'
        },
        {
          id: 'eng-read-q16',
          tier: 'standard',
          prompt: 'Reading passage: "Digital archives are making historical documents accessible to people worldwide. Scanned pages can be searched by keywords, and scholars can compare texts without traveling." Question: What is a benefit of digital archives?',
          options: [
            { id: 'a', label: 'missing documents', isCorrect: false },
            { id: 'b', label: 'easier access for scholars', isCorrect: true },
            { id: 'c', label: 'more expensive', isCorrect: false },
            { id: 'd', label: 'slower research', isCorrect: false },
          ],
          explanation: 'La accesibilidad para investigadores es un beneficio clave.'
        },
        {
          id: 'eng-read-q17',
          tier: 'standard',
          prompt: 'Reading passage: "Solar panels and wind turbines are forms of renewable energy. Their installation reduces reliance on fossil fuels, but initial costs and local planning rules can slow adoption." Question: Which is a disadvantage?',
          options: [
            { id: 'a', label: 'no energy produced', isCorrect: false },
            { id: 'b', label: 'high initial costs', isCorrect: true },
            { id: 'c', label: 'unlimited supply', isCorrect: false },
            { id: 'd', label: 'constant energy', isCorrect: false },
          ],
          explanation: 'Se señala el coste inicial como desventaja.'
        },
        {
          id: 'eng-read-q18',
          tier: 'standard',
          prompt: 'Reading passage: "Reading fiction often helps people understand different perspectives. It can improve vocabulary and empathy. Some readers prefer non-fiction for factual information." Question: Which statement is true according to the text?',
          options: [
            { id: 'a', label: 'Fiction harms empathy', isCorrect: false },
            { id: 'b', label: 'Reading fiction improves empathy', isCorrect: true },
            { id: 'c', label: 'Fiction has no impact on language', isCorrect: false },
            { id: 'd', label: 'Only non-fiction improves vocabulary', isCorrect: false },
          ],
          explanation: 'El texto afirma que la ficción mejora la empatía y el vocabulario.'
        },
        {
          id: 'eng-read-q19',
          tier: 'standard',
          prompt: 'Reading passage: "Migration patterns have shifted due to economic opportunities and climate change. Some regions attract workers with job offers, while others experience brain drain." Question: What is one factor mentioned that attracts workers?',
          options: [
            { id: 'a', label: 'weather', isCorrect: false },
            { id: 'b', label: 'job offers', isCorrect: true },
            { id: 'c', label: 'language', isCorrect: false },
            { id: 'd', label: 'laws', isCorrect: false },
          ],
          explanation: 'El texto cita las ofertas de trabajo como factor de atracción.'
        },
        {
          id: 'eng-read-q20',
          tier: 'standard',
          prompt: 'Reading passage: "Coral reefs face bleaching due to rising sea temperatures. Scientists warn that protecting reefs requires reducing carbon emissions and restoring damaged ecosystems." Question: What is a proposed solution?',
          options: [
            { id: 'a', label: 'ignore climate', isCorrect: false },
            { id: 'b', label: 'reduce carbon emissions', isCorrect: true },
            { id: 'c', label: 'harvest more fish', isCorrect: false },
            { id: 'd', label: 'build sea walls', isCorrect: false },
          ],
          explanation: 'Se propone reducir emisiones para proteger los arrecifes.'
        },
      { id: 'eng-read-q1', tier: 'standard', prompt: 'Cities increase green spaces to combat heat. Planting trees creates shade that reduces temperatures by several degrees. What is the main aim?', options: [
        { id: 'a', label: 'To increase traffic', isCorrect: false },
        { id: 'b', label: 'To reduce temperatures', isCorrect: true },
        { id: 'c', label: 'To plant more farms', isCorrect: false },
        { id: 'd', label: 'To build trees alone', isCorrect: false },
      ], explanation: 'Objetivo: reducir temperatura con arbolado y sombra.' },
      { id: 'eng-read-q2', tier: 'standard', prompt: 'Maya bikes to school daily. Cycling keeps her healthy and saves time in heavy traffic. What is her preferred mode of transport?', options: [
        { id: 'a', label: 'Bus', isCorrect: false },
        { id: 'b', label: 'Car', isCorrect: false },
        { id: 'c', label: 'Train', isCorrect: false },
        { id: 'd', label: 'Bicycle', isCorrect: true },
      ], explanation: 'She cycles.' },
      { id: 'eng-read-q3', tier: 'standard', prompt: 'The city library launched a digital service to search the online catalog and borrow e-books. What service is mentioned?', options: [
        { id: 'a', label: 'Free coffee', isCorrect: false },
        { id: 'b', label: 'Online catalog', isCorrect: true },
        { id: 'c', label: 'Virtual reality games', isCorrect: false },
        { id: 'd', label: 'Parking', isCorrect: false },
      ], explanation: 'Online catalog and e-book lending.' },
      { id: 'eng-read-q4', tier: 'standard', prompt: 'Regular exercise improves mental health and productivity. What is the author\'s claim?', options: [
        { id: 'a', label: 'Exercise is not helpful', isCorrect: false },
        { id: 'b', label: 'Exercise benefits mental health and productivity', isCorrect: true },
        { id: 'c', label: 'Exercise is time-consuming', isCorrect: false },
        { id: 'd', label: 'Exercise is expensive', isCorrect: false },
      ], explanation: 'States benefits.' },
      { id: 'eng-read-q5', tier: 'standard', prompt: 'Reading daily strengthens vocabulary and concentration, leading to confident communication. What is the main benefit?', options: [
        { id: 'a', label: 'Improves memory', isCorrect: true },
        { id: 'b', label: 'Increases screen time', isCorrect: false },
        { id: 'c', label: 'Causes stress', isCorrect: false },
        { id: 'd', label: 'Decreases vocabulary', isCorrect: false },
      ], explanation: 'Improves vocabulary/concentration (linked to memory).' },
      { id: 'eng-read-q6', tier: 'standard', prompt: 'Wind and solar power are rising; some communities still rely on fossil fuels. Which energy source is not mentioned?', options: [
        { id: 'a', label: 'Wind', isCorrect: false },
        { id: 'b', label: 'Solar', isCorrect: false },
        { id: 'c', label: 'Nuclear', isCorrect: true },
        { id: 'd', label: 'Hydroelectric', isCorrect: false },
      ], explanation: 'Nuclear is not cited.' },
      { id: 'eng-read-q7', tier: 'standard', prompt: 'Globalization increases cultural exchange across borders. What does it increase?', options: [
        { id: 'a', label: 'Economic isolation', isCorrect: false },
        { id: 'b', label: 'Cultural exchange', isCorrect: true },
        { id: 'c', label: 'Local languages only', isCorrect: false },
        { id: 'd', label: 'Pollution only', isCorrect: false },
      ], explanation: 'Cultural exchange.' },
      { id: 'eng-read-q8', tier: 'standard', prompt: 'People learn a second language for better job prospects. What reason is given?', options: [
        { id: 'a', label: 'Travel', isCorrect: false },
        { id: 'b', label: 'Entertainment', isCorrect: false },
        { id: 'c', label: 'Job prospects', isCorrect: true },
        { id: 'd', label: 'Cooking', isCorrect: false },
      ], explanation: 'Employment opportunities.' },
      { id: 'eng-read-q9', tier: 'standard', prompt: 'AI helps automate repetitive and dangerous tasks, freeing humans for creative work. What is the benefit?', options: [
        { id: 'a', label: 'It reduces tasks', isCorrect: true },
        { id: 'b', label: 'It creates jobs only', isCorrect: false },
        { id: 'c', label: 'It increases energy use', isCorrect: false },
        { id: 'd', label: 'It reduces knowledge', isCorrect: false },
      ], explanation: 'Automation reduces repetitive tasks.' },
      { id: 'eng-read-q10', tier: 'standard', prompt: "Citizenship tests assess knowledge of history, government, and rights. What is the main purpose?", options: [
        { id: 'a', label: 'To test reading', isCorrect: false },
        { id: 'b', label: 'For identity records', isCorrect: false },
        { id: 'c', label: 'To assess civic and historical knowledge', isCorrect: true },
        { id: 'd', label: 'To measure fitness', isCorrect: false },
      ], explanation: 'Assess civic knowledge.' },
    ] },
    { id: 'writing', title: 'Writing: tipos de textos, conectores y formalidad.', questions: [
        {
          id: 'eng-write-q6',
          tier: 'standard',
          prompt: 'Which of the following structures is appropriate for a formal letter opening?',
          options: [
            { id: 'a', label: 'Hi there,', isCorrect: false },
            { id: 'b', label: 'Dear Sir or Madam,', isCorrect: true },
            { id: 'c', label: 'Yo,', isCorrect: false },
            { id: 'd', label: 'Hello friend,', isCorrect: false },
          ],
          explanation: '"Dear Sir or Madam" es una apertura formal adecuada cuando no se conoce el destinatario.'
        },
        {
          id: 'eng-write-q7',
          tier: 'standard',
          prompt: 'Choose the most appropriate connector to add information in a formal essay.',
          options: [
            { id: 'a', label: 'however', isCorrect: false },
            { id: 'b', label: 'moreover', isCorrect: true },
            { id: 'c', label: 'otherwise', isCorrect: false },
            { id: 'd', label: 'nevertheless', isCorrect: false },
          ],
          explanation: '"Moreover" introduce information adicional de forma formal.'
        },
        {
          id: 'eng-write-q8',
          tier: 'standard',
          prompt: 'Which sentence is appropriate for a professional email to a professor?',
          options: [
            { id: 'a', label: 'Yo Professor, I need help.', isCorrect: false },
            { id: 'b', label: 'Dear Professor Smith, I would appreciate your guidance on …', isCorrect: true },
            { id: 'c', label: 'Hey', isCorrect: false },
            { id: 'd', label: "What's up?", isCorrect: false },
          ],
          explanation: 'La opción B mantiene formalidad y cortesía.'
        },
        {
          id: 'eng-write-q9',
          tier: 'standard',
          prompt: 'Which sentence is a correct topic sentence for a formal report?',
          options: [
            { id: 'a', label: 'This paper discusses something.', isCorrect: false },
            { id: 'b', label: 'The report investigates the impact of X on Y, presenting data and conclusions.', isCorrect: true },
            { id: 'c', label: "Here's what I think.", isCorrect: false },
            { id: 'd', label: 'In my opinion, X is bad.', isCorrect: false },
          ],
          explanation: 'Una oración temática formal debe indicar investigación, datos y conclusiones.'
        },
        {
          id: 'eng-write-q10',
          tier: 'standard',
          prompt: 'Choose the connector best suited to contrast in a formal context.',
          options: [
            { id: 'a', label: 'and', isCorrect: false },
            { id: 'b', label: 'although', isCorrect: true },
            { id: 'c', label: 'but', isCorrect: false },
            { id: 'd', label: 'so', isCorrect: false },
          ],
          explanation: '"Although" o "but" pueden expresar contraste; en formal context, "although" es muy común; "but" también es correcto, pero aquí elegimos la opción más formal "although".'
        },
      { id: 'eng-write-q1', tier: 'standard', prompt: 'Which type of text typically includes an introduction, development, and conclusion?', options: [
        { id: 'a', label: 'Email', isCorrect: false },
        { id: 'b', label: 'Essay', isCorrect: true },
        { id: 'c', label: 'Letter', isCorrect: false },
        { id: 'd', label: 'Report', isCorrect: false },
      ], explanation: 'Essay structure.' },
      { id: 'eng-write-q2', tier: 'standard', prompt: 'Which connector best adds information?', options: [
        { id: 'a', label: 'However', isCorrect: false },
        { id: 'b', label: 'In addition', isCorrect: true },
        { id: 'c', label: 'Nevertheless', isCorrect: false },
        { id: 'd', label: 'Instead', isCorrect: false },
      ], explanation: 'Additive connector.' },
      { id: 'eng-write-q3', tier: 'standard', prompt: 'Which opening is most formal for a letter to a university professor?', options: [
        { id: 'a', label: 'Hi Professor Smith,', isCorrect: false },
        { id: 'b', label: 'Dear Professor Smith,', isCorrect: true },
        { id: 'c', label: 'Hey there,', isCorrect: false },
        { id: 'd', label: 'To whom it may concern', isCorrect: false },
      ], explanation: 'Formal salutation.' },
      { id: 'eng-write-q4', tier: 'standard', prompt: 'Which tone is appropriate for an EvAU English essay?', options: [
        { id: 'a', label: 'Formal and impersonal', isCorrect: true },
        { id: 'b', label: 'Informal and personal', isCorrect: false },
        { id: 'c', label: 'Slangy', isCorrect: false },
        { id: 'd', label: 'Casual', isCorrect: false },
      ], explanation: 'Se requiere tono formal y objetivo.' },
      { id: 'eng-write-q5', tier: 'standard', prompt: 'Choose the best connector to introduce a conclusion.', options: [
        { id: 'a', label: 'Because', isCorrect: false },
        { id: 'b', label: 'Therefore', isCorrect: true },
        { id: 'c', label: 'But', isCorrect: false },
        { id: 'd', label: 'And', isCorrect: false },
      ], explanation: 'Therefore/Thus commonly signal conclusions.' },
    ] },
    { id: 'v-travel-leisure', title: 'Vocabulario: viajes, turismo y ocio.', questions: [
      { id: 'eng-travel-q1', tier: 'standard', prompt: 'Which phrase means “to explain”?', options: [
        { id: 'a', label: 'account for', isCorrect: true },
        { id: 'b', label: 'turn on', isCorrect: false },
        { id: 'c', label: 'take over', isCorrect: false },
        { id: 'd', label: 'finish off', isCorrect: false },
      ], explanation: 'Account for = explain/justify.' },
      { id: 'eng-travel-q2', tier: 'standard', prompt: 'Which idiom means “to be extremely happy”?', options: [
        { id: 'a', label: 'on cloud nine', isCorrect: true },
        { id: 'b', label: 'in hot water', isCorrect: false },
        { id: 'c', label: 'in the mood', isCorrect: false },
        { id: 'd', label: 'in a pinch', isCorrect: false },
      ], explanation: 'On cloud nine = extremely happy.' },
    ] },
    { id: 'v-work', title: 'Vocabulario: trabajo y mundo laboral.', questions: [
      { id: 'eng-work-q1', tier: 'standard', prompt: 'Which collocation is correct?', options: [
        { id: 'a', label: 'take a decision', isCorrect: false },
        { id: 'b', label: 'make a decision', isCorrect: true },
        { id: 'c', label: 'do a decision', isCorrect: false },
        { id: 'd', label: 'take decision', isCorrect: false },
      ], explanation: 'Correct collocation: make a decision.' },
    ] },

    // Extras from questions set
    { id: 'word-forms', title: 'Formación de palabras y adjetivos/adverbios.', questions: [
      { id: 'eng-forms-q1', tier: 'standard', prompt: 'Choose the correct adverb form of “careful” to complete the sentence: He drives ____.', options: [
        { id: 'a', label: 'careful', isCorrect: false },
        { id: 'b', label: 'carefully', isCorrect: true },
        { id: 'c', label: 'carefull', isCorrect: false },
        { id: 'd', label: 'carefullY', isCorrect: false },
      ], explanation: 'Adverb of careful is carefully.' },
      { id: 'eng-forms-q2', tier: 'standard', prompt: 'Which order of adjectives is correct?', options: [
        { id: 'a', label: 'a red old Italian car', isCorrect: false },
        { id: 'b', label: 'a small red old Italian car', isCorrect: true },
        { id: 'c', label: 'an old Italian red car', isCorrect: false },
        { id: 'd', label: 'a Italian old red car', isCorrect: false },
      ], explanation: 'Typical order: size, age, color, origin, material.' },
    ] },
    { id: 'uoe-mixed', title: 'Use of English: estructuras mixtas.', questions: [
      { id: 'eng-uoe-q1', tier: 'standard', prompt: 'The teacher suggested that he ... more often.', options: [
        { id: 'a', label: 'read', isCorrect: true },
        { id: 'b', label: 'reads', isCorrect: false },
        { id: 'c', label: 'reading', isCorrect: false },
        { id: 'd', label: 'to read', isCorrect: false },
      ], explanation: 'Suggest that + base form (mandative subjunctive).' },
      { id: 'eng-uoe-q2', tier: 'standard', prompt: 'After years, she ___ smoking.', options: [
        { id: 'a', label: 'stop to smoke', isCorrect: false },
        { id: 'b', label: 'stops smoking', isCorrect: false },
        { id: 'c', label: 'stopped smoking', isCorrect: true },
        { id: 'd', label: 'stopping smoking', isCorrect: false },
      ], explanation: 'Stop + -ing = cease an activity.' },
      { id: 'eng-uoe-q3', tier: 'standard', prompt: 'Choose the sentence that is grammatically correct.', options: [
        { id: 'a', label: 'This is more better.', isCorrect: false },
        { id: 'b', label: 'This is the most best.', isCorrect: false },
        { id: 'c', label: 'This is the most interesting book I have ever reads.', isCorrect: false },
        { id: 'd', label: 'This is the most interesting book I have ever read.', isCorrect: true },
      ], explanation: 'Superlative + present perfect correct in D.' },
      { id: 'eng-uoe-q4', tier: 'standard', prompt: 'Neither the teachers nor the principal ___ able to attend the session yesterday.', options: [
        { id: 'a', label: 'was', isCorrect: true },
        { id: 'b', label: 'were', isCorrect: false },
        { id: 'c', label: 'is', isCorrect: false },
        { id: 'd', label: 'are', isCorrect: false },
      ], explanation: 'Agreement with the nearest subject (principal) → singular.' },
      { id: 'eng-uoe-q5', tier: 'standard', prompt: 'I bought ___ apple and ___ orange.', options: [
        { id: 'a', label: 'a, an', isCorrect: false },
        { id: 'b', label: 'the, an', isCorrect: false },
        { id: 'c', label: 'an, an', isCorrect: true },
        { id: 'd', label: 'a, the', isCorrect: false },
      ], explanation: "Use 'an' before vowel sounds: an apple, an orange." },
      { id: 'eng-uoe-q6', tier: 'standard', prompt: 'I stayed there ___ two weeks.', options: [
        { id: 'a', label: 'since', isCorrect: false },
        { id: 'b', label: 'for', isCorrect: true },
        { id: 'c', label: 'during', isCorrect: false },
        { id: 'd', label: 'in', isCorrect: false },
      ], explanation: 'For + duration.' },
      { id: 'eng-uoe-q7', tier: 'standard', prompt: 'Choose the correct question form: “They watched a documentary last night.”', options: [
        { id: 'a', label: 'What did they watched last night?', isCorrect: false },
        { id: 'b', label: 'What did they watch last night?', isCorrect: true },
        { id: 'c', label: 'What do they watched last night?', isCorrect: false },
        { id: 'd', label: 'What they watched last night?', isCorrect: false },
      ], explanation: 'Did + base form.' },
      { id: 'eng-uoe-q8', tier: 'standard', prompt: 'Choose the sentence that uses get to express change.', options: [
        { id: 'a', label: 'The door was opened by the wind.', isCorrect: false },
        { id: 'b', label: 'The door got opened by the wind.', isCorrect: true },
        { id: 'c', label: 'The door opens by the wind.', isCorrect: false },
        { id: 'd', label: 'The door is opening by the wind.', isCorrect: false },
      ], explanation: 'get + past participle = change of state (informal).' },
      { id: 'eng-uoe-q9', tier: 'standard', prompt: 'The team of players ___ ready.', options: [
        { id: 'a', label: 'is', isCorrect: true },
        { id: 'b', label: 'are', isCorrect: false },
        { id: 'c', label: 'were', isCorrect: false },
        { id: 'd', label: 'have', isCorrect: false },
      ], explanation: 'Collective noun often treated as singular.' },
      { id: 'eng-uoe-q10', tier: 'standard', prompt: 'The success of the project depends ___ adequate funding.', options: [
        { id: 'a', label: 'on', isCorrect: true },
        { id: 'b', label: 'of', isCorrect: false },
        { id: 'c', label: 'to', isCorrect: false },
        { id: 'd', label: 'with', isCorrect: false },
      ], explanation: 'Depend on + noun.' },
      { id: 'eng-uoe-q11', tier: 'standard', prompt: 'Have you ever eaten sushi?', options: [
        { id: 'a', label: 'Have you ever eat sushi?', isCorrect: false },
        { id: 'b', label: 'Have you ever eaten sushi?', isCorrect: true },
        { id: 'c', label: 'Do you ever eat sushi?', isCorrect: false },
        { id: 'd', label: 'Are you ever eaten sushi?', isCorrect: false },
      ], explanation: 'Present perfect with ever for life experience.' },
    ] },
  ],
}


