export function About({
  text,
  note,
  cta,
  ctaHref,
}: {
  text: string;
  note: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 border-b-2 border-foreground-muted/50 pb-3 font-mono text-sm font-medium uppercase tracking-widest text-foreground-muted sm:text-base">
        About
      </h2>
      <p className="max-w-prose text-base leading-relaxed text-foreground-muted sm:text-lg">
        {text}
      </p>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-foreground-muted sm:text-lg">
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
