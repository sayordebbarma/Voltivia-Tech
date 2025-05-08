import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Server, Stethoscope, BookOpen, Plane, PiggyBank } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { name: "Travel & Hospitality", icon: <Plane className="w-14 h-14 text-amber-400" /> },
  { name: "IT / ITES", icon: <Server className="w-14 h-14 text-amber-400" /> },
  { name: "Healthcare", icon: <Stethoscope className="w-14 h-14 text-amber-400" /> },
  { name: "Education", icon: <BookOpen className="w-14 h-14 text-amber-400" /> },
  { name: "Manufacturing", icon: <Factory className="w-14 h-14 text-amber-400" /> },
  { name: "Banking, Financial Services & Insurance", icon: <PiggyBank className="w-14 h-14 text-amber-400" /> },
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
     className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <div className="relative max-w-6xl mx-auto text-left w-full mb-10">
        <div ref={textRef}>
          <h2 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4">
            Industries We Serve
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl">
            Powering businesses across multiple industries with smart and reliable energy solutions.
          </p>
        </div>
      </div>

      {/* Industries Grid Inside Border */}
      <div className="w-full max-w-4xl border border-amber-400 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col items-center justify-center space-y-4 p-6 transition-transform transform hover:scale-105"
            >
              {industry.icon}
              <div className="w-10 h-[2px] bg-amber-400"></div>
              <h3 className="text-md font-bold">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}