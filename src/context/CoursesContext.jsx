import { createContext, useContext, useEffect, useState } from "react";
import coursesJSON from "../data/courses.json";
import { CourseFactory } from "../factories/CourseFactory";

const CoursesContext = createContext();

export function CoursesProvider({ children }) {
    const [courses, setCourses] = useState([]);

    // Carregar cursos do JSON usando Factory
    useEffect(() => {
        const load = coursesJSON.map(c => CourseFactory(c));
        setCourses(load);
    }, []);

    function addCourse(courseData) {
        const newCourse = CourseFactory({
            id: courses.length + 1,
            ...courseData
        });

        setCourses(prev => [...prev, newCourse]);
    }

    return (
        <CoursesContext.Provider value={{ courses, addCourse }}>
            {children}
        </CoursesContext.Provider>
    );
}

export function useCourses() {
    return useContext(CoursesContext);
}
