import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  GitHub,
  GraduationCap,
  Instagram,
  LinkedIn,
  Mail,
  MapPin,
} from "@/components/ui/icons";
import { SITE, SOCIALS, STATS, type SocialKey } from "@/lib/site";

const SOCIAL_ICON: Record<SocialKey, typeof GitHub> = {
  linkedin: LinkedIn,
  github: GitHub,
  instagram: Instagram,
  email: Mail,
};

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 sm:pt-40">
      {/* Background: dot grid + soft accent glow */}
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-12%] -z-10 size-[38rem] rounded-full bg-accent-soft opacity-80 blur-3xl"
      />

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pl-3 pr-4 text-[0.8125rem] font-medium text-body shadow-[0_1px_2px_rgba(11,11,15,0.04)] backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to internship opportunities
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-ink text-balance">
                <span className="text-muted">Hi, I&apos;m Ferdico.</span> I build machine learning models
                and ship them as <span className="accent-serif text-accent">real products.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-body text-pretty">
                Information Systems undergraduate at Universitas Multimedia Nusantara, focused on
                machine learning and web development — from exploring the data to deploying an app
                people can actually use.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href="#projects">
                    View projects
                    <ArrowDown className="text-base transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={SITE.resume} download>
                    Download CV
                    <Download className="text-base" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-9 flex items-center gap-1.5">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICON[s.key];
                  const external = s.key !== "email";
                  return (
                    <li key={s.key}>
                      <a
                        href={s.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        aria-label={s.label}
                        title={s.label}
                        className="grid size-10 place-items-center rounded-full text-[1.15rem] text-muted transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink"
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
                <li aria-hidden="true" className="mx-2 hidden h-5 w-px bg-line sm:block" />
                <li className="hidden items-center gap-1.5 whitespace-nowrap text-sm text-muted sm:flex">
                  <MapPin className="text-base" />
                  {SITE.location}
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal className="lg:col-span-5" delay={0.14} y={28}>
            <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[23rem] lg:ml-auto lg:mr-2">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[2.4rem] border border-line bg-white/70" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_32px_64px_-32px_rgba(11,11,15,0.45)] ring-1 ring-ink/5">
                <Image
                  src={SITE.photo}
                  alt={`Portrait of ${SITE.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 336px, 368px"
                  className="object-cover object-[62%_32%]"
                />
              </div>

              {/* Floating chips */}
              <div className="absolute -right-3 top-6 flex items-center gap-3 rounded-2xl border border-line bg-white py-2.5 pl-2.5 pr-4 shadow-[0_16px_32px_-16px_rgba(11,11,15,0.25)] sm:-right-8">
                <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-lg text-accent">
                  <GraduationCap />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.8125rem] font-semibold text-ink">Information Systems</span>
                  <span className="block text-xs text-muted">UMN · Class of 2027</span>
                </span>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_16px_32px_-16px_rgba(11,11,15,0.25)] sm:-left-8">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">Focus</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">ML · Data · Web</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal className="mt-24 sm:mt-28" delay={0.1}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-2 bg-white p-6 sm:p-8">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
                  {s.value}
                  {s.suffix && (
                    <span className="ml-0.5 text-[0.5em] font-medium tracking-normal text-muted">
                      {s.suffix}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
