import React from "react";

export default function QuizCard({ quiz }) {
    return (
        <div className="bg-white rounded-xl shadow p-5 flex flex-col">
            <h3 className="font-bold text-lg">{quiz.title}</h3>
            <p className="text-sm text-gray-600 mt-2 flex-1">Matéria: {quiz.subject}</p>
            <div className="mt-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Iniciar</button>
            </div>
        </div>
    );
}
