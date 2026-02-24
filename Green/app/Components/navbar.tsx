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
      className={`w-full px-4 md:px-10 py-3 transition-all duration-300
      bg-white/10 backdrop-blur-lg border-b border-white/20
      ${isSticky ? "fixed top-0 z-50 shadow-lg" : "absolute top-0 z-50"}`}
    >
      <div className="flex items-center justify-between relative">

        {/* LEFT SECTION (Mobile Hamburger / Desktop Logo) */}
        <div className="flex items-center gap-4">

          {/* Hamburger (Mobile + Tablet) */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </div>

          {/* Logo */}
          <div className="text-xl font-semibold lg:ml-8">
            <span
              style={{
                color: "#0F0",
                fontFamily: "Syne",
                fontSize: "28px",
                fontWeight: 700,
              }}
              className="mr-2"
            >
              Green
            </span>
            <span
              style={{
                color: "#000",
                fontFamily: "Syne",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              Glaiders
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 
  text-[var(--Color-Scheme-1-Text,#000)] 
  font-normal 
  text-[var(--Text-Sizes-Text-Regular,16px)] 
  leading-[150%] 
  font-unbounded"
        >
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#" className="hover:text-green-500 transition">About</a>
          <a href="#" className="hover:text-green-500 transition">Membership</a>
          <a href="#" className="hover:text-green-500 transition">Events</a>
          <a href="#" className="hover:text-green-500 transition">Community</a>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* Desktop Button */}
          <button
            className="hidden lg:block 
      bg-gradient-to-r from-green-400 to-green-600 
      text-[var(--Color-Scheme-1-Text,#000)] 
      font-unbounded 
      text-[var(--Text-Sizes-Text-Regular,16px)] 
      font-normal 
      leading-[150%] 
      px-4 py-2 rounded-md 
      shadow-md hover:opacity-90 transition"
          >
            Login/Signup
          </button>

          {/* Mobile Join Button */}
          <button
            className="lg:hidden 
      bg-green-500 
      text-[var(--Color-Scheme-1-Text,#000)] 
      font-unbounded 
      text-[var(--Text-Sizes-Text-Regular,16px)] 
      font-normal 
      leading-[150%] 
      px-3 py-1.5 rounded-md 
      shadow"
          >
            Join
          </button>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className="absolute top-14 left-0 w-full 
    bg-slate-200 shadow-lg rounded-md 
    py-6 flex flex-col items-start gap-4 px-6 
    lg:hidden z-50
    font-unbounded 
    text-[var(--Text-Sizes-Text-Regular,16px)] 
    font-normal 
    leading-[150%] 
    text-[var(--Color-Scheme-1-Text,#000)]"
          >
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">
              Home
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">
              About
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">
              Membership
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">
              Events
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition">
              Community
            </a>

            <button
              className="mt-2 bg-gradient-to-r from-green-400 to-green-600 
      px-4 py-2 rounded-md shadow-md w-full 
      hover:opacity-90 transition"
            >
              Login/Signup
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;