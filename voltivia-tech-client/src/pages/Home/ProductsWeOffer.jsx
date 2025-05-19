import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsWeOffer() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initialIndexes = {};
    products.forEach((_, index) => {
      initialIndexes[index] = 0;
    });
    setCurrentImageIndexes(initialIndexes);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: card, start: "top 90%" },
        }
      );
    });
  }, []);

  const nextImage = (productIndex) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] + 1) % products[productIndex].images.length,
    }));
  };

  const prevImage = (productIndex) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] - 1 + products[productIndex].images.length) % products[productIndex].images.length,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center text-white px-4 sm:px-6 pt-24 md:py-24 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-24 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-left w-full mb-8 sm:mb-12">
        <div ref={textRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-3 sm:pl-4">
            Products We Offer
          </h2>
          <p className="text-base sm:text-lg mt-3 sm:mt-4 text-gray-300 max-w-2xl">
            Explore our finest selection of products to match your lifestyle.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <div className="relative bg-white backdrop-blur-md overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={product.images[currentImageIndexes[index]]}
                    alt={product.name}
                    className="w-full h-94 object-contain p-4 sm:p-6 transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => prevImage(index)}
                      className="bg-gray-900/60 backdrop-blur-md hover:bg-gray-900/80 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="bg-gray-900/60 backdrop-blur-md hover:bg-gray-900/80 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {product.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() =>
                          setCurrentImageIndexes((prev) => ({
                            ...prev,
                            [index]: imageIndex,
                          }))
                        }
                        className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                          currentImageIndexes[index] === imageIndex
                            ? "bg-gray-900/60 scale-150"
                            : "bg-gray-900/20 hover:bg-gray-900/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 p-3 sm:p-4 text-left">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-400">
                    {product.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">{product.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <span 
                      key={key}
                      className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {value}
                    </span>
                  ))}
                </div>
                <button 
                  className="w-full py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-amber-400 text-black font-medium hover:bg-amber-500 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base" 
                  onClick={scrollToContact}
                >
                  Send query
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}