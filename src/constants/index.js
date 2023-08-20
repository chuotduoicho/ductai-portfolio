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
  meta,
  starbucks,
  tesla,
  fpt,
  vbee,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blog,
  ailatrieuphu,
  oantuti,
  quiz,
  projectmanagement,
  certnexus,
  startup,computercommunication,
  webdesign
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Web Developer",
    company_name: "FPT Software",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing web applications using Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Vbee",
    icon: vbee,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, NodeJS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    website_link:"https://ductai-blog-a0d36.web.app/"
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
    website_link:"https://ductai-quiz-app.web.app/"
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
    website_link:"https://ductai-khoa2-oantuxi.web.app/"
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
    website_link:"https://ductai-ailatrieuphu.web.app/"
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
  testimonials,
  projects,
  certificate,
};
