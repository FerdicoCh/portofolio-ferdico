import { cn } from "@/lib/utils";

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted",
        className
      )}
    >
      {index && <span className="text-accent">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-8 bg-line" />}
      <span>{children}</span>
    </p>
  );
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-body text-pretty">{description}</p>
      )}
    </div>
  );
}
