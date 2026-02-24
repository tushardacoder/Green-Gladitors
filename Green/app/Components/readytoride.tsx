import React from "react";

export default function ReadySection() {
  const logos = [
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">

        {/* Heading */}
        <h1
  className="text-center mb-4 md:mb-6"
  style={{
    color: "var(--Color-Scheme-1-Text, #000)",
    fontFamily: "Unbounded",
    fontSize: "var(--Text-Sizes-Heading-2, 48px)",
    fontWeight: 800,
    lineHeight: "120%",
    letterSpacing: "1.5px",
  }}
>
  Ready to ride together
</h1>

       <p
  className="text-center mb-8 md:mb-10 max-w-2xl mx-auto"
  style={{
    color: "var(--Color-Neutral, #666)",
    fontFamily: "Inter",
    fontSize: "var(--Text-Sizes-Text-Medium, 18px)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  }}
>
  Join verified cyclists exploring new routes every week
</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 md:mb-20">
         <button
  className="w-full sm:w-auto px-9 py-3 transition duration-300 hover:scale-105"
  style={{
    borderRadius: "6px",
    border: "3px solid #00D200",
    background: "#0F0",
    boxShadow: "0 4px 19.8px 0 #FFF inset",

    color: "var(--Color-Scheme-1-Text, #000)",
    fontFamily: "Unbounded",
    fontSize: "var(--Text-Sizes-Text-Regular, 16px)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  }}
>
  Join Now
</button>

          <button className="w-full sm:w-auto px-8 py-3 rounded-md border border-gray-400 text-black hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-10 sm:gap-16 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-80"
            />
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }

          @media (max-width: 640px) {
            .animate-marquee {
              animation: marquee 12s linear infinite;
            }
          }
        `}
      </style>
    </section>
  );
}