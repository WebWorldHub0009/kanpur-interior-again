import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/images/main/abg.jpg";

// Kanpur Interior Color Palette (Elegant Light Theme)
const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",
  gray: "#F3F3F3",
  dark: "#2C2C2C",
};

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] flex items-end overflow-hidden bg-[#F3F3F3]">
      {/* Background Image */}
      <img
        src={bg}
        alt="About Kanpur Interior"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/60 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl px-6 md:px-16 pb-20 text-left"
      >
        {/* Badge */}
        <span
          className="inline-block mb-4 px-5 py-2 text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-md"
          style={{
            backgroundColor: colors.gold,
            color: colors.white,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Since 2010 • Crafting Elegance
        </span>

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold font-light leading-tight mb-4 text-white"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Welcome to{" "}
          <span className="font-cursive text-[#C5A46D] text-6xl md:text-7xl drop-shadow-lg transition-all duration-300 hover:text-[#b8945d]">
            Kanpur
          </span>{" "}
          <span className="text-[#F3F3F3] font-light">Interior</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-3xl mb-8 text-gray-200"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Transforming homes with{" "}
          <span className="text-[#C5A46D] font-semibold">
            timeless craftsmanship
          </span>
          ,{" "}
          <span className="text-[#F3F3F3]">eco-conscious materials</span>, and
          designs that blend{" "}
          <span className="text-white">luxury with comfort.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/gallery"
            className="px-6 sm:px-8 py-1 sm:py-2 border-2 rounded-full text-sm md:text-base tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              borderColor: colors.gold,
              color: colors.gold,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Explore Gallery
          </Link>

          <Link
            to="/contact"
            className="px-6 sm:px-8 py-1 sm:py-2 rounded-full text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${colors.gold}, ${colors.dark})`,
              color: colors.white,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Book Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
