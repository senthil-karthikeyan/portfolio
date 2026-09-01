export const siteConfig = {
  name: "Senthil K",
  title: "SENTHIL K // SOFTWARE ENGINEER",
  description:
    "Portfolio of Senthil K, Software Engineer. Swiss typographic composition, scalable web architectures, and production-grade systems.",
  role: "SOFTWARE ENGINEER",
  initials: "SK",

  // URLs from environment variables
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://senthilk.dev",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/senthil-karthikeyan",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/senthil-karthikeyan",
  email:
    process.env.NEXT_PUBLIC_EMAIL ||
    "senthil.karthikeyan.official@gmail.com",
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/file/d/1gIBxtTei0W7s5kZOJB685pP8Oj9G7pUc/view?usp=drive_link",

  // Display-friendly versions
  githubHandle: "senthil-karthikeyan",
  linkedinHandle: "senthil-karthikeyan",

  // Navigation
  navItems: [
    { id: "home", label: "HOME", number: "01" },
    { id: "about", label: "ABOUT", number: "02" },
    { id: "experience", label: "EXP", number: "03" },
    { id: "work", label: "WORK", number: "04" },
    { id: "skills", label: "SKILLS", number: "05" },
    { id: "contact", label: "CONTACT", number: "06" },
  ] as const,

  // Mobile navigation (longer labels)
  mobileNavItems: [
    { id: "home", label: "HOME / THESIS", number: "01" },
    { id: "about", label: "ABOUT / PROFILE", number: "02" },
    { id: "experience", label: "EXP / CAREER TIMELINE", number: "03" },
    { id: "work", label: "WORK / SHIPPED PRODUCTS", number: "04" },
    { id: "skills", label: "SKILLS / MATRIX", number: "05" },
    { id: "contact", label: "CONTACT / DISPATCH", number: "06" },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
export type SectionId = NavItem["id"];
