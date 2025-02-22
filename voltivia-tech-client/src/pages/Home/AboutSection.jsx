import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top top", // Pin when the top of AboutUs reaches the viewport top
        end: "bottom top", // Releases when AboutUs exits the viewport
        pin: true, // Keeps it in place
        pinSpacing: false, // Prevents extra blank space
        scrub: true, // Smooth transition effect
      },
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center text-center text-black px-6 rounded-t-3xl shadow-lg"
    >
      <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
      <p className="text-lg md:text-xl mt-4 max-w-3xl">
        We are dedicated to redefining power solutions with smart, high-performance technology.
        Our goal is to ensure uninterrupted energy anytime, anywhere.
      </p>
    </section>
  );
}