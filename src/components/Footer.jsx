import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-offset border-t border-light/5 py-12 relative z-10 text-light select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand / Signature */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#home" className="text-2xl font-bold flex items-center">
            <span className="text-accent">{"<"}</span>
            <span className="text-light">PK</span>
            <span className="text-accent">{"/>"}</span>
          </a>
          <p className="text-xs text-light/50 font-semibold tracking-wide mt-1">
            Full-Stack Developer & AI Enthusiast
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-light/65">
          <a
            href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/pankajkumawat15m"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.instagram.com/pankajkumawat_pk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent transition duration-300 transform hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="mailto:pankajpkm112@gmail.com"
            aria-label="Email"
            className="hover:text-accent transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-xs text-light/50 font-semibold">
            © {new Date().getFullYear()} Pankaj Kumawat. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-accent hover:text-light transition font-bold uppercase tracking-wider group focus:outline-none"
          >
            Back to Top{" "}
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
