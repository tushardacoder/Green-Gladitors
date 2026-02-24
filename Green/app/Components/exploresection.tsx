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
              <button className="px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                Explore Trusted Shops
              </button>

              <button className="flex items-center gap-2 hover:underline">
                <span>How it works</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.96289 6.64844C9.86207 6.64844 9.78509 6.67885 9.70703 6.75684C9.62891 6.83496 9.59863 6.91179 9.59863 7.0127C9.59863 7.1136 9.62891 7.19043 9.70703 7.26855L14.4141 11.9756L14.0605 12.3291L9.70703 16.6816C9.62926 16.7594 9.6074 16.8265 9.61035 16.9072C9.61385 17.0012 9.64578 17.0822 9.73145 17.168C9.80952 17.246 9.8865 17.2773 9.9873 17.2773C10.0882 17.2773 10.165 17.2461 10.2432 17.168L15.1875 12.2246C15.2147 12.1974 15.2345 12.1732 15.249 12.1523L15.2783 12.0996C15.2931 12.0641 15.3017 12.0242 15.3018 11.9756C15.3018 11.9513 15.2999 11.9287 15.2959 11.9082L15.2783 11.8506C15.2666 11.8224 15.2417 11.7798 15.1875 11.7256L10.2178 6.75684C10.1398 6.67903 10.0635 6.64851 9.96289 6.64844Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
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
            <button className="flex items-center gap-2 text-sm hover:underline">
              <span>Browse map </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.96289 6.64844C9.86207 6.64844 9.78509 6.67885 9.70703 6.75684C9.62891 6.83496 9.59863 6.91179 9.59863 7.0127C9.59863 7.1136 9.62891 7.19043 9.70703 7.26855L14.4141 11.9756L14.0605 12.3291L9.70703 16.6816C9.62926 16.7594 9.6074 16.8265 9.61035 16.9072C9.61385 17.0012 9.64578 17.0822 9.73145 17.168C9.80952 17.246 9.8865 17.2773 9.9873 17.2773C10.0882 17.2773 10.165 17.2461 10.2432 17.168L15.1875 12.2246C15.2147 12.1974 15.2345 12.1732 15.249 12.1523L15.2783 12.0996C15.2931 12.0641 15.3017 12.0242 15.3018 11.9756C15.3018 11.9513 15.2999 11.9287 15.2959 11.9082L15.2783 11.8506C15.2666 11.8224 15.2417 11.7798 15.1875 11.7256L10.2178 6.75684C10.1398 6.67903 10.0635 6.64851 9.96289 6.64844Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
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
            <button className="flex items-center gap-2 text-sm hover:underline">
              <span>Find location</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.96289 6.64844C9.86207 6.64844 9.78509 6.67885 9.70703 6.75684C9.62891 6.83496 9.59863 6.91179 9.59863 7.0127C9.59863 7.1136 9.62891 7.19043 9.70703 7.26855L14.4141 11.9756L14.0605 12.3291L9.70703 16.6816C9.62926 16.7594 9.6074 16.8265 9.61035 16.9072C9.61385 17.0012 9.64578 17.0822 9.73145 17.168C9.80952 17.246 9.8865 17.2773 9.9873 17.2773C10.0882 17.2773 10.165 17.2461 10.2432 17.168L15.1875 12.2246C15.2147 12.1974 15.2345 12.1732 15.249 12.1523L15.2783 12.0996C15.2931 12.0641 15.3017 12.0242 15.3018 11.9756C15.3018 11.9513 15.2999 11.9287 15.2959 11.9082L15.2783 11.8506C15.2666 11.8224 15.2417 11.7798 15.1875 11.7256L10.2178 6.75684C10.1398 6.67903 10.0635 6.64851 9.96289 6.64844Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
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
            <button className="flex items-center gap-2 text-sm hover:underline">
              <span>See events</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.96289 6.64844C9.86207 6.64844 9.78509 6.67885 9.70703 6.75684C9.62891 6.83496 9.59863 6.91179 9.59863 7.0127C9.59863 7.1136 9.62891 7.19043 9.70703 7.26855L14.4141 11.9756L14.0605 12.3291L9.70703 16.6816C9.62926 16.7594 9.6074 16.8265 9.61035 16.9072C9.61385 17.0012 9.64578 17.0822 9.73145 17.168C9.80952 17.246 9.8865 17.2773 9.9873 17.2773C10.0882 17.2773 10.165 17.2461 10.2432 17.168L15.1875 12.2246C15.2147 12.1974 15.2345 12.1732 15.249 12.1523L15.2783 12.0996C15.2931 12.0641 15.3017 12.0242 15.3018 11.9756C15.3018 11.9513 15.2999 11.9287 15.2959 11.9082L15.2783 11.8506C15.2666 11.8224 15.2417 11.7798 15.1875 11.7256L10.2178 6.75684C10.1398 6.67903 10.0635 6.64851 9.96289 6.64844Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <Store className="text-lime-500 mb-4" size={26} />
            <h3 className="font-semibold text-base mb-2">
              Support local vendors who matter
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Direct access to cycling <br />businesses
            </p>
            <button className="flex items-center gap-2 text-sm hover:underline">
              <span>Explore more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.96289 6.64844C9.86207 6.64844 9.78509 6.67885 9.70703 6.75684C9.62891 6.83496 9.59863 6.91179 9.59863 7.0127C9.59863 7.1136 9.62891 7.19043 9.70703 7.26855L14.4141 11.9756L14.0605 12.3291L9.70703 16.6816C9.62926 16.7594 9.6074 16.8265 9.61035 16.9072C9.61385 17.0012 9.64578 17.0822 9.73145 17.168C9.80952 17.246 9.8865 17.2773 9.9873 17.2773C10.0882 17.2773 10.165 17.2461 10.2432 17.168L15.1875 12.2246C15.2147 12.1974 15.2345 12.1732 15.249 12.1523L15.2783 12.0996C15.2931 12.0641 15.3017 12.0242 15.3018 11.9756C15.3018 11.9513 15.2999 11.9287 15.2959 11.9082L15.2783 11.8506C15.2666 11.8224 15.2417 11.7798 15.1875 11.7256L10.2178 6.75684C10.1398 6.67903 10.0635 6.64851 9.96289 6.64844Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}