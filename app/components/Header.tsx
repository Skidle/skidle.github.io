type IdentityLink = {
  label: string;
  href: string;
};

export function Header({
  name,
  role,
  links,
}: {
  name: string;
  role: string;
  links: IdentityLink[];
}) {
  return (
    <header className="mb-16 flex flex-col gap-4">
      <h1 className="text-balance font-serif text-5xl font-normal tracking-tight sm:text-6xl">
        {name}
      </h1>
      <p className="font-mono text-sm text-accent-secondary sm:text-base">
        {role}
      </p>
      <nav className="mt-2 flex flex-wrap gap-x-8 gap-y-2">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.href}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="font-mono text-lg text-foreground-muted underline decoration-foreground-muted/40 decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:text-xl"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
