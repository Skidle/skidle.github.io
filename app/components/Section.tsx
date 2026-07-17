import { Entry, EntryList } from "./EntryList";
import { SectionHeading } from "./SectionHeading";

export function Section({ title, items }: { title: string; items: Entry[] }) {
  return (
    <section className="mt-14">
      <SectionHeading>{title}</SectionHeading>
      <EntryList items={items} />
    </section>
  );
}
