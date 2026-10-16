import { profile } from "@/content/profile";
import { ExtLink, Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <ul className="space-y-1 leading-7">
        <li>
          <span className="text-muted">Email:</span>{" "}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
        </li>
        <li>
          <span className="text-muted">Phone:</span>{" "}
          <a href={`tel:${profile.phone}`} className="link">
            {profile.phone}
          </a>
        </li>
        <li>
          <span className="text-muted">GitHub:</span>{" "}
          <ExtLink href={profile.github}>github.com/astrooom</ExtLink>
        </li>
        <li>
          <span className="text-muted">X:</span>{" "}
          <ExtLink href={profile.x}>{profile.xHandle}</ExtLink>
        </li>
        <li>
          <span className="text-muted">Discord:</span> {profile.discord}
        </li>
        <li>
          <span className="text-muted">Company:</span> {profile.company.name},{" "}
          {profile.company.description}
        </li>
      </ul>
    </Section>
  );
}
