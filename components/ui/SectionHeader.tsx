import { DrawLine, MaskText } from "@/components/ui/motion";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

// Judul section: h2 besar di kiri, opsional slot di kanan (deskripsi / tombol).
// Judul naik dari balik garis, lalu garis bawahnya tergambar dari kiri.
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
    <div className={cn("relative", className)}>
      <div className="flex flex-col gap-5 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-ink">
          <MaskText text={title} by="char" stagger={0.03} />
        </h2>
        {children && (
          <Reveal delay={0.25} className="shrink-0">
            {children}
          </Reveal>
        )}
      </div>
      <DrawLine className="absolute inset-x-0 bottom-0" delay={0.1} />
    </div>
  );
}
