import { Fragment, type ReactNode } from "react";
import { profile } from "@/content/profile";
import { ExtLink, Section } from "@/components/section";

export function ContactSection() {
  const rows: { label: string; value: ReactNode }[] = [
    {
      label: "Email",
      value: (
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
      ),
    },
    {
      label: "Phone",
      value: (
        <a href={`tel:${profile.phone}`} className="link">
          {profile.phone}
        </a>
      ),
    },
    {
      label: "GitHub",
      value: <ExtLink href={profile.github}>github.com/astrooom</ExtLink>,
    },
    {
      label: "X",
      value: <ExtLink href={profile.x}>{profile.xHandle}</ExtLink>,
    },
    { label: "Discord", value: profile.discord },
    {
      label: "Company",
      value: `${profile.company.name}, ${profile.company.description}`,
    },
  ];

  return (
    <Section id="contact" title="Contact">
      <dl className="grid leading-7 sm:grid-cols-[8rem_1fr] sm:gap-x-6 sm:gap-y-2">
        {rows.map((row) => (
          <Fragment key={row.label}>
            <dt className="mt-3 text-sm font-medium text-muted first:mt-0 sm:mt-0 sm:pt-0.5">
              {row.label}
            </dt>
            <dd className="break-words">{row.value}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
