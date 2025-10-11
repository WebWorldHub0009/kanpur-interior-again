import React from "react";
import imgLeft from "../assets/images/main/hh1.jpg";
import imgRight from "../assets/images/main/hh2.jpg";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  accentGray: "#748A96",
};

const OurStory = () => {
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl font-light leading-snug mb-6"
            style={{ color: colors.darkGray, fontFamily: "'Great Vibes', cursive" }}
          >
            Vision with Purpose & <br />
            The Craft of{" "}
            <span style={{ color: colors.gold, fontFamily: "'Poppins', sans-serif" }}>
              Kanpur Interior
            </span>
          </h2>

          {/* Content */}
          <p
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: colors.darkGray, fontFamily: "'Poppins', sans-serif" }}
          >
            Established with a passion for redefining spaces, Kanpur Interior blends timeless design with modern execution. Our philosophy transforms ordinary rooms into luxurious, functional experiences.
          </p>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: colors.darkGray, fontFamily: "'Poppins', sans-serif" }}
          >
            Every project harmonizes aesthetics, comfort, and innovation — creating spaces that reflect your unique lifestyle.
          </p>

          {/* Small Image */}
          <div className="mt-8 w-[250px]">
            <img
              src={imgLeft}
              alt="Kanpur Interior Story"
              className="w-full object-cover rounded-xl shadow-xl border border-[#2C2C2C]/20"
            />
          </div>
        </div>

        {/* Right Large Image with Caption Below */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Kanpur Interior Work"
            className="w-full h-auto object-cover rounded-xl shadow-xl border border-[#2C2C2C]/20"
          />
          <p
            className="mt-4 text-sm md:text-base italic"
            style={{ color: colors.accentGray, fontFamily: "'Poppins', sans-serif" }}
          >
            At Kanpur Interior, design is more than aesthetics — it’s about crafting environments where elegance, purpose, and functionality coexist perfectly.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-[#748A96]/40 mt-12"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#748A96]/30 text-center mt-12">
        <div className="py-6 px-6">
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkGray, fontFamily: "'Great Vibes', cursive" }}
          >
            10+
          </h3>
          <p
            className="mt-2 text-sm md:text-base leading-relaxed"
            style={{ color: colors.accentGray, fontFamily: "'Poppins', sans-serif" }}
          >
            Years of Innovation <br />
            Transforming spaces with elegance and functionality.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkGray, fontFamily: "'Great Vibes', cursive" }}
          >
            150+
          </h3>
          <p
            className="mt-2 text-sm md:text-base leading-relaxed"
            style={{ color: colors.accentGray, fontFamily: "'Poppins', sans-serif" }}
          >
            Happy Clients <br />
            Trusted across families and businesses in the region.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkGray, fontFamily: "'Great Vibes', cursive" }}
          >
            100+
          </h3>
          <p
            className="mt-2 text-sm md:text-base leading-relaxed"
            style={{ color: colors.accentGray, fontFamily: "'Poppins', sans-serif" }}
          >
            Projects Completed <br />
            Each design tailored to reflect unique lifestyles & goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
