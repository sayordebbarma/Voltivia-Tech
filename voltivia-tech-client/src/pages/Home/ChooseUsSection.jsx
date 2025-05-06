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
      id="choose-us"
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Gradient Glows */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

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
          {[
            {
              icon: <CheckCircle className="text-white w-10 h-10" />,
              title: 'Custom-Designed for your Needs',
              desc: 'Solutions built specifically for your energy needs.',
              gradient: 'from-amber-400 to-yellow-600',
            },
            {
              icon: <Shield className="text-white w-10 h-10" />,
              title: 'Engineered for Performance',
              desc: 'Designed with durability and efficiency in mind.',
              gradient: 'from-blue-500 to-indigo-600',
            },
            {
              icon: <BatteryCharging className="text-white w-10 h-10" />,
              title: 'Power Solutions for Every Industry',
              desc: 'Reliable energy solutions adaptable to all sectors.',
              gradient: 'from-green-500 to-teal-600',
            },
            {
              icon: <Zap className="text-white w-10 h-10" />,
              title: 'Seamless Integration',
              desc: 'Effortless compatibility with existing energy systems.',
              gradient: 'from-purple-500 to-pink-600',
            },
          ].map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-6">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}