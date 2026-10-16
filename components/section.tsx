import type { ReactNode } from "react";

/**
 * A titled page section. The heading is a small mono eyebrow so the
 * content itself carries the visual weight.
 */
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
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <h2
        id={`${id}-heading`}
        className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Two-column row: a narrow mono label on the left, content on the right. */
export function Row({
  label,
  children,
  align = "start",
}: {
  label: ReactNode;
  children: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <div
      className={`grid gap-x-8 gap-y-1 sm:grid-cols-[9rem_1fr] ${
        align === "center" ? "sm:items-center" : ""
      }`}
    >
      <div className="font-mono text-xs leading-6 text-muted">{label}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/** External link with a subtle arrow. */
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
      <span aria-hidden="true" className="ml-0.5 text-muted">
        ↗
      </span>
    </a>
  );
}
