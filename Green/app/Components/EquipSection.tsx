"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [

  {
    
    id: 1,
    image:
      "https://i.postimg.cc/8CmHLrM2/f004c3bc4dde543d6f629503829a8c70bb3774af.jpg",
    title: "Lightweight jersey",
    category: "Red",
    price: "৳1,279.00",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/5t4vdKQP/f308443df4e5b3885215abbc859e6ef9319b06c7.jpg",
    title: "Cycling shorts",
    category: "Padded",
    price: "৳1,179.00",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/N0dXg81Y/61dee7b11adeacc0d7be26330604daa9f6377c0c.jpg",
    title: "Water bottle",
    category: "Padded",
    price: "৳879.00",
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/VNKtY9jB/a88dcc29ff68b95a160bf722e4d919218aaa6a74.jpg",
    title: "Bike lock",
    category: "U-lock",
    price: "৳460.00",
  },
  {
    
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000",
    title: "Lightweight jersey",
    category: "Red",
    price: "৳1,279.00",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000",
    title: "Cycling shorts",
    category: "Padded",
    price: "৳1,179.00",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1000",
    title: "Water bottle",
    category: "Padded",
    price: "৳879.00",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1000",
    title: "Bike lock",
    category: "U-lock",
    price: "৳460.00",
  },
  
];

export default function EquipmentSection() {
  const [current, setCurrent] = useState(0);

  const itemsPerView = 4; // desktop
  const maxSlide = products.length - itemsPerView;

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Essentials</p>
          <h2 className="text-4xl font-bold">Equipment</h2>
          <p className="text-gray-500 mt-2">
            Everything you need from vendors we trust
          </p>
        </div>

        <button className="border px-5 py-2 rounded-lg hover:bg-gray-200 transition">
          Shop all
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-full sm:min-w-[50%] lg:min-w-[25%] p-4"
              >
                <div className="bg-white rounded-xl overflow-hidden group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.category}
                    </p>
                    <p className="mt-2 font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-8">
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
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
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