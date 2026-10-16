import { projects } from "@/content/profile";
import { EntryItem } from "@/components/entry";
import { Section } from "@/components/section";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ol className="space-y-12">
        {projects.map((entry) => (
          <EntryItem key={entry.org} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
