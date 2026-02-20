import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[700px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/1R6m3TGv/Hero-(1).png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Right Small Text */}
      <div className="absolute top-10 right-16 max-w-md text-right text-gray-200 text-sm md:text-base">
        Join verified riders discovering new routes every week. Green Gladers
        connects cyclists through real experiences and trusted community.
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Ride Together. Explore More.
          <br />
          Support Cycling.
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex gap-5">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
            Join now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
