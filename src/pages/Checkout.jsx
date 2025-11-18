import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [method, setMethod] = useState("");

    const finishPayment = () => {
        alert(`Pagamento via ${method} realizado com sucesso!`);
        clearCart();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Formas de Pagamento</h2>

            <select onChange={(e) => setMethod(e.target.value)} style={{ marginTop: 20 }}>
                <option value="">Selecione...</option>
                <option value="Pix">Pix</option>
                <option value="Cartão">Cartão</option>
                <option value="Boleto">Boleto</option>
            </select>

            {method && (
                <button style={{ display: "block", marginTop: 20 }} onClick={finishPayment}>
                    Finalizar Pagamento
                </button>
            )}
        </div>
    );
};

export default Checkout;
