export function Footer({ name, year }: { name: string; year: number }) {
  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-8 font-mono text-sm text-foreground-muted sm:text-base">
      <span>{name}</span>
      <span>&copy; {year}</span>
    </footer>
  );
}
