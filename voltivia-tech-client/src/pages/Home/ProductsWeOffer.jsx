import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Product1 from "../../assets/product1.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Modern Villa",
    price: "$1,200,000",
    location: "21 Gorham Road, Belmont, MA 02478",
    area: "2,369 Sq. Ft.",
    beds: 3,
    baths: 2,
    image: Product1,
  },
  {
    name: "Luxury Apartment",
    price: "$850,000",
    location: "45 Beacon St, Boston, MA 02108",
    area: "1,800 Sq. Ft.",
    beds: 2,
    baths: 2,
    image: Product1,
  },
];

export default function ProductsWeOffer() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
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

  return (
    <section
      ref={sectionRef}
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
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 group relative"
          >
            <div className="relative w-full h-110"> {/*  h-[26rem] */}
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl"
              />
          
              {/* Dark gradient overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent rounded-2xl"></div> */}
          
              {/* Floating description */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/70 backdrop-blur-md p-4 rounded-xl shadow-lg text-white space-y-2 z-10">
                <h3 className="text-lg font-semibold">{product.price}</h3>
                <p className="text-xs text-gray-300">{product.location}</p>
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span>{product.area}</span>
                  <span>{product.beds} Beds</span>
                  <span>{product.baths} Baths</span>
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