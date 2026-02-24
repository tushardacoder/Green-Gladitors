import React, { useEffect, useRef, useState } from "react";

export default function MomentsSection() {
  const images = [
    { id: 1, src: "https://i.postimg.cc/sgWTVrr2/9f4e6e6a6884948083fe06632d12176cb4cf8011.jpg" },
    { id: 2, src: "https://i.postimg.cc/Twd0q5W5/2469df8cbe8c1f973e9d368a02f9a8fa731073aa.jpg" },
    { id: 3, src: "https://i.postimg.cc/J7dxZn7h/64288d264687adcecb9332751cde5a357c8a6330-(2).jpg" },
    { id: 4, src: "https://i.postimg.cc/wjDQCQXV/14307fff0b245f9d9c82415014d1c691bff35123.jpg" },
    { id: 5, src: "https://i.postimg.cc/XJYKyMT8/ec29e9df80bfd10a8e1a0e412dc98198a5990f41.jpg" },
    { id: 6, src: "https://i.postimg.cc/7hpSc5bN/c1a952a00b5c4c074c04fd21755b09e1cfd53ab9.jpg" },
    { id: 7, src: "https://i.postimg.cc/xTzvm3FP/1b815b67391ca927cdcd060f43db582bc96b1e8e.jpg" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
         <h2
  className="text-black
  text-center
  font-unbounded
  text-[48px]
  font-bold
  leading-[150%]
  mb-4
  tracking-wide"
>
  Moments on the road
</h2>
          <p
            className="text-[#666]
  text-center
  font-inter
  text-[18px]
  font-normal
  "
          >
            See where our community rides and explores together
          </p>
        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`overflow-hidden rounded-xl break-inside-avoid transform transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }} // stagger effect
            >
              <img
                src={`${img.src}?auto=format&fit=crop&w=800&q=80`}
                alt="Cycling moment"
                className={`w-full object-cover rounded-xl hover:scale-105 transition duration-500 ease-in-out cursor-pointer ${index === 6 ? "h-60" : "h-auto"
                  } `}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}