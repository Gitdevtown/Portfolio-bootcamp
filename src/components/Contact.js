import React, { useState } from "react";
export default function Contact() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Contact US
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Let's connect and explore
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="placeholder@gmail.com"
                value={formData.email}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                message:
              </label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700  to-purple-700 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
