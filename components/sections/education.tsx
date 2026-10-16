import { education, languages } from "@/content/profile";
import { Section } from "@/components/section";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <h3 className="font-medium">
        {education.degree}
        <span className="font-normal text-muted"> — {education.school}</span>
      </h3>
      <p className="text-sm text-muted">{education.period}</p>
      <p className="mt-2 leading-7">{education.description}</p>
      <p className="mt-4 leading-7">
        <span className="text-muted">Languages:</span> {languages.join(", ")}
      </p>
    </Section>
  );
}
