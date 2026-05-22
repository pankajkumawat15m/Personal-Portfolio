import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import InteractiveBackground from "./InteractiveBackground";

function Hero() {
  return (
    <section
      id="home"
      className="pt-28 sm:pt-32 min-h-screen flex items-center justify-center bg-dark relative overflow-hidden px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* Background Animated Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark/95 to-accent/10 opacity-70 transition-all duration-300"
      />

      {/* Dynamic Interactive Particle Canvas Overlay */}
      <InteractiveBackground />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left p-4 sm:p-8 max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-light/60 text-lg md:text-xl mb-3 font-semibold tracking-wide"
          >
            Hi, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-light leading-tight tracking-tight drop-shadow-sm"
          >
            Pankaj Kumawat
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl text-accent font-bold mb-4 tracking-wide"
          >
            Full-Stack Developer & AI Enthusiast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-light/80 text-base md:text-lg mb-8 leading-relaxed font-medium"
          >
            Building modern web applications with MERN Stack and solving
            real-world problems with AI/ML
          </motion.p>

          {/* Quick Stats Grid - Highlight metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-8 mb-8 justify-center lg:justify-start"
          >
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-accent">
                10+
              </div>
              <div className="text-xs sm:text-sm text-light/50 font-semibold tracking-wide">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-accent">
                1+
              </div>
              <div className="text-xs sm:text-sm text-light/50 font-semibold tracking-wide">Years Exp</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-accent">
                15+
              </div>
              <div className="text-xs sm:text-sm text-light/50 font-semibold tracking-wide">
                Technologies
              </div>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              onClick={(e) => {
                const contactSection = document.querySelector("#contact");
                if (!contactSection) {
                  e.preventDefault();
                  window.location.href =
                    "mailto:pankajpkm112@gmail.com?subject=Job%20Opportunity";
                }
              }}
              aria-label="Hire Pankaj Kumawat"
            >
              <Button className="w-full sm:w-auto px-8 py-3.5 font-bold bg-accent text-dark hover:bg-accent/80 transition-all duration-300 rounded-lg shadow-[0_4px_15px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_4px_25px_rgba(var(--accent-rgb),0.5)] focus:ring-2 focus:ring-offset-2 focus:ring-accent">
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
                className="w-full sm:w-auto px-8 py-3.5 text-light border border-light hover:bg-light/10 transition-all duration-300 rounded-lg font-semibold hover:border-accent hover:text-accent"
              >
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Social Contact Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center lg:justify-start gap-6 text-light/60 mt-6"
          >
            <a
              href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition transform hover:scale-115 duration-300 focus:outline-none"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:pankajpkm112@gmail.com"
              aria-label="Email"
              className="hover:text-accent transition transform hover:scale-115 duration-300 focus:outline-none"
            >
              <FaEnvelope size={26} />
            </a>
            <a
              href="https://github.com/pankajkumawat15m"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition transform hover:scale-115 duration-300 focus:outline-none"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.instagram.com/pankajkumawat_pk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition transform hover:scale-115 duration-300 focus:outline-none"
            >
              <FaInstagram size={26} />
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Profile Picture Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] select-none"
        >
          <motion.img
            src="/assets/pankaj-photo.jpg"
            alt="Pankaj Kumawat"
            className="w-full h-auto max-h-[420px] object-cover object-top rounded-2xl border-4 border-accent shadow-[0_0_25px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.55)] transition-shadow duration-300"
            style={{
              transformOrigin: "center",
            }}
            whileHover={{ scale: 1.03 }}
            animate={{
              y: [0, -10, 0], // floating effect
            }}
            transition={{
              duration: 5,
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
