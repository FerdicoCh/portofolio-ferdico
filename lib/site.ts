// lib/site.ts
// Semua konten non-project ada di sini, jadi gampang di-update tanpa nyentuh komponen.

export const SITE = {
  name: "Ferdico Chandra",
  initials: "FC",
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

export type SocialKey = "linkedin" | "github" | "instagram";

export const SOCIALS: { key: SocialKey; label: string; handle: string; href: string }[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "in/ferdico-chandra",
    href: "https://linkedin.com/in/ferdico-chandra",
  },
  { key: "github", label: "GitHub", handle: "@FerdicoCh", href: "https://github.com/FerdicoCh" },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@ferdico.ch",
    href: "https://instagram.com/ferdico.ch",
  },
];

// Kartu "Currently" di hero. Ganti setelah magang CIMB selesai (Des 2026).
export const CURRENT_ROLE = {
  title: "Cost Management Intern",
  org: "CIMB Niaga",
  logo: "/images/logos/cimb-niaga.svg",
} as const;

export const FOCUS_AREAS = [
  {
    key: "ai",
    title: "Artificial Intelligence",
    body: "Predictive and deep learning models — CNN, ResNet, SVM, TimesNet — for computer vision and time-series forecasting.",
  },
  {
    key: "data",
    title: "Data Analytics",
    body: "SQL-based data processing, exploratory analysis in Python, and dashboards in Tableau, Power BI, and SAS Visual Analytics.",
  },
  {
    key: "web",
    title: "Web Development",
    body: "Full-stack applications with Laravel, Flask, and Next.js, built on structured, well-normalized databases.",
  },
] as const;

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  /** Nama panjang / keterangan organisasi (opsional) */
  orgNote?: string;
  /** Logo di /public. Kalau kosong, dipakai `monogram`. */
  logo?: string;
  monogram?: string;
  bullets?: string[];
};

// TODO: tambah posisi persisnya di BMKG + deskripsi kerja (bullets) untuk CIMB Niaga dan BMKG.
export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2026 — Dec 2026",
    title: "Cost Management Intern",
    org: "CIMB Niaga",
    logo: "/images/logos/cimb-niaga-mark.svg",
  },
  {
    period: "Feb 2026 — Jun 2026",
    title: "Intern",
    org: "BMKG",
    orgNote: "Badan Meteorologi, Klimatologi, dan Geofisika",
    logo: "/images/logos/bmkg.png",
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Database Systems Laboratory Assistant",
    org: "Universitas Multimedia Nusantara",
    monogram: "UMN",
    bullets: [
      "Mentored undergraduate students in SQL-based data querying, aggregation, and analytical operations on relational databases.",
      "Guided database schema design and normalization up to Third Normal Form (3NF) to keep data consistent.",
      "Helped solve structured data problems, including query optimization and relational logic, during hands-on lab sessions.",
      "Translated technical database concepts into clear explanations for students from non-technical backgrounds.",
    ],
  },
];

export const EDUCATION = {
  period: "2023 — 2027",
  degree: "Bachelor in Information Systems",
  school: "Universitas Multimedia Nusantara",
  shortSchool: "UMN",
  gpa: "3.80",
  gpaScale: "4.00",
  classOf: "2027",
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

export const SKILL_GROUPS = [
  {
    title: "Artificial Intelligence",
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
    title: "Data & Programming",
    items: ["Python", "Pandas", "NumPy", "SQL (MySQL)", "Google BigQuery", "MongoDB", "Java", "C#"],
  },
  {
    title: "Visualization & BI",
    items: ["Tableau", "Power BI", "SAS Visual Analytics", "Matplotlib", "Seaborn"],
  },
  {
    title: "Web Development",
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

export const LANGUAGES = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
] as const;
