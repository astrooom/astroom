import { profile } from "@/content/profile";

/** Homepage sections, in page order. Links use `/#id` so they work from sub-pages too. */
export const sectionLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

/** Sticky top bar: site mark and name on the left, section jump links on the right. No JavaScript. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-measure flex-col gap-1 px-5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-3">
        <a
          href="/"
          className="flex w-fit items-center gap-2 font-semibold tracking-tight"
        >
          <img
            src="/astroom_small_transparent.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
          {profile.alias}
        </a>
        <nav aria-label="Sections">
          <ul className="-ml-2 flex flex-wrap text-sm text-muted">
            {sectionLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className="inline-block rounded-md px-2 py-0.5 hover:bg-surface hover:text-fg sm:py-1"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
