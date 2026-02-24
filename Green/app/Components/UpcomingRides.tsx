"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

const rides = [
  {
    id: 1,
    day: "09",
    image:
      "https://i.postimg.cc/J7dxZn7h/64288d264687adcecb9332751cde5a357c8a6330_(2).jpg",
    location: "Mohammadpur - Uttara 10",
    title: "Coastal morning loop",
    description:
      "Smooth coastal roads with ocean views and a steady pace for all levels",
    distance: "23.25 Km",
    elevation: "4 m",
    time: "1h 50m",
  },
  {
    id: 2,
    day: "10",
    image:
      "https://i.postimg.cc/sXhLw37d/c27e5219337e620817d2725d9669c42e7c72b562_(1).jpg",
    location: "Mohammadpur - Uttara 10",
    title: "Coastal morning loop",
    description:
      "Smooth coastal roads with ocean views and a steady pace for all levels",
    distance: "23.25 Km",
    elevation: "4 m",
    time: "1h 50m",
  },
  {
    id: 3,
    day: "11",
    image:
      "https://i.postimg.cc/bJMNGfrf/b827c741d31626a778a42737f672d8f2c9b80d51.jpg",
    location: "Mohammadpur - Uttara 10",
    title: "Coastal morning loop",
    description:
      "Smooth coastal roads with ocean views and a steady pace for all levels",
    distance: "23.25 Km",
    elevation: "4 m",
    time: "1h 50m",
  },
  {
    id: 4,
    day: "12",
    image:
      "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=1200",
    location: "Mohammadpur - Uttara 10",
    title: "Coastal morning loop",
    description:
      "Smooth coastal roads with ocean views and a steady pace for all levels",
    distance: "23.25 Km",
    elevation: "4 m",
    time: "1h 50m",
  },
];

