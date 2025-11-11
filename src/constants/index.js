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
  figma,
  docker,
  vbee,
  ohmidas,
  threejs,
  blog,
  ailatrieuphu,
  oantuti,
  quiz,
  whether,
  meetingroom,
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

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer (Frontend-focused)",
    company_name: "Vbee",
    icon: vbee,
    iconBg: "rgb(239 238 192)",
    date: "September 2021 - April 2024",
    points: [
      "Built AI-driven dashboards using ReactJS, Redux Saga, and WebSocket for real-time data visualization.",
      "Developed backend logic with Node.js, including cron jobs, API integration, and data processing.",
      "Led UI/UX optimization across desktop and mobile platforms to enhance user experience.",
      "Mentored interns, enforced Git workflows, and promoted clean code practices within the team.",
      "Collaborated with cross-functional teams to align technical solutions with business goals.",
    ],
  },
  {
    title: "Full-stack Developer (Frontend-focused)",
    company_name: "Ohmidas",
    icon: ohmidas,
    iconBg: "#e6ff9e",
    date: "June 2024 - Present",
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
    name: "My blog",
    description:
      "A personal space to share thoughts, experiences, and passions. Dive into a diverse range of topics, from technology to travel, and discover captivating stories.",
    tags: [
      {
        name: "react",
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
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/chuotduoicho/blog-FE",
    website_link: "https://ductai-blog-a0d36.web.app/",
  },
  {
    name: "Quiz app",
    description:
      "Interactive platform for quizzes & tests. Offers diverse question formats, score tracking, time limits & result display. Engaging learning experience.",
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
      "Exciting adventure in solving enigmatic puzzles, riddles, and challenges. Engage your mind and unravel mysteries to progress through immersive levels.",
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
      "Classic quiz game inspired by the popular TV show. Test your knowledge, answer trivia questions of increasing difficulty, and aim to win the grand prize.",
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
  {
    name: "Whether app",
    description:
      "Track weather conditions in real-time. Get accurate forecasts, temperature, humidity, wind speed, and more. Plan your day with confidence.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whether,
    source_code_link: "https://github.com/chuotduoicho/ductai-whether-app",
    website_link: "https://chuotduoicho.github.io/ductai-whether-app/",
  },
  {
    name: "Meeting room schedule",
    description:
      "Efficiently manage meeting room bookings. Check availability, book rooms, and view upcoming meetings. Streamline your scheduling process.",
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
    image: meetingroom,
    source_code_link: "https://github.com/chuotduoicho/meeting-room-schedule",
    website_link: "https://meeting-schedule-ductai-vais.netlify.app/",
  },
];

const landingPageProjects = [
  {
    name: "Vbee Landing Page",
    description:
      "Landing page for Vbee, an AI-powered voice assistant. Showcases features, use cases, and testimonials to attract users.",
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
      "Landing page for AIHub, a platform for AI resources and tools. Highlights offerings and benefits to engage visitors.",
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
      "Landing page for Mobiva Smartcall, a call center solution. Showcases features and benefits to attract potential clients.",
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
      "Landing page for Untensha Shokuba, a Japanese restaurant. Highlights menu, ambiance, and location to entice visitors.",
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
      "Classic quiz game inspired by the popular TV show. Test your knowledge, answer trivia questions of increasing difficulty.",
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
      "AI-powered voice synthesis platform by Vbee. Enables users to create natural-sounding voice content for various applications.",
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
      "AI-powered voice calling platform by Vbee. Enables users to make natural-sounding voice calls for various applications.",
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
      "ClassNK for register exam and manage student information online. Streamlines administrative tasks for educational institutions.",
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
      "Booking tours website for Tobu Top Tours. Allows users to browse and book tours easily with a user-friendly interface.",
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

export {
  services,
  technologies,
  experiences,
  projects,
  landingPageProjects,
  realProjects,
  certificate,
};
