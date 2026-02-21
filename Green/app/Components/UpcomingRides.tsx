"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rides = [
  {
    id: 1,
    day: "09",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200",
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
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
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
      "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=1200",
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
      "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=1200",
    location: "Mohammadpur - Uttara 10",
    title: "Coastal morning loop",
    description:
      "Smooth coastal roads with ocean views and a steady pace for all levels",
    distance: "23.25 Km",
    elevation: "4 m",
    time: "1h 50m",
  }
];

export default function UpcomingRides() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const slideWidth = 100; // 100%

  const nextSlide = () => {
    const newIndex = (current + 1) % rides.length;
    setCurrent(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + rides.length) % rides.length;
    setCurrent(newIndex);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-sm text-gray-500 mb-1">Rides</p>
          <h2 className="text-4xl font-bold">Upcoming</h2>
          <p className="text-gray-500 mt-2">
            Pick a ride that fits your pace and join the adventure
          </p>
        </div>

        <button className="bg-lime-400 hover:bg-lime-500 transition px-6 py-2 rounded-lg font-semibold shadow-md">
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

                    <div className="absolute top-4 right-4 bg-lime-400 text-black font-bold px-3 py-1 rounded-lg">
                      {ride.day}
                    </div>

                    <div className="absolute bottom-4 left-4 text-white text-sm space-y-1">
                      <p>Distance {ride.distance}</p>
                      <p>Elev Gain {ride.elevation}</p>
                      <p>Time {ride.time}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      🚴 {ride.location}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      {ride.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {ride.description}
                    </p>
                    <button className="text-black font-semibold">
                      Join the ride →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-lime-400 hover:bg-lime-500 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {rides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                current === index ? "bg-lime-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}