"use client";
import React from "react";

export default function TrustedSection() {
  const logos = [
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
  ];

  return (
    <section className="bg-gray-100 py-14 sm:py-16 md:py-20 overflow-hidden w-full">
      <div className="w-full text-center px-6">
        {/* Heading */}
        <h2
          className="text-[var(--Color-Scheme-1-Text,#000)]
  text-center
  font-unbounded
  text-[32px]
  font-bold
  leading-[150%]
  mb-10 md:mb-12"
        >
          Trusted by cycling shops <br className="hidden sm:block" />
          and riders everywhere
        </h2>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-10 sm:gap-14 md:gap-20 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          @media (max-width: 640px) {
            .animate-marquee {
              animation-duration: 18s;
            }
          }
        `}
      </style>
    </section>
  );
}
