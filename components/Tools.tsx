"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Tool = { name: string; icon: string };

const TOOLS: Tool[] = [
  { name: "Jupyter Notebook", icon: "/images/tools/jupyter.svg" },
  { name: "Visual Studio Code", icon: "/images/tools/vscode.svg" },
  { name: "PyCharm", icon: "/images/tools/pycharm.svg" },
  { name: "Tableau", icon: "/images/tools/tableau.svg" },
  { name: "Power BI", icon: "/images/tools/powerbi.svg" },
  { name: "SAS Visual Analytics", icon: "/images/tools/sas.svg" },
  { name: "Google Colab", icon: "/images/tools/colab.svg" },
  { name: "GitHub", icon: "/images/tools/github.svg" },
];

export default function Tools() {
  return (
    <section className="container mx-auto max-w-[1240px] px-6 md:px-10 py-16">
      <h3 className="text-xl md:text-2xl font-semibold mb-6">
        Tools <span className="text-[var(--accent)]">I Use</span>
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            whileHover={{ y: -3 }}
            className="group rounded-xl border border-white/10 bg-[var(--elevated)] p-6 flex items-center justify-center h-32"
            title={t.name}
            aria-label={t.name}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src={t.icon}
                  alt={t.name}
                  fill
                  sizes="48px"
                  className="object-contain grayscale group-hover:grayscale-0 transition duration-200"
                />
              </div>
              <span className="text-sm text-[var(--subtle)] group-hover:text-[var(--text)] transition">
                {t.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
