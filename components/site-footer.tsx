import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-measure px-5 pb-12 pt-16 text-sm text-muted sm:px-6">
      © {year} {profile.name} · {profile.company.name}
    </footer>
  );
}
