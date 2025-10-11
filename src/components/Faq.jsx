import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCouch, FaPaintBrush, FaUsers, FaPlus } from "react-icons/fa";

const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",
  gray: "#F3F3F3",
  dark: "#2C2C2C",
  border: "#E0E0E0",
};

const faqCategories = {
  "Our Products": {
    icon: <FaCouch className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "What types of curtains do you offer?",
        answer:
          "We offer premium curtains, customized blinds, wallpapers, and high-quality sofa fabrics crafted to match your interior style.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Yes! Every product can be tailored in color, fabric, and pattern to perfectly suit your home’s aesthetic.",
      },
      {
        question: "Are your products durable?",
        answer:
          "Absolutely. Each piece is made using the finest materials ensuring long-lasting comfort and luxury.",
      },
    ],
  },
  "Process & Quality": {
    icon: <FaPaintBrush className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "How is quality ensured?",
        answer:
          "Every furnishing goes through detailed inspection for stitching, texture, and finishing before it reaches you.",
      },
      {
        question: "Do you offer installation services?",
        answer:
          "Yes, our experts ensure precise installation of curtains, blinds, and wallpapers for a flawless finish.",
      },
      {
        question: "What is the ordering process?",
        answer:
          "Choose your product, confirm customization, and let our team deliver and install it with utmost care.",
      },
    ],
  },
  "Pricing & Support": {
    icon: <FaUsers className="text-2xl" style={{ color: colors.gold }} />,
    faqs: [
      {
        question: "Are your products expensive?",
        answer:
          "We balance luxury and affordability, ensuring every client enjoys premium quality at the right price.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, we offer exclusive rates for interior designers, contractors, and bulk projects. Contact us for a quote.",
      },
      {
        question: "How can I reach customer support?",
        answer:
          "You can contact us via phone, email, or WhatsApp for assistance, design help, and order tracking.",
      },
    ],
  },
};

export default function FAQKanpur() {
  const [activeTab, setActiveTab] = useState("Our Products");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section
      className="relative w-full py-10 px-6 md:px-12 font-[Poppins] overflow-hidden"
      style={{ backgroundColor: colors.gray }}
      aria-labelledby="faq-heading"
    >
      {/* Soft Glow Background */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C5A46D20] blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A46D15] blur-3xl rounded-full" />

      {/* Section Title */}
      <div className="relative text-center mb-16 z-10">
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl mb-4"
          style={{
            fontFamily: "Great Vibes, cursive",
            color: colors.gold,
            letterSpacing: "1px",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-center"
          style={{ color: colors.dark }}
        >
          Explore details about{" "}
          <span style={{ color: colors.gold, fontWeight: "600" }}>
            Kanpur Interior
          </span>{" "}
          and how we bring beauty and elegance into every home.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto shadow-xl rounded-3xl overflow-hidden border border-[#E0E0E0] bg-white/90 backdrop-blur-sm">
        {/* Sidebar Tabs */}
        <div
          className="md:w-1/3 bg-[#F8F8F8] p-6 flex flex-col gap-4 border-r border-[#E0E0E0]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full text-left px-5 py-3 rounded-xl flex items-center gap-3 text-base font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#C5A46D] text-white shadow-lg"
                  : "bg-white text-[#2C2C2C] hover:bg-[#f8f8f8]"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Questions Area */}
        <div className="md:w-2/3 p-8 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#E0E0E0] py-4">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left px-3 py-2 rounded-md hover:bg-[#fdfbf8] transition-all"
                  >
                    <span
                      className="text-lg md:text-xl font-medium"
                      style={{
                        color: colors.dark,
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.gold }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base mt-3 leading-relaxed px-3"
                        style={{ color: colors.dark }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
