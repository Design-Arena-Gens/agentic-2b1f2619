import { Hero } from "./components/Hero";
import { QuickStart } from "./components/QuickStart";
import { SectionBlock } from "./components/Section";
import { roadmap } from "./data/sections";

export default function Page() {
  return (
    <main>
      <Hero />
      <QuickStart />
      {roadmap.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}
    </main>
  );
}
