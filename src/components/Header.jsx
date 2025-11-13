import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{ background: "#0070f3", padding: "15px" }}>
            <nav style={{ display: "flex", justifyContent: "space-around", color: "#fff" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                <Link to="/cursos" style={{ color: "white", textDecoration: "none" }}>Cursos</Link>
                <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>Quiz</Link>
                <Link to="/comunidade" style={{ color: "white", textDecoration: "none" }}>Comunidade</Link>
                <Link to="/chat" style={{ color: "white", textDecoration: "none" }}>Chat</Link>
            </nav>
        </header>
    );
}
