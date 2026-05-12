// import React from 'react'
// import button from './components/button'  
// const App = () => {
//   return (
//     <div>
//       <button/>
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import Button from './components/button'

// const App = () => {
//   return (
//     <div>
//       <Button />
//     </div>
//   )
// }

// export default App



// import React from "react";
// import Hero from "./components/hero";
// import Logo from "./components/logo";
// import Navigation from "./components/navigation";
// import About from "./components/about";
// import { Aboutmatter } from "./components/about";
// function App() {
//   return (
//   <div>
//     <Hero />
    
//     <Logo />
//     <Navigation />
//     <About />
//     < Aboutmatter />
//   </div>
//   );
// }

// export default App;

//***************************************************************************
// this is the code with normal animation.aoi animation 
// **************************************************************************** */

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Hero from "./components/hero";
// import Logo from "./components/logo";
// import Navigation from "./components/navigation";
// import About from "./components/about";
// import { Aboutmatter } from "./components/about";

// function App() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);

//   return (
//     <div>
//       <Hero />
//       <Logo />
//       <Navigation />
//       <About />
//       <Aboutmatter />
//     </div>
//   );
// }

// export default App;



//***************************************************************************
// this is the code with black background and animation.
// **************************************************************************** */

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Hero from "./components/hero";
// import Logo from "./components/logo";
// import Navigation from "./components/navigation";
// import About from "./components/about";
// import Wedo from "./components/wedo";
// import Contact from "./components/contact";
// import Gallery from "./pages/gallery";

// function App() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);

//   return (
//     <div className="overflow-x-hidden bg-black min-h-screen">
//       <Hero />
//       <Logo />
//       <Navigation />
//       <About />
//       <Wedo />
//       <Contact />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/navigation";

// scroll components
import Hero from "./components/hero";
import Logo from "./components/logo";
import About from "./components/about";
import Wedo from "./components/wedo";
import Contact from "./components/contact";

// pages
import Gallery from "./pages/gallery";
import Doctorsportal from "./pages/doctorsportal";
import Info from "./components/info";
import Termscond from "./pages/termscond";


// ✅ Scroll handler
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}


// ✅ Navbar ONLY on Home Page
function ConditionalNavbar() {
  const location = useLocation();

  // Show navbar ONLY for "/"
  if (location.pathname !== "/") {
    return null;
  }

  return <Navigation />;
}


// ✅ Home Page
function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black min-h-screen scroll-smooth">
      <Hero />
      <Logo />
      <About />
      <Wedo />
      <Contact />
      <Info />
    </div>
  );
}


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToSection />

      {/* ✅ Navbar only on Home */}
      <ConditionalNavbar />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doctorsportal" element={<Doctorsportal />} />
        <Route path="/termscond" element={<Termscond />} />
      </Routes>
    </Router>
  );
}

export default App;