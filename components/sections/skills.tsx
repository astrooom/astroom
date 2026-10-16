import { skills } from "@/content/profile";
import { Section } from "@/components/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <ul className="space-y-2 leading-7">
        {skills.map((group) => (
          <li key={group.group}>
            <span className="text-muted">{group.group}:</span>{" "}
            {group.items.join(", ")}
          </li>
        ))}
      </ul>
    </Section>
  );
}
