import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {cart.map(item => (
                        <div key={item.id} className="border p-4 rounded-lg shadow">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p>R$ {item.price.toFixed(2)}</p>

                            <button
                                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remover
                            </button>
                        </div>
                    ))}

                    <button
                        className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
                        onClick={clearCart}
                    >
                        Limpar Carrinho
                    </button>
                </div>
            )}
        </div>
    );
}
