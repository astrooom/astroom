import type { Metadata } from "next";
import { HomeLink } from "@/components/section";
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
      <HomeLink />
      <section className="mt-6">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-1 text-muted">
          Current projects and the professional roles that have shaped my work
          in DevOps engineering, full-stack development, and technical
          operations.
        </p>
      </section>
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
