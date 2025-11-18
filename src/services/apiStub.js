import courses from "../data/courses.json";

export function getCourses() {
    return Promise.resolve(courses);
}

export function getCourseById(id) {
    return Promise.resolve(
        courses.find(c => c.id === Number(id))
    );
}
