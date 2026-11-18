// lib/projects.ts
// Tambah project baru cukup dengan nambah object di array PROJECTS.
// - Punya `cover` → tampil sebagai kartu besar bergambar.
// - Tanpa `cover` → tampil sebagai kartu ringkas di bawahnya.
// Gambar taruh di /public/images/projects (nama file case-sensitive di Vercel!).

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  cover?: string;
  /** "contain" buat chart/figure (biar ga kepotong), "cover" buat foto/screenshot. Default: cover */
  coverFit?: "cover" | "contain";
  /** Link repo / demo. Kalau kosong, kartu tidak bisa diklik. */
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "brain-disease-detection",
    title: "Brain Disease Detection",
    category: "Medical imaging, classification",
    summary:
      "A five-person team project for the TSDN data competition that compares six classifiers on 256 brain CT scans to detect aneurysm, cancer, and tumor. A linear SVM reached 98% test accuracy and runs in a Flask web app that accepts regular images or DICOM scans.",
    tech: ["Python", "scikit-learn", "SVM", "TensorFlow / Keras", "Flask", "OpenCV"],
    cover: "/images/projects/Brain.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/Brain-Disease-Detection",
  },
  {
    slug: "bbca-bitcoin-forecasting",
    title: "BBCA Stock & Bitcoin Price Forecasting",
    category: "Time-series forecasting",
    summary:
      "TimesNet models, built with NeuralForecast, that forecast the monthly closing prices of BCA (BBCA) stock and Bitcoin twelve months ahead from Yahoo Finance history, with each forecast charted against the actual price trend.",
    tech: ["Python", "TimesNet", "NeuralForecast", "Pandas", "Matplotlib", "Seaborn"],
    cover: "/images/projects/bitcoin.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/BBCA-Stocks-Bitcoin-Price-Forecasting",
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    category: "Computer vision, transfer learning",
    summary:
      "A ResNet-50 model, pretrained on ImageNet and adapted with transfer learning, that classifies 15 disease and healthy categories of tomato, potato, and pepper leaves from 20,638 images at 96% accuracy. A Flask web app predicts from an uploaded leaf photo and explains the disease.",
    tech: ["Python", "TensorFlow / Keras", "ResNet-50", "Transfer learning", "Flask"],
    cover: "/images/projects/Plant.jpeg",
    coverFit: "contain",
    repo: "https://github.com/FerdicoCh/Plant-Disease-Detection-with-Deployment",
  },
  {
    slug: "cadence",
    title: "Cadence",
    category: "Web and Android app",
    summary:
      "A Rubik's Cube timer and learning app that works in a web browser, on a laptop without internet, and as an Android app. It scans a scrambled cube with the phone camera and shows how to solve it, tracks solve times and daily streaks, and teaches solving methods in English and Bahasa Indonesia.",
    tech: ["TypeScript", "Android", "Automated testing"],
    cover: "/images/projects/cadence.jpg",
  },
  {
    slug: "tourism-travel-pattern-analysis",
    title: "Tourism Travel Pattern Analysis in Indonesia",
    category: "Data visualization, dashboard",
    summary:
      "An interactive Tableau story on domestic travel across Indonesian provinces from 2022 to 2024, using geospatial maps, ranking views, and a Top-N filter, then focusing on West Papua as a low-traffic region with a trend forecast and proposed ways to grow its tourism.",
    tech: ["Tableau", "Calculated Fields", "Parameters", "Table Calculations"],
  },
];
