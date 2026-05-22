import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Track scrolling: height scrolled & active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar shrink effect
      setScrolled(window.scrollY > 40);

      // 2. Reading progress bar math
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlight (Scrollspy)
  useEffect(() => {
    const sections = ["home", "about", "services", "experience", "portfolio", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // triggers when section covers middle viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#experience", id: "experience" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full transition-all duration-300 border-b ${
        isOpen
          ? "z-[9999] bg-dark border-light/10 shadow-2xl py-3"
          : scrolled
            ? "z-50 bg-dark/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border-accent/20 py-2"
            : "z-50 bg-dark/40 backdrop-blur-md border-light/5 shadow-sm py-3"
      }`}
    >
      {/* Top Glowing Scroll Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-accent transition-all duration-100 shadow-[0_0_10px_var(--accent)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold flex items-center select-none"
        >
          <span className="text-accent">{"<"}</span>
          <span className="text-light">PK</span>
          <span className="text-accent">{"/>"}</span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`relative px-3 lg:px-4 py-2 hover:text-accent transition-colors text-sm lg:text-base font-semibold group select-none ${
                activeSection === item.id ? "text-accent" : "text-light/95"
              }`}
            >
              {item.name}
              {/* Highlight active bar */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* Action Widgets */}
        <div className="hidden md:flex items-center gap-3">
          {/* Integrated Dynamic Theme Swapper */}
          <ThemeToggle />

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-accent text-dark hover:bg-accent/80 h-10 px-5 text-sm lg:text-base rounded-lg shadow-md hover:shadow-xl transition-all font-bold">
              Hire Me
            </Button>
          </motion.a>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-light hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Expansion Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-light/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-[9999]"
        >
          <div className="px-4 py-6 space-y-2.5 max-h-[75vh] overflow-y-auto bg-dark">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`block py-3 px-5 hover:text-accent hover:bg-accent/10 rounded-lg transition-all font-semibold text-base border ${
                  activeSection === item.id
                    ? "text-accent bg-accent/5 border-accent/25"
                    : "text-light/90 border-transparent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.08 }}
              className="pt-4 border-t border-light/10"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-dark hover:bg-accent/80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-bold py-3.5 text-base">
                  Hire Me
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
