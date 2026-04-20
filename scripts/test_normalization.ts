function normalize(quiz: any) {
    if (Array.isArray(quiz)) {
        quiz = { questions: quiz };
    }
    if (!quiz.questions && quiz.preguntas) {
        quiz.questions = quiz.preguntas;
        delete quiz.preguntas;
    }
    if (!quiz.questions && quiz.test) {
        quiz.questions = quiz.test;
        delete quiz.test;
    }
    return quiz;
}

const cases = [
    { name: "Standard", input: { questions: [1, 2] } },
    { name: "Array Direct", input: [1, 2] },
    { name: "Preguntas Key", input: { preguntas: [1, 2] } },
    { name: "Test Key", input: { test: [1, 2] } }
];

cases.forEach(c => {
    const result = normalize(c.input);
    const success = result.questions && Array.isArray(result.questions);
    console.log(`${c.name}: ${success ? '✅ PASS' : '❌ FAIL'}`);
    if (!success) console.log("Result:", result);
});
