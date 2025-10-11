// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/main/abg.jpg";
import { Link } from "react-router-dom";

const SecondAbout = () => {
  return (
    <section className="relative w-full py-16 md:py-10  overflow-hidden">
      {/* Soft Gold Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F3F3] via-[#FFFFFF] to-[#F3F3F3] -z-10" />
      <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-[#C5A46D]/10 blur-3xl rounded-full -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light font-bold text-[#2C2C2C] leading-tight">
            Transforming{" "}
            <span className="text-[#C5A46D] font-cursive font-normal">
              Spaces
            </span>{" "}
            into{" "}
            <span className="text-[#2C2C2C] font-cursive font-normal">
              Experiences
            </span>
          </h2>

          <p className="text-[#555] text-lg leading-relaxed">
            At <span className="font-semibold text-[#2C2C2C]">Kanpur Interior</span>,
            we believe your home and workspace should tell your story — refined,
            timeless, and inspired. Our team blends{" "}
            <span className="text-[#C5A46D] font-medium">
              craftsmanship, creativity, and modern luxury
            </span>{" "}
            to design interiors that speak elegance and comfort.
          </p>

          <p className="text-[#555] text-lg leading-relaxed">
            From bespoke furniture to curated decor, we bring harmony to every
            corner. Every project is a journey where{" "}
            <span className="text-[#C5A46D] font-medium">
              sophistication meets functionality
            </span>{" "}
            — creating a lifestyle that feels effortlessly premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#C5A46D] text-white text-sm font-semibold rounded-full shadow-md hover:bg-[#b8945d] transition-all hover:shadow-lg"
            >
              Get Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-[#C5A46D] text-[#C5A46D] text-sm font-semibold rounded-full hover:bg-[#C5A46D] hover:text-white transition-all shadow-sm hover:shadow-md"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-[460px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#E0E0E0]/70">
            <img
              src={aboutImg}
              alt="Kanpur Interior Design Showcase"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md border border-[#E0E0E0] text-[#2C2C2C] px-5 py-3 rounded-xl shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold">
                Since 2010
              </p>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C]">
                15+ Years of Craftsmanship
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondAbout;
