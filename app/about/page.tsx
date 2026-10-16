import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { HomeLink } from "@/components/section";
import { AboutBody } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "About",
  description: `About astroom: ${profile.title} based in ${profile.location}. Background, experience, skills and education.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <HomeLink />
      <section className="mt-6">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="mt-1 text-muted">
          {profile.name} · {profile.title}
        </p>
        <div className="mt-6">
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
