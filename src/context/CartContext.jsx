import React, { createContext, useContext, useState } from "react";
import CartService from "../services/CartService";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(course) {
        CartService.add(course);
        setCart([...CartService.getCart()]);
    }

    function removeFromCart(id) {
        CartService.remove(id);
        setCart([...CartService.getCart()]);
    }

    function clearCart() {
        CartService.clear();
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
