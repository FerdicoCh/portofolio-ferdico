import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { HeroPortrait, MaskText, StaggerGroup, StaggerItem } from "@/components/ui/motion";
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
import { CURRENT_ROLE, EDUCATION, SITE, SOCIALS, type SocialKey } from "@/lib/site";

const SOCIAL_ICON: Record<SocialKey, typeof GitHub> = {
  linkedin: LinkedIn,
  github: GitHub,
  instagram: Instagram,
};

const FACT_CARD = "flex min-h-[8.25rem] flex-col justify-between rounded-3xl bg-surface p-5";
const FACT_LABEL = "flex items-center justify-between text-sm text-muted";

export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-36">
      <div className="container-page">
        {/* Nama selebar container (ukuran font ikut lebar container) */}
        <div className="@container">
          <h1 className="whitespace-nowrap text-[13.9cqw] font-semibold leading-[0.95] tracking-[-0.06em] text-ink">
            <MaskText text={SITE.name} by="char" immediate stagger={0.03} duration={1.05} />
          </h1>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-12 lg:gap-6">
          {/* Intro */}
          <Reveal immediate delay={0.55} className="order-1 flex flex-col md:col-span-7 lg:order-2 lg:col-span-5 lg:px-3">
            <p className="text-[clamp(1.375rem,2.4vw,1.75rem)] leading-[1.22] tracking-[-0.025em] text-ink text-pretty">
              Information Systems undergraduate working on{" "}
              <em className="accent-serif text-[1.12em] text-accent">artificial intelligence</em>, data
              analytics, and web development.
            </p>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-body text-pretty">
              I train models, analyze data, and build the web applications that put both to use.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={SITE.resume} download>
                  Download CV
                  <Download className="text-base" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#projects">
                  View projects
                  <ArrowDown className="text-base transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                </a>
              </Button>
            </div>

            <ul className="mt-8 flex items-center gap-1 lg:mt-auto lg:pt-8">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICON[s.key];
                return (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="grid size-10 place-items-center rounded-full text-[1.15rem] text-muted transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label="Email"
                  title="Email"
                  className="grid size-10 place-items-center rounded-full text-[1.15rem] text-muted transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink"
                >
                  <Mail />
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Portrait */}
          <div className="order-2 md:col-span-5 lg:order-1 lg:col-span-4">
            <HeroPortrait className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
              <Image
                src={SITE.photo}
                alt={`Portrait of ${SITE.name}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </HeroPortrait>
          </div>

          {/* Fact cards */}
          <StaggerGroup
            immediate
            delay={0.7}
            stagger={0.1}
            className="order-3 grid gap-4 sm:grid-cols-3 md:col-span-12 lg:col-span-3 lg:grid-cols-1 lg:grid-rows-3 lg:gap-5"
          >
            <StaggerItem as="div" className={FACT_CARD}>
              <p className={FACT_LABEL}>Currently</p>
              <div>
                <Image
                  src={CURRENT_ROLE.logo}
                  alt={CURRENT_ROLE.org}
                  width={131}
                  height={20}
                  className="h-5 w-auto"
                />
                <p className="mt-2.5 text-[0.95rem] font-medium leading-snug text-ink">{CURRENT_ROLE.title}</p>
              </div>
            </StaggerItem>

            <StaggerItem as="div" className={FACT_CARD}>
              <p className={FACT_LABEL}>
                Education
                <GraduationCap className="text-lg text-ink" />
              </p>
              <div>
                <p className="text-[0.95rem] font-semibold leading-snug text-ink">Information Systems</p>
                <p className="mt-0.5 text-sm text-body">
                  {EDUCATION.shortSchool} · Class of {EDUCATION.classOf}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem as="div" className={FACT_CARD}>
              <p className={FACT_LABEL}>
                Based in
                <MapPin className="text-lg text-ink" />
              </p>
              <p className="text-[0.95rem] font-semibold leading-snug text-ink">{SITE.location}</p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
