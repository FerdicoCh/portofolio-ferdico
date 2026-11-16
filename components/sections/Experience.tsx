import Section from "@/components/ui/Section";
import { EDUCATION, EXPERIENCE } from "@/lib/site";

const ROW = "grid gap-x-10 gap-y-2 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[10.5rem_minmax(0,1fr)]";
const PERIOD = "font-mono text-[0.8125rem] leading-7 text-muted";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {EXPERIENCE.map((item) => (
          <li key={`${item.org}-${item.title}`} className={ROW}>
            <p className={PERIOD}>{item.period}</p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{item.title}</h3>
              <p className="text-body">{item.org}</p>
              {item.bullets && (
                <ul className="mt-4 max-w-[40rem] space-y-2 text-[0.975rem] leading-relaxed text-body">
                  {item.bullets.map((b) => (
                    <li key={b} className="relative pl-5 before:absolute before:left-0 before:text-muted before:content-['–']">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className={ROW}>
        <p className={PERIOD}>{EDUCATION.period}</p>
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{EDUCATION.degree}</h3>
          <p className="text-body">{EDUCATION.school}</p>

          <dl className="mt-5 flex flex-wrap gap-x-12 gap-y-4">
            {EDUCATION.details.map((d) => (
              <div key={d.label}>
                <dt className="text-sm text-muted">{d.label}</dt>
                <dd className="mt-0.5 text-lg font-semibold tracking-[-0.015em] text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-[40rem] text-[0.975rem] leading-relaxed text-body">
            <span className="text-muted">Relevant coursework: </span>
            {EDUCATION.coursework.join(", ")}.
          </p>
        </div>
      </div>
    </Section>
  );
}
