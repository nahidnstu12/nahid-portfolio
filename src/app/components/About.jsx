// components/sections/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={textVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              INTRODUCTION
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient">
              Overview
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-light-purple">
                <Image
                  src="/profile.jpg"
                  alt="Razwan Niam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="md:col-span-7"
            >
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Full Stack Developer with industry experience of 1 year.
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Love to work in Backend And API integration
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    On way to SDE
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Will venture Cloud and DevOps in 2024.
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Worked with venture firm{" "}
                    <span className="font-bold">Capitall</span> as a Full Stack
                    Developer
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Studying Electrical Engineering Final year
                  </p>
                  <p className="text-lg">
                    <span className="text-light-purple text-2xl mr-2">•</span>
                    Uses Linux and do problem solving on Hacker Rank
                  </p>
                </div>

                <div className="pt-6 flex justify-start space-x-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-light-purple/80 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Resume
                  </a>
                  <a
                    href="https://github.com/nahidnstu12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-light-purple/80 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nahid-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-light-purple/80 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}