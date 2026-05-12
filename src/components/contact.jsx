// import React from "react";

// function Contact() {
//   return (
//     <div className="relative h-screen">

//       <img 
//         src="/images/contact.png"
//         className="absolute w-full h-full object-cover"
//       />


//     </div>
//   );
// }

// export default Contact;

//********************************************************************************
//claud ai
// **************************************************************************** */
// import React, { useState } from "react";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(form); // you can send this to backend later

//     setSubmitted(true);
//     setForm({ name: "", phone: "", email: "", message: "" });

//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   const phoneNumber = "+91 99999 99999";

//   return (
//     <div className="relative min-h-screen">
//       {/* Background Image */}
//       <img
//         src="/images/contact.png"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         alt="Contact background"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

//       {/* Content */}
//       <div className="relative flex flex-col justify-center min-h-screen px-6 md:px-16 py-20 max-w-lg">
        
//         {/* Heading */}
//         <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-2 font-light">
//           Get In Touch
//         </p>

//         <h1 className="text-white text-4xl md:text-5xl tracking-widest font-extralight font-serif mb-2">
//           CONTACT
//         </h1>

//         <div className="w-12 h-px bg-white/40 mb-10" />

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//           {/* Name */}
//           <div>
//             <label className="text-white/50 text-xs tracking-widest uppercase">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="John Doe"
//               className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder-white/20 focus:outline-none focus:border-white/70 transition"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-white/50 text-xs tracking-widest uppercase">
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               placeholder="+91 00000 00000"
//               className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder-white/20 focus:outline-none focus:border-white/70 transition"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-white/50 text-xs tracking-widest uppercase">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="you@example.com"
//               className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder-white/20 focus:outline-none focus:border-white/70 transition"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-white/50 text-xs tracking-widest uppercase">
//               Message
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows={3}
//               placeholder="How can we help you?"
//               className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder-white/20 focus:outline-none focus:border-white/70 transition resize-none"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="mt-4 w-full border border-white/40 text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-white hover:text-black transition-all duration-300"
//           >
//             {submitted ? "✓ Message Sent" : "Send Message"}
//           </button>
//         </form>

//         {/* Contact Info */}
//         <div className="mt-10 pt-6 border-t border-white/10">
//           <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
//             Direct Line
//           </p>

//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="block text-white text-lg tracking-widest font-extralight font-serif hover:text-white/70 transition"
//           >
//             {phoneNumber}
//           </a>

//           {/* Email */}
//           <a
//             href="mailto:you@example.com"
//             className="block mt-2 text-white/70 text-sm tracking-widest hover:text-white"
//           >
//             you@example.com
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


//********************************************************************************
//chat gpt
// **************************************************************************** */

// import React from "react";

// function Contact() {
//   return (
//     <div id = "contact" className="relative h-screen ">

//       {/* BACKGROUND IMAGE */}
//       <img 
//         src="/images/contact.png"
//         alt="contact"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* CONTACT SECTION */}
//       <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 text-gray-300 w-[90%] sm:w-full max-w-md">

//         {/* HEADING */}
//         <h1 className="text-4xl font-bold mb-4">Contact</h1>

//         {/* MOBILE NUMBER */}
//         <p className="mb-6 text-lg">
//           Mobile: <span className="font-semibold">8086574839</span>
//         </p>

//         {/* FORM */}
//         <form className="space-y-4">

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 rounded bg-gray-400 text-black outline-none"
//           />

//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             className="w-full p-3 rounded bg-gray-400 text-black outline-none"
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 rounded bg-gray-400 text-black outline-none"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="w-full p-3 rounded bg-gray-400 text-black outline-none"
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-gray-200 hover:bg-gray-200 px-6 py-2 rounded text-black font-semibold"
//           >
//             Send Message
//           </button>

//         </form>
//       </div>

//     </div>
//   );
// }

// export default Contact;
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