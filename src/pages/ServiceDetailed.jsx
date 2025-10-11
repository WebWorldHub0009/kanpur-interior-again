// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceItems from "./ServiceData";
import Badge from "../components/Badge"
import ServicesSliderKanpur from "../components/ServiceSection";

const colors = {
  primaryWhite: "#FFFFFF",
  luxuryGold: "#C5A46D",
  neutralGray: "#F3F3F3",
  darkGray: "#2C2C2C",
  borderGray: "#E0E0E0",
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceItems.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-300">
        <h2 className="text-3xl font-semibold">Service Not Found</h2>
        <Link
          to="/services"
          className="text-lg mt-4 inline-block text-luxuryGold hover:underline"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
    <section className="bg-darkGray text-primaryWhite min-h-screen py-10 px-6 md:px-12 font-[Poppins] overflow-hidden">
      {/* 🌟 Title & Intro Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: colors.luxuryGold, fontFamily: "Epunda Slab, serif" }}
        >
          {service.title}
        </h1>
        <p
          className="text-2xl md:text-3xl italic mb-6 font-cursive"
          style={{ color: colors.luxuryGold }}
        >
          “{service.quote}”
        </p>
        <p
          className="text-base md:text-lg text-neutralGray leading-relaxed"
        >
          {service.intro}
        </p>
      </motion.div>

      {/* 🖼️ Image & Detail Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-20">
        {/* Left Image with Overlay */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Left Bottom Overlay Text */}
          <div
            className="absolute bottom-5 left-6 bg-black/50 px-6 py-3 rounded-xl backdrop-blur-md border-l-4"
            style={{ borderColor: colors.luxuryGold }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: colors.luxuryGold }}
            >
              {service.section}
            </h3>
          </div>
        </motion.div>

        {/* Right Detailed Description */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="text-2xl md:text-3xl font-semibold mb-2"
            style={{ color: colors.luxuryGold, fontFamily: "Epunda Slab, serif" }}
          >
            {service.section}
          </h3>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: colors.darkGray }}
          >
            {service.detailedDescription}
          </p>
        </motion.div>
      </div>

      {/* 💎 More Content Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center mt-2 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2
          className="text-3xl md:text-4xl  mb-3 font-light "
          style={{ color: colors.luxuryGold, fontFamily: "Epunda Slab, serif" }}
        >
          Beyond Expectations
        </h2>
        <p
          className="text-lg md:text-xl text-neutralGray leading-relaxed"
        >
          {service.moreContent}
        </p>

        {/* Decorative Divider */}
        <div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ backgroundColor: colors.luxuryGold }}
        ></div>
      </motion.div>
    <Badge/>
<ServicesSliderKanpur/>
    </section>
    </>
    
  );
}
