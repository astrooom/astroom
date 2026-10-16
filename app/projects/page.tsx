import type { Metadata } from "next";
import { PageTitle } from "@/components/section";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects and professional experience from the astroom portfolio: VPS and game hosting platforms, SaaS products and technical operations.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageTitle title="Projects">
        Current projects and the professional roles that have shaped my work in
        DevOps engineering, full-stack development, and technical operations.
      </PageTitle>
      <ProjectsSection bare />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
