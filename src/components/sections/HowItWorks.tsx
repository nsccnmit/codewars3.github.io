
import { CheckCircle, Code, Trophy, UserCheck } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="text-codewars-blue w-12 h-12" />,
      title: "Register",
      description: "Sign up on Unstop before the registration deadline to secure your spot in the competition.",
      delay: 100
    },
    {
      icon: <Code className="text-codewars-blue w-12 h-12" />,
      title: "Compete",
      description: "Participate in multiple rounds of challenging coding problems and algorithmic puzzles.",
      delay: 300
    },
    {
      icon: <Trophy className="text-codewars-blue w-12 h-12" />,
      title: "Win",
      description: "Top performers take home cash prizes, certificates, and exclusive goodies.",
      delay: 500
    }
  ];
  
  return (
    <section className="bg-codewars-navy/30 py-24 pb-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
            Participation Guide
          </span>
          <h2 className="section-title">
            <GradientText>How to Participate</GradientText>
          </h2>
          <p className="text-lg text-white/80 mt-6">
            Follow these simple steps to join CodeWars 3.0 and showcase your coding skills on one of the biggest platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <AnimatedCard
              key={index}
              className="p-8 flex flex-col items-center text-center"
              animationDelay={step.delay}
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
              <div className="mt-6 flex items-center justify-center">
                <div className="glass rounded-full h-8 w-8 flex items-center justify-center">
                  <CheckCircle className="text-codewars-blue h-5 w-5" />
                </div>
                <span className="ml-2 text-white/90">Step {index + 1}</span>
              </div>
            </AnimatedCard>
          ))}
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

export default HowItWorks;
