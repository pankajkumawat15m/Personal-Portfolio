import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { FaMedal, FaGraduationCap, FaCode, FaLightbulb, FaChevronRight } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaMedal />,
      title: "Experience",
      items: [
        "1+ year – Full Stack Development (MERN)",
        "1+ year – Data Science & Machine Learning",
        "Multiple successful projects deployed",
      ],
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      items: [
        "B.Tech in Computer Science & Engineering",
        "Engineering College Bikaner",
        "B.S. in Data Science, IIT Madras",
      ],
    },
    {
      icon: <FaCode />,
      title: "Tech Expertise",
      items: [
        "MERN Stack (MongoDB, Express, React, Node)",
        "Python, NumPy, Pandas, Scikit-learn",
        "TypeScript, Redux, Tailwind CSS",
      ],
    },
    {
      icon: <FaLightbulb />,
      title: "Focus Areas",
      items: [
        "Responsive Web Applications",
        "Machine Learning Models",
        "UI/UX Design & Development",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark/95 border-b border-light/5 relative z-10 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-light mb-3 tracking-tight">
            About Me
          </h2>
          <span className="block w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* 2-Column Split Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 max-w-6xl mx-auto">
          {/* Left Column: Premium macOS Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative group rounded-xl overflow-hidden border border-light/10 bg-dark/60 backdrop-blur-xl shadow-2xl hover:border-accent/30 transition-all duration-500">
              {/* macOS Header Bar */}
              <div className="bg-offset/80 px-4 py-3 border-b border-light/5 flex items-center justify-between select-none">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] block shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] block shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] block shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
                </div>
                <div className="text-[11px] font-mono text-light/40 font-semibold tracking-wide">
                  pankaj_bio.json
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* IDE Code Content */}
              <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed text-light/80 overflow-x-auto select-none">
                <div>
                  <span className="text-pink-500 font-bold">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-light/50">=</span>{" "}
                  <span className="text-light/80">{"{"}</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">name</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-orange-300">"Pankaj Kumawat"</span>,
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">role</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-orange-300">"Full-Stack & Data Science"</span>,
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">stack</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-light/80">[</span>
                  <span className="text-orange-300">"MERN"</span>,{" "}
                  <span className="text-orange-300">"Python"</span>,{" "}
                  <span className="text-orange-300">"ML"</span>
                  <span className="text-light/80">]</span>,
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">passion</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-orange-300">"Engineering scalable systems"</span>,
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">education</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-orange-300">"B.Tech CSE & B.S. DS"</span>,
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-purple-400">collaborative</span>
                  <span className="text-light/50">:</span>{" "}
                  <span className="text-green-400">true</span>
                </div>
                <div>
                  <span className="text-light/80">{"};"}</span>
                </div>

                {/* Nice small animated terminal-like cursor at bottom */}
                <div className="mt-4 pt-4 border-t border-light/5 flex items-center text-[10px] sm:text-[11px] text-light/40">
                  <span className="text-green-400 mr-1.5">⚡</span> Ready to collaborate.
                  <span className="ml-1 w-1.5 h-3.5 bg-accent/80 animate-pulse inline-block align-middle" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Text Bio and Taglines */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4 tracking-wide text-center sm:text-left">
              Engineering web experiences backed by data-driven intelligence.
            </h3>
            
            <div className="border-l-2 border-accent/25 pl-4 sm:pl-5 space-y-4 text-light/85">
              <p className="text-sm sm:text-base md:text-[17px] leading-relaxed font-semibold">
                Hey! I'm <span className="text-accent font-bold">Pankaj Kumawat</span> — a dedicated full-stack web developer and data science enthusiast. I specialize in building modern, high-performance web apps using the MERN stack, delivering intuitive UIs and scalable backend systems.
              </p>
              <p className="text-sm sm:text-base md:text-[17px] leading-relaxed font-semibold">
                Alongside, I explore the world of data science with tools like Python, NumPy, Pandas, and scikit-learn — extracting insights, building predictive models, and making data-driven decisions. I bring both technical depth and creative vision to the table.
              </p>
              <p className="text-sm sm:text-base md:text-[17px] leading-relaxed font-semibold">
                I'm continuously learning, love collaborating, and strive to craft digital solutions that make an impact. Let's connect and build something remarkable together!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid for Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Card className="bg-offset/50 border border-light/10 hover:border-accent/40 hover:shadow-[0_4px_25px_rgba(var(--accent-rgb),0.12)] transition-all duration-300 backdrop-blur-xl h-full flex flex-col rounded-xl overflow-hidden group">
                <CardHeader className="flex flex-col items-center text-center pb-3 pt-6 shrink-0 relative">
                  {/* Decorative card glow behind icon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent/5 rounded-full filter blur-xl group-hover:bg-accent/15 transition-all duration-300" />
                  
                  {/* Icon with elegant round border */}
                  <div className="w-12 h-12 rounded-full border border-light/10 flex items-center justify-center text-accent text-xl bg-dark/40 mb-3 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-accent select-none">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 flex-grow">
                  <ul className="space-y-3.5 text-light/75 text-[13px] sm:text-[14px] font-semibold">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed text-left">
                        <FaChevronRight className="text-accent text-[10px] mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
