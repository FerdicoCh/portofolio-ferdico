import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BarChart, Cpu, Globe } from "@/components/ui/icons";
import { FACTS, FOCUS_AREAS } from "@/lib/site";

const FOCUS_ICON = { ml: Cpu, data: BarChart, web: Globe } as const;

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="About"
              title={
                <>
                  From notebook to <span className="accent-serif">deployment.</span>
                </>
              }
            />
          </Reveal>

          <div className="lg:col-span-7 lg:pt-10">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink text-pretty sm:text-[1.375rem]">
                I&apos;m an Information Systems undergraduate specializing in machine learning and web
                development, with hands-on experience building end-to-end, AI-powered web applications.
              </p>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-body text-pretty">
                I enjoy taking a problem all the way through: exploring the data, training a predictive
                model, and deploying it into an interactive system with Flask and modern data tools.
                I&apos;m currently looking for internship opportunities as a Machine Learning Engineer,
                Data Scientist, or AI-focused Web Developer — somewhere I can help build scalable,
                real-world solutions.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid gap-x-10 sm:grid-cols-2">
                {FACTS.map((f) => (
                  <div key={f.label} className="border-t border-line py-4">
                    <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.95rem] font-medium text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* What I do */}
        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = FOCUS_ICON[area.key];
            return (
              <li key={area.key}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="group h-full rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_48px_-28px_rgba(11,11,15,0.25)]">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl border border-line bg-surface text-xl text-ink transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent-soft group-hover:text-accent">
                        <Icon />
                      </span>
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-ink">{area.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{area.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
