import React from "react";

export default function ReadySection() {
  const logos = [
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
  ];

  return (
    <section className="bg-gray-100 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
          Ready to ride together
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          Join verified cyclists exploring new routes every week
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <button className="px-8 py-3 rounded-md bg-green-400 text-black font-semibold shadow-lg hover:scale-105 transition duration-300">
            Join Now
          </button>

          <button className="px-8 py-3 rounded-md border border-gray-400 text-black hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-16 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand logo"
              className="h-10 w-auto opacity-80"
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
        `}
      </style>
    </section>
  );
}