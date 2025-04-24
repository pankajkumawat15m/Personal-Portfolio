import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNode, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPython } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { icon: <FaHtml5 />, name: "HTML", level: "Experienced" },
      { icon: <FaCss3Alt />, name: "CSS", level: "Experienced" },
      { icon: <FaJs />, name: "JavaScript", level: "Experienced" },
      { icon: <FaReact />, name: "React", level: "Intermediate" },
      { icon: <FaNode />, name: "Node.js", level: "Basic" },
      { icon: <FaGithub />, name: "GitHub", level: "Intermediate" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { icon: <SiExpress />, name: "Express", level: "Basic" },
      { icon: <SiMongodb />, name: "MongoDB", level: "Basic" },
      { icon: <SiPostgresql />, name: "PostgreSQL", level: "Basic" },
      { icon: <SiMysql />, name: "MySQL", level: "Experienced" },
      { icon: <SiPython />, name: "Python", level: "Basic" },
    ],
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-4 md:px-12 bg-[#2C2C2C] text-light"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-light relative inline-block">
          Experience
          <span className="block w-16 h-1 bg-accent mt-2 mx-auto rounded-full" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-4 text-accent">{group.category}</h3>
            <div className="space-y-4">
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-[#262626] rounded-lg shadow hover:shadow-[0_0_10px_#ff6a00]/40 transition-shadow"
                >
                  <div className="text-accent text-xl">{skill.icon}</div>
                  <div>
                    <p className="text-lg font-bold text-light">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.level}</p>
                  </div>
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
