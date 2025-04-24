import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "framer-motion";
import { FaMedal, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-16 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-dark/70 border-none max-w-2xl mx-auto backdrop-blur-md shadow-xl min-h-[180px]">
            <CardHeader className="flex items-center">
              <FaMedal className="text-accent mr-2" size={24} />
              <h3 className="text-xl font-semibold text-light">Experience</h3>
            </CardHeader>
            <CardContent className="p-6 text-light">
              <p className="text-gray-200 mb-2">
                <strong>1+ year</strong> - Full Stack Developer
              </p>
              <p className="text-gray-200">
                <strong>1+ year</strong> - Data Science and Machine Learning
              </p>
            </CardContent>
          </Card>
          <Card className="bg-dark/70 border-none max-w-2xl mx-auto backdrop-blur-md shadow-xl min-h-[180px]">
            <CardHeader className="flex items-center">
              <FaGraduationCap className="text-accent mr-2" size={24} />
              <h3 className="text-xl font-semibold text-light">Education</h3>
            </CardHeader>
            <CardContent className="p-6 text-light">
              
              <p className="text-gray-200">
                B.Tech in CSE  ECB BIKANER<br></br> BS in Data Science and Application IIT Madras
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-dark/70 border-none max-w-5xl mx-auto mt-6 backdrop-blur-md shadow-xl">
          <CardContent className="p-8 text-light">
            <p className="text-lg leading-relaxed text-gray-200 text-center">
              Hello! I'm Pankaj Kumawat, a passionate full-stack web developer
              with expertise in the MERN stack (MongoDB, Express.js, React, Node.js).
              I craft scalable, user-centric web applications that blend seamless
              functionality with elegant design. Additionally, I bring proficiency
              in Data Science tools like Python, NumPy, and Pandas, with skills in
              machine learning, data analysis, and visualization to derive actionable
              insights. My relentless drive for excellence fuels my ability to solve
              complex challenges and deliver innovative solutions that exceed expectations.
              With a commitment to clean code, continuous learning, and collaboration,
              I'm eager to contribute my diverse skill set to a dynamic team. Let's
              build something extraordinary together!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default About;