import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Service", to: "/#wedo" },
  { label: "Gallery", to: "/gallery" },
  { label: "Doctors Portal", to: "/doctorsportal" },
  { label: "Terms & Conditions", to: "/termscond" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo / Brand (optional placeholder) */}
          <div className="text-white font-bold text-sm tracking-widest uppercase opacity-80">
            Alora
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 lg:gap-10 uppercase tracking-widest text-sm text-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:opacity-60 transition-opacity duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-white text-3xl leading-none focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* MOBILE DROPDOWN — outside nav so it overlays full width cleanly */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">

          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-white text-xl uppercase tracking-widest hover:opacity-60 transition-opacity duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navigation;