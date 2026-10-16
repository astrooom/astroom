import { profile } from "@/content/profile";
import { DiscordIcon, GitHubIcon, MailIcon, XIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="pb-12 pt-16 sm:pb-16 sm:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-muted">
        {profile.title}
        <span className="mx-2 text-border" aria-hidden="true">
          /
        </span>
        {profile.location}
      </p>
      <p className="mt-8 max-w-prose text-[17px] leading-8">
        {profile.summary[0]}
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <li>
          <a href={`mailto:${profile.email}`} className="link inline-flex items-center gap-2">
            <MailIcon className="text-muted" />
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-2"
          >
            <GitHubIcon className="text-muted" />
            GitHub
          </a>
        </li>
        <li>
          <a
            href={profile.x}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-2"
          >
            <XIcon className="text-muted" />
            {profile.xHandle}
          </a>
        </li>
        <li className="inline-flex items-center gap-2" title="Discord username">
          <DiscordIcon className="text-muted" />
          <span className="text-muted">Discord:</span> {profile.discord}
        </li>
      </ul>
    </section>
  );
}
