import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left p-4 sm:p-6 max-w-lg lg:max-w-xl z-10"
        >
          <p className="text-gray text-base sm:text-lg mb-2">Hi, I am</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-light">
            Pankaj Kumawat
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-accent">
            Full-Stack Developer & AI Enthusiast
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb> mb-6 justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                const contactSection = document.querySelector('#contact');
                if (!contactSection) {
                  e.preventDefault();
                  window.location.href = 'mailto:pankajkumawat@example.com?subject=Job%20Opportunity';
                }
              }}
            >
              <Button className="w-full sm:w-auto px-6 py-3 text-dark font-semibold bg-accent hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg">
                Hire Me
              </Button>
            </a>
            <a
              href="/assets/pankaj-kumawat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-3 border-light text-light bg-transparent hover:bg-gray/20"
              >
                Download CV
              </Button>
            </a>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 text-gray mt-6">
            <a
              href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/pankajkumawat15m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/pankajkumawat_pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
        >
          <img
            src="/assets/pankaj-photo.jpg"
            alt="Pankaj Kumawat"
            className="w-full rounded-lg border-4 border-accent shadow-2xl filter brightness-110 hover:brightness-125 transition-all duration-300"
            style={{
              boxShadow:
                "0 0 25px rgba(255, 98, 0, 0.8), 0 0 40px rgba(255, 98, 0, 0.6)",
              transformOrigin: "center",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;