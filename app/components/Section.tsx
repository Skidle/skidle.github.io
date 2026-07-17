import { Entry, EntryList } from "./EntryList";

export function Section({ title, items }: { title: string; items: Entry[] }) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 border-b border-rule pb-3 font-mono text-sm font-medium uppercase tracking-widest text-foreground-muted sm:text-base">
        {title}
      </h2>
      <EntryList items={items} />
    </section>
  );
}
