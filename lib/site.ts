// lib/site.ts
// Semua konten non-project ada di sini, jadi gampang di-update tanpa nyentuh komponen.

export const SITE = {
  name: "Ferdico Chandra",
  role: "Artificial Intelligence & Data",
  url: "https://ferdico-chandra.vercel.app",
  description:
    "Information Systems undergraduate at Universitas Multimedia Nusantara working on artificial intelligence, data analytics, and web development.",
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

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ferdico-chandra" },
  { label: "GitHub", href: "https://github.com/FerdicoCh" },
  { label: "Instagram", href: "https://instagram.com/ferdico.ch" },
] as const;

// Baris fakta singkat di hero.
export const HERO_FACTS = [
  // Ganti baris ini setelah magang selesai (8 Des 2026).
  { label: "Currently", value: "Cost Management Intern at CIMB Niaga" },
  { label: "Based in", value: "Tangerang, Indonesia" },
] as const;

export const FOCUS_AREAS = [
  {
    title: "Artificial Intelligence",
    body: "Predictive and deep learning models — CNN, ResNet, SVM, TimesNet — for computer vision and time-series forecasting.",
  },
  {
    title: "Data Analytics",
    body: "SQL-based data processing, exploratory analysis in Python, and dashboards in Tableau, Power BI, and SAS Visual Analytics.",
  },
  {
    title: "Web Development",
    body: "Full-stack applications with Laravel, Flask, and Next.js, built on structured, well-normalized databases.",
  },
] as const;

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  bullets?: string[];
};

// TODO: tambah deskripsi kerja (bullets) untuk entri CIMB Niaga.
export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2026 — Dec 2026",
    title: "Cost Management Intern",
    org: "CIMB Niaga",
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Database Systems Laboratory Assistant",
    org: "Universitas Multimedia Nusantara",
    bullets: [
      "Mentored undergraduate students in SQL-based data querying, aggregation, and analytical operations on relational databases.",
      "Guided database schema design and normalization up to Third Normal Form (3NF) to keep data consistent.",
      "Helped solve structured data problems, including query optimization and relational logic, during hands-on lab sessions.",
      "Translated technical database concepts into clear explanations for students from non-technical backgrounds.",
    ],
  },
];

export const EDUCATION = {
  period: "Aug 2023 — Present",
  degree: "Bachelor in Information Systems",
  school: "Universitas Multimedia Nusantara",
  details: [
    { label: "Cumulative GPA", value: "3.80 / 4.00" },
    { label: "Expected graduation", value: "2027" },
  ],
  coursework: [
    "Database Systems",
    "Big Data Analytics",
    "Data Analysis",
    "Data Visualization",
    "Data Modeling",
    "Deep Learning",
    "Algorithm and Data Structure",
    "Web Design and Development",
    "Object-Oriented Programming",
  ],
} as const;

export const SKILLS = [
  {
    label: "Artificial Intelligence",
    items: [
      "PyTorch",
      "TensorFlow / Keras",
      "Scikit-learn",
      "CNN",
      "RNN",
      "ResNet",
      "TimesNet",
      "Time-series forecasting",
    ],
  },
  {
    label: "Data & Programming",
    items: [
      "Python (Pandas, NumPy)",
      "SQL (MySQL, Google BigQuery)",
      "MongoDB",
      "Data cleaning & EDA",
      "Java",
      "C#",
    ],
  },
  {
    label: "Visualization & BI",
    items: ["Tableau", "Power BI", "SAS Visual Analytics", "Matplotlib", "Seaborn"],
  },
  {
    label: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Flask",
      "Streamlit",
    ],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "PyCharm"],
  },
  {
    label: "Languages",
    items: ["Indonesian (native)", "English (intermediate)"],
  },
] as const;
