// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

const MapSection = () => {
  return (
    <section className="w-full relative bg-[#faf7f7] py-16 flex flex-col lg:flex-row items-center justify-center shadow-2xl gap-10 px-6 lg:px-20">
      
      {/* Left Panel: Info */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2
          className="text-5xl lg:text-6xl font-bold"
          style={{
            color: colors.maroon,
            fontFamily: "'Great Vibes', cursive",
            borderBottom: `5px solid ${colors.gold}`,
            display: "inline-block",
            paddingBottom: "8px",
          }}
        >
          Visit Us
        </h2>
        <p
          className="text-lg lg:text-xl leading-relaxed"
          style={{ color: colors.charcoal, fontFamily: "'Dancing Script', cursive" }}
        >
          Come see our elegant showroom and explore luxury interiors at <span style={{ color: colors.gold, fontWeight: "600" }}>Kanpur Interior Products</span>.  
          Our expert team is ready to help you design and furnish your perfect space.
        </p>
      </div>

      {/* Right Panel: Map */}
      <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114337.3139505757!2d80.2909261102829!3d26.42215148735866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x399c4129a502be57%3A0x7b0a33f8faaf81a!2s1%2F1c%2C%20G.T.Road%2C%20near%20jugal%20palace%2C%20Netajinagar%2C%20Krishna%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208007!3m2!1d26.4221751!2d80.3733276!5e0!3m2!1sen!2sin!4v1759849466699!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>

        {/* Overlay for premium gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none rounded-3xl" />
      </div>
    </section>
  );
};

export default MapSection;
