// src/components/VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const colors = {
  gold: "#C5A46D",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

export default function VisionMission() {
  return (
    <section className="relative py-10 px-6 overflow-hidden bg-[#FDF5E6]">
      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="premiumPattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="60" cy="60" r="2" fill={colors.gold} />
            <path
              d="M60 0 L120 60 L60 120 L0 60 Z"
              stroke={colors.gold}
              strokeWidth="0.4"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#premiumPattern)" />
      </svg>

      {/* Section Header */}
      <div className="relative text-center max-w-5xl mx-auto mb-16 z-10">
        <h3
          className="text-xl uppercase tracking-[6px] mb-3"
          style={{ color: colors.maroon, fontFamily: "'Poppins', sans-serif" }}
        >
          Our Belief
        </h3>
        <h2
          className="text-5xl font-light md:text-6xl font-bold mb-4"
          style={{ color: colors.charcoal, fontFamily: "'Poppins', sans-serif" }}
        >
          Vision <span style={{ color: colors.gold }}>&</span> Mission
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          At Kanpur Interior, every creation is an art — a blend of luxury,
          elegance, and comfort that brings harmony to your space.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Vision */}
        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative bg-white/60 backdrop-blur-lg p-10 rounded-3xl border border-[#C5A46D]/30 shadow-[0_0_25px_rgba(0,0,0,0.08)]"
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(197,164,109,0.3), rgba(128,0,0,0.3))`,
            }}
          ></div>

          <div className="relative flex flex-col items-center text-center z-10">
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.maroon}, ${colors.gold})`,
                color: colors.cream,
              }}
            >
              <FaEye size={38} />
            </div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.charcoal, fontFamily: "'Poppins', sans-serif" }}
            >
              Our Vision
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{
                color: colors.charcoal,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              To be the most trusted interior brand known for our ability to
              transform spaces into stories of sophistication and beauty — where
              every corner speaks of timeless design and personalized luxury.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative bg-white/60 backdrop-blur-lg p-10 rounded-3xl border border-[#C5A46D]/30 shadow-[0_0_25px_rgba(0,0,0,0.08)]"
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(197,164,109,0.3), rgba(128,0,0,0.3))`,
            }}
          ></div>

          <div className="relative flex flex-col items-center text-center z-10">
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.gold}, ${colors.maroon})`,
                color: colors.cream,
              }}
            >
              <FaBullseye size={38} />
            </div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.charcoal, fontFamily: "'Poppins', sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{
                color: colors.charcoal,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              To craft interiors that embody both beauty and purpose — combining
              innovation, sustainability, and artistry to redefine modern living
              with a soul that reflects every client’s essence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
