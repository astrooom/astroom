import { profile } from "@/content/profile";
import { Section } from "@/components/section";

/** The about copy without a section wrapper, so pages can reuse it under their own heading. */
export function AboutBody({ fromParagraph = 0 }: { fromParagraph?: number }) {
  return (
    <div className="space-y-4 leading-7">
      {profile.summary.slice(fromParagraph).map((p) => (
        <p key={p}>{p}</p>
      ))}
      <ul className="list-disc pl-5 text-muted">
        {profile.competencies.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export function AboutSection() {
  return (
    <Section id="about" title="About">
      {/* The first summary paragraph already appears in the hero. */}
      <AboutBody fromParagraph={1} />
    </Section>
  );
}
