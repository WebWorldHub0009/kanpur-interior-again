import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaInstagram, FaCouch, FaRulerCombined, FaBrush } from "react-icons/fa";
import img1 from "../assets/images/main/h1.jpg";
import img2 from "../assets/images/main/h2.jpg";
import img3 from "../assets/images/main/h3.jpg";

const slides = [
  {
    title: "Kanpur Interior",
    subtitle: "Elegant Interiors & Modern Spaces",
    tagline: "Where style meets comfort",
    image: img1,
  },
  {
    title: "Design with Passion",
    subtitle: "Luxury Interiors for Modern Living",
    tagline: "Transforming your dream into design",
    image: img2,
  },
  {
    title: "Inspired Spaces",
    subtitle: "Classic, Contemporary & Timeless",
    tagline: "Crafting interiors that speak elegance",
    image: img3,
  },
];

const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      ))}
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#2C2C2C] px-4">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-cursive text-5xl sm:text-6xl md:text-7xl tracking-wide text-[#C5A46D]"
        >
          {slides[current].title}
        </motion.h1>

        {/* Gold Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-[#C5A46D] mt-3 rounded-full"
        ></motion.div>

        <motion.h2
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-sans mt-4 text-lg sm:text-xl md:text-2xl text-[#2C2C2C] tracking-wide"
        >
          {slides[current].subtitle}
        </motion.h2>

        <motion.p
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 bg-black px-6 py-2 rounded-xl backdrop-blur-sm shadow text-[#C5A46D] font-cursive text-xl italic"
        >
          {slides[current].tagline}
        </motion.p>

        {/* Small Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mt-6 text-white text-sm sm:text-base leading-relaxed font-sans"
        >
          At <span className="font-cursive text-[#C5A46D] text-lg">Kanpur Interior</span>, we combine
          timeless design aesthetics with modern innovation to craft spaces that truly reflect your
          personality. From luxurious living rooms to elegant commercial interiors, every detail is
          a piece of art.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex gap-4"
        >
        <a
  href="/services"
  className="px-6 sm:px-8 py-3 sm:py-3 border border-[#C5A46D] text-[#C5A46D] rounded-full text-sm font-sans tracking-wide hover:bg-[#C5A46D] hover:text-white transition-all"
>
  Explore Our Work
</a>
<a
  href="/contact"
  className="px-6 sm:px-8 py-3 sm:py-3 bg-[#C5A46D] text-white rounded-full text-sm font-sans tracking-wide hover:bg-[#b8945d] transition-all"
>
  Get Consultation
</a>

        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 flex flex-col items-center text-[#C5A46D]"
        >
          <FaArrowDown size={18} />
          <span className="text-xs mt-1">Scroll</span>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 text-[#C5A46D]"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="font-cursive rotate-90 tracking-widest text-sm mb-8"
        >
          Kanpur Interior
        </motion.div>
        <div className="w-px h-20 bg-[#C5A46D]/40 mb-4"></div>
        <div className="flex flex-col gap-3">
          <a href="#"><FaFacebookF size={18} className="hover:text-[#2C2C2C] transition" /></a>
          <a href="#"><FaInstagram size={18} className="hover:text-[#2C2C2C] transition" /></a>
          <a href="#"><FaLinkedinIn size={18} className="hover:text-[#2C2C2C] transition" /></a>
        </div>
      </motion.div>
    </section>
  );
}
