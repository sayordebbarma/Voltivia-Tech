import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Shield, BatteryCharging, Zap } from "lucide-react"; // Icons

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center text-white px-6 py-20
      rounded-t-3xl overflow-hidden"
    >
      {/* Glowing Floating Elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-blue-400 opacity-30 blur-3xl rounded-full floating-element"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-500 opacity-30 blur-3xl rounded-full floating-element"></div>

{/* Section Title */}
<div ref={textRef} className="text-left w-full max-w-7xl">
  <h2 className="text-5xl font-bold text-amber-400 drop-shadow-lg">Why Choose Us?</h2>
  <p className="text-lg mt-4 max-w-3xl text-gray-300 leading-relaxed">
    We bring cutting-edge power solutions, ensuring efficiency, durability, and sustainability.
  </p>
</div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl">
        {/* Feature 1 */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition"
        >
          <CheckCircle className="text-amber-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold">High Efficiency</h3>
          <p className="text-gray-400 mt-2">Maximize energy with top-tier solar tech.</p>
        </div>

        {/* Feature 2 */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition"
        >
          <Shield className="text-blue-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold">Reliable & Secure</h3>
          <p className="text-gray-400 mt-2">Built to last with the highest safety standards.</p>
        </div>

        {/* Feature 3 */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition"
        >
          <BatteryCharging className="text-green-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold">Smart Battery Tech</h3>
          <p className="text-gray-400 mt-2">Optimized energy storage for long-lasting power.</p>
        </div>

        {/* Feature 4 */}
        <div
          ref={(el) => (cardRefs.current[3] = el)}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition"
        >
          <Zap className="text-purple-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold">Fast Charging</h3>
          <p className="text-gray-400 mt-2">Rapid energy transfer for instant power.</p>
        </div>
      </div>
    </section>
  );
}