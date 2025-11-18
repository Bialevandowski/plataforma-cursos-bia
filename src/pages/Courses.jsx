import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../services/apiStub";

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(data => setCourses(data));
    }, []);

    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-12">Cursos Disponíveis</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}
