import { experience } from "@/content/profile";
import { EntryItem } from "@/components/entry";
import { Section } from "@/components/section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-border">
        {experience.map((entry) => (
          <EntryItem key={`${entry.org}-${entry.title}`} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
