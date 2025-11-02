// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  type: "ML" | "Analytics" | "App";
  tech: string[];
  kpi?: string;
  cover: string; // path relatif ke /public, contoh: "/thumbs/bbca-timeseries.jpg"
};

export const PROJECTS: Project[] = [
  {
    slug: "bbca-timesnet",
    title: "Stock Forecasting (BBCA) with TimesNet",
    summary: "Multistep time-series forecasting with robust feature scaling and cross-val.",
    type: "ML",
    tech: ["PyTorch", "TimesNet", "Pandas"],
    kpi: "+7.2% sMAPE vs ARIMA",
    cover: "/thumbs/bbca.jpg",
  },
  {
    slug: "btc-prediction",
    title: "BTC Price Prediction",
    summary: "Sequence modeling with attention, data pipeline streaming direct from API.",
    type: "ML",
    tech: ["PyTorch", "Attention", "NumPy"],
    kpi: "MAE ↓ 11.4%",
    cover: "/thumbs/btc.jpg",
  },
  {
    slug: "plant-disease-resnet",
    title: "Plant Disease Classifier (ResNet)",
    summary: "Transfer learning + fine-tune scheduler; grad-cam explainability.",
    type: "ML",
    tech: ["ResNet", "Torchvision"],
    kpi: "F1 0.93",
    cover: "/thumbs/plant.jpg",
  },
  {
    slug: "raketinaja-analytics",
    title: "RaketinAja: Funnel + Cohort",
    summary: "End-to-end analytics: GA4 export → dbt models → dashboard KPI.",
    type: "Analytics",
    tech: ["SQL", "dbt", "BigQuery"],
    kpi: "CAC ↓ 18%",
    cover: "/thumbs/analytics.jpg",
  },
  {
    slug: "cv-website",
    title: "Portfolio Website",
    summary: "Next.js + Tailwind + Framer Motion with a11y-first navigation.",
    type: "App",
    tech: ["Next.js", "Tailwind", "Framer"],
    kpi: "Lighthouse 98/100",
    cover: "/thumbs/portfolio.jpg",
  },
];
