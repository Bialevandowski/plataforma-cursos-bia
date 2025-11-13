import React, { useState } from "react";
import quizzes from "../data/quizzes";

export default function Quiz() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const startQuiz = (quiz) => {
        setSelectedQuiz(quiz);
        setCurrentQuestion(0);
        setScore(0);
        setFinished(false);
    };

    const answerQuestion = (index) => {
        if (index === selectedQuiz.questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }

        const next = currentQuestion + 1;
        if (next < selectedQuiz.questions.length) {
            setCurrentQuestion(next);
        } else {
            setFinished(true);
        }
    };

    if (!selectedQuiz) {
        return (
            <div>
                <h2>Quiz de Conhecimento 🎯</h2>
                <p>Escolha um quiz para começar:</p>
                {quizzes.map((quiz) => (
                    <div
                        key={quiz.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            margin: "10px",
                            borderRadius: "10px"
                        }}
                    >
                        <h3>{quiz.title}</h3>
                        <p>Matéria: {quiz.subject}</p>
                        <p>Dificuldade: {quiz.difficulty}</p>
                        <button onClick={() => startQuiz(quiz)}>Começar</button>
                    </div>
                ))}
            </div>
        );
    }

    if (finished) {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>Quiz finalizado!</h2>
                <p>
                    Você acertou {score} de {selectedQuiz.questions.length} perguntas.
                </p>
                <button onClick={() => setSelectedQuiz(null)}>Voltar</button>
            </div>
        );
    }

    const q = selectedQuiz.questions[currentQuestion];
    return (
        <div>
            <h2>{selectedQuiz.title}</h2>
            <h4>
                Pergunta {currentQuestion + 1}/{selectedQuiz.questions.length}
            </h4>
            <p>{q.question}</p>
            {q.options.map((opt, i) => (
                <button
                    key={i}
                    style={{ display: "block", margin: "5px" }}
                    onClick={() => answerQuestion(i)}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}
