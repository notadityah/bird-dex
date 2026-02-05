import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Community from "../components/Community";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
