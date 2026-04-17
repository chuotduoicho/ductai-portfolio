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
  role: "Frontend-focused Full-stack Developer",
  heroHeadline:
    "Building production products with React, Next.js, and TypeScript.",
  heroSubheadline:
    "4+ years shipping AI, booking, and exam platforms with strong frontend ownership, mentoring, and cross-functional delivery.",
  summary:
    "I am a frontend-focused full-stack developer with 4+ years of experience delivering production web applications across AI products, booking systems, and education platforms. My strongest work sits at the intersection of product UI, frontend architecture, and implementation quality, while I keep expanding backend depth with Node.js, NestJS, MongoDB, and MySQL.",
  details:
    "Recent work has included leading frontend decisions with React, Next.js, TypeScript, Tailwind CSS, and SWR, mentoring teammates, and collaborating directly with business analysts and Japanese clients to turn business requirements into maintainable product flows.",
  quickFacts: [
    {
      value: "4+ years",
      label: "building production web applications",
    },
    {
      value: "React, Next.js, TypeScript",
      label: "core frontend delivery stack",
    },
    {
      value: "Mentoring",
      label: "interns and junior developers",
    },
    {
      value: "Client-facing",
      label: "working with Japanese stakeholders and BAs",
    },
  ],
  focusAreas: [
    "Frontend architecture",
    "Product UI and UX execution",
    "Full-stack delivery",
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
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "React and Next.js Delivery",
    icon: mobile,
  },
  {
    title: "Full-stack Product Implementation",
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
    title: "Frontend-focused Full-stack Developer",
    company_name: "Vbee",
    icon: vbee,
    iconBg: "rgb(239 238 192)",
    date: "September 2022 - April 2024",
    focus:
      "Owned dashboard-heavy product work across AI voice and AI calling systems, balancing frontend experience, realtime visualization, and backend integrations.",
    stack: ["React", "Redux Saga", "WebSocket", "Node.js", "MongoDB"],
    points: [
      "Built AI-driven dashboards using ReactJS, Redux Saga, and WebSocket for real-time data visualization.",
      "Developed backend logic with Node.js, including cron jobs, API integration, and data processing.",
      "Led UI/UX optimization across desktop and mobile platforms to enhance user experience.",
      "Mentored interns, enforced Git workflows, and promoted clean code practices within the team.",
      "Collaborated with cross-functional teams to align technical solutions with business goals.",
    ],
  },
  {
    title: "Frontend-focused Full-stack Developer",
    company_name: "Wasabi",
    icon: wasabi,
    iconBg: "#e6ff9e",
    date: "June 2024 - Present",
    focus:
      "Leading frontend implementation for booking and exam-registration products with stronger ownership over architecture, code quality, and stakeholder communication.",
    stack: ["Next.js 19", "React 19", "TypeScript", "SWR", "Tailwind CSS"],
    points: [
      "Led frontend architecture using Next.js, React 19, SWR, and Tailwind CSS.",
      "Developed scalable booking and exam registration systems with strong UI/UX emphasis.",
      "Integrated backend APIs and handled data flow using TypeScript and SWR.",
      "Collaborated with Japanese clients and BAs to align technical solutions with business needs.",
      "Mentored junior developers and contributed to team growth and code quality.",
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
      "AI voice-synthesis platform supporting creation workflows, content management, and product-facing user journeys.",
    role: "Contributed across frontend product experience and backend integrations in a production AI platform.",
    impact:
      "Strongest proof of experience building real user-facing AI products rather than portfolio-only demos.",
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
    image: aivoice,
  },
  {
    name: "Vbee AI Call",
    description:
      "AI calling platform where realtime product behavior, dashboard visibility, and workflow reliability are central.",
    role: "Worked on product UI, realtime behavior, and supporting backend logic for production usage.",
    impact:
      "Shows the combination of frontend ownership and backend problem-solving used in AI product delivery.",
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
    image: aicall,
  },
  {
    name: "ClassNK",
    description:
      "Exam registration and student-management platform designed to streamline operational workflows for education-focused users.",
    role: "Led frontend implementation while integrating with a NestJS and MySQL backend.",
    impact:
      "Matches the CV narrative around scalable booking and exam systems with stronger ownership over architecture and delivery.",
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
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: classnk,
  },
  {
    name: "Tobutoptours",
    description:
      "Tour-booking product focused on reservation flow, customer confidence, and practical frontend usability.",
    role: "Built booking-oriented frontend flows integrated with a structured backend stack.",
    impact:
      "Good evidence of delivering business-critical interfaces where UX clarity directly affects conversion and operations.",
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
        name: "mysql",
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
