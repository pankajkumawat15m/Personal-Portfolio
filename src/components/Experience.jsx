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
  SiTailwindcss,
  SiTypescript,
  SiRedux,
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
      { icon: <FaHtml5 />, name: "HTML5", percent: 90 },
      { icon: <FaCss3Alt />, name: "CSS3", percent: 85 },
      { icon: <FaJs />, name: "JavaScript", percent: 82 },
      { icon: <SiTypescript />, name: "TypeScript", percent: 75 },
      { icon: <FaReact />, name: "React.js", percent: 80 },
      { icon: <SiRedux />, name: "Redux", percent: 70 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", percent: 88 },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { icon: <FaNode />, name: "Node.js", percent: 78 },
      { icon: <SiExpress />, name: "Express.js", percent: 75 },
      { icon: <SiMongodb />, name: "MongoDB", percent: 80 },
      { icon: <SiPostgresql />, name: "PostgreSQL", percent: 65 },
      { icon: <SiMysql />, name: "MySQL", percent: 70 },
      { icon: <SiPython />, name: "Python", percent: 76 },
      { icon: <FaGithub />, name: "Git & GitHub", percent: 85 },
    ],
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#2C2C2C] text-light"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-light relative inline-block"
        >
          Skills & Experience
          <span className="block w-16 sm:w-20 h-1 bg-accent mt-3 mx-auto rounded-full" />
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Proficient in modern web technologies with hands-on experience in
          building full-stack applications
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-accent flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
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
                  className="flex items-center gap-4 p-3 sm:p-4 bg-[#262626] rounded-lg shadow hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-accent text-xl sm:text-2xl">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-light">
                      {skill.name}
                    </p>
                  </div>
                  <CircularMeter percent={skill.percent} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
