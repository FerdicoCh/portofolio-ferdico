// lib/site.ts
// Semua konten non-project ada di sini, jadi gampang di-update tanpa nyentuh komponen.

export const SITE = {
  name: "Ferdico Chandra",
  initials: "FC",
  role: "Machine Learning & Data",
  url: "https://ferdico-chandra.vercel.app",
  description:
    "Information Systems undergraduate at Universitas Multimedia Nusantara building machine learning models and deploying them as real web applications.",
  location: "Tangerang, Indonesia",
  email: "ferdicocha@gmail.com",
  resume: "/resume.pdf",
  photo: "/images/ppaku.jpg",
} as const;

export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export type SocialKey = "linkedin" | "github" | "instagram" | "email";

export const SOCIALS: { key: SocialKey; label: string; handle: string; href: string }[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "in/ferdico-chandra",
    href: "https://linkedin.com/in/ferdico-chandra",
  },
  {
    key: "github",
    label: "GitHub",
    handle: "@FerdicoCh",
    href: "https://github.com/FerdicoCh",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@ferdico.ch",
    href: "https://instagram.com/ferdico.ch",
  },
  {
    key: "email",
    label: "Email",
    handle: SITE.email,
    href: `mailto:${SITE.email}`,
  },
];

export const STATS = [
  { value: "3.74", suffix: "/4.00", label: "Cumulative GPA" },
  { value: "98", suffix: "%", label: "Top model accuracy" },
  { value: "3", suffix: "", label: "End-to-end ML projects" },
  { value: "2027", suffix: "", label: "Expected graduation" },
] as const;

export const FOCUS_AREAS = [
  {
    key: "ml",
    title: "Machine Learning",
    body: "Predictive and deep learning models — CNN, ResNet, SVM, and TimesNet — for computer vision and time-series problems.",
  },
  {
    key: "data",
    title: "Data Analytics & Visualization",
    body: "Turning raw data into clear insight with SQL, Pandas, Tableau, Power BI, and SAS Visual Analytics.",
  },
  {
    key: "web",
    title: "Web Development",
    body: "Shipping models as interactive apps with Flask and Streamlit, on top of HTML, CSS, JavaScript, and PHP.",
  },
] as const;

export const FACTS = [
  { label: "Based in", value: "Tangerang, Banten, Indonesia" },
  { label: "Studying", value: "Information Systems, UMN" },
  { label: "Languages", value: "Indonesian (native), English (intermediate)" },
  { label: "Looking for", value: "ML / Data Science internships" },
] as const;

export type TimelineItem = {
  kind: "Experience" | "Education";
  period?: string;
  title: string;
  org: string;
  summary?: string;
  highlights?: { label: string; value: string }[];
  bullets?: string[];
  chips?: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    kind: "Experience",
    title: "Database Systems Laboratory Assistant",
    org: "Universitas Multimedia Nusantara",
    bullets: [
      "Assisted in running laboratory sessions for the Database Systems course.",
      "Taught SQL fundamentals — data definition, data manipulation, and query operations.",
      "Guided students through aggregate functions and advanced queries for data analysis.",
      "Explained database normalization up to the Third Normal Form (3NF).",
      "Provided hands-on mentoring and troubleshooting during lab sessions.",
    ],
  },
  {
    kind: "Education",
    period: "2023 — 2027",
    title: "Information Systems, Undergraduate",
    org: "Universitas Multimedia Nusantara",
    highlights: [
      { label: "Cumulative GPA", value: "3.74 / 4.00" },
      { label: "Recent semester GPA", value: "3.97 / 4.00" },
    ],
    chips: [
      "Database Systems",
      "Big Data Analytics",
      "Machine Learning",
      "Data Visualization",
      "Web Development",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    key: "code",
    title: "Programming & Data",
    blurb: "The everyday toolkit for wrangling, querying, and scripting.",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL (MySQL)", "Java", "C#"],
  },
  {
    key: "ml",
    title: "Machine Learning & AI",
    blurb: "From classic supervised learning to deep architectures.",
    items: [
      "PyTorch",
      "TensorFlow / Keras",
      "CNN",
      "RNN",
      "ResNet",
      "TimesNet",
      "Time Series Forecasting",
      "Classification",
      "Regression",
      "Clustering",
    ],
  },
  {
    key: "viz",
    title: "Data Visualization",
    blurb: "Quick EDA plots through to full, shareable dashboards.",
    items: ["Tableau", "Power BI", "SAS Visual Analytics", "Matplotlib", "Seaborn"],
  },
  {
    key: "web",
    title: "Web & Deployment",
    blurb: "Getting models out of the notebook and in front of users.",
    items: ["Flask", "Streamlit", "HTML", "CSS", "JavaScript", "PHP", "Laravel", "Next.js"],
  },
] as const;

export const TOOLS = [
  { name: "Jupyter Notebook", icon: "/images/tools/jupyter.svg" },
  { name: "VS Code", icon: "/images/tools/vscode.svg" },
  { name: "PyCharm", icon: "/images/tools/pycharm.svg" },
  { name: "Google Colab", icon: "/images/tools/colab.svg" },
  { name: "Tableau", icon: "/images/tools/tableau.svg" },
  { name: "Power BI", icon: "/images/tools/powerbi.svg", mono: true },
  { name: "SAS Visual Analytics", icon: "/images/tools/sas.svg" },
  { name: "GitHub", icon: "/images/tools/github.svg", mono: true },
] as const;
