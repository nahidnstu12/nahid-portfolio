"use client";

import { projectImages } from "@/assets/images";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectModal } from "@/components/ProjectModal";
import { Button, Card, CardContent, Section } from "@/components/ui";
import { projects } from "@/data/personalData.js";
import { Footer } from "@/sections/Footer";
import { PortfolioProject } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Transform projects data
const portfolioProjects: PortfolioProject[] = projects.map((project) => ({
	company: project.type,
	category: project.category,
	year: project.duration.split(' - ')[1]?.split(' ')[1] || "2024",
	title: project.title,
	results: project.features.map(feature => ({ title: feature })),
	link: project.liveUrl || "#",
	image: project.image || projectImages.organizationCover,
	technologies: project.techStack,
	description: project.description.join(" "),
	hasLiveDemo: project.status === "Live",
	isComingSoon: project.status === "Development",
	isPrivate: project.status !== "Live" && !project.liveUrl,
}));

// Group projects by category (matches personalData.js `category` field)
const projectsByCategory = {
	all: portfolioProjects,
	government: portfolioProjects.filter((p) => p.category === "Government"),
	saas: portfolioProjects.filter((p) => p.category === "SaaS"),
	client: portfolioProjects.filter((p) => p.category === "Client"),
	personal: portfolioProjects.filter((p) => p.category === "Personal"),
};

const ProjectCard = ({ project, index, onOpenModal }: { project: PortfolioProject; index: number; onOpenModal: (project: any) => void }) => {
	return (
		<motion.div 
			initial={{ opacity: 0, y: 30 }} 
			whileInView={{ opacity: 1, y: 0 }} 
			viewport={{ once: true, margin: "-50px" }} 
			transition={{ duration: 0.5, delay: index * 0.05, type: "tween" }} 
			className="group"
		>
			<Card 
				variant="glass" 
				className="overflow-hidden cursor-pointer transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 h-full flex flex-col"
				onClick={() => onOpenModal(project)}
			>
				{/* Image */}
				<div className="relative h-56 overflow-hidden bg-gray-800/50">
					<Image 
						src={project.image} 
						alt={project.title} 
						fill 
						className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
					
					{/* Status Badge */}
					<div className="absolute top-4 right-4 z-10">
						{project.hasLiveDemo && !project.isPrivate && (
							<span className="px-3 py-1.5 text-xs font-semibold bg-emerald-500/30 backdrop-blur-md text-emerald-300 rounded-full border border-emerald-400/40">
								● Live
							</span>
						)}
						{project.isComingSoon && (
							<span className="px-3 py-1.5 text-xs font-semibold bg-blue-500/30 backdrop-blur-md text-blue-300 rounded-full border border-blue-400/40">
								Coming Soon
							</span>
						)}
						{project.isPrivate && (
							<span className="px-3 py-1.5 text-xs font-semibold bg-gray-500/30 backdrop-blur-md text-gray-300 rounded-full border border-gray-400/40">
								Private
							</span>
						)}
					</div>
				</div>

				<CardContent className="p-6 flex-1 flex flex-col">
					{/* Header */}
					<div className="mb-4">
						<div className="flex items-start justify-between gap-3 mb-2">
							<h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-tight line-clamp-2">
								{project.title}
							</h3>
							<span className="px-2.5 py-1 text-xs font-semibold text-gray-300 bg-gray-800/60 rounded-md border border-gray-700/50 shrink-0">
								{project.year}
							</span>
						</div>
						<p className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wide">{project.company}</p>
					</div>

					{/* Description */}
					{project.description && (
						<p className="text-sm text-gray-300 leading-relaxed mb-5 line-clamp-3 flex-shrink-0">
							{project.description}
						</p>
					)}

					{/* Technologies */}
					{project.technologies && project.technologies.length > 0 && (
						<div className="mb-5 flex-shrink-0">
							<div className="flex flex-wrap gap-1.5">
								{project.technologies.slice(0, 5).map((tech, idx) => (
									<span 
										key={idx} 
										className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-gray-800/40 rounded border border-gray-700/30"
									>
										{tech}
									</span>
								))}
								{project.technologies.length > 5 && (
									<span className="px-2 py-0.5 text-xs font-medium text-gray-500">
										+{project.technologies.length - 5}
									</span>
								)}
							</div>
						</div>
					)}

					{/* Action Button */}
					<div className="pt-4 border-t border-gray-700/30 mt-auto">
						{!project.isPrivate && project.hasLiveDemo ? (
							<Button
								size="sm"
								variant="primary"
								onClick={(e) => {
									e.stopPropagation();
									window.open(project.link, "_blank");
								}}
								className="w-full"
							>
								View Live
								<ArrowUpRightIcon className="w-4 h-4" />
							</Button>
						) : (
							<Button
								size="sm"
								variant="secondary"
								onClick={(e) => {
									e.stopPropagation();
									onOpenModal(project);
								}}
								className="w-full"
							>
								View Details
								<ArrowUpRightIcon className="w-4 h-4" />
							</Button>
						)}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default function ProjectsPage() {
	const [activeCategory, setActiveCategory] = useState<keyof typeof projectsByCategory>("all");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<any>(null);

	const categories = [
		{ key: "all" as const, label: "All Projects", count: projectsByCategory.all.length },
		{ key: "government" as const, label: "Government", count: projectsByCategory.government.length },
		{ key: "saas" as const, label: "SaaS", count: projectsByCategory.saas.length },
		{ key: "client" as const, label: "Client", count: projectsByCategory.client.length },
		{ key: "personal" as const, label: "Personal", count: projectsByCategory.personal.length },
	];

	const filteredProjects = projectsByCategory[activeCategory];

	const handleOpenModal = (project: any) => {
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
		<>
			{/* <Header /> */}
			<main className="min-h-screen bg-gray-900">
				<Section className="relative py-24 md:py-32">
					{/* Clean Background */}
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />
					
					<div className="relative z-10">
						{/* Header */}
						<FadeIn>
							<div className="text-center mb-12">
								<Link 
									href="/#projects"
									className="inline-block mb-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
								>
									← Back to Home
								</Link>
								<h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
									All <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
								</h1>
								<p className="text-lg text-gray-400 max-w-2xl mx-auto">
									Complete portfolio showcasing all my work across different domains and technologies
								</p>
							</div>
						</FadeIn>

						{/* Category Tabs */}
						<FadeIn delay={0.2}>
							<div className="flex flex-wrap justify-center gap-3 mb-12">
								{categories.map((category) => (
									<button
										key={category.key}
										onClick={() => setActiveCategory(category.key)}
										className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
											activeCategory === category.key
												? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
												: "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50 hover:text-gray-300"
										}`}
									>
										{category.label}
										<span className="ml-2 text-xs opacity-70">({category.count})</span>
									</button>
								))}
							</div>
						</FadeIn>

						{/* Projects Grid */}
						<StaggerContainer>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
								{filteredProjects.map((project, index) => (
									<ProjectCard 
										key={project.title} 
										project={project} 
										index={index} 
										onOpenModal={handleOpenModal}
									/>
								))}
							</div>
						</StaggerContainer>

						{/* Back to Home CTA */}
						<FadeIn delay={0.4}>
							<div className="text-center mt-16 pt-12 border-t border-gray-800/50">
								<Link href="/#contact">
									<Button size="lg" variant="primary" className="group">
										Let's Work Together
										<ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
									</Button>
								</Link>
							</div>
						</FadeIn>
					</div>
				</Section>
			</main>
			<Footer />

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					project={selectedProject}
				/>
			)}
		</>
	);
}
