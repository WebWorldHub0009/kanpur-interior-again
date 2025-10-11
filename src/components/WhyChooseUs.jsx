// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import statsImage1 from "../assets/images/hero/cur.jpg";
import statsImage2 from "../assets/images/hero/furn.jpg";
import bgPattern from "../assets/images/main/bg.jpg";

import { FaCouch, FaUsers, FaCity, FaDraftingCompass } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Projects Completed",
    value: "150+",
    icon: <FaCouch className="text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C]" />,
  },
  {
    label: "Happy Clients",
    value: "300+",
    icon: <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C]" />,
  },
  {
    label: "Spaces Designed",
    value: "500+",
    icon: <FaCity className="text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C]" />,
  },
  {
    label: "Expert Designers",
    value: "25+",
    icon: <FaDraftingCompass className="text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C]" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat py-12 md:py-10 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFFFFFCC]"></div>

      {/* Watermark */}
      <h1 className="font-cursive absolute text-[6rem] sm:text-[9rem] font-bold text-[#C5A46D15] top-10 left-5 pointer-events-none z-0 uppercase tracking-widest italic hidden sm:block">
        INTERIORS
      </h1>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl tracking-wide italic font-cursive text-[#2C2C2C]">
            Why Choose Kanpur Interior
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Images + Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden md:flex relative w-full justify-center items-center min-h-[480px]"
          >
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: -10 }}
              className="absolute -top-2 left-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-xl transition-all duration-500"
            >
              <img src={statsImage1} alt="Interior Design 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: 10 }}
              className="absolute bottom-4 right-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-xl transition-all duration-500"
            >
              <img src={statsImage2} alt="Interior Design 2" className="w-full h-full object-cover" />
            </motion.div>
            <div className="relative bg-[#FFFFFFCC] backdrop-blur-xl border border-[#C5A46D40] py-6 px-8 rounded-2xl shadow-xl z-20 text-center w-[280px] md:w-[320px]">
              <p className="text-2xl font-semibold mb-2 tracking-wider font-cursive text-[#2C2C2C]">
                Our Craft
              </p>
              <h3 className="text-base font-semibold text-[#41525C] leading-snug tracking-wide font-body">
                We transform spaces into luxurious, functional, and timeless interiors tailored to your lifestyle.
              </h3>
              <Link to="/gallery">
                <button className="cursor-pointer mt-4 px-5 py-2 border border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-[#FFFFFF] transition-all duration-300 text-sm font-semibold rounded-full font-body">
                  View Gallery
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-5xl font-cursive text-[#2C2C2C] mb-6 leading-snug">
              Our <span className="text-[#C5A46D] shimmer">Excellence</span>
            </h2>
            <p className="text-[#748A96] text-base sm:text-lg mb-10 max-w-xl leading-relaxed tracking-wide font-body">
              At Kanpur Interior, we combine creativity, precision, and quality to deliver interiors that inspire, impress, and elevate your everyday living.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="p-3 sm:p-4 bg-[#F5F5F5] rounded-full shadow-md"
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-[#2C2C2C] font-body">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#41525C] tracking-wide uppercase font-body">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .shimmer {
          background: linear-gradient(90deg, #C5A46D, #f3e3b3, #C5A46D);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
