"use client";

import { motion } from "framer-motion";

type Skill = { name: string; desc: string };

const SKILLS: Skill[] = [
  { name: "Data Science", desc: "End-to-end pipeline: EDA → feature eng → training → eval → deploy (PyTorch, scikit-learn)." },
  { name: "Data Visualization", desc: "Matplotlib, Seaborn, Power BI, SAS Visual Analytics, Tableau – from quick EDA plots to full dashboards." },
  { name: "Web Development", desc: "Basic understanding of front-end (HTML, CSS, PHP, JS) and back-end routing with frameworks like Flask, Laravel, and Next.js." },
  { name: "Python", desc: "Scripting, data wrangling, API, CLI tooling." },
  { name: "TensorFlow & Keras", desc: "Design, train, and optimize neural networks for deep learning projects." },
  { name: "Pandas & NumPy", desc: "Efficient data manipulation, preprocessing, and analysis for ML pipelines" },
  { name: "SQL", desc: "Query analitik, indexing seperlunya, view/materialized view." },
  { name: "Java", desc: "Object-oriented programming and backend development basics." },
  { name: "C#", desc: "Object-oriented visual programming with .NET framework." },
  { name: "Streamlit", desc: "Quick build & deploy interactive Python apps for data science and dashboards." },
  { name: "Flask", desc: "Fast Python microframework for model deployment and backend services." },
];

export default function Skills() {
  return (
    <section
      id="skills"
      // ✅ anchor offset; ga ubah layout yang sudah ada
      className="scroll-mt-24 container mx-auto max-w-[1240px] px-6 md:px-10 py-20"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        My <span className="text-[var(--accent)]">Skills</span>
      </h2>

      {/* ✅ hemat render di mobile */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 [content-visibility:auto] [contain-intrinsic-size:500px]">
        {SKILLS.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-[var(--elevated)] p-5"
          >
            <h3 className="font-semibold text-lg">{s.name}</h3>
            <p className="text-sm text-[var(--subtle)] mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
