import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { HeaderNav, Footer } from "@/components/ui";

const font = localFont({
  src: [{ path: '../public/fonts/source-code-pro.woff2', style: "normal" }],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "astroom",
  description: "Developer | Creator | System Administrator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        <header className="absolute top-0 inset-x-0 z-20">
          <HeaderNav />
        </header>

        <main>
          {children}
        </main>

        <footer className="fixed bottom-0 inset-x-0 z-20">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
