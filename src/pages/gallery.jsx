import React, { useState } from "react";

function Gallery() {
  const images = Array(40).fill("/images/dp1.jpg");

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-black py-10 px-5">

      {/* HEADING */}
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Gallery
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-4 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* FULL SCREEN VIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="full-view"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;