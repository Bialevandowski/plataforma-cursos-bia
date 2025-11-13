const quizzes = [
    {
        id: "1",
        title: "Lógica de Programação",
        subject: "Programação",
        creator_email: "prof.ana@example.com",
        creator_name: "Prof. Ana",
        difficulty: "Médio",
        times_completed: 25,
        questions: [
            {
                question: "O que é um algoritmo?",
                options: [
                    "Um programa completo",
                    "Uma sequência de passos para resolver um problema",
                    "Uma linguagem de programação",
                    "Um erro de código"
                ],
                correct_answer: 1,
                explanation: "Um algoritmo é uma sequência lógica e finita de instruções."
            },
            {
                question: "O que significa 'loop' em programação?",
                options: [
                    "Um erro no código",
                    "Repetição de instruções",
                    "Condição de parada",
                    "Uma variável"
                ],
                correct_answer: 1,
                explanation: "Um loop permite repetir instruções várias vezes."
            }
        ]
    }
];

export default quizzes;
