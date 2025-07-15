// data/social.ts
import {
    AiFillFacebook,
    AiFillGithub,
    AiFillMail,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const socialConnections = [
    {
      id: 1,
      title: "github",
      url: "https://github.com/nahidnstu12",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.open("https://github.com/nahidnstu12", "_blank")}
        >
          <AiFillGithub className="h-6 w-6" />
        </button>
      ),
      active: true,
    },
    {
      id: 2,
      title: "linkedin",
      url: "https://www.linkedin.com/in/nahid-dev/",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.open("https://www.linkedin.com/in/nahid-dev/", "_blank")}
        >
          <FaLinkedinIn className="h-6 w-6" />
        </button>
      ),
      active: true,
    },
    {
      id: 3,
      title: "twitter",
      url: "https://twitter.com/Soumyajit4419",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.open("https://twitter.com/Soumyajit4419", "_blank")}
        >
          <AiOutlineTwitter className="h-6 w-6" />
        </button>
      ),
      active: false,
    },
    {
      id: 4,
      title: "mail",
      url: "mailto:nahid.dev19@gmail.com",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.location.href = "mailto:nahid.dev19@gmail.com"}
        >
          <AiFillMail className="h-6 w-6" />
        </button>
      ),
      active: true,
    },
    {
      id: 5,
      title: "fb",
      url: "https://www.facebook.com/profile.php?id=100025300822373",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.open("https://www.facebook.com/profile.php?id=100025300822373", "_blank")}
        >
          <AiFillFacebook className="h-6 w-6" />
        </button>
      ),
      active: false,
    },
    {
      id: 6,
      title: "gitlab",
      url: "https://twitter.com/Soumyajit4419",
      icon: (
        <button 
          className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => window.open("https://twitter.com/Soumyajit4419", "_blank")}
        >
          <AiOutlineTwitter className="h-6 w-6" />
        </button>
      ),
      active: false,
    },
];

// data/skills.ts
import { ReactNode } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNx,
  SiPostman,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiNestjs,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGraphql,
  SiPrisma,
  SiRedis,
  SiApollographql,
} from "react-icons/si";



export const typeString = [
  "Web Developer",
  "Software Engineer",
  "Frontend Developer",
  "Learner",
];

export const skillCategories = [
  {
    title: "Cloud Devops & Testing",
    skills: [
      { id: 1, title: "Docker", icon: <SiDocker />, active: true },
      { id: 2, title: "AWS", icon: <SiAmazonaws />, active: true },
      { id: 3, title: "Kubernetes", icon: <SiKubernetes />, active: true },
      { id: 4, title: "Prisma", icon: <SiPrisma />, active: true },
      { id: 5, title: "NX Monorepo", icon: <SiNx />, active: true },
      { id: 6, title: "Firebase", icon: <SiFirebase />, active: true },
      { id: 7, title: "Redis", icon: <SiRedis />, active: true },
    ]
  },
  {
    title: "Databases & ORM",
    skills: [
      { id: 1, title: "MongoDB", icon: <DiMongodb />, active: true },
      { id: 2, title: "GraphQL", icon: <SiGraphql />, active: true },
      { id: 3, title: "PostgreSQL", icon: <SiPrisma />, active: true },
      { id: 4, title: "Redis", icon: <SiRedis />, active: true },
      { id: 5, title: "Apollo", icon: <SiApollographql />, active: true },
      { id: 6, title: "MySQL", icon: <SiMysql />, active: true },
    ]
  },
  {
    title: "Languages",
    skills: [
      { id: 1, title: "TypeScript", icon: <SiTypescript />, active: true },
      { id: 2, title: "JavaScript", icon: <DiJavascript1 />, active: true },
      { id: 3, title: "HTML5", icon: <DiReact />, active: true },
      { id: 4, title: "CSS3", icon: <DiReact />, active: true },
      { id: 5, title: "C", icon: <CgCPlusPlus />, active: true },
      { id: 6, title: "C++", icon: <CgCPlusPlus />, active: true },
    ]
  },
  {
    title: "Front End Techs",
    skills: [
      { id: 1, title: "React", icon: <DiReact />, active: true },
      { id: 2, title: "Next.js", icon: <SiNextdotjs />, active: true },
      { id: 3, title: "Redux", icon: <SiRedis />, active: true },
      { id: 4, title: "Tailwind", icon: <SiRedis />, active: true },
      { id: 5, title: "Firebase", icon: <SiFirebase />, active: true },
      { id: 6, title: "Bootstrap", icon: <SiRedis />, active: true },
      { id: 7, title: "Material UI", icon: <SiRedis />, active: true },
    ]
  },
  {
    title: "Back End Techs",
    skills: [
      { id: 1, title: "Node.js", icon: <DiNodejs />, active: true },
    ]
  },
  {
    title: "Others",
    skills: [
      { id: 1, title: "Git", icon: <DiGit />, active: true },
      { id: 2, title: "VS Code", icon: <SiVisualstudiocode />, active: true },
      { id: 3, title: "Postman", icon: <SiPostman />, active: true },
      { id: 4, title: "Linux", icon: <SiLinux />, active: true },
      { id: 5, title: "Vercel", icon: <SiVercel />, active: true },
    ]
  }
];

