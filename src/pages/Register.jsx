// src/pages/Register.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        register(email, password);
    };

    return (
        <div>
            <h2>Criar Conta</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
