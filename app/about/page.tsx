import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { AboutBody } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}, ${profile.title} based in ${profile.location}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-3 text-lg text-muted">
          {profile.name} · {profile.title}
        </p>
        <div className="mt-8">
          <AboutBody />
        </div>
      </section>
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
