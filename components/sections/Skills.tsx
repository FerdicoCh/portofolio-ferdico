import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading, { Eyebrow } from "@/components/ui/SectionHeading";
import { BarChart, Code, Cpu, Globe } from "@/components/ui/icons";
import { SKILL_GROUPS, TOOLS } from "@/lib/site";
import { cn } from "@/lib/utils";

const GROUP_ICON = { code: Code, ml: Cpu, viz: BarChart, web: Globe } as const;

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Skills & Tools"
            title={
              <>
                A toolkit for the whole <span className="accent-serif">pipeline.</span>
              </>
            }
            description="From cleaning the first CSV to putting a trained model behind a web interface."
          />
        </Reveal>

        {/* Skill groups */}
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = GROUP_ICON[group.key];
            return (
              <li key={group.key}>
                <Reveal delay={(i % 2) * 0.07} className="h-full">
                  <div className="h-full rounded-3xl border border-line bg-white p-7 sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-xl text-ink">
                        <Icon />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{group.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{group.blurb}</p>
                      </div>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Tools */}
        <Reveal className="mt-16">
          <Eyebrow>Tools I work with</Eyebrow>
        </Reveal>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <li key={tool.name}>
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-line bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-[0_16px_32px_-20px_rgba(11,11,15,0.25)]">
                  <span className="relative size-8 shrink-0">
                    <Image
                      src={tool.icon}
                      alt=""
                      fill
                      sizes="32px"
                      className={cn(
                        "object-contain transition duration-300",
                        "mono" in tool && tool.mono
                          ? "opacity-80 brightness-0 group-hover:opacity-100"
                          : "opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                      )}
                    />
                  </span>
                  <span className="text-sm font-medium leading-snug text-ink">{tool.name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
