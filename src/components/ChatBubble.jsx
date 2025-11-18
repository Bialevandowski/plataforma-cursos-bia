import React from "react";

export default function ChatBubble({ msg }) {
    return (
        <div className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"} mb-3`}>
            <div className={`p-3 rounded-2xl max-w-xs ${msg.from === "me" ? "bg-indigo-600 text-white" : "bg-gray-200 text-black"}`}>
                <div>{msg.text}</div>
                <div className="text-xs mt-2 opacity-70 text-right">{msg.time}</div>
            </div>
        </div>
    );
}
