import HeroSection from "./HeroSection";
import ChooseUsSection from "./ChooseUsSection";
import ProductsWeOffer from "./ProductsWeOffer";
import IndustriesWeServeSection from "./IndustriesWeServeSection";
import ContactUsSection from "./ContactUsSection";

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>
      
      {/* Empty Space to Push About Section Initially Down */}
      <div className="h-screen"></div> 
      <ChooseUsSection />
      <ProductsWeOffer />
      <IndustriesWeServeSection />
      <ContactUsSection />
    </main>
  );
}