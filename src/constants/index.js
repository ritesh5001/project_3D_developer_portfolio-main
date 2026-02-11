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
    source_code_link: "https://github.com/ritesh5001/ChatAI",
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
    source_code_link: "https://github.com/ritesh5001/Tat_Vivah-Multi-Vendor-Ecom",
    details_path: "/wordpress-projects",
    details_button_label: "View 60+ WordPress builds",
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
    source_code_link: "https://github.com/ritesh5001/Explore-Fusion",
  },
  {
    name: "Tracking Order — Shipment tracking platform",
    description:
      "Express + MongoDB API powering a Create React App admin dashboard with JWT-protected /api endpoints and live shipment status updates.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ritesh5001/tracking-order",
  },
  {
    name: "Wishes — Birthday wishes studio",
    description:
      "Monorepo that keeps the Vite frontend, Express API, and deployment automation aligned for birthday contacts, reminders, and celebratory workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "render",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ritesh5001/Wishes",
  },
];

const wordpressProjects = [
  {
    name: "Samaraha",
    description: "Logistics and cargo platform with multilingual landing pages and service showcases built on WordPress.",
    focus: "Logistics",
    url: "https://samaraha.com/",
  },
  {
    name: "Saurally",
    description: "Gaming and esports hub built with animated sections, custom event galleries, and easy newsletter capture.",
    focus: "Entertainment",
    url: "https://saurally.com/",
  },
  {
    name: "Terrestrialyt",
    description: "Environmental tech showcase combining media, research highlights, and blog storytelling on WordPress.",
    focus: "Sustainability",
    url: "https://terrestrialyt.com/",
  },
  {
    name: "New Saraswati Saree Centre",
    description: "Premium textile boutique site with regional content, curated catalog, and clean CTA-driven layout.",
    focus: "Textiles",
    url: "https://newsaraswatisareecentre.in/",
  },
  {
    name: "Fab Naturals",
    description: "Beauty and wellness ecommerce experience with product grids, testimonials, and subscription CTAs.",
    focus: "Ecommerce",
    url: "https://fabonaturals.com/",
  },
  {
    name: "HMS Fashion Hub",
    description: "Fashion boutique with editorial hero, lookbooks, and appointment scheduling components.",
    focus: "Fashion",
    url: "https://hmsfashionhub.com/",
  },
  {
    name: "Knockorignals",
    description: "Audio & creative services agency site featuring project case studies and contact utilities.",
    focus: "Creative",
    url: "https://knockorignals.com/",
  },
  {
    name: "Shringarika",
    description: "Ethnic jewelry storefront with rich imagery, collection filters, and curated editorial pages.",
    focus: "Retail",
    url: "https://shringarika.in/",
  },
  {
    name: "GajLaxmi Paithani",
    description: "Handloom couture destination highlighting silk sarees, expertise, and story-driven content blocks.",
    focus: "Handloom",
    url: "https://gajlaxmipaithani.com/",
  },
  {
    name: "Luntra",
    description: "Creative strategy studio with bold visuals, service decks, and a client-first narrative.",
    focus: "Agency",
    url: "http://luntra.co.in/",
  },
  {
    name: "Fabkurti",
    description: "Ready-to-wear kurti brand with quick-add shop links and live WhatsApp call-to-action widgets.",
    focus: "Apparel",
    url: "https://fabkurti.in/",
  },
  {
    name: "GRS Hot Blasting",
    description: "Industrial services page with service rows, certifications, and contact lead forms.",
    focus: "Industrial",
    url: "https://grshotblasting.com/",
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

export { services, experiences, projects, wordpressProjects, achievements, education, certifications, skills };