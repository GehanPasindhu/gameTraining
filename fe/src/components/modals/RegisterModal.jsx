import React, { useState } from "react";
import { registerCourse } from "../../utils/api";
import ModalWrapper from "../common/ModalWrapper";

function RegisterModal({ course, onClose }) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
    courseId: course.id,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerCourse(form);
      alert("Registered successfully!");
      onClose();
    } catch (err) {
      alert("Registration failed!");
      console.error(err);
    }
  };

  return (
    <ModalWrapper onClose={onClose}>
    <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
    <img
      src={course.image_url}
      alt={course.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
        <h2 className="text-xl font-bold mb-4">Register for {course.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Submit Registration
          </button>
        </form>
 
    </ModalWrapper>
  );
}

export default RegisterModal;
