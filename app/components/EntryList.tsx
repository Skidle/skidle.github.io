export type Entry = {
  title: string;
  href: string;
  meta: string;
};

export function EntryList({ items }: { items: Entry[] }) {
  return (
    <div className="divide-y divide-rule">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative -mx-4 flex flex-col gap-1 rounded-lg px-4 py-5 transition-colors hover:bg-surface"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-2 left-0 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100"
          />
          <span className="text-xl font-semibold sm:text-2xl">
            {item.title}
          </span>
          <p className="text-base text-foreground-muted sm:text-lg">
            {item.meta}
          </p>
        </a>
      ))}
    </div>
  );
}
