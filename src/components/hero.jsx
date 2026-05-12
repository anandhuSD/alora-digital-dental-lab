
// import React, { useEffect, useRef } from "react";

// function Hero() {
//   const bgRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (bgRef.current) {
//         bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">

//       {/* PARALLAX BACKGROUND */}
//       <div
//         ref={bgRef}
//         className="absolute inset-0 w-full h-[110%] bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/img1.jpg')" }}
//       ></div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* CONTENT */}
//       <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">

//         {/* MAIN HEADING */}
//         <h1
//           data-aos="fade-up"
//           className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide sm:tracking-widest font-extralight font-serif leading-tight"
//         >
//           alora digital dental lab
//         </h1>

//         {/* SUB HEADING */}
//         <h2
//           data-aos="fade-up"
//           data-aos-delay="200"
//           className="text-white font-serif mt-3 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl"
//         >
//           boost your conf with better smile
//         </h2>

//         {/* BUTTON */}
//         <a
//           href="#contact"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//           className="mt-5 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white border border-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
//         >
//           contact
//         </a>

//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useEffect, useRef } from "react";

function Hero() {
  const bgRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      
      {/* PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[110%] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img1.jpg')" }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">
        
        {/* MAIN HEADING */}
        <h1
          data-aos="fade-up"
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide sm:tracking-widest font-extralight font-serif leading-tight"
        >
          alora digital dental lab
        </h1>

        {/* SUB HEADING */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white font-serif mt-3 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl"
        >
          boost your conf with better smile
        </h2>

        {/* BUTTON */}
        <a
          href="/doctorsportal"
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-5 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white border border-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
        >
          Doctors Portal
        </a>

      </div>
    </div>
  );
}

export default Hero;