// Import from the new data structure
import { personalInfo, techStack as techStackData, workExperience as workExperienceData } from '../data/personalData.js';

// Personal Information Constants - Now using actual resume data
export const PERSONAL_INFO = {
	// Basic Information
	name: personalInfo.name,
	title: personalInfo.title,

	// Profile/Bio
	profile: personalInfo.careerObjective,

	// Contact Information
	email: personalInfo.contact.email,
	phone: personalInfo.contact.phone,
	location: personalInfo.contact.location,
	availability: personalInfo.contact.availability,

	// Social Links
	socialLinks: personalInfo.socialLinks,

	// Work Experience
	workExperience: workExperienceData,

	// Technical Skills (extract from the new skills structure)
	skills: techStackData.map(tech => tech.name),

	// Tech Stack for About Section
	techStack: techStackData.map(tech => tech.name),

	// Achievements/Stats
	stats: personalInfo.stats,

		SOCIAL_LINKS: [
		{
			name: "Gmail",
			url: `mailto:nahid.dev19@gmail.com`,
			icon: "gmail",
		},
		{
			name: "LinkedIn",
			url: personalInfo.socialLinks.linkedin,
			icon: "linkedin",
		},
		{
			name: "WhatsApp",
			url: personalInfo.socialLinks.whatsapp,
			icon: "whatsapp",
		},
		// {
		// 	name: "Messenger",
		// 	url: "https://m.me/nishat.mazumder.004",
		// 	icon: "messenger",
		// },
	],
};

// Export individual items for easier access
export const { name, title, profile, email, location, availability, socialLinks, workExperience, skills, techStack, stats } = PERSONAL_INFO;
