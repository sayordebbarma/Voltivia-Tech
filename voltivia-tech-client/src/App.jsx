import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <Navbar />
      <main className="pt-40 text-black text-center">
        <h2 className="text-3xl">Welcome to Voltivia Tech</h2>
      </main>
    </div>
  );
}