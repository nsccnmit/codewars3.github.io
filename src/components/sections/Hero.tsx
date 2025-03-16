
import { useEffect, useRef } from "react";
import GradientText from "../ui/GradientText";

// Enhanced binary code animation in the background
const BinaryCodeBackground = () => {
  const generateBinaryString = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.random() > 0.8 ? '1' : '0';
      // Add space every 8 characters
      if (i % 8 === 7) result += ' ';
      // Add new line to create a grid-like pattern
      if (i % 50 === 49) result += '\n';
    }
    return result;
  };

  return (
    <div className="binary-code">
      <div className="binary-code-animation left-animation">
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation center-animation" style={{ animationDelay: "2s" }}>
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation right-animation" style={{ animationDelay: "4s" }}>
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation left-animation" style={{ animationDelay: "1s", top: "20%" }}>
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation right-animation" style={{ animationDelay: "3s", top: "40%" }}>
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation center-animation" style={{ animationDelay: "5s", top: "60%" }}>
        {generateBinaryString(3000)}
      </div>
      <div className="binary-code-animation left-animation" style={{ animationDelay: "7s", top: "80%" }}>
        {generateBinaryString(3000)}
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, rgba(10, 14, 10, 0) 50%)'
      }}
    >
      <BinaryCodeBackground />
      
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.05) 0%, rgba(10, 14, 10, 0) 30%)',
          transform: 'translate(var(--move-x, 0), var(--move-y, 0))',
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.05) 0%, rgba(10, 14, 10, 0) 30%)',
          transform: 'translate(calc(var(--move-x, 0) * -1), calc(var(--move-y, 0) * -1))',
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="relative mb-6 inline-block animate-float">
          <span className="glass text-white/90 text-xl md:text-2xl rounded-full px-6 py-4 backdrop-blur-xl border border-white/10 font-medium">
            Part of Anaadyanta 2025 • April 4th, 2025
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <GradientText>CodeWars</GradientText> <span className="text-white">3.0</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <GradientText variant="purple">Crack the code. Win the battle.</GradientText>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a 
            href="https://unstop.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Register Now
          </a>
          <a href="#about" className="button-secondary">
            Learn More
          </a>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="glass inline-block px-6 py-4 backdrop-blur-xl border border-white/10 rounded-lg">
            <span className="text-white/90 text-lg font-medium">
              NMIT Campus, Bengaluru • April 4th, 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
