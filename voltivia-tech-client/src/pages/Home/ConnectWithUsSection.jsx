import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectWithUsSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative w-full flex flex-col items-center text-white px-6 py-20 min-h-[60vh] bg-gray-950 overflow-hidden'
    >
      {/* Background Gradient Glows */}
      <div className='absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full'></div>

      {/* Content Wrapper */}
      <div className='relative max-w-6xl mx-auto text-left w-full'>
        {/* Section Title & Description */}
        <div ref={textRef} className='mb-12'>
          <h2 className='text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4'>
            Connect With Us
          </h2>
          <p className='text-lg mt-4 text-gray-300'>
            Have questions or need assistance? We're here to help. Get in touch
            today!
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className='mt-8 flex flex-col md:flex-row gap-6 justify-center'
        ref={buttonRef}
      >
        {/* Contact Us Button */}
        <a
          href='tel:+1234567890'
          className='px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
        >
          Let's talk!
        </a>

        {/* Call Us Button */}
        <a
          href='/contact'
          className='px-6 py-3 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg shadow-md hover:bg-amber-500 transition duration-300'
        >
          Send a message
        </a>
      </div>
    </section>
  );
}
