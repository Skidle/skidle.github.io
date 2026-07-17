type IdentityLink = {
  label: string;
  href: string;
  download?: boolean;
};

export function Header({
  name,
  role,
  location,
  links,
}: {
  name: string;
  role: string;
  location: string;
  links: IdentityLink[];
}) {
  return (
    <header className="mb-16 flex flex-col gap-4">
      <h1 className="text-balance font-serif text-5xl font-normal tracking-tight sm:text-6xl">
        {name}
      </h1>
      <p className="text-sm text-accent-secondary sm:text-base">
        {role}
        <span className="hidden sm:inline"> &middot; </span>
        <span className="block sm:inline">{location}</span>
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
              download={link.download}
              className="text-lg text-foreground-muted underline decoration-foreground-muted/40 decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:text-xl"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
