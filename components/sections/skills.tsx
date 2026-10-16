import { Fragment } from "react";
import { skills } from "@/content/profile";
import { Section } from "@/components/section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid sm:grid-cols-[8rem_1fr] sm:gap-x-6 sm:gap-y-4">
        {skills.map((group) => (
          <Fragment key={group.group}>
            <dt className="mt-5 text-sm font-medium text-muted first:mt-0 sm:mt-0 sm:pt-1">
              {group.group}
            </dt>
            <dd className="mt-2 sm:mt-0">
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
