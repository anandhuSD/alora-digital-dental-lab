import React, { useState } from "react";

function Info() {

  const [review, setReview] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
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
            type: "review",
            ...review,
          }),
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
    <div className="w-full min-h-screen bg-black text-white relative px-10">

      {/* LEFT CONTENT */}
      <div className="absolute bottom-16 left-10 max-w-md space-y-5">
        
        <p className="font-semibold text-sm opacity-90">
          ALORA DIGITAL DENTAL LAB
        </p>

        <div className="text-sm space-y-1 opacity-80">
          <p>15/449E, Opposite BSNL Office</p>
          <p>Perambra - 673525, Kozhikode, Kerala</p>
          <p>Phone: +91 89212 03760</p>
          <p>Email: aloradigitaldentallab@gmail.com</p>
          <p>Web: www.aloradentallab.com</p>
        </div>

        <h3 className="text-lg font-semibold mt-4">
          About Alora Orthodontics Lab
        </h3>

        <p className="text-sm leading-relaxed opacity-80">
          Alora Orthodontics Dental Lab is a specialized dental laboratory focused on designing and manufacturing high-quality orthodontic appliances.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute bottom-60 right-60 hidden lg:block">
        <img
          src="/images/logo2.png"
          alt="Dental"
          className="w-[260px] h-auto object-contain opacity-90"
        />
      </div>

      {/* REVIEW BOX */}
      <div className="absolute top-[35%] left-1/3 transform -translate-x-9/12 w-full max-w-xl px-5">
        
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
          
          <h2 className="text-2xl font-bold mb-4 text-center">
            Reviews
          </h2>

          <div className="space-y-3">
            
            <input
              type="text"
              name="name"
              value={review.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 rounded-lg bg-white/20 text-white outline-none"
            />

            <textarea
              name="message"
              value={review.message}
              onChange={handleChange}
              placeholder="Write your review..."
              rows="3"
              className="w-full p-2 rounded-lg bg-white/20 text-white outline-none"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200"
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