import { SITE, SOCIALS } from "@/lib/site";
import { ArrowUp } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-ink">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {SOCIALS.filter((s) => s.key !== "email").map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="text-[0.95rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
