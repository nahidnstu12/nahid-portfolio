// components/sections/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { socialConnections } from "@/data/staticData";
import { typeString } from "@/data/staticData";
import AnimatedText from "@/components/layout/Animated";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = typeString[loopNum % typeString.length];
    
    const handleTyping = () => {
      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="relative min-h-screen flex items-center py-20">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="block mb-2">Hi, I'm </span>
                <span className="text-gradient">Razwan Niam</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-medium mt-4 mb-6">
                A <span className="text-gradient">Full Stack Developer</span> with a zest to create scalable web application
              </h2>
              <div className="h-8">
                <span className="text-xl md:text-2xl">{text}<span className="animate-pulse">|</span></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4 mt-8"
            >
              {socialConnections
                .filter((social) => social.active)
                .map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-foreground hover:text-light-purple transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 text-center w-full"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <AnimatedText text="Why am I a good fit?" gradient className="text-4xl md:text-5xl lg:text-6xl" />
              </h3>
              <p className="text-lg flex items-center justify-center">
                Scroll to know me
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </motion.svg>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

