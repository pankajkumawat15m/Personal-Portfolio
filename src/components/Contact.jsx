import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { Mail, Send, User } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

function Contact() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill out all required fields.");
      return;
    }

    setErrors({});

    try {
      // ✅ 1. Send to Formspree
      const formspreeRes = await fetch("https://formspree.io/f/xvgqpvwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      // ✅ 2. Send autoresponder via EmailJS
      const emailRes = await emailjs.send(
        "service_gkseahc",       // 🔁 Replace with your actual EmailJS service ID
        "template_9pa5jxo",      // 🔁 Replace with your EmailJS template ID
        { name, email, message },
        "FmPj_DjjBzL6gyIQy"        // 🔁 Replace with your EmailJS public key
      );

      if (formspreeRes.ok && emailRes.status === 200) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 bg-no-repeat bg-cover overflow-hidden"
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
                {/* Name Field */}
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400 h-5 w-5" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className={`pl-10 bg-dark/30 text-light placeholder-gray-400 rounded-md border ${
                      errors.name ? "border-red-500" : "border-neutral-600"
                    } focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400 h-5 w-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`pl-10 bg-dark/30 text-light placeholder-gray-400 rounded-md border ${
                      errors.email ? "border-red-500" : "border-neutral-600"
                    } focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className={`bg-dark/30 text-light placeholder-gray-400 rounded-md border ${
                      errors.message ? "border-red-500" : "border-neutral-600"
                    } focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="bg-accent text-dark hover:bg-accent/80 w-full h-12 flex items-center justify-center gap-2 font-semibold"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>

                {/* Inline Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-500 text-sm mt-3 text-center"
                  >
                    ✅ Your message has been sent successfully!
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
