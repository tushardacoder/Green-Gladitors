"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/1R6m3TGv/Hero-(1).png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top Right Small Text */}
      <div className="absolute top-6 right-6 md:top-10 md:right-16 max-w-xs md:max-w-md text-right text-gray-200 text-xs sm:text-sm md:text-base px-2 md:px-0">
        Join verified riders discovering new routes every week. Green Gladers
        connects cyclists through real experiences and trusted community.
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-20">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-xl md:max-w-3xl">
          Ride Together. Explore More.
          <br />
          Support Cycling.
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition w-full sm:w-auto">
            Join now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition w-full sm:w-auto">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;