"use client";
import { projectImages } from "@/assets/images";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectModal } from "@/components/ProjectModal";
import { Button, Card, CardContent, Section } from "@/components/ui";
import { projects } from "@/data/personalData";
import { PortfolioProject } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sortedProjectsData = [...projects].sort(
	(a:any, b:any) => (a?.order ?? a?.id) - (b?.order ?? b?.id)
);

// Transform projects data to match PortfolioProject interface
const portfolioProjects: PortfolioProject[] = sortedProjectsData.map((project:any) => ({
	company: project.type,
	category: project.category,
	order: project.order ?? project.id,
	year: project.duration || "2024",
	// year: project.duration.split(' - ')[1]?.split(' ')[1] || "2024",
	title: project.title,
	results: project.features.map((feature:any) => ({ title: feature })),
	link: project.liveUrl || "#",
	image: project.image || projectImages.organizationCover,
	technologies: project.techStack,
	description: project.description.join(" "),
	hasLiveDemo: project.status === "Live",
	isComingSoon: project.status === "Development",
	// isPrivate: project.type === "Government Project"
}));

// Get top 4 featured projects (prioritize Live projects, then by index)
const featuredProjects = portfolioProjects
	// .sort((a, b) => {
	// 	if (a.hasLiveDemo && !b.hasLiveDemo) return -1;
	// 	if (!a.hasLiveDemo && b.hasLiveDemo) return 1;
	// 	return 0;
	// })
	.slice(0, 4);

// Horizontal Project Card - Optimized for showcase
const FeaturedProjectCard = ({ project, index, onOpenModal }: { project: PortfolioProject; index: number; onOpenModal: (project: any) => void }) => {
	return (
		<motion.div 
			initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} 
			whileInView={{ opacity: 1, x: 0 }} 
			viewport={{ once: true, margin: "-100px" }} 
			transition={{ duration: 0.6, delay: index * 0.15, type: "tween" }} 
			className="group"
		>
			<Card 
				variant="glass" 
				className="overflow-hidden cursor-pointer transition-all duration-500 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/10 h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/30"
				onClick={() => onOpenModal(project)}
			>
				{/* Horizontal Layout: Image + Content Side by Side */}
				<div className="flex flex-col lg:flex-row h-full">
					{/* Image Section - Takes 40% width on large screens */}
					<div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-gray-800/40">
						<Image 
							src={project.image} 
							alt={project.title} 
							fill 
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
						/>
						
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-b lg:from-gray-900/80 lg:via-gray-900/40 lg:to-transparent" />
						
						{/* Status Badge */}
						<div className="absolute top-4 right-4 z-10">
							{project.hasLiveDemo  && (
								<span className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/30 backdrop-blur-md text-emerald-300 rounded-full border border-emerald-400/40 shadow-lg">
									● Live
								</span>
							)}
							{project.isComingSoon && (
								<span className="px-3 py-1.5 text-xs font-semibold bg-blue-500/30 backdrop-blur-md text-blue-300 rounded-full border border-blue-400/40 shadow-lg">
									Coming Soon
								</span>
							)}
							{/* {project.isPrivate && (
								<span className="px-3 py-1.5 text-xs font-semibold bg-gray-500/30 backdrop-blur-md text-gray-300 rounded-full border border-gray-400/40 shadow-lg">
									Private
								</span>
							)} */}
						</div>

						{/* Hover Effect */}
						<div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>

					{/* Content Section - Takes 60% width on large screens */}
					<CardContent className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
						<div>
							{/* Header */}
							<div className="mb-4">
								<div className="flex items-start justify-between gap-4 mb-3">
									<h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
										{project.title}
									</h3>
									<span className="px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-800/60 rounded-lg border border-gray-700/50 shrink-0">
										{project.year}
									</span>
								</div>
								<p className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wide">{project.company}</p>
							</div>

							{/* Description */}
							{project.description && (
								<p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">
									{project.description}
								</p>
							)}

							{/* Technologies - Prominent Display */}
							{project.technologies && project.technologies.length > 0 && (
								<div className="mb-6">
									<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.slice(0, 6).map((tech, idx) => (
											<span 
												key={idx} 
												className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/60 rounded-lg border border-gray-700/40 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 6 && (
											<span className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-800/40 rounded-lg border border-gray-700/30">
												+{project.technologies.length - 6}
											</span>
										)}
									</div>
								</div>
							)}

							{/* Key Highlights */}
							{project.results && project.results.length > 0 && (
								<div>
									<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</p>
									<div className="space-y-2.5">
										{project.results.slice(0, 3).map((result, idx) => (
											<div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
												<div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
												<span className="leading-relaxed line-clamp-2">{result.title}</span>
											</div>
										))}
										{project.results.length > 3 && (
											<p className="text-xs text-gray-500 pl-5">
												+{project.results.length - 3} more achievements
											</p>
										)}
									</div>
								</div>
							)}
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3 pt-6 mt-6 border-t border-gray-700/30">
							{project.link && project.link !== "#" ? (
								<Button
									size="md"
									variant="primary"
									href={project.link}
									onClick={(e) => e.stopPropagation()}
									className="flex-1 group/btn"
								>
									View Live Site
									<ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
								</Button>
							) : null}
							<Button
								size="md"
								variant={project.link && project.link !== "#" ? "secondary" : "primary"}
								onClick={(e) => {
									e.stopPropagation();
									onOpenModal(project);
								}}
								className={project.link && project.link !== "#" ? "flex-1" : "w-full"}
							>
								View Details
								<ArrowUpRightIcon className="w-4 h-4" />
							</Button>
						</div>
					</CardContent>
				</div>
			</Card>
		</motion.div>
	);
};

