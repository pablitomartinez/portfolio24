"use client";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });
      if (!response.ok) {
        console.log("falling over!");
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData["message"]);
      setIsSubmitted(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
      // event.target.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("error, please try resubmitting the form");
    }
  }

  return (
    <section
      id="contact"
      className="h-screen py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Contact
        </h2>

        {/* MENSAJE DE CONFIRMACION  */}

        {isSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-md text-green-700 border border-green-200">
              Mensaje enviado con éxito
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              type="message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
