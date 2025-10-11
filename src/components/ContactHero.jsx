// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactBg from "../assets/images/main/cbg.jpg";

const ContactHero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] flex items-end md:items-end justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactBg}
          alt="Contact Kanpur Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-left md:text-left px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-3xl"
      >
        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-cursive text-[#C5A46D] mb-3"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Get in Touch
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed mb-8">
          Let's bring your dream interiors to life with elegance, craftsmanship, 
          and timeless style. Reach out to our team for inquiries, consultations, 
          or project collaborations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+918299334764"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] text-white px-8 py-3 rounded-full text-base font-medium tracking-wide hover:bg-[#b8945d] transition-all shadow-md"
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>
          <a
            href="mailto:Kanpurinteriorsproducts@gmail.com"
            className="inline-flex items-center justify-center gap-2 border border-[#C5A46D] text-[#C5A46D] px-8 py-3 rounded-full text-base font-medium tracking-wide hover:bg-[#C5A46D] hover:text-white transition-all shadow-md"
          >
            <FaEnvelope className="text-sm" />
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
