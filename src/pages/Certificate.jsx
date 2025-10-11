// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";
import CertificateHero from "../components/CertificateHero";

// 🎨 Brand Color Palette
const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
  lightGray: "#f8f8f8",
};

// 🧾 Certificate Data
const certificates = [
  {
    id: 1,
    name: "Udyam Registration 1",
    description:
      "This government-approved certificate recognizes our registration under the MSME sector — reaffirming Kanpur Interior’s dedication to transparency, ethics, and premium craftsmanship.",
    file: "",
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration",
    description:
      "Kanpur Interior proudly holds its Udyam Registration — a mark of verified quality, growth, and excellence in interior design and furnishing. Each piece we create meets the highest standards of artistry and reliability.",
    file: "",
    tag: "MSME Verified",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <CertificateHero />

      {/* Certificates Section */}
      <section
        className="relative w-full py-10 px-6 md:px-16"
        style={{
          background: `linear-gradient(to bottom, ${colors.cream}, ${colors.lightGray})`,
          color: colors.charcoal,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 heading-slab"
            style={{
              color: colors.charcoal,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Verified{" "}
            <span style={{ color: colors.gold }}>Certificates</span>
          </h2>

          <p
            className="max-w-3xl mx-auto text-lg leading-relaxed mb-16"
            style={{
              color: "#6c6c6c",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            At{" "}
            <span style={{ color: colors.maroon, fontWeight: 600 }}>
              Kanpur Interior
            </span>
            , our{" "}
            <span style={{ color: colors.gold, fontWeight: 600 }}>
              certifications
            </span>{" "}
            reflect trust, transparency, and quality. Every document is proof of
            our dedication to{" "}
            <span style={{ color: colors.maroon }}>
              superior workmanship
            </span>{" "}
            and{" "}
            <span style={{ color: colors.gold }}>
              long-lasting design excellence
            </span>
            .
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {certificates.map(({ id, name, description, file, tag }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-white/90 backdrop-blur-sm border border-[#e5e5e5] rounded-3xl shadow-lg hover:shadow-2xl p-8 text-left overflow-hidden"
            >
              {/* Decorative Gradient Line */}
              <div
                className="absolute top-0 left-0 w-full h-2 rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${colors.maroon}, ${colors.gold})`,
                }}
              ></div>

              {/* Tag */}
              <div
                className="absolute top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full shadow"
                style={{
                  background: `linear-gradient(90deg, ${colors.gold}, ${colors.maroon})`,
                  color: colors.cream,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {tag}
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <HiDocumentText
                  className="text-5xl drop-shadow-lg"
                  style={{ color: colors.gold }}
                />
                <h3
                  className="text-2xl font-bold heading-slab"
                  style={{ color: colors.charcoal }}
                >
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: "#555",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${colors.maroon}, ${colors.gold})`,
                    boxShadow: `0 0 15px ${colors.gold}60`,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <FaEye />
                  View Certificate
                </button>

                <a
                  href={file}
                  download
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300"
                  style={{
                    borderColor: colors.gold,
                    color: colors.gold,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.gold;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.gold;
                  }}
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Section */}
      <section
        className="relative text-center text-white py-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.maroon}, ${colors.b8120})`,
        }}
      >
        {/* Subtle overlay glint */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Government Approved",
              text: "All our documents are officially recognized, ensuring full compliance and customer assurance.",
            },
            {
              icon: <FaCheckCircle />,
              title: "100% Authentic",
              text: "Our credentials reflect true craftsmanship and reliable business ethics in every aspect of furnishing.",
            },
            {
              icon: <FaUserTie />,
              title: "Trusted Brand",
              text: "A legacy of elegance, trust, and excellence that makes Kanpur Interior a name synonymous with quality.",
            },
          ].map(({ icon, title, text }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="px-6"
            >
              <div
                className="text-5xl mb-4"
                style={{ color: colors.gold }}
              >
                {icon}
              </div>
              <h3
                className="text-2xl font-semibold mb-3 heading-slab"
                style={{ color: colors.cream }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.cream }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Preview */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
