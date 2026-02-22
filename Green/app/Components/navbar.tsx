"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%);
backdrop-filter: blur(0px) px-6 md:px-10 py-3 transition-all duration-300 ${
        isSticky ? "fixed top-0 z-50 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <span
            style={{
              color: "#0F0",
              fontFamily: "Syne",
              fontSize: "30px",
              fontWeight: 700,
            }}
            className="mr-1"
          >
            Green
          </span>
          <span
            style={{
              color: "#000",
              fontFamily: "Syne",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Glaiders
          </span>
        </div>

        {/* Desktop Nav (Only Large Screens) */}
        <nav className="hidden lg:flex items-center gap-8 text-black font-medium">
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#" className="hover:text-green-500 transition">About</a>
          <a href="#" className="hover:text-green-500 transition">Membership</a>
          <a href="#" className="hover:text-green-500 transition">Events</a>
          <a href="#" className="hover:text-green-500 transition">Community</a>
        </nav>

        {/* Right Section */}
        <div className="relative flex items-center gap-4">
          {/* Desktop Button */}
          <button className="hidden lg:block bg-gradient-to-r from-green-400 to-green-600 text-black px-4 py-2 rounded-md shadow-md hover:opacity-90 transition">
            Login/Signup
          </button>

          {/* Hamburger (Mobile + Tablet) */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-14 right-0 w-56 bg-slate-200 shadow-lg rounded-md py-5 flex flex-col items-start gap-4 px-6 lg:hidden z-50">
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500">
                Home
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500">
                About
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500">
                Membership
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500">
                Events
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500">
                Community
              </a>

              <button className="mt-2 bg-gradient-to-r from-green-400 to-green-600 text-black px-4 py-2 rounded-md shadow-md w-full">
                Login/Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;