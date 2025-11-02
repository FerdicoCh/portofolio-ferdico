"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type LinkItem = { label: string; href: `#${string}` };

const LINKS: LinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const BOTTOM_OFFSET = 4; // jarak underline dari bawah teks
const norm = (s: string) => s.trim().toLowerCase() as `#${string}`;

export default function Nav() {
  const reduce = useReducedMotion();

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const spanRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [active, setActive] = useState<`#${string}`>("#home");
  const [underline, setUnderline] = useState({ x: 0, w: 0 });

  // ===== helpers
  const computeUnderline = useCallback(() => {
    const wrap = wrapRef.current;
    const span = spanRefs.current[active];
    if (!wrap || !span) return;
    const wb = wrap.getBoundingClientRect();
    const sb = span.getBoundingClientRect();
    setUnderline({ x: sb.left - wb.left, w: sb.width });
  }, [active]);

  const setSpanRef = useCallback(
    (rawKey: string) => (el: HTMLSpanElement | null) => {
      spanRefs.current[norm(rawKey)] = el;
    },
    []
  );

  const smoothJump = (href: `#${string}`) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  // ===== click to scroll
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, rawHref: string) => {
    e.preventDefault();
    const href = norm(rawHref);
    smoothJump(href);
    setActive(href);
  };

  // ===== scroll-spy berbasis pusat viewport (anti kebalik)
  useEffect(() => {
    const ids: `#${string}`[] = ["#home", "#projects", "#skills", "#contact"];
    const getSections = () =>
      ids
        .map((id) => {
          const el = document.querySelector(id) as HTMLElement | null;
          return el ? { id, el } : null;
        })
        .filter(Boolean) as { id: `#${string}`; el: HTMLElement }[];

    let sections = getSections();
    let ticking = false;

    const recalcSections = () => {
      sections = getSections();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const center = window.scrollY + window.innerHeight / 2;

        // fallback very top & very bottom
        const doc = document.documentElement;
        if (window.scrollY < 10) {
          setActive("#home");
          ticking = false;
          return;
        }
        if (window.innerHeight + window.scrollY >= (doc.scrollHeight || document.body.scrollHeight) - 2) {
          setActive("#contact");
          ticking = false;
          return;
        }

        // pilih section dengan jarak pusat terdekat
        let best: { id: `#${string}`; dist: number } | null = null;
        for (const s of sections) {
          const rect = s.el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const mid = top + rect.height / 2;
          const dist = Math.abs(mid - center);
          if (!best || dist < best.dist) best = { id: s.id, dist };
        }
        if (best && best.id !== active) setActive(best.id);

        ticking = false;
      });
    };

    const onResize = () => {
      recalcSections();
      requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    recalcSections();
    onScroll(); // initial detect

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // underline follow target span
  useLayoutEffect(() => {
    const r = requestAnimationFrame(computeUnderline);
    return () => cancelAnimationFrame(r);
  }, [computeUnderline]);

  // recompute saat resize & font ready & first mount (double-pass biar stabil)
  useEffect(() => {
    const onResize = () => computeUnderline();
    window.addEventListener("resize", onResize);

   
    document.fonts?.ready?.then?.(() => {
      requestAnimationFrame(() => {
        computeUnderline();
        setTimeout(computeUnderline, 60);
      });
    });

    requestAnimationFrame(() => {
      computeUnderline();
      setTimeout(computeUnderline, 60);
    });

    return () => window.removeEventListener("resize", onResize);
  }, [computeUnderline]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div
          ref={wrapRef}
          className="relative mx-auto flex h-14 items-center justify-center gap-8 md:gap-10"
        >
          {LINKS.map(({ label, href }) => {
            const isActive = active === norm(href);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => onClick(e, href)}
                className={[
                  "relative inline-flex items-center justify-center px-1 text-sm md:text-base transition-colors",
                  isActive ? "text-[var(--text)]" : "text-[var(--subtle)] hover:text-[var(--text)]",
                ].join(" ")}
              >
                <span ref={setSpanRef(href)} className="inline-block px-0.5">
                  {label}
                </span>
              </a>
            );
          })}

          {!reduce && (
            <motion.div
              className="pointer-events-none absolute left-0 h-[2px] rounded-full bg-[var(--accent)] will-change-transform"
              style={{ bottom: BOTTOM_OFFSET }}
              initial={false}
              animate={{ x: underline.x, width: underline.w }}
              transition={{ type: "spring", stiffness: 520, damping: 36, mass: 0.45 }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
