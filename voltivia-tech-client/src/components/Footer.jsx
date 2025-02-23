import bgImage from "../assets/hero-bg1.jpeg";
import { Mail, Home, ShoppingBag, Info, Phone } from "lucide-react"; // Importing icons

export default function Footer() {
    return (
      <footer className="relative w-full bg-cover bg-center py-30">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          {/* Gradient Overlay ONLY at the Top for Blending Effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
        </div>
  
      {/* Footer Content (Placed in Front of Background) */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Footer Content Wrapper with Glassmorphism Effect */}
        <div className="bg-amber-500/20 backdrop-blur-md text-black text-center rounded-2xl py-12 px-8 shadow-xl border border-amber-100/10">
          <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-md">
            Stay Connected
          </h2>
          <p className="text-lg mt-2 text-white">
            Join our newsletter for the latest updates.
          </p>

          {/* Footer Links with Icons */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <a href="#" className="flex items-center space-x-2 text-black hover:underline">
              <Home size={20} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-black hover:underline">
              <ShoppingBag size={20} />
              <span>Products</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-black hover:underline">
              <Info size={20} />
              <span>About Us</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-black hover:underline">
              <Phone size={20} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-64 rounded-l-lg bg-white/80 focus:outline-none border border-gray-300"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-700">
              <Mail size={20} />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-8 text-gray-700">&copy; 2025 Voltivia Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}