import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  vbee,
  wasabi,
  threejs,
  nextjs,
  nestjs,
  kafka,
  redis,
  postgresql,
  socketio,
  ailatrieuphu,
  oantuti,
  quiz,
  projectmanagement,
  certnexus,
  startup,
  computercommunication,
  webdesign,
  vbeeLanding,
  aihub,
  mobiva,
  untensha,
  nkportal,
  aivoice,
  aicall,
  classnk,
  tobu,
} from "../assets";

export const profile = {
  name: "Vo Duc Tai",
  shortName: "Duc Tai",
  role: "Full-stack Developer",
  heroHeadline:
    "Building production products end-to-end — React/Next.js on the frontend, NestJS/Node.js on the backend.",
  heroSubheadline:
    "4+ years shipping AI, booking, and exam platforms for Japanese clients, from UI architecture to Kafka/Redis-backed backend systems.",
  summary:
    "I am a full-stack developer with 4+ years of experience delivering production web applications across AI products, booking systems, and education platforms. My work spans frontend architecture (React, Next.js, TypeScript) and backend systems (NestJS, PostgreSQL, Redis, Kafka, event-driven processing), and I'm growing toward a Bridge Engineer role connecting Japanese clients with development teams.",
  details:
    "Recent work has included designing full-stack features for Japanese client systems — React/Next.js frontends backed by NestJS/PostgreSQL services — plus event-driven backend work (Kafka, Redis distributed locks, queue processing) on AI platforms, mentoring teammates, and collaborating directly with business analysts and Japanese clients to turn business requirements into maintainable product flows.",
  quickFacts: [
    {
      value: "4+ years",
      label: "building production web applications",
    },
    {
      value: "React, Next.js, NestJS",
      label: "core full-stack delivery",
    },
    {
      value: "Kafka, Redis, PostgreSQL",
      label: "backend & distributed systems",
    },
    {
      value: "Client-facing",
      label: "working with Japanese stakeholders and BAs",
    },
  ],
  focusAreas: [
    "Full-stack delivery",
    "Backend & distributed systems",
    "Product UI and UX execution",
    "Mentoring and team collaboration",
  ],
  contact: {
    email: "taitiu123@gmail.com",
    github: "https://github.com/chuotduoicho",
  },
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certificate",
    title: "Learning",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Product Delivery",
    icon: web,
  },
  {
    title: "React and Next.js Frontend",
    icon: mobile,
  },
  {
    title: "Backend & Distributed Systems",
    icon: backend,
  },
  {
    title: "Mentoring and Collaboration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Socket.IO",
    icon: socketio,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Vbee",
    icon: vbee,
    iconBg: "rgb(239 238 192)",
    date: "September 2022 - April 2024",
    focus:
      "Built AI voice and AI calling platforms end-to-end — React/Redux frontend paired with Node.js backend services using Kafka for event streaming and Redis for caching, rate limiting, and distributed locking.",
    stack: [
      "React",
      "Redux Saga",
      "WebSocket",
      "Node.js",
      "Kafka",
      "Redis",
      "MongoDB",
    ],
    points: [
      "Developed AI-powered platforms (AI Voice, AI Call Center) end-to-end: React/Redux frontend plus Node.js backend services using Kafka for event streaming and Redis for caching/rate limiting.",
      "Implemented real-time features with Socket.IO/WebSocket for live call status and audio processing feedback.",
      "Built and maintained backend cron jobs and queue-based workers for automated campaign processing, including handling concurrency issues (duplicate call assignment, stuck/zombie jobs).",
      "Built dynamic dashboards and reusable UI components to support flexible call flows and large-scale usage.",
      "Collaborated with cross-functional teams (PM, QA, backend) in agile development.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Wasabi",
    icon: wasabi,
    iconBg: "#e6ff9e",
    date: "May 2024 - Present",
    focus:
      "Developing full-stack features for Japanese client systems — Next.js/React frontends backed by NestJS/PostgreSQL services — with growing ownership over architecture, code quality, and stakeholder communication.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "SWR",
    ],
    points: [
      "Developed full-stack features for Japanese client systems (exam registration, booking platforms) — Next.js/React on the frontend, NestJS/PostgreSQL on the backend.",
      "Designed reusable component architecture and optimized performance (lazy loading, caching, SWR) to improve responsiveness and maintainability.",
      "Built and integrated RESTful APIs for reporting, user management, and PDF certificate generation, including debugging backend data and query issues.",
      "Collaborated with BA, backend, and QA teams in an agile environment, aligning technical solutions with business requirements.",
      "Mentored junior developers, conducted code reviews, and contributed to improving overall team productivity.",
    ],
  },
];

