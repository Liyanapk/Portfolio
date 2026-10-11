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
  title: "BEAUTY",
  subtitle: "Beauty & Cosmetics E-Commerce Website",
  href: "https://www.behance.net/gallery/256942439/BEAUTY-Beauty-Skincare-E-Commerce-Design",
  image: "/images/beauty thumbnile.png",
  backTitle: "Beauty E-Commerce Website",
  backSkills: "A visually engaging beauty shopping experience featuring interactive category animations, curated product collections, and responsive desktop and mobile layouts.",
  details: [
    "E-commerce UI design",
    "Interactive category animation",
    "Responsive web design"
  ],
  tools: ["img:/tools/figma.png"]
},
    {
    title: "Faculty Lens",
    subtitle: "Faculty Performance Management Dashboard",
    href: "https://www.behance.net/gallery/255054691/Faculty-Lens-Faculty-Performance-Management-Dashboard",
    image: "/images/Thumbnail faculty.png",
    backTitle: "Faculty Performance Dashboard",
    backSkills: "A centralized dashboard designed to help institute management monitor faculty performance, identify concerns, and make informed decisions.",
    details:  
     [  "Performance tracking",
    "Faculty insights",
    "Actionable analytics"],
    tools: ["img:/tools/figma.png"]
  },
  {
    title: "SKYSTAFF",
    subtitle: "Cabin Crew Admin Panel",
    href: "https://www.behance.net/gallery/253083559/Cabin-Crew-Admin-Panel-Airline-Management-Dashboard",
    image: "/images/3dCard1.png",
    backTitle: "Cabin Crew Admin Panel",
    backSkills: "Operations dashboard for cabin crew management and shift coordination.",
    details: ["Approval workflows", "Crew scheduling", "Real-time monitoring"],
    tools: ["img:/tools/figma.png"]
  },
  {
    title: "SKYSTAFF",
    subtitle: "Crew Management App",
    href: "https://www.behance.net/gallery/253199523/SkyStaff-Airline-Crew-Management-App",
    image: "/images/3dCard2.png",
    backTitle: "Crew Management App",
    backSkills: "A mobile-friendly management experience with role-based access and task automation.",
    details: ["Employee onboarding", "Role-based access", "Task automation"],
   tools: ["img:/tools/figma.png"]
  },

  {
    title: "DRINKPIE",
    subtitle: "Beverage Ordering Platform",
    href: "https://www.behance.net/gallery/252834515/DrinkPie-Beverage-Ordering-Platform",
    image: "/images/3dCard2-3.png",
    backTitle: "Beverage Ordering Platform",
    backSkills: "A beverage ordering experience designed for quick menu discovery and simple checkout.",
    details: ["Custom drink builder", "Promotions", "Checkout flow"],
    tools: ["img:/tools/figma.png"]
  },
    {
    title: "ZESTO",
    subtitle: "Food Delivery App",
    href: "https://www.behance.net/gallery/252997957/Zesto-Food-Delivery-Mobile-App",
    image: "/images/3dCard2-4.png",
    backTitle: "Food Delivery App",
    backSkills: "A food ordering experience focused on fast checkout and delivery visibility.",
    details: ["Order tracking", "Personalized offers", "Checkout flow"],
    tools: ["img:/tools/figma.png"]
  },
  {
    title: "TRAVEL",
    subtitle: "Travel Landing Page",
    href: "https://www.behance.net/gallery/252630083/Travel-Landing-Page",
    image: "/images/3dCard2-5.png",
    backTitle: "Travel Landing Page",
    backSkills: "A polished travel landing page built to inspire action and simplify booking.",
    details: ["Destination browsing", "Booking journey", "Responsive hero sections"],
    tools: ["img:/tools/figma.png"]
  }
]

export const FRONTEND_PROJECTS = [
  {
    title: "Accessible Healthcare",
    subtitle: "Government Services Portal",
    href: "https://chcomanoor.vercel.app/",
    image: "/images/3dCardweb1.png",
    backTitle: "Accessible Healthcare Portal",
    backSkills: "A government-facing healthcare portal designed for accessibility and clarity.",
    details: ["Responsive Layout", "Modern UI", "Clean Navigation", "Optimized Performance", "Cross-Device Support"],
    tools: ["img:/tools/nextjsss.png"],
  },
  {
    title: "Shop Better, Save Better",
    subtitle: "E-commerce Store",
    href: "https://mountsales.in/",
    image: "/images/3dCardweb2.png",
    backTitle: "E-commerce Store",
    backSkills: "A product-first storefront with smooth filtering and checkout flow.",
    details: ["Responsive Layout", "Cross-Browser Compatible", "Clean UI","Optimized Performance", "Mobile Friendly"],
    tools: ["img:/tools/html.png", "img:/tools/css.png", "img:/tools/js.png"],
  },
  {
    title: "Online Learning",
    subtitle: "Education Platform",
    href: "https://corse-school-front-end.vercel.app/",
    image: "/images/3dCardweb3.png",
    backTitle: "Education Platform",
    backSkills: "An online learning experience built around smooth course discovery and progress tracking.",
    details: ["Responsive Interface", "Reusable Components", "Clean User Experience", "Modern Web Design", "Fast Navigation"],
    tools: ["img:/tools/nextjsss.png"],
  },
  {
    title: "Infinite Possibilities",
    subtitle: "Fashion Website",
    href: "https://shopping-two-ashen.vercel.app/",
    image: "/images/3dCardweb4.png",
    backTitle: "Fashion Website",
    backSkills: "A visually rich fashion website with storytelling and interactive sections.",
    details: ["Responsive UI", "Reusable Components", "Clean Product Layout","User-Friendly Navigation", "Fast Navigation"],
    tools: ["img:/tools/react.png"],
  }
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

export const TOOLS = [
  {
    name: "Figma",
    image: "/tools/figma.png",
  },
  {
    name: "VS Code",
    image: "/tools/vscode.png",
  },
  {
    name: "GitHub",
    image: "/tools/github.png",
  },
  {
    name: "React.js",
    image: "/tools/react.png",
  },
  {
    name: "Next.js",
    image: "/tools/nextjs.png",
  },
];

export const PROCESS = [
  { title: "Research", desc: "Understand the problem, users, and business goals." },
  { title: "Define", desc: "Identify user needs and create clear problem statements." },
  { title: "Wireframe", desc: "Plan layouts and user flows before visual design." },
  { title: "UI Design", desc: "Design clean, accessible, and visually consistent interfaces." },
  { title: "Prototype", desc: "Build interactive prototypes to demonstrate user interactions." },
  { title: "Iterate", desc: "Refine the design based on feedback and usability improvements." },
]
