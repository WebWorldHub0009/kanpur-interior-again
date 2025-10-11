// src/components/PremiumMarquee.jsx
import React from "react";
import {
  FaCouch,
  FaDraftingCompass,
  FaPalette,
  FaSmile,
  FaHome,
  FaRulerCombined,
  FaPaintBrush,
  FaLeaf,
} from "react-icons/fa";

// Marquee items for Peak Interior
const marqueeItems = [
  {
    icon: <FaCouch className="text-base text-[#D49D4D]" />,
    text: "Luxury Furniture & Custom Interiors",
  },
  {
    icon: <FaDraftingCompass className="text-base text-[#748A96]" />,
    text: "Innovative Space Planning & Design",
  },
  {
    icon: <FaPalette className="text-base text-[#41525C]" />,
    text: "Elegant Color & Material Selection",
  },
  {
    icon: <FaSmile className="text-base text-[#D49D4D]" />,
    text: "Client-Centered, Inspired Living",
  },
  {
    icon: <FaHome className="text-base text-[#C5A46D]" />,
    text: "Modern & Smart Home Solutions",
  },
  {
    icon: <FaRulerCombined className="text-base text-[#748A96]" />,
    text: "Precision Measurements & Fitments",
  },
  {
    icon: <FaPaintBrush className="text-base text-[#41525C]" />,
    text: "Artistic Finishes & Wall Treatments",
  },
  {
    icon: <FaLeaf className="text-base text-[#D49D4D]" />,
    text: "Sustainable & Eco-Friendly Materials",
  },
];

const PremiumMarquee = () => {
  return (
    <div className="w-full h-[38px] overflow-hidden bg-[#2B1B0D] text-[#F5E5CC] relative flex items-center">
      {/* Inline keyframes for marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* Actual marquee container */}
      <div className="relative flex items-center">
        <div className="marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-6 text-sm font-cursive1 hover:scale-105 transition-transform duration-300 whitespace-nowrap"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade effect on edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#2B1B0D] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#2B1B0D] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PremiumMarquee;
