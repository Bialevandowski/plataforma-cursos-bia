import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../services/apiStub";

export default function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        getCourseById(id).then(setCourse);
    }, [id]);

    if (!course) return <div className="text-center py-20">Carregando...</div>;

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{course.title}</h1>
                    <p className="text-gray-700 mt-2">{course.description}</p>
                    <div className="mt-6 space-x-3">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-md">Comprar / Iniciar</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-md">Ver módulos</button>
                    </div>
                </div>

                <aside className="w-full lg:w-80 bg-white rounded-xl shadow p-4">
                    <p className="text-sm text-gray-600">Instrutor</p>
                    <div className="font-semibold">{course.instructor}</div>
                    <p className="mt-4 text-sm">Duração: {course.duration_minutes} min</p>
                    <p className="text-sm mt-2">{course.category}</p>
                    <div className="mt-4 text-xl font-bold">{course.price === 0 ? "Grátis" : `R$ ${course.price.toFixed(2)}`}</div>
                </aside>
            </div>
        </div>
    );
}
