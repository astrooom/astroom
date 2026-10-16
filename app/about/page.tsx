import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { PageTitle } from "@/components/section";
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
      <PageTitle title="About">
        {profile.name} · {profile.title}
      </PageTitle>
      <div className="mt-8">
        <AboutBody />
      </div>
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
