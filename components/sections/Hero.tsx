import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Download } from "@/components/ui/icons";
import { EDUCATION, HERO_FACTS, SITE, SOCIALS } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="pt-[calc(4rem+env(safe-area-inset-top))]">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Intro */}
        <div className="lg:col-span-8">
          <h1 className="text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {SITE.name}
          </h1>

          <p className="mt-7 max-w-[36rem] text-[clamp(1.2rem,2.1vw,1.5rem)] leading-snug tracking-[-0.01em] text-body text-pretty">
            Information Systems undergraduate at Universitas Multimedia Nusantara, working on{" "}
            <span className="text-ink">artificial intelligence</span>, data analytics, and web
            development.
          </p>

          <dl className="mt-9 max-w-md border-t border-line text-[0.95rem]">
            {HERO_FACTS.map((f) => (
              <div key={f.label} className="flex gap-6 border-b border-line py-3">
                <dt className="w-24 shrink-0 text-muted">{f.label}</dt>
                <dd className="font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={SITE.resume} download>
                Download CV
                <Download className="text-[0.95rem]" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#projects">
                View projects
                <ArrowDown className="text-[0.95rem]" />
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1 text-body"
                >
                  {s.label}
                  <ArrowUpRight className="text-[0.85rem]" />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SITE.email}`} className="link text-body">
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Portrait */}
        <figure className="w-full max-w-[19rem] lg:col-span-4 lg:ml-auto lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
            <Image
              src={SITE.photo}
              alt={`Portrait of ${SITE.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 304px, 340px"
              className="object-cover object-[62%_32%]"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm">
            <span className="font-medium text-ink">Information Systems, UMN</span>
            <span className="shrink-0 text-muted">Class of {EDUCATION.details[1].value}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
