// Kerangka tiap section: judul di kolom kiri, isi di kolom kanan, dipisah garis tipis.
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="container-page grid gap-y-8 py-16 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-16 lg:py-24">
        <h2
          id={`${id}-title`}
          className="text-2xl font-semibold tracking-[-0.03em] text-ink lg:sticky lg:top-24 lg:self-start"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
