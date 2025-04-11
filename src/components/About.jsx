import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

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
        <Card className="bg-dark/70 border-none max-w-3xl mx-auto backdrop-blur-md shadow-xl">
          <CardContent className="p-8 text-light">
            <p className="text-lg leading-relaxed text-gray-200">
              Hello! I'm Pankaj Kumawat, a passionate full-stack web developer
              with a strong foundation in the MERN stack (MongoDB, Express.js,
              React, Node.js). Currently, I'm pursuing a degree in Data Science
              at the prestigious IIT Madras, where I'm honing my skills in
              machine learning, data analysis, and visualization. With a
              relentless drive to solve complex problems, I blend creativity and
              technical expertise to build scalable web applications and derive
              meaningful insights from data. My journey is fueled by
              determination, a love for coding, and a commitment to continuous
              learning. Let's connect to create something amazing together!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default About;
