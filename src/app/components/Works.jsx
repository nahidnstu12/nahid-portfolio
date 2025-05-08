// components/sections/WorkSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { experiences } from "@/data/staticData";
import Image from "next/image";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={textVariant} className="text-center mb-16">
            <p className="text-xl uppercase tracking-wider mb-2">
              WHAT I HAVE DONE SO FAR
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Work Experience.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="timeline-line"></div>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeIn}
                className="mb-12 relative pl-16"
              >
                <div className="timeline-circle"></div>

                <div className="bg-secondary rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{experience.title}</h3>
                      <p className="text-lg text-muted-foreground">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-sm bg-light-purple/20 text-light-purple px-3 py-1 rounded-full mt-2 md:mt-0">
                      {experience.date}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {experience.description.map((desc, idx) => (
                      <p key={idx} className="text-base text-gray-300">
                        • {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
