import Section from "@/components/ui/Section";
import CopyEmail from "@/components/ui/CopyEmail";
import { ArrowUpRight } from "@/components/ui/icons";
import { SITE, SOCIALS } from "@/lib/site";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-body text-pretty">
        For internship openings, project collaborations, or a conversation about AI and data, email
        is the fastest way to reach me.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
        <a
          href={`mailto:${SITE.email}`}
          className="link break-all text-[clamp(1.5rem,4.2vw,2.5rem)] font-semibold leading-tight tracking-[-0.035em] text-ink"
        >
          {SITE.email}
        </a>
        <CopyEmail email={SITE.email} />
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1 text-body"
            >
              {s.label}
              <ArrowUpRight className="text-[0.9rem]" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
