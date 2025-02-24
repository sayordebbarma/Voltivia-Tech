import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 w-[calc(100%-2rem)] mx-4 flex items-center justify-between px-5 py-2 backdrop-blur-lg bg-white/15 border border-white/20 shadow-lg rounded-xl z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="SunVault Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-12 text-white text-sm font-normal">
        {["Home", "Products", "About Us", "Contact Us"].map((item) => (
          <a key={item} href="#" className="hover:text-yellow-400 transition">
            {item}
          </a>
        ))}
      </nav>

      {/* Contact Us Button */}
      <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-sm font-semibold rounded-xl hover:bg-yellow-500 transition">
        Enquire Now
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-white/15 backdrop-blur-lg border border-white/20 shadow-lg py-5 flex flex-col items-center space-y-6 text-white text-lg rounded-xl"
        >
          {["Home", "Products", "About Us", "Contact Us"].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}