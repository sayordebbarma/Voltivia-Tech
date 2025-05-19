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
      className='relative w-full flex flex-col items-center text-white px-4 sm:px-6 pt-24 md:py-24 min-h-[60vh] bg-gray-950 overflow-hidden'
    >
      {/* Gradient Glows */}
      <div className='absolute top-24 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 opacity-20 blur-3xl rounded-full'></div>

      {/* Content Wrapper */}
      <div className='relative max-w-6xl mx-auto text-left w-full'>
        {/* Section Title & Description */}
        <div ref={textRef} className='mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-3 sm:pl-4'>
            Connect With Us
          </h2>
          <p className='text-base sm:text-lg mt-3 sm:mt-4 text-gray-300'>
            Get in touch with us for any enquiries and questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start'
      >
        {/* Left: Contact Form */}
        <form className='space-y-4 sm:space-y-6'>
          <input
            type='text'
            placeholder='Name'
            className='w-full bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base'
          />
          <textarea
            placeholder='Message'
            className='w-full h-32 sm:h-48 resize-none bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base'
          ></textarea>
          <button
            type='submit'
            className='w-full sm:w-auto bg-amber-400 text-gray-900 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-amber-500 transition text-sm sm:text-base'
          >
            Send Message
          </button>
        </form>

        {/* Right: Map + Info */}
        <div className='space-y-6 sm:space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm text-gray-300'>
            <div>
              <p className='text-xs uppercase text-gray-400'>General</p>
              <p className='font-semibold text-sm sm:text-base'>info@voltiviatech.com</p>
              <p className='text-sm sm:text-base'>+91-7005-521094</p>
            </div>
            <div>
              <p className='text-xs uppercase text-gray-400'>Address</p>
              <p className='font-semibold text-sm sm:text-base'>
                Hno. 138, Lane-6, Chumoukedima, <br/>Aoyim, Nagaland 797115
              </p>
            </div>
          </div>
          <div className='w-full h-48 sm:h-64 overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5928690027067!2d93.806399!3d25.849957699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374609f19d0a1ca1%3A0x5b8684b101462c86!2sVoltivia%20Tech!5e0!3m2!1sen!2sin!4v1747573381690!5m2!1sen!2sin'
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