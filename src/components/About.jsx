
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { FaMedal, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-light mb-12"
        >
          About Me
        </motion.h2>

        {/* Grid for Experience and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Experience Card */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="bg-dark/70 border-none backdrop-blur-md shadow-xl h-full flex flex-col">
              <CardHeader className="flex items-center gap-2">
                <FaMedal className="text-accent" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-light">Experience</h3>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 text-light space-y-2 flex-grow">
                <p className="text-gray-200 text-sm sm:text-base">
                  <strong>1+ year</strong> – Full Stack Development (MERN)
                </p>
                <p className="text-gray-200 text-sm sm:text-base">
                  <strong>1+ year</strong> – Data Science & Machine Learning
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="bg-dark/70 border-none backdrop-blur-md shadow-xl h-full flex flex-col">
              <CardHeader className="flex items-center gap-2">
                <FaGraduationCap className="text-accent" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-light">Education</h3>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 text-light flex-grow">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  🎓 B.Tech in Computer Science & Engineering, ECB Bikaner<br />
                  🎓 B.S. in Data Science & Applications, IIT Madras
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* About Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <Card className="bg-dark/70 border-none backdrop-blur-md shadow-xl max-w-5xl mx-auto">
            <CardContent className="p-6 sm:p-8 text-light">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 text-center sm:text-left">
                Hey! I'm <span className="text-accent font-semibold">Pankaj Kumawat</span> — a dedicated full-stack web developer and data science enthusiast. I specialize in building modern, high-performance web apps using the MERN stack (MongoDB, Express, React, Node.js), delivering intuitive UIs and scalable backend systems.
                <br /><br />
                Alongside, I explore the world of data science with tools like Python, NumPy, Pandas, and scikit-learn — extracting insights, building predictive models, and making data-driven decisions. Whether it’s engineering a smooth user experience or solving real-world problems through data, I bring both technical depth and creative vision to the table.
                <br /><br />
                I'm continuously learning, love collaborating, and strive to craft digital solutions that make an impact. Let’s connect and build something remarkable together.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
