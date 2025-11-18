import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{ background: "#222", color: "#fff", padding: "10px 0" }}>
            <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link style={{ color: "#fff" }} to="/">Home</Link>
                <Link style={{ color: "#fff" }} to="/cursos">Cursos</Link>
                <Link style={{ color: "#fff" }} to="/quiz">Quiz</Link>
                <Link style={{ color: "#fff" }} to="/comunidade">Comunidade</Link>
                <Link style={{ color: "#fff" }} to="/chat">Chat</Link>
            </nav>
        </header>
    );
}
