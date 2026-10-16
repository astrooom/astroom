import type { ReactNode } from "react";

/** A titled page section with a small, quiet heading. */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-14">
      <h2
        id={`${id}-heading`}
        className="mb-6 text-xs font-medium uppercase tracking-widest text-muted"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/** External link that opens in a new tab. */
export function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className}`}
    >
      {children}
    </a>
  );
}

/** Small text link back to the homepage, used at the top of sub-pages. */
export function HomeLink() {
  return (
    <a href="/" className="text-sm text-muted hover:text-fg">
      ← astroom
    </a>
  );
}
