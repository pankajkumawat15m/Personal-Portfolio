import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

function Services() {
  const services = [
    "Web Development",
    "Data Science Solutions",
    "UI/UX Design",
    "API Integration",
  ];

  return (
    <section id="services" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-light mb-8"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark/50 border-none">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray">High-quality solutions tailored to your needs.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;