import { profile } from "@/content/profile";

const nav = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience", hideOnMobile: true },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-measure items-center justify-between px-5 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2.5 font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          <img
            src="/astroom_small_transparent.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          {profile.alias}
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map((item) => (
              <li
                key={item.href}
                className={item.hideOnMobile ? "hidden sm:block" : undefined}
              >
                <a href={item.href} className="transition-colors hover:text-fg">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
