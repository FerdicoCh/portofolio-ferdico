"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Download } from "@/components/ui/icons";

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
      setScrolled(window.scrollY > 8);
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
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-md transition-colors duration-200",
        scrolled || open ? "border-line" : "border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-[0.95rem] font-semibold tracking-tight text-ink"
        >
          {SITE.name}
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "text-sm transition-colors duration-150",
                active === id ? "font-medium text-ink" : "text-muted hover:text-ink"
              )}
            >
              {label}
            </a>
          ))}
          <a
            href={SITE.resume}
            download
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
          >
            Resume
            <Download className="text-[0.9rem]" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 h-10 px-2 text-sm font-medium text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-line md:hidden">
          <ul className="container-page py-2">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn("block py-3.5 text-base", active === id ? "font-medium text-ink" : "text-body")}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.resume}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-3.5 text-base font-medium text-ink"
              >
                Download resume
                <Download className="text-base" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
