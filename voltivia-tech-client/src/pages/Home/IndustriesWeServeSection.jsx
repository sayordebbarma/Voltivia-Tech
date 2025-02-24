import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Industries from '../../assets/industries1.jpg';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    name: 'Manufacturing',
    description:
      'Reliable energy solutions to keep production running smoothly.',
    image: Industries,
  },
  {
    name: 'Commercial Buildings',
    description: 'Smart energy management for offices, malls, and high-rises.',
    image: Industries,
  },
  {
    name: 'Data Centers',
    description: 'High-efficiency power backup to prevent downtime.',
    image: Industries,
  },
  {
    name: 'Healthcare',
    description:
      'Ensuring uninterrupted power for hospitals and medical centers.',
    image: Industries,
  },
  {
    name: 'Education',
    description:
      'Reliable power for schools, universities, and research facilities.',
    image: Industries,
  },
  {
    name: 'Renewable Energy',
    description: 'Powering the future with sustainable energy solutions.',
    image: Industries,
  },
];

export default function IndustriesWeServe() {
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
          scrollTrigger: { trigger: card, start: 'top 90%' },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 overflow-hidden'
    >
      {/* Background Glow Elements */}
      <div className='absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-green-400 opacity-20 blur-3xl rounded-full'></div>

      {/* Content Wrapper */}
      <div className='relative max-w-6xl mx-auto text-left w-full'>
        {/* Section Title */}
        <div ref={textRef} className='mb-16'>
          <h2 className='text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4'>
            Industries We Serve
          </h2>
          <p className='text-lg mt-4 text-gray-300 max-w-2xl'>
            Powering businesses across multiple industries with smart and
            reliable energy solutions.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className='relative w-full h-120 overflow-hidden shadow-lg '
          >
            <div className='relative w-full h-full overflow-hidden'>
              <img
                src={industry.image}
                alt={industry.name}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105'
              />
            </div>
            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/70 to-transparent p-6'>
              <h3 className='text-xl font-bold text-white'>{industry.name}</h3>
              <p className='text-gray-300 mt-1'>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}