
// components/sections/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { office_projects, personal_projects } from "@/data/staticData";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = 
    activeTab === "all" 
      ? [...office_projects, ...personal_projects].filter(p => p.active)
      : activeTab === "office" 
        ? office_projects.filter(p => p.active)
        : personal_projects.filter(p => p.active);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
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
              Projects.
            </h2>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm bg-secondary p-1" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "all"
                    ? "bg-light-purple text-white"
                    : "bg-transparent text-gray-300 hover:bg-light-purple/20"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All Projects
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "office"
                    ? "bg-light-purple text-white"
                    : "bg-transparent text-gray-300 hover:bg-light-purple/20"
                }`}
                onClick={() => setActiveTab("office")}
              >
                Office Projects
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "personal"
                    ? "bg-light-purple text-white"
                    : "bg-transparent text-gray-300 hover:bg-light-purple/20"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                Personal Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="project-card cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image || "/project-placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                    {project.short_description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techstack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-light-purple/20 text-light-purple rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techstack.length > 3 && (
                      <span className="px-2 py-1 bg-light-purple/20 text-light-purple rounded-full text-xs">
                        +{project.techstack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    Click to view details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </section>
  );
}

