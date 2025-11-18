// src/pages/Profile.jsx
import { useAuth } from "../context/AuthContext";

export default function Profile() {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Email: {user?.email}</p>

            <button onClick={logout}>Sair</button>
        </div>
    );
}
