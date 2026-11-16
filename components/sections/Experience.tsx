import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap } from "@/components/ui/icons";
import { TIMELINE } from "@/lib/site";

const KIND_ICON = { Experience: Briefcase, Education: GraduationCap } as const;

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Experience & Education"
            title={
              <>
                Learning by building — and by <span className="accent-serif">teaching.</span>
              </>
            }
          />
        </Reveal>

        <ol className="mt-14 space-y-5">
          {TIMELINE.map((item, i) => {
            const Icon = KIND_ICON[item.kind];
            return (
              <li key={item.title}>
                <Reveal delay={i * 0.08}>
                  <article className="grid gap-6 rounded-3xl border border-line bg-white p-7 sm:p-9 md:grid-cols-12 md:gap-8">
                    {/* Meta */}
                    <div className="md:col-span-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-2 pr-3 text-xs font-medium text-body">
                        <Icon className="text-sm text-accent" />
                        {item.kind}
                      </span>
                      <p className="mt-4 text-[0.95rem] font-medium text-ink">{item.org}</p>
                      {item.period && (
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                          {item.period}
                        </p>
                      )}
                    </div>

                    {/* Detail */}
                    <div className="md:col-span-8">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                        {item.title}
                      </h3>

                      {item.bullets && (
                        <ul className="mt-5 space-y-2.5">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="relative pl-5 text-[0.95rem] leading-relaxed text-body before:absolute before:left-0 before:top-[0.68em] before:size-1.5 before:rounded-full before:bg-accent/70"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.highlights && (
                        <dl className="mt-6 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                          {item.highlights.map((h) => (
                            <div key={h.label} className="flex flex-col-reverse gap-1 bg-white px-5 py-4">
                              <dt className="text-xs text-muted">{h.label}</dt>
                              <dd className="text-xl font-semibold tracking-[-0.03em] text-ink">{h.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {item.chips && (
                        <div className="mt-6">
                          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                            Relevant coursework
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {item.chips.map((c) => (
                              <li
                                key={c}
                                className="rounded-full border border-line bg-surface px-3 py-1 text-[0.8125rem] text-body"
                              >
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
