
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GradientText from "../ui/GradientText";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navLinks = [
    { name: "Home", sectionId: "hero" },
    { name: "About", sectionId: "about" },
    { name: "Event Details", sectionId: "event-details" },
    { name: "Timeline", sectionId: "timeline" },
    { name: "Team", sectionId: "team" },
    { name: "Sponsors", sectionId: "sponsors" },
    { name: "FAQ", sectionId: "faq" },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-xl",
      isScrolled ? "bg-codewars-darker/80 border-b border-white/5 shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold">
              <GradientText>CodeWars</GradientText> <span className="text-white">3.0</span>
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-white/70 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-codewars-blue/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </nav>
          
          {/* Register Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="https://unstop.com/o/QqgMj4O?lb=s4UlNwJR" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Register Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[72px] left-0 right-0 h-[calc(100vh-72px)] bg-codewars-darker/95 backdrop-blur-xl transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-white text-lg py-3 px-4 border-b border-white/10 hover:bg-white/5 transition-colors text-left"
            >
              {link.name}
            </button>
          ))}
          
          <div className="pt-4">
            <a 
              href="https://unstop.com/o/QqgMj4O?lb=s4UlNwJR" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary w-full flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
