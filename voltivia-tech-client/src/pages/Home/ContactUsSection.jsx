import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactUsSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
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
      id="contact"
      className='relative w-full flex flex-col items-center text-white px-6 py-20 min-h-[60vh] bg-gray-950 overflow-hidden'
    >
      {/* Gradient Glows */}
      <div className='absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full'></div>


       {/* Content Wrapper */}
       <div className='relative max-w-6xl mx-auto text-left w-full'>
            {/* Section Title & Description */}
            <div ref={textRef} className='mb-12'>
            <h2 className='text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4'>
                Connect With Us
            </h2>
            <p className='text-lg mt-4 text-gray-300'>
                Get in touch with us for any enquiries and questions.
            </p>
            </div>
        </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start'
      >
        {/* Left: Contact Form */}
        <form className='space-y-6'>
          <input
            type='text'
            placeholder='Name'
            className='w-full bg-white/10 backdrop-blur-md p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full bg-white/10 backdrop-blur-md p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
          <textarea
          placeholder='Message'
          className='w-full h-48 resize-none bg-white/10 backdrop-blur-md p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400'
          ></textarea>
          <button
            type='submit'
            className='bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition'
          >
            Send Message
          </button>
        </form>

        {/* Right: Map + Info */}
        <div className='space-y-10'>
          <div className='grid grid-cols-2 gap-6 text-sm text-gray-300'>
            <div>
              <p className='text-xs uppercase text-gray-400'>General</p>
              <p className='font-semibold'>inquiry@voltiviatech.com</p>
              <p>+91-6909-727365</p>
            </div>
            <div>
              <p className='text-xs uppercase text-gray-400'>Address</p>
              <p className='font-semibold'>
                191189, St. Petersburg, <br /> Moika River Embankment 67-69
              </p>
            </div>
          </div>
          <div className='w-full h-64 overflow-hidden rounded-2xl border border-white/20 shadow-lg'>
            <iframe
              src='https://maps.google.com/maps?q=St.%20Petersburg,%20Moika%20River%20Embankment%2067-69&t=&z=13&ie=UTF8&iwloc=&output=embed'
              className='w-full h-full'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}