export const techStack = [
  {
    id: 1,
    title: "cpp",
    icon: <CgCPlusPlus />,
    active: false,
  },
  {
    id: 2,
    title: "js",
    icon: <DiJavascript1 />,
    active: true,
  },
  {
    id: 3,
    title: "next",
    icon: <SiNextdotjs />,
    active: true,
  },
  {
    id: 4,
    title: "react",
    icon: <DiReact />,
    active: true,
  },
  {
    id: 9,
    title: "ts",
    icon: <SiTypescript />,
    active: true,
  },
  {
    id: 5,
    title: "node",
    icon: <DiNodejs />,
    active: true,
  },
  {
    id: 10,
    title: "express",
    icon: <SiExpress />,
    active: true,
  },
  {
    id: 11,
    title: "NestJS",
    icon: <SiNestjs />,
    active: true,
  },
  {
    id: 6,
    title: "git",
    icon: <DiGit />,
    active: true,
  },
  {
    id: 7,
    title: "mongodb",
    icon: <DiMongodb />,
    active: true,
  },
  {
    id: 8,
    title: "mysql",
    icon: <SiMysql />,
    active: true,
  },
];

export const toolsStack = [
  {
    id: 1,
    title: "linux",
    icon: <SiLinux />,
    active: false,
  },
  {
    id: 2,
    title: "vscode",
    icon: <SiVisualstudiocode />,
    active: true,
  },
  {
    id: 3,
    title: "restapi",
    icon: <SiPostman />,
    active: true,
  },
  {
    id: 5,
    title: "monorepo",
    icon: <SiNx />,
    active: true,
  },
  {
    id: 4,
    title: "vercel",
    icon: <SiVercel />,
    active: true,
  },
];

