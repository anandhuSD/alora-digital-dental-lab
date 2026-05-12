
// function Logo(){
//      return (
//          <img src="/images/logo1.png" alt="logo"
//          className="absolute top-8 left-6 w-60 h-60 object-cover rounded-full"
//          />
//      );
// }
// export default Logo;

import React from "react";

function Logo() {
  return (
    <img
      src="/images/logo1.png"
      alt="logo"
      className="absolute top-4 left-4 w-16 sm:w-20 md:w-28 lg:w-36 h-auto object-contain"
    />
  );
}

export default Logo;