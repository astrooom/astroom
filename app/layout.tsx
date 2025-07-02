import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://astroom.dev'),
  title: {
    default: "astroom - System Administrator & Full-Stack Developer",
    template: "%s | astroom"
  },
  description: "Results-driven System Administrator and Full-Stack Developer with deep experience in building and maintaining scalable, high-performance infrastructure. Based in Gothenburg, Sweden.",
  keywords: [
    "System Administrator",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Infrastructure",
    "Cloud Computing",
    "Gothenburg",
    "Sweden",
    "astroom",
    "Terminal CV",
    "Interactive Resume"
  ],
  authors: [{ name: "astroom" }],
  creator: "astroom",
  publisher: "astroom",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://astroom.dev',
    title: 'astroom - System Administrator & Full-Stack Developer',
    description: 'Interactive terminal-style CV showcasing expertise in system administration, full-stack development, and infrastructure management.',
    siteName: 'astroom Portfolio',
    images: [
      {
        url: '/astroom_planet.png',
        width: 1200,
        height: 630,
        alt: 'astroom - System Administrator & Developer',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'astroom - System Administrator & Full-Stack Developer',
    description: 'Interactive terminal-style CV showcasing expertise in system administration and development.',
    images: ['/astroom_planet.png'],
    creator: '@astrooom',
  },
  alternates: {
    canonical: 'https://astroom.dev',
  },
  other: {
    'theme-color': '#1a1a1a',
    'color-scheme': 'dark',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "astroom",
  "jobTitle": "System Administrator & Full-Stack Developer",
  "url": "https://astroom.dev",
  "image": "https://astroom.dev/astroom_planet.png",
  "description": "Results-driven System Administrator and Full-Stack Developer with deep experience in building and maintaining scalable, high-performance infrastructure.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gothenburg",
    "addressCountry": "Sweden"
  },
  "knowsAbout": [
    "System Administration",
    "Full-Stack Development",
    "DevOps Engineering",
    "Cloud Infrastructure",
    "Server Management",
    "Web Development",
    "Database Administration",
    "Network Security"
  ],
  "sameAs": [
    "https://github.com/astrooom",
    "https://x.com/astrooom"
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "UltraServers",
      "url": "https://ultraservers.com"
    },
    {
      "@type": "Organization",
      "name": "AB Buddleja"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/astroom_small.png" type="image/png" />
        <link rel="apple-touch-icon" href="/astroom_small.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
