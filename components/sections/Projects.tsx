import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GitHub } from "@/components/ui/icons";
import { PROJECTS, type Project } from "@/lib/projects";
import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-3 transition-all duration-300 hover:border-ink/15 hover:shadow-[0_32px_64px_-40px_rgba(11,11,15,0.35)]",
        featured && "lg:flex-row lg:items-stretch"
      )}
    >
      {/* Cover */}
      <div
        className={cn(
          "relative aspect-[16/10] shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-line",
          featured && "lg:aspect-auto lg:min-h-[22rem] lg:w-[58%]"
        )}
      >
        <Image
          src={project.cover}
          alt=""
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 768px) 100vw, 540px"}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            project.coverFit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"
          )}
        />
      </div>

      {/* Detail */}
      <div className={cn("flex flex-1 flex-col p-4 pt-6 sm:p-5 sm:pt-7", featured && "lg:justify-center lg:p-9")}>
        <p className="text-sm text-muted">{project.category}</p>
        <h3
          className={cn(
            "mt-2 font-semibold leading-tight tracking-[-0.03em] text-ink text-balance",
            featured ? "text-2xl sm:text-[2rem]" : "text-xl sm:text-2xl"
          )}
        >
          {/* Link menutupi seluruh kartu */}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </a>
        </h3>
        <p className="mt-3 text-[0.975rem] leading-relaxed text-body text-pretty">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-surface px-3 py-1 text-[0.8125rem] text-body">
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-medium text-ink lg:mt-auto lg:pt-6">
          <GitHub className="text-base" />
          View on GitHub
          <ArrowUpRight className="text-base text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  const github = SOCIALS.find((s) => s.key === "github");
  const [first, ...rest] = PROJECTS;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader title="Projects">
          {github && (
            <Button asChild variant="secondary">
              <a href={github.href} target="_blank" rel="noopener noreferrer">
                <GitHub className="text-base" />
                More on GitHub
                <ArrowUpRight className="text-base text-muted transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            </Button>
          )}
        </SectionHeader>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {first && (
            <Reveal className="md:col-span-2" y={24}>
              <ProjectCard project={first} featured />
            </Reveal>
          )}
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.07} y={24} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
