import type { Metadata, Viewport } from "next";
import { profile } from "@/content/profile";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const siteTitle = `${profile.alias} · Portfolio | DevOps & Full-Stack Developer`;
const siteDescription =
  "Portfolio of astroom, a DevOps engineer and full-stack developer in Gothenburg, Sweden, building infrastructure, game and VPS hosting platforms, and web apps.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: siteTitle,
    template: `%s | ${profile.alias} portfolio`,
  },
  description: siteDescription,
  keywords: [
    "astroom",
    "astroom portfolio",
    "astroom.dev",
    "DevOps portfolio",
    "System Administrator",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Infrastructure",
    "Cloud Computing",
    "Gothenburg",
    "Sweden",
    "VPS hosting",
    "Game server hosting",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.alias,
  publisher: profile.alias,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.website,
    title: siteTitle,
    description: siteDescription,
    siteName: profile.alias,
    images: [
      {
        url: "/astroom_planet.png",
        width: 959,
        height: 702,
        alt: `${profile.alias} · Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/astroom_planet.png"],
    creator: profile.xHandle,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/astroom_small.png", type: "image/png" },
    ],
    apple: "/astroom_small.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.website,
  image: `${profile.website}/astroom_planet.png`,
  email: profile.email,
  telephone: profile.phone,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gothenburg",
    addressCountry: "Sweden",
  },
  knowsAbout: [
    "System Administration",
    "Full-Stack Development",
    "DevOps Engineering",
    "Cloud Infrastructure",
    "Server Management",
    "Web Development",
    "Database Administration",
    "Network Security",
  ],
  sameAs: [profile.github, profile.x],
  worksFor: [
    {
      "@type": "Organization",
      name: "ultra.sh",
      url: "https://ultra.sh",
    },
    {
      "@type": "Organization",
      name: "UltraServers",
      url: "https://ultraservers.com",
    },
    {
      "@type": "Organization",
      name: "AB Buddleja",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-bg focus:px-3 focus:py-2 focus:ring-2 focus:ring-fg"
        >
          Skip to content
        </a>
        <main id="main" className="mx-auto max-w-measure px-5 pt-16 sm:px-6 sm:pt-24">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
