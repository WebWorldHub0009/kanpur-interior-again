// src/components/CertificateHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import heroBg from "../assets/images/hero/ccbg.jpg"; // replace with actual image

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

const CertificateHero = () => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-end justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left px-6 sm:px-12 md:px-20 pb-16 sm:pb-20"
      >
        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl italic mb-3"
          style={{
            color: colors.cream,
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "1px",
          }}
        >
          Elegance. Excellence. Trust.
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{
            color: colors.gold,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "1.2",
          }}
        >
          Our Certifications <br /> & Standards
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          At <span style={{ color: colors.gold, fontWeight: 600 }}>Kanpur Interior</span>,  
          we blend artistry and precision to deliver interiors that stand for  
          quality, craftsmanship, and timeless beauty.
        </motion.p>

        {/* Golden Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 w-28 h-[3px] rounded-full"
          style={{ backgroundColor: colors.gold }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default CertificateHero;
