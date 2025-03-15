
import { ExternalLink } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      sponsors: [
        {
          name: "TechCorp",
          logo: "https://placehold.co/300x150?text=TechCorp",
          website: "https://example.com",
          delay: 100
        }
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        {
          name: "DevFirm",
          logo: "https://placehold.co/240x120?text=DevFirm",
          website: "https://example.com",
          delay: 200
        },
        {
          name: "CodeLabs",
          logo: "https://placehold.co/240x120?text=CodeLabs",
          website: "https://example.com",
          delay: 300
        }
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        {
          name: "ByteWorks",
          logo: "https://placehold.co/200x100?text=ByteWorks",
          website: "https://example.com",
          delay: 400
        },
        {
          name: "AlgoSoft",
          logo: "https://placehold.co/200x100?text=AlgoSoft",
          website: "https://example.com",
          delay: 500
        },
        {
          name: "QuantumDev",
          logo: "https://placehold.co/200x100?text=QuantumDev",
          website: "https://example.com",
          delay: 600
        }
      ]
    },
    {
      tier: "Community Partners",
      sponsors: [
        {
          name: "TechCommunity",
          logo: "https://placehold.co/180x90?text=TechCommunity",
          website: "https://example.com",
          delay: 700
        },
        {
          name: "CodersHub",
          logo: "https://placehold.co/180x90?text=CodersHub",
          website: "https://example.com",
          delay: 800
        },
        {
          name: "DevNetwork",
          logo: "https://placehold.co/180x90?text=DevNetwork",
          website: "https://example.com",
          delay: 900
        },
        {
          name: "BinaryClub",
          logo: "https://placehold.co/180x90?text=BinaryClub",
          website: "https://example.com",
          delay: 1000
        }
      ]
    }
  ];
  
  return (
    <section id="sponsors" className="section-container bg-codewars-navy/30">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Our Supporters
        </span>
        <h2 className="section-title">
          <GradientText>Sponsors & Partners</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          Meet the amazing organizations making CodeWars 3.0 possible
        </p>
      </div>
      
      <div className="space-y-16">
        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="glass px-4 py-2 rounded-lg">{tier.tier}</span>
            </h3>
            
            <div className={`grid gap-8 justify-items-center ${
              tier.tier === "Title Sponsor" 
                ? "grid-cols-1" 
                : tier.tier === "Gold Sponsors" 
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}>
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <AnimatedCard 
                  key={sponsorIndex}
                  className="p-6 flex flex-col items-center justify-center group w-full h-full"
                  animationDelay={sponsor.delay}
                >
                  <div className="relative overflow-hidden rounded-lg w-full">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`} 
                      className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-medium text-white mb-2">{sponsor.name}</h4>
                    <a 
                      href={sponsor.website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-codewars-blue hover:text-codewars-cyan transition-colors text-sm"
                    >
                      Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 glass p-8 rounded-2xl max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
        <p className="text-white/80 mb-6">
          Support the next generation of coding talent by sponsoring CodeWars 3.0. 
          Reach out to us for partnership opportunities.
        </p>
        <a 
          href="mailto:sponsors@codewars.tech" 
          className="button-primary inline-flex"
        >
          Contact for Sponsorship
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
