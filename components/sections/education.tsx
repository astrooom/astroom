import { education, languages } from "@/content/profile";
import { Row, Section } from "@/components/section";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        <Row label={education.period}>
          <h3 className="font-medium leading-6">
            {education.degree}
            <span className="text-muted"> · </span>
            <span className="font-normal text-muted">{education.school}</span>
          </h3>
          <p className="mt-3 leading-7">{education.description}</p>
        </Row>
        <Row label="Languages" align="center">
          <p>{languages.join(", ")}</p>
        </Row>
      </div>
    </Section>
  );
}
