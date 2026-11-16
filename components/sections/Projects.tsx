import Image from "next/image";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/icons";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {PROJECTS.map((p) => (
          <li
            key={p.slug}
            className="grid gap-x-8 gap-y-5 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]"
          >
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="block self-start overflow-hidden rounded-md border border-line bg-white"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 272px"
                  className={p.coverFit === "contain" ? "object-contain p-2" : "object-cover"}
                />
              </div>
            </a>

            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("link inline-flex items-baseline gap-1.5")}
                >
                  {p.title}
                  <ArrowUpRight className="translate-y-0.5 text-base text-muted" />
                </a>
              </h3>
              <p className="mt-0.5 text-sm text-muted">{p.category}</p>
              <p className="mt-3 max-w-[38rem] text-[0.975rem] leading-relaxed text-body text-pretty">
                {p.summary}
              </p>
              <p className="mt-4 font-mono text-[0.8125rem] leading-relaxed text-muted">
                {p.tech.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
