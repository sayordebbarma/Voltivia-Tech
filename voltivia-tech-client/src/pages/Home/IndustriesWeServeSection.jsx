import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Building, Server, HeartPulse, GraduationCap, Bolt } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesWeServeSection() {
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
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto text-left">
        {/* Section Title */}
        <div ref={textRef} className="mb-16">
          <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-lg border-l-8 border-green-400 pl-4">
            Industries We Serve
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl">
            Powering businesses across multiple industries with smart and reliable energy solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
          {/* Industry 1: Manufacturing */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-600 shadow-md">
              <Factory className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Manufacturing</h3>
            <p className="text-gray-400 mt-2">
              Reliable energy solutions to keep production running smoothly.
            </p>
          </div>

          {/* Industry 2: Commercial Buildings */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
              <Building className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Commercial Buildings</h3>
            <p className="text-gray-400 mt-2">
              Smart energy management for offices, malls, and high-rises.
            </p>
          </div>

          {/* Industry 3: Data Centers */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-md">
              <Server className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Data Centers</h3>
            <p className="text-gray-400 mt-2">
              High-efficiency power backup to prevent downtime.
            </p>
          </div>

          {/* Industry 4: Healthcare */}
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-600 shadow-md">
              <HeartPulse className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Healthcare</h3>
            <p className="text-gray-400 mt-2">
              Ensuring uninterrupted power for hospitals and medical centers.
            </p>
          </div>

          {/* Industry 5: Education */}
          <div
            ref={(el) => (cardRefs.current[4] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 shadow-md">
              <GraduationCap className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Education</h3>
            <p className="text-gray-400 mt-2">
              Reliable power for schools, universities, and research facilities.
            </p>
          </div>

          {/* Industry 6: Renewable Energy */}
          <div
            ref={(el) => (cardRefs.current[5] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 hover:bg-gray-700"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-md">
              <Bolt className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mt-6">Renewable Energy</h3>
            <p className="text-gray-400 mt-2">
              Powering the future with sustainable energy solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}