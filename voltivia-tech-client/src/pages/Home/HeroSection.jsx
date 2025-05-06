import bgImage from '../../assets/hero-bg2.jpeg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-extrabold">
          Innovating <span className="text-amber-300 italic">Energy</span> for a Limitless Future
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl mt-4 font-medium">
          Redefining Power with Smart, High-Performance Solutions—Ensuring Uninterrupted Energy Anytime, Anywhere.
        </p>
      </div>
    </section>
  );
}
