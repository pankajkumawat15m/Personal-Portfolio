import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: "TaskSync",
      description:
        "A collaborative task management platform with real-time updates, enabling teams to organize, track, and complete projects efficiently with intuitive drag-and-drop features.",
      image:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg",
      github: "https://github.com/pankajkumawat15m/TaskSync",
      liveDemo: "https://task-sync-orxs.vercel.app/",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
      title: "Movie Explorer",
      description:
        "An interactive movie discovery app that lets users search, filter, and explore movies with detailed information, ratings, and trailers powered by TMDB API.",
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
      description:
        "A powerful project management tool with drag-and-drop functionality, allowing users to visualize workflows, manage tasks across multiple columns, and boost productivity.",
      image:
        "https://cdn.prod.website-files.com/61afbca2a1ebe4173318aaef/6596bf7a606a0984eb53ef55_What%20is%20a%20kanban%20board.jpg",
      github: "https://github.com/pankajkumawat15m/Task-Manager",
      liveDemo: "https://kanban-board.vercel.app",
      techStack: ["React", "Redux", "DnD Kit", "TypeScript", "Local Storage"],
    },
    {
      title: "E-Cell Web",
      description:
        "Official website for college's Entrepreneurship Cell, featuring event showcases, team profiles, and startup resources to inspire and connect aspiring entrepreneurs.",
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

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-light mb-8 sm:mb-12"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark/50 border-none h-full flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <CardTitle className="text-lg sm:text-xl text-accent mb-3">
                    {project.title}
                  </CardTitle>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex justify-between text-sm sm:text-base pt-3 border-t border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
