import React from "react";

function Doctorsportal() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/dp1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/40 flex flex-col lg:flex-row items-start gap-10 pt-16 px-10">

        {/* LEFT SIDE (CARDS) */}
        <div className="flex flex-col gap-10">

          {/* CONTACT CARD */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl max-w-xl text-white shadow-lg border border-white/20">
            <h1 className="text-4xl font-bold mb-6">
              GET IN TOUCH WITH ALORA
            </h1>

            <div className="space-y-2 text-lg">
              <p><strong>Customer Care:</strong> 7206426203</p>
              <p><strong>Technical Support:</strong> 7206426205</p>
              <p><strong>Logistics:</strong> 7306428845</p>
              <p><strong>Accountant:</strong> 7306428846</p>
              <p><strong>Email:</strong> aloradigitaldentallab@gmail.com</p>

              {/* NEW LINE ADDED */}
              <p>
                <strong>Send your case:</strong> aloramodelprinting@gmail.com
              </p>
            </div>
          </div>

          {/* REQUIRED RECORDS CARD */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl max-w-2xl text-white shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold mb-6">
              REQUIRED RECORDS FOR TREATMENT PLAN
            </h2>

            <ol className="list-decimal pl-5 space-y-2 text-lg">
              <li>Name</li>
              <li>Age</li>
              <li>Any relevant medical or dental history</li>
              <li>Diagnosis</li>
              <li>Tentative treatment plan</li>
              <li>
                Please mention if any caries or restorations exist on the buccal or labial surface of any teeth
              </li>
              <li>Scanned upper arch, lower arch, and bite registration</li>
              <li>
                If you are providing upper and lower models, please mark the occlusion at three points or provide a bite registration
              </li>
              <li>Standard extraoral and intraoral photographs</li>
              <li>OPG</li>
            </ol>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img
            src="/images/logo2.png"  
            alt="Dental Illustration"
            className="w-[400px] h-auto rounded-2x1 shadow-2xl object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Doctorsportal;