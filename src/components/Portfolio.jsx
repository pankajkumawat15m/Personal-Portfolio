import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Info } from "lucide-react";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "Frontend / UI"];

  const projects = [
    {
      title: "CricFlow",
      category: "Full Stack",
      description:
        "An enterprise-grade cricket scoring and tournament management platform. Engineered for real-time ball-by-ball match updates, automated tournament standings/brackets, deep player analytics, and custom scorecard report exports.",
      features: [
        "Real-time ball-by-ball match score transmission using WebSockets (Socket.io)",
        "Tournament management engine supporting dynamic brackets, teams, and auto-computed standings",
        "Comprehensive career statistics tracking complex batting and bowling performance profiles",
        "Automated high-fidelity PDF scorecard and match report generation via Puppeteer backend",
        "Secure JWT authentication, active session control, and custom data schema validators (Zod)",
      ],
      image: "/assets/cricflow-logo.png",
      liveDemo: "https://www.cricflow.in/",
      techStack: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Socket.io",
        "Zustand",
        "Tailwind CSS",
        "TanStack Query",
        "Puppeteer",
      ],
    },
    {
      title: "BookTrivana",
      category: "Full Stack",
      description:
        "An enterprise-grade hotel and restaurant booking platform. Engineered with a Spring Boot API backend, interactive React frontend, custom QR code ticketing gates, and secure digital payment routing.",
      features: [
        "Interactive room and restaurant booking engine with real-time slot availability validation",
        "Fully integrated secure Razorpay Payment Gateway supporting UPI, credit cards, and net banking",
        "Automated QR code checkpoint ticketing and receipt invoice generator (iText PDF / ZXing)",
        "Premium tier membership rewards, automated OTP messaging, and secure AWS S3 cloud storage",
        "Spring Security core integrated with JWT-based authentication guards and Google OAuth 2.0",
      ],
      image: "/assets/trivana-logo.jpg",
      liveDemo: "https://booktrivana.com/",
      techStack: [
        "React",
        "Spring Boot",
        "Java",
        "MySQL",
        "Razorpay",
        "AWS S3",
        "Tailwind CSS",
        "Spring Security",
      ],
    },
    {
      title: "TaskSync",
      category: "Full Stack",
      description:
        "A collaborative task management platform with real-time updates, enabling teams to organize, track, and complete projects efficiently with intuitive drag-and-drop features.",
      features: [
        "Real-time updates & collaboration using Socket.io",
        "Interactive Kanban Board with drag-and-drop mechanics",
        "Secure User Authentication and JWT integrations",
        "Clean, robust MERN backend with responsive frontend design",
      ],
      image:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg",
      github: "https://github.com/pankajkumawat15m/TaskSync",
      liveDemo: "https://task-sync-orxs.vercel.app/",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Socket.io"],
    },
    {
      title: "Movie Explorer",
      category: "Frontend / UI",
      description:
        "An interactive movie discovery app that lets users search, filter, and explore movies with detailed information, ratings, and trailers powered by TMDB API.",
      features: [
        "Dynamic content streaming from the official TMDB API endpoints",
        "High-fidelity visual dashboard detailing cast lists and movie stats",
        "Filter and search controls with instant responsiveness",
        "Fully optimized mobile and viewport responsive layouts",
      ],
      image:
        "https://www.shutterstock.com/shutterstock/photos/2441240371/display_1500/stock-photo-business-development-and-technology-data-analyst-business-analytics-dashboard-business-2441240371.jpg",
      github: "https://github.com/pankajkumawat15m/Movie-Explorer",
      liveDemo: "https://movie-explorer-three-nu.vercel.app/",
      techStack: [
        "React",
        "TMDB API",
        "JavaScript",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      title: "Kanban Board",
      category: "Frontend / UI",
      description:
        "A powerful project management tool with drag-and-drop functionality, allowing users to visualize workflows, manage tasks across multiple columns, and boost productivity.",
      features: [
        "Advanced task state management via Redux Toolkit",
        "Seamless drag-and-drop cards powered by DnD Kit API",
        "Persistent columns & tasks utilizing browser Local Storage",
        "Engineered with strict TypeScript configurations for bulletproof stability",
      ],
      image:
        "https://cdn.prod.website-files.com/61afbca2a1ebe4173318aaef/6596bf7a606a0984eb53ef55_What%20is%20a%20kanban%20board.jpg",
      github: "https://github.com/pankajkumawat15m/Task-Manager",
      liveDemo: "https://kanban-board.vercel.app",
      techStack: ["React", "Redux", "DnD Kit", "TypeScript", "Local Storage"],
    },
    {
      title: "E-Cell Web",
      category: "Full Stack",
      description:
        "Official website for college's Entrepreneurship Cell, featuring event showcases, team profiles, and startup resources to inspire and connect aspiring entrepreneurs.",
      features: [
        "Built on Next.js leveraging server-side rendering for speed and SEO optimization",
        "Fluid entrance and exit page transitions handled via Framer Motion",
        "Full team database integration and upcoming events program widget",
        "Dynamic routing with optimized image layout loaders",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      github: "https://ecell-web-psi.vercel.app",
      liveDemo: "https://ecell-web-psi.vercel.app",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 relative z-10 border-b border-light/5"
      style={{
        background: "linear-gradient(180deg, rgb(var(--bg-offset)) 0%, rgb(var(--bg-offset) / 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-3">
            My Portfolio
          </h2>
          <span className="block w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-light/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            Explore my latest applications, side projects, and academic software builds
          </p>
        </motion.div>

        {/* Sliding Tab Filter Menu */}
        <div className="flex justify-center mb-10 select-none">
          <div className="flex bg-dark/50 border border-light/10 p-1 rounded-xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-dark"
                    : "text-light/75 hover:text-light"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-dark/40 border border-light/10 hover:border-accent/40 transition-all duration-300 h-full flex flex-col hover:shadow-[0_4px_25px_rgba(var(--accent-rgb),0.15)] group rounded-xl overflow-hidden">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-accent text-dark p-2.5 rounded-full hover:scale-115 transition shadow-lg font-bold flex items-center gap-1.5 text-xs"
                      >
                        <Info size={16} /> Details
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold text-accent uppercase tracking-wider bg-accent/10 border border-accent/25 px-2.5 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-accent mb-2">
                        {project.title}
                      </CardTitle>

                      <p className="text-light/75 text-xs sm:text-sm mb-4 leading-relaxed font-semibold">
                        {project.description.slice(0, 110)}...
                      </p>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-light/5 text-light/75 font-semibold text-[10px] rounded-full border border-light/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-0.5 bg-light/5 text-accent font-extrabold text-[10px] rounded-full border border-light/10">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Links */}
                      <div className="mt-auto flex justify-between text-xs sm:text-sm pt-3 border-t border-light/10">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-light transition-colors font-bold flex items-center gap-1"
                          >
                            <Github size={14} /> GitHub
                          </a>
                        ) : (
                          <span className="text-light/40 font-bold flex items-center gap-1 select-none cursor-not-allowed">
                            <Github size={14} /> Private Repo
                          </span>
                        )}
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-light transition-colors font-bold flex items-center gap-1"
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern High-Fidelity Project Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 select-text">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative bg-dark border border-light/15 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col font-poppins"
            >
              {/* Top Banner Image */}
              <div className="relative h-44 sm:h-56 select-none shrink-0 border-b border-light/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-dark/80 hover:bg-accent text-light hover:text-dark p-2 rounded-full transition shadow-lg focus:outline-none"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Contents */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-[10px] font-extrabold text-accent uppercase tracking-wider bg-accent/10 border border-accent/25 px-2.5 py-0.5 rounded-full select-none">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-accent mt-2">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-light/40 uppercase tracking-widest mb-1.5 select-none">
                    Project Overview
                  </h4>
                  <p className="text-light/85 text-sm leading-relaxed font-semibold">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Core Features */}
                <div>
                  <h4 className="text-xs font-bold text-light/40 uppercase tracking-widest mb-2 select-none">
                    Key Features
                  </h4>
                  <ul className="space-y-2 select-text">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="text-xs sm:text-sm text-light/75 flex items-start gap-2.5 font-semibold">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-light/40 uppercase tracking-widest mb-2 select-none">
                    Technology Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2 select-none">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/5 text-accent font-bold text-[11px] rounded-full border border-accent/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Actions */}
                <div className="pt-4 border-t border-light/10 flex flex-col sm:flex-row justify-end gap-3 select-none">
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-dark hover:bg-light/5 text-light border border-light/15 px-5 py-2.5 rounded-xl text-sm font-bold transition-all w-full sm:w-auto"
                    >
                      <Github size={16} /> Repository Code
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 bg-dark/60 text-light/40 border border-light/10 px-5 py-2.5 rounded-xl text-sm font-bold w-full sm:w-auto cursor-not-allowed">
                      <Github size={16} /> Private Repository
                    </span>
                  )}
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-dark px-5 py-2.5 rounded-xl text-sm font-bold transition-all w-full sm:w-auto shadow-md"
                  >
                    <ExternalLink size={16} /> Launch Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
