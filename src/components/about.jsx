// import React from "react";

// function About() {
//   return (
//     <div className="relative h-screen">

//       <img 
//         src="/images/about1.png"
//         className="absolute w-full h-full object-cover"
//       />
     
//      </div> 
//       );
//       }

//       function Aboutmatter(){
//     return (
//         <div className="items-center relative">
//             <h1 className="items-center text-5xl">ABOUT US</h1>
//             <p>At our dental laboratory, we are committed to delivering high-quality, 
//                 precise, and reliable dental solutions that enhance patient care and satisfaction.
//                  Using advanced technology and skilled craftsmanship, we create crowns, 
//                  bridges, dentures, and custom restorations tailored to each patient’s needs.
//                   Our team works closely with dentists to ensure accuracy, durability, and aesthetics 
//                   in every product. We prioritize hygiene, innovation, and timely delivery to support 
//                   seamless dental treatments. With a focus on excellence and continuous improvement,
//                    our lab strives to provide dependable services that help build confident smiles and long-lasting
//                     oral health for patients.</p>
//         </div>
//     );
// }

//      export default About;
//      export { Aboutmatter };




// import React from "react";


// function Aboutmatter() {
//   return (
//     <div className="text-white text-center max-w-2xl px-6">
      
//       <h1 className="text-5xl font-bold mb-6">
//         ABOUT US
//       </h1>

//       <p className="text-lg leading-relaxed">
//         At our dental laboratory, we are committed to delivering high-quality, 
//         precise, and reliable dental solutions that enhance patient care and satisfaction.
//         Using advanced technology and skilled craftsmanship, we create crowns, bridges, 
//         dentures, and custom restorations tailored to each patient’s needs. Our team works 
//         closely with dentists to ensure accuracy, durability, and aesthetics in every product.
//       </p>

//     </div>
//   );
// }



// function About() {
//   return (
//     <div className="relative h-screen">
//       <img 
//         src="/images/about1.png"
//         alt="about"
//         className="absolute inset-0 w-full h-full h-screen object-cover"
//       />
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <Aboutmatter />
//       </div>

//     </div>
//   );
// }

// export default About;
// export { Aboutmatter };

//***************************************************************************
// this is the code with normal animation aoi animation
// **************************************************************************** */


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


//***************************************************************************
// this is the code with white background and animation.
// **************************************************************************** */

// import React, { useEffect, useRef } from "react";

// function Aboutmatter() {
//   return (
//     <div 
//       className="text-white text-center max-w-2xl px-6"
//     >
      
//       {/* HEADING */}
//       <h1 
//         data-aos="fade-up"
//         className="text-5xl font-bold mb-6"
//       >
//         ABOUT US
//       </h1>

//       {/* PARAGRAPH */}
//       <p 
//         data-aos="fade-up"
//         data-aos-delay="200"
//         className="text-lg leading-relaxed"
//       >
//         At our dental laboratory, we are committed to delivering high-quality, 
//         precise, and reliable dental solutions that enhance patient care and satisfaction.
//         Using advanced technology and skilled craftsmanship, we create crowns, bridges, 
//         dentures, and custom restorations tailored to each patient’s needs. Our team works 
//         closely with dentists to ensure accuracy, durability, and aesthetics in every product.
//       </p>

//     </div>
//   );
// }


// function About() {
//   const bgRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (bgRef.current) {
//         bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative h-screen overflow-hidden">

//       {/* PARALLAX BACKGROUND */}
//       <div
//         ref={bgRef}
//         className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/about1.png')" }}
//       ></div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* CONTENT */}
//       <div className="relative flex items-center justify-center h-full">
//         <Aboutmatter />
//       </div>

//     </div>
//   );
// }

// export default About;
// export { Aboutmatter };



//***************************************************************************
// this is the code with black background and animation.
// **************************************************************************** */

// import React, { useEffect, useRef } from "react";

// function Aboutmatter() {
//   return (
//     <div className="text-white text-center max-w-2xl px-6">
      
//       {/* HEADING */}
//       <h1 
//         data-aos="fade-up"
//         className="text-5xl font-bold mb-6"
//       >
//         ABOUT US
//       </h1>

//       {/* PARAGRAPH */}
//       <p 
//         data-aos="fade-up"
//         data-aos-delay="200"
//         className="text-lg leading-relaxed"
//       >
//         At our dental laboratory, we are committed to delivering high-quality, 
//         precise, and reliable dental solutions that enhance patient care and satisfaction.
//         Using advanced technology and skilled craftsmanship, we create crowns, bridges, 
//         dentures, and custom restorations tailored to each patient’s needs. Our team works 
//         closely with dentists to ensure accuracy, durability, and aesthetics in every product.
//       </p>

//     </div>
//   );
// }


// function About() {
//   const bgRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (bgRef.current) {
//         bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
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
//         style={{ backgroundImage: "url('/images/about1.png')" }}
//       ></div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* CONTENT */}
//       <div className="relative flex items-center justify-center min-h-screen px-4">
//         <Aboutmatter />
//       </div>

//     </div>
//   );
// }

// export default About;
// export { Aboutmatter };


