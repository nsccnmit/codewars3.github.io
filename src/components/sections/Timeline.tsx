
import { CalendarClock } from "lucide-react";
import GradientText from "../ui/GradientText";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "March 16, 2025",
      title: "Registration Opens",
      description: "Sign up on Unstop to secure your spot in CodeWars 3.0"
    },
    {
      date: "March 30, 2025",
      title: "Registration Closes",
      description: "Last day to register for the competition"
    },
    {
      date: "April 4, 2025",
      title: "Round 1: TRIVIA TRIUMPH",
      description: "Interactive quiz on Menti testing coding knowledge and logical reasoning"
    },
    {
      date: "April 4, 2025",
      title: "Round 2: BYTE-SIZED BATTLE",
      description: "Write the shortest possible correct solution to coding challenges"
    },
    {
      date: "April 4, 2025",
      title: "Round 3: BUG BUSTER",
      description: "Debugging challenge with strategic sabotage element"
    },
    {
      date: "April 4, 2025",
      title: "Award Ceremony",
      description: "Winners announcement and prize distribution"
    }
  ];
  
  return (
    <section id="timeline" className="py-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
            Key Dates
          </span>
          <h2 className="section-title">
            <GradientText>Event Timeline</GradientText>
          </h2>
          <p className="text-lg text-white/80 mt-6">
            Mark your calendar with these important dates for CodeWars 3.0
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative pl-8 md:pl-12">
            <div className="timeline-line"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className="mb-12 relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-2 md:-left-3 timeline-dot"></div>
                <div className="glass p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold blue-glow">{event.title}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <CalendarClock className="h-4 w-4 text-codewars-blue mr-2" />
                      <span className="text-white/70 text-sm">{event.date}</span>
                    </div>
                  </div>
                  <p className="text-white/80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://unstop.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
