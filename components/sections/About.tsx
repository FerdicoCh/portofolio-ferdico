import Section from "@/components/ui/Section";
import { FOCUS_AREAS } from "@/lib/site";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[42rem]">
        <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink text-pretty">
          I&apos;m an Information Systems undergraduate at Universitas Multimedia Nusantara with a
          focus on artificial intelligence, data analysis, and web development.
        </p>
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-body text-pretty">
          Most of my work sits where those three meet: turning raw datasets into insight with SQL,
          Python, and dashboards, training predictive and deep learning models, and building the web
          applications that make them usable. Before my current internship at CIMB Niaga, I was a
          laboratory assistant for the Database Systems course, mentoring students in SQL and
          relational database design.
        </p>
      </div>

      <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
        {FOCUS_AREAS.map((area) => (
          <div key={area.title} className="border-t border-ink pt-4">
            <dt className="font-semibold tracking-[-0.01em] text-ink">{area.title}</dt>
            <dd className="mt-2 text-[0.95rem] leading-relaxed text-body">{area.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
