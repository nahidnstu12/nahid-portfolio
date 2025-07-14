import { 
  SiNextdotjs, 
  SiReact, 
  SiLaravel, 
  SiVuedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql, 
  SiDocker, 
  SiPrisma, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGit,
  SiPhp,
  SiExpress,
  SiNestjs,
  SiMaterialui,
  SiRedux,
  SiJest,
  SiTypeorm,
  SiGithub,
  SiGitlab,
  SiLinkedin,
  SiPostman,
  SiVercel,
  SiFigma,
  SiStrapi,
  SiNotion,
  SiJira,
  SiChrome,
  SiOracle,
  SiRabbitmq
} from "react-icons/si";

// Personal Information
export const personalInfo = {
  name: "Mazharul Islam Nahid",
  title: "Software Engineer",
  subtitle: "Full Stack Web Developer",
  
  // Contact Information
  contact: {
    phone: "01832409825",
    email: "nahid.dev19@gmail.com",
    location: "Dhaka, Bangladesh",
    availability: "Available for new opportunities"
  },
  
  // Social Links
  socialLinks: {
    github: "https://github.com/nahid-dev",
    gitlab: "https://gitlab.com/nahid-dev",
    linkedin: "https://linkedin.com/in/nahid-dev",
    portfolio: "https://nahid-dev.vercel.app",
    leetcode: "https://leetcode.com/nahid-dev"
  },
  
  // Career Objective
  careerObjective: "Full-stack developer with 3+ years of experience in React.js, Next.js, UI/UX optimization, and back-end development using Express. Skilled in building high-performance single-page applications and developing robust REST APIs to enhance user engagement and streamline interfaces. Passionate about continuous learning and contributing to innovative, collaborative development teams.",
  
  // Statistics
  stats: {
    experience: "3+",
    projectsCompleted: "15+",
    technologies: "20+",
    clientSatisfaction: "100%"
  }
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    position: "Deputy Team Lead – Full Stack Developer",
    company: "RadiusTheme",
    type: "SaaS, Node.js, Next.js",
    duration: "Jan 2025 - Current",
    location: "Arma Majeda Malik Tower, Merul Badda, Dhaka 1212",
    description: [
      "Leading development of the Radius Directory SaaS platform; core contributor to its custom Page Builder, inspired by Elementor.",
      "Engineered a drag-and-drop container layout system with advanced styling options using Next.js 15, Zustand, Tailwind CSS, Prisma, and shadcn/ui.",
      "Built modular widget architecture and a menu builder system, enhancing platform scalability and customization.",
      "Developed frontend rendering pipelines and layout flexibility with real-time UX interactions and state management.",
      "Mentored junior developers and oversaw code quality, onboarding, and project contribution workflows."
    ],
    achievements: [
      "Boosted builder performance and user interaction via optimized drag-and-drop logic and layout engine.",
      "Helped elevate Radius Directory to a top-selling product through feature innovation and platform stability."
    ],
    techStack: ["Next.js 15", "Node.js", "Zustand", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "TypeScript", "React", "DnD", "SaaS", "Flexbox", "Figma"],
    current: true
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "Softbd LTD",
    type: "Full Stack Development",
    duration: "May 2022 - Dec 2024",
    location: "52/A, New Eskaton Road, Dhaka, Bangladesh",
    description: [
      "Developed responsive, high-performance interfaces using React.js, Next.js, TypeScript, Tailwind CSS, and Material UI, improving user satisfaction and engagement.",
      "Contributed scalable backend APIs and microservices with NestJS, Express, TypeORM, MongoDB, and MySQL.",
      "Led front-end performance tuning, achieving a 40% speed increase through SSR and caching with SWR.",
      "Contributed to the National Portal Framework (NPF) serving 54,000+ websites, creating a theme customization engine with XML-based layouts, Express + EJS, and Shadow DOM for DnD rendering.",
      "Built reusable admin tools and custom widgets, including dynamic tables, loaders, and content binders."
    ],
    achievements: [
      "Achieved 40% performance improvement through SSR optimization",
      "Contributed to NPF serving 54,000+ government websites"
    ],
    techStack: ["React", "NextJs", "TypeScript", "Material UI", "Tailwindcss", "Nodejs", "Express", "Nestjs", "TypeORM", "Mysql", "Mongoose", "MinIO", "Click Up"],
    current: false
  }
];

