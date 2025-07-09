import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { useEffect, useState } from "react";

// Reusable Circular Meter component
function CircularMeter({ percent, size = 56 }) {
  const radius = size / 2 - 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = percent / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= percent) {
        start = percent;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 20);
    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="relative w-[56px] h-[56px]">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#333"
          strokeWidth="6"
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ff6a00"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center rotate-[90deg]">
        <span className="text-xs font-semibold text-accent">{count}%</span>
      </div>
    </div>
  );
}

const skills = [
  {
    category: "Frontend Development",
    items: [
      { icon: <FaHtml5 />, name: "HTML", percent: 90 },
      { icon: <FaCss3Alt />, name: "CSS", percent: 85 },
      { icon: <FaJs />, name: "JavaScript", percent: 80 },
      { icon: <FaReact />, name: "React", percent: 75 },
      { icon: <FaNode />, name: "Node.js", percent: 65 },
      { icon: <FaGithub />, name: "GitHub", percent: 80 },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { icon: <SiExpress />, name: "Express", percent: 60 },
      { icon: <SiMongodb />, name: "MongoDB", percent: 70 },
      { icon: <SiPostgresql />, name: "PostgreSQL", percent: 60 },
      { icon: <SiMysql />, name: "MySQL", percent: 85 },
      { icon: <SiPython />, name: "Python", percent: 70 },
    ],
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#2C2C2C] text-light"
    >
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light relative inline-block">
          Experience
          <span className="block w-12 sm:w-16 h-1 bg-accent mt-2 mx-auto rounded-full" />
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-accent">
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-[#262626] rounded-lg shadow hover:shadow-[0_0_10px_#ff6a00]/40 transition-shadow"
                >
                  <div className="text-accent text-xl sm:text-2xl">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-bold text-light">
                      {skill.name}
                    </p>
                  </div>
                  <CircularMeter percent={skill.percent} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;