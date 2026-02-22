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
                className={`text-xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ⌄
              </span>
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
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