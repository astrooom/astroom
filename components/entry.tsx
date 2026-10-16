import type { Entry } from "@/content/profile";
import { ExtLink } from "./section";

/** One experience or project entry: logo and name, period, then details. */
export function EntryItem({ entry }: { entry: Entry }) {
  const name = entry.url ? (
    <ExtLink href={entry.url}>{entry.org}</ExtLink>
  ) : (
    <span>{entry.org}</span>
  );

  return (
    <li className="flex gap-4">
      <div className="w-6 shrink-0 pt-0.5">
        {entry.logo && (
          <img
            src={entry.logo}
            alt=""
            width={24}
            height={24}
            loading="lazy"
            className="h-6 w-6 rounded object-contain"
          />
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-medium">
          {name}
          <span className="font-normal text-muted"> — {entry.title}</span>
        </h3>
        <p className="text-sm text-muted">{entry.period}</p>
        <p className="mt-2 leading-7">{entry.description}</p>
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-muted">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.stack && (
          <p className="mt-2 text-sm text-muted">Stack: {entry.stack}</p>
        )}
      </div>
    </li>
  );
}
