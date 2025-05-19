import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Server, Stethoscope, BookOpen, Plane, PiggyBank } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { name: "Travel & Hospitality", icon: <Plane className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
  { name: "IT / ITES", icon: <Server className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
  { name: "Education", icon: <BookOpen className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
  { name: "Manufacturing", icon: <Factory className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
  { name: "Banking, Financial Services & Insurance", icon: <PiggyBank className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400" /> },
];

export default function IndustriesWeServe() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-4 sm:px-6 pt-24 md:py-24 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-24 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <div className="relative max-w-6xl mx-auto text-left w-full mb-8 sm:mb-10">
        <div ref={textRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-3 sm:pl-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg mt-3 sm:mt-4 text-gray-300 max-w-2xl">
            Powering businesses across multiple industries with smart and reliable energy solutions.
          </p>
        </div>
      </div>

      {/* Industries Grid Inside Border */}
      <div className="w-full max-w-4xl border border-amber-400 p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 p-4 sm:p-6 transition-transform transform hover:scale-105"
            >
              {industry.icon}
              <div className="w-8 sm:w-10 h-[2px] bg-amber-400"></div>
              <h3 className="text-sm sm:text-md font-bold">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}