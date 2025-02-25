import HeroSection from "./HeroSection";
import ChooseUsSection from "./ChooseUsSection";
import IndustriesWeServeSection from "./IndustriesWeServeSection";
import ConnectWithUsSection from "./ConnectWithUsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      
      {/* Empty Space to Push About Section Initially Down */}
      <div className="h-screen"></div> 

      <ChooseUsSection />
      <IndustriesWeServeSection />
      <ConnectWithUsSection />
    </main>
  );
}