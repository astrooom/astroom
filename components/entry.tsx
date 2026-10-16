import type { Entry } from "@/content/profile";
import { ExtLink, Row } from "./section";

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-surface">
      <img
        src={src}
        alt={alt}
        width={24}
        height={24}
        loading="lazy"
        className="h-6 w-6 object-contain"
      />
    </span>
  );
}

/**
 * One experience or project entry: period on the left, details on the right.
 */
export function EntryItem({ entry }: { entry: Entry }) {
  const name = entry.url ? (
    <ExtLink href={entry.url}>{entry.org}</ExtLink>
  ) : (
    <span>{entry.org}</span>
  );

  return (
    <li>
      <Row label={entry.period}>
        <div className="flex items-start gap-3">
          {entry.logo && <Logo src={entry.logo} alt="" />}
          <h3 className="font-medium leading-8">
            {name}
            <span className="text-muted"> · </span>
            <span className="font-normal text-muted">{entry.title}</span>
          </h3>
        </div>
        <p className="mt-3 leading-7">{entry.description}</p>
        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="mt-3 space-y-1 pl-4 text-[15px] leading-7 text-muted marker:text-border list-disc">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.stack && (
          <p className="mt-3 font-mono text-xs text-muted">{entry.stack}</p>
        )}
      </Row>
    </li>
  );
}
