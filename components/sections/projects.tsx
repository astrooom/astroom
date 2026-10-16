import { projects } from "@/content/profile";
import { EntryItem } from "@/components/entry";
import { Section } from "@/components/section";

export function ProjectsSection({ bare = false }: { bare?: boolean }) {
  return (
    <Section id="projects" title="Projects" bare={bare}>
      <ol className="divide-y divide-border">
        {projects.map((entry) => (
          <EntryItem key={entry.org} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
