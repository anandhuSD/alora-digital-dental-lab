// import React from "react";

// function Navigation (){
//     return (
//         <nav className= "absolute top-0 right-14 flex gap-16 py-6 text-white uppercase tracking-widest backdrop-blur-md" >
//         <a href="#">home</a>
//         <a href="#">about</a>
//         <a href="#">service</a>
//         <a href="#">gallery</a>
//         </nav>
//     );
// }
// export default Navigation;

import React, { useState } from "react";

import { Link } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-end px-4 sm:px-8 py-4 text-white z-50">

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 uppercase tracking-widest text-sm">
        <Link to="/">home</Link>
        <Link to="/#about">about</Link>
        <a href="/#wedo">service</a>
        <a href="/gallery">gallery</a>
        <a href="/doctorsportal">doctors portal</a>
        <a href="/termscond">terms&condition</a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden text-2xl cursor-pointer">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 uppercase tracking-widest md:hidden">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">service</a>
          <a href="#">gallery</a>
          <a href="#">doctors portal</a>
        </div>
      )}

    </nav>
  );
}

export default Navigation;
