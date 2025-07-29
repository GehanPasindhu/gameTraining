import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "",     contact: "", });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim())
      tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid.";

    if (!formData.contact.trim())
      tempErrors.contact = "Contact number is required.";
    else if (!/^[0-9]{10,15}$/.test(formData.contact))
      tempErrors.contact = "Contact number must be 10-15 digits.";

    if (!formData.message.trim())
      tempErrors.message = "Message is required.";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Handle API submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-6 px-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-amber-300">
        Send Us a Message
      </h3>

      <div className="mb-4">
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
      <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Contact Number</label>
        <input
          type="text"
          name="contact"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
      </div>


      <div className="mb-4">
        <label className="block font-semibold">Message</label>
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
