
import GradientText from "../ui/GradientText";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      prize: "₹3,500",
      extras: ["Trophy", "Certificate", "Internship Opportunities"],
      color: "from-[#FFD700] to-[#FFC107]",
      delay: 100
    },
    {
      position: "2nd Place",
      prize: "₹2,500",
      extras: ["Trophy", "Certificate", "Exclusive Goodies"],
      color: "from-[#C0C0C0] to-[#A0A0A0]",
      delay: 300
    },
    {
      position: "3rd Place",
      prize: "₹1,000",
      extras: ["Trophy", "Certificate", "Tech Gadgets"],
      color: "from-[#CD7F32] to-[#B87333]",
      delay: 500
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
          <div 
            key={index}
            className="card p-8 flex flex-col items-center text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${prize.delay}ms` }}
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${prize.color}`}>
              <span className="text-white text-xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{prize.position}</h3>
            <div className="text-3xl font-bold blue-glow mb-4">{prize.prize}</div>
            <div className="mt-4">
              <h4 className="text-white font-medium mb-2">Additional Rewards:</h4>
              <ul className="flex flex-col space-y-2">
                {prize.extras.map((extra, i) => (
                  <li key={i} className="text-white/70">{extra}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 glass p-8 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-white mb-6">For All Participants</h3>
        
        <div className="neo-blur p-6 rounded-xl">
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
