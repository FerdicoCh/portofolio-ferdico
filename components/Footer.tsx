import { SITE, SOCIALS } from "@/lib/site";
import { ArrowUp } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-5 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {SOCIALS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors duration-150 hover:text-accent"
          >
            Back to top
            <ArrowUp className="text-[0.9rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
