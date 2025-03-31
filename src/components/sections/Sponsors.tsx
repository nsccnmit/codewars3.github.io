
import { ExternalLink, MapPin } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Sponsors = () => {
  const titleSponsors = [
    {
      name: "Green Leaf",
      logo: "/lovable-uploads/cf80bc2c-ede2-4859-a30b-48fa6800a7e8.png",
      location: "https://maps.app.goo.gl/6uKAhcmBBKamx44d6",
      delay: 50
    }
  ];
  
  const sponsors = [
    {
      name: "InterviewBuddy",
      logo: "/lovable-uploads/78257c5d-0faa-4ab9-b0b9-a6ff8ab7618d.png",
      website: "https://interviewbuddy.in/",
      delay: 100
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
        {/* Title Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="glass px-4 py-2 rounded-lg">Title Sponsor</span>
          </h3>
          
          <div className="grid gap-8 justify-items-center grid-cols-1">
            {titleSponsors.map((sponsor, sponsorIndex) => (
              <AnimatedCard 
                key={sponsorIndex}
                className="p-6 flex flex-col items-center justify-center group w-full max-w-md h-full"
                animationDelay={sponsor.delay}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative overflow-hidden rounded-lg w-full p-4 backdrop-blur-xl border border-white/20 bg-white/90">
                        <div className="p-4 rounded-lg">
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} logo`} 
                            className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-codewars-navy border border-codewars-blue/30 text-white">
                      <p>Click to view {sponsor.name}'s location</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-medium text-white mb-2">{sponsor.name}</h4>
                  <a 
                    href={sponsor.location} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-codewars-blue hover:text-codewars-cyan transition-colors text-sm"
                  >
                    View Location <MapPin className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        
        {/* Regular Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="glass px-4 py-2 rounded-lg">Sponsors</span>
          </h3>
          
          <div className="grid gap-8 justify-items-center grid-cols-1">
            {sponsors.map((sponsor, sponsorIndex) => (
              <AnimatedCard 
                key={sponsorIndex}
                className="p-6 flex flex-col items-center justify-center group w-full max-w-md h-full"
                animationDelay={sponsor.delay}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative overflow-hidden rounded-lg w-full p-4 bg-white/5 backdrop-blur-xl border border-white/20">
                        <div className="p-4 rounded-lg bg-white/10">
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} logo`} 
                            className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-codewars-navy border border-codewars-blue/30 text-white">
                      <p>Click to visit {sponsor.name}'s website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
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
      </div>
      
      <div className="mt-20 glass p-8 rounded-2xl max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
        <p className="text-white/80 mb-6">
          Support the next generation of coding talent by sponsoring CodeWars 3.0. 
          Reach out to us for partnership opportunities.
        </p>
        <a 
          href="mailto:core.nscc25@gmail.com" 
          className="button-primary inline-flex"
        >
          Contact for Sponsorship
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
