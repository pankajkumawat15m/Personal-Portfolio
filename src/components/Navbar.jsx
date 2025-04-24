import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-dark/90 backdrop-blur-md z-50 p-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-accent">Pankaj Kumawat</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          data-email="pankajkumawat@example.com"
          className="inline-flex items-center justify-center px-4 py-2 bg-accent text-dark font-semibold rounded-md hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Hire Me
        </a>
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-light"
          >
            ☰
          </Button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-dark/90 mt-2 p-4 rounded-md absolute right-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-light hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              data-email="pankajkumawat@example.com"
              className="block mt-2 py-2 text-center bg-accent text-dark font-semibold rounded-md hover:bg-accent/90 transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;