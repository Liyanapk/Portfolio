// Central place for all portfolio content so components stay reusable & data-driven.

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
]

export const ABOUT_BADGES = ["HTML", "10+ Technologies", "100% Responsive Design", "3+ Case Studies"]

export const SKILLS = [
  {
    title: "UI/UX Design",
    items: ["Figma", "Prototyping", "Wireframing", "UI Design"],
  },
  {
    title: "Front-End",
    items: ["HTML5", "CSS3", "JavaScript", "Next.js", "React.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Design Principles",
    items: ["Responsive Design", "Problem Solving", "Consistency"],
  },
]

export const UIUX_PROJECTS = [
  {
    title: "SKYSTAFF",
    subtitle: "Cabin Crew Admin Panel",
    href: "#",
    image: "/images/3dCard1.png",
    backTitle: "Cabin Crew Admin Panel",
    backSkills: "Operations dashboard for cabin crew management and shift coordination.",
    details: ["Approval workflows", "Crew scheduling", "Real-time monitoring"],
    tools: ["Figma", "Miro"],
  },
  {
    title: "SKYSTAFF",
    subtitle: "Crew Management App",
    href: "#",
    image: "/images/3dCard2.png",
    backTitle: "Crew Management App",
    backSkills: "A mobile-friendly management experience with role-based access and task automation.",
    details: ["Employee onboarding", "Role-based access", "Task automation"],
    tools: ["Figma", "FigJam"],
  },
  {
    title: "ZESTO",
    subtitle: "Food Delivery App",
    href: "#",
    image: "/images/3dCard2-3.png",
    backTitle: "Food Delivery App",
    backSkills: "A food ordering experience focused on fast checkout and delivery visibility.",
    details: ["Order tracking", "Personalized offers", "Checkout flow"],
    tools: ["Figma", "Framer"],
  },
  {
    title: "TRAVEL",
    subtitle: "Travel Landing Page",
    href: "#",
    image: "/images/3dCard2-4.png",
    backTitle: "Travel Landing Page",
    backSkills: "A polished travel landing page built to inspire action and simplify booking.",
    details: ["Destination browsing", "Booking journey", "Responsive hero sections"],
    tools: ["Figma"],
  },
  {
    title: "DRINKPIE",
    subtitle: "Beverage Ordering Platform",
    href: "#",
    image: "/images/3dCard2-5.png",
    backTitle: "Beverage Ordering Platform",
    backSkills: "A beverage ordering experience designed for quick menu discovery and simple checkout.",
    details: ["Custom drink builder", "Promotions", "Checkout flow"],
    tools: ["Figma", "Whimsical"],
  },
]

export const FRONTEND_PROJECTS = [
  {
    title: "Accessible Healthcare",
    subtitle: "Government Services Portal",
    href: "#",
    image: "",
    backTitle: "Accessible Healthcare Portal",
    backSkills: "A government-facing healthcare portal designed for accessibility and clarity.",
    details: ["WCAG-friendly UI", "Service discovery", "Appointment flow"],
    tools: ["React", "Tailwind CSS"],
  },
  {
    title: "Shop Better, Save Better",
    subtitle: "E-commerce Store",
    href: "#",
    image: "",
    backTitle: "E-commerce Store",
    backSkills: "A product-first storefront with smooth filtering and checkout flow.",
    details: ["Product grid", "Cart flow", "Promotions"],
    tools: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Online Learning",
    subtitle: "Education Platform",
    href: "#",
    image: "",
    backTitle: "Education Platform",
    backSkills: "An online learning experience built around smooth course discovery and progress tracking.",
    details: ["Course browsing", "Progress tracking", "Enrollment flow"],
    tools: ["React", "CSS"],
  },
  {
    title: "Infinite Possibilities",
    subtitle: "Fashion Landing Page",
    href: "#",
    image: "",
    backTitle: "Fashion Landing Page",
    backSkills: "A visually rich fashion landing page with storytelling and interactive sections.",
    details: ["Campaign layout", "Product sections", "Smooth interactions"],
    tools: ["HTML", "CSS"],
  },
]

export const EXPERIENCE = [
  {
    company: "Noviindus Technology",
    role: "Frontend Developer",
    period: "May 2025 – Dec 2025",
    points: [
      "Built responsive web applications",
      "Converted Figma designs into code",
      "Developed reusable React components",
      "Collaborated with developers",
    ],
  },
  {
    company: "MERN Stack Intern",
    role: "MERN Stack Intern",
    period: "Oct 2024 – Feb 2025",
    points: [
      "Learned full-stack development",
      "Built React applications",
      "Developed reusable React & Next.js components",
    ],
  },
  {
    company: "Fluxion IT Solutions",
    role: "Frontend Developer Intern",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Developed responsive web pages",
      "Worked with HTML, CSS, JavaScript & React.js",
      "Improved UI consistency",
    ],
  },
]

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  college: "AWH Engineering College",
  period: "2020 – 2024",
  cgpa: "7.11",
}

export const TOOLS = ["Figma", "VS Code", "Git Hub", "React.js", "Next.js"]

export const PROCESS = [
  { title: "Research", desc: "Understand the problem, users, and business goals." },
  { title: "Define", desc: "Identify user needs and create clear problem statements." },
  { title: "Wireframe", desc: "Plan layouts and user flows before visual design." },
  { title: "UI Design", desc: "Design clean, accessible, and visually consistent interfaces." },
  { title: "Prototype", desc: "Build interactive prototypes to demonstrate user interactions." },
  { title: "Iterate", desc: "Refine the design based on feedback and usability improvements." },
]
