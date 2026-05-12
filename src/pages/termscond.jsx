import React from "react";

function Termscond() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/dp1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/50 py-10 px-5">

        {/* Heading */}
        <h1 className="text-white text-4xl font-bold text-center mb-10">
          TERMS AND CONDITIONS
        </h1>

        {/* Blur Card */}
        <div className="relative max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 pr-36 md:pr-44 text-white text-lg space-y-3">

          {/* ✅ TOP RIGHT IMAGE */}
          <img
            src="/images/logo2.png"
            alt="Top Decoration"
            className="absolute top-5 right-5 w-20 h-20 md:w-24 md:h-24 object-contain"
          />

          {/* CONTENT */}
          <p>♦ Placed orders cannot be cancelled.</p>
          <p>♦ All charges include tax.</p>
          <p>♦ Rush delivery according to prior appointments.</p>
          <p>♦ Fit of the appliance can be assured only on the working model.</p>
          <p>♦ Any special design / modification should accompany with a drawing.</p>
          <p>♦ Best and accurate model results accurate appliance.</p>
          <p>♦ All PREMIUM quality appliances can be fabricated with color as requested, without any additional charges.</p>
          <p>♦ Any adjustment / repair / repeat of the appliance should accompany with the old appliance.</p>
          <p>♦ No replacement guaranty for any extra oral devices.</p>
          <p>♦ Price of extra oral devices may change according to the price change of the supplier.</p>
          <p>♦ All payment should be made at delivery of appliance.</p>
          <p>♦ Lab is not responsible for fitting due to teeth erupting or non-wearing of appliance.</p>
          <p>♦ Lab is fully responsible for manufacturing defect if it report within 15 days of bill date.</p>
          <p>♦ Postal / Courier / Transportation charges are included (Inside Kerala).</p>

          <p>
            ♦ Payment should be made in advance or at the time of delivery to the clinic by cheque favouring{" "}
            <strong>ALORA Digital Dental Lab</strong>, payable at{" "}
            <strong>Federal Bank</strong>.
          </p>

          {/* ✅ Highlight */}
          <p className="text-green-300 font-semibold">
            ♦ While paying cash, please get receipt from ALORA staff with identity card.
          </p>

          {/* ✅ QR TEXT */}
          <p className="text-green-300 font-semibold">
            ♦ Money can also be transferred via QR Code.
          </p>

          <p>♦ Please send models with proper instruction from doctor.</p>
          <p>♦ Check model accuracy before sending to avoid delay.</p>
          <p>♦ Rush delivery will be charged extra 50%.</p>
          <p>♦ Maximum credit period is one month.</p>

          {/* ✅ QR IMAGE (BOTTOM RIGHT) */}
          <img
            src="/images/qr.png"
            alt="QR Code"
            className="absolute bottom-5 right-5 w-28 h-28 md:w-32 md:h-32 bg-white p-2 rounded-md"
          />

        </div>
      </div>
    </div>
  );
}

export default Termscond;