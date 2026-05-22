import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBriefcase, FaRocket, FaTools } from "react-icons/fa";

// Animate each stat card numbers on mount
function CounterStat({ value, label, icon }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value);
  const isPlus = value.includes("+");

  useEffect(() => {
    let start = 0;
    const duration = 1200; // 1.2s count up duration
    const steps = 30;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="w-full max-w-xs relative group">
      <Card className="bg-offset/50 border border-light/10 backdrop-blur-xl text-center hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.12)] transition-all duration-300 rounded-xl overflow-hidden relative p-6 flex flex-col items-center">
        {/* Decorative dynamic neon glow orb in card background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent/5 rounded-full filter blur-xl group-hover:bg-accent/15 transition-all duration-300" />
        
        {/* Visual Icon Badge */}
        <div className="w-12 h-12 rounded-full border border-light/10 flex items-center justify-center text-accent text-xl bg-dark/60 mb-4 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
          {icon}
        </div>

        <CardContent className="p-0">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-accent mb-2 tracking-tight select-none">
            {count}{isPlus ? "+" : ""}
          </h3>
          <p className="text-light/75 text-xs sm:text-sm font-bold tracking-widest uppercase select-none group-hover:text-light transition-colors duration-300">
            {label}
          </p>
        </CardContent>

        {/* Dynamic expanding bottom accent strip */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/30 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)] transition-all duration-300 scale-x-50 group-hover:scale-x-100" />
      </Card>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: "1+", label: "Years Experience", icon: <FaBriefcase /> },
    { value: "10+", label: "Projects Completed", icon: <FaRocket /> },
    { value: "15+", label: "Technologies Mastered", icon: <FaTools /> },
  ];

  return (
    <section id="stats" className="py-16 bg-offset border-b border-light/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <CounterStat value={stat.value} label={stat.label} icon={stat.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
