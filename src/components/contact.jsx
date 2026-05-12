
import React, { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbygqquAIqnztDmUyD92P-z0BcjguJMdSjs4LRZXewQjQxIlgjQSgDi5IjaqFa1Rr7-Q/exec",
        {
          method: "POST",
          mode: "no-cors", // ⭐ FIX
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "contact",
            ...form,
          }),
        }
      );

      alert("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });

    } catch (error) {
      alert("Error sending message");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="relative h-screen">

      <img 
        src="/images/contact.png"
        alt="contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 text-gray-300 w-[90%] sm:w-full max-w-md">

        <h1 className="text-4xl font-bold mb-4">Contact</h1>

        <p className="mb-6 text-lg">
          Mobile: <span className="font-semibold">8086574839</span>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-400 text-black outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-400 text-black outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-400 text-black outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-400 text-black outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded text-black font-semibold"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;