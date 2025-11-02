"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Tools from "../components/Tools";
import Skills from "../components/Skills";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  thumb: string;
  repo: string; // <- penting buat link GitHub
};

const PROJECTS: Project[] = [
  {
    title: "Brain Tumor Detection Website",
    blurb:
      "CNN + SVM untuk deteksi tumor otak, aneurysm, dan cancer. 98% akurasi. Flask + PyTorch.",
    tags: ["Python", "PyTorch", "Flask", "CNN", "SVM"],
    thumb: "/images/projects/Brain.jpeg",
    repo: "https://github.com/FerdicoCh/Brain-Disease-Detection",
  },
  {
    title: "Bitcoin and Stock Price Forecasting (BBCA)",
    blurb:
      "TimesNet untuk prediksi BTC & BBCA. Bandingkan dengan LSTM, evaluasi MAE/MAPE.",
    tags: ["Python", "TimesNet", "Pandas", "Matplotlib"],
    thumb: "/images/projects/bitcoin.jpeg",
    repo: "https://github.com/FerdicoCh/BBCA-Stocks-Bitcoin-Price-Forecasting",
  },
  {
    title: "Plant Disease Detection",
    blurb:
      "Transfer learning ResNet-50. Augmentasi kuat, label smoothing. F1 tinggi di dataset seimbang.",
    tags: ["PyTorch", "Deep Learning", "ResNet50", "Torchvision"],
    thumb: "/images/projects/plant.jpeg",
    repo: "https://github.com/FerdicoCh/Plant-Disease-Detection-with-Deployment",
  },
];

export default function Page() {
  const reduce = useReducedMotion();

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)]">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0B0D] via-[#0F1114] to-[#0B0B0D] opacity-90" />

      {/* ===== HERO ===== */}
      <section
        id="home"
        // ✅ anchor offset + full device viewport height (mobile)
        className="scroll-mt-24 min-h-[100dvh] container mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 md:px-10 pt-28 md:pt-32"
      >
        <motion.div
          className="col-span-12 md:col-span-7 flex flex-col justify-center gap-6 md:pr-6 lg:pr-10"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="leading-[1.08]">
            <span className="block text-[clamp(2rem,4.8vw,4rem)] font-bold text-[var(--text)]">
              Hi, I&apos;m
            </span>
            <span className="block text-[clamp(2.2rem,5.2vw,4.2rem)] font-bold text-[var(--accent)]">
              Ferdico Chandra
            </span>
          </h1>

          <p className="max-w-prose text-base md:text-lg text-[var(--subtle)]">
            Information Systems undergraduate at Universitas Multimedia Nusantara who loves data.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              className="rounded-full bg-[var(--accent)]/90 px-5 py-3 text-black font-medium hover:bg-[var(--accent)] transition shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              aria-label="Jump to projects section"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="rounded-full bg-[var(--elevated)] px-5 py-3 font-medium ring-1 ring-white/10 hover:ring-[var(--accent)]/60 transition active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              aria-label="Download CV"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-5 flex items-center justify-center"
          initial={reduce ? undefined : { opacity: 0, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="w-[240px] h-[340px] sm:w-[280px] sm:h-[400px] lg:w-[340px] lg:h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <Image
              src="/images/ppaku.jpg"
              alt="Ferdico Chandra"
              width={680}
              height={900}
              priority
              className="h-full w-full object-cover"
              // ✅ kirim resolusi pas buat mobile/tablet/desktop
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 340px"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section
        id="projects"
        className="scroll-mt-24 container mx-auto max-w-[1240px] px-6 md:px-10 pt-28 md:pt-32"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Featured <span className="text-[var(--accent)]">Projects</span>
        </h2>

        {/* ✅ hemat render di mobile */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 [content-visibility:auto] [contain-intrinsic-size:600px]">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repo: ${p.title}`}
              className="group rounded-2xl border border-white/10 bg-[var(--elevated)]/40 p-5 ring-1 ring-transparent hover:ring-[var(--accent)]/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-[0.99]"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  // ✅ responsive sizes untuk card grid
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] tracking-wide ring-1 ring-white/15">
                  GitHub →
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--subtle)]">{p.blurb}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== SKILLS & TOOLS ===== */}
      <Skills />
      <Tools />

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="scroll-mt-24 min-h-[70vh] container mx-auto max-w-[1240px] px-6 md:px-10 pt-28 md:pt-32 pb-28"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Contact <span className="text-[var(--accent)]">Me</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-12 mt-8">
          <div className="md:col-span-7 space-y-4">
            <p className="text-[var(--subtle)] leading-relaxed">
              Interested in collaborating, discussing a project, or just want to talk about data and tech?
              I’m always open to new opportunities and meaningful conversations. Feel free to reach out
              through any of the platforms below.
            </p>

            <div className="flex gap-4 mt-4">
              {[
                { icon: "/images/social/instagram.svg", href: "https://instagram.com/ferdico.ch" },
                { icon: "/images/social/linkedin.svg", href: "https://linkedin.com/in/ferdico-chandra" },
                { icon: "/images/social/gmail.svg", href: "mailto:ferdicocha@email.com" },
                { icon: "/images/social/github.svg", href: "https://github.com/FerdicoCh" },
              ].map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  className="h-11 w-11 flex items-center justify-center bg-[var(--elevated)] rounded-xl ring-1 ring-white/10 hover:ring-[var(--accent)] transition active:scale-95"
                  aria-label={s.href}
                >
                  <Image src={s.icon} alt="icon" width={24} height={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
