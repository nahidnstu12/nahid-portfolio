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

// Radius Directory project images
import ecom from "@/assets/projects/ecom-microservice.png";
import fnCourse from "@/assets/projects/fn-course.png";
import fnHome from "@/assets/projects/fn-home.png";
import landHome from "@/assets/projects/land-home.png";
import niseHome from "@/assets/projects/nise-home.png";
import npfHome from "@/assets/projects/npf-home.png";
import rdAccount from "@/assets/projects/rd-account.png";
import rdBuilderPage from "@/assets/projects/rd-builder-page.png";
import rdHome from "@/assets/projects/rd-home.png";
import rdMenu from "@/assets/projects/rd-menu.png";
import rdSettings from "@/assets/projects/rd-settings.png";
import rdSingleListing from "@/assets/projects/rd-single-listing.png";
import rdTemplate from "@/assets/projects/rd-template.png";
import schoolAdmin from "@/assets/projects/school-admin.png";
import schoolHome from "@/assets/projects/school-home.png";
import semHome from "@/assets/projects/sem-home.png";
import semPay from "@/assets/projects/sem-pay.png";
import semRegister from "@/assets/projects/sem-register.png";
import freelocityHome from "@/assets/projects/freelocity-home.png";
import freelocityDashboard from "@/assets/projects/freelocity-dashboard.png";
import pharmaPosSale from "@/assets/projects/pharma-pos-sale.png";
import pharmaPosDashboard from "@/assets/projects/pharma-pos-dashboard.png";
import pharmaPosPosLong from "@/assets/projects/pharma-pos-pos-long.png";
import pharmaPosDashboardLong from "@/assets/projects/pharma-pos-dashboard-long.png";
import pharmaPosCatalogLong from "@/assets/projects/pharma-pos-catalog-long.png";
import pharmaPosPurchaseLong from "@/assets/projects/pharma-pos-purchase-long.png";

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
    github: "https://github.com/nahidnstu12",
    gitlab: "https://gitlab.com/nahid-dev",
    linkedin: "https://linkedin.com/in/nahid-dev",
    portfolio: "https://nahid-portfolio.vercel.app/",
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
      "Lead full-stack development of Radius Directory SaaS platform, architecting and implementing a custom Page Builder with drag-and-drop functionality similar to Elementor.",
      "Design and develop scalable container layout system with advanced styling capabilities using Next.js 15, React, TypeScript, Zustand state management, Tailwind CSS, and Prisma ORM and PostgreSQL.",
      "Architect and implement monetization system supporting pay-per-listing, membership subscriptions, and promotional packages with multi-gateway payment processing (Stripe, PayPal, SSLCommerz, offline).",
      "Build order processing workflows with transaction management, billing address validation, and automated listing activation upon payment completion.",
      "Implement Redis caching layer with hash-based cache keys and tag-based invalidation strategies, reducing database queries by 60% and improving page load times.",
      "Architect modular widget system and menu builder infrastructure and template system, enabling platform extensibility and custom business logic implementation.",
      "Build high-performance frontend rendering pipelines with real-time state synchronization and dynamic route resolving, optimizing user experience and interaction responsiveness.",
      "Manage team of junior developers, conducting code reviews, establishing development workflows, and ensuring adherence to coding standards and best practices."
    ],
    achievements: [
      "Optimized drag-and-drop performance by 40% through algorithmic improvements and efficient layout calculation, resulting in smoother user interactions.",
      "Implemented Redis caching strategy reducing API response times by 60% and database load through intelligent cache invalidation patterns.",
      "Contributed to Radius Directory becoming a top-selling product through feature development, bug resolution, and platform stability enhancements."
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "shadcn/ui",
      "Drag-and-Drop",
      "RESTful APIs",
      "Payment Integration",
      "SaaS Architecture",
      "Cache Optimization",
    ],
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
// Optional: set `order` (number) on any project to control display order.
// Lower value appears first in both home section and /projects page.
export const projects = [
  {
    id: 12,
    order: 6,
    title: "RADIUS TASK",
    type: "RadiusTheme",
    status: "Development",
    duration: "Jan 2025 - Current",
    description: [
      "Core developer on RadiusTask — RadiusTheme's in-house multi-workspace HR & project-management SaaS for employee operations, delivery tracking, and client billing.",
      "Building employee management module: profiles, org chart, bulk CSV import, shifts, holidays, and self-service profile workflows with role-based field restrictions.",
      "Developing projects & tasks module with lifecycle controls, List/Board/Calendar/Gantt views, task slide-over panels, estimate approval flows, and recurring task automation.",
      "Implementing Live Monitor — real-time workforce visibility via Server-Sent Events and Redis pub/sub with idle/away detection, nudge notifications, and manager-filtered views.",
      "Building payroll module: salary structures, tax slabs, payroll runs, and employee payslip generation with assignment history.",
      "Developing clients & invoicing: client master CRUD, Fixed/T&M/Milestone/Retainer invoices, PDF export, payment recording, and aging receivables.",
      "Shipping notifications & UX layer: in-app and email notification center, per-user channel preferences, Cmd+K command palette, 3-pane app shell, and slide-over detail panels."
    ],
    features: [
      "Multi-workspace HR SaaS (in-house product)",
      "Employee management & org chart",
      "Projects, tasks & estimate approval",
      "Live Monitor with real-time SSE",
      "Payroll runs & payslip generation",
      "Clients, invoicing & aging reports",
      "Notifications, Cmd+K & app shell UX"
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Better Auth",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "AWS S3",
      "SSE",
      "RESTful APIs",
      "RBAC"
    ],
    category: "SaaS"
  },
  {
    id: 1,
    order: 2,
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
    image: landHome,
    images: [{ src: landHome, alt: "Land Home Page", caption: "Land home page showcasing the government project" },]
  },
  {
    id: 2,
    order: 1,
    title: "RADIUS DIRECTORY",
    type: "RadiusTheme",
    status: "Live",
    duration: "Jan 2025 - Current",
    liveUrl: "https://bikribd.com/",
    description: [
      "Core contributor to RadiusTheme's top-selling SaaS platform for dynamic directory and website creation, serving as a leading marketplace solution.",
      "Architected and developed a fully custom drag-and-drop Page Builder system inspired by Elementor, featuring container-based layout logic, nested container support, flexbox controls, and real-time styling with live preview capabilities.",
      "Built modular widget architecture with 30+ reusable UI components (headings, images, galleries, maps, forms, listings) enabling scalable, extensible page construction without code dependencies.",
      "Designed and implemented Template Builder system supporting header/footer templates with conditional rendering logic, enabling site-wide template reuse and consistent branding across pages.",
      "Developed interactive Menu Builder with drag-and-drop functionality, hierarchical menu structures, multi-level navigation support, and dynamic menu item configuration (pages, custom links, templates).",
      "Engineered comprehensive monetization system supporting pay-per-listing, membership subscriptions, promotional packages, and renewal workflows with multi-gateway payment integration (Stripe, PayPal, SSLCommerz, offline).",
      "Implemented order processing workflows with transaction management, billing address validation, automated listing activation, and membership quota tracking with priority-based plan distribution.",
      "Architected Redis caching layer with hash-based cache keys, tag-based invalidation strategies (global, widget-specific, parameter-level), and Next.js unstable_cache wrapper with performance metrics, reducing database queries by 60% and improving API response times.",
      "Built high-performance frontend rendering pipelines with parallel data prefetching, server-side rendering optimization, and real-time state synchronization using Next.js 15 App Router, Zustand, and React Server Components.",
      "Integrated advanced UX features including container nesting, layout switching, responsive flexbox controls, dynamic background configuration, and drag-and-drop interactions using @dnd-kit library."
    ],
    features: [
      "Custom drag-and-drop Page Builder with container-based layouts",
      "Modular widget architecture with 30+ reusable components",
      "Template Builder system for header/footer templates",
      "Interactive Menu Builder with hierarchical navigation",
      "Monetization system (pay-per-listing, memberships, subscriptions)",
      "Multi-gateway payment processing integration",
      "Redis caching with tag-based invalidation",
      "Real-time styling and live preview system",
      "Order processing and transaction management",
      "Performance-optimized rendering pipelines"
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Redis", "Zustand", "Tailwind CSS", "shadcn/ui", "@dnd-kit", "Payment APIs", "RESTful APIs", "SaaS Architecture"],
    category: "SaaS",
    image: rdHome,
    images: [
      { src: rdHome, alt: "Radius Directory Home Page", caption: "Home page showcasing the directory platform" },
      { src: rdBuilderPage, alt: "Page Builder Interface", caption: "Custom drag-and-drop Page Builder with container-based layouts" },
      { src: rdTemplate, alt: "Template Builder", caption: "Template Builder system for header/footer templates" },
      { src: rdMenu, alt: "Menu Builder", caption: "Interactive Menu Builder with hierarchical navigation" },
      { src: rdSingleListing, alt: "Single Listing Page", caption: "Individual listing page with detailed information" },
      { src: rdAccount, alt: "Account Dashboard", caption: "User account dashboard and settings" },
      { src: rdSettings, alt: "Settings Page", caption: "Platform settings and configuration" }
    ]
  },
  {
    id: 3,
    order: 3,
    title: "NATIONAL PORTAL FRAMEWORK (NPF)",
    type: "Softbd",
    status: "Live",
    duration: "Dec 2023 – Dec 2024",
    liveUrl: "https://bangladesh.gov.bd/",
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
    image: npfHome,
    images: [{ src: npfHome, alt: "NPF Home Page", caption: "NPF home page showcasing the government project" },]
  },
  {
    id: 4,
    order: 7,
    title: "FUTURE NATION",
    type: "Client Project",
    status: "Live",
    duration: "April 2024 - Dec 2024",
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
    techStack: ["React", "NextJs", "TypeScript", "MUI", "NestJS", "Oracle", "TypeORM", "Redis", "RabbitMQ"],
    category: "Client",
    image: fnHome,
    images: [{ src: fnHome, alt: "Future Nation Home Page", caption: "Future Nation home page showcasing the government project" }, { src: fnCourse, alt: "Future Nation Course Page", caption: "Future Nation course page showcasing the government project" }]
  },
  {
    id: 5,
    order: 6,
    title: "School",
    type: "SaaS Product",
    status: "Live",
    duration: "Jan 2023 - Current",
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
    image: schoolHome,
    images: [{ src: schoolHome, alt: "School Home Page", caption: "School home page showcasing the government project" }, { src: schoolAdmin, alt: "School Admin Page", caption: "School admin page showcasing the government project" }]
  },
  // {
  //   id: 6,
  //   title: "Team Docs",
  //   type: "Government Project",
  //   status: "Development",
  //   duration: "Dec 2023 – Dec 2024",
  //   liveUrl: "#",
  //   description: [
  //     "Developed collaborative documentation platform for government teams with real-time editing, version control, and approval workflows.",
  //     "Built document management system with hierarchical organization, advanced search capabilities, and secure access controls.",
  //     "Implemented team collaboration features including comments, mentions, task assignments, and notification systems.",
  //     "Created template library with standardized government document formats and automated compliance checking.",
  //     "Designed audit trail system for document changes, approvals, and access logs to ensure transparency and accountability."
  //   ],
  //   features: [
  //     "Real-time collaborative editing",
  //     "Document management and organization",
  //     "Team collaboration tools",
  //     "Government template library",
  //     "Audit trail and compliance"
  //   ],
  //   techStack: ["Express.js", "EJS", "React", "Node.js", "Shadow DOM", "XML", "MongoDB", "MinIO", "NestJS", "Next.js", "TypeScript"],
  //   category: "Government",
  //   image: "/api/placeholder/600/400"
  // },
  {
    id: 7,
    order: 7,
    title: "Ecom-Microservice",
    type: "Personal Project",
    status: "Completed",
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
    techStack: ["React", "NextJs", "TypeScript", "MUI", "NestJS", "Oracle", "TypeORM", "Redis", "RabbitMQ"],
    category: "Personal",
    image: ecom,
    images: [{ src: ecom, alt: "Ecom Microservice", caption: "Ecom microservice architecture" }]
  },
  {
    id: 8,
    order: 8,
    title: "NISE",
    type: "SaaS Product",
    status: "Live",
    duration: "Jan 2025 - Current",
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
    image: niseHome,
    images: [{ src: niseHome, alt: "NISE Home Page", caption: "NISE home page showcasing the government project" }]
  },
  {
    id: 9,
    order: 4,
    title: "Scholars (SEM)",
    type: "SaaS Product",
    status: "Live",
    duration: "May 2025 – Current",
    liveUrl: "https://www.scholarsfoundationbd.org/",
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
    techStack: ["Express.js", "EJS", "React", "Node.js", "Shadow DOM", "XML", "MongoDB", "MinIO", "NestJS", "Next.js", "TypeScript"],
    category: "SaaS",
    image: semHome,
    images: [{ src: semHome, alt: "SEM Home Page", caption: "SEM home page showcasing the government project" }, { src: semRegister, alt: "SEM Register Page", caption: "SEM register page showcasing the government project" }, { src: semPay, alt: "SEM Pay Page", caption: "SEM pay page showcasing the government project" }]
  },
  {
    id: 10,
    order: 5,
    title: "FREELOCITY",
    type: "Client Project",
    status: "Live",
    duration: "Dec 2025 - May 2026",
    liveUrl: "https://freelocity.bynarilab.com/",
    description: [
      "End-to-end solo build for a USA-based client: architected and delivered the full web platform and REST API for a two-sided freelance marketplace connecting buyers with skilled freelancers.",
      "Designed system architecture spanning Laravel 12 API, Inertia.js + React 19 frontend, Sanctum auth, and role-based buyer/freelancer/admin flows with shared dashboard infrastructure.",
      "Built marketplace core: service (gig) listings with category filters, tiered packages, portfolio galleries, featured services, and public gig discovery with search and slug-based routing.",
      "Implemented buyer journey — browse and filter freelancers, real-time chat for scope discussion, secure checkout, order tracking, revisions, and completion workflows.",
      "Implemented freelancer journey — service creation wizard (overview, packages, gallery, publish), project applications, order delivery, reviews, and payout management via Stripe Connect.",
      "Integrated Stripe and PayPal payment flows with webhooks, platform commission (10% buyer / 20% freelancer), withdrawal processing, and admin payment oversight.",
      "Engineered real-time messaging with Pusher, ImageKit media uploads, email verification, profile completion tracking, and admin moderation for gigs, orders, users, and chat."
    ],
    features: [
      "Two-sided freelance marketplace (buyers & freelancers)",
      "Gig listings with packages, gallery & category filters",
      "Real-time chat & order tracking",
      "Stripe Connect & PayPal checkout",
      "Admin panel for gigs, orders & withdrawals",
      "Full-stack architecture design (solo build)"
    ],
    techStack: ["Laravel 12", "React 19", "Inertia.js", "TypeScript", "Tailwind CSS 4", "MySQL", "Sanctum", "Stripe", "PayPal", "Pusher", "ImageKit", "Zustand", "Zod", "Radix UI"],
    category: "Client",
    image: freelocityHome,
    images: [
      { src: freelocityHome, alt: "Freelocity Home Page", caption: "Landing page with category browse and featured freelancer services" },
      { src: freelocityDashboard, alt: "Freelocity How It Works & Orders", caption: "Buyer journey flow and order tracking dashboard with secure payments" }
    ]
  },
  {
    id: 11,
    order: 4,
    title: "PHARMA POS (DatasolutionBD)",
    type: "SaaS Product",
    status: "Live",
    duration: "Apr 2026 - Current",
    liveUrl: "https://pharmacy.datasolutionbd.com/",
    description: [
      "Lead architect and solo full-stack builder for Bynarilab's pharmacy-focused POS SaaS — mobile-first point of sale for Bangladeshi drug stores with Bengali UX and HQ-administered master catalog.",
      "Designed multi-tenant architecture: Laravel 12 REST API, React 19 SPA, Sanctum session auth, shop booking/onboarding wizard, and super-admin platform for tenants, plans, and master products.",
      "Built 20,000+ master medicine catalog with generic/name search, import-from-catalog onboarding, custom SKU submission with HQ approval, and low-stock/out-of-stock alerts.",
      "Implemented counter POS flow — cart with MRP-based discount (% or flat), cash and mobile-banking checkout, sale receipts, void with audit trail, and automatic inventory deduction.",
      "Delivered purchase module: supplier selection, box/loose quantity, MRP and discount entry with auto cost calculation and stock replenishment.",
      "Engineered day-closing workflow with cash drawer reconciliation, variance notes, and sales lock; subscription billing with trial timeline and bKash payment renewal.",
      "Integrated Firebase phone verification, i18n (Bengali/English), Redux Toolkit state, audit log retention, and scheduled cleanup jobs for OTP, idempotency keys, and error events."
    ],
    features: [
      "Pharmacy POS with 20K+ master medicine catalog",
      "Shop onboarding, booking & HQ approval flows",
      "MRP-based sales, voids & day closing",
      "Purchase & supplier inventory management",
      "Multi-tenant SaaS with subscription billing",
      "Solo architecture design & full-stack delivery"
    ],
    techStack: ["Laravel 12", "React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS 4", "MySQL", "Sanctum", "Firebase Auth", "i18next", "Vite", "Radix UI", "Multi-tenant SaaS"],
    category: "SaaS",
    image: pharmaPosSale,
    images: [
      { src: pharmaPosPosLong, alt: "Pharma POS Counter", caption: "POS counter — MRP discounts, cart, cash/bKash checkout" },
      { src: pharmaPosDashboardLong, alt: "Pharma POS Dashboard", caption: "Dashboard — daily sales, stock alerts, close day" },
      { src: pharmaPosCatalogLong, alt: "Pharma POS Catalog Onboarding", caption: "Catalog onboarding — 20K+ master medicines import" },
      { src: pharmaPosPurchaseLong, alt: "Pharma POS Purchase & Sales History", caption: "Purchase & sales history — supplier purchase, voids, receipts" }
    ]
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