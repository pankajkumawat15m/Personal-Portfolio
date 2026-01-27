import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { FaMedal, FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";

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
        "B.S. in Data Science & Applications, IIT Madras",
      ],
    },
    {
      icon: <FaCode />,
      title: "Tech Expertise",
      items: [
        "MERN Stack (MongoDB, Express, React, Node.js)",
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
    <section id="about" className="py-12 sm:py-16 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-3">
            About Me
          </h2>
          <span className="block w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* About Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <Card className="bg-dark/70 border border-gray-800 hover:border-accent/30 transition-all backdrop-blur-md shadow-xl max-w-5xl mx-auto">
            <CardContent className="p-6 sm:p-8 text-light">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-center sm:text-left">
                Hey! I'm{" "}
                <span className="text-accent font-semibold">
                  Pankaj Kumawat
                </span>{" "}
                — a dedicated full-stack web developer and data science
                enthusiast. I specialize in building modern, high-performance
                web apps using the MERN stack (MongoDB, Express, React,
                Node.js), delivering intuitive UIs and scalable backend systems.
                <br />
                <br />
                Alongside, I explore the world of data science with tools like
                Python, NumPy, Pandas, and scikit-learn — extracting insights,
                building predictive models, and making data-driven decisions.
                Whether it’s engineering a smooth user experience or solving
                real-world problems through data, I bring both technical depth
                and creative vision to the table.
                <br />
                <br />
                I'm continuously learning, love collaborating, and strive to
                craft digital solutions that make an impact. Let’s connect and
                build something remarkable together.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grid for Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-dark/70 border border-gray-800 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] transition-all backdrop-blur-md h-full flex flex-col">
                <CardHeader className="flex flex-col items-center text-center pb-3">
                  <div className="text-accent text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-accent">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 text-center flex-grow">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
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
