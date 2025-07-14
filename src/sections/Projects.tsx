"use client";
import { useState } from "react";
import { projects } from "@/data/personalData.js";
import { projectImages } from "@/assets/images";
import { PortfolioProject } from "@/types";
import { ProjectModal } from "@/components/ProjectModal";

// Transform projects data to match PortfolioProject interface
const portfolioProjects: PortfolioProject[] = projects.map((project) => ({
	company: project.type,
	year: project.duration.split(' - ')[1]?.split(' ')[1] || "2024",
	title: project.title,
	results: project.features.map(feature => ({ title: feature })),
	link: project.liveUrl || "#",
	image: projectImages.organizationCover, // Using placeholder image for now
	technologies: project.techStack,
	description: project.description.join(" "),
	hasLiveDemo: project.status === "Live",
	isComingSoon: project.status === "Development",
	isPrivate: project.type === "Government Project"
}));



import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Card, CardContent, Button } from "@/components/ui";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";
import { otherImages } from "@/assets/images";

const ProjectCard = ({ project, index, onOpenModal }: { project: PortfolioProject; index: number; onOpenModal: (project: any) => void }) => {
	return (
		<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="group">
			<Card variant="glass" className="overflow-hidden h-full hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
				{/* Project Image */}
				<div className="relative h-48 md:h-56 overflow-hidden cursor-pointer" onClick={() => onOpenModal(project)}>
					<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
					<div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

					{/* Overlay buttons */}
					<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
						<Button size="sm" className="backdrop-blur-sm bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-white">
							View Details
						</Button>
					</div>
				</div>

				<CardContent className="p-6">
					<div className="space-y-4">
						{/* Project title and company */}
						<div className="flex items-start justify-between gap-4 mb-3">
							<div>
								<h3 className="heading-3 text-white group-hover:text-emerald-400 transition-colors duration-300 mb-1">{project.title}</h3>
								<p className="text-emerald-400/80 font-medium text-sm">{project.company}</p>
							</div>
							<span className="px-3 py-1 text-xs bg-linear-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 rounded-full border border-emerald-500/30 whitespace-nowrap font-medium">{project.year}</span>
						</div>

						{/* Description */}
						{project.description && <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">{project.description}</p>}

						{/* Technologies */}
						{project.technologies && (
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech, idx) => (
									<span key={idx} className="px-2 py-1 text-xs bg-linear-to-r from-gray-800/80 to-gray-700/80 text-gray-300 rounded-md border border-gray-600/50 hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-200">
										{tech}
									</span>
								))}
							</div>
						)}

						{/* Results */}
						<div className="space-y-3">
							<h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features & Achievements</h4>
							<div className="space-y-2">
								{project.results.map((result, idx) => (
									<motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-3 text-sm text-gray-300 group/item hover:text-gray-200 transition-colors duration-200">
										<div className="w-2 h-2 bg-linear-to-r from-emerald-400 to-blue-400 rounded-full mt-1.5 shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
										<span className="leading-relaxed">{result.title}</span>
									</motion.div>
								))}
							</div>
						</div>

						{/* Quick Action Buttons */}
						<div className="flex gap-2 pt-4 border-t border-gray-700/50">
							{!project.isPrivate && project.hasLiveDemo && (
								<Button
									size="sm"
									variant="secondary"
									onClick={(e) => {
										e.stopPropagation();
										window.open(project.link, "_blank");
									}}
									className="flex-1 text-xs border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/10"
								>
									<ArrowUpRightIcon className="w-3 h-3 mr-1" />
									Live Demo
								</Button>
							)}
							{project.isComingSoon && (
								<span className="flex-1 text-center text-xs text-blue-400 bg-blue-500/20 border border-blue-500/30 rounded-md py-2">
									Coming Soon
								</span>
							)}
							{project.isPrivate && (
								<span className="flex-1 text-center text-xs text-gray-400 bg-gray-500/20 border border-gray-500/30 rounded-md py-2">
									Private Project
								</span>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export const ProjectsSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<any>(null);

	const handleOpenModal = (project: any) => {
		// Find the original project data from personalData
		const originalProject = projects.find(p => p.title === project.title);
		if (originalProject) {
			setSelectedProject({
				...originalProject,
				year: project.year,
				company: project.company
			});
			setIsModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<Section id="projects" className="relative">
			{/* Background elements */}
			<div className="absolute inset-0 opacity-5">
				<Image src={otherImages.grain} alt="" fill className="object-cover" />
			</div>

			<div className="relative z-10">
				<StaggerContainer>
					{/* Section header */}
					<FadeIn>
						<div className="text-center mb-16">
							<h2 className="heading-2 mb-4">
								Featured <span className="gradient-text">Projects</span>
							</h2>
							<p className="body-large text-gray-400 max-w-3xl mx-auto">Showcasing my professional contributions across government and SaaS projects, featuring large-scale applications with real-world impact, advanced functionality, and modern technology stacks.</p>
						</div>
					</FadeIn>

					{/* Projects Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{portfolioProjects.map((project, index) => (
							<ProjectCard 
								key={project.title} 
								project={project} 
								index={index} 
								onOpenModal={handleOpenModal}
							/>
						))}
					</div>

					{/* CTA */}
					<FadeIn delay={0.6}>
						<div className="text-center mt-16">
							<p className="text-gray-400 mb-6">Interested in working together?</p>
							<Button
								onClick={() => {
									const element = document.getElementById("contact");
									element?.scrollIntoView({ behavior: "smooth" });
								}}
								className="group">
								Let's Talk
								<ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							</Button>
						</div>
					</FadeIn>
				</StaggerContainer>
			</div>

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					project={selectedProject}
				/>
			)}
		</Section>
	);
};
