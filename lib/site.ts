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
  photo: "/images/ferdico-portrait.jpg",
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

// Isi bullets disamakan dengan CV (Claude Doc "CV Ferdico Chandra - Data").
export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2026 — Dec 2026",
    title: "Cost Management Intern",
    org: "CIMB Niaga",
    logo: "/images/logos/cimb-niaga-mark.svg",
    bullets: [
      "Built an internal decision-support web app (Python, Flask, pandas, Plotly) that turns one Excel workbook into a full unit cost analysis, replacing a Jupyter notebook that only someone who could read the code was able to rerun.",
      "Defined the costing method with the team: time-driven activity-based costing, volume-weighted cost per transaction and annual cost at four organizational levels, and a median-based cost-volume quadrant that flags high-cost activities for review.",
      "Analyzed the unit cost of more than 600 activities across 50+ operations and credit operations units, traced where cost concentrates at group, unit, and activity level, and presented the findings and next-step recommendations in an executive deck.",
      "Added pre-import data validation, rule-based insights, what-if scenario simulation, and automatic PowerPoint deck export, and secured the app with role-based access and an audit trail.",
      "Verified accuracy with automated pytest golden tests against the reference notebook, then integrated the app as a module of the team's operations productivity system, confirmed by a parity check with identical results on all 654 test combinations and a regression check across 350 existing pages.",
      "Ran time and motion studies across operations and technology units for about 10 weeks to measure the activity durations behind each cost per transaction.",
    ],
  },
  {
    period: "Feb 2026 — Jun 2026",
    title: "Data Engineer Intern",
    org: "BMKG",
    orgNote: "Badan Meteorologi, Klimatologi, dan Geofisika",
    logo: "/images/logos/bmkg.png",
    bullets: [
      "Cleaned and analyzed 1,058 seismic records from 281 monitoring stations in Python for the earthquake early warning team: removed extreme outliers with an IQR filter, derived hypocentral distance from station and source coordinates, and applied log transforms.",
      "Built a baseline log-linear regression in scikit-learn that estimates earthquake magnitude from ground-motion parameters (PGA, PGV, PGD) and hypocentral distance, with a test MAE of 0.39 magnitude units, checked with 10-fold cross-validation.",
      "Built a Metabase dashboard on 468 user feedback responses from the InaEEWS early warning app, covering alert receipt, alert speed, internet condition, user reaction, and location.",
      "Presented both deliverables to the early warning team, revised them from supervisor feedback, and packaged the model as a Streamlit demo with input validation.",
    ],
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Database Systems Laboratory Assistant",
    org: "Universitas Multimedia Nusantara",
    logo: "/images/logos/umn.png",
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
  logo: "/images/logos/umn.png",
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
    items: ["Tableau", "Power BI", "Metabase", "SAS Visual Analytics", "Matplotlib", "Seaborn"],
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
  { name: "Power BI", icon: "/images/tools/powerbi.svg" },
  { name: "SAS Visual Analytics", icon: "/images/tools/sas.svg" },
  { name: "GitHub", icon: "/images/tools/github.svg", mono: true },
] as const;

export const LANGUAGES = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
] as const;
