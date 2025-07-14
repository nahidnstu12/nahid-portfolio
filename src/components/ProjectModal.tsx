"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/X";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeft";
import { ChevronRightIcon } from "@/components/icons/ChevronRight";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    company: string;
    year: string;
    description: string[];
    features: string[];
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    status: string;
    duration: string;
    images?: ProjectImage[];
  };
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Default images if none provided
  const images: ProjectImage[] = project.images || [
    { src: "/api/placeholder/800/600", alt: "Project Screenshot 1" },
    { src: "/api/placeholder/800/600", alt: "Project Screenshot 2" },
    { src: "/api/placeholder/800/600", alt: "Project Screenshot 3" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-emerald-400 font-medium">{project.company}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <XIcon className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
              {/* Image Slider */}
              <div className="lg:w-1/2 p-6">
                <div className="relative h-full bg-gray-800 rounded-lg overflow-hidden">
                  {/* Main Image */}
                  <div className="relative h-full">
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                    />
                    {images[currentImageIndex].caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm">{images[currentImageIndex].caption}</p>
                      </div>
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                      >
                        <ChevronLeftIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                      >
                        <ChevronRightIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? "bg-white scale-125"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 overflow-y-auto">
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                    <div className="space-y-3">
                      {project.description.map((desc, index) => (
                        <p key={index} className="text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features & Achievements</h3>
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                      >
                        <ArrowUpRightIcon className="w-4 h-4 mr-2" />
                        View Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="secondary"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex-1 border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/10"
                      >
                        <GitHubIcon className="w-4 h-4 mr-2" />
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 