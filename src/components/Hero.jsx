import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left p-6 max-w-4xl z-10"
      >
        <p className="text-gray mb-2">Hi I am</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light">
          Pankaj Kumawat
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-accent">
          Full-Stack Developer & AI Enthusiast
        </h2>
        <div className="flex space-x-4 mb-8">
          <a
            href="#contact"
            onClick={(e) => {
              const contactSection = document.querySelector('#contact');
              if (!contactSection) {
                e.preventDefault();
                window.location.href = 'mailto:pankajkumawat@example.com?subject=Job%20Opportunity';
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-dark font-semibold rounded-md hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
          <a
            href="/assets/pankaj-kumawat-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-light text-light bg-transparent hover:bg-gray/20 rounded-md transition-colors"
          >
            Download CV
          </a>
        </div>
        <div className="flex space-x-4 text-gray">
          <a
            href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray hover:text-accent transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/pankajkumawat15m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/pankajkumawat_pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </motion.div>
      <motion.img
        src="/assets/pankaj-photo.jpg"
        alt="Pankaj Kumawat"
        initial={{ opacity: 0, x: 100, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-6 top-1/4 max-w-[300px] md:max-w-[400px] rounded-lg border-4 border-accent shadow-2xl filter brightness-110 hover:brightness-125 transition-all duration-300"
        style={{
          boxShadow:
            "0 0 25px rgba(255, 98, 0, 0.8), 0 0 40px rgba(255, 98, 0, 0.6)",
          zIndex: 20,
          transformOrigin: "center",
        }}
      />
    </section>
  );
}

export default Hero;