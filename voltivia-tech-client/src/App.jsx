import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/HomePage";
import ContactUs from "./pages/ContactUs/ContactUsPage";
import AboutUs from "./pages/AboutUs/AboutUsPage";

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
        {/* Universal Navbar */}
        <Navbar />

        {/* Routing for Different Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Universal Footer */}
        <Footer />
      </div>
    </Router>
  );
}