import type { PortfolioData } from "./types/portfolio";

const email = "habibkazi92@gmail.com";
const phone = "+8801757040046";

export const portfolioData: PortfolioData = {
  site: {
    name: "Kazi Ahosun Habib",
    shortName: "Ripon",
    role: "Front-end Focused Full-Stack Software Developer",
    location: "Mirpur 1, Dhaka, Bangladesh",
    email,
    phone,
    siteUrl: "https://portfolio-website-a955b.web.app",
    logoUrl: "/logo.png",
    avatarUrl: "/assets/mypic.jpg",
    heroImageUrl: "/assets/coding.png",
    resumeUrl: "/assets/Kazi_Ahsoun_Habib_Ripon.pdf",
    keywords: [
      "Kazi Ahosun Habib Ripon",
      "Front-end Focused Full-Stack Software Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      "NestJS Developer",
      "GraphQL Developer",
      "PostgreSQL",
      "Portfolio",
      "Go Language",
      "MERN Stack Developer",
      "Full-Stack Developer",
      "Software Engineer",
      "Web Developer",
      "Dashboard Developer",
      "ERP System Developer",
      "Admin Panel Developer",
      "API Integration",
      "Responsive Design",
      "Accessible Interfaces",
      "Scalable Web Applications",
      "Remote Software Developer",
      "Software Development Services",
      "Software Development Portfolio",
      "Python Developer",
      "JavaScript Developer",
      "SCSS Developer",
      "Redux Toolkit Developer",
      "Framer Motion Developer",
      "MongoDB Developer",
      "MySQL Developer",
      "Prisma ORM Developer",
      "Postman User",
      "Git User",
      "System Design Enthusiast",
      "Problem Solving Skills",
      "Software Development Workflow",
      "Fast APIs",
      "Reliable Web Applications",
      "Production-Ready Interfaces",
      "Business Workflow Solutions",
      "Enterprise Application Development",
      "Software Development Expertise",
    ],
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Front-end focused full-stack developer",
    headline:
      "I build dashboards, ERP systems, and scalable web applications with React, Next.js, TypeScript, Node.js, NestJS, GraphQL, and PostgreSQL.",
    introduction:
      "A 4+ years experienced developer focused on production-ready interfaces, API integration, accessible responsive design, and reliable full-stack delivery.",
    roles: [
      "React.js Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Full-Stack Developer",
    ],
    stats: [
      { value: "4+", label: "Years experience" },
      { value: "8", label: "Professional roles" },
      { value: "25+", label: "Technologies and tools" },
    ],
  },
  about: {
    title:
      "I build practical, scalable web products for real business workflows.",
    paragraphs: [
      "I am a front-end focused full-stack developer with experience building dashboards, ERP systems, admin panels, and scalable web applications for product teams and business operations.",
      "My strongest stack is React, Next.js, TypeScript, Redux Toolkit, Framer Motion, Node.js, NestJS, GraphQL, REST APIs, Prisma, PostgreSQL, MongoDB, and MySQL. I care about clean interfaces, maintainable architecture, accessibility, responsive design, and dependable API integration.",
    ],
    highlights: [
      "4+ years building dashboards, ERP systems, and scalable web applications",
      "Frontend strength with React.js, Next.js, TypeScript, Redux Toolkit, SCSS, and Framer Motion",
      "Backend and database experience with Node.js, Express.js, NestJS, GraphQL, REST APIs, Go, PostgreSQL, MySQL, MongoDB, Prisma, and Mongoose",
    ],
  },
  skills: [
    {
      id: "react",
      name: "React.js",
      category: "Frontend",
      image: "/assets/React-JS.png",
    },
    {
      id: "next",
      name: "Next.js",
      category: "Frontend",
      image: "/assets/skills/nextjs.svg",
    },
    {
      id: "javascript",
      name: "JavaScript ES6+",
      category: "Language",
      image: "/assets/js.jpg",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Language",
      image: "/assets/skills/typescript.svg",
    },
    {
      id: "html",
      name: "HTML5",
      category: "Frontend",
      image: "/assets/html.jpg",
    },
    { id: "css", name: "CSS3", category: "Frontend", image: "/assets/css.jpg" },
    {
      id: "scss",
      name: "SCSS",
      category: "Frontend",
      image: "/assets/skills/scss.svg",
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      category: "State Management",
      image: "/assets/skills/redux.svg",
    },
    {
      id: "framer",
      name: "Framer Motion",
      category: "Animation",
      image: "/assets/skills/framer-motion.svg",
    },
    {
      id: "node",
      name: "Node.js",
      category: "Backend",
      image: "/assets/nodejs.png",
    },
    {
      id: "express",
      name: "Express.js",
      category: "Backend",
      image: "/assets/express-js.png",
    },
    {
      id: "nestjs",
      name: "NestJS",
      category: "Backend",
      image: "/assets/skills/nestjs.svg",
    },
    {
      id: "graphql",
      name: "GraphQL",
      category: "API",
      image: "/assets/skills/graphql.svg",
    },
    {
      id: "rest",
      name: "REST APIs",
      category: "API",
      image: "/assets/rest.jpg",
    },
    {
      id: "go",
      name: "Go",
      category: "Backend",
      image: "/assets/skills/go.svg",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Database",
      image: "/assets/MongoDB-logo.png",
    },
    {
      id: "mongoose",
      name: "Mongoose",
      category: "Database",
      image: "/assets/skills/mongoose.svg",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "Database",
      image: "/assets/skills/postgresql.svg",
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "Database",
      image: "/assets/skills/mysql.svg",
    },
    {
      id: "prisma",
      name: "Prisma ORM",
      category: "Database",
      image: "/assets/skills/prisma.svg",
    },
    {
      id: "git",
      name: "Git",
      category: "Tooling",
      image: "/assets/skills/git.svg",
    },
    {
      id: "postman",
      name: "Postman",
      category: "Tooling",
      image: "/assets/skills/postman.svg",
    },
    {
      id: "accessibility",
      name: "Accessibility",
      category: "Concept",
      image: "/assets/skills/accessibility.svg",
    },
    {
      id: "responsive",
      name: "Responsive Design",
      category: "Concept",
      image: "/assets/skills/responsive.svg",
    },
    {
      id: "system-design",
      name: "System Design",
      category: "Concept",
      image: "/assets/skills/system-design.svg",
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      category: "Concept",
      image: "/assets/skills/problem-solving.svg",
    },
  ],
  experience: [
    {
      id: "faizaexpress",
      role: "Software Developer",
      organization: "FaizaExpress (MAS Information)",
      period: "February 2026 - Running",
      summary:
        "Developing enterprise applications using React, Next.js, NestJS, PostgreSQL, Prisma, and GraphQL.",
      liveUrl: "https://masformation.com/",
      liveLabel: "Mas Formation Live",
      achievements: [
        "Designing scalable dashboards for enterprise workflows",
        "Contributing to system architecture decisions and API-driven application structure",
      ],
    },
    {
      id: "rapidsmarterp",
      role: "Front-End Developer",
      organization: "RapidSmartERP (Remote)",
      period: "July 2025 - January 2026",
      summary:
        "Built ERP dashboard interfaces with React and Next.js while integrating Laravel REST APIs.",
      achievements: [
        "Implemented Redux-based state management for ERP workflows",
        "Delivered responsive dashboard screens for remote product teams",
      ],
    },
    {
      id: "acnoo-farmget",
      role: "Front-End Developer",
      organization: "ACNOO, Farmget",
      period: "September 2024 - July 2025",
      summary:
        "Developed responsive admin dashboards, reusable UI components, and interactive product interfaces.",
      achievements: [
        "Built reusable frontend components with React and Redux Toolkit",
        "Added interactive animations with Framer Motion",
      ],
    },
    {
      id: "ai-technology",
      role: "Front-End Developer",
      organization: "AI Technology (Remote)",
      period: "March 2024 - August 2024",
      summary:
        "Created modern web interfaces and collaborated with backend teams to deliver production-ready features.",
      achievements: [
        "Translated product requirements into responsive frontend screens",
        "Worked with backend teams on API-connected feature delivery",
      ],
    },
    {
      id: "mn-tech-digital",
      role: "Team Lead / Front-End Developer",
      organization: "MN TECH DIGITAL, Barisal",
      period: "November 2023 - February 2024",
      summary:
        "Led frontend development activities, reviewed code, and coordinated project delivery with team members.",
      achievements: [
        "Guided frontend implementation and delivery planning",
        "Reviewed code quality and coordinated team execution",
      ],
    },
    {
      id: "bengali-technology",
      role: "Full Stack Developer",
      organization: "Bengali Technology LTD, Dhaka",
      period: "September 2022 - October 2023",
      summary:
        "Built project-based full-stack web applications using React, Node.js, and MongoDB.",
      achievements: [
        "Created MERN-stack application features from frontend to backend",
        "Worked on database-backed user flows and API integrations",
      ],
    },
    {
      id: "micple",
      role: "Full Stack Developer",
      organization: "MICPLE LTD, Dhaka",
      period: "Contractual",
      summary:
        "Developed and maintained MERN-stack applications and API integrations during a short-term contractual role.",
      achievements: [
        "Maintained React interfaces and backend integration flows",
        "Delivered application updates across frontend and API layers",
      ],
    },
    {
      id: "ebisu-technologies",
      role: "MERN Stack Developer Intern",
      organization: "EBISU TECHNOLOGIES PVT LTD",
      period: "November 2021 - January 2022 (3-month internship)",
      summary:
        "Worked on React frontend features, backend APIs, and database tasks during a 3-month internship.",
      achievements: [
        "Built React frontend features under production guidance",
        "Practiced backend API and database implementation with the MERN stack",
      ],
    },
  ],
  education: [
    {
      id: "msc-cse",
      degree: "M.Sc. in Computer Science and Engineering",
      institution:
        "Nanjing University of Science and Information Technology, Jiangsu, China",
      period: "Graduate study",
      summary:
        "Master's degree in computer science with a focus on Machine Learning, Data Science, and Software Engineering.",
    },
    {
      id: "bsc-cse",
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Daffodil International University, Dhaka, Bangladesh",
      period: "Undergraduate study",
      summary:
        "Computer science foundation in programming, software development, data structures, databases, and web technologies.",
    },
  ],
  contact: {
    heading: "Let us build a production-ready web product.",
    description:
      "Reach out for frontend, full-stack, dashboard, ERP, API integration, or remote software development opportunities.",
    email,
    phone,
    location: "Mirpur 1, Dhaka, Bangladesh",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/kaziahosunhabibripon?tab=repositories",
        handle: "kaziahosunhabibripon",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kazi-ahosun-habib-ripon/",
        handle: "kazi-ahosun-habib-ripon",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/8801757040046",
        handle: "+8801757040046",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/KaziAhosunhabib",
        handle: "KaziAhosunhabib",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/KaziAhosunhabibRipon",
        handle: "KaziAhosunhabibRipon",
      },
    ],
  },
};
