import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastro(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // verifica se email já existe
        const userExists = users.find((u) => u.email === email);
        if (userExists) {
            alert("Este email já está cadastrado!");
            return;
        }

        // adiciona novo usuário
        const newUser = { email, senha };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Cadastro realizado com sucesso!");
        navigate("/login");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cadastro</h1>

            <form onSubmit={handleCadastro} className="flex flex-col gap-4">
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

                <button className="bg-blue-500 text-white p-2 rounded">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Cadastro;
