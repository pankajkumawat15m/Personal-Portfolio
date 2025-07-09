import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="pt-28 sm:pt-32 min-h-screen flex items-center justify-center bg-dark relative overflow-hidden px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark/90 to-accent/20"
        animate={{
          background: [
            "linear-gradient(45deg, #1a1a1a, #1a1a1a, rgba(255, 98, 0, 0.2))",
            "linear-gradient(45deg, #1a1a1a, rgba(255, 98, 0, 0.2), #1a1a1a)",
            "linear-gradient(45deg, rgba(255, 98, 0, 0.2), #1a1a1a, #1a1a1a)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left p-4 sm:p-8 max-w-xl"
        >
          <p className="text-gray-400 text-lg md:text-xl mb-3 font-medium tracking-wide">
            Hi, I am
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-light leading-tight tracking-tight">
            Pankaj Kumawat
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-accent font-semibold mb-8">
            Full-Stack Developer & AI Enthusiast
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                const contactSection = document.querySelector("#contact");
                if (!contactSection) {
                  e.preventDefault();
                  window.location.href =
                    "mailto:pankajkumawat@example.com?subject=Job%20Opportunity";
                }
              }}
              aria-label="Hire Pankaj Kumawat"
            >
              <Button className="w-full sm:w-auto px-8 py-3 font-semibold bg-accent text-dark hover:bg-accent/80 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                Hire Me
              </Button>
            </a>
            <a
              href="/assets/pankaj-kumawat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 text-light border border-light hover:bg-light/10 transition-all duration-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-light"
              >
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 text-gray-400 mt-6">
            <a
              href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition transform hover:scale-110 focus:outline-none"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:pankajkumawat@example.com"
              aria-label="Email"
              className="hover:text-accent transition transform hover:scale-110 focus:outline-none"
            >
              <FaEnvelope size={26} />
            </a>
            <a
              href="https://github.com/pankajkumawat15m"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition transform hover:scale-110 focus:outline-none"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.instagram.com/pankajkumawat_pk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition transform hover:scale-110 focus:outline-none"
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]"
        >
          <motion.img
            src="/assets/pankaj-photo.jpg"
            alt="Pankaj Kumawat"
            className="w-full h-auto max-h-[420px] object-cover object-top rounded-2xl border-4 border-accent shadow-2xl"
            style={{
              transformOrigin: "center",
              boxShadow:
                "0 0 20px rgba(255, 98, 0, 0.6), 0 0 50px rgba(255, 98, 0, 0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -10, 0], // floating effect
              boxShadow: [
                "0 0 20px rgba(255, 98, 0, 0.6), 0 0 50px rgba(255, 98, 0, 0.3)",
                "0 0 30px rgba(255, 98, 0, 0.8), 0 0 60px rgba(255, 98, 0, 0.4)",
                "0 0 20px rgba(255, 98, 0, 0.6), 0 0 50px rgba(255, 98, 0, 0.3)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
