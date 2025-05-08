// components/sections/ContactSection.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { socialConnections } from "@/data/social";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: null, text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });
      setFormState({ name: "", email: "", message: "" });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: null, text: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={textVariant} className="text-center mb-16">
            <p className="text-xl uppercase tracking-wider mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Contact.
            </h2>
            <div className="mt-4 flex justify-center gap-4">
              <p className="text-gray-300">rawnanniam1@gmail.com</p>
              <p className="text-gray-300">+8801755299400</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            <motion.form
              variants={fadeIn}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-secondary text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-light-purple"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-secondary text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-light-purple"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 bg-secondary text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-light-purple"
                  placeholder="What you want to say?"
                ></textarea>
              </div>

              {submitMessage.type && (
                <div
                  className={`px-4 py-3 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-900/50 text-green-300"
                      : "bg-red-900/50 text-red-300"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-light-purple hover:bg-light-purple/80 text-white font-medium rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
          
          <motion.div 
            variants={fadeIn}
            className="flex justify-center mt-12"
          >
            <div className="flex space-x-6">
              {socialConnections
                .filter((social) => social.active)
                .map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-gray-300 hover:text-light-purple transition-colors duration-300"
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}