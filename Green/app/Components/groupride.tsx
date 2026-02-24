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
          <p className="flex items-center gap-2 text-sm text-gray-700 mb-6 cursor-pointer hover:underline">
            All events

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
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Next group ride
          </h1>

          <p
            className="text-[#666]
  font-roboto
  text-[18px]
  font-normal
  leading-[150%]
  mb-8"
          >
            Join fellow cyclists for a morning route through coastal roads
            and hidden trails.
          </p>

          {/* Email + Button */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full lg:w-90 px-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <button
              className="w-full lg:w-40
  bg-[#0F0]
  rounded-[6px]
  shadow-[inset_0_4px_19.8px_0_#FFF]
  text-[var(--Color-Scheme-1-Text,#000)]
  font-inter
  text-[var(--Text-Sizes-Text-Regular,16px)]
  font-medium
  leading-[150%]
  px-3 py-3
  transition-all duration-200
  
hover:brightness-95

hover:shadow-xl
active:translate-y-0 "
            >
              Reserve now
            </button>
          </div>

          <p
            className="text-[#666]
  font-roboto
  text-[12px]
  font-normal
  leading-[150%]
  mt-3
  text-center lg:text-left"
          >
            By clicking Reserve now you agree to our Terms and Conditions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center lg:items-end w-full">

          <h2
            className="text-black
  text-center
  font-unbounded
  text-[32px]
  font-bold
  leading-[220%]
  mb-6 mx-auto"
          >
            {formattedDate}
          </h2>

          {/* Countdown */}
          <div
            className="bg-[#bfe0bf] rounded-2xl px-6 mx-auto sm:px-8 py-6 
  flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10 
  shadow-md w-full sm:w-auto
  text-black
  font-unbounded
  text-[var(--Text-Sizes-Heading-3,40px)]
  font-bold
  leading-[120%]"
          >
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Mins" />
            <TimeBox value={timeLeft.seconds} label="Secs" />
          </div>

          <div
            className="mt-6 mx-auto
  bg-[rgba(0,255,0,0.20)]
  rounded-[4px]
  text-black
  font-inter
  text-[var(--Text-Sizes-Text-Small,14px)]
  font-semibold
  leading-[150%]
  capitalize
  px-5 py-2
  shadow
"
          >
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