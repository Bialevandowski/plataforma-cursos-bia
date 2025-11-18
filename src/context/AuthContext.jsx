import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const found = users.find(u => u.email === email && u.password === password);

        if (!found) return false;

        setUser(found);
        localStorage.setItem("user", JSON.stringify(found));
        return true;
    }

    function register(name, email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(u => u.email === email);
        if (exists) return false;

        const newUser = { name, email, password };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
