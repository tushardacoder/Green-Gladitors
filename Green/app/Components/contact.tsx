import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Heading */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500 mb-3">Connect</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
            Get in touch
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Questions about membership or partnership opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 text-center md:text-left">
          
          {/* Email */}
          <div className="flex flex-col items-start md:items-start">
            <div className="text-green-500 text-2xl sm:text-3xl mb-5">
              <FiMail />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Email</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Reach us anytime
            </p>

            <a
              href="mailto:hello@greengladiator.com"
              className="text-black underline hover:text-green-600 transition break-all"
            >
              hello@greengladiator.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start md:items-start">
            <div className="text-green-500 text-2xl sm:text-3xl mb-5">
              <FiPhone />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Phone</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Call during business hours
            </p>

            <p className="text-black text-sm sm:text-base">
              +61 2 8000 0000
            </p>
          </div>

          {/* Office */}
          <div className="flex flex-col items-start md:items-start">
            <div className="text-green-500 text-2xl sm:text-3xl mb-5">
              <FiMapPin />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Office</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              9:00 AM - 5:00 PM (Friday - Wednesday)
            </p>

            <p className="text-black text-sm sm:text-base">
              123 Cycling Lane, Sydney NSW 2000
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;