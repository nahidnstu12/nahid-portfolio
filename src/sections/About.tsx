"use client";

import { memojiImages } from "@/assets/images";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { CheckCircleIcon } from "@/components/icons";
import { Card, Section } from "@/components/ui";
import { personalInfo, techStack } from "@/data/personalData.js";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "@/assets/images/profile.png";
// Tech stack icons with proper icons and colors
const TechIcon = ({ tech }: { tech: any }) => {
	const Icon = tech.icon;
	
	// Color mapping based on category
	const categoryColors = {
		"Frontend": "from-blue-400 to-blue-600",
		"Backend": "from-green-500 to-green-700",
		"Database": "from-purple-500 to-purple-700",
		"Language": "from-yellow-400 to-yellow-600",
		"ORM": "from-gray-600 to-gray-800",
		"DevOps": "from-blue-400 to-blue-600",
		"Styling": "from-teal-400 to-teal-600"
	};
	
	const colorClass = categoryColors[tech.category as keyof typeof categoryColors] || "from-gray-500 to-gray-700";
	
	if (!Icon) {
		// Fallback for technologies without icons
		return (
			<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}>
				<span className="text-white text-sm font-bold">{tech.name.slice(0, 2).toUpperCase()}</span>
			</div>
		);
	}
	
	return (
		<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}>
			<Icon className="w-6 h-6 text-white" />
		</div>
	);
};

export const AboutSection = () => {
	const achievements = [
		{
			number: personalInfo.stats.experience,
			text: "years of professional development experience",
		},
		{
			number: personalInfo.stats.projectsCompleted,
			text: "successful projects delivered",
		},
		{
			number: personalInfo.stats.technologies,
			text: "modern web technologies mastered",
		},
		{
			number: personalInfo.stats.clientSatisfaction,
			text: "client satisfaction rate",
		},
	];

	return (
		<Section id="about" className="relative">
			{/* Background elements */}
			{/* <div className="absolute inset-0 opacity-5">
				<Image src={otherImages.grain} alt="" fill className="object-cover" />
			</div> */}

			<div className="relative z-10">
				<StaggerContainer>
					{/* Section header */}
					<FadeIn>
						<div className="text-center mb-16">
							<h2 className="heading-2 mb-4">
								About <span className="gradient-text">Me</span>
							</h2>
							<p className="body-large text-gray-400 max-w-2xl mx-auto">{personalInfo.careerObjective.substring(0, 120)}...</p>
						</div>
					</FadeIn>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Left side - Content */}
						<div className="space-y-8">
							<FadeIn delay={0.2}>
								<div className="space-y-6">
									<p className="body-base text-gray-300 leading-relaxed">{personalInfo.careerObjective}</p>

									<p className="body-base text-gray-300 leading-relaxed">
										Currently working at {personalInfo.socialLinks.github.includes('nahid') ? 'RadiusTheme' : 'Softbd LTD'} as a {personalInfo.title}, I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. I believe in writing clean, maintainable code and following best practices.
									</p>
								</div>
							</FadeIn>

							{/* Achievements */}
							<FadeIn delay={0.4}>
								<div className="space-y-4">
									<h3 className="heading-3 text-white">Key Highlights</h3>
									<div className="space-y-4">
										{achievements.map((achievement, index) => (
											<motion.div
												key={index}
												className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-300"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
												whileHover={{ scale: 1.02 }}>
												<CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
												<span className="text-gray-300 flex-1">
													<span className="text-emerald-400 font-bold text-xl">{achievement.number}</span> {achievement.text}
												</span>
											</motion.div>
										))}
									</div>
								</div>
							</FadeIn>
						</div>

						{/* Right side - Avatar and Skills */}
						<div className="space-y-8">
							{/* Avatar */}
							<FadeIn delay={0.3}>
								<div className="relative">
									<div className="relative w-64 h-64 mx-auto transform transition-transform duration-500 hover:scale-105">
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-full blur" />
										<div className="relative w-full h-full bg-gray-800/50 rounded-full border border-white/10 overflow-hidden">
											<Image src={profilePicture} alt="About me" className="object-contain" width={600} height={800} loading="lazy" quality={100}  />
										</div>
									</div>
								</div>
							</FadeIn>

							{/* Tech Stack Grid */}
							<FadeIn delay={0.5}>
								<div className="space-y-6">
									<h3 className="heading-3 text-center">My Stacks</h3>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
										{techStack.slice(0, 12).map((tech, index) => (
											<motion.div 
												key={tech.name} 
												initial={{ opacity: 0, scale: 0.8, y: 20 }} 
												whileInView={{ opacity: 1, scale: 1, y: 0 }} 
												viewport={{ once: true }} 
												transition={{ 
													duration: 0.5, 
													delay: index * 0.1,
													type: "spring",
													stiffness: 300,
													damping: 20
												}} 
												whileHover={{ 
													scale: 1.05, 
													y: -8,
													rotate: [0, -1, 1, 0]
												}}
												whileTap={{ scale: 0.95 }}
											>
												<Card variant="glass" className="p-4 text-center group hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer">
													<motion.div 
														className="flex justify-center mb-3"
														whileHover={{ 
															scale: 1.2, 
															rotate: 360,
															transition: { duration: 0.6 }
														}}
													>
														<TechIcon tech={tech} />
													</motion.div>
													<motion.p 
														className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 transition-colors duration-300"
														whileHover={{ scale: 1.05 }}
													>
														{tech.name}
													</motion.p>
												</Card>
											</motion.div>
										))}
									</div>
								</div>
							</FadeIn>
						</div>
					</div>
				</StaggerContainer>
			</div>
		</Section>
	);
};
