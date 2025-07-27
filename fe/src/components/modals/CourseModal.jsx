import React from "react";
import ModalWrapper from "../common/ModalWrapper";

function CourseModal({ course, onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <img
        src={course.image_url}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="mt-2">{course.description}</p>
    </ModalWrapper>
  );
}

export default CourseModal;