export const ProjectsSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<any>(null);

	const handleOpenModal = (project: any) => {
		// Find the original project data from personalData
		const originalProject = sortedProjectsData.find(p => p.title === project.title);
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
		<Section id="projects" className="relative py-32 md:py-40 overflow-hidden bg-gray-900">
			{/* Clean Subtle Background - No Grain */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />
			
			{/* Subtle Gradient Accents */}
			<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-50" />
			<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10 opacity-50" />

			<div className="relative z-10">
				<StaggerContainer>
					{/* Section Header - More Prominent */}
					<FadeIn>
						<div className="text-center mb-16 md:mb-24">
							<div className="inline-block mb-4">
								<span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
									Portfolio Showcase
								</span>
							</div>
							<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
								Featured <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Projects</span>
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
								Showcasing my most impactful work across <span className="text-emerald-400">government</span> and <span className="text-blue-400">SaaS</span> projects, featuring large-scale applications with real-world impact and cutting-edge technology.
							</p>
						</div>
					</FadeIn>

					{/* Featured Projects - Horizontal Cards */}
					<div className="space-y-8 md:space-y-12 mb-16">
						{featuredProjects.map((project, index) => (
							<FeaturedProjectCard 
								key={project.title} 
								project={project} 
								index={index} 
								onOpenModal={handleOpenModal}
							/>
						))}
					</div>

					{/* View All Projects CTA */}
					<FadeIn delay={0.6}>
						<div className="text-center pt-12 border-t border-gray-800/50">
							<div className="mb-8">
								<p className="text-gray-400 mb-2 text-lg">
									Want to see more?
								</p>
								<p className="text-sm text-gray-500">
									Explore all {portfolioProjects.length} projects with detailed case studies
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Button
									onClick={() => {
										window.location.href = '/projects';
									}}
									size="lg"
									variant="primary"
									className="group min-w-[200px]"
								>
									View All Projects
									<ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
								</Button>
								<Button
									onClick={() => {
										const element = document.getElementById("contact");
										element?.scrollIntoView({ behavior: "smooth" });
									}}
									size="lg"
									variant="secondary"
									className="group min-w-[200px]"
								>
									Let's Work Together
									<ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
								</Button>
							</div>
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
