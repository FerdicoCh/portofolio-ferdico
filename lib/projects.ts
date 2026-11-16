// lib/projects.ts
// Tambah project baru cukup dengan nambah object di array PROJECTS.
// Gambar taruh di /public/images/projects (nama file case-sensitive di Vercel!).

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
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
    category: "Medical imaging, classification",
    summary:
      "A CNN feature extractor paired with an SVM classifier that detects brain tumor, aneurysm, and cancer from scans at 98% accuracy, served through a Flask web app for real-time prediction.",
    tech: ["Python", "PyTorch", "CNN", "SVM", "Flask", "OpenCV"],
    cover: "/images/projects/Brain.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/Brain-Disease-Detection",
  },
  {
    slug: "bbca-bitcoin-forecasting",
    title: "BBCA Stock & Bitcoin Price Forecasting",
    category: "Time-series forecasting",
    summary:
      "A TimesNet model that projects BCA (BBCA) stock and Bitcoin prices twelve months ahead, built on cleaned historical market data and benchmarked against LSTM using MAE and MAPE.",
    tech: ["Python", "PyTorch", "TimesNet", "Pandas", "Matplotlib", "Seaborn"],
    cover: "/images/projects/bitcoin.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/BBCA-Stocks-Bitcoin-Price-Forecasting",
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    category: "Computer vision, transfer learning",
    summary:
      "A ResNet-50 model that classifies 15 disease categories across tomato, potato, and pepper leaves at 93% accuracy, deployed as a web app for real-time prediction.",
    tech: ["Python", "PyTorch", "ResNet-50", "Torchvision", "Flask", "OpenCV"],
    cover: "/images/projects/Plant.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/Plant-Disease-Detection-with-Deployment",
  },
];
