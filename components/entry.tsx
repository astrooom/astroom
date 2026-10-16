import type { Entry } from "@/content/profile";
import { ExtLink } from "./section";

/** 40px logo tile; falls back to the organisation's initial so every entry aligns the same way. */
function Logo({ entry }: { entry: Entry }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface"
    >
      {entry.logo ? (
        <img
          src={entry.logo}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <span className="text-sm font-semibold text-muted">
          {entry.org.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}

/**
 * One experience or project entry. Entries are separated by rules (the parent
 * list uses `divide-y`) and lead with a logo tile, organisation, role and period.
 */
export function EntryItem({ entry }: { entry: Entry }) {
  const name = entry.url ? (
    <ExtLink href={entry.url}>{entry.org}</ExtLink>
  ) : (
    <span>{entry.org}</span>
  );

  return (
    <li className="py-8 first:pt-0 last:pb-0">
      <div className="flex items-center gap-4">
        <Logo entry={entry} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted">{entry.period}</p>
          </div>
          <p className="text-sm text-muted">{entry.title}</p>
        </div>
      </div>
      <div className="mt-4 sm:pl-14">
        <p className="leading-7">{entry.description}</p>
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-muted">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.stack && (
          <p className="mt-3 text-sm text-muted">
            <span className="font-medium">Stack:</span> {entry.stack}
          </p>
        )}
      </div>
    </li>
  );
}