export default function UpcomingRides() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);

  const slideWidth = 100;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % rides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + rides.length) % rides.length);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Rides</p>
          <h2 className="text-4xl font-bold">Upcoming</h2>
          <p className="text-gray-500 mt-2">
            Pick a ride that fits your pace and join the adventure
          </p>
        </div>

        {/* Desktop Button */}
        <button
          className="flex items-center gap-3 text-black font-semibold px-6 py-3 transition duration-300 hover:scale-105 hidden lg:block"
          style={{
            borderRadius: "6px",
            border: "3px solid #00D200",
            background: "#0F0",
            boxShadow: "0 4px 19.8px 0 #FFF inset",
          }}
        >
          Join the ride
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * slideWidth}%)`,
            }}
          >
            {rides.map((ride) => (
              <div
                key={ride.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-4"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={ride.image}
                      alt={ride.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute top-4 right-4 bg-white text-lime-400 font-bold px-3 py-1 rounded-lg">
                      {ride.day}
                    </div>

                    <div className="absolute bottom-4 left-4 text-white text-sm flex flex-col lg:flex-row gap-4 lg:gap-10">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Distance</span>
                        <span>{ride.distance}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Elev Gain</span>
                        <span>{ride.elevation}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Time</span>
                        <span>{ride.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_2256_132)" filter="url(#filter0_i_2256_132)">
                          <path d="M10.0461 9.2692L8.55638 8.28514C8.94331 7.90341 8.93971 7.90698 9.62574 7.23015L8.62038 5.10595L10.411 7.22862C10.5675 7.41407 10.8088 7.51342 11.0566 7.48488L13.9738 7.15021C14.3771 7.10394 14.6665 6.73951 14.6203 6.33629C14.574 5.93303 14.2102 5.64365 13.8063 5.68988L11.2806 5.97965L9.74393 4.15811L11.2309 5.2003C11.2339 4.92665 11.1352 4.65172 10.9333 4.43715L9.62445 3.04627C9.41724 2.82606 9.12821 2.70126 8.82583 2.70142C8.52345 2.70157 8.23458 2.82669 8.02757 3.04709L4.88772 6.39066C4.38882 6.92194 4.50059 7.77176 5.10667 8.16081L5.59136 8.47196L4.42358 8.47067C4.08351 8.47067 3.80779 8.74638 3.80779 9.08646C3.80779 9.42654 4.08347 9.70226 4.42358 9.70226H5.25614L4.6995 10.7595C4.37755 10.6674 4.03774 10.618 3.68659 10.618C1.65376 10.6179 0 12.2717 0 14.3045C0 16.3373 1.65376 17.9911 3.68655 17.9911C5.29259 17.9911 6.66178 16.9587 7.166 15.5228C6.96255 15.4966 6.77417 15.4343 6.59773 15.3363C5.83153 14.9106 5.5575 13.94 5.98112 13.1776C6.32057 12.5666 6.13219 12.9057 7.09879 11.166L6.81524 10.4822H7.40203H7.42023L5.75801 8.57887C7.61687 9.7721 7.01689 9.38218 8.39231 10.2908L6.59793 13.5202C6.36136 13.946 6.51474 14.4829 6.94051 14.7195C7.36648 14.9562 7.90335 14.8025 8.13981 14.3769L10.3309 10.4334C10.5548 10.0306 10.4307 9.52323 10.0461 9.2692ZM5.45211 11.069L5.86011 10.2941L6.57358 12.0147C6.26752 11.6296 5.88626 11.3069 5.45211 11.069Z" fill="#00FF00" />
                          <path d="M10.5405 1.98071C10.4812 2.44501 10.6223 2.93114 10.9681 3.29862C11.5821 3.95106 12.6087 3.98226 13.2612 3.36831C13.4007 3.23704 13.5115 3.08679 13.594 2.92547C13.553 2.91591 13.5124 2.90476 13.4726 2.89012C12.8478 2.66036 12.1903 2.47033 11.6101 2.30266C11.2155 2.18867 10.8584 2.08543 10.5405 1.98071Z" fill="#00FF00" />
                          <path d="M13.752 2.12982C13.7757 2.13851 13.8004 2.14281 13.825 2.14281C13.8614 2.14281 13.8975 2.13346 13.9298 2.11498C13.9839 2.08401 14.0216 2.03066 14.0327 1.96927C14.095 1.62281 14.1306 1.22742 13.9497 0.934556C13.5536 0.29355 13.0096 0.00878906 12.0291 0.00878906C11.8439 0.00878906 11.6429 0.0189675 11.4245 0.0388154C11.2873 0.0513036 11.1526 0.0557273 11.0223 0.0557273C10.7018 0.0557273 10.4083 0.0288719 10.171 0.0288719C9.87758 0.0288719 9.67017 0.0699379 9.60437 0.25358C9.31264 1.06766 11.5999 1.33833 13.752 2.12982Z" fill="#00FF00" />
                          <path d="M14.3133 10.6179C14.049 10.6179 13.7911 10.6461 13.5424 10.6993L12.6592 8.04077L11.8368 8.13512L12.0775 8.85967L10.7621 8.96822C10.9246 9.15637 11.0416 9.38139 11.1019 9.62782C11.1119 9.66873 11.1198 9.70988 11.1266 9.7511L11.6102 9.71117L11.1304 10.2362C11.1028 10.4239 11.0417 10.6067 10.9475 10.7761L9.72656 12.9735L12.453 9.98982L12.7737 10.9552C11.5076 11.5395 10.6267 12.821 10.6267 14.3045C10.6267 16.3372 12.2805 17.991 14.3133 17.991C16.3461 17.991 17.9999 16.3372 17.9999 14.3045C17.9999 12.2717 16.3461 10.6179 14.3133 10.6179ZM14.3133 17.0098C12.8217 17.0098 11.608 15.7962 11.608 14.3045C11.608 13.2546 12.2097 12.3431 13.0859 11.895L13.9289 14.4322C13.9853 14.6022 14.1435 14.7097 14.3132 14.7097C14.3556 14.7097 14.3987 14.703 14.4411 14.6889C14.6533 14.6184 14.7683 14.3891 14.6977 14.1768L13.8546 11.639C14.0038 11.6134 14.1569 11.5993 14.3133 11.5993C15.805 11.5993 17.0185 12.8128 17.0185 14.3045C17.0185 15.7962 15.805 17.0098 14.3133 17.0098Z" fill="#00FF00" />
                        </g>
                        <defs>
                          <filter id="filter0_i_2256_132" x="0" y="0" width="18" height="19.3846" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1.38462" />
                            <feGaussianBlur stdDeviation="0.692308" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2256_132" />
                          </filter>
                          <clipPath id="clip0_2256_132">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>{ride.location}</span>
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      {ride.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {ride.description}
                    </p>
                    <button className="flex items-center gap-3 text-black font-semibold">
                      <span>Join the ride</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                      >
                        <path
                          d="M0.864746 0.5C0.763922 0.5 0.686947 0.530412 0.608887 0.608398C0.530762 0.686523 0.500488 0.763353 0.500488 0.864258C0.50049 0.965159 0.530764 1.04199 0.608887 1.12012L5.31592 5.82715L4.9624 6.18066L0.608887 10.5332C0.531116 10.611 0.509256 10.6781 0.512207 10.7588C0.515708 10.8528 0.547634 10.9337 0.633301 11.0195C0.711375 11.0976 0.788357 11.1289 0.88916 11.1289C0.990064 11.1289 1.06689 11.0977 1.14502 11.0195L6.08936 6.07617C6.11651 6.04901 6.13638 6.02479 6.15088 6.00391L6.18018 5.95117C6.19499 5.91564 6.20357 5.87579 6.20361 5.82715C6.20361 5.80282 6.20175 5.78025 6.19775 5.75977L6.18018 5.70215C6.16846 5.67399 6.14352 5.63131 6.08936 5.57715L1.11963 0.608398C1.0417 0.530589 0.965335 0.500077 0.864746 0.5Z"
                          fill="black"
                          stroke="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition" >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center transition"
            style={{
              borderRadius: "50px",
              border: "1px solid #0F0",
              background: "#0F0",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.10) inset",
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {rides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${current === index ? "bg-lime-500" : "bg-gray-300"
                }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile + Tablet Button */}
      <div className="mt-10 lg:hidden">
        <button className="w-full bg-lime-400 hover:bg-lime-500 transition px-6 py-3 rounded-lg font-semibold shadow-md">
          Join the ride
        </button>
      </div>
    </section>
  );
}