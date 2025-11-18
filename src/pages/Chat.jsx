import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "../components/ChatBubble.jsx";
import { messages as initial } from "../data/chat";

export default function Chat() {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("pc_chat");
        return saved ? JSON.parse(saved) : initial;
    });
    const [text, setText] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        localStorage.setItem("pc_chat", JSON.stringify(messages));
        ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const send = e => {
        e?.preventDefault();
        if (!text.trim()) return;
        const msg = { id: Date.now(), from: "me", text: text.trim(), time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) };
        setMessages(prev => [...prev, msg]);
        setText("");
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now()+1, from: "bot", text: "Resposta automática: entendi!", time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }]);
        }, 800);
    };

    return (
        <div className="flex flex-col h-[70vh]">
            <div ref={ref} className="flex-1 overflow-auto p-4 bg-white rounded-xl shadow">
                {messages.map(m => <ChatBubble key={m.id} msg={m} />)}
            </div>

            <form onSubmit={send} className="mt-4 flex gap-2">
                <input value={text} onChange={e=>setText(e.target.value)} placeholder="Digite sua mensagem..." className="flex-1 px-4 py-2 border rounded-xl"/>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl">Enviar</button>
            </form>
        </div>
    );
}
