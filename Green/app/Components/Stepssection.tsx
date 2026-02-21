import React from "react";
import { UserPlus, CheckCircle, Bike, ChevronRight } from "lucide-react";

export default function StepsSection() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 font-medium mb-3">
            Getting started is simple
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three easy steps to join our vibrant cycling community
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Three easy steps to join our vibrant cycling community and start your journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* STEP CARD */}
          {[
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
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-10 shadow-md 
              hover:shadow-xl hover:border-green-500 border 
              transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 left-8 bg-black text-white text-xl font-bold px-4 py-2 rounded-2xl shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-green-500 mb-6 
              drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]
              group-hover:scale-110 
              group-hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.9)]
              transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition">
                {step.title}
              </h3>

              <p className="text-gray-500 mb-6">
                {step.desc}
              </p>

              <button className="flex items-center gap-2 font-medium 
              group-hover:text-green-600 transition">
                Get Started <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Progress */}
        <div className="mt-20 flex justify-center items-center gap-16 text-gray-600">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Ready to ride?
          </div>

          <div className="h-[2px] w-24 bg-green-400"></div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Join the community
          </div>

          <div className="h-[2px] w-24 bg-green-400"></div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Start exploring
          </div>
        </div>

      </div>
    </section>
  );
}