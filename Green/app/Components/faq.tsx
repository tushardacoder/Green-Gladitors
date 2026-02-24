import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does membership cost?",
    answer:
      "A small membership fee keeps the platform running smoothly and ensures quality. You get access to weekly rides, trusted recommendations, and a spam-free community of serious cyclists.",
  },
  {
    question: "Can I post locations and recommendations?",
    answer: "Yes! Members can post locations and recommendations for rides.",
  },
  {
    question: "How do I join a ride?",
    answer: "You can join rides by signing up through our ride schedule and RSVP system.",
  },
  {
    question: "Are vendors welcome here?",
    answer: "Vendors are welcome with proper registration and verification.",
  },
  {
    question: "Is my data secure?",
    answer: "We take data privacy seriously and follow industry best practices.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          FAQ
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Questions about membership and how it works
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg divide-y divide-gray-200">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-sm sm:text-base md:text-lg pr-4">
                {item.question}
              </span>

              {/* Icon */}
              <span
                className={`text-xl transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                  <path d="M7.70215 0.666992C7.82721 0.666992 7.92742 0.704826 8.03418 0.811523L14.627 7.40332C14.7361 7.51254 14.7715 7.61124 14.7715 7.72754C14.7715 7.84385 14.7361 7.94255 14.627 8.05176C14.5229 8.1558 14.4204 8.1962 14.2861 8.19629C14.1516 8.19629 14.0485 8.15592 13.9443 8.05176L13.9434 8.05078L8.17285 2.3125L7.70117 1.84375L1.45996 8.08496C1.35631 8.18862 1.26767 8.21778 1.16016 8.21387C1.03447 8.20927 0.926263 8.1665 0.811523 8.05176C0.707376 7.9476 0.666992 7.84547 0.666992 7.71094C0.667005 7.57643 0.707373 7.47427 0.811523 7.37012L7.37012 0.811523C7.47688 0.704765 7.57711 0.66703 7.70215 0.666992Z" fill="black" stroke="black" stroke-width="1.33333" />
                </svg>
              </span>
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12 sm:mt-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
          Reach out anytime with membership inquiries
        </p>
        <button className="px-6 py-3 border border-gray-800 rounded-md hover:bg-gray-100 transition w-full sm:w-auto">
          Contact
        </button>
      </div>
    </section>
  );
};

export default FAQ;