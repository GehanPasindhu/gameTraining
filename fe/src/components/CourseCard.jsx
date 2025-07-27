import React, { useEffect, useState } from "react";
import CourseModal from "./modals/CourseModal";
import RegisterModal from "./modals/RegisterModal";
import { courseVariants } from "../assets/courseVariants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CourseCard({ course }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div key={course.id}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        key={course.id}
        variants={courseVariants.cardVariants}
        className="bg-white rounded-xl shadow-md p-6 text-black w-full sm:w-[300px] transition-all"
      >
        <img
          src={course.image_url}
          alt={course.title}
          className="h-48 w-full object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mt-1">
          Duration: {course.duration}
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              setSelectedCourse(course);
              setShowCourseModal(true);
            }}
            className="bg-violet-700 text-white px-4 py-2 rounded-lg hover:bg-violet-800"
          >
            More Info
          </button>
          <button
            onClick={() => {
              setSelectedCourse(course);
              setShowRegisterModal(true);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </div>
      </motion.div>

      {showCourseModal && selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => {
            setSelectedCourse(null);
            setShowCourseModal(false);
          }}
        />
      )}

      {showRegisterModal && selectedCourse && (
        <RegisterModal
          course={selectedCourse}
          onClose={() => {
            setSelectedCourse(null);
            setShowRegisterModal(false);
          }}
        />
      )}
    </div>
  );
}

export default CourseCard;
