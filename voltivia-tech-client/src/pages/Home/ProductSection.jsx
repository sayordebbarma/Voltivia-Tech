import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product1 from "../../assets/product1.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
  const sectionRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      productRefs.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b bg-white flex flex-col items-center justify-center text-center text-black px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 drop-shadow-md">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
        {/* Product 1 */}
        <div
          ref={(el) => (productRefs.current[0] = el)}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300"
        >
          <img src={product1} alt="Product 1" className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-2xl font-semibold mt-6 text-gray-900">Solar Panel X1</h3>
          <p className="text-gray-700 mt-3">High-efficiency solar panels for maximum energy output.</p>
        </div>

        {/* Product 2 */}
        <div
          ref={(el) => (productRefs.current[1] = el)}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300"
        >
          <img src={product1} alt="Product 2" className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-2xl font-semibold mt-6 text-gray-900">Smart Battery Pack</h3>
          <p className="text-gray-700 mt-3">Store and optimize power usage with our smart battery pack.</p>
        </div>

        {/* Product 3 */}
        <div
          ref={(el) => (productRefs.current[2] = el)}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300"
        >
          <img src={product1} alt="Product 3" className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-2xl font-semibold mt-6 text-gray-900">Portable Power Station</h3>
          <p className="text-gray-700 mt-3">Reliable backup power, anywhere you go.</p>
        </div>
      </div>
    </section>
  );
}