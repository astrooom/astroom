import { skills } from "@/content/profile";
import { Row, Section } from "@/components/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <Row key={group.group} label={<dt>{group.group}</dt>}>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface px-2 py-0.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </dd>
          </Row>
        ))}
      </dl>
    </Section>
  );
}
