import React from "react";
import courses from "../data/courses";

export default function Cursos() {
    return (
        <div>
            <h2>Cursos Disponíveis</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {courses.map((c) => (
                    <div
                        key={c.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "15px",
                            width: "250px"
                        }}
                    >
                        <img src={c.thumbnail_url} alt={c.title} style={{ width: "100%" }} />
                        <h3>{c.title}</h3>
                        <p>{c.description}</p>
                        <p><b>Instrutor:</b> {c.instructor}</p>
                        <p><b>Preço:</b> {c.price === 0 ? "Gratuito" : `R$ ${c.price}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

