import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";


{/* changes are in <div className="bg-white"> & object-scale-down */}

import SolarInverter1 from "../../assets/products/solarInverter/solarInverter1.jpg";
import SolarInverter2 from "../../assets/products/solarInverter/solarInverter2.jpg";
import SolarInverter3 from "../../assets/products/solarInverter/solarInverter3.jpg";
import SolarInverter4 from "../../assets/products/solarInverter/solarInverter4.jpg";
import SolarInverter5 from "../../assets/products/solarInverter/solarInverter5.jpg";
import Ups1 from "../../assets/products/ups/ups1.jpg";
import ServoStabilizer1 from "../../assets/products/servoStabilizer/servoStabilizer1.png";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Solar Inverter",
    price: "$2,500",
    location: "High Efficiency Solar Power Conversion",
    area: "5kW Capacity", 
    beds: "MPPT Technology",
    baths: "Grid-Tied System",
    images: [SolarInverter1, SolarInverter2, SolarInverter3, SolarInverter4, SolarInverter5],
  },
  {
    name: "Online UPS",
    price: "$1,800",
    location: "Uninterrupted Power Supply",
    area: "3kVA Rating",
    beds: "Double Conversion", 
    baths: "Pure Sine Wave",
    images: [Ups1],
  },
  {
    name: "Servo Stabilizer",
    price: "$3,200",
    location: "Voltage Regulation System",
    area: "10kVA Rating",
    beds: "Auto Voltage Correction",
    baths: "Digital Display",
    images: [ServoStabilizer1],
  },
];

export default function ProductsWeOffer() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  useEffect(() => {
    // Initialize current image indexes for each product
    const initialIndexes = {};
    products.forEach((_, index) => {
      initialIndexes[index] = 0;
    });
    setCurrentImageIndexes(initialIndexes);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        }
      );
    });
  }, []);

  const nextImage = (productIndex) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [productIndex]: (prev[productIndex] + 1) % products[productIndex].images.length
    }));
  };

  const prevImage = (productIndex) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [productIndex]: (prev[productIndex] - 1 + products[productIndex].images.length) % products[productIndex].images.length
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <div className="relative max-w-6xl mx-auto text-left w-full mb-12">
        <div ref={textRef}>
          <h2 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4">
            Products We Offer
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl">
            Explore our finest selection of luxury properties tailored to match your lifestyle.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 group relative"
            >
              <div className="relative w-full h-126 bg-white"> 
                {/* Image Carousel */}
                <div className="relative w-full h-full">
                  <img
                    src={product.images[currentImageIndexes[index]]}
                    alt={product.name}
                    className="w-full h-full object-scale-down rounded-2xl transition-opacity duration-300"
                  />
                  
                  {/* Carousel Navigation Buttons */}
                  <button
                    onClick={() => prevImage(index)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => nextImage(index)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => setCurrentImageIndexes(prev => ({ ...prev, [index]: imageIndex }))}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndexes[index] === imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating description */}
                <div className="absolute bottom-2 left-2 right-2 bg-gray-900/70 backdrop-blur-md p-4 rounded-xl shadow-lg text-white space-y-2 z-10">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-xs text-gray-300">{product.location}</p>
                  <div className="flex items-center justify-between text-xs text-gray-200">
                    <span>{product.area}</span>
                    <span>{product.beds}</span>
                    <span>{product.baths}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}