import React from "react";

function Termscond() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dp1.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/50 py-10 px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          TERMS AND CONDITIONS
        </h1>

        {/* Card */}
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-5 sm:p-8 text-white">

          {/* Top row: Logo + Title */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <p className="text-base sm:text-lg font-semibold opacity-80 leading-snug">
              Please read all terms carefully before placing an order.
            </p>
            <img
              src="/images/logo2.png"
              alt="Alora Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
            />
          </div>

          {/* Terms List */}
          <ul className="space-y-2 text-sm sm:text-base lg:text-lg">
            <li>♦ Placed orders cannot be cancelled.</li>
            <li>♦ All charges include tax.</li>
            <li>♦ Rush delivery according to prior appointments.</li>
            <li>♦ Fit of the appliance can be assured only on the working model.</li>
            <li>♦ Any special design / modification should accompany with a drawing.</li>
            <li>♦ Best and accurate model results accurate appliance.</li>
            <li>♦ All PREMIUM quality appliances can be fabricated with color as requested, without any additional charges.</li>
            <li>♦ Any adjustment / repair / repeat of the appliance should accompany with the old appliance.</li>
            <li>♦ No replacement guaranty for any extra oral devices.</li>
            <li>♦ Price of extra oral devices may change according to the price change of the supplier.</li>
            <li>♦ All payment should be made at delivery of appliance.</li>
            <li>♦ Lab is not responsible for fitting due to teeth erupting or non-wearing of appliance.</li>
            <li>♦ Lab is fully responsible for manufacturing defect if it report within 15 days of bill date.</li>
            <li>♦ Postal / Courier / Transportation charges are included (Inside Kerala).</li>
            <li>
              ♦ Payment should be made in advance or at the time of delivery to the clinic by cheque favouring{" "}
              <strong>ALORA Digital Dental Lab</strong>, payable at{" "}
              <strong>Federal Bank</strong>.
            </li>
            <li className="text-green-300 font-semibold">
              ♦ While paying cash, please get receipt from ALORA staff with identity card.
            </li>
            <li className="text-green-300 font-semibold">
              ♦ Money can also be transferred via QR Code.
            </li>
            <li>♦ Please send models with proper instruction from doctor.</li>
            <li>♦ Check model accuracy before sending to avoid delay.</li>
            <li>♦ Rush delivery will be charged extra 50%.</li>
            <li>♦ Maximum credit period is one month.</li>
          </ul>

          {/* QR Code — bottom, responsive */}
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            <p className="text-green-300 font-semibold text-sm sm:text-base text-center sm:text-left">
              Scan the QR code to make a payment instantly.
            </p>
            <img
              src="/images/qr.png"
              alt="QR Code"
              className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-2 rounded-md flex-shrink-0"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Termscond;