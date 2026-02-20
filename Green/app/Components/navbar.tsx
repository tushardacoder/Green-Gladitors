import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // adjust scroll offset
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full bg-slate-200 px-10 py-3 transition-all duration-300 ${isSticky ? "fixed top-0 z-50 shadow-lg" : ""
                }`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-semibold">
                    <span style={{
                        color: "#0F0",
                        fontFamily: "Syne",
                        fontSize: "30.934px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                    }} className="mr-2">Green</span>
                    <span style={{
                        color: "#000",
                        fontFamily: "Syne",
                        fontSize: "30.934px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                    }}>Glaiders</span>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
                    <a href="#" className="hover:text-green-500 transition font-unbounded text-base font-normal leading-[150%] text-black">
                        Home
                    </a>
                    <a href="#" className="hover:text-green-500 transition font-unbounded text-base font-normal leading-[150%] text-black">
                        About
                    </a>
                    <a href="#" className="hover:text-green-500 transition font-unbounded text-base font-normal leading-[150%] text-black">
                        Membership
                    </a>
                    <a href="#" className="hover:text-green-500 transition font-unbounded text-base font-normal leading-[150%] text-black">
                        Events
                    </a>
                    <a href="#" className="hover:text-green-500 transition">
                        Community
                    </a>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-5">
                    <button className="bg-gradient-to-r from-green-400 to-green-600 text-black font-medium px-4 py-2 rounded-md shadow-md hover:opacity-90 transition font-unbounded font-normal leading-[150%] text-[var(--Text-Sizes-Text-Regular)] text-[color:var(--Color-Scheme-1-Text)]">
                        Login/Signup
                    </button>

                    {/* Hamburger Icon */}
                    <div className="text-2xl cursor-pointer">☰</div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
