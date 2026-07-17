import { SectionHeading } from "./SectionHeading";

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
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-[1.7] text-foreground-soft sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
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
