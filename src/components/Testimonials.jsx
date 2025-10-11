// src/components/TestimonialSliderKanpur.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

const testimonials = [
  { name: "Anil Mehra", title: "Homeowner, Kanpur", text: "Kanpur Furnishing transformed my living room with elegant curtains and premium sofa fabric. Truly luxurious!" },
  { name: "Simran Kaur", title: "Interior Designer, Kanpur", text: "Their attention to detail and fabric quality is unmatched. My clients loved the stylish home decor pieces!" },
  { name: "Rahul Verma", title: "Café Owner, Kanpur", text: "The blinds and curtains gave my café a warm, cozy feel. Excellent quality and service." },
  { name: "Priya Nair", title: "Architect, Kanpur", text: "Perfect blend of aesthetics and functionality. Every room we styled with Kanpur Furnishing stands out!" },
  { name: "Arvind Sharma", title: "Resort Owner, Rishikesh", text: "Guests are impressed by the premium look and eco-friendly materials. Highly recommend!" },
  { name: "Neha Patel", title: "Teacher, Kanpur", text: "Affordable and high-quality. The products brought elegance and comfort to my classrooms." },
  { name: "Vikram Singh", title: "Homeowner, Kanpur", text: "Loved the customization options. Every curtain fits perfectly and looks stunning!" },
  { name: "Shweta Agarwal", title: "Interior Designer, Kanpur", text: "From wallpapers to blinds, everything screams premium quality and style." },
  { name: "Rohit Bansal", title: "Office Manager, Kanpur", text: "Professional service and top-notch products. Made our office interiors look spectacular." },
  { name: "Ananya Sharma", title: "Blogger, Kanpur", text: "Eco-friendly and elegant furnishing solutions. Totally satisfied with my purchase!" },
];

export default function TestimonialSliderKanpur() {
  return (
    <section className="relative w-full py-10 px-6 md:px-10 font-[Raleway] overflow-hidden ">
      {/* Decorative SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.maroon}
          d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        ></path>
      </svg>

      {/* Glowing Orbs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-[#D4AF3725] blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#80000025] blur-3xl rounded-full animate-pulse" />

      {/* Heading Section */}
      <div className="relative max-w-6xl mx-auto text-center mb-8 z-10">
        <h2
          className="text-4xl fotn-light md:text-5xl font-bold mb-3"
          style={{
            fontFamily: "'Great Vibes'",
            color: colors.maroon,
          }}
        >
          What Our {" "}
          <span
            style={{
              color: colors.gold,
              fontFamily: "'Great Vibes'",
            }}
          >
            Clients Say
          </span>
        </h2>
        <p
          className="italic mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: colors.charcoal }}
        >
          “Bringing luxury and comfort into every corner — trusted by homeowners,
          designers, and creators alike.”
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative backdrop-blur-xl p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                borderColor: colors.gold,
              }}
            >
              {/* Floating Badge */}
              <span
                className="absolute -top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.maroon,
                  color: colors.cream,
                }}
              >
                ★ Verified Client
              </span>

              {/* Quote Icon */}
              <div
                className="flex justify-center items-center mb-6"
                style={{ color: colors.maroon }}
              >
                <FaQuoteLeft className="text-4xl opacity-80" />
              </div>

              {/* Text */}
              <p
                className="text-lg italic leading-relaxed mb-6"
                style={{ color: colors.charcoal }}
              >
                {item.text}
              </p>

              {/* Author Info */}
              <div className="text-center">
                <p
                  className="font-bold text-xl"
                  style={{ color: colors.gold, fontFamily: "Epunda Slab, serif" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.maroon, opacity: 0.8 }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.gold}
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,154.7C672,139,768,117,864,138.7C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