export const personal_projects = [
  {
    id: 1,
    title: "Bookmark",
    slug: "bookmark",
    active: true,
    description: [
      "Bookmark is an e-commerce website that allows the admin to manage various publications and books from different authors, with variant types. Users can add their desired books to their cart, mark them as favorites, and leave reviews on the website. The website supports payment through Stripe and cash on delivery.",
      " This was a team project with six members, developed as part of an assignment in a Full-Stack Army boot camp. The project was acknowledged as the best project by the instructor.",
      "Overall, Bookmark is a comprehensive e-commerce platform that provides a user-friendly experience for both the admin and the customers, allowing for easy management of book data and a seamless buying experience for customers.",
    ],
    short_description:
      "Bookmark is an e-commerce platform that allows admin to manage publications and books from different authors. Users can add books to their cart, mark as favorites, and leave reviews. Payments can be made through Stripe or cash on delivery.",
    techstack: [
      "NextJS",
      "Strapi",
      "Node",
      "Stripe",
      "Postgress",
      "Cloudinary",
      "fakerJS",
    ],
    snapshots: [""],
    liveUrl: "https://bookmark-bd.render.com/",
    sourceUrl: "https://github.com/fahimfaisaal/bookmark",
    image: "/personal1.jpg",
    my_contributions: [
      "Setup Global State: I implemented global state management throughout the project using Redux Toolkit (RTK) and utilized RTK Query to handle all possible endpoints efficiently.\n",
      "HTTP Token-based Authentication: I integrated a token-based authentication system for secure user authentication, allowing users to access protected routes and perform authorized actions using HTTP tokens.\n",
      "Stripe Payment System Integration: I integrated the Stripe payment system with our Strapi backend, enabling seamless and secure payment processing for users.\n",
      "Order Processing: I implemented order processing functionality, allowing users to complete purchases, track orders, and manage order status efficiently within the system.\n",
      " Add to Cart & Add to Favorite Item: I implemented features to add items to the cart and mark them as favorites, providing users with a convenient way to store desired items for future reference or purchase.",
    ],
  },
  {
    id: 2,
    title: "Clean Youtube",
    slug: "clean-youtube",
    active: true,
    description: [
      "Clean YouTube is a platform designed for users who want to learn from YouTube without any distractions and minimal design. This app allows users to watch playlists without being interrupted by suggested videos or other distractions. Clean YouTube has four main sections: Home, Playlists, Favorite, and Recent.",
      "With its four main sections and single playlist player, users can easily find and watch the playlists they like. Additionally, the app's note-taking feature allows users to keep track of their progress and remember important information.",
      "In single player, user can remove sidebar, description, and notes sections.This allows the user to more concentration when watching tutorials.",
    ],
    short_description:
      "Clean YouTube is a platform that helps users learn from YouTube without distractions. The app has four main sections: Home, Playlists, Favorite, and Recent. Users can watch playlists without interruptions and take notes to keep track of their progress.",
    techstack: [
      "NextJS",
      "Youtube api v3",
      "Redux",
      "rtk-query",
      "typescript",
      "react-player",
      "MUI",
    ],
    snapshots: [""],
    liveUrl: "https://clean-youtube-playlists.vercel.app/",
    sourceUrl: "https://github.com/nahidnstu12/clean-youtube",
    image: "/personal2.jpg",
    my_contributions: [
      "YouTube Data API Integration: As part of a solo project assigned during a Fullstack Army bootcamp, I integrated the YouTube Data API. I implemented a recursive function to generate video playlists and stored them in our Redux store, allowing efficient access and management of videos.\n",
      "Customizable Layout System: On a single home page, I created a layout system that enables customization. Users can personalize their layout by removing elements such as the playlists video sidebar, description, and note-taking section.\n",
      "Basic Video-Based Note Taking: Within the project, I implemented a basic feature for taking notes related to videos. Users can watch videos and jot down their thoughts, comments, or important points directly within the application.",
    ],
  },
  {
    id: 3,
    title: "CollageLMS",
    slug: "collage-lms",
    active: false,
    description: [
      "CollageLMS is a college management system that managing various college-related activities. The system is designed to cater to the needs of three main types of users: students, teachers, and super admin.",
      "Super Admin can create and manage teachers, admit students, create and manage subjects, classes, and routines. The super admin can also set up the grading system, manage attendance records, and generate reports based on the data collected.",
      "Teachers can manage their classes, including scheduling exams, managing results, and taking attendance.",
      "Students can view their results, attendance records, and class notes. The system allows students to access their academic records, track their progress, and communicate with their teachers.",
    ],
    short_description:
      "CollageLMS is a college management system with three main user types: students, teachers, and super admin. The super admin can manage teachers, students, subjects, classes, routines, grading, attendance, and generate reports.",
    techstack: [
      "NextJS",
      "Laravel",
      "Node",
      "Mysql",
    ],
    snapshots: [""],
    liveUrl: "https://collage-lms-nstu.netlify.app/",
    sourceUrl: "https://github.com/nahidnstu12/collageLMS",
    image: "/personal3.jpg",
    my_contributions: [],
  },
];

// data/experience.ts
export const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Capitall",
    date: "February 2023 - Present",
    description: [
      "Collaboratively led a team of 3 members to successfully develop and deploy a Payment Gateway within a challenging 1-week sprint.",
      "Achieved a significant increase of 20% in user engagement for campaigns and organic reach by implementing effective SEO strategies.",
      "Collaborated with stakeholders to understand requirements and developed a dashboard capable of displaying key investment metrics, trends, and performance indicators.",
      "Employed debugging tools to diagnose issues, collaborating with the development team to implement bug fixes."
    ],
    logo: "/capitall.png"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "SoftBDLtd",
    date: "January 2022 - January 2023",
    description: [
      "Developed complex course features for Future Nation Web platform, including online, live, and imported courses with modules, lessons, and interactive elements.",
      "Implemented advanced job and course filtering systems for NISE3 project, allowing users to customize search queries for precise results.",
      "Created custom youth feeds combining job and course listings for targeted audience engagement.",
      "Designed and implemented apprenticeship modules for youth scholarship programs with certificate generation and financial benefit tracking."
    ]
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "PromoteUP",
    date: "May 2021 - December 2021",
    description: [
      "Designed and implemented product detail pages for E-toss, an online marketplace with wholesale and retail purchasing options.",
      "Converted HTML templates to Laravel Blade ensuring consistent UI/UX throughout the e-commerce platform.",
      "Implemented standard e-commerce features including cart management and favorites system."
    ]
  }
];

