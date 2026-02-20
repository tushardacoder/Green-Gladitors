export default function TrustedSection() {
  const logos = [
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/SRWYLxwJ/webflow.png",
    "https://i.postimg.cc/mZFY2bpM/Screenshot-2026-02-18-112547.png",
  ];

  return (
    <section className="bg-gray-100 py-20 overflow-hidden w-full">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Trusted by cycling shops <br />
          and riders everywhere
        </h2>

        {/* Full Screen Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                className="h-8 md:h-10 opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}