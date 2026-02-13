import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Community from "../components/Community";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">

      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
