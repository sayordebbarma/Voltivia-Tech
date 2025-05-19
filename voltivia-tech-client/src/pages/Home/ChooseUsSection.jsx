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
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-4 sm:px-6 pt-24 md:py-24 overflow-hidden"
    >
      {/* Background Gradient Glows */}
      <div className="absolute top-24 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto text-left">
        {/* Section Title */}
        <div ref={textRef} className="mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-3 sm:pl-4">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg mt-3 sm:mt-4 text-gray-300 max-w-2xl">
            We provide advanced, custom-engineered power solutions tailored for every industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 max-w-6xl">
          {[
            {
              icon: <CheckCircle className="text-white w-8 h-8 sm:w-10 sm:h-10" />,
              title: 'Custom-Designed for your Needs',
              desc: 'Solutions built specifically for your energy needs.',
              gradient: 'from-amber-400 to-yellow-600',
            },
            {
              icon: <Shield className="text-white w-8 h-8 sm:w-10 sm:h-10" />,
              title: 'Engineered for Performance',
              desc: 'Designed with durability and efficiency in mind.',
              gradient: 'from-blue-500 to-indigo-600',
            },
            {
              icon: <BatteryCharging className="text-white w-8 h-8 sm:w-10 sm:h-10" />,
              title: 'Power Solutions for Every Industry',
              desc: 'Reliable energy solutions adaptable to all sectors.',
              gradient: 'from-green-500 to-teal-600',
            },
            {
              icon: <Zap className="text-white w-8 h-8 sm:w-10 sm:h-10" />,
              title: 'Seamless Integration',
              desc: 'Effortless compatibility with existing energy systems.',
              gradient: 'from-purple-500 to-pink-600',
            },
          ].map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300 bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}