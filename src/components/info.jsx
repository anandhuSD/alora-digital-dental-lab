import React, { useState } from "react";

function Info() {
  const [review, setReview] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbygqquAIqnztDmUyD92P-z0BcjguJMdSjs4LRZXewQjQxIlgjQSgDi5IjaqFa1Rr7-Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "review", ...review }),
        }
      );
      alert("Review submitted!");
      setReview({ name: "", message: "" });
    } catch (error) {
      alert("Error submitting review");
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 lg:px-16">

      {/* LEFT: Info + Logo */}
      <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2 max-w-md">

        {/* Logo — shown on all screens */}
        <img
          src="/images/logo2.png"
          alt="Alora Dental Lab Logo"
          className="w-40 sm:w-52 lg:w-64 h-auto object-contain opacity-90"
        />

        {/* Lab Name */}
        <p className="font-semibold text-sm tracking-widest opacity-90 text-center lg:text-left">
          ALORA DIGITAL DENTAL LAB
        </p>

        {/* Contact Details */}
        <div className="text-sm space-y-1 opacity-75 text-center lg:text-left leading-relaxed">
          <p>15/449E, Opposite BSNL Office</p>
          <p>Perambra - 673525, Kozhikode, Kerala</p>
          <p>Phone: +91 89212 03760</p>
          <p>Email: aloradigitaldentallab@gmail.com</p>
          <p>
            Web:{" "}
            <a
              href="https://www.aloradentallab.com"
              className="underline opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              www.aloradentallab.com
            </a>
          </p>
        </div>

        {/* About */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-2">About Alora Orthodontics Lab</h3>
          <p className="text-sm leading-relaxed opacity-75">
            Alora Orthodontics Dental Lab is a specialized dental laboratory focused on
            designing and manufacturing high-quality orthodontic appliances.
          </p>
        </div>
      </div>

      {/* RIGHT: Review Box */}
      <div className="w-full lg:w-1/2 max-w-md">
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">Reviews</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={review.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40"
            />
            <textarea
              name="message"
              value={review.message}
              onChange={handleChange}
              placeholder="Write your review..."
              rows="4"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Info;