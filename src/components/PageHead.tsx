export function PageHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="hero-bg px-5 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[52px] uppercase leading-[0.95] sm:text-[72px]">{title}</h1>
        {children && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black/70">{children}</p>}
      </div>
    </section>
  );
}
