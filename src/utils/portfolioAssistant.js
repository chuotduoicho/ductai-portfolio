import {
  services,
  technologies,
  experiences,
  projects,
  landingPageProjects,
  realProjects,
} from "../constants";

export const sectionLinks = {
  about: "#about",
  experience: "#work",
  projects: "#project",
  contact: "#contact",
};

const allProjects = [
  ...projects.map((item) => ({ ...item, group: "Personal" })),
  ...landingPageProjects.map((item) => ({ ...item, group: "Landing Page" })),
  ...realProjects.map((item) => ({ ...item, group: "Real-world" })),
];

export const buildPortfolioKnowledge = () => ({
  profile: {
    title: "Full-stack Developer (Frontend-focused)",
    summary:
      "Frontend-focused full-stack developer with React/Next.js strength and growing backend depth in Node.js and scalable architecture.",
  },
  services: services.map((service) => service.title),
  technologies: technologies.map((item) => item.name),
  experiences: experiences.map((item) => ({
    company: item.company_name,
    title: item.title,
    date: item.date,
    highlights: item.points,
  })),
  projects: allProjects.map((project) => ({
    name: project.name,
    group: project.group,
    description: project.description,
    tags: project.tags?.map((tag) => tag.name) || [],
    source_code_link: project.source_code_link || null,
    website_link: project.website_link || null,
  })),
  section_links: sectionLinks,
});

const normalize = (value) => value.toLowerCase().trim();

const hasKeyword = (message, keywords) =>
  keywords.some((keyword) => message.includes(keyword));

const findProject = (message) => {
  const directMatch = allProjects.find((project) =>
    message.includes(project.name.toLowerCase())
  );

  if (directMatch) return directMatch;

  const tokens = message.split(/\s+/).filter((token) => token.length > 2);

  return allProjects.find((project) => {
    const name = project.name.toLowerCase();
    return tokens.some((token) => name.includes(token));
  });
};

const formatProjectAnswer = (project) => {
  const stack = project.tags?.map((tag) => tag.name).join(", ") || "N/A";
  const source = project.source_code_link
    ? `- Repo: ${project.source_code_link}`
    : "- Repo: private or unavailable";
  const demo = project.website_link
    ? `- Demo: ${project.website_link}`
    : "- Demo: unavailable";

  return [
    `Project: ${project.name} (${project.group})`,
    `Summary: ${project.description}`,
    `Tech: ${stack}`,
    source,
    demo,
    `If you want, jump to Projects section: ${sectionLinks.projects}`,
  ].join("\n");
};

const buildRecruiterGuide = (message) => {
  if (hasKeyword(message, ["frontend", "ui", "ux", "react", "next"])) {
    return `For frontend depth, start at ${sectionLinks.projects} and check Landing Page + Real-world projects, then read ${sectionLinks.experience} for architecture impact.`;
  }

  if (hasKeyword(message, ["backend", "node", "api", "database"])) {
    return `For backend and system thinking, check ${sectionLinks.experience} first, then Projects in ${sectionLinks.projects} where Node.js, NestJS, MongoDB, and MySQL are used.`;
  }

  if (hasKeyword(message, ["lead", "mentor", "management", "team"])) {
    return `For leadership signals, review work history at ${sectionLinks.experience} where mentoring and cross-functional collaboration are highlighted.`;
  }

  return `Quick recruiter path: 1) Overview at ${sectionLinks.about} 2) Experience at ${sectionLinks.experience} 3) Projects at ${sectionLinks.projects} 4) Contact at ${sectionLinks.contact}.`;
};

const buildSkillsAnswer = () => {
  const coreServices = services.map((service) => service.title).join(", ");
  const techStack = technologies.map((item) => item.name).join(", ");

  return [
    `Core roles: ${coreServices}`,
    `Main stack: ${techStack}`,
    `You can see highlights in ${sectionLinks.about} and ${sectionLinks.projects}.`,
  ].join("\n");
};

const buildExperienceAnswer = () => {
  const summary = experiences
    .map(
      (item) =>
        `${item.company_name} (${item.date}): ${item.title}. Key focus: ${item.points[0]}`
    )
    .join("\n");

  return `${summary}\nRead full timeline at ${sectionLinks.experience}.`;
};

export const getPortfolioAnswer = (input, mode = "about") => {
  const message = normalize(input);

  if (!message) {
    return "Please enter a question. Example: What tech did you use in Vbee AI Voice?";
  }

  if (hasKeyword(message, ["hello", "hi", "xin chao", "hey"])) {
    return `I can help with skills, project details, and recruiter navigation. Ask me anything about this portfolio.`;
  }

  if (
    mode === "project" ||
    hasKeyword(message, ["project", "du an", "dự án", "repo", "demo", "tech"])
  ) {
    const project = findProject(message);
    if (project) {
      return formatProjectAnswer(project);
    }
  }

  if (
    hasKeyword(message, [
      "skill",
      "kỹ năng",
      "stack",
      "technology",
      "tech stack",
      "cong nghe",
      "công nghệ",
    ])
  ) {
    return buildSkillsAnswer();
  }

  if (
    hasKeyword(message, [
      "experience",
      "kinh nghiem",
      "kinh nghiệm",
      "work history",
      "career",
      "company",
    ])
  ) {
    return buildExperienceAnswer();
  }

  if (
    hasKeyword(message, [
      "recruiter",
      "nen xem",
      "nên xem",
      "xem gi",
      "xem gì",
      "start",
      "where should i start",
      "focus",
    ])
  ) {
    return buildRecruiterGuide(message);
  }

  return [
    "I can answer about skills, experience, and projects with repo/demo links.",
    "Try one of these:",
    '- "What technology did you use in Vbee AI Voice?"',
    '- "What are your strongest frontend skills?"',
    '- "If I am hiring for backend, which section should I read first?"',
  ].join("\n");
};

export const assistantSuggestions = {
  about: [
    "What are your strongest skills?",
    "Summarize your experience timeline.",
    "If I am hiring frontend, where should I start?",
  ],
  project: [
    "What technology did you use in Vbee AI Voice?",
    "Tell me about ClassNK project and your stack.",
    "Which projects have live demos?",
  ],
};
