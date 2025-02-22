import bgImage from '../../assets/hero-bg2.jpeg';

export default function HeroSection() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Innovating Energy for a Limitless Future
        </h1>
        <p className="text-lg md:text-xl mt-4 font-medium">
          Redefining Power with Smart, High-Performance Solutions—Ensuring Uninterrupted Energy Anytime, Anywhere.
        </p>
      </div>
    </section>
  );
}
