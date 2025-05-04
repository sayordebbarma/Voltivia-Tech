import HeroSection from "./HeroSection";
import ChooseUsSection from "./ChooseUsSection";
import ProductsWeOffer from "./ProductsWeOffer";
import IndustriesWeServeSection from "./IndustriesWeServeSection";
import ConnectWithUsSection from "./ConnectWithUsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      
      {/* Empty Space to Push About Section Initially Down */}
      <div className="h-screen"></div> 

      <ChooseUsSection />
      <ProductsWeOffer />
      <IndustriesWeServeSection />
      <ConnectWithUsSection />
    </main>
  );
}