const projects = [
  {
    name: "Quiz app",
    description:
      "Personal quiz platform exploring reusable React patterns, multiple question flows, score tracking, time limits, and polished interaction feedback.",
    role: "Built as a personal React project to practice product flow design.",
    impact:
      "Shows how I structure interactive UI, state transitions, and result experiences in smaller products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/chuotduoicho/react-quiz",
    website_link: "https://ductai-quiz-app.web.app/",
  },
  {
    name: "Oan tu ti",
    description:
      "A lightweight riddle and puzzle game focused on playful UI flow, progression, and interaction clarity.",
    role: "Built as a frontend-heavy side project.",
    impact:
      "Useful as a smaller example of layout implementation, player feedback, and browser-based interaction design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: oantuti,
    source_code_link: "https://github.com/chuotduoicho/React-khoa2",
    website_link: "https://ductai-khoa2-oantuxi.web.app/",
  },
  {
    name: "Ai la trieu phu",
    description:
      "A quiz-game recreation inspired by the TV format, with staged difficulty, sound-driven feedback, and a stronger sense of progression.",
    role: "Built as a personal experiment in interactive frontend storytelling.",
    impact:
      "Demonstrates game-state handling, UI pacing, and richer browser interaction through audio cues.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "useSound",
        color: "orange-text-gradient",
      },
    ],
    image: ailatrieuphu,
    source_code_link: "https://github.com/chuotduoicho/ailatrieuphu",
    website_link: "https://ductai-ailatrieuphu.web.app/",
  },
];

const landingPageProjects = [
  {
    name: "Vbee Landing Page",
    description:
      "Marketing landing page for Vbee, designed to communicate AI voice product value through a clean, conversion-oriented frontend.",
    role: "Implemented responsive product marketing pages with Next.js.",
    impact:
      "Represents delivery of production-facing pages where messaging, polish, and performance matter as much as implementation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: vbeeLanding,
    website_link: "https://www.vbee.ai/",
  },
  {
    name: "AIHub Landing Page",
    description:
      "Landing experience for an AI-focused product ecosystem, balancing modern presentation with clear feature communication.",
    role: "Built the frontend experience used to present product value and user entry points.",
    impact:
      "Shows the ability to translate product positioning into a polished web experience, not only an admin-style application UI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "orange-text-gradient",
      },
    ],
    image: aihub,
    website_link: "https://mobiai.vn/",
  },
  {
    name: "Mobiva Landing Page",
    description:
      "Landing page for Mobiva Smartcall focused on communicating a call-center product clearly to potential customers.",
    role: "Frontend implementation for a conversion-focused product website.",
    impact:
      "Demonstrates responsive layout execution and visual presentation for client-facing product messaging.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: mobiva,
    website_link: "https://smartcall.mobifone.vn/",
  },
  {
    name: "Untenshashokuba",
    description:
      "A Japanese-market landing page project built for clearer presentation, discoverability, and localized product communication.",
    role: "Delivered responsive landing-page implementation for an external-facing audience.",
    impact:
      "Adds evidence of working across different markets and product contexts, not only internal dashboards.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: untensha,
    website_link: "https://www.untenshashokuba.go.jp/",
  },
  {
    name: "NK Class Portal",
    description:
      "Portal-style frontend connected to the broader ClassNK product experience, with emphasis on clarity and workflow navigation.",
    role: "Implemented a focused portal experience aligned with the product ecosystem.",
    impact:
      "Supports the CV story that I work on business-facing product surfaces, not only isolated toy projects.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: nkportal,
    website_link: "https://sswt-portal.classnk.or.jp/",
  },
];

