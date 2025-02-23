import {
  Bolt,
  PanelTopOpen,
  BatteryCharging,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className='relative w-full min-h-screen bg-gray-950 text-white py-24 px-6'>
      {/* Glowing Floating Elements */}
      <div className='absolute top-10 left-20 w-32 h-32 bg-blue-400 opacity-30 blur-3xl rounded-full floating-element'></div>
      <div className='absolute bottom-20 right-10 w-24 h-24 bg-amber-500 opacity-30 blur-3xl rounded-full floating-element'></div>
      
      {/* Content Wrapper */}
      <div className='relative max-w-6xl mx-auto'>
        {/* Section Title */}
        <div className='mb-16'>
          <h2 className='text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4'>
            Our Services
          </h2>
          <p className='text-lg mt-4 text-gray-300 max-w-2xl'>
            We provide advanced power solutions designed for efficiency,
            durability, and sustainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Service 1 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <Bolt className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>
              Instant Power Solutions
            </h3>
            <p className='text-gray-400 mt-2'>
              Reliable energy solutions for every power need.
            </p>
          </div>

          {/* Service 2 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <PanelTopOpen className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>Solar Energy Systems</h3>
            <p className='text-gray-400 mt-2'>
              Cutting-edge solar panels for sustainable energy.
            </p>
          </div>

          {/* Service 3 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <BatteryCharging className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>
              Smart Battery Storage
            </h3>
            <p className='text-gray-400 mt-2'>
              Optimized storage for uninterrupted power.
            </p>
          </div>

          {/* Service 4 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <Lightbulb className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>Energy Consulting</h3>
            <p className='text-gray-400 mt-2'>
              Optimizing energy use for maximum efficiency.
            </p>
          </div>

          {/* Service 5 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <ShieldCheck className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>
              Secure Energy Systems
            </h3>
            <p className='text-gray-400 mt-2'>
              Safe and reliable energy management.
            </p>
          </div>

          {/* Service 6 */}
          <div className='bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600'>
              <TrendingUp className='text-white w-10 h-10' />
            </div>
            <h3 className='text-xl font-semibold mt-6'>Scalable Solutions</h3>
            <p className='text-gray-400 mt-2'>
              Flexible energy solutions for businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
