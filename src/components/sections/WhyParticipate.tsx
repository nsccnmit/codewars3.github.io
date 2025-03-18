
import { Briefcase, Handshake, Medal, Sparkles } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: <Medal className="h-10 w-10 text-codewars-blue" />,
      title: "Cash Prizes",
      description: "Win from a prize pool worth ₹7,000 with rewards for top performers.",
      delay: 100
    },
    {
      icon: <Sparkles className="h-10 w-10 text-codewars-purple" />,
      title: "Industry Exposure",
      description: "Get recognized by leading tech companies and industry professionals scouting for talent.",
      delay: 200
    },
    {
      icon: <Handshake className="h-10 w-10 text-codewars-cyan" />,
      title: "Networking",
      description: "Connect with fellow coders, mentors, and professionals in a collaborative environment.",
      delay: 300
    },
    {
      icon: <Briefcase className="h-10 w-10 text-codewars-pink" />,
      title: "Career Opportunities",
      description: "Unlock internship and job opportunities with our industry partners and sponsors.",
      delay: 400
    }
  ];
  
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Benefits
        </span>
        <h2 className="section-title">
          <GradientText>Why Participate</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          CodeWars 3.0 offers more than just a competition. Here's why you should be part of this exciting coding battle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <AnimatedCard 
            key={index}
            className="p-8 flex items-start gap-5"
            animationDelay={benefit.delay}
          >
            <div className="flex-shrink-0 glass rounded-full p-4">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
      
      <div className="mt-16 glass p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Test Your Coding Skills?</h3>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Join hundreds of participants from across India in this thrilling coding competition. Participate solo or as a team of 2 and showcase your talent.
        </p>
        <a 
          href="https://unstop.com/o/QqgMj4O?lb=s4UlNwJR" 
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default WhyParticipate;
