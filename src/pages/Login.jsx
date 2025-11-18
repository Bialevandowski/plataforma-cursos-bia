import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email && u.senha === senha
        );

        if (!user) {
            alert("Credenciais inválidas!");
            return;
        }

        // salva usuário logado
        localStorage.setItem("loggedUser", JSON.stringify(user));

        alert("Login realizado com sucesso!");
        navigate("/");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Seu email"
                    className="border p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="border p-2"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button className="bg-green-600 text-white p-2 rounded">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
