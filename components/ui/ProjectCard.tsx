// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111116] p-3"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={p.cover}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[var(--text)] text-base font-semibold">{p.title}</h3>
          {p.kpi && (
            <span className="rounded-full bg-[var(--accent)]/15 px-2 py-0.5 text-xs text-[var(--accent)]">
              {p.kpi}
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--subtle)]">{p.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map(t => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-[#1A1A22] px-2 py-0.5 text-[11px] text-[var(--text)]/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}
