import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {

  const XIcon = ({ size = 16, className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.63 7.584H.48l8.6-9.83L0 1.153h7.594l5.243 6.932L18.9 1.153zm-1.292 19.39h2.04L6.486 3.36H4.297l13.312 17.183z" />
    </svg>
  );

  return (
    <footer className="bg-[#CFE3C9] pt-12 sm:pt-14 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-10 ">
      <div className="max-w-7xl mx-auto ">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 ">

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              <span className="text-green-500 mr-3">Green</span>Gliders
            </h2>

            <p className="text-gray-700 mt-4 mb-6 text-sm">
              Get weekly ride updates and community stories delivered to your inbox.
            </p>

            {/* Responsive input */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full lg:flex-1 px-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />

              <button className="w-full lg:w-auto bg-green-500 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Reserve now
              </button>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              We respect your privacy and only send what matters to cyclists.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer">Join rides</li>
              <li className="hover:text-black cursor-pointer">Find locations</li>
              <li className="hover:text-black cursor-pointer">View events</li>
              <li className="hover:text-black cursor-pointer">Member directory</li>
              <li className="hover:text-black cursor-pointer">Share feedback</li>
            </ul>
          </div>

          {/* Vendors */}
          <div>
            <h3 className="font-semibold mb-4">For vendors</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer">Advertise here</li>
              <li className="hover:text-black cursor-pointer">Vendor profiles</li>
              <li className="hover:text-black cursor-pointer">Promote services</li>
              <li className="hover:text-black cursor-pointer">Pricing plans</li>
              <li className="hover:text-black cursor-pointer">Contact sales</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                <Facebook size={16} /> Facebook
              </li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                <Instagram size={16} /> Instagram
              </li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                <XIcon size={16} /> X
              </li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                <Linkedin size={16} /> LinkedIn
              </li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                <Youtube size={16} /> YouTube
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Channels */}
        <div className="mt-12 lg:mt-14">
          <h4 className="text-sm font-medium text-gray-800 mb-4">
            Payment Channels
          </h4>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {[
              { name: "Visa", src: "https://i.postimg.cc/7P0RmX07/c7c052af79df39de56c787154725e89c164864b9.png" },
              { name: "Mastercard", src: "https://i.postimg.cc/jjB8hJjF/79032e9756507b8023aecf01d597d31d2608a62b.png" },
              { name: "bKash", src: "https://i.postimg.cc/520ndmYT/ead701f9f283fabc59b5d4c6627b101aa3c96f1d.png" },
              { name: "Nagad", src: "https://i.postimg.cc/nL92Mc1X/4fc0a513aad0f1aa8e875d72e666b239161b5f72.png" },
              { name: "Rocket", src: "https://i.postimg.cc/nLds8v7t/ff47870dd89c3ae1a988f43c6c64c4dac000014f.png" },
              { name: "Upay", src: "https://i.postimg.cc/s202H3dR/86ca0af12dddc5ea7e18299202bbd5b65e9d604f.jpg" },
              { name: "Tap", src: "https://i.postimg.cc/d0XqmnrQ/deba1380977cdedf97cce47eff3c8fbd68b659aa.jpg" },
              { name: "DBBL", src: "https://i.postimg.cc/ZKy6rDNW/151a1966a66289eaa05139dc4a944b66b2935b26.png" },
              { name: "City Bank", src: "https://i.postimg.cc/WzzwLNt1/475493d947d902d6b3f9a1fe62d4a283a4385a12.png" },
              { name: "Brac Bank", src: "https://i.postimg.cc/dtd4q04y/c0f3422c00903de77ffc5b4c0349dd8cd74f93c1.png" },
              { name: "UCB", src: "https://i.postimg.cc/HW8t2xDx/afb364b4b3ef2c607fa6cb4d9e73e325af53d26f.png" },
              { name: "UCB", src: "https://i.postimg.cc/t4ptpN1g/5c9d82dae878dde3128a19388d23ffc584239220.png" },
              { name: "UCB", src: "https://i.postimg.cc/gchvhT8J/a0fb8616fb857309912886c3915fec83f1db7188.png" },
              { name: "UCB", src: "https://i.postimg.cc/tg764SpL/f7b3e656a522fd0e4eb960ec09f9cd96928733c4.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white px-3 sm:px-4 py-2 rounded-md shadow-sm flex items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-5 sm:h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400/40 mt-8 lg:mt-10 pt-6 
flex flex-col-reverse md:flex-row 
justify-between items-center md:items-start 
text-xs text-gray-700 gap-4">

          {/* Copyright */}
          <p className="underline text-center md:text-left">
            © 2026 Goinnovior Limited. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-col md:flex-row 
  items-center md:items-start 
  gap-3 md:gap-6">

            <span className="underline cursor-pointer">Privacy policy</span>
            <span className="underline cursor-pointer">Terms of service</span>
            <span className="underline cursor-pointer">Cookie settings</span>

          </div>

        </div>

      </div>
    </footer>
  );
}