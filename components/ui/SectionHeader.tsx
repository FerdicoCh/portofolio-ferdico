import { cn } from "@/lib/utils";

// Judul section: h2 besar di kiri, opsional slot di kanan (deskripsi / tombol).
export default function SectionHeader({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-ink">
        {title}
      </h2>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
