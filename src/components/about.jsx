

import React from "react";

function Aboutmatter() {
  return (
    <div 
      className="text-white text-center max-w-2xl px-6"
      data-aos="fade-up"
    >
      
      {/* HEADING */}
      <h1 
        data-aos="fade-right"
        className="text-5xl font-bold mb-6"
      >
        ABOUT US
      </h1>

      {/* PARAGRAPH */}
      <p 
        data-aos="fade-left"
        data-aos-delay="200"
        className="text-lg leading-relaxed"
      >
      We provide customized aligner design and manufacturing services tailored to your needs. 
      If you prefer to handle the software aspect of aligners,
       we can support you with advanced 3D printing and aligner manufacturing solutions.
        Our services also include convenient clinic pick-up and delivery,
         ensuring a smooth and hassle-free experience. Additionally, 
         our team of experts is dedicated to assisting you in treatment planning and execution,
          helping you achieve precise and effective results.
      </p>

    </div>
  );
}


function About() {
  return (
    <div id="about" className="relative h-screen">

      {/* BACKGROUND IMAGE */}
      <img 
        src="/images/about5.png"
        alt="about"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        data-aos="fade-up"
      >
        <Aboutmatter />
      </div>

    </div>
  );
}

export default About;
export { Aboutmatter };


