import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import emailjs from "emailjs-com";

function Contact() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  
  const confettiCanvasRef = useRef(null);
  let confettiAnimId = null;

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  // Custom Confetti Cannon particle animation
  const triggerConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ["#ff6200", "#d946ef", "#3b82f6", "#10b981", "#6366f1", "#facc15"];

    // Get current theme accent color if available
    const style = getComputedStyle(document.documentElement);
    const themeAccent = style.getPropertyValue("--accent").trim();
    if (themeAccent) {
      colors.unshift(themeAccent);
    }

    class Confetti {
      constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height + 20;
        this.size = Math.random() * 8 + 4;
        const angle = Math.random() * Math.PI * 0.4 + Math.PI * 1.3; // shoot upwards
        const speed = Math.random() * 15 + 10;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0.35;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.opacity = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height * 0.4) {
          this.opacity -= 0.015;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    // Spawn burst
    for (let i = 0; i < 110; i++) {
      particles.push(new Confetti());
    }

    const animateConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      particles = particles.filter((p) => p.opacity > 0 && p.y < canvas.height + 30);
      particles.forEach((p) => p.draw());

      if (particles.length > 0) {
        confettiAnimId = requestAnimationFrame(animateConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animateConfetti();
  };

  useEffect(() => {
    return () => {
      if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    };
  }, []);

  useEffect(() => {
    const handleRequestService = (e) => {
      const serviceName = e.detail.serviceName;
      setFormValues((prev) => ({
        ...prev,
        message: `Hi Pankaj, I'm interested in your "${serviceName}" solutions. I would love to request more details and discuss how we can collaborate on this project!`,
      }));
      toast.success(`Selected: ${serviceName}! Form populated.`);
    };

    window.addEventListener("request-service", handleRequestService);
    return () => window.removeEventListener("request-service", handleRequestService);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();

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
        "service_gkseahc", 
        "template_9pa5jxo", 
        { name, email, message },
        "FmPj_DjjBzL6gyIQy", 
      );

      if (formspreeRes.ok && emailRes.status === 200) {
        setSubmitted(true);
        setFormValues({ name: "", email: "", message: "" });
        triggerConfetti(); // Play spectacular success confetti burst!
        toast.success("Message sent successfully!");
        setTimeout(() => setSubmitted(false), 5000);
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
      className="relative py-16 sm:py-20 overflow-hidden bg-dark border-b border-light/5 z-10"
    >
      {/* Absolute overlay for success burst particles */}
      <canvas
        ref={confettiCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[99] select-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-3">
            Get In Touch
          </h2>
          <span className="block w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-light/60 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <Card className="bg-dark/40 border border-light/10 backdrop-blur-md shadow-xl hover:border-accent/40 transition-all rounded-xl">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="text-accent text-2xl mt-1 p-2 bg-accent/5 rounded-lg border border-accent/15">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-accent mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:pankajpkm112@gmail.com"
                    className="text-light/80 hover:text-accent font-semibold text-sm sm:text-base transition"
                  >
                    pankajpkm112@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/40 border border-light/10 backdrop-blur-md shadow-xl hover:border-accent/40 transition-all rounded-xl">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="text-accent text-2xl mt-1 p-2 bg-accent/5 rounded-lg border border-accent/15">
                  <FaLinkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-accent mb-1">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/pankaj-kumawat-78395b306/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/80 hover:text-accent font-semibold text-sm sm:text-base transition"
                  >
                    Connect with me
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/40 border border-light/10 backdrop-blur-md shadow-xl hover:border-accent/40 transition-all rounded-xl">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="text-accent text-2xl mt-1 p-2 bg-accent/5 rounded-lg border border-accent/15">
                  <FaGithub className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-accent mb-1">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/pankajkumawat15m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/80 hover:text-accent font-semibold text-sm sm:text-base transition"
                  >
                    Check my work
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form with floating labels (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="bg-dark/40 backdrop-blur-md border border-light/10 shadow-2xl hover:border-accent/25 transition-all rounded-xl">
              <CardContent className="p-6 sm:p-8 text-light">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input Row */}
                  <div className="relative">
                    <User className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${
                      focusedField === "name" || formValues.name ? "text-accent" : "text-light/40"
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-11 pr-4 py-3 bg-dark/40 text-light rounded-xl border ${
                        errors.name ? "border-red-500/80" : "border-light/10 focus:border-accent/80"
                      } focus:outline-none focus:ring-1 focus:ring-accent/40 font-semibold transition-all duration-200 text-sm sm:text-base`}
                    />
                    {/* Floating label logic */}
                    <label
                      className={`absolute left-11 transition-all duration-200 pointer-events-none font-semibold ${
                        focusedField === "name" || formValues.name
                          ? "-top-2.5 text-[11px] bg-dark px-2.5 text-accent rounded-full border border-light/10"
                          : "top-3.5 text-sm text-light/40"
                      }`}
                    >
                      Your Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5 ml-1 font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input Row */}
                  <div className="relative">
                    <Mail className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${
                      focusedField === "email" || formValues.email ? "text-accent" : "text-light/40"
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-11 pr-4 py-3 bg-dark/40 text-light rounded-xl border ${
                        errors.email ? "border-red-500/80" : "border-light/10 focus:border-accent/80"
                      } focus:outline-none focus:ring-1 focus:ring-accent/40 font-semibold transition-all duration-200 text-sm sm:text-base`}
                    />
                    <label
                      className={`absolute left-11 transition-all duration-200 pointer-events-none font-semibold ${
                        focusedField === "email" || formValues.email
                          ? "-top-2.5 text-[11px] bg-dark px-2.5 text-accent rounded-full border border-light/10"
                          : "top-3.5 text-sm text-light/40"
                      }`}
                    >
                      Your Email
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 ml-1 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea Row */}
                  <div className="relative">
                    <MessageSquare className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${
                      focusedField === "message" || formValues.message ? "text-accent" : "text-light/40"
                    }`} />
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      className={`w-full pl-11 pr-4 py-3 bg-dark/40 text-light rounded-xl border ${
                        errors.message ? "border-red-500/80" : "border-light/10 focus:border-accent/80"
                      } focus:outline-none focus:ring-1 focus:ring-accent/40 font-semibold transition-all duration-200 text-sm sm:text-base`}
                    />
                    <label
                      className={`absolute left-11 transition-all duration-200 pointer-events-none font-semibold ${
                        focusedField === "message" || formValues.message
                          ? "-top-2.5 text-[11px] bg-dark px-2.5 text-accent rounded-full border border-light/10"
                          : "top-3.5 text-sm text-light/40"
                      }`}
                    >
                      Your Message
                    </label>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5 ml-1 font-semibold">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <motion.div whileTap={{ scale: 0.96 }}>
                    <Button
                      type="submit"
                      className="bg-accent text-dark hover:bg-accent/80 w-full h-12 flex items-center justify-center gap-2.5 font-bold rounded-xl shadow-[0_4px_15px_rgba(var(--accent-rgb),0.25)] hover:shadow-[0_4px_25px_rgba(var(--accent-rgb),0.4)] transition-all"
                    >
                      <Send className="h-4.5 w-4.5" />
                      Send Message
                    </Button>
                  </motion.div>

                  {/* Success prompt box */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-accent text-sm font-bold text-center mt-2"
                      >
                        🎉 Your message has been sent successfully! I'll contact you soon.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
