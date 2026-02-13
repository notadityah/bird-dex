import Header from "../components/landingpage/Header";
import Hero from "../components/landingpage/Hero";
import HowItWorks from "../components/landingpage/HowItWorks";
import Community from "../components/landingpage/Community";
import CallToAction from "../components/landingpage/CallToAction";
import Footer from "../components/landingpage/Footer";


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
