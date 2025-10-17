// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaCouch,
  FaInfoCircle,
  FaPhoneAlt,
  FaAward,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const colors = {
  white: "#FFFFFF",
  gold: "#C5A46D",
  grayLight: "#F3F3F3",
  darkGray: "#2C2C2C",
  textGray: "#555555",
};

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/services", icon: <FaCouch /> },
  { name: "Gallery", path: "/gallery", icon: <FaAward /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/kanpurinterior",
  instagram: "https://www.instagram.com/kanpurinterior/",
  linkedin: "https://www.linkedin.com/company/kanpurinterior/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    color: pathname === path ? colors.gold : colors.darkGray,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
    position: "relative",
    letterSpacing: "0.5px",
  });

  return (
    <>
      {/* Desktop Top Header */}
      <div className="hidden md:block" style={{
        background: colors.grayLight,
        color: colors.textGray,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "14px",
        borderBottom: `1px solid ${colors.gold}`,
      }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2">
            <MdEmail style={{ color: colors.gold }} />
            <a
              href="mailto:Kanpurinteriorsproducts@gmail.com"
              className="hover:text-gold transition"
            >
              Kanpurinteriorsproducts@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.gold }} />
            <a
              href="tel:+919792302099"
              className="hover:text-gold transition"
            >
              +919792302099
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          backgroundColor: colors.white,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          zIndex: 50,
        }}
        className="w-full px-4 py-3 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className="text-3xl font-cursive text-gold tracking-wide"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Kanpur Interior
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-2 text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} style={navLinkStyle(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook"
                  ? FaFacebookF
                  : k === "instagram"
                  ? FaInstagram
                  : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.white,
                    color: colors.gold,
                    border: `1px solid ${colors.gold}`,
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-gold hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div style={{ color: colors.darkGray }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              ref={panelRef}
              style={{
                width: "75vw",
                maxWidth: "20rem",
                background: colors.white,
                boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
              }}
              className="h-full px-6 py-4 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <span
                    className="text-3xl font-cursive text-gold"
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    Kanpur Interior
                  </span>
                </Link>
                <FaTimes
                  style={{ color: colors.darkGray }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4 border-gray-200" />

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color:
                        pathname === item.path ? colors.gold : colors.darkGray,
                      fontWeight: pathname === item.path ? "600" : "400",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+919792302099"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",

                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: "#25D366",
                    color: colors.white,
                    fontWeight: "600",
                    padding: "10px",
                  }}
                  className="hover:bg-green-700 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Mobile Email & Phone at Bottom */}
              <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-2">
                <p className="flex items-center gap-2 text-sm">
                  <MdEmail style={{ color: colors.gold }} />
                  <a
                    href="mailto:Kanpurinteriorsproducts@gmail.com"
                    className="hover:text-gold transition"
                  >
                    Kanpurinteriorsproducts@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaPhoneAlt style={{ color: colors.gold }} />
                  <a
                    href="tel:+918299334764"
                    className="hover:text-gold transition"
                  >
                    +91 8299334764
                  </a>
                </p>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1"
              style={{
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
