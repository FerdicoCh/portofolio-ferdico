import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { BarChart, Cpu, Globe } from "@/components/ui/icons";
import { ScrollWords } from "@/components/ui/motion";
import { FOCUS_AREAS } from "@/lib/site";

const FOCUS_ICON = { ai: Cpu, data: BarChart, web: Globe } as const;

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader title="About" />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ScrollWords
            className="text-[clamp(1.5rem,2.7vw,2.125rem)] leading-[1.22] tracking-[-0.03em] text-ink text-pretty lg:col-span-7"
            segments={[
              {
                text: "I'm an Information Systems undergraduate focused on artificial intelligence, data analysis, and web development.",
              },
              { text: "Most of my work sits where those three meet.", className: "text-muted" },
            ]}
          />
          <Reveal delay={0.15} className="space-y-5 text-[1.0625rem] leading-relaxed text-body text-pretty lg:col-span-5 lg:pt-2">
            <p>
              That means turning raw datasets into insight with SQL, Python, and dashboards, training
              predictive and deep learning models, and building the web applications that make them
              usable.
            </p>
            <p>
              I&apos;m currently a Management Office Intern at CIMB Niaga, following a data engineering
              internship at BMKG. Before that I was a laboratory assistant for the Database Systems course at
              Universitas Multimedia Nusantara, mentoring students in SQL and relational database
              design.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = FOCUS_ICON[area.key];
            return (
              <li key={area.key}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="group h-full rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_48px_-28px_rgba(11,11,15,0.25)]">
                    <span className="grid size-11 place-items-center rounded-2xl bg-surface text-xl text-ink transition-colors duration-300 group-hover:bg-accent-soft group-hover:text-accent">
                      <Icon />
                    </span>
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
