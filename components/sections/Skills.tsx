import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { LANGUAGES, SKILL_GROUPS, TOOLS } from "@/lib/site";
import { cn } from "@/lib/utils";

const CARD = "h-full rounded-3xl border border-line bg-white p-6 sm:p-7";
const CARD_TITLE = "text-lg font-semibold tracking-[-0.02em] text-ink";
const CHIP = "rounded-full bg-surface px-3.5 py-1.5 text-sm text-ink";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader title="Skills" />

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <li key={group.title}>
              <Reveal delay={(i % 2) * 0.07} className="h-full">
                <div className={CARD}>
                  <h3 className={CARD_TITLE}>{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className={CHIP}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}

          {/* Tools */}
          <li className="md:col-span-2">
            <Reveal className="h-full">
              <div className={cn(CARD, "grid gap-8 lg:grid-cols-12 lg:gap-10")}>
                <div className="lg:col-span-8">
                  <h3 className={CARD_TITLE}>Tools</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {TOOLS.map((tool) => (
                      <li
                        key={tool.name}
                        className="inline-flex items-center gap-2.5 rounded-full bg-surface py-1.5 pl-2.5 pr-4 text-sm text-ink"
                      >
                        <span className="relative size-5 shrink-0">
                          <Image
                            src={tool.icon}
                            alt=""
                            fill
                            sizes="20px"
                            className={cn("object-contain", "mono" in tool && tool.mono && "brightness-0")}
                          />
                        </span>
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
                  <h3 className={CARD_TITLE}>Languages</h3>
                  <dl className="mt-5 space-y-3">
                    {LANGUAGES.map((l) => (
                      <div key={l.name} className="flex items-baseline justify-between gap-4">
                        <dt className="text-ink">{l.name}</dt>
                        <dd className="text-sm text-muted">{l.level}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
