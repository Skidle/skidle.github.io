export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-foreground-muted sm:text-base">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mt-3 block h-0.5 w-full bg-foreground-muted/30"
      />
    </div>
  );
}
