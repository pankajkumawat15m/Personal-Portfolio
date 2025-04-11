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
        <div className="text-xl font-bold text-accent">LOGO</div>
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
        <Button variant="outline" className="bg-accent text-dark hover:bg-accent/80">
          Hire Me
        </Button>
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
            <Button variant="outline" className="mt-2 w-full bg-accent text-dark">
              Hire Me
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
