"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#cfe6cf] text-gray-800 pt-16 px-6 lg:px-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Logo + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-lime-600">Green</span> Glaciers
          </h2>

          <p className="text-sm mt-4 text-gray-600">
            Get weekly ride updates and community stories delivered to your inbox.
          </p>

          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-lime-400 hover:bg-lime-500 px-5 py-2 rounded-r-md font-semibold transition">
              Reserve now
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy and only send what matters to cyclists.
          </p>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Join rides</li>
            <li>Find locations</li>
            <li>View events</li>
            <li>Member directory</li>
            <li>Share feedback</li>
          </ul>
        </div>

        {/* For vendors */}
        <div>
          <h3 className="font-semibold mb-4">For vendors</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Advertise here</li>
            <li>Vendor profiles</li>
            <li>Promote services</li>
            <li>Pricing plans</li>
            <li>Contact sales</li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Facebook size={16} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <Youtube size={16} /> YouTube
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Channels */}
      <div className="mt-16">
        <p className="text-sm font-medium mb-4">Payment Channels</p>
        <div className="flex flex-wrap gap-3">
          {[
            "Visa",
            "MasterCard",
            "Amex",
            "PayPal",
            "bKash",
            "Nagad",
            "Rocket",
            "DBBL",
            "City Bank",
            "Brac Bank",
          ].map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-md text-xs font-medium shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <p>© 2026 Glaciers Limited. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:underline cursor-pointer">Privacy policy</span>
          <span className="hover:underline cursor-pointer">Terms of service</span>
          <span className="hover:underline cursor-pointer">Cookie settings</span>
        </div>
      </div>

      <div className="pb-10"></div>
    </footer>
  );
}