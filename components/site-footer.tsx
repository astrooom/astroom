import { profile } from "@/content/profile";
import { GitHubIcon, XIcon } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-measure flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:px-6">
        <p>
          © {year} {profile.name} · {profile.company.name}
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <GitHubIcon />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <XIcon />
              {profile.xHandle}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
