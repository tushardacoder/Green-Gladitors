import React from "react";
import { UserPlus, CheckCircle, Bike, ChevronRight } from "lucide-react";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus size={48} />,
      title: "Sign up as a member",
      desc: "Register with secure payment",
    },
    {
      number: "02",
      icon: <CheckCircle size={48} />,
      title: "Complete your profile",
      desc: "Tell us about your cycling style",
    },
    {
      number: "03",
      icon: <Bike size={48} />,
      title: "Join rides and share",
      desc: "Post locations and engage",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <p className="text-sm text-green-600 font-medium mb-2 sm:mb-3">
            Getting started is simple
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Three easy steps to join our vibrant cycling community
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Three easy steps to join our vibrant cycling community and start your journey
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-md 
              hover:shadow-xl hover:border-green-500 border 
              transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 bg-black text-white text-lg sm:text-xl font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="text-green-500 mb-5 sm:mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]
                group-hover:scale-110 
                group-hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.9)]
                transition-all duration-300 flex justify-center"
              >
                {step.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center sm:text-left group-hover:text-green-600 transition">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 text-center sm:text-left">
                {step.desc}
              </p>

              <div className="flex justify-center sm:justify-start">
                <button className="flex items-center gap-2 font-medium text-green-500 group-hover:text-green-600 transition">
                  Get Started <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress */}
        <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 text-gray-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Ready to ride?
          </div>

          <div className="hidden sm:block h-[2px] w-24 bg-green-400"></div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Join the community
          </div>

          <div className="hidden sm:block h-[2px] w-24 bg-green-400"></div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Start exploring
          </div>
        </div>

      </div>
    </section>
  );
}