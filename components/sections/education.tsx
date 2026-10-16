import { education, languages } from "@/content/profile";
import { Section } from "@/components/section";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold">{education.degree}</h3>
        <p className="text-sm text-muted">{education.period}</p>
      </div>
      <p className="text-sm text-muted">{education.school}</p>
      <p className="mt-4 leading-7">{education.description}</p>
      <p className="mt-4 leading-7">
        <span className="text-sm font-medium text-muted">Languages:</span>{" "}
        {languages.join(", ")}
      </p>
    </Section>
  );
}
