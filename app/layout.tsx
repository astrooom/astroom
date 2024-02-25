import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import HeaderNav from "@/components/ui/header-nav";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        <header>
          <HeaderNav />
        </header>

        <main className="mt-16">
          {children}
        </main>

      </body>
    </html>
  );
}
