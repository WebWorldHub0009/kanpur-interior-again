import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import curtainImg from "../assets/images/hero/cur.jpg";
import smartHomeImg from "../assets/images/hero/cur2.jpg";
import furnitureImg from "../assets/images/hero/furn.jpg";

const colors = {
  gold: "#C5A46D",
  white: "#FFFFFF",
  grayLight: "#F5F5F5",
  darkGray: "#2C2C2C",
};

const WhatWeDo = () => {
  return (
    <section className="relative  py-6 px-6 md:px-16 overflow-hidden">
      {/* Grid Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full "
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M80 0 L0 0 0 80"
              fill="none"
              stroke={colors.gold}
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Top Small Branding */}
      <p
        className=" text-sm md:text-xl text-center mb-2"
        style={{ color: colors.darkGray, fontFamily: "Great Vibes" }}
      >
        Kanpur Interior
      </p>

      {/* Main Heading */}
      <h2
        className="text-4xl md:text-5xl text-center font-bold mb-12 leading-tight"
        style={{ color: colors.darkGray, fontFamily: "'Great Vibes', cursive" }}
      >
        Experience the Elegance of{" "}
        <span style={{ color: colors.gold }}>Premium Interiors</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">
        {/* Left Card - Curtains */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className=" overflow-hidden flex flex-col items-center "
        >
          <img
            src={curtainImg}
            alt="Curtains"
            className="w-80 h-[50vh] object-cover"
          />
          <div className="p-6 text-center">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.gold, fontFamily: "'Great Vibes', cursive" }}
            >
              Curtains
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray, fontFamily: "'Poppins', sans-serif" }}
            >
              Enhance your windows with our premium curtains. Prices vary depending on material, size, and design. Expect anywhere from{" "}
              <span className="text-gold font-semibold">₹500 - ₹5000</span> per pair.
            </p>
          </div>
        </motion.div>

        {/* Middle Card - Smart Homes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className=" overflow-hidden flex flex-col items-center "
        >
          <img
            src={smartHomeImg}
            alt="Smart Homes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3
              className="text-xl font-bold mb-2 "
              style={{ color: colors.gold, fontFamily: "'Great Vibes', cursive" }}
            >
              Smart Homes
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray, fontFamily: "'Poppins', sans-serif" }}
            >
              Elevate your lifestyle with modern, intelligent furnishing solutions tailored for comfort, elegance, and timeless design.
            </p>
          </div>
        </motion.div>

        {/* Right Card - Furniture & Custom Range */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className=" overflow-hidden flex flex-col items-center"
        >
          <img
            src={furnitureImg}
            alt="Custom Furniture"
            className="w-80 h-[50vh] object-cover"
          />
          <div className="p-6 text-center">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.gold, fontFamily: "'Great Vibes', cursive" }}
            >
              Our Product Range
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.darkGray, fontFamily: "'Poppins', sans-serif" }}
            >
              Kanpur Interior offers <span className="text-gold font-semibold">custom furniture</span> and premium home décor services. Can’t find what you need? Let us craft a bespoke piece tailored to your exact specifications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="text-center text-sm md:text-base  leading-relaxed text-[#2C2C2C]  hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          Don’t hesitate — reach out to us for expert help and services.{" "}
          <span className="text-gold font-semibold cursor-pointer underline">
            Book Online
          </span>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;
