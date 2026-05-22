import { useState, useEffect, useRef } from "react";
import { Terminal, X, ChevronRight, Minimize2, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function DevTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { text: "Welcome to Pankaj's Interactive Terminal v1.0.0", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
    { text: "", type: "empty" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const consoleBottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [isOpen]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    // Add prompt text to history
    const newLogs = [...history, { text: `guest@pankaj-portfolio:~$ ${trimmed}`, type: "prompt" }];

    let response = [];
    switch (cmd) {
      case "help":
        response = [
          { text: "Available commands:", type: "info" },
          { text: "  about         - Learn more about Pankaj Kumawat", type: "info" },
          { text: "  skills        - List technology expertise & stacks", type: "info" },
          { text: "  projects      - Highlight top featured projects", type: "info" },
          { text: "  contact       - Get direct contact links", type: "info" },
          { text: "  theme [name]  - Set theme (sunset, cyberpunk, midnight, emerald, light)", type: "info" },
          { text: "  clear         - Clear terminal history", type: "info" },
          { text: "  sudo [cmd]    - Execute a command with superuser powers", type: "info" },
        ];
        break;
      case "about":
        response = [
          { text: "Pankaj Kumawat — Full-Stack Developer & AI Enthusiast", type: "accent" },
          { text: "Education: B.Tech in CSE (ECB) | B.S. in Data Science & Applications (IIT Madras)", type: "info" },
          { text: "Bio: Passionate engineer focused on building robust full-stack web architectures (MERN stack)", type: "info" },
          { text: "     and training performant machine learning models. I enjoy building things that scale.", type: "info" },
        ];
        break;
      case "skills":
        response = [
          { text: "=== Primary Technical Stack ===", type: "accent" },
          { text: "Frontend : HTML5, CSS3, JavaScript, TypeScript, React.js, Redux, Tailwind CSS", type: "info" },
          { text: "Backend  : Node.js, Express.js, Python, RESTful APIs", type: "info" },
          { text: "Database : MongoDB, PostgreSQL, MySQL", type: "info" },
          { text: "Tools    : Git, GitHub, VS Code, Vercel", type: "info" },
        ];
        break;
      case "projects":
        response = [
          { text: "=== Featured Projects ===", type: "accent" },
          { text: "1. TaskSync - Real-time team manager (React, Node, Mongo, Socket.io)", type: "info" },
          { text: "2. Movie Explorer - Cinematic lookup with trailers (React, TMDB API)", type: "info" },
          { text: "3. Kanban Board - Highly interactive task visualizer (React, Redux, TypeScript)", type: "info" },
          { text: "4. E-Cell Web - Official E-Cell website built on Next.js", type: "info" },
          { text: "5. CricFlow - Premier cricket scoring & tournament platform (Next.js, Node, Postgres) [Private Repo]", type: "info" },
          { text: "6. BookTrivana - Premium hotel & restaurant booking system (React, Spring Boot, MySQL) [Private Repo]", type: "info" },
          { text: "Type 'go [number]' to open the repository or live site (e.g. 'go 6').", type: "accent" },
        ];
        break;
      case "go":
        const num = parseInt(arg);
        if (num === 1) {
          window.open("https://github.com/pankajkumawat15m/TaskSync", "_blank");
          response = [{ text: "Opening TaskSync Repository...", type: "system" }];
        } else if (num === 2) {
          window.open("https://github.com/pankajkumawat15m/Movie-Explorer", "_blank");
          response = [{ text: "Opening Movie Explorer Repository...", type: "system" }];
        } else if (num === 3) {
          window.open("https://github.com/pankajkumawat15m/Task-Manager", "_blank");
          response = [{ text: "Opening Kanban Board Repository...", type: "system" }];
        } else if (num === 4) {
          window.open("https://ecell-web-psi.vercel.app", "_blank");
          response = [{ text: "Opening E-Cell Web Live Site...", type: "system" }];
        } else if (num === 5) {
          window.open("https://www.cricflow.in/", "_blank");
          response = [{ text: "Opening CricFlow Live Site...", type: "system" }];
        } else if (num === 6) {
          window.open("https://booktrivana.com/", "_blank");
          response = [{ text: "Opening BookTrivana Live Site...", type: "system" }];
        } else {
          response = [{ text: "Invalid project number. Choose 1, 2, 3, 4, 5, or 6.", type: "error" }];
        }
        break;
      case "contact":
        response = [
          { text: "=== Get In Touch ===", type: "accent" },
          { text: "Email    : pankajpkm112@gmail.com", type: "info" },
          { text: "LinkedIn : https://www.linkedin.com/in/pankaj-kumawat-78395b306/", type: "info" },
          { text: "GitHub   : https://github.com/pankajkumawat15m", type: "info" },
        ];
        break;
      case "theme":
        const targetTheme = arg.trim().toLowerCase();
        const themes = ["sunset", "cyberpunk", "midnight", "emerald", "light"];
        if (themes.includes(targetTheme)) {
          document.documentElement.className = "";
          document.documentElement.classList.add(`theme-${targetTheme}`);
          localStorage.setItem("theme-palette", targetTheme);
          // Also dispatch event so navbar syncs
          window.dispatchEvent(new Event("theme-changed"));
          response = [{ text: `Theme successfully switched to: ${targetTheme}`, type: "system" }];
        } else {
          response = [
            { text: `Theme '${targetTheme}' not found.`, type: "error" },
            { text: "Available themes: sunset, cyberpunk, midnight, emerald, light", type: "info" },
          ];
        }
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "sudo":
        if (arg.trim().toLowerCase() === "rm -rf /") {
          response = [
            { text: "[SUDO] WARNING: Attempting to delete file system...", type: "error" },
            { text: "Deleting system directories...", type: "error" },
            { text: "Progress: ░░░░░░░░░░ 0%", type: "error" },
            { text: "Progress: ▓▓▓░░░░░░░ 30%", type: "error" },
            { text: "Progress: ▓▓▓▓▓▓▓▓▓▓ 100%", type: "error" },
            { text: "Error: Permission Denied! Just kidding! 😅 Pankaj's portfolio is secure. Thanks for visiting!", type: "accent" },
          ];
        } else {
          response = [{ text: "Error: sudo command unauthorized. Try 'sudo rm -rf /' for admin demo.", type: "error" }];
        }
        break;
      default:
        response = [
          { text: `command not found: ${cmd}`, type: "error" },
          { text: "Type 'help' to see list of valid commands.", type: "info" },
        ];
    }

    setHistory([...newLogs, ...response, { text: "", type: "empty" }]);
    setCmdHistory([...cmdHistory, trimmed]);
    setHistoryIndex(-1);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < cmdHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-accent text-dark p-3.5 rounded-full shadow-[0_4px_20px_rgba(var(--accent-rgb),0.4)] hover:shadow-[0_4px_25px_rgba(var(--accent-rgb),0.6)] hover:scale-105 transition-all focus:outline-none border border-light/20 flex items-center justify-center"
        aria-label="Toggle Terminal Drawer"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <Minimize2 size={22} className="text-light" /> : <Terminal size={22} className="text-light" />}
      </motion.button>

      {/* Terminal Drawer Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 h-[380px] sm:h-[420px] bg-dark/95 backdrop-blur-md border-t border-accent/30 shadow-[0_-10px_35px_rgba(0,0,0,0.5)] z-40 font-mono text-xs md:text-sm text-light/90 flex flex-col"
          >
            {/* Terminal Top Window Bar */}
            <div className="bg-[#1e1e24] px-4 py-2 border-b border-neutral-800 flex justify-between items-center select-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer block" onClick={() => setIsOpen(false)}></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
              </div>
              <div className="text-[11px] text-gray font-semibold flex items-center gap-1.5">
                <Terminal size={12} className="text-accent" />
                pankaj@portfolio: ~
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent focus:outline-none">
                <X size={16} />
              </button>
            </div>

            {/* Terminal Window Logs Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5 select-text custom-scrollbar">
              {history.map((log, idx) => {
                if (log.type === "empty") return <div key={idx} className="h-1" />;
                
                let logClass = "text-light/80";
                if (log.type === "system") logClass = "text-accent/80 font-medium";
                if (log.type === "prompt") logClass = "text-green-400 font-semibold";
                if (log.type === "error") logClass = "text-red-400";
                if (log.type === "info") logClass = "text-light/90";
                if (log.type === "accent") logClass = "text-accent font-bold";

                return (
                  <div key={idx} className={`leading-relaxed break-words whitespace-pre-wrap ${logClass}`}>
                    {log.text}
                  </div>
                );
              })}
              <div ref={consoleBottomRef} />
            </div>

            {/* Input Prompt Row */}
            <div className="px-4 py-2 bg-[#121216] border-t border-neutral-800 flex items-center gap-1 select-none">
              <ChevronRight size={16} className="text-green-400 shrink-0" />
              <span className="text-green-400 font-semibold shrink-0">guest@pankaj:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or command here..."
                className="flex-1 bg-transparent border-none text-light focus:outline-none focus:ring-0 placeholder-gray/40 caret-accent py-1"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DevTerminal;
