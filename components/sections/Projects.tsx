import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GitHub } from "@/components/ui/icons";
import { PROJECTS, type Project } from "@/lib/projects";
import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      {/* Cover */}
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — open GitHub repository`}
        className={cn("block rounded-[1.75rem] lg:col-span-7", flip && "lg:order-2")}
      >
        <div className="rounded-[1.75rem] border border-line bg-surface p-2.5 transition-shadow duration-500 group-hover:shadow-[0_36px_64px_-40px_rgba(11,11,15,0.35)] sm:p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.2rem] bg-white ring-1 ring-ink/5">
            <Image
              src={project.cover}
              alt={`${project.title} — sample output`}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className={cn(
                "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                project.coverFit === "contain" ? "object-contain p-2 sm:p-3" : "object-cover"
              )}
            />
          </div>
        </div>
      </a>

      {/* Detail */}
      <div className="lg:col-span-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-accent">{number}</span>
          <span className="mx-2 text-line">/</span>
          {project.category}
        </p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink text-balance sm:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-4 text-[1.0125rem] leading-relaxed text-body text-pretty">{project.summary}</p>

        <dl className="mt-6 flex gap-10 border-y border-line py-5">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse gap-1">
              <dt className="text-[0.8125rem] text-muted">{m.label}</dt>
              <dd className="text-2xl font-semibold leading-none tracking-[-0.03em] text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line bg-white px-3 py-1 text-[0.8125rem] text-body"
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          <GitHub className="text-base" />
          <span className="underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-200 group-hover/link:decoration-ink">
            View on GitHub
          </span>
          <ArrowUpRight className="text-base text-muted transition-all duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-ink" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const github = SOCIALS.find((s) => s.key === "github");

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Selected Projects"
              title={
                <>
                  Models that made it past the <span className="accent-serif">notebook.</span>
                </>
              }
            />
          </Reveal>
          {github && (
            <Reveal delay={0.08} className="shrink-0">
              <Button asChild variant="secondary">
                <a href={github.href} target="_blank" rel="noopener noreferrer">
                  <GitHub className="text-base" />
                  More on GitHub
                  <ArrowUpRight className="text-base text-muted transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
            </Reveal>
          )}
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} y={28}>
              <ProjectRow project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
