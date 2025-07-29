import React, { useEffect, useState } from "react";
import { fetchCourses } from "../utils/api";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getcourses = async () =>{
        await fetchCourses()
        .then((res) => setCourses(res.data))
        .catch((err) => console.error("Error", err));
    }

    getcourses()

  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <ul className="space-y-3">
        {courses?.map((course) => (
          <li key={course.id} className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold">{course.title}</h4>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCourses;
