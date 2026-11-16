import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDUCATION, EXPERIENCE, type ExperienceItem } from "@/lib/site";

function LogoTile({ item }: { item: ExperienceItem }) {
  return (
    <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-white sm:size-16">
      {item.logo ? (
        <Image
          src={item.logo}
          alt={`${item.org} logo`}
          fill
          sizes="64px"
          className="object-contain p-2.5"
        />
      ) : (
        <span className="text-[0.8125rem] font-semibold tracking-tight text-body">{item.monogram}</span>
      )}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader title="Experience" />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Work */}
          <ol className="space-y-4 lg:col-span-8">
            {EXPERIENCE.map((item, i) => (
              <li key={`${item.org}-${item.title}`}>
                <Reveal delay={i * 0.06}>
                  <article className="flex gap-4 rounded-3xl border border-line bg-white p-5 sm:gap-6 sm:p-7">
                    <LogoTile item={item} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
                      </div>
                      <p className="mt-0.5 text-body">
                        {item.org}
                        {item.orgNote && <span className="text-muted"> · {item.orgNote}</span>}
                      </p>

                      {item.bullets && (
                        <ul className="mt-5 space-y-2.5">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="relative pl-5 text-[0.95rem] leading-relaxed text-body before:absolute before:left-0 before:top-[0.68em] before:size-1.5 before:rounded-full before:bg-ink/25"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Education */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <aside
              id="education"
              aria-label="Education"
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 lg:sticky lg:top-28"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">Education</p>
                <span className="relative size-12 shrink-0 overflow-hidden rounded-2xl border border-line bg-white">
                  <Image
                    src={EDUCATION.logo}
                    alt={`${EDUCATION.school} logo`}
                    fill
                    sizes="48px"
                    className="object-contain p-2"
                  />
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                {EDUCATION.degree}
              </h3>
              <p className="mt-1 text-body">{EDUCATION.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">{EDUCATION.period}</p>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-muted">Cumulative GPA</p>
                <p className="mt-1 text-[2.75rem] font-semibold leading-none tracking-[-0.05em] text-ink">
                  {EDUCATION.gpa}
                  <span className="ml-1 text-lg font-medium tracking-normal text-muted">
                    / {EDUCATION.gpaScale}
                  </span>
                </p>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-muted">Relevant coursework</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {EDUCATION.coursework.map((c) => (
                    <li key={c} className="rounded-full bg-surface px-3 py-1 text-[0.8125rem] text-body">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
