import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CourseCard({ course }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />

            <div className="p-4">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>

                <p className="text-lg font-bold mt-3 text-blue-600">
                    R$ {course.price.toFixed(2)}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <Link
                        to={`/courses/${course.id}`}
                        className="text-blue-600 hover:underline"
                    >
                        Ver detalhes
                    </Link>

                    <button
                        onClick={() => addToCart(course)}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
