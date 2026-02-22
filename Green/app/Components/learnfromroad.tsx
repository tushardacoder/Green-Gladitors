"use client";
import { useState } from "react";

interface Post {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  avatar: string;
}

const posts: Post[] = [
  {
    id: 1,
    category: "Ride",
    title: "Finding the best gravel routes near you",
    description:
      "Discover hidden gravel paths perfect for weekend adventures",
    image:
      "https://i.postimg.cc/kXXstSPH/857f2822dfa433e00932d193d5ebfa7b192b2917.jpg",
    author: "Alex Turner",
    date: "15 Jan 2024",
    readTime: "6 min read",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    category: "Gear",
    title: "Maintenance tips that keep you riding",
    description:
      "Simple checks and care routines to extend your bike's life",
    image:
      "https://i.postimg.cc/YSgzwfQ3/979e578839fc677d28de8d0f6103907b64121309.jpg",
    author: "Jordan Blake",
    date: "12 Jan 2024",
    readTime: "4 min read",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 3,
    category: "Community",
    title: "How group rides changed my cycling",
    description:
      "Real stories from riders who found their people through Green Gladiator",
    image:
      "https://i.postimg.cc/4y8z18Rj/96d52cd2f301170825685a0f3b0e44f2f1410337.jpg",
    author: "Emma Walsh",
    date: "08 Jan 2024",
    readTime: "7 min read",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
];

export default function LearnFromRoad() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveImage(activeImage === id ? null : id);
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <p className="text-xs sm:text-sm text-gray-500 mb-2">Stories</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Learn from the road
        </h2>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto">
          Tips, routes, and insights from our cycling community
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-left">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div
                onClick={() => handleClick(post.id)}
                className={`overflow-hidden cursor-pointer ${
                  activeImage === post.id ? "scale-105" : ""
                } transition-transform duration-500`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 sm:h-56 md:h-60 w-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  {post.category}
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {post.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
                  />
                  <div className="text-xs sm:text-sm">
                    <p className="font-medium">{post.author}</p>
                    <p className="text-gray-500">
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 sm:mt-16">
          <button className="w-full sm:w-auto border border-gray-400 px-6 sm:px-8 py-3 rounded-md hover:bg-gray-200 transition">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}