import React from "react";

export default function PostCard({ post }) {
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-bold">{post.author?.charAt(0)?.toUpperCase()}</div>
                <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-xs text-gray-500">{post.created_at}</div>
                </div>
            </div>
            <p className="text-gray-700">{post.content}</p>
        </div>
    );
}
