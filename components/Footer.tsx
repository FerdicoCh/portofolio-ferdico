import { SITE } from "@/lib/site";
import { ArrowUp } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex items-center justify-between gap-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-ink">
          Back to top
          <ArrowUp className="text-[0.9rem]" />
        </a>
      </div>
    </footer>
  );
}
