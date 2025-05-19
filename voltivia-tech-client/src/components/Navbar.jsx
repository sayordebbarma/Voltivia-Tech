import { useState, useEffect, useRef } from "react";
import Lenis from 'lenis';
import gsap from 'gsap';
import { Menu } from "lucide-react";
import logo from "../assets/logo/logo2.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenisRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for navbar
    gsap.fromTo(
      headerRef.current,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Lenis smooth scroll setup
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      setIsOpen(false);
    }
  };

  return (
    <header ref={headerRef} className="fixed top-4 w-[calc(100%-2rem)] mx-4 flex items-center justify-between px-5 py-2 backdrop-blur-md bg-black/30 border border-white/10 shadow-lg rounded-xl z-50">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
              <img 
                src={logo} 
                alt="SunVault Logo" 
                className="h-10 w-auto transition hover:scale-102" 
              />
            </a>
          </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 lg:space-x-12 text-white text-sm font-normal">
        <button onClick={() => scrollToSection('hero')} className="hover:text-yellow-400 transition">
          Home
        </button>
        <button onClick={() => scrollToSection('choose-us')} className="hover:text-yellow-400 transition">
          Why Choose Us
        </button>
        <button onClick={() => scrollToSection('products')} className="hover:text-yellow-400 transition">
          Products
        </button>
        <button onClick={() => scrollToSection('industries')} className="hover:text-yellow-400 transition">
          Industries
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">
          Contact
        </button>
      </nav>

      {/* Enquire Now Button */}
      <button 
        onClick={() => scrollToSection('contact')}
        className="hidden sm:flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-sm font-semibold rounded-xl hover:bg-amber-500 transition"
      >
        Enquire Now
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white">
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border border-white/10 shadow-lg py-5 flex flex-col items-center space-y-6 text-white text-lg rounded-xl">
          <button onClick={() => scrollToSection('hero')} className="hover:text-yellow-400 transition">
            Home
          </button>
          <button onClick={() => scrollToSection('choose-us')} className="hover:text-yellow-400 transition">
            Why Choose Us
          </button>
          <button onClick={() => scrollToSection('products')} className="hover:text-yellow-400 transition">
            Products
          </button>
          <button onClick={() => scrollToSection('industries')} className="hover:text-yellow-400 transition">
            Industries
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}