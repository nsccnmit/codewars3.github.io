
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
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
                href="mailto:contact@codewars.tech" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <Link to="/#about" className="text-white/70 hover:text-white transition-colors">About</Link>
            <Link to="/#event-details" className="text-white/70 hover:text-white transition-colors">Event Details</Link>
            <Link to="/#timeline" className="text-white/70 hover:text-white transition-colors">Timeline</Link>
            <Link to="/team" className="text-white/70 hover:text-white transition-colors">Team</Link>
            <Link to="/sponsors" className="text-white/70 hover:text-white transition-colors">Sponsors</Link>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <p className="text-white/70">
              NMIT, Bengaluru, India
            </p>
            <a 
              href="mailto:contact@codewars.tech" 
              className="text-white/70 hover:text-white transition-colors"
            >
              contact@codewars.tech
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
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
