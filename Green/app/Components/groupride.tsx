import { useEffect, useState } from "react";

export default function GroupRide() {
  const eventDate = new Date("2026-02-15T00:00:00");
  const targetDate = new Date("2026-02-25T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

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
    <section className="bg-[#cfe5cf] min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <p className="text-sm text-gray-700 mb-6 cursor-pointer hover:underline">
            All events →
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Next group ride
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Join fellow cyclists for a morning route through coastal roads
            and hidden trails.
          </p>

          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="w-72 px-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Reserve now
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            By clicking Reserve now you agree to our Terms and Conditions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start md:items-end">
          <div className="mx-auto">
            <h2 className="text-3xl font-semibold mb-8 ">
              {formattedDate}
            </h2>
          </div>
          <div className="bg-[#bfe0bf] rounded-2xl px-10 py-6 flex gap-12 shadow-md">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Mins" />
            <TimeBox value={timeLeft.seconds} label="Secs" />
          </div>

          <div className="mt-6 bg-green-600 mx-auto text-white text-sm font-medium px-5 py-2 rounded-full shadow">
            6 Spots Remaining
          </div>
        </div>

      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm text-gray-700 mt-1">{label}</div>
    </div>
  );
}