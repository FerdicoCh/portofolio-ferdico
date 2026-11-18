import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GitHub } from "@/components/ui/icons";
import { ClipReveal, StaggerItem, StaggerList } from "@/components/ui/motion";
import { PROJECTS, type Project } from "@/lib/projects";
import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

const CARD =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300";
const CARD_HOVER = "hover:border-ink/15 hover:shadow-[0_32px_64px_-40px_rgba(11,11,15,0.35)]";

function Title({ project, className }: { project: Project; className?: string }) {
  return (
    <h3 className={cn("font-semibold leading-tight tracking-[-0.03em] text-ink text-balance", className)}>
      {project.repo ? (
        // Link menutupi seluruh kartu
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-['']"
        >
          {project.title}
        </a>
      ) : (
        project.title
      )}
    </h3>
  );
}

function Tech({ items, className }: { items: string[]; className?: string }) {
  return (
    <StaggerList className={cn("flex flex-wrap gap-1.5", className)} delay={0.25}>
      {items.map((t) => (
        <StaggerItem key={t} className="rounded-full bg-surface px-3 py-1 text-[0.8125rem] text-body">
          {t}
        </StaggerItem>
      ))}
    </StaggerList>
  );
}

function RepoLink({ className }: { className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-sm font-medium text-ink", className)}>
      <GitHub className="text-base" />
      View on GitHub
      <ArrowUpRight className="text-base text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
    </p>
  );
}

/** Kartu besar bergambar (project yang punya `cover`). */
function CoverCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={cn(CARD, "p-3", project.repo && CARD_HOVER, featured && "lg:flex-row lg:items-stretch")}>
      <ClipReveal
        delay={0.1}
        className={cn(
          "relative aspect-[16/10] shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-line",
          featured && "lg:aspect-auto lg:min-h-[22rem] lg:w-[58%]"
        )}
      >
        <Image
          src={project.cover!}
          alt=""
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 768px) 100vw, 540px"}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            project.coverFit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"
          )}
        />
      </ClipReveal>

      <div className={cn("flex flex-1 flex-col p-4 pt-6 sm:p-5 sm:pt-7", featured && "lg:justify-center lg:p-9")}>
        <p className="text-sm text-muted">{project.category}</p>
        <Title project={project} className={cn("mt-2", featured ? "text-2xl sm:text-[2rem]" : "text-xl sm:text-2xl")} />
        <p className="mt-3 text-[0.975rem] leading-relaxed text-body text-pretty">{project.summary}</p>
        <Tech items={project.tech} className="mt-5" />
        {project.repo && <RepoLink className={cn("mt-6 pt-1", !featured && "lg:mt-auto lg:pt-6")} />}
      </div>
    </article>
  );
}

/** Kartu ringkas tanpa gambar. */
function CompactCard({ project }: { project: Project }) {
  return (
    <article className={cn(CARD, "p-6 sm:p-8", project.repo && CARD_HOVER)}>
      <p className="text-sm text-muted">{project.category}</p>
      <Title project={project} className="mt-2 text-xl sm:text-2xl" />
      <p className="mt-3 text-[0.975rem] leading-relaxed text-body text-pretty">{project.summary}</p>
      <Tech items={project.tech} className="mt-auto pt-6" />
      {project.repo && <RepoLink className="mt-6" />}
    </article>
  );
}

export default function Projects() {
  const github = SOCIALS.find((s) => s.key === "github");
  const [featured, ...withCover] = PROJECTS.filter((p) => p.cover);
  const compact = PROJECTS.filter((p) => !p.cover);

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
          {featured && (
            <Reveal className="md:col-span-2" y={24}>
              <CoverCard project={featured} featured />
            </Reveal>
          )}
          {withCover.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.07} y={24} className="h-full">
              <CoverCard project={p} />
            </Reveal>
          ))}
          {compact.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 0.07}
              y={24}
              // Kartu terakhir yang sendirian di barisnya dibuat selebar penuh.
              className={compact.length % 2 === 1 && i === compact.length - 1 ? "h-full md:col-span-2" : "h-full"}
            >
              <CompactCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
