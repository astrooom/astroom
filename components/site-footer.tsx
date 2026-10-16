import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto mt-16 max-w-measure border-t border-border px-5 pb-12 pt-8 text-sm text-muted sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <span>
          © {year} {profile.name} · {profile.company.name}
        </span>
        <a href="#top" className="hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
