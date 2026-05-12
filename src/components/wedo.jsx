// import React from "react";

// function Wedo() {
//   return (
//     <div className="relative h-screen">

//       <img 
//         src="/images/wedo.png"
//         className="absolute w-full h-full object-cover"
//       />
      
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative flex flex-col  items-center justify-center h-full">
//         <h1 className="text-white text-5xl tracking-widest font-extralight font-serif">
//           WHAT WE DO
//         </h1>
        
//         < a href="#" className="text-white p-4 shadow-lg mix-blend-overlay mask-clip-fill ">contact  </a>
//       </div>

//     </div>
//   );
// }

// export default Wedo;




import React from "react";

const services = [
  {
    title: "Crown & Bridges",
    description: "High-precision ceramic and zirconia restorations crafted for natural aesthetics and long-lasting durability.",
  },
  {
    title: "Implant Solutions",
    description: "Custom abutments and implant-supported prosthetics designed for seamless integration and function.",
  },
  {
    title: "Digital Dentures",
    description: "CAD/CAM fabricated full and partial dentures with superior fit and lifelike appearance.",
  },
  {
    title: "Orthodontic Appliances",
    description: "Retainers, aligners, and functional appliances tailored to each patient's treatment plan.",
  },
  {
    title: "Smile Design",
    description: "Comprehensive aesthetic planning using digital wax-ups and mock-ups for predictable smile transformations.",
  },
  {
    title: "Repairs & Relines",
    description: "Fast turnaround on prosthetic repairs, relines, and adjustments to minimize patient downtime.",
  },
];

function Wedo() {
  return (
    <div id ="wedo" className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="/images/wedo.png"
        className="absolute w-full h-full object-cover"
        alt="Lab background"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative flex flex-col items-center w-full px-8 py-16">
        {/* Heading */}
        <h1 className="text-white text-5xl tracking-widest font-extralight font-serif mb-2">
          WHAT WE DO
        </h1>
        {/* Underline accent */}
        <div className="w-16 h-px bg-white/50 mb-12" />

        {/* 2x3 Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-px w-full max-w-6xl border border-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center px-10 py-12 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              {/* Number */}
              <span className="text-white/30 text-xs tracking-widest mb-4 font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Title */}
              <h2 className="text-white text-xl tracking-widest font-extralight font-serif mb-3 group-hover:text-white/80 transition-colors">
                {service.title}
              </h2>
              {/* Divider */}
              <div className="w-8 h-px bg-white/40 mb-4" />
              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed font-light tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wedo;