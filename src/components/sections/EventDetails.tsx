
import { ExternalLink } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const EventDetails = () => {
  const rounds = [
    {
      title: "Round 1: TRIVIA TRIUMPH",
      description: "An interactive quiz that tests your knowledge about coding, algorithms, logical reasoning, and general computer science concepts.",
      details: [
        "Duration: 1 hour",
        "Format: Interactive real-time quiz",
        "Platform: To be announced on-spot",
        "Judging: Speed & accuracy of responses"
      ],
      delay: 100
    },
    {
      title: "Round 2: BYTE-SIZED BATTLE",
      description: "A code golf challenge where teams compete to write the most concise yet functional solution to programming problems.",
      details: [
        "Duration: 1.5 hours",
        "Format: One-on-one team matchups based on chosen language",
        "Objective: Fewest characters of correct code wins",
        "Tiebreakers: Submission time, execution efficiency"
      ],
      delay: 300
    },
    {
      title: "Round 3: BUG BUSTER",
      description: "The ultimate debugging challenge with a strategic sabotage element where teams fix buggy code while also injecting bugs into opponents' code.",
      details: [
        "Duration: 1.5 hours",
        "Format: Debug code with all errors as quickly as possible",
        "Strategic element: 3-minute window to inject bugs into opponent's code",
        "Judging: Speed and correctness of debugging"
      ],
      delay: 500
    }
  ];
  
  return (
    <section id="event-details" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Competition Format
        </span>
        <h2 className="section-title">
          <GradientText>Event Details</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          CodeWars 3.0 consists of multiple challenging rounds designed to test different aspects of your coding abilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
        {rounds.map((round, index) => (
          <AnimatedCard 
            key={index}
            className="p-8"
            animationDelay={round.delay}
          >
            <h3 className="text-xl font-bold blue-glow mb-4">{round.title}</h3>
            <p className="text-white/80 mb-6">{round.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {round.details.map((detail, dIndex) => (
                <div key={dIndex} className="glass p-3 rounded-lg flex items-center">
                  <div className="w-2 h-2 rounded-full bg-codewars-blue mr-3"></div>
                  <span className="text-white/90 text-sm">{detail}</span>
                </div>
              ))}
            </div>
            
            {index === rounds.length - 1 && (
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://leetcode.com/problems/valid-binary-search-tree/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-codewars-blue hover:text-codewars-cyan transition-colors"
                >
                  <span>Try a sample problem on LeetCode</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </AnimatedCard>
        ))}
      </div>
      
      <div className="mt-20 glass p-8 rounded-2xl max-w-4xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-white mb-6">Fair Play & Violation Consequences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="neo-blur p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-2">Plagiarism</h4>
            <p className="text-white/70">Unauthorized collaboration or external help will result in disqualification.</p>
          </div>
          
          <div className="neo-blur p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-2">Team Disruption</h4>
            <p className="text-white/70">Disrupting another team (outside of Round 3 bug injection) will lead to immediate elimination.</p>
          </div>
          
          <div className="neo-blur p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-2">Unfair Debugging</h4>
            <p className="text-white/70">Deleting code instead of fixing it will result in penalty points or disqualification.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
