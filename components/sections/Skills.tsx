import Section from "@/components/ui/Section";
import { SKILLS } from "@/lib/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {SKILLS.map((group) => (
          <div
            key={group.label}
            className="grid gap-x-10 gap-y-1 border-t border-line py-5 first:border-t-0 first:pt-0 sm:grid-cols-[10.5rem_minmax(0,1fr)]"
          >
            <dt className="font-medium text-ink">{group.label}</dt>
            <dd className="max-w-[40rem] leading-relaxed text-body">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
