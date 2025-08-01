"use client";

import { FadeIn, StaggerContainer } from "@/components/animations";
import { Section } from "@/components/ui";
import { skills } from "@/data/personalData.js";
import { motion } from "framer-motion";

// Category color mapping
const categoryColors = {
	languages: "from-yellow-400 to-yellow-600",
	frameworks: "from-blue-400 to-blue-600", 
	backend: "from-green-500 to-green-700",
	tools: "from-purple-500 to-purple-700",
	others: "from-pink-500 to-pink-700"
};

// Tech stack icons with proper icons and colors
const TechIcon = ({ skill, categoryKey }: { skill: any; categoryKey: string }) => {
	const Icon = skill.icon;
	const colorClass = categoryColors[categoryKey as keyof typeof categoryColors] || "from-gray-500 to-gray-700";
	
	if (!Icon) {
		return (
			<div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
				<span className="text-white text-xs font-bold">{skill.name.slice(0, 2).toUpperCase()}</span>
			</div>
		);
	}
	
	return (
		<div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
			<Icon className="w-4 h-4 text-white" />
		</div>
	);
};

const SkillItem = ({ skill, index, categoryKey }: { skill: any; index: number; categoryKey: string }) => (
	<motion.div
		className="inline-flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
		initial={{ opacity: 0, scale: 0.8 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5, delay: index * 0.05 }}
		whileHover={{ scale: 1.05, y: -3 }}>
		<TechIcon skill={skill} categoryKey={categoryKey} />
		<div className="flex flex-col">
			<span className="text-white font-medium text-sm">{skill.name}</span>
			<span className="text-emerald-400 text-xs">{skill.level}</span>
		</div>
	</motion.div>
);

const SkillCategory = ({ title, skills: categorySkills, categoryKey, delay }: { title: string; skills: any[]; categoryKey: string; delay: number }) => (
	<FadeIn delay={delay}>
		<div className="mb-12">
			<h3 className="text-xl font-bold text-white mb-6 text-center">
				<span className="gradient-text">{title}</span>
			</h3>
			<div className="flex flex-wrap justify-center gap-4">
				{categorySkills.map((skill, index) => (
					<SkillItem key={skill.name} skill={skill} index={index} categoryKey={categoryKey} />
				))}
			</div>
		</div>
	</FadeIn>
);

export const SkillsSection = () => {
	return (
		<Section id="skills" className="relative overflow-hidden">
			{/* Background elements */}
			{/* <div className="absolute inset-0 opacity-5">
				<Image src={otherImages.grain} alt="" fill className="object-cover" />
			</div> */}

			{/* Animated background shapes */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 4,
					}}
				/>
			</div>

			<div className="relative z-10">
				<StaggerContainer>
					{/* Section header */}
					<FadeIn>
						<div className="text-center mb-16">
							<h2 className="heading-2 mb-4">
								Skills & <span className="gradient-text">Technologies</span>
							</h2>
							<p className="body-large text-gray-400 max-w-2xl mx-auto">
								A comprehensive overview of my technical expertise across the full stack development spectrum.
							</p>
						</div>
					</FadeIn>

					{/* Skills Categories */}
					<div className="max-w-6xl mx-auto">
						<SkillCategory 
							title="Languages & Core" 
							skills={skills.languages} 
							categoryKey="languages"
							delay={0.2}
						/>
						<SkillCategory 
							title="Frameworks & Libraries" 
							skills={skills.frameworks} 
							categoryKey="frameworks"
							delay={0.3}
						/>
						<SkillCategory 
							title="Backend & Databases" 
							skills={skills.backend} 
							categoryKey="backend"
							delay={0.4}
						/>
						<SkillCategory 
							title="Tools & DevOps" 
							skills={skills.tools} 
							categoryKey="tools"
							delay={0.5}
						/>
						<SkillCategory 
							title="Other Technologies" 
							skills={skills.others} 
							categoryKey="others"
							delay={0.6}
						/>
					</div>

					{/* Additional info */}
					<FadeIn delay={0.7}>
						<div className="text-center mt-16">
							<p className="text-gray-400 text-sm">
								Continuously learning and exploring new technologies to stay at the forefront of modern development.
							</p>
						</div>
					</FadeIn>
				</StaggerContainer>
			</div>
		</Section>
	);
};
