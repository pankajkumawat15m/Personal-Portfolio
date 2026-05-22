import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaPalette, FaPlug, FaChevronRight } from "react-icons/fa";

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
    <section id="services" className="py-20 bg-dark/95 border-b border-light/5 relative z-10 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-3.5 inline-block">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-light mb-3 tracking-tight">
            Services I Offer
          </h2>
          <span className="block w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-light/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            Comprehensive solutions to bring your ideas to life with high-performance architectures.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <Card className="bg-offset/50 border border-light/10 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.12)] transition-all duration-300 h-full flex flex-col backdrop-blur-xl group rounded-xl overflow-hidden relative">
                {/* Large Transparent Serial Number in Background */}
                <div className="absolute top-4 right-6 font-mono text-5xl sm:text-6xl font-extrabold text-accent/10 group-hover:text-accent/20 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none">
                  0{index + 1}
                </div>

                <CardHeader className="pb-3 pt-6 shrink-0 z-10 relative">
                  <div className="flex items-center gap-4">
                    {/* Glowing rounded container for icon */}
                    <div className="w-12 h-12 rounded-xl border border-light/10 flex items-center justify-center text-accent text-2xl bg-dark/40 shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-accent select-none">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col p-6 pt-0 z-10">
                  <p className="text-light/75 text-sm sm:text-base mb-6 leading-relaxed font-semibold">
                    {service.description}
                  </p>

                  {/* High-Tech Glowing Tag Chips Grid */}
                  <div className="mt-auto pt-5 border-t border-light/5">
                    <div className="flex flex-wrap gap-2.5">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1 bg-accent/5 hover:bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 flex items-center gap-1.5 select-none"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 animate-pulse" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Premium action link at bottom of card */}
                    <div 
                      onClick={() => {
                        const event = new CustomEvent("request-service", { detail: { serviceName: service.title } });
                        window.dispatchEvent(event);
                        const contactSec = document.getElementById("contact");
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="mt-6 flex items-center gap-1.5 text-xs font-extrabold text-accent group-hover:gap-2.5 transition-all duration-300 cursor-pointer select-none"
                    >
                      <span className="uppercase tracking-wider">Request Details</span>
                      <FaChevronRight className="text-[9px]" />
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
