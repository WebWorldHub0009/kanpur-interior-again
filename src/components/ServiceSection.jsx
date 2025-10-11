// src/components/ServicesSliderKanpur.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaLayerGroup,
  FaCogs,
  FaHome,
  FaAngleDoubleUp,
  FaLightbulb,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

// Images for each service
import int from "../assets/images/main/interior.jpg";
import kit from "../assets/images/main/kit.jpg";
import fur from "../assets/images/main/fur.jpg";
import fals from "../assets/images/main/false.jpg";
import space from "../assets/images/main/space.jpg";
import house from "../assets/images/main/home.jpg"
import tur from "../assets/images/main/tur.jpg"

const colors = {
  primaryWhite: "#FFFFFF",
  luxuryGold: "#C5A46D",
  neutralGray: "#F3F3F3",
  darkGray: "#2C2C2C",
  borderShadow: "#E0E0E0",
};

const serviceItems = [
  { title: "Luxury Interior Design", slug: "luxury-interior-design", icon: FaLayerGroup, img: int },
  { title: "Modular Kitchens & Wardrobes", slug: "modular-kitchens-wardrobes", icon: FaCogs, img: kit },
  { title: "Home Renovation", slug: "home-renovation", icon: FaHome, img: house },
  { title: "Custom Furniture & Decor", slug: "custom-furniture-decor", icon: FaAngleDoubleUp, img: fur },
  { title: "Lighting & False Ceiling", slug: "lighting-false-ceiling", icon: FaLightbulb, img: fals },
  { title: "Space Planning", slug: "space-planning", icon: FaLayerGroup, img: space },
  { title: "Turnkey Interior Solutions", slug: "turnkey-interior-solutions", icon: FaCogs, img: tur },
];

export default function ServicesSliderKanpur() {
  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Heading */}
        <div className="col-span-1">
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight mb-6"
            style={{ fontFamily: "'Epunda', cursive", color: colors.darkGray }}
          >
            OUR PREMIUM <br />
            <span
              className="italic relative"
              style={{ color: colors.luxuryGold, fontFamily: "'Great Vibes', cursive" }}
            >
              SERVICES
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#C5A46D]" />
            </span>
            <br />
            THAT DEFINE ELEGANCE
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ fontFamily: "'Epunda Slab', serif", color: colors.darkGray }}
          >
            Kanpur Interior offers bespoke interior solutions blending 
            <span style={{ color: colors.luxuryGold }}> creativity</span>, 
            <span style={{ color: colors.darkGray }}> functionality</span>, and 
            <span style={{ color: colors.luxuryGold }}> style</span> for your dream spaces.
          </p>
        </div>

        {/* Right Slider */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {serviceItems.map((service, index) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={index}>
                  <Link to={`/services/${service.slug}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-[#E0E0E0]">
                      <div className="h-[220px] md:h-[260px] overflow-hidden rounded-t-xl">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3
                          className="text-xl md:text-2xl font-bold mb-2"
                          style={{ fontFamily: "'Epunda Slab', serif", color: colors.darkGray }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-sm md:text-base font-body text-[#2C2C2C] leading-snug"
                        >
                          Premium interior solutions designed to elevate your living spaces.
                        </p>
                      </div>
                      <div className="absolute bottom-4 right-4 text-3xl font-bold text-[#C5A46D] opacity-20">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
