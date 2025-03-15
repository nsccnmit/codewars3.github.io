
import { ExternalLink } from "lucide-react";
import GradientText from "../ui/GradientText";

const Sponsors = () => {
  // Placeholder sponsor logos (in a real project, these would be actual logos)
  const titleSponsors = [
    { name: "TechGiant", imageUrl: "https://placehold.co/300x150?text=TechGiant" }
  ];
  
  const goldSponsors = [
    { name: "CodeCorp", imageUrl: "https://placehold.co/200x100?text=CodeCorp" },
    { name: "AlgoSystems", imageUrl: "https://placehold.co/200x100?text=AlgoSystems" }
  ];
  
  const silverSponsors = [
    { name: "ByteWorks", imageUrl: "https://placehold.co/180x90?text=ByteWorks" },
    { name: "DevInc", imageUrl: "https://placehold.co/180x90?text=DevInc" },
    { name: "TechStart", imageUrl: "https://placehold.co/180x90?text=TechStart" }
  ];
  
  const partners = [
    { name: "CodingHub", imageUrl: "https://placehold.co/150x75?text=CodingHub" },
    { name: "TechCommunity", imageUrl: "https://placehold.co/150x75?text=TechCommunity" },
    { name: "DevNetwork", imageUrl: "https://placehold.co/150x75?text=DevNetwork" },
    { name: "CodeSociety", imageUrl: "https://placehold.co/150x75?text=CodeSociety" }
  ];
  
  const SponsorLogo = ({ name, imageUrl, size = "medium" }: { name: string; imageUrl: string; size?: "large" | "medium" | "small" }) => {
    const sizeClasses = {
      large: "p-8 h-40",
      medium: "p-6 h-32",
      small: "p-4 h-24"
    };
    
    return (
      <div className={`card ${sizeClasses[size]} flex items-center justify-center transition-transform hover:scale-105`}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
    );
  };
  
  return (
    <section id="sponsors" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Our Supporters
        </span>
        <h2 className="section-title">
          <GradientText>Sponsors & Partners</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          CodeWars 3.0 is proudly supported by these industry leaders and community partners
        </p>
      </div>
      
      {/* Title Sponsors */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Title Sponsor</h3>
        <div className="flex justify-center">
          {titleSponsors.map((sponsor) => (
            <SponsorLogo 
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.imageUrl}
              size="large"
            />
          ))}
        </div>
      </div>
      
      {/* Gold Sponsors */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Gold Sponsors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {goldSponsors.map((sponsor) => (
            <SponsorLogo 
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.imageUrl}
              size="medium"
            />
          ))}
        </div>
      </div>
      
      {/* Silver Sponsors */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Silver Sponsors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {silverSponsors.map((sponsor) => (
            <SponsorLogo 
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.imageUrl}
              size="medium"
            />
          ))}
        </div>
      </div>
      
      {/* Community Partners */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Community Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <SponsorLogo 
              key={partner.name}
              name={partner.name}
              imageUrl={partner.imageUrl}
              size="small"
            />
          ))}
        </div>
      </div>
      
      {/* Become a Sponsor */}
      <div className="mt-20 glass p-8 rounded-2xl max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Support the next generation of coding talent and gain visibility for your brand. Contact us to discuss sponsorship opportunities.
        </p>
        <a 
          href="mailto:sponsors@codewars.tech" 
          className="button-primary flex items-center justify-center gap-2 mx-auto"
        >
          Contact for Sponsorship
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
