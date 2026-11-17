"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Kumpulan animasi kecil yang dipakai di semua section.
// Semua transform otomatis mati kalau user set "reduce motion" (lihat Providers).

export const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" } as const;

/* ------------------------------------------------------------------ */
/* MaskText: kata/huruf naik dari balik garis (mask).                  */
/* ------------------------------------------------------------------ */

type MaskTextProps = {
  text: string;
  className?: string;
  /** Pecah per kata atau per huruf */
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  duration?: number;
  /** true = jalan saat halaman dibuka, bukan saat masuk viewport */
  immediate?: boolean;
};

export function MaskText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger,
  duration = 0.9,
  immediate = false,
}: MaskTextProps) {
  const parts = by === "char" ? Array.from(text) : text.split(" ");
  const step = stagger ?? (by === "char" ? 0.035 : 0.07);
  const trigger = immediate ? { animate: { y: "0%" } } : { whileInView: { y: "0%" }, viewport: VIEWPORT };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {parts.map((part, i) => (
          <span key={i}>
            {/* overflow-y: clip → potong atas-bawah saja, glyph miring/rapat tidak terpotong samping */}
            <span className="-mb-[0.12em] inline-block overflow-x-visible overflow-y-clip pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: "110%" }}
                {...trigger}
                transition={{ duration, delay: delay + i * step, ease: EASE }}
              >
                {part === " " ? " " : part}
              </motion.span>
            </span>
            {by === "word" && i < parts.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* DrawLine: garis yang "tergambar" dari kiri ke kanan.                */
/* ------------------------------------------------------------------ */

export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn("h-px origin-left bg-line", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.3, delay, ease: EASE }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Stagger: anak-anaknya muncul satu per satu.                         */
/* ------------------------------------------------------------------ */

const staggerParent = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  immediate?: boolean;
};

function staggerTrigger(immediate: boolean) {
  return immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: VIEWPORT };
}

export function StaggerList({ children, className, stagger = 0.035, delay = 0, immediate = false }: StaggerProps) {
  return (
    <motion.ul className={className} variants={staggerParent(stagger, delay)} {...staggerTrigger(immediate)}>
      {children}
    </motion.ul>
  );
}

export function StaggerGroup({ children, className, stagger = 0.08, delay = 0, immediate = false }: StaggerProps) {
  return (
    <motion.div className={className} variants={staggerParent(stagger, delay)} {...staggerTrigger(immediate)}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  as = "li",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag className={className} variants={staggerChild}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* ClipReveal: gambar terbuka dari bawah ke atas + zoom-out halus.     */
/* ------------------------------------------------------------------ */

export function ClipReveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const shown = { clipPath: "inset(0% 0% 0% 0%)" };
  const trigger = immediate ? { animate: shown } : { whileInView: shown, viewport: VIEWPORT };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      {...trigger}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* HeroPortrait: reveal saat load + parallax tipis saat scroll.        */
/* ------------------------------------------------------------------ */

export function HeroPortrait({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <ClipReveal immediate delay={0.25} className={className}>
      <div ref={ref} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
          initial={{ scale: 1.25 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 1.6, delay: 0.25, ease: EASE }}
        >
          {children}
        </motion.div>
      </div>
    </ClipReveal>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollWords: kalimat besar yang "menyala" kata per kata saat scroll. */
/* ------------------------------------------------------------------ */

function ScrollWord({
  word,
  progress,
  range,
  className,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span className={className} style={{ opacity }}>
      {word}
    </motion.span>
  );
}

export function ScrollWords({
  segments,
  className,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  const words = segments.flatMap((s) => s.text.split(" ").filter(Boolean).map((w) => ({ w, c: s.className })));

  return (
    <p ref={ref} className={className}>
      {words.map(({ w, c }, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            {reduce ? (
              <span className={c}>{w}</span>
            ) : (
              <ScrollWord word={w} progress={scrollYProgress} range={[start, end]} className={c} />
            )}
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp: angka naik dari 0 saat terlihat.                           */
/* ------------------------------------------------------------------ */

export function CountUp({ value, decimals = 2, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => (el.textContent = v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals]);

  // Render nilai akhir (SSR / tanpa JS tetap benar).
  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress: garis tipis di paling atas layar.                   */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
