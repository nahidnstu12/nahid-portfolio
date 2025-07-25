import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiStrapi,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVitest
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
    { name: "Vitest", icon: SiVitest, level: "Intermediate" },
    { name: "Laravel", icon: SiLaravel, level: "Intermediate" },
    // { name: "Vue.js", icon: SiVuedotjs, level: "Intermediate" }
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
    // { name: "Oracle", icon: SiOracle, level: "Intermediate" }
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
    { name: "MinIO", icon: null, level: "Familiar" }
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
    type: "Softbd",
    status: "Live",
    duration: "April 2024 - Dec 2024",
    liveUrl: "https://dlrms.land.gov.bd/",
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
    type: "RadiusTheme",
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
    category: "SaaS Product",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "NATIONAL PORTAL FRAMEWORK (NPF)",
    type: "Softbd",
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
    id: 4,
    title: "FUTURE NATION",
    type: "Softbd",
    status: "Live",
    duration: "April 2023 - Dec 2023",
    liveUrl: "https://platform.futurenation.gov.bd/",
    description: [
      "Developed interactive e-learning platform: Built engaging course modules with content provider tools and integrated BigBlueButton for live class and live class routine, collaborative learning experiences.",
      "Enhanced skill development: Implemented SCORM compliance for uploading interactive project modules, enabling deeper dives into practical applications.",
      "Streamlined job search process: Designed and developed a seamless job application platform with integrated assessments, interview scheduling, and shortlisting processes.",
      "Optimized user journeys: Created a step-by-step onboarding system for young users, facilitating registration, profile completion, and access to courses and job applications."
    ],
    features: [
      "Interactive e-learning platform",
      "SCORM compliance integration",
      "Job application and assessment system",
      "Step-by-step user onboarding",
      "BigBlueButton live class integration"
    ],
    techStack: ["React", "NextJs", "TypeScript", "MUI", "SWR", "NestJS", "TypeORM", "Redis", "RabbitMQ"],
    category: "LMS & Job Portal",
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "School",
    type: "SaaS Product",
    status: "Development",
    duration: "Jan 2024 - Current",
    liveUrl: "https://school.pioneersgroupbd.com/",
    description: [
      "Developed comprehensive school management system with integrated student information, attendance tracking, and academic performance monitoring.",
      "Built parent-teacher communication portal with real-time notifications, grade reporting, and assignment tracking capabilities.",
      "Implemented fee management system with automated billing, payment processing, and financial reporting for educational institutions.",
      "Created timetable management and resource allocation system for optimized class scheduling and facility utilization.",
      "Designed role-based access control for administrators, teachers, students, and parents with customized dashboard experiences."
    ],
    features: [
      "Student information management",
      "Parent-teacher communication portal",
      "Fee management and billing",
      "Timetable and resource allocation",
      "Role-based access control"
    ],
    techStack: ["Laravel", "Mysql", "Laravel Blade", "React Native", "SCM", "Lando"],
    category: "SaaS",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Team Docs",
    type: "Personal Project",
    status: "Development",
    duration: "Jan 2025 – Current",
    liveUrl: "https://team-docs.vercel.app/",
    description: [
      "Developed collaborative documentation platform for government teams with real-time editing, version control, and approval workflows.",
      "Built document management system with hierarchical organization, advanced search capabilities, and secure access controls.",
      "Implemented team collaboration features including comments, mentions, task assignments, and notification systems.",
      "Created template library with standardized government document formats and automated compliance checking.",
      "Designed audit trail system for document changes, approvals, and access logs to ensure transparency and accountability."
    ],
    features: [
      "Real-time collaborative editing",
      "Document management and organization",
      "Team collaboration tools",
      "Government template library",
      "Audit trail and compliance",
      "Mentor new developers"
    ],
    techStack: [ "Next.js", "React", "TypeScript", "ShadCN", "Postgres", "Server Actions"],
    category: "Personal",
    image: "/api/placeholder/600/400"
  },
  {
    id: 7,
    title: "Ecom-Microservice",
    type: "Personal Project",
    status: "Live",
    duration: "April 2024 - Dec 2024",
    liveUrl: "https://www.postman.com/interstellar-sunset-878874/beast-com/collection/o1hq8nj/services?action=share&source=copy-link&creator=13406744",
    description: [
      "This is a personal project that I developed for my own use. I used this project to learn about microservices architecture and how to build a scalable e-commerce platform.",
      "I create service to service communication using postman collection manually to understand the microservices architecture.",
      "Architected and developed scalable microservices-based e-commerce platform with distributed system architecture and inter-service communication.",
      "Built independent services for user management, product catalog, order processing, payment gateway, and inventory management.",
      "Implemented event-driven architecture with message queues for reliable service communication and data consistency.",
      "Designed API gateway with load balancing, rate limiting, and security middleware for unified service access.",
      // "Integrated monitoring, logging, and health check systems for comprehensive system observability and maintenance."
    ],
    features: [
      "Microservices architecture",
      "Event-driven communication",
      "API gateway with load balancing",
      "Distributed system design",
    ],
    techStack: ["Express.js", "Node.js", "Microservices", "Docker", "RabbitMQ", "Redis", "Postgres", "TypeScript", "RestAPI", "Konga"],
    category: "Personal",
    image: "/api/placeholder/600/400"
  },
  {
    id: 8,
    title: "NISE",
    type: "Softbd",
    status: "Live",
    duration: "Jan 2022 - Nov 2024",
    liveUrl: "https://nise.gov.bd/",
    description: [
      "Developed apprenticeship module for a youth scholarship program, provided different topics on skills, enabling applications, and granting certificates and financial benefits upon completion.",
      "Designed multiple enrollment feature for seamless switching between course batches, handling payment structures and availability across sectors.",
      "Working on onboarding NISE youth of our platform to the ILO-erpl platform via rpl assessment, significantly empowering our youth users.",
      "Working on onboarding NASCIB & SMEF members to our system and providing personalized dashboards for task management."
    ],
    features: [
      "Youth scholarship program",
      "Multiple enrollment system",
      "ILO-erpl platform integration",
      "NASCIB & SMEF member onboarding",
      "Personalized task dashboards"
    ],
    techStack: ["Next.js", "React", "Node.js", "TypeScript", "SWR", "Material UI", "Laravel", "MySQL", "Microservices", "Docker", "RabbitMQ", "Redis"],
    category: "SaaS",
    image: "/api/placeholder/600/400"
  },
  {
    id: 9,
    title: "Scholars (SEM)",
    type: "Sass Project",
    status: "Development",
    duration: "May 2025 – Current",
    liveUrl: "#",
    description: [
      "Developed comprehensive scholarship management system for government educational programs with application processing and evaluation workflows.",
      "Built student eligibility verification system with automated document validation, academic record checking, and merit-based scoring.",
      "Implemented scholarship distribution tracking with payment processing, disbursement schedules, and financial reporting capabilities.",
      "Created evaluation dashboard for review committees with scoring rubrics, comparative analysis, and decision-making tools.",
      "Designed student portal for application submission, status tracking, and communication with scholarship administrators."
    ],
    features: [
      "Scholarship application processing",
      "Student eligibility verification",
      "Payment and disbursement tracking",
      "Evaluation and scoring system",
      "Student portal and communication"
    ],
    techStack: ["Go", "React", "Vite", "ShadCN",  "Postgres", "TypeScript", "RestAPI", "Docker", "RTK Query"],
    category: "SasS",
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