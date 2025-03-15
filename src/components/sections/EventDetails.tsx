
import { ExternalLink } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const EventDetails = () => {
  const rounds = [
    {
      title: "Round 1: Online MCQs",
      description: "Test your fundamental knowledge with a series of multiple-choice questions covering algorithms, data structures, and general programming concepts.",
      details: [
        "Duration: 60 minutes",
        "Format: 30 multiple-choice questions",
        "Topics: Data structures, algorithms, time complexity",
        "Platform: Online via Unstop"
      ],
      delay: 100
    },
    {
      title: "Round 2: Coding Challenge",
      description: "Solve a set of coding problems with increasing difficulty levels to demonstrate your problem-solving skills and algorithmic thinking.",
      details: [
        "Duration: 2 hours",
        "Format: 5 programming problems",
        "Languages: C, C++, Java, Python",
        "Judging: Based on correctness, efficiency, and code quality"
      ],
      delay: 300
    },
    {
      title: "Round 3: Live Hackathon",
      description: "The final showdown! Qualify for the on-site round at NMIT campus and compete in a live coding battle against the best participants.",
      details: [
        "Duration: 4 hours",
        "Format: Team-based hackathon (1-3 members)",
        "Challenge: Build a solution for a real-world problem",
        "Venue: NMIT Campus, Bengaluru"
      ],
      delay: 500
    }
  ];
  
  return (
    <section id="event-details" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Competition Format
        </span>
        <h2 className="section-title">
          <GradientText>Event Details</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          CodeWars 3.0 consists of multiple challenging rounds designed to test different aspects of your coding abilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
        {rounds.map((round, index) => (
          <AnimatedCard 
            key={index}
            className="p-8"
            animationDelay={round.delay}
          >
            <h3 className="text-xl font-bold blue-glow mb-4">{round.title}</h3>
            <p className="text-white/80 mb-6">{round.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {round.details.map((detail, dIndex) => (
                <div key={dIndex} className="glass p-3 rounded-lg flex items-center">
                  <div className="w-2 h-2 rounded-full bg-codewars-blue mr-3"></div>
                  <span className="text-white/90 text-sm">{detail}</span>
                </div>
              ))}
            </div>
            
            {index === rounds.length - 1 && (
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://unstop.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-codewars-blue hover:text-codewars-cyan transition-colors"
                >
                  <span>View complete rules and guidelines</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </AnimatedCard>
        ))}
      </div>
      
      <div className="mt-20 mb-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Sample Problem</h3>
        <p className="text-white/80 mb-8">
          Get a taste of what to expect in the competition with this sample problem:
        </p>
      </div>
      
      <div className="glass p-8 rounded-2xl max-w-4xl mx-auto animate-fade-in-up">
        <h4 className="text-xl font-bold blue-glow mb-4">Binary Search Tree Validator</h4>
        <p className="text-white/80 mb-6">
          Write a function that determines if a given binary tree is a valid binary search tree. A valid BST satisfies the condition where all nodes in the left subtree have values less than the node's value, and all nodes in the right subtree have values greater than the node's value.
        </p>
        
        <div className="bg-black/20 p-4 rounded-lg mb-6 font-mono text-sm text-white/90 overflow-x-auto">
          <pre>{`class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  
  TreeNode(int val) {
    this.val = val;
  }
}

boolean isValidBST(TreeNode root) {
  // Your solution here
}`}</pre>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="https://unstop.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-codewars-blue hover:text-codewars-cyan transition-colors flex items-center space-x-2"
          >
            <span>Try more sample problems</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
