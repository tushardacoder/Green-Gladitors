
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 4,
    text: `"I've found mechanics I trust and routes I never would have discovered alone. Green Gladiator made cycling feel less solitary."`,
    name: "Marcus Chen",
    role: "Weekend rider, Sydney",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 2,
    rating: 5,
    text: `"The community rides are amazing. I've met incredible people and improved my skills tremendously."`,
    name: "Sophia Lee",
    role: "Pro cyclist, Melbourne",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 3,
    rating: 4,
    text: `"Best cycling group I've ever joined. The routes are beautiful and well organized."`,
    name: "Daniel Wong",
    role: "City rider, Brisbane",
    image: "https://i.pravatar.cc/100?img=8",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="max-w-8xl mx-auto text-center">

        <p className="text-sm text-gray-500 mb-2">Tagline</p>
        <h2 className="text-5xl font-bold mb-3">Real stories</h2>
        <p className="text-gray-500 mb-12">What members are saying</p>

        <div className="relative bg-[#cfe5cf] rounded-2xl p-12">

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full p-3 shadow hover:bg-green-600 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-2xl ${
                  i < current.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Text */}
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-8 transition-all duration-500">
            {current.text}
          </p>

          {/* Profile */}
          <div className="flex flex-col items-center">
            <img
              src={current.image}
              alt={current.name}
              className="w-14 h-14 rounded-full mb-3"
            />
            <h4 className="font-semibold">{current.name}</h4>
            <p className="text-sm text-gray-600">{current.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}