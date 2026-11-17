"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Close, Menu } from "@/components/ui/icons";
import { EASE, ScrollProgress } from "@/components/ui/motion";

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy: section terakhir yang top-nya sudah lewat ~38% tinggi viewport.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.38;
      let current = "";
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const doc = document.documentElement;
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        current = NAV_LINKS[NAV_LINKS.length - 1].id;
      }
      setActive(current);
      setScrolled(window.scrollY > 12);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Tutup menu mobile: Escape / layar melebar ke desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))]"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
    >
      <ScrollProgress />
      <div className="container-page">
        <nav
          aria-label="Primary"
          className={cn(
            "ml-auto flex h-12 w-fit items-center rounded-full border p-1 transition-[background-color,border-color,box-shadow] duration-300 lg:mx-auto",
            scrolled || open
              ? "border-line bg-white/80 shadow-[0_1px_2px_rgba(11,11,15,0.04),0_12px_32px_-16px_rgba(11,11,15,0.18)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map(({ label, id }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-ink/[0.06]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-xl text-ink transition-colors hover:bg-ink/[0.06] lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 origin-top rounded-[1.75rem] border border-line bg-white/95 p-2 shadow-[0_24px_48px_-20px_rgba(11,11,15,0.25)] backdrop-blur-xl lg:hidden"
            >
              <ul>
                {NAV_LINKS.map(({ label, id }, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                        active === id ? "bg-surface text-ink" : "text-body hover:bg-surface hover:text-ink"
                      )}
                    >
                      {label}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