// data/projects.ts
export const office_projects = [
  {
    id: 1,
    slug: "future-nation-web",
    title: "Future Nation Web",
    development: "Softbdltd",
    active: true,
    description: [
      "Futurenation is a coalition of government, private sector, and development leaders working together to transform the country's population dividend into a driving force for the economy. ",
      "The website includes an Assessment Portal for customized career tests, a Learning Management System for skill-enhancing courses recommended by AI, and a Job Recommendation Engine for AI-based job suggestions",
      "",
    ],
    short_description:
      "Futurenation is a coalition of government, private sector, and development leaders working together to transform the country's population dividend into a driving force for the economy.The website includes an Assessment Portal for customized career tests, a Learning Management System for skill-enhancing courses recommended by AI, and a Job Recommendation Engine for AI-based job suggestions.",
    techstack: [
      "NestJS",
      "NextJS",
      "Node",
      "MySQL",
      "MongoDB",
      "Keyclock",
      "RabbitMQ",
      "AI",
      "Go",
    ],
    snapshots: [""],
    liveUrl: "https://platform.futurenation.gov.bd/",
    image: "/project1.jpg",
    my_contributions: [
      "As a frontend developer, I am working on a complex course feature that includes three types: Online, Live, and Imported. I focus on the admin part, where I create and maintain course content, design course modules and lessons, and establish a content library. Online courses involve modules, lessons, assignments, exams, and interactive elements such as audio/video-based quizzes.\n",
      "For the live course feature, I create courses and schedule class times by assigning providers. Admin approval is required to publish the course. Challenges arise due to server capacity limitations, prompting the implementation of a conflict resolution system for scheduling conflicts.\n",
      "An advanced job and course filter is implemented, allowing users to customize their search queries for more precise results.\n",
      "I also participated in the implementation of a job candidate interview feature. Youth can apply for jobs, and Junior Recruiting Executives (JRE) can assess the applicants. Once the JRE selects a candidate, interviews with the interview board are arranged.\n",
      "Overall, my responsibilities involve creating and maintaining course content, handling different course types, managing server capacity challenges, implementing advanced search filters, and contributing to the job candidate interview process.",
    ],
  },
  {
    id: 2,
    title: "NISE3",
    slug: "nise3",
    development: "Softbdltd",
    active: true,
    description: [
      "NISE3 stands National Intelligence for Skills, Education, Employment and Entrepreneurship.Real-time data driven Matchmaking Platform for Skills, Education, Employment & Entrepreneurship.",
      "This is a one-stop platform where the stakeholders can fulfill the needs of one another for stimulating economic growth. NISE is simplifying and digitalizing the services offered by public & private skills service providers as well as sharing real-time data for job forecasting and market analysis to transform their mechanism from supply driven to market demand. Policy Makers can monitor and evaluate the youth database, entrepreneur database, access employment tracker feedback and other real-time data in an analytical framework that ultimately helps in evidence-based decision making.",
      "The registered employable youths are able to access information on AI based career guidance, skills trainings, job forecast, apprenticeship opportunities, business and entrepreneurship guidance, migration suggestions, etc.",
    ],
    short_description:
      "NISE3 stands National Intelligence for Skills, Education, Employment and Entrepreneurship.Real-time data driven Matchmaking Platform for Skills, Education, Employment & Entrepreneurship. This is a one-stop platform where stakeholders can fulfill their needs.",
    techstack: [
      "NextJS",
      "Laravel",
      "Node",
      "MySQL",
      "MongoDB",
      "Microservice",
      "RabbitMQ",
      "AI",
      "Kafka",
    ],
    snapshots: [""],
    liveUrl: "https://nise.gov.bd/",
    image: "/project2.jpg",
    my_contributions: [
      "As a junior frontend developer, I implemented an apprenticeship module for a youth scholarship program. This module allows young individuals to apply for the program, and upon completion, they receive a certificate and financial benefits.\n",
      "Another feature I developed is multiple enrollment, which facilitates the seamless switching between different course batches. The system automatically handles the varying payment structures and batch availability across different sectors.\n",
      "Additionally, I implemented a custom youth feed that combines job and course listings, providing a curated mix of employment opportunities and educational offerings for the target audience.",
    ],
  },
  {
    id: 3,
    title: "E-toss",
    slug: "etoss-bd",
    development: "PromoteUP",
    active: false,
    description: [
      "The clothing brand is an online marketplace that operates on a multivendor system, allowing different vendors to sell their products through the platform. The platform caters to both wholesale and reseller customers, with prices varying based on the type of customer.",
      "This system to provide end-to-end platform for small businesses to manage their operations online.This offers selling products, an inventory management system, a point-of-sale system, digital payments, delivery system and logistics services for order fulfillment. ",
      "Overall, this platform aims to provide a convenient and user-friendly platform for buying and selling custom clothing products, while enabling vendors to maintain control over their own businesses hassle free and zero investment.",
    ],
    short_description:
      "The clothing brand is an online marketplace that allows vendors to sell their products on a multivendor system to wholesale and reseller customers. The platform also provides an end-to-end platform for small businesses with features such as selling products, inventory management, point-of-sale, digital payments, delivery system, and logistics services. ",
    techstack: ["Laravel", "Theme Customization", "MySQL", "SSL Commerce"],
    snapshots: [""],
    liveUrl: "http://www.etossbd.com/",
    sourceUrl: "https://www.facebook.com/etossbd",
    image: "/project3.jpg",
    my_contributions: [
      "As a frontend developer, I embarked on my first professional freelancing project with a team of three members. My primary responsibility was designing components for the product details page. This page allowed buyers to make wholesale or small-scale purchases, with the total price varying accordingly.\n",
      "I also implemented standard features such as adding products to the cart and marking them as favorites, ensuring a seamless user experience.\n",
      "In addition to component design, I undertook the task of implementing the overall theme for the website. This involved converting the HTML template to Laravel Blade, ensuring consistency and functionality throughout the site.",
    ],
  },
  {
    id: 4,
    title: "LMMPP",
    slug: "lmmpp",
    development: "Softbdltd",
    active: true,
    description: [
      "Designed and constructed an engaging hub highlighting skills, job opportunities, and entrepreneurship prospects for the Cox's Bazar area, fostering skill enhancement and resourcefulness",
      "Developed a streamlined data entry system for NGOs (such as Brac, ILO, UNDP), enabling efficient activity recording and comprehensive report generation. Offers high-level overviews for investors to assess progress toward their target goals The registered employable youths are able to access information on AI based career guidance, skills trainings, job forecast, apprenticeship opportunities, business and entrepreneurship guidance, migration suggestions, etc.",
      "Conceptualized and developed a comprehensive landing page from scratch, along with visually appealing charts, large forms, maps, sliders, stepper react components, and various UI features.",
      "Implemented a streamlined two-way approval process in data entry to enhance data management flow, ensuring precision and accountability. The system involves data entry at various frequencies, verified by the NGO's data approval head and coordinator, ensuring authenticated inputs."
    ],
    short_description:
      "Designed and constructed an engaging hub highlighting skills, job opportunities, and entrepreneurship prospects for the Cox's Bazar area, fostering skill enhancement and resourcefulness",
    techstack: [
      "NextJS",
      "Laravel",
      "Node",
      "MySQL",
      "MongoDB",
      "RabbitMQ",
      "AI",
      "Kafka",
    ],
    snapshots: [""],
    liveUrl: "https://isec.gov.bd/",
    image: "/project4.jpg",
    my_contributions: [
      "I am leading this project as frontend development side.",
      "Developed a streamlined data entry system for NGOs (such as Brac, ILO, UNDP), enabling efficient activity recording and comprehensive report generation. Offers high-level overviews for investors to assess progress toward their target goals The registered employable youths are able to access information on AI based career guidance, skills trainings, job forecast, apprenticeship opportunities, business and entrepreneurship guidance, migration suggestions, etc.",
      "Implemented a streamlined two-way approval process in data entry to enhance data management flow, ensuring precision and accountability. The system involves data entry at various frequencies, verified by the NGO's data approval head and coordinator, ensuring authenticated inputs.",
      "Additionally, I implemented a custom youth feed that combines job and course listings, providing a curated mix of employment opportunities and educational offerings for the target audience.",
    ],
  },
];