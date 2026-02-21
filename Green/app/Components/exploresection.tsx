"use client";
import { Crown, MapPin, Play, Store } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm text-gray-500 mb-2">Explore</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover new routes <br /> with fellow riders
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-5 gap-6">

        {/* LEFT LARGE CARD */}
        <div className="lg:col-span-3 bg-[#cfe6cf] rounded-2xl overflow-hidden flex flex-col justify-between">

          <div className="p-8">
            <p className="text-sm text-gray-700 mb-3">Find</p>

            <h3 className="text-2xl font-bold mb-4">
              Community-recommended shops and mechanics
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              What makes Green Gladiator different from other cycling groups
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <button className="bg-white px-5 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
                Explore Trusted Shops
              </button>

              <button className="hover:underline">
                How it works →
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="h-72">
            <img
              src="https://i.postimg.cc/sXhLw37d/c27e5219337e620817d2725d9669c42e7c72b562_(1).jpg"
              alt="Cycling community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SMALLER CARDS */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <Crown className="text-lime-500 mb-4" size={26} />
            <h3 className="font-semibold text-base mb-2">
              Stay updated on upcoming rides and meetups
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Weekly tours
            </p>
            <button className="text-sm hover:underline">
              Browse map →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <MapPin className="text-lime-500 mb-4" size={26} />
            <h3 className="font-semibold text-base mb-2">
              Reach active cyclists in your area
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Trusted locations
            </p>
            <button className="text-sm hover:underline">
              Find location →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <Play className="text-lime-500 mb-4" size={26} />
            <h3 className="font-semibold text-base mb-2">
              Ride every week with your community
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Find mechanics and shops you can trust
            </p>
            <button className="text-sm hover:underline">
              See events →
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <Store className="text-lime-500 mb-4" size={26} />
            <h3 className="font-semibold text-base mb-2">
              Support local vendors who matter
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Direct access to cycling businesses
            </p>
            <button className="text-sm hover:underline">
              Explore more →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}