import type { Subject } from './types'

export const englishES: Subject = {
  id: 'ingles',
  name: 'Inglés',
  topics: [
    // Grammar & Use of English
    { id: 'tenses', title: 'Tiempos verbales (present, past, future, perfect, continuous, perfect continuous).', questions: [
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


