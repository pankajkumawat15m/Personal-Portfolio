import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    { title: 'E-Commerce App', image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Data Dashboard', image: 'https://www.shutterstock.com/shutterstock/photos/2441240371/display_1500/stock-photo-business-development-and-technology-data-analyst-business-analytics-dashboard-business-2441240371.jpg' },
    { title: 'Task Manager', image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg' },
  ];

  return (
    <section id="portfolio" className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
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
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl text-accent">{project.title}</CardTitle>
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
