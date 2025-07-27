import React, { useEffect, useState } from "react";
import { fetchCourses } from "../utils/api";
import CourseCard from "../components/CourseCard";


function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error", err));
  }, []);



  return (
    <>
    

    <div className="flex flex-wrap justify-center gap-6">
      {courses?.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>

    </>
  );
}

export default Courses;
