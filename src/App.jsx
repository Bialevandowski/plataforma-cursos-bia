import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./pages/AddCourse";
import Cadastro from "./pages/Cadastro";
import Cart from "./pages/Cart";

function App() {
    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<CourseDetails />} />
                    <Route path="/add-course" element={<AddCourse />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
