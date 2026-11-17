import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import CopyEmail from "@/components/ui/CopyEmail";
import { MaskText } from "@/components/ui/motion";
import { ArrowUpRight, GitHub, Instagram, LinkedIn, Mail } from "@/components/ui/icons";
import { SITE, SOCIALS, type SocialKey } from "@/lib/site";

const SOCIAL_ICON: Record<SocialKey, typeof GitHub> = {
  linkedin: LinkedIn,
  github: GitHub,
  instagram: Instagram,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal y={32} scale={0.96}>
          <div className="rounded-[2rem] bg-ink p-7 text-white sm:rounded-[2.5rem] sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-7">
                <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
                  <MaskText text="Let's get in" delay={0.25} />{" "}
                  <MaskText text="touch." className="accent-serif text-[1.08em]" delay={0.46} />
                </h2>
                <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-white/70 text-pretty">
                  For internship openings, project collaborations, or a conversation about AI and data,
                  email is the fastest way to reach me.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-ink shadow-none hover:bg-white/90"
                  >
                    <a href={`mailto:${SITE.email}`}>
                      <Mail className="text-base" />
                      {SITE.email}
                    </a>
                  </Button>
                  <CopyEmail email={SITE.email} />
                </div>
              </div>

              <ul className="divide-y divide-white/10 border-y border-white/10 lg:col-span-5">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICON[s.key];
                  return (
                    <li key={s.key}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-4 transition-colors duration-200"
                      >
                        <Icon className="text-xl text-white/60 transition-colors duration-200 group-hover:text-white" />
                        <span className="flex-1 font-medium">{s.label}</span>
                        <span className="hidden text-sm text-white/50 sm:inline">{s.handle}</span>
                        <ArrowUpRight className="text-lg text-white/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
