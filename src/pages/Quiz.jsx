import React, { useState } from "react";

const Quiz = () => {
    const questions = [
        {
            q: "O que é React?",
            a: ["Biblioteca JS", "Banco de dados", "Sistema operacional"],
            correct: 0
        }
    ];

    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);

    const choose = (i) => {
        if (i === questions[step].correct) setScore(score + 1);
        setStep(step + 1);
    };

    return (
        <div style={{ padding: 20 }}>
            {step < questions.length ? (
                <>
                    <h3>{questions[step].q}</h3>
                    {questions[step].a.map((alt, i) => (
                        <button key={i} onClick={() => choose(i)} style={{ display: "block", marginTop: 10 }}>
                            {alt}
                        </button>
                    ))}
                </>
            ) : (
                <h2>Acertou {score} de {questions.length}</h2>
            )}
        </div>
    );
};

export default Quiz;
