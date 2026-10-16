import { profile } from "@/content/profile";
import { ExtLink } from "@/components/section";

export function Hero() {
  return (
    <section id="top">
      <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
      <p className="mt-1 text-muted">
        {profile.title} · {profile.location}
      </p>
      <p className="mt-6 leading-7">{profile.summary[0]}</p>
      <p className="mt-6 text-muted">
        <a href={`mailto:${profile.email}`} className="link text-fg">
          {profile.email}
        </a>
        {" · "}
        <ExtLink href={profile.github} className="text-fg">
          GitHub
        </ExtLink>
        {" · "}
        <ExtLink href={profile.x} className="text-fg">
          X
        </ExtLink>
        {" · "}Discord: <span className="text-fg">{profile.discord}</span>
      </p>
    </section>
  );
}