// Skills categorized
export const skills = {
  languages: [
    { name: "JavaScript", icon: SiJavascript, level: "Expert" },
    { name: "ES6", icon: SiJavascript, level: "Expert" },
    { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
    { name: "NodeJS", icon: SiNodedotjs, level: "Advanced" },
    { name: "PHP", icon: SiPhp, level: "Intermediate" }
  ],
  
  frameworks: [
    { name: "React", icon: SiReact, level: "Expert" },
    { name: "Next.js", icon: SiNextdotjs, level: "Expert" },
    { name: "Redux Toolkit", icon: SiRedux, level: "Advanced" },
    { name: "Zustand", icon: null, level: "Advanced" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
    // { name: "Material UI", icon: SiMaterialui, level: "Advanced" },
    { name: "SWR", icon: null, level: "Advanced" },
    { name: "Jest", icon: SiJest, level: "Intermediate" },
    { name: "Laravel", icon: SiLaravel, level: "Intermediate" },
    { name: "Vue.js", icon: SiVuedotjs, level: "Intermediate" }
  ],
  
  backend: [
    { name: "ExpressJS", icon: SiExpress, level: "Advanced" },
    { name: "NestJS", icon: SiNestjs, level: "Advanced" },
    { name: "MySQL", icon: SiMysql, level: "Advanced" },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
    { name: "TypeORM", icon: SiTypeorm, level: "Advanced" },
    { name: "Mongoose", icon: SiMongodb, level: "Advanced" },
    { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
    { name: "Redis", icon: SiRedis, level: "Intermediate" },
    { name: "Oracle", icon: SiOracle, level: "Intermediate" }
  ],
  
  tools: [
    { name: "Git", icon: SiGit, level: "Advanced" },
    { name: "Github", icon: SiGithub, level: "Advanced" },
    { name: "Strapi", icon: SiStrapi, level: "Intermediate" },
    { name: "Figma", icon: SiFigma, level: "Intermediate" },
    { name: "Postman", icon: SiPostman, level: "Advanced" },
    { name: "MongoDB Compass", icon: SiMongodb, level: "Advanced" },
    // { name: "Chrome Dev Tool", icon: SiChrome, level: "Advanced" },
    { name: "Vercel", icon: SiVercel, level: "Advanced" },
    { name: "MinIO", icon: null, level: "Intermediate" }
  ],
  
  others: [
    { name: "Notion", icon: SiNotion, level: "Advanced" },
    { name: "Click Up", icon: null, level: "Advanced" },
    { name: "Jira", icon: SiJira, level: "Intermediate" },
    { name: "Docker", icon: SiDocker, level: "Intermediate" },
    { name: "Prisma", icon: SiPrisma, level: "Advanced" }
  ]
};

// Tech Stack for About Section (main technologies)
export const techStack = [
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Language" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "Prisma ORM", icon: SiPrisma, category: "ORM" },
  { name: "NestJS", icon: SiNestjs, category: "Backend" },
  { name: "Laravel", icon: SiLaravel, category: "Backend" },
  { name: "Docker", icon: SiDocker, category: "DevOps" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Styling" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" }
];

// Projects
export const projects = [
  {
    id: 1,
    title: "DIGITAL LAND RECORD AND MANAGEMENT SYSTEM (DLRMS)",
    type: "Government Project",
    status: "Live",
    duration: "April 2024 - Dec 2024",
    liveUrl: "#",
    description: [
      "Worked on a large-scale government project aimed at digitizing land records and improving administrative workflows.",
      "Developed features for khatian entry from the citizen panel and streamlined the processing workflow for DLRMS office administration.",
      "Created a khatian correction system, enabling citizens to correct their land records in an organized and efficient manner.",
      "Designed and maintained a scalable backend API using Nest.js, TypeORM, and Oracle to handle millions of user land records."
    ],
    features: [
      "Large-scale government digitization",
      "Khatian entry and correction system",
      "Scalable backend for millions of records",
      "Streamlined administrative workflows"
    ],
    techStack: ["React", "NextJs", "TypeScript", "MUI", "NestJS", "Oracle", "TypeORM", "Redis", "RabbitMQ"],
    category: "Government",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "RADIUS DIRECTORY",
    type: "SaaS Product",
    status: "Development",
    duration: "Jan 2025 - Current",
    liveUrl: "#",
    description: [
      "Core contributor to one of RadiusTheme's top-selling SaaS products designed for dynamic directory and website creation.",
      "Developed a fully custom drag-and-drop Page Builder module, inspired by Elementor, with container-based layout logic and real-time styling.",
      "Implemented modular widget architecture, enabling scalable, reusable UI components.",
      "Built an interactive Menu Builder system, optimized beyond WordPress models for performance and extensibility.",
      "Integrated Next.js 15 App Router, Zustand, and shadcn/ui for dynamic rendering, layout control, and component styling.",
      "Contributed to core UX features like container nesting, layout switching, flexbox controls, and dynamic background configuration."
    ],
    features: [
      "Custom drag-and-drop Page Builder",
      "Modular widget architecture",
      "Interactive Menu Builder",
      "Real-time styling system",
      "Container-based layout logic"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    category: "SaaS",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "NATIONAL PORTAL FRAMEWORK (NPF)",
    type: "Government Project",
    status: "Development",
    duration: "Dec 2023 – Dec 2024",
    liveUrl: "#",
    description: [
      "Built a dynamic theme customization system powering 54,000+ Bangladeshi government websites under the National Portal Framework.",
      "Designed a flexible theme engine using Express + EJS with React-based composition to render dynamic pages from XML configurations.",
      "Created a dependency-free drag-and-drop system using Shadow DOM, supporting custom raw widgets and dynamic content rendering.",
      "Built reusable tools like Minioloader, Fileloader, and Mongoloader to manage resource loading across admin and theme layers.",
      "Developed a feature-rich data table component in EJS, enabling high-performance, theme-aware content management.",
      "Integrated backend with MongoDB and MinIO, enabling reliable data handling and asset delivery."
    ],
    features: [
      "Powers 54,000+ government websites",
      "Dynamic theme customization",
      "Shadow DOM drag-and-drop",
      "XML-based page rendering",
      "Reusable resource loaders"
    ],
    techStack: ["Express.js", "EJS", "React", "Node.js", "Shadow DOM", "XML", "MongoDB", "MinIO", "NestJS", "Next.js", "TypeScript"],
    category: "Government",
    image: "/api/placeholder/600/400"
  },
  {
    id: 1,
    title: "DIGITAL LAND RECORD AND MANAGEMENT SYSTEM (DLRMS)",
    type: "Government Project",
    status: "Live",
    duration: "April 2024 - Dec 2024",
    liveUrl: "#",
    description: [
      "Worked on a large-scale government project aimed at digitizing land records and improving administrative workflows.",
      "Developed features for khatian entry from the citizen panel and streamlined the processing workflow for DLRMS office administration.",
      "Created a khatian correction system, enabling citizens to correct their land records in an organized and efficient manner.",
      "Designed and maintained a scalable backend API using Nest.js, TypeORM, and Oracle to handle millions of user land records."
    ],
    features: [
      "Large-scale government digitization",
      "Khatian entry and correction system",
      "Scalable backend for millions of records",
      "Streamlined administrative workflows"
    ],
    techStack: ["React", "NextJs", "TypeScript", "MUI", "NestJS", "Oracle", "TypeORM", "Redis", "RabbitMQ"],
    category: "Government",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "RADIUS DIRECTORY",
    type: "SaaS Product",
    status: "Development",
    duration: "Jan 2025 - Current",
    liveUrl: "#",
    description: [
      "Core contributor to one of RadiusTheme's top-selling SaaS products designed for dynamic directory and website creation.",
      "Developed a fully custom drag-and-drop Page Builder module, inspired by Elementor, with container-based layout logic and real-time styling.",
      "Implemented modular widget architecture, enabling scalable, reusable UI components.",
      "Built an interactive Menu Builder system, optimized beyond WordPress models for performance and extensibility.",
      "Integrated Next.js 15 App Router, Zustand, and shadcn/ui for dynamic rendering, layout control, and component styling.",
      "Contributed to core UX features like container nesting, layout switching, flexbox controls, and dynamic background configuration."
    ],
    features: [
      "Custom drag-and-drop Page Builder",
      "Modular widget architecture",
      "Interactive Menu Builder",
      "Real-time styling system",
      "Container-based layout logic"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    category: "SaaS",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "NATIONAL PORTAL FRAMEWORK (NPF)",
    type: "Government Project",
    status: "Development",
    duration: "Dec 2023 – Dec 2024",
    liveUrl: "#",
    description: [
      "Built a dynamic theme customization system powering 54,000+ Bangladeshi government websites under the National Portal Framework.",
      "Designed a flexible theme engine using Express + EJS with React-based composition to render dynamic pages from XML configurations.",
      "Created a dependency-free drag-and-drop system using Shadow DOM, supporting custom raw widgets and dynamic content rendering.",
      "Built reusable tools like Minioloader, Fileloader, and Mongoloader to manage resource loading across admin and theme layers.",
      "Developed a feature-rich data table component in EJS, enabling high-performance, theme-aware content management.",
      "Integrated backend with MongoDB and MinIO, enabling reliable data handling and asset delivery."
    ],
    features: [
      "Powers 54,000+ government websites",
      "Dynamic theme customization",
      "Shadow DOM drag-and-drop",
      "XML-based page rendering",
      "Reusable resource loaders"
    ],
    techStack: ["Express.js", "EJS", "React", "Node.js", "Shadow DOM", "XML", "MongoDB", "MinIO", "NestJS", "Next.js", "TypeScript"],
    category: "Government",
    image: "/api/placeholder/600/400"
  },
  {
    id: 1,
    title: "DIGITAL LAND RECORD AND MANAGEMENT SYSTEM (DLRMS)",
    type: "Government Project",
    status: "Live",
    duration: "April 2024 - Dec 2024",
    liveUrl: "#",
    description: [
      "Worked on a large-scale government project aimed at digitizing land records and improving administrative workflows.",
      "Developed features for khatian entry from the citizen panel and streamlined the processing workflow for DLRMS office administration.",
      "Created a khatian correction system, enabling citizens to correct their land records in an organized and efficient manner.",
      "Designed and maintained a scalable backend API using Nest.js, TypeORM, and Oracle to handle millions of user land records."
    ],
    features: [
      "Large-scale government digitization",
      "Khatian entry and correction system",
      "Scalable backend for millions of records",
      "Streamlined administrative workflows"
    ],
    techStack: ["React", "NextJs", "TypeScript", "MUI", "NestJS", "Oracle", "TypeORM", "Redis", "RabbitMQ"],
    category: "Government",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "RADIUS DIRECTORY",
    type: "SaaS Product",
    status: "Development",
    duration: "Jan 2025 - Current",
    liveUrl: "#",
    description: [
      "Core contributor to one of RadiusTheme's top-selling SaaS products designed for dynamic directory and website creation.",
      "Developed a fully custom drag-and-drop Page Builder module, inspired by Elementor, with container-based layout logic and real-time styling.",
      "Implemented modular widget architecture, enabling scalable, reusable UI components.",
      "Built an interactive Menu Builder system, optimized beyond WordPress models for performance and extensibility.",
      "Integrated Next.js 15 App Router, Zustand, and shadcn/ui for dynamic rendering, layout control, and component styling.",
      "Contributed to core UX features like container nesting, layout switching, flexbox controls, and dynamic background configuration."
    ],
    features: [
      "Custom drag-and-drop Page Builder",
      "Modular widget architecture",
      "Interactive Menu Builder",
      "Real-time styling system",
      "Container-based layout logic"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    category: "SaaS",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "NATIONAL PORTAL FRAMEWORK (NPF)",
    type: "Government Project",
    status: "Development",
    duration: "Dec 2023 – Dec 2024",
    liveUrl: "#",
    description: [
      "Built a dynamic theme customization system powering 54,000+ Bangladeshi government websites under the National Portal Framework.",
      "Designed a flexible theme engine using Express + EJS with React-based composition to render dynamic pages from XML configurations.",
      "Created a dependency-free drag-and-drop system using Shadow DOM, supporting custom raw widgets and dynamic content rendering.",
      "Built reusable tools like Minioloader, Fileloader, and Mongoloader to manage resource loading across admin and theme layers.",
      "Developed a feature-rich data table component in EJS, enabling high-performance, theme-aware content management.",
      "Integrated backend with MongoDB and MinIO, enabling reliable data handling and asset delivery."
    ],
    features: [
      "Powers 54,000+ government websites",
      "Dynamic theme customization",
      "Shadow DOM drag-and-drop",
      "XML-based page rendering",
      "Reusable resource loaders"
    ],
    techStack: ["Express.js", "EJS", "React", "Node.js", "Shadow DOM", "XML", "MongoDB", "MinIO", "NestJS", "Next.js", "TypeScript"],
    category: "Government",
    image: "/api/placeholder/600/400"
  }
];

// Achievements
export const achievements = [
  {
    id: 1,
    title: "LWS (think-in-a-redux-way) Certificate",
    description: "Completed advanced Redux state management course",
    url: "#",
    date: "2023",
    type: "Certificate"
  }
];

// Education
export const education = [
  {
    id: 1,
    degree: "BSc. in Computer Science and Telecommunication Engineering",
    institution: "Noakhali Science and Technology University",
    duration: "2017-2022",
    cgpa: "3.39 (out of 4.00)",
    location: "Noakhali, Bangladesh"
  }
];

// Navigation items
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
]; 