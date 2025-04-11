import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { value: "5+", label: "Experiences" },
    { value: "20+", label: "Project done" },
    { value: "80+", label: "Happy Clients" },
  ];

  return (
    <section id="stats" className="py-16 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark/50 border-none text-center">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-accent">{stat.value}</h3>
                  <p className="text-gray">{stat.label}</p>
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