const realProjects = [
  {
    name: "Vbee AI Voice",
    description:
      "Text-to-speech platform by Vbee. Redis cache keyed by content hash to reuse generated audio, queue-based generation, and streaming output to fix OOM crashes on large audio files.",
    role: "Owned both the generation UI and the backend caching/queue architecture in a production AI platform.",
    impact:
      "Strongest proof of experience building real user-facing AI products end-to-end, not only frontend demos.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
    ],
    image: aivoice,
  },
  {
    name: "Vbee AI Call",
    description:
      "AI-powered outbound call center platform. Event-driven backend with Kafka and Socket.IO, atomic upsert to prevent duplicate call assignment across workers, and a Redis distributed lock against cache stampede.",
    role: "Worked on the product dashboard UI plus the concurrency-safe backend logic (Kafka events, distributed locking) for production usage.",
    impact:
      "Shows the combination of frontend ownership and hands-on backend problem-solving under real concurrency constraints.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "orange-text-gradient",
      },
      {
        name: "redis",
        color: "yellow-text-gradient",
      },
    ],
    image: aicall,
  },
  {
    name: "ClassNK",
    description:
      "Examination registration system for ClassNK (Japan Maritime Association). Streaming/background-job report export for large datasets, Redis caching, and a fix for Japanese-character PDF certificate rendering.",
    role: "Developed both frontend and backend (NestJS/PostgreSQL) for the exam registration and reporting flows.",
    impact:
      "Matches the CV narrative around full-stack ownership of a production booking/exam system, including backend performance fixes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "redis",
        color: "yellow-text-gradient",
      },
    ],
    image: classnk,
  },
  {
    name: "Tobutoptours",
    description:
      "Scheduling & booking system for Tobu, used by healthcare staff in Japan. Booking lifecycle modeled as an explicit state machine, with all date handling normalized to UTC to fix a cross-timezone display bug.",
    role: "Built booking-oriented frontend flows and the backend state machine / timezone handling behind them.",
    impact:
      "Good evidence of full-stack ownership on a business-critical interface where both UX clarity and backend correctness matter.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
    ],
    image: tobu,
  },
];

const certificate = [
  {
    name: "Project Management Principles and Practices",
    image: projectmanagement,
    organization: "Coursera",
    date: "February 20, 2022",
    link: "https://coursera.org/share/9be1c0bf897f4ad08f48b022cbac20e9",
  },
  {
    name: "CertNexus Certified Ethical Emerging Technologist",
    image: certnexus,
    organization: "Coursera",
    date: "July 6, 2022",
    link: "https://coursera.org/share/dbcbbfd9abb6bbdac257c37d02e68d2f",
  },
  {
    name: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    image: webdesign,
    organization: "Coursera",
    date: "April 22, 2020",
    link: "https://coursera.org/share/0f76aa3b44d27dfaf947aae2aaaacb16",
  },
  {
    name: "Computer Communications",
    image: computercommunication,
    organization: "Coursera",
    date: "November 26, 2020",
    link: "https://coursera.org/share/de009465afe8a2dd3f4a0e98888951e6",
  },
  {
    name: "Startup Entrepreneurship",
    image: startup,
    organization: "Coursera",
    date: "August 13, 2020",
    link: "https://coursera.org/share/ff335144911452741d5a59851a85b91e",
  },
];

const projectSections = [
  {
    key: "production",
    title: "Production Platforms",
    description:
      "These projects are the strongest evidence of my recent work: production systems where frontend quality, business flow, and technical execution had to hold up in real usage.",
    items: realProjects,
  },
  {
    key: "marketing",
    title: "Product and Landing Experiences",
    description:
      "This group shows a different side of the same skill set: translating product messaging into polished, responsive web experiences for external users.",
    items: landingPageProjects,
  },
  {
    key: "personal",
    title: "Personal Experiments",
    description:
      "Smaller personal projects that helped me explore interaction design, state handling, and browser-based product flow outside client work.",
    items: projects,
  },
];

const allProjects = [
  ...realProjects.map((item) => ({ ...item, group: "Production" })),
  ...landingPageProjects.map((item) => ({
    ...item,
    group: "Landing experience",
  })),
  ...projects.map((item) => ({ ...item, group: "Personal experiment" })),
];

export {
  services,
  technologies,
  experiences,
  projects,
  landingPageProjects,
  realProjects,
  certificate,
  projectSections,
  allProjects,
};
