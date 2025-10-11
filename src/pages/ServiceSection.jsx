import React from "react";
import { motion } from "framer-motion";
import ProductHero from "../components/ProductHero";
import ServicesSliderKanpur from "../components/ServiceSection";
import { Link } from "react-router-dom";

// 🎨 Kanpur Interior Brand Colors
const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",
  gray: "#F3F3F3",
  dark: "#2C2C2C",
  shadow: "#E0E0E0",
  maroon: "#800000",
  cream: "#FDF5E6",
};

const ServiceSection = () => {
  return (
    <>
      {/* 🏠 Hero Section */}
      <ProductHero />

      {/* 💎 Premium Introduction Section */}
      <section
        className="relative py-20 px-6 md:px-16 text-center overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, ${colors.white}, ${colors.gray})`,
        }}
      >
        {/* Background Glow Effects */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-[#C5A46D]/10 blur-3xl rounded-full"
          style={{ transform: "translate(-20%, -20%)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#800000]/10 blur-3xl rounded-full"
          style={{ transform: "translate(20%, 20%)" }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: colors.gold,
              textShadow: "0 0 25px rgba(197, 164, 109, 0.4)",
            }}
          >
            Transform Your Space with Timeless Elegance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl leading-relaxed mb-10"
            style={{
              color: colors.dark,
              fontFamily: "'Epunda Slab', serif",
            }}
          >
            At <span style={{ color: colors.maroon, fontWeight: 600 }}>Kanpur Interior</span>, we create interiors that blend{" "}
            <span style={{ color: colors.gold }}>luxury</span>,{" "}
            <span style={{ color: colors.maroon }}>functionality</span>, and{" "}
            <span style={{ color: colors.dark }}>aesthetic precision</span>.  
            Whether it’s a modern apartment, a royal villa, or a commercial project, 
            our expert designers and craftsmen turn your dream space into a masterpiece.
          </motion.p>

          {/* Elegant Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-32 h-1 mx-auto mb-8 rounded-full"
            style={{ background: colors.maroon }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg leading-relaxed"
            style={{
              fontFamily: "'Epunda Slab', serif",
              color: colors.dark,
            }}
          >
            Our team ensures every corner reflects perfection — from bespoke furniture, 
            modular kitchens, and wardrobe designs to aesthetic lighting, décor, and 
            complete turnkey interior solutions.  
            <span style={{ color: colors.gold }}> Quality, creativity, and craftsmanship </span> 
            are at the heart of everything we do.
          </motion.div>
        </div>
      </section>

      {/* 🪄 Services Slider */}
      <ServicesSliderKanpur />

      {/* ✨ Closing Section */}
      <section
        className="py-20 text-center relative"
        style={{
          background: `linear-gradient(to bottom, ${colors.dark}, #000000)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: colors.gold,
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Let’s Build Something Beautiful Together
          </h3>
          <p
            className="text-lg md:text-xl mb-8"
            style={{
              color: colors.cream,
              fontFamily: "'Epunda Slab', serif'"
            }}
          >
            From concept to creation, Kanpur Interior turns your vision into reality with
            precision, passion, and premium detailing.
          </p>
          <Link
            to="/contact"
            className="px-10 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${colors.maroon}, ${colors.gold})`,
              color: colors.cream,
              fontFamily: "'Epunda Slab', serif",
            }}
          >
            📞 Get in Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default ServiceSection;
