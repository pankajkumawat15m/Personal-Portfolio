import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { value: "2+", label: "Experiences" },
    { value: "10+", label: "Project done" },
  ];

  return (
    <section id="stats" className="py-16 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-xs"
            >
              <Card className="bg-dark/50 border-none text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-accent mb-2">{stat.value}</h3>
                  <p className="text-gray text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;