import React from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard.jsx";

export default function Comunidade() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Comunidade</h1>
            <div className="space-y-4">
                {posts.map(p => <PostCard key={p.id} post={p} />)}
            </div>
        </div>
    );
}
