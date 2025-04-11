import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-16"
      style={{
        background:
          "#1a1a1a url(https://www.transparenttextures.com/patterns/noisy.png) repeat",
        backgroundSize: "200px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-light mb-12"
        >
          Contact Me
        </motion.h2>
        <Card className="bg-dark/60 border-none max-w-lg mx-auto backdrop-blur-md shadow-xl">
          <CardContent className="p-6 text-light">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                required
                className="bg-dark/20 text-light"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-dark/20 text-light"
              />
              <Textarea
                placeholder="Your Message"
                required
                className="bg-dark/20 text-light"
              />
              <Button className="bg-accent text-dark hover:bg-accent/80 w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
