"use client";
import { useEffect, useState } from "react";

export default function GroupRide() {
  const eventDate = new Date("2026-02-15T00:00:00");

  // ✅ Fixed date (Feb 28 instead of 29)
  const targetDate = new Date("2026-02-28T00:00:00").getTime();

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((distance / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#cfe5cf] min-h-[80vh] flex items-center py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-sm text-gray-700 mb-6 cursor-pointer hover:underline">
            All events →
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Next group ride
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            Join fellow cyclists for a morning route through coastal roads
            and hidden trails.
          </p>

          {/* Email + Button */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full lg:w-60 px-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <button className="w-full lg:w-40 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Reserve now
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-3 text-center lg:text-left">
            By clicking Reserve now you agree to our Terms and Conditions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center lg:items-end w-full">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center lg:text-right mx-auto">
            {formattedDate}
          </h2>

          {/* Countdown */}
          <div className="bg-[#bfe0bf] rounded-2xl px-6  mx-auto sm:px-8 py-6 flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10 shadow-md w-full sm:w-auto">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Mins" />
            <TimeBox value={timeLeft.seconds} label="Secs" />
          </div>

          <div className="mt-6 mx-auto bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow">
            6 Spots Remaining
          </div>
        </div>

      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="text-center min-w-[60px]">
      <div className="text-3xl sm:text-4xl font-bold">{value}</div>
      <div className="text-xs sm:text-sm text-gray-700 mt-1">{label}</div>
    </div>
  );
}