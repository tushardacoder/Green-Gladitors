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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 py-16 px-4 md:px-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">FAQ</h2>
        <p className="text-gray-700">
          Questions about membership and how it works
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md divide-y divide-gray-200">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-xl">
                {openIndex === index ?   "v":"^" }
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
        <p className="text-gray-700 mb-4">
          Reach out anytime with membership inquiries
        </p>
        <button className="px-6 py-2 border border-gray-800 rounded hover:bg-gray-100 transition">
          Contact
        </button>
      </div>
    </section>
  );
};

export default FAQ;