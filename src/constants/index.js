import {
  backend,
  creator,
  mobile,
  web,
  github,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
    description:
      "React.js, Redux Toolkit, Node.js, Express.js, MongoDB, and REST APIs for resilient data-driven platforms.",
  },
  {
    title: "AI & Intelligent Systems",
    icon: creator,
    description:
      "Context-aware automation with Google Gemini API, Pinecone, LangChain, and custom memory layers.",
  },
  {
    title: "DevOps & Deployment",
    icon: backend,
    description:
      "CI/CD pipelines across Vercel, Netlify, Render, and AWS backed by Docker and Kubernetes workflows.",
  },
  {
    title: "Client Success",
    icon: mobile,
    description:
      "Discovery, UI/UX direction, and post-launch support for SMBs and enterprise partners.",
  },
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "NextGen Fusion",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2025 – Present",
    points: [
      "Delivered 50+ live WordPress websites and 10+ MERN applications with modern, responsive, and scalable architectures.",
      "Managed CI/CD deployments across Vercel, Netlify, Render, AWS, and Hostinger for predictable launches.",
      "Containerized services with Docker and Kubernetes to keep staging and production environments in sync.",
      "Owned end-to-end delivery from UI/UX to backend integrations, automation, and hosting for diverse clients.",
    ],
  },
  {
    title: "Project Partner",
    company_name: "Client Portfolio",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Nov 2025",
    points: [
      "Delivered 60+ projects for brands such as Shree Cargo Surat, Smaran, Filtxpert, Punjabi Chaap Corner, Saurally, Terrestrialyt, Fabonatural, Shringarika, Knockorginals, and KashmirCart.",
      "Coordinated requirements, design systems, automations, and quality checks to align with each client’s business goals.",
      "Implemented data-driven experiences with REST APIs, real-time messaging, and polished UI components.",
    ],
  },
  {
    title: "AI Developer – JARVIS AI",
    company_name: "Self-directed",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2025 – Sep 2025",
    points: [
      "Built a memory-augmented real-time chat assistant with JWT auth, live chat, and Gemini-powered responses.",
      "Integrated Pinecone for long-term memory and stacked short-term memory for conversation continuity.",
      "Authored secure Node.js + Express 5 APIs with MongoDB, Mongoose, and Socket.io to power the experience.",
      "Automated deployments with GitHub Actions and hosted on Render for reliable uptime.",
    ],
  },
];

const projects = [
  {
    name: "JARVIS AI — Memory-augmented chat assistant",
    description:
      "Full-stack AI chat app with JWT auth, real-time messaging, Gemini + Pinecone memory, and secure REST APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rgiri5001/jarvis-ai",
  },
  {
    name: "Client Delivery Suite",
    description:
      "50+ WordPress websites and 10+ MERN projects crafted with modern UI/UX, automation, and DevOps pipelines.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mern",
        color: "green-text-gradient",
      },
      {
        name: "devops",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rgiri5001",
  },
  {
    name: "Tat Vivah — Multi-Vendor Marketplace Backend",
    description:
      "Production-grade marketplace backend with Node.js, TypeScript, PostgreSQL, Redis caching, and OpenAPI docs powering seller-verified commerce, buyer carts, and inventory audit trails.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "openapi",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rgiri5001",
  },
  {
    name: "Explore-Fusion — Travel Social & AI Platform",
    description:
      "Full-stack travel/social experience rebuilt as a clean monolith with React/Vite frontend, Express/Mongo APIs, Socket.IO chat, ImageKit media, and AI itinerary helpers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rgiri5001/Explore-Fusion",
  },
];

const achievements = [
  {
    title: "50+ Live Websites",
    description:
      "Delivered modern, responsive sites and MERN apps for startups, boutiques, and emerging SaaS companies.",
  },
  {
    title: "60+ Client Projects",
    description:
      "Served brands like Shree Cargo Surat, Smaran, Filtxpert, Punjabi Chaap Corner, Saurally, Terrestrialyt, Fabonatural, Shringarika, Knockorginals, and KashmirCart.",
  },
  {
    title: "UTKARSH’22 Photography — 1st Prize",
    description: "Awarded by BBDEG, Lucknow, for a high-impact visual storytelling series.",
  },
  {
    title: "Cleared Indian Air Force Exam",
    description: "Qualified the Technical Entry exam showcasing disciplined problem solving and systems thinking.",
  },
  {
    title: "Discipline Team Coordinator",
    description: "Led logistics and coordination for BBDNIIT flagship events ensuring smooth participant experiences.",
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution:
      "Babu Banarasi Das Northern India Institute of Technology, Lucknow, India",
    period: "2022 – Present",
    details:
      "Strengthening foundations in algorithms, systems design, and cloud workflows while driving discipline team coordination on campus.",
  },
];

const certifications = [
  {
    title: "Job Ready Cohort — Sheryians Coding School",
    period: "2024",
    details:
      "Covered Frontend & Backend Development, DSA, DevOps (CI/CD, Docker, Kubernetes), and Aptitude & Reasoning with real-world projects.",
  },
];

const skills = [
  {
    name: "C++",
    detail: "Algorithmic problem solving and performance-aware code",
  },
  {
    name: "Python",
    detail: "Scripting, automation, and ML experimentation",
  },
  {
    name: "Data Structures & Algorithms",
    detail: "Optimized solutions for real-world problems",
  },
  {
    name: "JavaScript & TypeScript",
    detail: "Modern toolchains for web and automation",
  },
  {
    name: "React.js & Redux Toolkit",
    detail: "Component-driven UIs with predictable state",
  },
  {
    name: "Node.js & Express.js",
    detail: "RESTful services and authentication layers",
  },
  {
    name: "MongoDB & Mongoose",
    detail: "Schema design, aggregation, and search",
  },
  {
    name: "HTML, CSS & Tailwind CSS",
    detail: "Responsive and accessible layouts",
  },
  {
    name: "AI/ML & Automation",
    detail: "Gemini API, LangChain, and Pinecone orchestration",
  },
  {
    name: "DevOps Tooling",
    detail: "Docker, Kubernetes, CI/CD, and hosting (Vercel, Netlify, Render, AWS)",
  },
  {
    name: "Real-time Systems",
    detail: "Socket.io and WebSockets for live interactions",
  },
];

export { services, experiences, projects, achievements, education, certifications, skills };
