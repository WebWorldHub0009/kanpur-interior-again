import React from "react";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero/pbg.jpg"; // background image for Kanpur Interior

// 🎨 Kanpur Interior Brand Palette
const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D", // luxury accent
  gray: "#F3F3F3",
  dark: "#2C2C2C",
  shadow: "#E0E0E0",
  maroon: "#800000",
  cream: "#FDF5E6",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-end justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✨ Luxury Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/60 via-transparent to-transparent z-0"></div>

      {/* 💫 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left px-6 md:px-16 pb-20 max-w-3xl"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl italic tracking-wide mb-2"
          style={{
            color: colors.cream,
            fontFamily: "'Epunda Slab', serif",
          }}
        >
          Redefine Your Living Space
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-4"
          style={{
            color: colors.gold,
            fontFamily: "'Great Vibes', cursive",
            textShadow: "0 0 25px rgba(197, 164, 109, 0.6)",
          }}
        >
          Kanpur Interior Products
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          style={{
            color: colors.gray,
            fontFamily: "'Epunda Slab', serif",
          }}
        >
          Discover a world of{" "}
          <span style={{ color: colors.gold, fontWeight: "600" }}>
            luxury interiors
          </span>
          ,{" "}
          <span style={{ color: colors.maroon, fontWeight: "600" }}>
            bespoke furniture
          </span>
          , and{" "}
          <span style={{ color: colors.cream, fontWeight: "600" }}>
            timeless design
          </span>{" "}
          — where every detail reflects your personal elegance and lifestyle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="px-8 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${colors.maroon}, ${colors.gold})`,
              color: colors.cream,
              fontFamily: "'Epunda Slab', serif",
              boxShadow: `0 0 20px ${colors.gold}40`,
            }}
          >
          Book Now
          </Link>
        
        </motion.div>
      </motion.div>
    </section>
  );
}
