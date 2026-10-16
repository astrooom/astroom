import { profile } from "@/content/profile";
import { ExtLink, Row, Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <dl className="space-y-3">
        <Row label={<dt>Email</dt>} align="center">
          <dd>
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
          </dd>
        </Row>
        <Row label={<dt>Phone</dt>} align="center">
          <dd>
            <a href={`tel:${profile.phone}`} className="link">
              {profile.phone}
            </a>
          </dd>
        </Row>
        <Row label={<dt>Location</dt>} align="center">
          <dd>{profile.location}</dd>
        </Row>
        <Row label={<dt>GitHub</dt>} align="center">
          <dd>
            <ExtLink href={profile.github}>github.com/astrooom</ExtLink>
          </dd>
        </Row>
        <Row label={<dt>X</dt>} align="center">
          <dd>
            <ExtLink href={profile.x}>{profile.xHandle}</ExtLink>
          </dd>
        </Row>
        <Row label={<dt>Discord</dt>} align="center">
          <dd>{profile.discord}</dd>
        </Row>
        <Row label={<dt>Company</dt>} align="center">
          <dd>
            {profile.company.name}
            <span className="text-muted"> · {profile.company.description}</span>
          </dd>
        </Row>
      </dl>
    </Section>
  );
}
