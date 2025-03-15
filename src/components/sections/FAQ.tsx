
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import GradientText from "../ui/GradientText";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="card mb-4 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-bold text-white">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-codewars-blue" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white/70" />
          )}
        </div>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 pt-0 text-white/80">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Who can participate in CodeWars 3.0?",
      answer: "CodeWars 3.0 is open to all college students across India. Whether you're a fresher or a final year student, you're welcome to showcase your coding skills. Professionals can also participate in a separate category."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in CodeWars 3.0 is completely free of charge. We believe in providing equal opportunities for all coding enthusiasts to showcase their talents without any financial barriers."
    },
    {
      question: "Can I participate as a team?",
      answer: "Rounds 1 and 2 are individual competitions. For the final hackathon (Round 3), qualified participants can form teams of 1-3 members. All team members must have participated individually in the earlier rounds."
    },
    {
      question: "What programming languages are allowed?",
      answer: "You can code in C, C++, Java, Python, or JavaScript for the coding rounds. For the final hackathon, you can use any technology stack of your choice, as long as you can demonstrate its functionality."
    },
    {
      question: "How will I be evaluated?",
      answer: "Round 1 (MCQs) will be scored based on correct answers. Round 2 will evaluate your solutions on correctness, time complexity, and code quality. The final hackathon will be judged on innovation, implementation, usability, and presentation."
    },
    {
      question: "What if I can't attend the on-campus finals?",
      answer: "While we encourage on-campus participation for the finals, we understand that not everyone may be able to travel. Remote participation options will be available for the final round, but on-site participants may have certain advantages in the hackathon format."
    },
    {
      question: "Will I receive a certificate for participating?",
      answer: "Yes, all participants who complete at least one round will receive digital participation certificates. Finalists and winners will receive special recognition certificates in addition to their prizes."
    }
  ];
  
  return (
    <section id="faq" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Got Questions?
        </span>
        <h2 className="section-title">
          <GradientText>Frequently Asked Questions</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          Find answers to common questions about CodeWars 3.0
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-white/80 mb-6">
          Don't see your question here? Feel free to reach out to us directly.
        </p>
        <a 
          href="mailto:info@codewars.tech" 
          className="button-secondary inline-flex"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FAQ;
