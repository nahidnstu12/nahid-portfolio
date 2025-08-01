import { NavItem, Skill, SocialLink } from "@/types";
import { PERSONAL_INFO } from "./personal-info";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  // { name: "Education", href: "#education" },
  // { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Skills data
export const SKILLS: Skill[] = [
  { name: "React", icon: "react", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "HTML5", icon: "html5", category: "frontend" },
  { name: "CSS3", icon: "css3", category: "frontend" },
  { name: "Chrome DevTools", icon: "chrome", category: "tools" },
];

// Contact information
export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  availability: PERSONAL_INFO.availability,
};

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Gmail",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: "gmail",
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.socialLinks.linkedin,
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: PERSONAL_INFO.socialLinks.github,
    icon: "github",
  },
  {
    name: "Portfolio",
    url: PERSONAL_INFO.socialLinks.portfolio,
    icon: "portfolio",
  },
];

// Tape section scrolling text
export const TAPE_WORDS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "UI/UX",
  "Performance",
];
