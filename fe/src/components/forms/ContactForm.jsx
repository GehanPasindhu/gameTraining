import React, { useState } from "react";
import axios from "axios";
import { contactus } from "../../utils/api";

function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};

    if (!formData.full_name.trim()) tempErrors.full_name = "Full name is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }

    if (!formData.phone_number.trim()) {
      tempErrors.phone_number = "Contact number is required.";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone_number)) {
      tempErrors.phone_number = "Contact number must be 10–15 digits.";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await contactus(formData);
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-6 px-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-amber-300">Contact Us</h3>

      {success && (
        <div className="text-green-600 font-medium mb-4">
          Your message has been sent successfully.
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="full_name"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.full_name}
          onChange={handleChange}
        />
        {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Contact Number</label>
        <input
          type="text"
          name="phone_number"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="bg-yellow-900 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl transition cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
