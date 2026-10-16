import type { ReactNode } from "react";

/**
 * A titled page section. A top rule and a real heading separate it from the
 * previous section; `scroll-mt` keeps the heading clear of the sticky header
 * when jumped to from the menu.
 */
export function Section({
  id,
  title,
  bare = false,
  children,
}: {
  id: string;
  title: string;
  /** Omit the rule and heading, for a sub-page whose h1 already names the section. */
  bare?: boolean;
  children: ReactNode;
}) {
  if (bare) {
    return (
      <section id={id} aria-label={title} className="mt-8 scroll-mt-28 sm:scroll-mt-20">
        {children}
      </section>
    );
  }
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-14 scroll-mt-28 border-t border-border pt-8 sm:mt-16 sm:scroll-mt-20"
    >
      <h2
        id={`${id}-heading`}
        className="text-xl font-semibold tracking-tight"
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
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

/** Page title block for sub-pages (the sticky header already links home). */
export function PageTitle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <div className="mt-2 leading-7 text-muted">{children}</div>
    </section>
  );
}
