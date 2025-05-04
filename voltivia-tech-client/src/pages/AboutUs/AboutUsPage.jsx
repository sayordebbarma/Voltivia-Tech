import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import aboutImage from "../../assets/hero-bg1.jpeg";
import team1 from "../../assets/about-image.jpeg";
import team2 from "../../assets/about-image.jpeg";
import team3 from "../../assets/about-image.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const teamRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
      }
    );

    teamRefs.current.forEach((team, i) => {
      gsap.fromTo(
        team,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: team, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/50">
        <img src={aboutImage} alt="About Background" className="w-full h-full object-cover opacity-20" />
      </div>

      {/* Background Glow Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div ref={titleRef} className="mb-10">
          <h2 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4 inline-block">
            About Us
          </h2>
          <p ref={textRef} className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
            We are a passionate team dedicated to innovation, quality, and delivering outstanding solutions. Our journey
            has been about pushing boundaries and making a real impact in our industry.
          </p>
        </div>

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center mt-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-yellow-400">Our Mission</h3>
          <p className="text-gray-300 mt-4">
            To inspire and innovate through cutting-edge solutions, creating value and transforming lives worldwide.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-white mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div
              ref={(el) => (teamRefs.current[0] = el)}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <img src={team1} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-yellow-400">John Doe</h4>
              <p className="text-gray-300">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div
              ref={(el) => (teamRefs.current[1] = el)}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <img src={team2} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-400">Jane Smith</h4>
              <p className="text-gray-300">CTO & Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div
              ref={(el) => (teamRefs.current[2] = el)}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <img src={team3} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-red-400">Alex Johnson</h4>
              <p className="text-gray-300">Head of Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}