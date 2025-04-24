import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      title: 'TaskSync',
      image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg',
      github: 'https://github.com/pankajkumawat15m/TaskSync',
      liveDemo: 'https://tasksync.vercel.app'
    },
    {
      title: 'Movie Explorer',
      image: 'https://www.shutterstock.com/shutterstock/photos/2441240371/display_1500/stock-photo-business-development-and-technology-data-analyst-business-analytics-dashboard-business-2441240371.jpg',
      github: 'https://github.com/pankajkumawat15m/Movie-Explorer',
      liveDemo: 'https://movie-explorer-three-nu.vercel.app/'
    },
    {
      title: 'Kanban Board',
      image: 'https://cdn.prod.website-files.com/61afbca2a1ebe4173318aaef/6596bf7a606a0984eb53ef55_What%20is%20a%20kanban%20board.jpg',
      github: 'https://github.com/pankajkumawat15m/Task-Manager',
      liveDemo: 'https://kanban-board.vercel.app'
    }
  ];

  return (
    <section
      id="portfolio"
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark/50 border-none">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl text-accent">
                    {project.title}
                  </CardTitle>
                  <div className="mt-4 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] hover:text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6A00] hover:text-white"
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
