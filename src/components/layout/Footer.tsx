
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import GradientText from "../ui/GradientText";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-codewars-darker/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display text-2xl font-bold">
                <GradientText>CodeWars</GradientText> <span className="text-white">3.0</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm max-w-md">
              Part of Anaadyanta 2025 - NMIT's Techno-Cultural Fest. 
              The ultimate coding competition for college students and tech enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com/codewars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://forms.gle/A123Xyz456" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Contact Form"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">Home</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">About</button>
            <button onClick={() => document.getElementById('event-details')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">Event Details</button>
            <button onClick={() => document.getElementById('timeline')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">Timeline</button>
            <button onClick={() => document.getElementById('team')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">Team</button>
            <button onClick={() => document.getElementById('sponsors')?.scrollIntoView({behavior: 'smooth'})} className="text-white/70 hover:text-white transition-colors text-left">Sponsors</button>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <p className="text-white/70">
              NMIT, Bengaluru, India
            </p>
            <a 
              href="https://forms.gle/A123Xyz456" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact Form
            </a>
            <a 
              href="tel:+919876543210" 
              className="text-white/70 hover:text-white transition-colors"
            >
              +91 9876543210
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} CodeWars 3.0 - All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://forms.gle/A123Xyz456" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="https://forms.gle/A123Xyz456" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
