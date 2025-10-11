// src/components/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCouch,
  FaPaintRoller,
  FaLayerGroup,
  FaHandHoldingHeart,
} from "react-icons/fa";

const colors = {
  maroon: "#800000",
  gold: "#C5A46D",
  cream: "#FAF7F2",
  dark: "#1C1C1C",
  white: "#FFFFFF",
};

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We start by understanding your interior goals, lifestyle, and design taste — ensuring every detail reflects your vision.",
    icon: <FaHandHoldingHeart size={30} />,
  },
  {
    id: 2,
    title: "Concept & Design",
    description:
      "Our experts craft mood boards and 3D visualizations, curating materials and finishes tailored to your space.",
    icon: <FaLayerGroup size={30} />,
  },
  {
    id: 3,
    title: "Craft & Execution",
    description:
      "From furniture to decor and detailing, every piece is handcrafted with precision and delivered with perfection.",
    icon: <FaCouch size={30} />,
  },
  {
    id: 4,
    title: "Final Touch",
    description:
      "We refine and style your interiors to perfection — giving your home that Kanpur Interior signature elegance.",
    icon: <FaPaintRoller size={30} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-8 overflow-hidden ">
      {/* Decorative SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="patternLux"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M90 0 L180 90 L90 180 L0 90 Z"
              stroke={colors.gold}
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#patternLux)" />
      </svg>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 px-6">
        <h3
          className="text-xl tracking-[6px] uppercase mb-2"
          style={{ color: colors.maroon, fontFamily: "'Poppins', sans-serif" }}
        >
          The Process
        </h3>

        <h2
          className="text-5xl font-light md:text-6xl font-bold mb-3"
          style={{ color: colors.dark, fontFamily: "'Poppins', sans-serif" }}
        >
          How{" "}
          <span
            className="text-[#C5A46D] font-cursive"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Kanpur Interior
          </span>{" "}
          Works
        </h2>

        <p
          className="max-w-3xl mx-auto text-gray-700 text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          A seamless, four-step journey that brings luxury, precision, and
          personality into every corner of your home.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative p-8 rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.08)] border border-[#C5A46D]/30 backdrop-blur-md bg-white/70 hover:bg-white hover:shadow-[0_8px_30px_rgba(197,164,109,0.3)] transition-all duration-500"
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, rgba(197,164,109,0.15), rgba(128,0,0,0.15))`,
              }}
            ></div>

            {/* Icon */}
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-md"
              style={{
                background: `linear-gradient(135deg, ${colors.gold}, ${colors.maroon})`,
                color: colors.white,
              }}
            >
              {step.icon}
            </div>

            {/* Step Number */}
            <span
              className="absolute top-6 right-8 text-5xl font-bold opacity-10"
              style={{ color: colors.maroon }}
            >
              0{step.id}
            </span>

            {/* Title */}
            <h3
              className="relative z-10 text-xl font-semibold mb-3"
              style={{ color: colors.dark, fontFamily: "'Poppins', sans-serif" }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="relative z-10 text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          background: `linear-gradient(to top, ${colors.gold}, transparent)`,
          opacity: 0.15,
        }}
      ></div>
    </section>
  );
}
