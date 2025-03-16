
import GradientText from "../ui/GradientText";
import CountdownTimer from "../ui/CountdownTimer";

const About = () => {
  // Target date: April 4th, 2025
  const eventDate = new Date("2025-04-04T09:00:00");
  
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          About the Event
        </span>
        <h2 className="section-title">
          <GradientText>The Ultimate Coding Battle</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          CodeWars 3.0 brings together the brightest minds from colleges across India to compete in an intensive coding competition. As part of Anaadyanta 2025, NMIT's Techno-Cultural Fest, this event will test your problem-solving abilities, algorithmic thinking, and coding skills in a high-stakes environment.
        </p>
      </div>
      
      <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Event Countdown</h3>
          <p className="text-white/70">Mark your calendars for April 4th, 2025</p>
        </div>
        
        <CountdownTimer targetDate={eventDate} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="card p-8 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="rounded-full bg-codewars-blue/10 p-4 mb-6">
            <div className="text-3xl font-bold blue-glow">1</div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Multiple Rounds</h3>
          <p className="text-white/70">
            From interactive quizzes to intense coding battles and debugging challenges, navigate through challenging rounds that test different aspects of your skills.
          </p>
        </div>
        
        <div className="card p-8 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="rounded-full bg-codewars-purple/10 p-4 mb-6">
            <div className="text-3xl font-bold purple-glow">2</div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Cash Prizes</h3>
          <p className="text-white/70">
            Compete for a prize pool worth ₹7,000, along with exclusive vouchers, certificates, and recognition.
          </p>
        </div>
        
        <div className="card p-8 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="rounded-full bg-codewars-pink/10 p-4 mb-6">
            <div className="text-3xl font-bold pink-glow">3</div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Networking</h3>
          <p className="text-white/70">
            Connect with industry professionals, like-minded coders, and potential employers in a dynamic environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
