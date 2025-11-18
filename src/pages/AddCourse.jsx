import { useState } from "react";
import { useCourses } from "../context/CoursesContext";

const AddCourse = () => {
    const { addCourse } = useCourses();

    const [form, setForm] = useState({
        titulo: "",
        preco: "",
        categoria: "",
        descricao: "",
        imagem: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCourse = {
            id: Date.now(),
            ...form,
            preco: parseFloat(form.preco)
        };

        addCourse(newCourse);
        alert("Curso cadastrado com sucesso!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Novo Curso</h2>

            <input name="titulo" placeholder="Título" onChange={handleChange} />
            <input name="preco" placeholder="Preço" onChange={handleChange} />
            <input name="categoria" placeholder="Categoria" onChange={handleChange} />
            <textarea name="descricao" placeholder="Descrição" onChange={handleChange} />
            <input name="imagem" placeholder="URL da imagem" onChange={handleChange} />

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default AddCourse;
