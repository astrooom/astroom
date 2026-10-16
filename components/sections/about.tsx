import { profile } from "@/content/profile";
import { Section } from "@/components/section";

/** The about copy without a section wrapper, so pages can reuse it under their own heading. */
export function AboutBody({ fromParagraph = 0 }: { fromParagraph?: number }) {
  return (
    <div className="space-y-5 leading-7">
      {profile.summary.slice(fromParagraph).map((p) => (
        <p key={p}>{p}</p>
      ))}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Core competencies
        </h3>
        <ul className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          {profile.competencies.map((c) => (
            <li key={c} className="flex gap-3">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
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
