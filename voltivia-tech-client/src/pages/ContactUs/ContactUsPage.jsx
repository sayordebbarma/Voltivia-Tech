import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";
import contactImage from "../../assets/hero-bg1.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUsPage() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
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
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Section Title with Background Image */}
      <div className="relative w-full text-center py-16">
        <div className="absolute inset-0">
          <img src={contactImage} alt="Contact Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <h2 ref={textRef} className="relative text-5xl font-extrabold text-amber-400 drop-shadow-lg border-l-8 border-amber-400 pl-4 inline-block">
          Contact Us
        </h2>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {[{ icon: Phone, text: "+1 234 567 890", label: "Call Us", color: "yellow" },
          { icon: Mail, text: "support@company.com", label: "Email Us", color: "blue" },
          { icon: MapPin, text: "123 Business Street, NY", label: "Visit Us", color: "red" }].map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition duration-300"
          >
            <item.icon className={`w-12 h-12 text-${item.color}-400`} />
            <h3 className="text-xl font-semibold mt-4">{item.label}</h3>
            <p className="text-gray-300 mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div ref={formRef} className="mt-16 max-w-3xl w-full bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-white/20">
        <h3 className="text-2xl font-semibold text-center text-white mb-6">Send Us a Message</h3>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <input type="tel" placeholder="Your Phone" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" required></textarea>
          <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="mt-16 w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Company Location"
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.865245526022!2d-74.00601588459363!3d40.7127760793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjEuODAxMiBXIC03NC4wMDYwIE4gNDAuNzEyNzcgTg!5e0!3m2!1sen!2sus!4v1634155732723!5m2!1sen!2sus"
        ></iframe>
      </div>
    </section>
  );
}