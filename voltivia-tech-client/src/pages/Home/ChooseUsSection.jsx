import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Shield, BatteryCharging, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );

    // Card Animations
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 rounded-t-3xl overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto text-left">
        {/* Section Title */}
        <div ref={textRef} className="mb-16">
          <h2 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4">
            Why Choose Us?
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl">
            We provide advanced, custom-engineered power solutions tailored for every industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl">
          {/* Feature 1 */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 shadow-md">
              <CheckCircle className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Custom-Designed for your Needs</h3>
            <p className="text-gray-400 mt-2">
              Solutions built specifically for your energy needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
              <Shield className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Engineered for Performance</h3>
            <p className="text-gray-400 mt-2">
              Designed with durability and efficiency in mind.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-md">
              <BatteryCharging className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Power Solutions for Every Industry</h3>
            <p className="text-gray-400 mt-2">
              Reliable energy solutions adaptable to all sectors.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-md">
              <Zap className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Seamless Integration</h3>
            <p className="text-gray-400 mt-2">
              Effortless compatibility with existing energy systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}