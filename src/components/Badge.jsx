// src/components/WeSecureBadge.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaStar, FaCheckCircle, FaClock, FaCertificate } from "react-icons/fa";

const colors = {
  primaryWhite: "#FFFFFF",
  luxuryGold: "#C5A46D",
  neutralGray: "#F3F3F3",
  darkGray: "#2C2C2C",
  borderGray: "#E0E0E0",
};

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-darkGray py-5 px-6 md:px-16 font-[Poppins] relative overflow-hidden">
      {/* Subtle gold glow particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-2 h-2 bg-luxuryGold rounded-full absolute animate-pulse"
          style={{ top: "10%", left: "15%" }}
        ></div>
        <div
          className="w-2 h-2 bg-luxuryGold rounded-full absolute animate-pulse"
          style={{ top: "40%", left: "70%" }}
        ></div>
        <div
          className="w-2 h-2 bg-luxuryGold rounded-full absolute animate-pulse"
          style={{ top: "70%", left: "30%" }}
        ></div>
      </div>

      <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between border border-[#C5A46D]/40 shadow-lg rounded-2xl px-6 sm:px-12 py-10 backdrop-blur-md relative z-10 gap-8">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-4xl">
          <h3
            className="text-xl sm:text-2xl lg:text-3xl font-cursive font-bold text-luxuryGold tracking-wide flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4"
          >
            <span className="flex items-center gap-1">
              <FaShieldAlt /> Safe
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <FaStar /> Premium Interiors
            </span>
          </h3>

          {/* Static Premium Lines */}
          <p className="text-neutralGray mt-2 text-sm sm:text-base font-raleway leading-relaxed">
            At{" "}
            <span className="font-cursive text-luxuryGold">
              Kanpur Interior
            </span>
            , we deliver interiors that combine{" "}
            <span className="text-luxuryGold font-cursive">
              luxury, elegance, and functionality
            </span>
            . Our bespoke solutions transform your spaces into{" "}
            <span className="text-luxuryGold font-cursive">
              timeless masterpieces
            </span>
            , trusted by discerning homeowners.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mt-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-luxuryGold font-semibold text-sm sm:text-base">
              <FaCheckCircle /> Bespoke Design
            </div>
            <div className="flex items-center gap-2 text-luxuryGold font-semibold text-sm sm:text-base">
              <FaClock /> Timely Delivery
            </div>
            <div className="flex items-center gap-2 text-luxuryGold font-semibold text-sm sm:text-base">
              <FaCertificate /> Certified Experts
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="w-full  flex justify-center lg:justify-end">
          <Link
            to="/contact"
            className="px-6 py-2 text-lg font-cursive rounded-full bg-gradient-to-r from-[#C5A46D] to-[#BFA358] text-darkGray hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
