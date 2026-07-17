export function About({
  paragraphs,
  note,
  cta,
  ctaHref,
}: {
  paragraphs: string[];
  note: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <section className="mt-14">
      <div className="mb-4">
        <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-foreground-muted sm:text-base">
          About
        </h2>
        <span
          aria-hidden="true"
          className="mt-3 block h-0.5 w-full bg-foreground-muted/30"
        />
      </div>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-base leading-[1.7] text-foreground-soft sm:text-lg ${index > 0 ? "mt-4" : ""}`}
        >
          {paragraph}
        </p>
      ))}
      <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
        {note}{" "}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-foreground-muted/40 decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {cta}
        </a>
        .
      </p>
    </section>
  );
}
