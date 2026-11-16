// lib/projects.ts
// Tambah project baru cukup dengan nambah object di array PROJECTS.
// Gambar taruh di /public/images/projects (nama file case-sensitive di Vercel!).

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  cover: string;
  /** "contain" buat chart/figure (biar ga kepotong), "cover" buat foto/screenshot. Default: cover */
  coverFit?: "cover" | "contain";
  repo: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "brain-disease-detection",
    title: "Brain Disease Detection",
    category: "Medical Imaging · Classification",
    summary:
      "A CNN feature extractor paired with an SVM classifier that detects brain tumor, aneurysm, and cancer from scans — served through a Flask web app for real-time prediction.",
    metrics: [
      { value: "98%", label: "Accuracy" },
      { value: "3", label: "Conditions detected" },
    ],
    tech: ["Python", "PyTorch", "CNN", "SVM", "Flask", "OpenCV"],
    cover: "/images/projects/Brain.jpeg",
    repo: "https://github.com/FerdicoCh/Brain-Disease-Detection",
  },
  {
    slug: "bbca-bitcoin-forecasting",
    title: "BBCA Stock & Bitcoin Price Forecasting",
    category: "Time Series · Forecasting",
    summary:
      "A TimesNet model that projects BCA (BBCA) stock and Bitcoin prices twelve months ahead, benchmarked against LSTM and evaluated with MAE and MAPE.",
    metrics: [
      { value: "12 mo", label: "Forecast horizon" },
      { value: "2", label: "Assets modeled" },
    ],
    tech: ["Python", "PyTorch", "TimesNet", "Pandas", "Matplotlib", "Seaborn"],
    cover: "/images/projects/bitcoin.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/BBCA-Stocks-Bitcoin-Price-Forecasting",
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    category: "Computer Vision · Transfer Learning",
    summary:
      "A ResNet-50 transfer-learning model that classifies diseases across tomato, potato, and pepper leaves, deployed as a web app for real-time prediction and visualization.",
    metrics: [
      { value: "93%", label: "Accuracy" },
      { value: "15", label: "Disease classes" },
    ],
    tech: ["Python", "PyTorch", "ResNet-50", "Torchvision", "Flask", "OpenCV"],
    cover: "/images/projects/Plant.jpeg",
    repo: "https://github.com/FerdicoCh/Plant-Disease-Detection-with-Deployment",
  },
];
