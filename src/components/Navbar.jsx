import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/courses">Cursos</Link>
                <Link to="/add-course">Adicionar Curso</Link>
                <Link to="/cadastro">Cadastro/Login</Link>
            </div>

            <div>
                <Link to="/cart">
                    Carrinho ({cart.length})
                </Link>
            </div>
        </nav>
    );
}
