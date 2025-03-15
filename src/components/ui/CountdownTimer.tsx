
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" }
  ];
  
  return (
    <div className={cn("flex items-center justify-center gap-4 sm:gap-6", className)}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative glass px-4 py-3 rounded-lg min-w-[80px] mb-2 text-center">
            <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-codewars-blue/30 via-transparent to-codewars-purple/30 opacity-50"></div>
            <span className="text-2xl sm:text-3xl font-display font-bold blue-glow">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm text-white/70">{unit.label}</span>
          {index < timeUnits.length - 1 && (
            <span className="hidden sm:block absolute text-3xl text-white/70 ml-[100px]">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
