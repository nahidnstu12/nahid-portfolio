// components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { skillCategories } from "@/data/staticData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={textVariant} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              My Skill Set
            </h2>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.h3 
                  variants={fadeIn}
                  className="text-2xl font-bold mb-6 text-white"
                >
                  {category.title}
                </motion.h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                  {category.skills
                    .filter(skill => skill.active)
                    .map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                        className="flex justify-center"
                      >
                        <div className="bg-white p-4 rounded-lg w-20 h-20 flex items-center justify-center">
                          <div className="text-4xl text-dark-navy">
                            {skill.icon}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
