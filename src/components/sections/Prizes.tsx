
import GradientText from "../ui/GradientText";
import { Award, Medal, Trophy } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      prize: "₹3,500",
      extras: ["Trophy", "Certificate", "InterviewBuddy Vouchers"],
      color: "from-[#FFD700] to-[#FFC107]",
      delay: 100,
      icon: <Trophy className="h-10 w-10 text-white animate-pulse" />
    },
    {
      position: "2nd Place",
      prize: "₹2,500",
      extras: ["Trophy", "Certificate", "InterviewBuddy Vouchers"],
      color: "from-[#C0C0C0] to-[#A0A0A0]",
      delay: 300,
      icon: <Medal className="h-10 w-10 text-white animate-pulse" />
    },
    {
      position: "3rd Place",
      prize: "₹1,000",
      extras: ["Trophy", "Certificate", "InterviewBuddy Vouchers"],
      color: "from-[#CD7F32] to-[#B87333]",
      delay: 500,
      icon: <Award className="h-10 w-10 text-white animate-pulse" />
    }
  ];
  
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Rewards
        </span>
        <h2 className="section-title">
          <GradientText>Prizes & Rewards</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          Compete for a total prize pool of ₹7,000 and recognition in CodeWars 3.0
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {prizes.map((prize, index) => (
          <AnimatedCard
            key={index}
            className="p-8 flex flex-col items-center text-center"
            animationDelay={prize.delay}
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${prize.color} 
                            transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
              {prize.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{prize.position}</h3>
            <div className="text-3xl font-bold blue-glow mb-4 animate-text-shimmer">{prize.prize}</div>
            <div className="mt-4">
              <h4 className="text-white font-medium mb-2">Additional Rewards:</h4>
              <ul className="flex flex-col space-y-2">
                {prize.extras.map((extra, i) => (
                  <li key={i} className="text-white/70">{extra}</li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        ))}
      </div>
      
      <div className="mt-20 glass p-8 rounded-2xl max-w-3xl mx-auto hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-500">
        <h3 className="text-center text-2xl font-bold text-white mb-6">For All Participants</h3>
        
        <div className="neo-blur p-6 rounded-xl hover:shadow-[0_0_15px_rgba(144,97,249,0.2)] transition-all duration-300">
          <h4 className="text-lg font-bold text-white mb-2 text-center">Exclusive InterviewBuddy Vouchers</h4>
          <p className="text-white/70 text-center">All participants will receive valuable vouchers from InterviewBuddy to help with interview preparation.</p>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/80">All participants will also receive digital certificates of participation.</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
