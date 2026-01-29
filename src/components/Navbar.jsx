import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/98 backdrop-blur-xl shadow-lg border-b border-accent/20 py-2 sm:py-3"
          : "bg-dark/40 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold"
        >
          <span className="text-accent">{"<"}</span>
          <span className="text-gray-900 dark:text-light">PK</span>
          <span className="text-accent">{"/>"}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative px-3 lg:px-4 py-2 text-gray-900 dark:text-light hover:text-accent dark:hover:text-accent transition-colors text-sm lg:text-base font-medium group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-accent text-white hover:bg-accent/90 h-10 px-6 text-sm lg:text-base rounded-lg shadow-md hover:shadow-xl transition-all font-semibold">
              Hire Me
            </Button>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-900 dark:text-light hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] backdrop-blur-xl shadow-2xl border-t border-gray-800"
        >
          <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, ease: "easeOut" }}
                className="block py-3.5 px-5 text-gray-200 hover:text-accent hover:bg-accent/20 rounded-lg transition-all duration-300 font-medium text-base border border-transparent hover:border-accent/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.1 }}
              className="pt-4"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold py-3.5 text-base">
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
