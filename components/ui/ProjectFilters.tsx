// components/ProjectFilters.tsx
"use client";

import * as React from "react";

type ProjectType = "all" | "ML" | "Analytics" | "App";

type Props = {
  type: ProjectType;
  setType: (v: ProjectType) => void;
  tech: string | "all";
  setTech: (v: string | "all") => void;
  techPool: string[];
};

export default function ProjectFilters({ type, setType, tech, setTech, techPool }: Props) {
  const TYPES: ProjectType[] = ["all", "ML", "Analytics", "App"];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* Filter by type */}
      <div className="flex flex-wrap gap-2">
        {TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              type === t
                ? "bg-[var(--accent)] text-black"
                : "border border-white/10 bg-[#1A1A22] text-[var(--text)] hover:bg-[#20202A]"
            }`}
            aria-pressed={type === t}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filter by tech */}
      <div className="flex items-center gap-2">
        <label htmlFor="tech-select" className="text-xs text-[var(--subtle)]">
          Tech:
        </label>
        <select
          id="tech-select"
          value={tech}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            // validasi sederhana supaya sesuai union "all" | string
            setTech(value === "all" ? "all" : value);
          }}
          className="rounded-md border border-white/10 bg-[#111116] px-3 py-1 text-sm outline-none"
        >
          <option value="all">All</option>
          {techPool.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
