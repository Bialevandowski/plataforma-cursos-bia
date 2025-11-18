import React from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Painel do Administrador</h1>

            <p>Bem-vindo, {user?.email}</p>
        </div>
    );
};

export default AdminDashboard;
