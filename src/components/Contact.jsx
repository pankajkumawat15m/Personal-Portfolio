import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { Mail, Send, User } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent! I’ll get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-no-repeat bg-cover"
      style={{
        background:
          "#1a1a1a url(https://www.transparenttextures.com/patterns/noisy.png) repeat",
        backgroundSize: "200px",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-light mb-12"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-dark/70 backdrop-blur-md border border-neutral-700 shadow-2xl w-full max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8 text-light">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400 h-5 w-5" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="pl-10 bg-dark/30 text-light placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400 h-5 w-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="pl-10 bg-dark/30 text-light placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="bg-dark/30 text-light placeholder-gray-400"
                  />
                </div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="bg-accent text-dark hover:bg-accent/80 w-full h-12 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
