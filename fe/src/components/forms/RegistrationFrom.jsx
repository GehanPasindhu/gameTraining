import React, { useEffect, useState } from "react";
import { fetchCourses, registerCourse } from "../../utils/api";

function RegistrationFrom() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    CourseId: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone_number.trim())
      newErrors.phone_number = "Phone number is required";
    else if (!/^\d{10,15}$/.test(form.phone_number))
      newErrors.phone_number = "Enter a valid phone number";

    if (!form.CourseId) newErrors.CourseId = "Please select a course";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "CourseId" ? parseInt(value) : value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      await registerCourse(form);
      setSubmitted(true);
      setForm({
        full_name: "",
        email: "",
        phone_number: "",
        CourseId: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-[1000px] mt-10 mx-auto  shadow-md rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-10">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">
        Register for a Course
      </h2>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Registration successful!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm">{errors.full_name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm">{errors.phone_number}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Select Course</label>
          <select
            name="CourseId"
            value={form.CourseId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Select --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.CourseId && (
            <p className="text-red-500 text-sm">{errors.CourseId}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-violet-700 text-white py-2 px-6 rounded hover:bg-violet-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationFrom;
