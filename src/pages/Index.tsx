
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyParticipate from "@/components/sections/WhyParticipate";
import EventDetails from "@/components/sections/EventDetails";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <HowItWorks />
        <WhyParticipate />
        <EventDetails />
        <Timeline />
        <Prizes />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
