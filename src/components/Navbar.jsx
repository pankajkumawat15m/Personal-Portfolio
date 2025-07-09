import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-dark/90 backdrop-blur-lg z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 animate-pulse">
          Pankaj Kumawat
        </div>
        <div className="hidden md:flex space-x-3 lg:space-x-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light hover:text-accent transition-colors text-sm lg:text-base font-medium tracking-wide hover:underline underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a href="#contact" data-email="pankajkumawat@example.com">
          <Button
            className="bg-accent text-dark hover:bg-accent/90 h-9 sm:h-10 px-4 sm:px-6 text-sm sm:text-base hidden md:flex rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Hire Me
          </Button>
        </a>
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-light h-10 w-12 sm:w-14 text-xl sm:text-2xl rounded-full hover:bg-accent/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark/95 mt-3 p-4 sm:p-6 rounded-lg w-[calc(100%-2rem)] mx-auto absolute left-0 right-0 shadow-xl border border-accent/30 max-h-[80vh] overflow-y-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-light hover:text-accent text-sm sm:text-base font-medium hover:bg-accent/10 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;