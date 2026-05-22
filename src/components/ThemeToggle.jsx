import { useEffect, useState, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "sunset", name: "Sunset Glow", color: "#ff6200", isDark: true },
  { id: "cyberpunk", name: "Cyberpunk Neon", color: "#d946ef", isDark: true },
  { id: "midnight", name: "Midnight Sapphire", color: "#3b82f6", isDark: true },
  { id: "emerald", name: "Emerald Mint", color: "#10b981", isDark: true },
  { id: "light", name: "Light Aurora", color: "#6366f1", isDark: false },
];

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("sunset");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sync theme selection and apply correct classes
  const applyTheme = (themeId) => {
    const selected = themes.find((t) => t.id === themeId) || themes[0];
    setActiveTheme(selected.id);
    localStorage.setItem("theme-palette", selected.id);

    // Remove all previous theme classes
    document.documentElement.className = "";
    
    // Add current theme class
    document.documentElement.classList.add(`theme-${selected.id}`);

    // Set standard 'dark' class for compatibility
    if (selected.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Proactively dispatch theme-changed event for instant canvas/other UI refreshes
    window.dispatchEvent(new Event("theme-changed"));
  };

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-palette") || "sunset";
    applyTheme(savedTheme);

    const handleExternalChange = () => {
      const currentSaved = localStorage.getItem("theme-palette") || "sunset";
      setActiveTheme(currentSaved);
    };

    window.addEventListener("theme-changed", handleExternalChange);
    return () => window.removeEventListener("theme-changed", handleExternalChange);
  }, []);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-full border border-light/15 bg-dark/40 backdrop-blur-md shadow-sm hover:border-accent/40 text-light/95 hover:text-accent font-bold text-xs sm:text-sm tracking-wide transition-all focus:outline-none select-none cursor-pointer group"
        aria-label="Personalize Theme"
      >
        {/* Dynamic theme glowing active indicator dot */}
        <span
          className="w-2.5 h-2.5 rounded-full border border-light/20 shadow-[0_0_8px_currentColor] animate-pulse shrink-0"
          style={{
            backgroundColor: themes.find((t) => t.id === activeTheme)?.color,
            color: themes.find((t) => t.id === activeTheme)?.color,
          }}
        />
        <Palette className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 rounded-xl bg-dark border border-accent/25 shadow-[0_10px_35px_rgba(0,0,0,0.5)] z-[9999] py-2 overflow-hidden"
          >
            <div className="px-3.5 py-2 border-b border-light/10 select-none">
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                Choose Theme Style
              </span>
            </div>
            
            <div className="p-1 space-y-0.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    applyTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all select-none ${
                    activeTheme === t.id
                      ? "text-accent font-semibold bg-accent/10"
                      : "text-light/80 hover:text-light hover:bg-light/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Theme color circle badge */}
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-light/20 flex-shrink-0"
                      style={{ backgroundColor: t.color }}
                    />
                    <span className="whitespace-nowrap">{t.name}</span>
                  </div>
                  {activeTheme === t.id && (
                    <Check className="w-4 h-4 text-accent shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
