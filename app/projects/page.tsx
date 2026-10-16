import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects and professional experience of ${profile.name} (${profile.alias}).`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-4 pt-16 sm:pt-24">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-prose text-lg text-muted">
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
