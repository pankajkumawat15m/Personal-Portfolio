import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaPalette, FaPlug } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode />,
      description:
        "I build responsive, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From dynamic single-page apps to robust e-commerce platforms, I deliver scalable solutions tailored to your business needs, ensuring seamless functionality and a modern user experience.",
      features: [
        "Responsive Design",
        "MERN Stack",
        "Performance Optimized",
        "SEO Friendly",
      ],
    },
    {
      title: "AI & Data Solutions",
      icon: <FaBrain />,
      description:
        "Leveraging tools like Python, NumPy, and Pandas, I create intelligent solutions powered by machine learning, data analysis, and visualization. Whether it's predictive models, data-driven insights, or automated workflows, I help businesses unlock the potential of their data with precision and clarity.",
      features: [
        "Machine Learning",
        "Data Analysis",
        "Predictive Models",
        "Automation",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette />,
      description:
        "I craft intuitive and visually appealing user interfaces that prioritize user experience. By combining creative design principles with tools like Figma and Tailwind CSS, I ensure your application is not only beautiful but also easy to navigate, enhancing user satisfaction and engagement.",
      features: ["User-Centric Design", "Figma", "Tailwind CSS", "Prototyping"],
    },
    {
      title: "API Integration",
      icon: <FaPlug />,
      description:
        "I seamlessly connect your applications with third-party services or custom APIs to enhance functionality. From payment gateways to social media integrations, I ensure secure, efficient, and reliable data exchange, enabling your app to work smarter and deliver more value.",
      features: [
        "REST APIs",
        "Third-Party Integration",
        "Secure",
        "Real-time Data",
      ],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light mb-3">
            Services I Offer
          </h2>
          <span className="block w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive solutions to bring your ideas to life
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark/50 border border-gray-800 hover:border-accent/50 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl text-accent group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-accent">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
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

export default Services;
