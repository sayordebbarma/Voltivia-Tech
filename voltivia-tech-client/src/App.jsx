import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import HeroSection from "./pages/Home/HeroSection";
import AboutSection from "./pages/Home/AboutSection";


export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controls smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
    <div className="bg-white min-h-screen min-w-screen">
      <Navbar />
      <HeroSection />
      <div className="h-screen"></div> {/* Extra space to allow scroll trigger */}
      <AboutSection />
    </div>
    </Router>
  );
}