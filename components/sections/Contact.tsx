import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import CopyEmail from "@/components/ui/CopyEmail";
import { ArrowUpRight, GitHub, Instagram, LinkedIn, Mail } from "@/components/ui/icons";
import { SITE, SOCIALS, type SocialKey } from "@/lib/site";

const SOCIAL_ICON: Record<SocialKey, typeof GitHub> = {
  linkedin: LinkedIn,
  github: GitHub,
  instagram: Instagram,
  email: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal y={28}>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-80" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-24 -z-10 size-[28rem] rounded-full bg-accent-soft opacity-70 blur-3xl"
            />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-7">
                <Eyebrow index="05">Contact</Eyebrow>
                <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-ink text-balance">
                  Let&apos;s build something <span className="accent-serif text-accent">together.</span>
                </h2>
                <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-body text-pretty">
                  Have an internship opening, a project to collaborate on, or just want to talk about
                  data and tech? My inbox is always open — I&apos;ll get back to you as soon as I can.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href={`mailto:${SITE.email}`}>
                      <Mail className="text-base" />
                      {SITE.email}
                    </a>
                  </Button>
                  <CopyEmail email={SITE.email} />
                </div>
              </div>

              <ul className="overflow-hidden rounded-3xl border border-line bg-white lg:col-span-5">
                {SOCIALS.filter((s) => s.key !== "email").map((s) => {
                  const Icon = SOCIAL_ICON[s.key];
                  return (
                    <li key={s.key} className="border-b border-line last:border-b-0">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-surface sm:px-6 sm:py-5"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-lg text-ink transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                          <Icon />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.95rem] font-semibold text-ink">{s.label}</span>
                          <span className="block truncate text-sm text-muted">{s.handle}</span>
                        </span>
                        <ArrowUpRight className="text-lg text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
