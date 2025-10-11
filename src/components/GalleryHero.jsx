// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
import bg from "../assets/images/main/g1.jpg";

const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",        // Luxury Gold
  gray: "#F3F3F3",        // Neutral Gray
  dark: "#2C2C2C",        // Dark Gray
  border: "#E0E0E0",      // Soft border / shadow tone
};

export default function GalleryHero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-end justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#2C2C2C]/50 to-transparent z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left px-6 md:px-16 pb-16 md:pb-20 max-w-3xl"
      >
        

        {/* Subheading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl md:text-2xl tracking-wide"
          style={{
            color: colors.white,
            fontFamily: "'Epunda Slab', serif",
          }}
        >
          Explore Our Premium Collection
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-2 text-4xl md:text-6xl font-bold font-cursive"
          style={{
            color: colors.gold,
            textShadow: "0 0 20px rgba(197,164,109,0.4)",
          }}
        >
          Kanpur Interior Gallery
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{
            color: colors.gray,
            fontFamily: "'Epunda Slab', serif",
          }}
        >
          A curated collection of luxurious interiors, custom furniture,
          and elegant textures that redefine modern sophistication with
          timeless craftsmanship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+918299334764"
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.dark})`,
              color: colors.white,
              fontFamily: "'Epunda Slab', serif",
            }}
          >
            Call Now
          </a>

          <a
            href="mailto:Kanpurinteriorsproducts@gmail.com"
            className="px-8 py-3 rounded-full text-lg font-semibold border transition-all duration-300  hover:text-[#2C2C2C]"
            style={{
              borderColor: colors.gold,
              color: colors.gold,
              fontFamily: "'Epunda Slab', serif",
            }}
          >
            Email Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
