import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Heading */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 mb-3">Connect</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Get in touch
          </h2>
          <p className="text-gray-500">
            Questions about membership or partnership opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Email */}
          <div>
            <div className="text-green-500 text-3xl mb-6">
              <FiMail />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-gray-500 mb-4">Reach us anytime</p>
            <a
              href="mailto:hello@greengladiator.com"
              className="text-black underline hover:text-green-600 transition"
            >
              hello@greengladiator.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <div className="text-green-500 text-3xl mb-6">
              <FiPhone />
            </div>
            <h3 className="text-2xl font-bold mb-2">Phone</h3>
            <p className="text-gray-500 mb-4">Call during business hours</p>
            <p className="text-black">+61 2 8000 0000</p>
          </div>

          {/* Office */}
          <div>
            <div className="text-green-500 text-3xl mb-6">
              <FiMapPin />
            </div>
            <h3 className="text-2xl font-bold mb-2">Office</h3>
            <p className="text-gray-500 mb-4">
              9:00 AM - 5:00 PM (Friday - Wednesday)
            </p>
            <p className="text-black">
              123 Cycling Lane, Sydney NSW 2000
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;