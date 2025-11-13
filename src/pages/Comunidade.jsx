import React, { useState } from "react";
import postsData from "../data/posts";

export default function Comunidade() {
    const [posts, setPosts] = useState(postsData);
    const [novoPost, setNovoPost] = useState("");

    const adicionarPost = () => {
        if (!novoPost.trim()) return;
        const novo = {
            id: Math.random().toString(),
            author_email: "usuario@exemplo.com",
            author_name: "Você",
            content: novoPost,
            subject: "Geral",
            post_type: "dica",
            likes: [],
            comments: []
        };
        setPosts([novo, ...posts]);
        setNovoPost("");
    };

    return (
        <div>
            <h2>Comunidade 💬</h2>
            <textarea
                value={novoPost}
                onChange={(e) => setNovoPost(e.target.value)}
                placeholder="Compartilhe algo com a comunidade..."
                style={{ width: "100%", height: "80px", marginBottom: "10px" }}
            />
            <button onClick={adicionarPost}>Publicar</button>

            <div style={{ marginTop: "20px" }}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "10px"
                        }}
                    >
                        <h4>{post.author_name}</h4>
                        <p>{post.content}</p>
                        <small>Matéria: {post.subject}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
