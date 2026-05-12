import React, { useState, useEffect } from "react";

function Gallery() {
  const images = Array(40).fill("/images/dp1.jpg");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, selectedImage]);

  const openModal = (img, index) => {
    setSelectedImage(img);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const navigate = (dir) => {
    const next = (selectedIndex + dir + images.length) % images.length;
    setSelectedImage(images[next]);
    setSelectedIndex(next);
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-10">

      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white tracking-wide">
        Gallery
      </h1>

      {/* GRID — 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => openModal(img, index)}
          >
            <img
              src={img}
              alt={`gallery-${index + 1}`}
              className="w-full h-40 sm:h-52 lg:h-60 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          {/* Prev button */}
          <button
            className="absolute left-3 sm:left-6 text-white text-3xl sm:text-4xl font-bold bg-white/10 hover:bg-white/25 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition z-50"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="full-view"
            className="max-w-[85vw] max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            className="absolute right-3 sm:right-6 text-white text-3xl sm:text-4xl font-bold bg-white/10 hover:bg-white/25 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition z-50"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-white/10 hover:bg-white/25 rounded-full w-9 h-9 flex items-center justify-center transition z-50"
            onClick={closeModal}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;