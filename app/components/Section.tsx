import { Entry, EntryList } from "./EntryList";

export function Section({ title, items }: { title: string; items: Entry[] }) {
  return (
    <section className="mt-14">
      <div className="mb-4">
        <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-foreground-muted sm:text-base">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="mt-3 block h-0.5 w-full bg-foreground-muted/30"
        />
      </div>
      <EntryList items={items} />
    </section>
  );
}
