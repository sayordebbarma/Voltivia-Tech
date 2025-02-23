import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/Home/HeroSection";
import ChooseUsSection from "./pages/Home/ChooseUsSection";
import IndustriesWeServeSection from "./pages/Home/IndustriesWeServeSection";

export default function App() {
  useEffect(() => {
    // Force scroll to start at Hero Section
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      <div className="bg-white min-h-screen min-w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Navbar />
        <HeroSection />
        
        {/* Empty Space to Push About Section Initially Down */}
        <div className="h-screen"></div> 

        <ChooseUsSection />
        <IndustriesWeServeSection />
        <Footer />
      </div>
    </Router>
  );
}