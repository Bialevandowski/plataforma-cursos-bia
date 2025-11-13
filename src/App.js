import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Quiz from "./pages/Quiz";
import Comunidade from "./pages/Comunidade";
import Chat from "./pages/Chat";

function App() {
    return (
        <Router>
            <Header />
            <div style={{ minHeight: "80vh", padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/comunidade" element={<Comunidade />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
