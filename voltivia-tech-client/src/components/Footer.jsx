import bgImage from '../assets/hero-bg1.jpeg';
import { Home, ShoppingBag, Info, Phone } from 'lucide-react';
import logo from '../assets/logo/logo2.png';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='relative w-full bg-cover bg-center py-20'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Gradient Overlay ONLY at the Top for Blending Effect */}
        <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-950 via-gray-900/70 to-transparent'></div>
      </div>

      {/* Footer Content*/}
      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Footer Content Wrapper with Glassmorphism Effect */}
        <div className='bg-amber-500/20 backdrop-blur-md text-black rounded-2xl py-12 px-8 shadow-xl border border-amber-100/10'>
          {/* Main Footer Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {/* Company Info Section */}
            <div className='flex flex-col items-center md:items-start space-y-4'>
              <img src={logo} alt="Voltivia Tech Logo" className="h-16 w-auto" />
              <p className='text-xl text-white font-light italic text-center md:text-left'>
                Innovating Energy for a <br />Limitless Future
              </p>
            </div>

            {/* Quick Links Section */}
            <div className='flex flex-col items-center space-y-6'>
              <h3 className='text-xl font-semibold text-yellow-400'>Quick Links</h3>
              <div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
                <button
                  onClick={() => scrollToSection('hero')}
                  className='flex items-center space-x-2 text-white hover:text-yellow-400 transition'
                >
                  <Home size={20} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className='flex items-center space-x-2 text-white hover:text-yellow-400 transition'
                >
                  <ShoppingBag size={20} />
                  <span>Products</span>
                </button>
                <button
                  onClick={() => scrollToSection('choose-us')}
                  className='flex items-center space-x-2 text-white hover:text-yellow-400 transition'
                >
                  <Info size={20} />
                  <span>About Us</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='flex items-center space-x-2 text-white hover:text-yellow-400 transition'
                >
                  <Phone size={20} />
                  <span>Contact</span>
                </button>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className='flex flex-col items-center md:items-end space-y-6'>
              <h3 className='text-xl font-semibold text-yellow-400'>Contact Info</h3>
              <div className='text-white space-y-3 text-center md:text-right'>
                <p>Hno. 138, Lane-6, Chumoukedima, <br/>Aoyim, Nagaland 797115</p>
                <p>Phone: +91-7005-521094</p>
                <p>Email: info@voltiviatech.com</p>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className='mt-8 pt-8 border-t border-white/10'>
            <p className='text-sm text-center text-gray-800'>
              &copy; 2025 Voltivia Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
