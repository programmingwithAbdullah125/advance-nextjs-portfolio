"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll Function
  const handleScroll = (id: string) => {
    setIsOpen(false); // Close menu when a link is clicked
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-transparent text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* LOGO */}
      <h1 className="text-2xl font-extrabold tracking-wider text-blue-400">PWA Portfolio</h1>

      {/* Desktop Navigation with Smooth Scroll */}
      <div className="hidden md:flex space-x-6">
        {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item, index) => (
          <button key={index} onClick={() => handleScroll(item.toLowerCase())} className="relative group">
            <span className="hover:text-blue-400 transition duration-300">{item}</span>
            <motion.span 
              className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
            />
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Navigation Menu with Smooth Scroll & Close Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-auto bg-black bg-opacity-90 text-white flex flex-col items-center justify-start py-6 space-y-4 md:hidden shadow-lg rounded-bl-lg"
          >
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-4 text-3xl">
              <FaTimes />
            </button>

            {/* Mobile Menu Links with Clickable Scroll */}
            {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item, index) => (
              <button 
                key={index} 
                onClick={() => handleScroll(item.toLowerCase())} 
                className="text-xl hover:text-blue-400 transition duration-300"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
