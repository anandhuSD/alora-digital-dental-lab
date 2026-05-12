import React from "react";

function Doctorsportal() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dp1.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/40 flex flex-col items-center px-4 py-10 sm:px-6 lg:px-12">

        {/* Logo — top center on all screens */}
        <div className="flex justify-center mb-8 lg:hidden">
          <img
            src="/images/logo2.png"
            alt="Alora Logo"
            className="w-36 sm:w-48 h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Main content row */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">

          {/* LEFT SIDE — Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3">

            {/* CONTACT CARD */}
            <div className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl text-white shadow-lg border border-white/20">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
                GET IN TOUCH WITH ALORA
              </h1>
              <div className="space-y-2 text-sm sm:text-base lg:text-lg">
                <p><strong>Customer Care:</strong> 7206426203</p>
                <p><strong>Technical Support:</strong> 7206426205</p>
                <p><strong>Logistics:</strong> 7306428845</p>
                <p><strong>Accountant:</strong> 7306428846</p>
                <p><strong>Email:</strong> aloradigitaldentallab@gmail.com</p>
                <p><strong>Send your case:</strong> aloramodelprinting@gmail.com</p>
              </div>
            </div>

            {/* REQUIRED RECORDS CARD */}
            <div className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl text-white shadow-lg border border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5">
                REQUIRED RECORDS FOR TREATMENT PLAN
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base lg:text-lg">
                <li>Name</li>
                <li>Age</li>
                <li>Any relevant medical or dental history</li>
                <li>Diagnosis</li>
                <li>Tentative treatment plan</li>
                <li>
                  Please mention if any caries or restorations exist on the
                  buccal or labial surface of any teeth
                </li>
                <li>Scanned upper arch, lower arch, and bite registration</li>
                <li>
                  If you are providing upper and lower models, please mark the
                  occlusion at three points or provide a bite registration
                </li>
                <li>Standard extraoral and intraoral photographs</li>
                <li>OPG</li>
              </ol>
            </div>
          </div>

          {/* RIGHT SIDE — Logo (large screens only) */}
          <div className="hidden lg:flex flex-col flex-1 justify-start items-center pt-4">
            <img
              src="/images/logo2.png"
              alt="Alora Logo"
              className="w-64 xl:w-80 h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Doctorsportal;