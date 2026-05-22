import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNode,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaJava,
  FaAws,
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
  SiNextdotjs,
  SiSocketdotio,
  SiSpringboot,
} from "react-icons/si";
import { useEffect, useState } from "react";

// Reusable circular skill loading meter
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
    <div className="relative w-[56px] h-[56px] select-none">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          className="dark:stroke-neutral-800 stroke-neutral-200"
          strokeWidth="5"
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--accent)"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] font-bold text-accent">{count}%</span>
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
      { icon: <SiNextdotjs />, name: "Next.js", percent: 85 },
      { icon: <SiRedux />, name: "Redux", percent: 70 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", percent: 88 },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { icon: <FaNode />, name: "Node.js", percent: 78 },
      { icon: <SiExpress />, name: "Express.js", percent: 75 },
      { icon: <SiSocketdotio />, name: "Socket.io", percent: 80 },
      { icon: <FaJava />, name: "Java", percent: 80 },
      { icon: <SiSpringboot />, name: "Spring Boot", percent: 78 },
      { icon: <FaAws />, name: "AWS S3", percent: 75 },
      { icon: <SiMongodb />, name: "MongoDB", percent: 80 },
      { icon: <SiPostgresql />, name: "PostgreSQL", percent: 65 },
      { icon: <SiMysql />, name: "MySQL", percent: 70 },
      { icon: <SiPython />, name: "Python", percent: 76 },
      { icon: <FaGithub />, name: "Git & GitHub", percent: 85 },
    ],
  },
];

const timelineData = [
  {
    title: "B.S. in Data Science & Applications",
    subtitle: "IIT Madras",
    date: "Present",
    description: "Rigorous curriculum focused on Machine Learning model architecture, Data Analytics pipelines, statistical computation, and high-performance Python programming.",
    icon: <FaGraduationCap />,
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Engineering College Bikaner",
    date: "Present",
    description: "Building strong computer science foundations in Data Structures, Algorithm design, Database Management Systems, and Software Engineering practices.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Full-Stack Development Journey",
    subtitle: "Independent Software Engineering",
    date: "2024 - Present",
    description: "Architecting responsive MERN web apps, implementing secure RESTful APIs, utilizing state managers (Redux), and contributing to various open-source web ecosystems.",
    icon: <FaBriefcase />,
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-offset text-light border-b border-light/5 relative z-10"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-light relative inline-block"
        >
          Skills & Journey
          <span className="block w-16 sm:w-20 h-1 bg-accent mt-3 mx-auto rounded-full" />
        </motion.h2>
        <p className="text-light/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
          Proficient in modern web technologies with hands-on experience in
          building full-stack applications and training smart models
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Skills Grids (7 columns on desktop) */}
        <div className="lg:col-span-7 space-y-10">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-accent flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: i * 0.04,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 sm:p-4 bg-dark/40 border border-light/10 rounded-xl shadow-md hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.1)] hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="text-accent text-xl sm:text-2xl shrink-0">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-bold text-light">
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

        {/* Right Side: Timeline & Journey (5 columns on desktop) */}
        <div className="lg:col-span-5">
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-6 text-accent flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
            Academic & Tech Journey
          </motion.h3>

          <div className="relative border-l-2 border-light/10 ml-4 space-y-8 py-2">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-8 group"
              >
                {/* Timeline Icon Badge */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-dark border-2 border-accent text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(var(--accent-rgb),0.2)]">
                  {item.icon}
                </div>

                {/* Timeline content bubble */}
                <div className="bg-dark/40 border border-light/10 p-5 rounded-xl hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.1)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-light group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <h5 className="text-xs sm:text-sm font-semibold text-light/75">
                        {item.subtitle}
                      </h5>
                    </div>
                    <span className="px-2.5 py-0.5 bg-accent/10 border border-accent/25 text-accent text-[11px] font-bold rounded-full w-fit">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-light/70 text-xs sm:text-sm leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
