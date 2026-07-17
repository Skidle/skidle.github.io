import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { links, projects, writing } from "./content";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
      <Header
        name="Daria Doronina"
        role="Senior Software Engineer"
        location="Barcelona, Spain"
        links={links}
      />

      <Section title="Projects" items={projects} />
      <Section title="Writing" items={writing} />

      <Footer name="Daria Doronina" year={2026} />
    </main>
  );
}
