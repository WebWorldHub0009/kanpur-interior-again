// src/components/FooterKanpur.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaCogs,
  FaAngleDoubleUp,
  FaLightbulb,
  FaCertificate,
  FaClipboardList,
  FaImage,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/images/main/bg.jpg"; 

const colors = {
  gold: "#C5A46D", // Luxury Gold
  maroon: "#800000", // Headings
  black: "#000000", // Text
  borderGray: "#E0E0E0", // Borders / shadows
};

// Services array
const serviceItems = [
  { title: "Luxury Interior Design", slug: "luxury-interior-design", icon: FaLayerGroup },
  { title: "Modular Kitchens & Wardrobes", slug: "modular-kitchens-wardrobes", icon: FaCogs },
  { title: "Home Renovation", slug: "home-renovation", icon: FaHome },
  { title: "Custom Furniture & Decor", slug: "custom-furniture-decor", icon: FaAngleDoubleUp },
  { title: "Lighting & False Ceiling", slug: "lighting-false-ceiling", icon: FaLightbulb },
  { title: "Space Planning", slug: "space-planning", icon: FaLayerGroup },
  { title: "Turnkey Interior Solutions", slug: "turnkey-interior-solutions", icon: FaCogs },
];

export default function FooterKanpur() {
  return (
    <footer
      className="relative pt-20 pb-16 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "'Epunda Slab', serif" }}
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <p
            className="text-3xl md:text-4xl font-bold tracking-wide font-cursive"
            style={{ color: colors.maroon }}
          >
            Kanpur Interiors
          </p>
          <p className="leading-relaxed text-black text-base mt-2">
            Premium interior solutions crafted with sophistication and elegance. 
            From luxury interior design to modular kitchens — redefining interiors with comfort and style.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://api.whatsapp.com/send/?phone=918299334764&text=Hello%20Kanpur%20Interiors", FaWhatsapp]
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#C5A46D] text-[#000000] transition duration-300 shadow-lg`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Email CTA */}
          <div className="mt-5">
            <a
              href="mailto:Kanpurinteriorsproducts@gmail.com"
              className="inline-flex items-center gap-2 bg-[#C5A46D] text-[#000000] px-4 py-2 rounded-lg font-semibold hover:bg-[#800000] hover:text-[#F3F3F3] transition duration-300 shadow-md"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaLayerGroup />],
               ["Gallery", "/gallery", <FaImage />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Privacy Policy", "/privacy-policy", <FaClipboardList />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-black hover:text-[#C5A46D] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-2xl font-semibold mb-2" style={{ color: colors.maroon }}>
              Email
            </h4>
            <a
              href="mailto:Kanpurinteriorsproducts@gmail.com"
              className="text-black hover:text-[#C5A46D] transition duration-300"
            >
              Kanpurinteriorsproducts@gmail.com
            </a>
            
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Services
          </h4>
          <ul className="space-y-3">
            {serviceItems.map(({ title, slug, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon style={{ color: colors.gold }} />
                <Link
                  to={`/services/${slug}`}
                  className="text-black hover:text-[#C5A46D] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-3xl font-semibold mb-4" style={{ color: colors.maroon }}>
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-black">
            C/o Of Shakuntala Niwas, House No. 8/59 Ground Floor,
            <br />
            Nearby Anjaneya Crystal, GT Road, Krishna Nagar,
            <br />
            Kanpur, Uttar Pradesh 208007
          </address>

          {["+91 8299334764"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2 text-black">
              <FaPhoneAlt style={{ color: colors.gold }} />
              <a
                href={`tel:${num.replace(/\s/g, "")}`}
                className="hover:text-[#C5A46D] transition duration-300"
              >
                {num}
              </a>
            </p>
          ))}

          <div className="mt-4">
            <div>

            <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-2 text-center text-sm border-t border-[#E0E0E0]/40 pt-6 relative z-10 space-y-2 text-black">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Kanpur Interiors. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C5A46D] hover:text-[#800000] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
