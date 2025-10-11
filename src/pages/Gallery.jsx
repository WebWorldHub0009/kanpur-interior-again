// src/components/Showcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

import img1 from "../assets/images/main/g1.avif";
import img2 from "../assets/images/main/g1.jpg";
import img3 from "../assets/images/main/g2.avif";
import img4 from "../assets/images/main/g4.avif";
import img5 from "../assets/images/main/g10.jpg";
import img6 from "../assets/images/main/g11.jpg";
import img7 from "../assets/images/main/g12.jpg";
import img8 from "../assets/images/main/u.jpg";
import img9 from "../assets/images/main/u6.jpg";
import img10 from "../assets/images/main/u8.jpg";
import img11 from "../assets/images/main/u11.jpg";
import img12 from "../assets/images/main/u13.jpg";
import img13 from "../assets/images/main/u14.jpg";
import img14 from "../assets/images/main/u16.jpg";
import img15 from "../assets/images/main/u19.jpg";
// import img16 from "../assets/images/main/u16.jpg";

const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",     // Luxury Gold
  gray: "#F3F3F3",     // Neutral Gray
  dark: "#2C2C2C",     // Dark Gray
  border: "#E0E0E0",   // Subtle Border/Shadow
};

const media = [
  { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 },
  { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 },
  { src: img9 }, { src: img10 }, { src: img11 }, { src: img12 },
  { src: img13 }, { src: img14 }, { src: img15 }, 
];

const Showcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % media.length);

  return (
    <>
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <section
        className="relative px-6 md:px-12 py-8 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, ${colors.white}, ${colors.gray})`,
        }}
      >
        {/* Soft Decorative Glows */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-[#C5A46D]/20 blur-3xl rounded-full"
          style={{ transform: "translate(-20%, -30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#2C2C2C]/10 blur-3xl rounded-full"
          style={{ transform: "translate(20%, 20%)" }}
        />

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16 relative z-10"
        >
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Epunda Slab', serif",
              color: colors.dark,
            }}
          >
            Our Premium{" "}
            <span
              style={{
                color: colors.gold,
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 500,
              }}
            >
              Gallery
            </span>
          </h2>
          <div
            className="w-28 h-1 mx-auto mt-4 rounded-full"
            style={{ background: colors.gold }}
          ></div>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{
              color: colors.dark,
              fontFamily: "'Epunda Slab', serif",
              opacity: 0.8,
            }}
          >
            Discover the world of{" "}
            <span style={{ color: colors.gold, fontWeight: 600 }}>
              Kanpur Interior
            </span>{" "}
            — where artistry meets sophistication. Explore luxury interiors,
            custom furnishings, and timeless designs that elevate every space.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
        >
          {media.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl group"
              onClick={() => openMedia(i)}
              style={{
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.white,
              }}
            >
              <img
                src={item.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                <p
                  className="text-base font-semibold tracking-wide"
                  style={{
                    fontFamily: "'Epunda Slab', serif",
                    color: colors.white,
                  }}
                >
                  Kanpur Interior
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={media[selectedIndex].src}
                  alt="Expanded View"
                  className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
                />

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.dark,
                    color: colors.white,
                    boxShadow: `0 0 20px ${colors.gold}70`,
                  }}
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>

                {/* Prev Button */}
                <button
                  className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.gold,
                    color: colors.dark,
                    boxShadow: `0 0 15px ${colors.gold}70`,
                  }}
                  onClick={prevMedia}
                >
                  <FaArrowLeft />
                </button>

                {/* Next Button */}
                <button
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full transition hover:scale-110"
                  style={{
                    background: colors.gold,
                    color: colors.dark,
                    boxShadow: `0 0 15px ${colors.gold}70`,
                  }}
                  onClick={nextMedia}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Showcase;
