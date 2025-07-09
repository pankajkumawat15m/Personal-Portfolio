import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build responsive, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From dynamic single-page apps to robust e-commerce platforms, I deliver scalable solutions tailored to your business needs, ensuring seamless functionality and a modern user experience."
    },
    {
      title: "AI & Data Solutions",
      description:
        "Leveraging tools like Python, NumPy, and Pandas, I create intelligent solutions powered by machine learning, data analysis, and visualization. Whether it's predictive models, data-driven insights, or automated workflows, I help businesses unlock the potential of their data with precision and clarity."
    },
    {
      title: "UI/UX Design",
      description:
        "I craft intuitive and visually appealing user interfaces that prioritize user experience. By combining creative design principles with tools like Figma and Tailwind CSS, I ensure your application is not only beautiful but also easy to navigate, enhancing user satisfaction and engagement."
    },
    {
      title: "API Integration",
      description:
        "I seamlessly connect your applications with third-party services or custom APIs to enhance functionality. From payment gateways to social media integrations, I ensure secure, efficient, and reliable data exchange, enabling your app to work smarter and deliver more value."
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-light mb-8 sm:mb-12"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark/50 border-none">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-accent">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100 text-sm sm:text-base">{service.description}</p>
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